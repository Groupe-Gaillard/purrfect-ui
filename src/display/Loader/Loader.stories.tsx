import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Loader from "src/display/Loader/Loader";
import { sizing } from "src/guidelines/theme";
import { heading1 } from "src/guidelines/theme/typographies";

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: "Display/Loader",
};

export default meta;
type Story = StoryObj<typeof Loader>;

const Title = styled.p`
  ${heading1};
  margin: ${sizing(16, 0)};
`;

export const LoaderBase: Story = {
  args: {},
  render: (args) => (
    <>
      <Title>Divider</Title>
      <Loader {...args} />
    </>
  ),
};
