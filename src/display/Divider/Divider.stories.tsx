import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled, { css } from "styled-components";
import Divider from "src/display/Divider/Divider";
import { body1 } from "src/guidelines/theme";
import { theme } from "src/guidelines/theme";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof Divider> = {
  component: Divider,
};

export default meta;

type Story = StoryObj<typeof Divider>;

const StyleText = styled.p`
  ${body1};
  font-size: ${theme.typographies.fontSize.sm};
`;

type Orientation = "horizontal" | "vertical";

const divContainer = (orientation?: Orientation) => {
  switch (orientation) {
    case "horizontal":
      return css`
        display: flex;
        flex-direction: column;
      `;
    case "vertical":
    default:
      return css`
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        height: 40px;
        align-items: center;
      `;
  }
};

const StyledDivContainer = styled.div<{ orientation?: Orientation }>`
  ${({ orientation }) => css`
    ${divContainer(orientation)}
  `}
`;

const orientationArray = ["horizontal", "vertical"];

export const dividerBase: Story = {
  args: {
    className: "",
    orientation: "horizontal",
  },
  argTypes: {
    orientation: {
      options: orientationArray,
      mapping: { orientationArray },
      control: { type: "select" },
      description: "Display horizontaly or verticaly",
    },
  },

  render: (args) => (
    <>
      <Title>Divider</Title>
      <StyledDivContainer orientation={args.orientation}>
        <StyleText>A little text before</StyleText>
        <Divider {...args} />
        <StyleText>A little text after</StyleText>
      </StyledDivContainer>
    </>
  ),
};
