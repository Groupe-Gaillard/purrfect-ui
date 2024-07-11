import { Meta } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import TextField from "src/form/TextField/TextField";
import { heading1, sizing } from "src/guidelines/theme";
import TopBar from "./TopBar";

const meta: Meta<typeof TopBar> = {
  component: TopBar,
  title: "Display/TopBar",
  argTypes: {
    gap: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    spacing: {
      control: "select",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
      ],
    },
    leftFlex: { control: "number" },
    centerFlex: { control: "number" },
    rightFlex: { control: "number" },
  },
};

export default meta;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

export const Base = {
  render: () => (
    <>
      <Title>TopBar</Title>
      <TopBar
        aria-label="Actions"
        gap="small"
        spacing="flex-start"
        leftFlex={2}
        centerFlex={1}
        rightFlex={1}
        leftChildren={<TextField placeholder="left" />}
        centerChildren={<TextField placeholder="center" />}
        rightChildren={<TextField placeholder="right" />}
      />
    </>
  ),
};
export const twoChildren = {
  render: () => (
    <>
      <Title>TopBar</Title>
      <TopBar
        aria-label="Actions"
        gap="small"
        spacing="center"
        leftFlex={1}
        centerFlex={3}
        leftChildren={<TextField placeholder="left" />}
        centerChildren={<TextField placeholder="center" isDisabled />}
      />
    </>
  ),
};
export const oneChild = {
  render: () => (
    <>
      <Title>TopBar</Title>
      <TopBar
        aria-label="Actions"
        gap="medium"
        spacing="center"
        leftFlex={3}
        leftChildren={<TextField placeholder="left" />}
      />
    </>
  ),
};
