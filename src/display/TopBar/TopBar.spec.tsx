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
    expect(screen.getByText("LEFT")).toBeInTheDocument();
    expect(screen.getByText("CENTER")).toBeInTheDocument();
    expect(screen.getByText("RIGHT")).toBeInTheDocument();
  });

  it("should render 1 child", () => {
    render(<TopBar leftSection={<div>LEFT</div>} />);
    expect(screen.getByText(/LEFT/i)).toBeInTheDocument();
  });

  it("should render 1 child and limit its size and place it at the end of the TopBar", () => {
    render(
      <TopBar
        leftSection={<div>LEFT</div>}
        spacing="end"
        sectionLeftWidth="33%"
      />,
    );

    expect(screen.getByRole("toolbar")).toBeInTheDocument();
    const leftSection = screen.getByText(/LEFT/i);
    expect(leftSection).toBeInTheDocument();
    const parentElement = leftSection.parentElement;
    expect(parentElement).toHaveStyle("width: 33%");
    expect(parentElement).toHaveStyle("flex: none");
  });

  it("should render 2 children with one bigger that the other one", () => {
    render(
      <TopBar
        leftFlex={2}
        leftSection={<div>LEFT</div>}
        centerSection={<div>CENTER</div>}
      />,
    );
    expect(screen.getByRole("toolbar")).toBeInTheDocument();
    const leftSection = screen.getByText(/LEFT/i);
    const centerSection = screen.getByText(/CENTER/i);
    const parentLeftElement = leftSection.parentElement;
    const parentCenterElement = centerSection.parentElement;
    expect(parentLeftElement).toHaveStyle("flex: 2");
    expect(parentCenterElement).toHaveStyle("flex: 1");
  });

  it("should have a gap of 2.5rem between children", () => {
    render(
      <TopBar
        leftSection={<div>LEFT</div>}
        centerSection={<div>CENTER</div>}
        rightSection={<div>RIGHT</div>}
        gap="xxlarge"
      />,
    );
    const toolbarElement = screen.getByRole("toolbar");
    expect(toolbarElement).toHaveStyle(`gap: 2.5rem`);
  });
});
