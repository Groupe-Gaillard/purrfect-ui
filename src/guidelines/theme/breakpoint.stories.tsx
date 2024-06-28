import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import {
  breakpoints,
  getContrastYIQ,
  sizing,
  theme,
} from "src/guidelines/theme/index";
import { body1, heading1 } from "src/guidelines/theme/typographies";

const meta: Meta = {};

export default meta;

type Story = StoryObj;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

const StyledDiv = styled.div`
  padding: ${sizing(16)};
  border: 1px solid ${theme.color.gray};
  background-color: white;
  ${body1}

  @media ${breakpoints.minWidth.xs} {
    background-color: #800080;
    color: ${theme.color.text[getContrastYIQ("#800080")]};
  }

  @media ${breakpoints.minWidth.sm} {
    background-color: #0000ff;
    color: ${theme.color.text[getContrastYIQ("#0000ff")]};
  }

  @media ${breakpoints.minWidth.md} {
    background-color: #008000;
    color: ${theme.color.text[getContrastYIQ("#008000")]};
  }

  @media ${breakpoints.minWidth.lg} {
    background-color: #ffff00;
    color: ${theme.color.text[getContrastYIQ("#ffff00")]};
  }

  @media ${breakpoints.minWidth.xl} {
    background-color: #ffa500;
    color: ${theme.color.text[getContrastYIQ("#ffa500")]};
  }

  @media ${breakpoints.minWidth.xxl} {
    background-color: #ff0000;
    color: ${theme.color.text[getContrastYIQ("#ff0000")]};
  }
`;

export const Breakpoint: Story = {
  render: () => {
    return (
      <>
        <Title style={{ width: "100%" }}>Breakpoint</Title>
        <StyledDiv>
          Before 480 = White
          <br />
          xs: 480 = Purple
          <br />
          sm: 576 = Blue
          <br />
          md: 768 = Green
          <br />
          lg: 992 = Yellow
          <br />
          xl: 1200 = Orange
          <br />
          xxl: 1600 = Red
          <br />
          <p>
            Use : <code>@media {"${breakpoints.minWidth.md}"}</code>
            <br />
            Result : <code>@media {breakpoints.minWidth.md}</code>
          </p>
        </StyledDiv>
      </>
    );
  },
};
