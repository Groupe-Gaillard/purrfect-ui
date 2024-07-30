import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Link from "src/action/Link/Link";
import Accordion from "src/display/Accordion/Accordion";
import { body1 } from "src/guidelines/theme";
import { Title } from "src/utils/StorybookComponents/Titles";
import { sizing } from "src/utils/utils";

const meta: Meta<typeof Accordion> = {
  title: "display/Accordion",
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizing(8)};
  margin: ${sizing(8, 0)};
`;

const StyledParagraph = styled.p`
  ${body1}
  margin: ${sizing(8, 0)};
`;

const standardHtml = (
  <StyledParagraph>
    Line 1: This is the first line of the dropdown content.
    <br />
    Line 2: This is the second line of the dropdown content.
    <br />
    Line 3: This is the third line of the dropdown content.
    <br />
    Line 4: This is the fourth line of the dropdown content.
    <br />
    Line 5: This is the fifth line of the dropdown content.
  </StyledParagraph>
);

const linkHtml = (
  <StyledContainer>
    <Link href="https://www.google.com">Google</Link>
    <Link href="https://www.facebook.com">Facebook</Link>
    <Link href="https://www.twitter.com">Twitter</Link>
  </StyledContainer>
);

export const Demo: Story = {
  args: {
    title: "Accordion Title",
    className: "custom-class",
    children: standardHtml,
  },
  argTypes: {
    className: {
      control: {
        type: "text",
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
  },

  render: (args) => {
    return (
      <>
        <Title>Demo</Title>
        <Accordion {...args} />
      </>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    return (
      <>
        <Title>Multiple Accordions</Title>
        <Accordion title="Accordion 3">{linkHtml}</Accordion>
        <Accordion title="Accordion 3">{standardHtml}</Accordion>
        <Accordion title="Accordion 3">{linkHtml}</Accordion>
      </>
    );
  },
};
