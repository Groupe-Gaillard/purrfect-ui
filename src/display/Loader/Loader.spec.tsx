import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Loader from "src/display/Loader/Loader";

describe("Loader", () => {
  it("Should show a loader", () => {
    render(<Loader />);
    const loader = screen.getByRole("progressbar");

    expect(loader).toBeInTheDocument();
  });
});
