import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import DatePicker from "src/form/DatePicker/DatePicker";

describe("DatePicker", () => {
  it("Should show a DatePicker", () => {
    render(<DatePicker label="I'm a DatePicker" />);
    const datePicker = screen.getByText("I'm a DatePicker");

    expect(datePicker).toBeInTheDocument();
  });

  it("Should show the Dialog", async () => {
    render(<DatePicker label="I'm a DatePicker" />);

    const datePickerButton = screen.getByRole("button", { name: /Calendar/i });
    userEvent.click(datePickerButton);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("Should choose a date", async () => {
    render(<DatePicker label="I'm a DatePicker" />);

    const datePickerButton = screen.getByRole("button", { name: /Calendar/i });
    userEvent.click(datePickerButton);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    const dayButton = screen.getByText("15");
    userEvent.click(dayButton);

    await new Promise((resolve) => setTimeout(resolve, 100));

    const input = screen.getByRole("spinbutton", { name: /day/i });

    expect(input.ariaValueText).toContain("15");
  });
});
