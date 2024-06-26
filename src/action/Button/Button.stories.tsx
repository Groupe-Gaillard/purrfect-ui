import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import styled from "styled-components";
import Button, { Kind, Size, Variant } from "src/action/Button/Button";
import { heading1, theme } from "src/guidelines/theme";
import Default from "src/icons/default";

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

const Container = styled.div`
  width: 487px;
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
  grid-template-columns: repeat(4, 487px);
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
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                      }}
                      key={`${oneVariant}-${oneSize}-${oneKind}-${oneState ? "enable" : "disable"}`}
                    >
                      <Button
                        kind={oneKind}
                        variant={oneVariant}
                        size={oneSize}
                        isDisabled={oneState}
                        onPress={fn()}
                        leadingIcon={<Default />}
                      >
                        Meow
                      </Button>
                      <Button
                        kind={oneKind}
                        variant={oneVariant}
                        size={oneSize}
                        isDisabled={oneState}
                        onPress={fn()}
                      >
                        Meow
                      </Button>
                      <Button
                        kind={oneKind}
                        variant={oneVariant}
                        size={oneSize}
                        isDisabled={oneState}
                        onPress={fn()}
                        trailingIcon={<Default />}
                      >
                        Meow
                      </Button>
                    </div>
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
