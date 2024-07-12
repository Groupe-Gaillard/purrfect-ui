import { Meta } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { heading1, sizing, theme } from "src/guidelines/theme";
import TopBar, { TopBarProps } from "./TopBar";

const Section = styled.div`
  border: 1px solid ${theme.color.primary100};
  padding: ${sizing(16)};
  border-radius: ${theme.borderRadius.default};
  text-align: center;
  color: ${theme.color.primary700};
  background-color: ${theme.color.primary100};
`;

const meta: Meta<typeof TopBar> = {
  component: TopBar,
  title: "Display/TopBar",
  args: {
    leftFlex: 1,
    centerFlex: 1,
    rightFlex: 1,
    gap: "xxlarge",
    spacing: "flex-start",
    leftSection: <Section>LEFT</Section>,
    centerSection: <Section>CENTER</Section>,
    rightSection: <Section>RIGHT</Section>,
  },
  argTypes: {
    gap: {
      control: "select",
      options: ["small", "medium", "large", "xlarge", "xxlarge"],
    },
    spacing: {
      control: "select",
      options: ["start", "center", "end", "around", "evenly", "between"],
    },
    leftFlex: {
      control: { type: "number", min: 1, max: 3 },
    },
    centerFlex: {
      control: { type: "number", min: 1, max: 3 },
    },
    rightFlex: {
      control: { type: "number", min: 1, max: 3 },
    },
  },
};

export default meta;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

export const Demo = {
  render: (args: TopBarProps) => (
    <>
      <Title>TopBar Demo</Title>
      <TopBar {...args} />
    </>
  ),
};

export const oneChildEnd = {
  render: () => (
    <>
      <Title>TopBar One Child at the end</Title>
      <TopBar
        aria-label="Top Bar"
        spacing="end"
        leftWidth="33%"
        leftSection={<Section>LEFT</Section>}
      />
    </>
  ),
};

export const twoChildrenDifferentSizes = {
  render: () => (
    <>
      <Title>TopBar Two children different sizes</Title>
      <TopBar
        aria-label="Top Bar"
        leftFlex={1}
        centerFlex={2}
        leftSection={<Section>LEFT</Section>}
        centerSection={<Section>CENTER</Section>}
      />
    </>
  ),
};

export const SmallGap = {
  render: (args: TopBarProps) => (
    <>
      <Title>TopBar three children smallest gap</Title>
      <TopBar
        {...args}
        leftSection={<Section>LEFT</Section>}
        centerSection={<Section>CENTER</Section>}
        rightSection={<Section>RIGHT</Section>}
      />
    </>
  ),
};

export const BigGap = {
  render: (args: TopBarProps) => (
    <>
      <Title>TopBar three children biggest gap</Title>
      <TopBar
        {...args}
        leftSection={<Section>LEFT</Section>}
        centerSection={<Section>CENTER</Section>}
        rightSection={<Section>RIGHT</Section>}
      />
    </>
  ),
};
