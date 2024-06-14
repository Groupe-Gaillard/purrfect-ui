import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { heading1, theme } from "./index.ts";

const meta: Meta = {};

export default meta;

type Story = StoryObj;

const Title = styled.h1`
  ${heading1};
`;

const Square = styled.div<{
  bgColor: string;
  textColor: string;
  size?: "small" | "big";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  text-transform: uppercase;
  padding: ${theme.spacing(16)};
  color: ${({ textColor }) => textColor};
  font-family: sans-serif;
  font-size: 0%.875rem;
  background-color: ${({ bgColor }) => bgColor};
  font-weight: bold;
`;

function getContrastYIQ(
  hexcolor: string | { light: string; dark: string; white: string },
): string {
  let colorString: string;
  if (typeof hexcolor === "string") {
    colorString = hexcolor;
  } else {
    colorString = hexcolor.light || hexcolor.dark || hexcolor.white;

    if (!colorString) {
      console.error("getContrastYIQ: No valid color property found in object.");
    }
  }

  const r = parseInt(colorString.substring(1, 3), 16);
  const g = parseInt(colorString.substring(3, 5), 16);
  const b = parseInt(colorString.substring(5, 7), 16);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? "dark" : "light";
}

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
