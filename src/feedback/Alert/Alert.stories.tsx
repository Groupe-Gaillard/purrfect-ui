import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Alert, {
  alertKindValues,
  alertSeverityValues,
} from "src/feedback/Alert/Alert";
import { Title, Title2 } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof Alert> = {
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AlertDemo: Story = {
  args: {
    severity: "info",
    kind: "normal",
    closeable: false,
    children: "Message",
  },
  argTypes: {
    severity: {
      options: alertSeverityValues,
      mapping: { alertSeverityValues },
      control: { type: "select" },
      description: "",
    },
    kind: {
      options: alertKindValues,
      mapping: { alertKindValues },
      control: { type: "select" },
      description: "",
    },
  },
};

export const AlertList = () => {
  return (
    <FlexContainer>
      <Title>Alert</Title>
      {alertKindValues.map((kind) => (
        <>
          <Title2>{kind}</Title2>
          <FlexContainer>
            {alertSeverityValues.map((severity) => (
              <Alert
                severity={severity}
                kind={kind}
                key={`${severity}-${kind}`}
              >
                {`This is a message with severity: ${severity}`}
              </Alert>
            ))}
          </FlexContainer>
        </>
      ))}
    </FlexContainer>
  );
};
