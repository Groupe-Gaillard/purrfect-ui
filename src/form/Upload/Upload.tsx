import React, { useEffect, useState } from "react";
import {
  FileTrigger as AriaUpload,
  FileTriggerProps as AriaUploadProps,
} from "react-aria-components";
import styled from "styled-components";
import { ButtonProps } from "src/action/Button/Button";
import Button from "src/action/Button/Button";
import { body1, sizing, theme } from "src/guidelines/theme";
import FilesIcon from "src/icons/files";

const StyledUpload = styled(AriaUpload)``;

const Wrapper = styled.div`
  display: flex;
  gap: ${sizing(16)};
`;

const UploadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${sizing(16)};
  justify-content: flex-start;
`;

const PreviewContainer = styled.div`
  margin-top: ${sizing(10)};
  width: 100px;
  height: 100px;
  border-radius: ${theme.borderRadius.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${sizing(16)};
  align-items: center;
  background-color: ${theme.color.gray100};
  position: relative;
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

type FilePreview = {
  name: string;
  previewUrl: string;
};

type UploadProps = AriaUploadProps & {
  label: string;
  buttonProps: ButtonProps;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  showPreview?: boolean;
  maxFiles?: number;
};

const Upload: React.FC<UploadProps> = ({
  showPreview = true,
  maxFiles = 3,
  ...props
}) => {
  const [filePreviews, setFilePreviews] = useState<FilePreview[]>([]);

  useEffect(() => {
    return () => {
      filePreviews.forEach((file) => {
        console.log("file", file);
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

  return (
    <>
      <StyledUpload {...props} onSelect={handleSelect}>
        <Wrapper>
          {showPreview && filePreviews.length > 0 ? (
            filePreviews.map((file, index) => (
              <PreviewContainer key={index}>
                <PreviewImage src={file.previewUrl} alt="Preview image" />
                <FileName>{file.name}</FileName>
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
              <FileName key={index}>{file.name}</FileName>
            ))}
        </Wrapper>
        <UploadButtonContainer>
          <Button {...props.buttonProps}>
            {props.leadingIcon && <span>{props.leadingIcon}</span>}
            {props.label}
            {props.trailingIcon && <span>{props.trailingIcon}</span>}
          </Button>
        </UploadButtonContainer>
      </StyledUpload>
    </>
  );
};

export default Upload;
