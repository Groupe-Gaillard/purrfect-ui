import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { getContrastYIQ, sizing, theme } from "./index";
import { heading1 } from "./typographies";

const meta: Meta = {};

export default meta;

type Story = StoryObj;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

const Square = styled.div<{
  bgColor: string | undefined;
  textColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  text-transform: uppercase;
  padding: ${sizing(16)};
  color: ${({ textColor }) => textColor};
  font-family: sans-serif;
  font-size: 0.875rem;
  background-color: ${({ bgColor }) => bgColor};
  font-weight: bold;
`;

export const Borders: Story = {
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
          <Title style={{ width: "100%" }}>Border Radius</Title>
          {Object.entries(theme.borderRadius).map(([key, value]) => (
            <Square
              key={key}
              bgColor={theme.color.primary300}
              textColor={theme.color.text[getContrastYIQ(value)]}
              style={{
                borderRadius:
                  theme.borderRadius[key] ?? theme.borderRadius.default,
              }}
            >
              {key}
            </Square>
          ))}
        </div>
      </>
    );
  },
};
