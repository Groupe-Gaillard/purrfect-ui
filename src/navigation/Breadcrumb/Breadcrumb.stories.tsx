import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { heading1, sizing } from "src/guidelines/theme";
import Breadcrumb from "src/navigation/Breadcrumb/Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

export const Demo: Story = {
  args: {},
  argTypes: {},
  render: () => (
    <>
      <Title>Breadcrumb</Title>
      <Breadcrumb />
    </>
  ),
};
