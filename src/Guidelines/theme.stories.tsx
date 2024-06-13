import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { theme } from "./theme";

const Circle = styled.div<{ bgColor: string; textColor: string }>`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
`;

const meta: Meta = {};

export default meta;

type Story = StoryObj;

export const Colors: Story = {
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        <Circle
          bgColor={theme.color.primary100}
          textColor={theme.color.primary}
        >
          {theme.color.primary100}
        </Circle>
        <Circle bgColor={theme.color.primary} textColor={theme.color.primary} />
        <Circle
          bgColor={theme.color.primary900}
          textColor={theme.color.primary}
        />
      </div>
    );
  },
};
