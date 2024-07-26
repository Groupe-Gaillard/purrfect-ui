import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import MenuButton from "src/navigation/Menu/MenuButton";

describe("MenuButton", () => {
  it("Should show a menu button", () => {
    render(<MenuButton onPress={vi.fn} />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should allow an user to press on the menu button", async () => {
    const user = userEvent.setup();

    const fn = vi.fn();

    render(<MenuButton onPress={fn} />);
    const button = screen.getByRole("button");

    await user.click(button);

    expect(fn).toHaveBeenCalled();
  });
});
