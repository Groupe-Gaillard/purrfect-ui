import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("Should render the checkbox", () => {
    render(
      <Checkbox label="Meow" isDisabled={false} defaultSelected={false} />,
    );
    const checkbox = screen.getByText("Meow");

    expect(checkbox).toBeInTheDocument();
  });

  it("should be rendered and initially unselected", () => {
    render(<Checkbox label="Meow" />);
    const checkbox = screen.getByLabelText("Meow");

    expect(checkbox).toBeInTheDocument();
    expect((checkbox as HTMLInputElement).checked).toBeFalsy();
  });

  it("should be selectable and maintain its state", () => {
    render(<Checkbox label="Meow" />);
    const checkbox = screen.getByLabelText("Meow");

    userEvent.click(checkbox);

    expect(checkbox as HTMLInputElement).toBeTruthy();
  });
});
