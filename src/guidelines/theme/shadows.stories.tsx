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

const Wrapper = styled.div`
  align-items: center;
  background-color: ${theme.color.gray100};
  border-radius: ${theme.borderRadius.large};
  display: flex;
  flex-wrap: wrap;
  gap: ${sizing(16)};
  height: 300px;
  justify-content: center;
  padding: ${sizing(16)};
`;

const Square = styled.div<{
  bgColor: string | undefined;
  textColor: string;
}>`
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  display: flex;
  font-family: sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  height: 150px;
  justify-content: center;
  padding: ${sizing(16)};
  text-transform: uppercase;
  width: 150px;
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
          <Title style={{ width: "100%" }}>Shadows</Title>
          <Wrapper>
            {Object.entries(theme.shadows).map(([key, value]) => (
              <Square
                key={key}
                bgColor={theme.color.success600}
                textColor={theme.color.text[getContrastYIQ(value)]}
                style={{
                  boxShadow: theme.shadows[key] ?? theme.shadows.default,
                }}
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
