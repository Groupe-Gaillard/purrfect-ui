import React, { useEffect, useState } from "react";
import {
  FileTrigger as AriaUpload,
  FileTriggerProps as AriaUploadProps,
} from "react-aria-components";
import styled from "styled-components";
import { ButtonProps } from "src/action/Button/Button";
import Button from "src/action/Button/Button";
import { body1, sizing, theme } from "src/guidelines/theme";
import DeleteIcon from "src/icons/delete";
import FilesIcon from "src/icons/files";

const StyledUpload = styled(AriaUpload)``;

const Wrapper = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) =>
    props.direction === "column" ? "flex-start" : "center"};
  gap: ${sizing(16)};
`;

const UploadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${sizing(16)} 0;
  justify-content: flex-start;
  width: ${sizing(200)};
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const StyledIconContainer = styled.span`
  margin-top: 2px;
`;

const PreviewContainer = styled.div`
  width: ${sizing(200)};
  height: ${sizing(200)};
  border-radius: ${theme.borderRadius.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${sizing(16)};
  align-items: center;
  background-color: ${theme.color.gray100};
  border: 1px solid ${theme.color.gray100};
  overflow: hidden;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const FileName = styled.span`
  ${body1};
  text-align: center;
  max-height: 40px;
  display: block;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: ${sizing(10)};
`;

type FilePreview = {
  name: string;
  previewUrl: string;
};

type UploadProps = AriaUploadProps & {
  label: string;
  buttonProps: ButtonProps;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  maxFiles?: number;
  showPreview?: boolean;
};

const Upload: React.FC<UploadProps> = ({
  showPreview = true,
  maxFiles = 5,
  ...props
}) => {
  const [filePreviews, setFilePreviews] = useState<FilePreview[]>([]);
  const flexDirection = showPreview ? "row" : "column";

  useEffect(() => {
    return () => {
      filePreviews.forEach((file) => {
        URL.revokeObjectURL(file.previewUrl);
      });
    };
  }, [filePreviews]);

  const handleSelect = (files: FileList | null) => {
    if (files) {
      const filteredFiles = Array.from(files).filter((file) => {
        return props.acceptedFileTypes
          ? props.acceptedFileTypes.includes(file.type)
          : true;
      });

      const limitedFiles = filteredFiles.slice(0, maxFiles);

      const previews = limitedFiles.map((file) => ({
        name: file.name,
        previewUrl: URL.createObjectURL(file),
      }));
      setFilePreviews(previews);
    }
  };

  const handleDelete = (fileToDelete: FilePreview) => {
    const updatedFilePreviews = filePreviews.filter(
      (file) => file.name !== fileToDelete.name,
    );
    setFilePreviews(updatedFilePreviews);

    if (fileToDelete.previewUrl) {
      URL.revokeObjectURL(fileToDelete.previewUrl);
    }
  };

  return (
    <>
      <StyledUpload {...props} onSelect={handleSelect}>
        <UploadButtonContainer>
          <StyledButton {...props.buttonProps}>
            {props.leadingIcon && (
              <StyledIconContainer>{props.leadingIcon}</StyledIconContainer>
            )}
            {props.label}
            {props.trailingIcon && (
              <StyledIconContainer>{props.trailingIcon}</StyledIconContainer>
            )}
          </StyledButton>
        </UploadButtonContainer>
        <Wrapper direction={flexDirection}>
          {showPreview && filePreviews.length > 0 ? (
            filePreviews.map((file) => (
              <PreviewContainer key={file.name}>
                <PreviewImage src={file.previewUrl} alt="Preview image" />
                <TextContainer>
                  <FileName>{file.name}</FileName>
                  <DeleteIcon onClick={() => handleDelete(file)} />
                </TextContainer>
              </PreviewContainer>
            ))
          ) : showPreview ? (
            <PreviewContainer>
              <FilesIcon opacity={0.5} />
            </PreviewContainer>
          ) : null}
          {!showPreview &&
            filePreviews.length > 0 &&
            filePreviews.map((file) => (
              <React.Fragment key={file.name}>
                <TextContainer>
                  <FileName>{file.name}</FileName>
                  <DeleteIcon onClick={() => handleDelete(file)} />
                </TextContainer>
              </React.Fragment>
            ))}
        </Wrapper>
      </StyledUpload>
    </>
  );
};

export default Upload;
