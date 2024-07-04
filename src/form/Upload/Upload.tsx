import React, { useEffect, useState } from "react";
import {
  FileTrigger as AriaUpload,
  FileTriggerProps as AriaUploadProps,
} from "react-aria-components";
import styled from "styled-components";
import Button, { ButtonProps } from "src/action/Button/Button";
import { body1, sizing, theme } from "src/guidelines/theme";
import DeleteIcon from "src/icons/delete";
import FilesIcon from "src/icons/files";
import { truncateFileNameWithExtension } from "src/utils/utils";

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

const PreviewContainer = styled.div`
  width: ${sizing(120)};
  height: ${sizing(80)};
  border-radius: ${theme.borderRadius.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${sizing(32)};
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
  maxFiles?: number;
  showPreview?: boolean;
  kind?: ButtonProps["kind"];
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  leadingIcon?: ButtonProps["leadingIcon"];
  trailingIcon?: ButtonProps["trailingIcon"];
  onPress?: ButtonProps["onPress"];
};

const Upload = ({
  showPreview = true,
  maxFiles = 5,
  ...props
}: UploadProps): JSX.Element => {
  const [filePreviews, setFilePreviews] = useState<FilePreview[]>([]);
  const flexDirection = showPreview ? "row" : "column";
  const maxDisplayNameLength = 10;

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
        name: truncateFileNameWithExtension(file.name, maxDisplayNameLength),
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
          <StyledButton
            kind={props.kind}
            variant={props.variant}
            size={props.size}
            leadingIcon={props.leadingIcon}
            trailingIcon={props.trailingIcon}
          >
            {props.label}
          </StyledButton>
        </UploadButtonContainer>
        <Wrapper direction={flexDirection}>
          {showPreview && filePreviews.length > 0 ? (
            filePreviews.map((file, index) => (
              <PreviewContainer key={`${file.name}-${index}`}>
                <PreviewImage src={file.previewUrl} alt="File preview" />
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
            filePreviews.map((file, index) => (
              <React.Fragment key={`${file.name}-${index}`}>
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
export type { UploadProps };
