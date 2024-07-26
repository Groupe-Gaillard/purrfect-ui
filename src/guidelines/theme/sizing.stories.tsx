import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { body1, sizing, theme } from "src/guidelines/theme/index";
import { Title, Title2 } from "src/utils/StorybookComponents/Titles";

const meta: Meta = {};

export default meta;

type Story = StoryObj;

const RectangleInside = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 250px;
  padding: ${sizing(16)};
  color: ${theme.color.text.white};
  font-family: sans-serif;
  font-size: 0.875rem;
  background-color: ${theme.color.primary};
`;

const RectangleOutside = styled.div<{ paddingSize: number }>`
  border: 1px solid ${theme.color.primary};
  padding: ${({ paddingSize }) => sizing(paddingSize)};
`;

const numbersSizing: number[] = [1, 2, 4, 8, 16];

const Body1 = styled.p`
  ${body1};
  margin: ${sizing(16)} 0 ${sizing(16)};
`;

export const Sizing: Story = {
  render: () => {
    return (
      <>
        <div>
          <Title style={{ width: "100%" }}>Sizing</Title>
          <Body1 style={{ width: "100%" }}>
            The sizing function is designed to convert pixel measurements to
            rem. By default, 1rem = 16px.
            <br />
            Rem allows for font sizes that scale relative to the font size
            defined in the browser.
            <br />
            This is a plus for the accessibility of the library.
          </Body1>
          <Title2>Padding usage</Title2>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            <>
              {numbersSizing.map((number) => (
                <RectangleOutside key={number} paddingSize={number}>
                  <RectangleInside>
                    {number}px : sizing({number}) = {number / 16}rem
                  </RectangleInside>
                </RectangleOutside>
              ))}
            </>
          </div>
        </div>
      </>
    );
  },
};
