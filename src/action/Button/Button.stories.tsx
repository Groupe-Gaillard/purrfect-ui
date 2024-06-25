import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import styled from "styled-components";
import { heading1, theme } from "src/guidelines/theme";
import Button, { Kind, Size, Variant } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Demo: Story = {
  args: {
    children: "Meow",
    onPress: fn(),
    isDisabled: false,
    kind: "normal",
    variant: "primary",
    size: "small",
  },
};

export const BaseLongName: Story = {
  args: {
    ...Demo.args,
    children: "Meow it's a long button to show you I can meow",
  },
};
export const Disable: Story = {
  args: {
    children: "Meow",
    onPress: fn(),
    isDisabled: true,
  },
};

const Container = styled.div`
  width: 524px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.p<{ color: Variant }>`
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  ${heading1};
  text-transform: capitalize;
  color: ${({ color }) => theme.color[color]};
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(4, 125px);
  justify-items: center;
  gap: 8px;
`;

export const ButtonList = () => {
  const buttonVariants: Array<Variant> = [
    "primary",
    "success",
    "warning",
    "danger",
    "info",
    "gray",
  ];
  const buttonSizes: Array<Size> = ["small", "normal", "large"];
  const buttonKind: Array<Kind> = ["normal", "outlined"];
  const buttonState: Array<boolean> = [false, true];

  return (
    <Container>
      {buttonVariants.map((oneVariant) => {
        return (
          <Block key={oneVariant}>
            <Title color={oneVariant}>{oneVariant}</Title>
            <Grid>
              {buttonSizes.map((oneSize) => {
                return buttonKind.map((oneKind) => {
                  return buttonState.map((oneState) => (
                    <Button
                      key={oneSize}
                      kind={oneKind}
                      variant={oneVariant}
                      size={oneSize}
                      isDisabled={oneState}
                      onPress={fn()}
                    >
                      Meow
                    </Button>
                  ));
                });
              })}
            </Grid>
          </Block>
        );
      })}
    </Container>
  );
};
