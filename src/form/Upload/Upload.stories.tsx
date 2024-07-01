import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Upload from "src/form/Upload/Upload";
import { heading1, sizing } from "src/guidelines/theme/index";
import UploadIcon from "src/icons/upload";

const meta: Meta<typeof Upload> = {
  component: Upload,
};

export default meta;
type Story = StoryObj<typeof Upload>;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

export const upload: Story = {
  args: {
    label: "Upload File",
    trailingIcon: <UploadIcon />,
  },
  render: (args) => (
    <>
      <Title>Upload single file with preview</Title>
      <Upload {...args} />
    </>
  ),
};

export const uploadNoPreview: Story = {
  args: {
    label: "Upload",
    trailingIcon: <UploadIcon />,
    showPreview: false,
  },
  render: (args) => (
    <>
      <Title>Upload single file without preview</Title>
      <Upload {...args} />
    </>
  ),
};

export const MultiUpload: Story = {
  args: {
    label: "Upload",
    allowsMultiple: true,
    trailingIcon: <UploadIcon />,
  },
  render: (args) => (
    <>
      <Title>Upload multiple files with preview</Title>
      <Upload {...args} />
    </>
  ),
};

export const MultiUploadNoPreview: Story = {
  args: {
    label: "Upload",
    allowsMultiple: true,
    showPreview: false,
    trailingIcon: <UploadIcon />,
  },
  render: (args) => (
    <>
      <Title>Upload multiple files without preview</Title>
      <Upload {...args} />
    </>
  ),
};

export const uploadTypeRestriction: Story = {
  args: {
    label: "Upload",
    showPreview: false,
    acceptedFileTypes: [".txt"],
    trailingIcon: <UploadIcon />,
  },
  render: (args) => (
    <>
      <Title>Upload image [".txt"] file limitation</Title>
      <Upload {...args} />
    </>
  ),
};
