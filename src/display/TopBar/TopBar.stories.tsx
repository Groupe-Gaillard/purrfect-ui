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
};

export default meta;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

export const Demo = {
  args: {
    leftFlex: 1,
    centerFlex: 1,
    rightFlex: 1,
    gap: "xxlarge",
    spacing: "flex-start",
    leftSection: <Section>LEFT</Section>,
    centerSection: <Section>CENTER</Section>,
    rightSection: <Section>RIGHT</Section>,
    ariaLabel: "TopBar Demo",
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
      control: { type: "number", min: 0, max: 3 },
    },
    centerFlex: {
      control: { type: "number", min: 0, max: 3 },
    },
    rightFlex: {
      control: { type: "number", min: 0, max: 3 },
    },
  },
  render: (args: TopBarProps) => (
    <>
      <Title>Demo</Title>
      <TopBar {...args} />
    </>
  ),
};

export const oneChildEnd = {
  args: {
    spacing: "end",
    leftSection: <Section>LEFT</Section>,
    sectionLeftWidth: "33%",
  },
  argTypes: {
    spacing: {
      control: "select",
      options: ["start", "center", "end"],
    },
  },
  render: (args: TopBarProps) => (
    <>
      <Title>One Child at the end</Title>
      <TopBar {...args} />
    </>
  ),
};

export const twoChildrenDifferentSizes = {
  args: {
    centerFlex: 2,
    rightFlex: 1,
    gap: "xxlarge",
    spacing: "flex-start",
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
    centerFlex: {
      control: { type: "number", min: 0, max: 3 },
    },
    rightFlex: {
      control: { type: "number", min: 0, max: 3 },
    },
  },
  render: (args: TopBarProps) => (
    <>
      <Title>Two children different sizes</Title>
      <TopBar {...args} />
    </>
  ),
};

export const BigGap = {
  args: {
    gap: "xxlarge",
    leftSection: <Section>LEFT</Section>,
    centerSection: <Section>CENTER</Section>,
    rightSection: <Section>RIGHT</Section>,
  },
  argTypes: {
    gap: {
      control: "select",
      options: ["small", "medium", "large", "xlarge", "xxlarge"],
    },
  },
  render: (args: TopBarProps) => (
    <>
      <Title>Three children biggest gap</Title>
      <TopBar
        {...args}
        leftSection={<Section>LEFT</Section>}
        centerSection={<Section>CENTER</Section>}
        rightSection={<Section>RIGHT</Section>}
      />
    </>
  ),
};
