import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { heading1, theme } from "./theme";

const Rectangle = styled.div<{
  bgColor: string;
  textColor: string;
  size?: "small" | "big";
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 30px;
  width: 250px;
  padding: ${theme.spacing(16)};
  color: ${({ textColor }) => textColor};
  background-color: ${({ bgColor }) => bgColor};
`;

function getContrastYIQ(hexcolor: string): string {
  const r = parseInt(hexcolor.substring(1, 3), 16);
  const g = parseInt(hexcolor.substring(3, 5), 16);
  const b = parseInt(hexcolor.substring(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "dark" : "light";
}

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
        <div>
          {Object.entries(theme.color)
            .filter(([key]) => key.startsWith("primary")) // Filter primary shades
            .map(([key, value]) => (
              <>
                {console.log(value, key, getContrastYIQ(value))}
                <Rectangle
                  bgColor={theme.color[key]}
                  textColor={theme.color.text[getContrastYIQ(value)]}
                >
                  <div>{key}</div>
                  <div style={{ marginLeft: "auto" }}>{value}</div>
                </Rectangle>
              </>
            ))}
        </div>
        <div>
          {Object.entries(theme.color)
            .filter(([key]) => key.startsWith("success")) // Filter primary shades
            .map(([key, value]) => (
              <>
                {console.log(value, key, getContrastYIQ(value))}
                <Rectangle
                  bgColor={theme.color[key]}
                  textColor={theme.color.text[getContrastYIQ(value)]}
                >
                  <div>{key}</div>
                  <div style={{ marginLeft: "auto" }}>{value}</div>
                </Rectangle>
              </>
            ))}
        </div>
        <div>
          {Object.entries(theme.color)
            .filter(([key]) => key.startsWith("danger")) // Filter primary shades
            .map(([key, value]) => (
              <>
                {console.log(value, key, getContrastYIQ(value))}
                <Rectangle
                  bgColor={theme.color[key]}
                  textColor={theme.color.text[getContrastYIQ(value)]}
                >
                  <div>{key}</div>
                  <div style={{ marginLeft: "auto" }}>{value}</div>
                </Rectangle>
              </>
            ))}
        </div>
        <div>
          {Object.entries(theme.color)
            .filter(([key]) => key.startsWith("warning")) // Filter primary shades
            .map(([key, value]) => (
              <>
                {console.log(value, key, getContrastYIQ(value))}
                <Rectangle
                  bgColor={theme.color[key]}
                  textColor={theme.color.text[getContrastYIQ(value)]}
                >
                  <div>{key}</div>
                  <div style={{ marginLeft: "auto" }}>{value}</div>
                </Rectangle>
              </>
            ))}
        </div>
        <div>
          {Object.entries(theme.color)
            .filter(([key]) => key.startsWith("gray")) // Filter primary shades
            .map(([key, value]) => (
              <>
                {console.log(value, key, getContrastYIQ(value))}
                <Rectangle
                  bgColor={theme.color[key]}
                  textColor={theme.color.text[getContrastYIQ(value)]}
                >
                  <div>{key}</div>
                  <div style={{ marginLeft: "auto" }}>{value}</div>
                </Rectangle>
              </>
            ))}
        </div>
      </div>
    );
  },
};

// const Rectangle = styled.div<{
//   bgColor: string;
//   textColor: string;
//   size?: "small" | "big";
// }>`
//   height: ${({ size }) => (size === "big" ? "100px" : "50px")};
//   width: 250px;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   background-color: ${({ bgColor }) => bgColor};
//   color: ${({ textColor }) => textColor};
// `;

const Title = styled.h1`
  ${heading1};
`;

export const Typography: Story = {
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        <Title>Meow</Title>
      </div>
    );
  },
};
