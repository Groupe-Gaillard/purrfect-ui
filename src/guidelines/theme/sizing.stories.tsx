import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { body1, heading1, heading2, sizing, theme } from "./index";

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
const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;
const Title2 = styled.h2`
  ${heading2};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;
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
            La fonction sizing est faite pour transformer la mesure en pixel en
            rem. Par défaut, 1rem = 16px
            <br />
            Le rem permet d&apos;avoir des tailles qui s&apos;adaptent par
            rapport à la taille de police définit dans le navigateur.
            <br />
            C&apos;est un plus pour l&apos;accessibilité de la bibliothèque.
          </Body1>
          <Title2>Utilisation sur des padding</Title2>
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
