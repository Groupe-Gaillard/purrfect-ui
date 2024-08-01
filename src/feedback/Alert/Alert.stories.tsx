import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Alert, {
  alertKindValues,
  alertSeverityValues,
} from "src/feedback/Alert/Alert";
import { heading1 } from "src/guidelines/theme";
import { isVowel, ucfirst } from "src/utils/stringHelper";

const meta: Meta<typeof Alert> = {
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

const Title = styled.h1`
  ${heading1};
`;

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
      {alertKindValues.map((kind) => (
        <>
          <Title>{ucfirst(kind)}</Title>
          <FlexContainer>
            {alertSeverityValues.map((severity) => (
              <Alert
                severity={severity}
                kind={kind}
                key={`${severity}-${kind}`}
              >
                {`This ${isVowel(severity.charAt(0)) ? "an" : "a"} ${severity} message`}
              </Alert>
            ))}
          </FlexContainer>
        </>
      ))}
    </FlexContainer>
  );
};
