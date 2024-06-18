import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { getContrastYIQ, heading1, spacing, theme } from "./index";

const meta: Meta = {};

export default meta;

type Story = StoryObj;

const Rectangle = styled.div<{
  bgColor: string;
  textColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 30px;
  width: 250px;
  padding: ${spacing(16)};
  color: ${({ textColor }) => textColor};
  font-family: sans-serif;
  font-size: 0%.875rem;
  background-color: ${({ bgColor }) => bgColor};
`;

const Title = styled.h1`
  ${heading1};
`;

export const Colors: Story = {
  render: () => {
    const themeColors = Object.entries(theme.color);
    const primaryColors = themeColors.filter(([key]) =>
      key.startsWith("primary"),
    ) as unknown as Array<string>;
    const successColors = themeColors.filter(([key]) =>
      key.startsWith("success"),
    ) as unknown as Array<string>;
    const dangerColors = themeColors.filter(([key]) =>
      key.startsWith("danger"),
    ) as unknown as Array<string>;
    const warningColors = themeColors.filter(([key]) =>
      key.startsWith("warning"),
    ) as unknown as Array<string>;
    const grayColors = themeColors.filter(([key]) =>
      key.startsWith("gray"),
    ) as unknown as Array<string>;

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
            {primaryColors.map(([key, value], index: number) => (
              <>
                <Rectangle
                  bgColor={value}
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
            {successColors.map(([key, value], index: number) => (
              <>
                <Rectangle
                  bgColor={value}
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
            {dangerColors.map(([key, value], index: number) => (
              <>
                <Rectangle
                  bgColor={value}
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
            {warningColors.map(([key, value], index: number) => (
              <>
                <Rectangle
                  bgColor={value}
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
            {grayColors.map(([key, value], index: number) => (
              <>
                <Rectangle
                  bgColor={value}
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
