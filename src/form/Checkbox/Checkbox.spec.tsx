import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("Should render the checkbox", () => {
    render(
      <Checkbox
        label="Meow"
        isDisabled={false}
        value=""
        className=""
        defaultSelected={false}
      />,
    );
    const checkbox = screen.getByText("Meow");

    expect(checkbox).toBeInTheDocument();
  });

  it("Should be clickable", () => {
    const handleClick = vi.fn();
    render(
      <Checkbox
        label="Meow"
        isDisabled={false}
        value=""
        className=""
        defaultSelected={false}
      />,
    );

    const checkbox = screen.getByText("Meow");
    userEvent.click(checkbox);

    expect(handleClick).toHaveBeenCalled();
  });
});
