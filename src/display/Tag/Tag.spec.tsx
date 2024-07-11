import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import Tag from "src/display/Tag/Tag";
import AddIcon from "src/icons/Add";

describe("Tag Component", () => {
  it("renders the base tag", () => {
    render(<Tag>Tag</Tag>);
    expect(screen.getByText("Tag")).toBeInTheDocument();
  });

  it("renders the Tag with a kind prop", () => {
    render(<Tag kind="outlined">Outline Tag</Tag>);
    const tag = screen.getByText("Outline Tag");
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveAttribute("kind", "outlined");
  });

  it("renders the Tag with a larger padding for 'large' size prop compared to 'normal'", () => {
    const { rerender } = render(<Tag size="normal">Normal Tag</Tag>);
    const normalTag = screen.getByText("Normal Tag");
    const normalTagFontSize = window.getComputedStyle(normalTag).padding;

    rerender(<Tag size="large">Large Tag</Tag>);
    const largeTag = screen.getByText("Large Tag");
    const largeTagFontSize = window.getComputedStyle(largeTag).padding;

    expect(parseFloat(largeTagFontSize)).toBeGreaterThan(
      parseFloat(normalTagFontSize),
    );
  });

  it("renders the Tag with a disabled style", () => {
    render(<Tag isDisabled={true}>Disabled Tag</Tag>);
    const tag = screen.getByText("Disabled Tag");
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveStyle("opacity: 0.5");
  });

  it("renders the Tag with an icon", () => {
    const { container } = render(
      <Tag leadingIcon={<AddIcon />}>With Icon</Tag>,
    );
    const svgIcon = container.querySelector("svg");
    expect(svgIcon).toBeInTheDocument();
  });

  it("handles click event", () => {
    const handleClick = vi.fn();
    render(<Tag onPress={handleClick}>Clickable Tag</Tag>);
    const tag = screen.getByText("Clickable Tag");
    fireEvent.click(tag);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
