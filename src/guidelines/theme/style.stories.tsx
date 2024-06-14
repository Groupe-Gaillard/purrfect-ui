import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { heading1, theme } from ".";

const meta: Meta = {};

export default meta;

type Story = StoryObj;

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
  font-family: sans-serif;
  font-size: 0%.875rem;
  background-color: ${({ bgColor }) => bgColor};
`;

function getContrastYIQ(hexcolor: string): string {
  const r = parseInt(hexcolor.substring(1, 3), 16);
  const g = parseInt(hexcolor.substring(3, 5), 16);
  const b = parseInt(hexcolor.substring(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "dark" : "light";
}

const Title = styled.h1`
  ${heading1};
`;

export const Colors: Story = {
  render: () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <Title style={{ width: "100%" }}>Colors</Title>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.entries(theme.color)
              .filter(([key]) => key.startsWith("primary"))
              .map(([key, value], index: number) => (
                <>
                  {console.log(value, key, getContrastYIQ(value))}
                  <Rectangle
                    bgColor={theme.color[key]}
                    textColor={theme.color.text[getContrastYIQ(value)]}
                    style={{
                      order: index === 0 ? 5 : index >= 5 ? index + 1 : index,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: index === 0 ? "bold" : "normal",
                        fontSize: index === 0 ? "1.125rem" : "0.825rem",
                        textDecoration: index === 0 ? "underline" : "none",
                      }}
                    >
                      {key}
                    </div>
                    <div style={{ marginLeft: "auto" }}>{value}</div>
                  </Rectangle>
                </>
              ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.entries(theme.color)
              .filter(([key]) => key.startsWith("success"))
              .map(([key, value], index: number) => (
                <>
                  <Rectangle
                    bgColor={theme.color[key]}
                    textColor={theme.color.text[getContrastYIQ(value)]}
                    style={{
                      order: index === 0 ? 5 : index >= 5 ? index + 1 : index,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: index === 0 ? "bold" : "normal",
                        fontSize: index === 0 ? "1.125rem" : "0.825rem",
                        textDecoration: index === 0 ? "underline" : "none",
                      }}
                    >
                      {key}
                    </div>
                    <div style={{ marginLeft: "auto" }}>{value}</div>
                  </Rectangle>
                </>
              ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.entries(theme.color)
              .filter(([key]) => key.startsWith("danger"))
              .map(([key, value], index: number) => (
                <>
                  {console.log(value, key, getContrastYIQ(value))}
                  <Rectangle
                    bgColor={theme.color[key]}
                    textColor={theme.color.text[getContrastYIQ(value)]}
                    style={{
                      order: index === 0 ? 5 : index >= 5 ? index + 1 : index,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: index === 0 ? "bold" : "normal",
                        fontSize: index === 0 ? "1.125rem" : "0.825rem",
                        textDecoration: index === 0 ? "underline" : "none",
                      }}
                    >
                      {key}
                    </div>
                    <div style={{ marginLeft: "auto" }}>{value}</div>
                  </Rectangle>
                </>
              ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.entries(theme.color)
              .filter(([key]) => key.startsWith("warning"))
              .map(([key, value], index: number) => (
                <>
                  {console.log(value, key, getContrastYIQ(value))}
                  <Rectangle
                    bgColor={theme.color[key]}
                    textColor={theme.color.text[getContrastYIQ(value)]}
                    style={{
                      order: index === 0 ? 5 : index >= 5 ? index + 1 : index,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: index === 0 ? "bold" : "normal",
                        fontSize: index === 0 ? "1.125rem" : "0.825rem",
                        textDecoration: index === 0 ? "underline" : "none",
                      }}
                    >
                      {key}
                    </div>
                    <div style={{ marginLeft: "auto" }}>{value}</div>
                  </Rectangle>
                </>
              ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.entries(theme.color)
              .filter(([key]) => key.startsWith("gray"))
              .map(([key, value], index: number) => (
                <>
                  {console.log(value, key, getContrastYIQ(value))}
                  <Rectangle
                    bgColor={theme.color[key]}
                    textColor={theme.color.text[getContrastYIQ(value)]}
                    style={{
                      order: index === 0 ? 5 : index >= 5 ? index + 1 : index,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: index === 0 ? "bold" : "normal",
                        fontSize: index === 0 ? "1.125rem" : "0.825rem",
                        textDecoration: index === 0 ? "underline" : "none",
                      }}
                    >
                      {key}
                    </div>
                    <div style={{ marginLeft: "auto" }}>{value}</div>
                  </Rectangle>
                </>
              ))}
          </div>
        </div>
      </>
    );
  },
};
