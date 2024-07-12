import { Meta } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { heading1, sizing, theme } from "src/guidelines/theme";
import TopBar from "./TopBar";

const meta: Meta<typeof TopBar> = {
  component: TopBar,
  title: "Display/TopBar",
  argTypes: {
    gap: {
      control: "select",
      options: ["small", "medium", "large", "xlarge", "xxlarge"],
    },
    spacing: {
      control: "select",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-around",
        "space-evenly",
        "space-between",
      ],
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

const Section = styled.div`
  border: 1px solid ${theme.color.primary100};
  padding: ${sizing(16)};
  border-radius: ${theme.borderRadius.default};
  text-align: center;
  color: ${theme.color.primary700};
  background-color: ${theme.color.primary100};
`;

export const Demo = {
  args: {
    leftFlex: 2,
    centerFlex: 1,
    rightFlex: 1,
    leftSection: <Section>LEFT</Section>,
    centerSection: <Section>CENTER</Section>,
    rightSection: <Section>RIGHT</Section>,
    ariaLabel: "Top Bar",
    gap: "xxlarge",
    spacing: "flex-start",
  },
  argTypes: {
    leftFlex: {
      control: { type: "number", min: 1, max: 3 },
    },
    centerFlex: {
      control: { type: "number", min: 1, max: 3 },
    },
    rightFlex: {
      control: { type: "number", min: 1, max: 3 },
    },
    spacing: {
      control: { type: "text" },
      description: "Spacing around items",
    },
    gap: {
      control: { type: "text" },
      description: "Gap between items",
    },
    ariaLabel: {
      control: { type: "text" },
      description: "Accessibility label",
    },
  },

  render: (args) => (
    <>
      <Title>TopBar Demo</Title>
      <TopBar {...args} />
    </>
  ),
};

export const oneChild = {
  render: () => (
    <>
      <Title>TopBar One Child</Title>
      <TopBar
        aria-label="Top Bar"
        spacing="start"
        leftWidth="33%"
        leftSection={<Section>LEFT</Section>}
      />
    </>
  ),
};

export const twoChildren = {
  render: () => (
    <>
      <Title>TopBar Two children</Title>
      <TopBar
        aria-label="Top Bar"
        gap="small"
        leftFlex={1}
        centerFlex={2}
        leftSection={<Section>LEFT</Section>}
        centerSection={<Section>CENTER</Section>}
      />
    </>
  ),
};
