import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { getContrastYIQ, sizing, theme } from "src/guidelines/theme/index";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta = {};

export default meta;

type Story = StoryObj;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizing(16)};
`;

const Square = styled.div<{
  textColor: string;
  shadow: string;
}>`
  align-items: center;
  display: flex;
  font-family: sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  height: 150px;
  justify-content: center;
  padding: ${sizing(16)};
  text-transform: uppercase;
  width: 150px;
  box-shadow: ${({ shadow }) => shadow ?? theme.shadows.base};
  border: 1px solid ${theme.color.gray100};
`;

export const Shadows: Story = {
  render: () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Title>Shadows</Title>
          <Wrapper>
            {Object.entries(theme.shadows).map(([key, value]) => (
              <Square
                key={key}
                textColor={theme.color.text[getContrastYIQ(value)]}
                shadow={value}
              >
                {key}
              </Square>
            ))}
          </Wrapper>
        </div>
      </>
    );
  },
};
