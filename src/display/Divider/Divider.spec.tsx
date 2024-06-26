import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Divider from "src/display/Divider/Divider";

describe("Divider", () => {
  it("Should show a slider", () => {
    render(<Divider />);
    const slider = screen.getByRole("separator");

    expect(slider).toBeInTheDocument();
  });
});
