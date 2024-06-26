import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import Switch from "src/form/Switch/Switch";

describe("Switch", () => {
  it("Should render the switch", () => {
    render(<Switch label="Meow" />);
    const styledSwitch = screen.getByRole("switch");

    expect(styledSwitch).toBeInTheDocument();
  });

  it("should be selectable and maintain its state", () => {
    render(<Switch label="Meow" />);
    const styledSwitch = screen.getByRole("switch");

    userEvent.click(styledSwitch);

    expect(styledSwitch as HTMLInputElement).toBeTruthy();
  });

  it("should be disabled when isDisabled is true", () => {
    render(<Switch label="Meow" isDisabled />);
    const styledSwitch = screen.getByRole("switch");

    expect(styledSwitch).toBeDisabled();
  });
});
