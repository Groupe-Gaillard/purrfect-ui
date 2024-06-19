import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Slider from "./Slider";

describe("Slider", () => {
  it("Should show a slider", () => {
    render(<Slider label="Slider label" />);
    const slider = screen.getByText("Slider label");

    expect(slider).toBeInTheDocument();
  });

  it("should update the value on user interaction", () => {
    const initialValue = 30;
    const newValue = 50;

    render(
      <Slider
        label="Test Slider"
        minValue={0}
        maxValue={100}
        defaultValue={initialValue}
      />,
    );
    const slider = screen.getByRole("slider");

    fireEvent.change(slider, { target: { value: newValue } });

    expect(slider).toHaveAttribute("aria-valuetext", String(newValue));
  });
});
