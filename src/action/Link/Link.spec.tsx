import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Link from "./Link";

const MockIcon = () => <svg data-testid="icon-svg"></svg>;
describe("<Link /> component", () => {
  it("should render correctly with href", () => {
    const { getByRole } = render(
      <Link href="https://example.com">Test Link</Link>,
    );
    const link = getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveTextContent("Test Link");
  });

  it("should render leading and/or trailing icons when leadingIcon and/or trailingIcon is true", () => {
    render(
      <Link
        href="https://example.com"
        leadingIcon={<MockIcon />}
        trailingIcon={<MockIcon />}
      >
        Test Link
      </Link>,
    );

    const icons = screen.getAllByTestId("icon-svg");
    expect(icons.length).toBe(2);
    expect(icons[0]).toBeInTheDocument();
    expect(icons[1]).toBeInTheDocument();
    expect(screen.getByText("Test Link")).toHaveAttribute(
      "href",
      "https://example.com",
    );
  });

  it("should apply custom className if provided", () => {
    const { getByText } = render(
      <Link href="https://example.com" className="custom-class">
        Custom Class Link
      </Link>,
    );
    const link = getByText("Custom Class Link");
    expect(link).toHaveClass("custom-class");
  });

  it("should open in a new tab when target='_blank'", () => {
    const { getByText } = render(
      <Link href="https://example.com" target="_blank">
        New Tab Link
      </Link>,
    );
    const link = getByText("New Tab Link");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should have rel='noopener noreferrer' when target='_blank'", () => {
    const { getByText } = render(
      <Link href="https://example.com" target="_blank">
        Rel Attribute Link
      </Link>,
    );
    const link = getByText("Rel Attribute Link");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render children as its content", () => {
    const { getByText } = render(
      <Link href="https://example.com">
        <span>Child Content</span>
      </Link>,
    );
    const link = getByText("Child Content");
    expect(link).toBeInTheDocument();
  });

  it("should apply disabled style when isDisabled is true", () => {
    render(
      <Link href="https://example.com" isDisabled={true}>
        Disabled Link
      </Link>,
    );

    const linkElement = screen.getByText("Disabled Link");

    expect(linkElement).toHaveStyle({
      opacity: 0.5,
      cursor: "not-allowed",
      pointerEvents: "none",
    });
  });

  it("should set aria-disabled to true when isDisabled is true", () => {
    render(
      <Link href="https://example.com" isDisabled={true}>
        Disabled Link
      </Link>,
    );

    const linkElement = screen.getByText("Disabled Link");
    expect(linkElement).toHaveAttribute("aria-disabled", "true");
  });

  it("should not have underline by default", () => {
    const { getByText } = render(
      <Link href="https://example.com">Default Underline Link</Link>,
    );
    const link = getByText("Default Underline Link");
    expect(link).not.toHaveStyle("text-decoration: underline");
  });

  it("should always underline when underline='always'", () => {
    const { getByText } = render(
      <Link href="https://example.com" underline="always">
        Always Underline Link
      </Link>,
    );
    const link = getByText("Always Underline Link");
    expect(link).toHaveStyle("text-decoration: underline");
  });

  it("should not underline when underline='never'", () => {
    const { getByText } = render(
      <Link href="https://example.com" underline="never">
        Never Underline Link
      </Link>,
    );
    const link = getByText("Never Underline Link");
    fireEvent.mouseOver(link);
    expect(link).toHaveAttribute("data-hovered", "true");
    expect(link).not.toHaveStyle("text-decoration: underline");
  });
});
