import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import TopBar from "./TopBar";

describe("<TopBar /> component", () => {
  it("should render without errors", () => {
    render(<TopBar />);
    expect(screen.getByRole("toolbar")).toBeInTheDocument();
  });
  it("should render 3 children", () => {
    render(
      <TopBar
        leftSection={<div>LEFT</div>}
        centerSection={<div>CENTER</div>}
        rightSection={<div>RIGHT</div>}
      />,
    );
    expect(screen.getByRole("toolbar")).toBeInTheDocument();
  });
  it("should render 1 child", () => {
    render(<TopBar leftSection={<div>LEFT</div>} />);
    expect(screen.getByRole("toolbar")).toBeInTheDocument();
  });
  it("should render 1 child and limit its size en place it at the end of the Topbar", () => {
    render(
      <TopBar leftSection={<div>LEFT</div>} spacing="end" leftWidth="33%" />,
    );
    expect(screen.getByRole("toolbar")).toBeInTheDocument();
  });
  it("should render 3 children with one bigger that the other 2", () => {
    render(
      <TopBar
        leftFlex={2}
        leftSection={<div>LEFT</div>}
        centerSection={<div>CENTER</div>}
        rightSection={<div>RIGHT</div>}
      />,
    );
    expect(screen.getByRole("toolbar")).toBeInTheDocument();
  });
  it("should have a gap of 2rem between children", () => {
    render(
      <TopBar leftSection={<div>LEFT</div>} spacing="end" leftWidth="33%" />,
    );
    expect(screen.getByRole("toolbar")).toBeInTheDocument();
  });
});
