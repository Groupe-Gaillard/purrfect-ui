import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import Button from "./Button";

describe("Button", () => {
  it("Should show a button", () => {
    render(<Button label="Meow" onClick={vi.fn} />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should allow an user to click on the button", async () => {
    const user = userEvent.setup();

    const fn = vi.fn();

    render(<Button label="Meow" onClick={fn} />);
    const button = screen.getByRole("button");

    await user.click(button);

    expect(fn).toHaveBeenCalled();
  });
});
