import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, test } from "vitest";
import Alert, {
  alertKindValues,
  alertSeverityValues,
} from "src/feedback/Alert/Alert";
import { theme } from "src/guidelines/theme";

describe("Alert", () => {
  it("Should render children", () => {
    render(<Alert>Message</Alert>);

    const alert = screen.getByText("Message");

    expect(alert).toBeInTheDocument();
  });

  it("Should render with default props", () => {
    render(<Alert>Message</Alert>);

    const alert = screen.getByText("Message").parentElement as HTMLElement;

    expect(alert).toHaveStyle({
      backgroundColor: theme.color.info,
      color: theme.color.text.white,
    });
  });

  alertKindValues.forEach((kind) => {
    it(`Applies correct style for kind: ${kind}`, () => {
      render(<Alert kind={kind}>Message</Alert>);

      const alert = screen.getByText("Message").parentElement;

      if ("outlined" === kind) {
        expect(alert).toHaveStyle({
          backgroundColor: theme.color.white,
          color: theme.color.info,
          border: `2px solid ${theme.color.info}`,
        });
      } else {
        expect(alert).toHaveStyle({
          backgroundColor: theme.color.info,
        });
      }
    });
  });

  alertSeverityValues.forEach((severity) => {
    it(`Applies correct style for severity: ${severity}`, () => {
      render(<Alert severity={severity}>Message</Alert>);

      const alert = screen.getByText("Message").parentElement;

      expect(alert).toHaveStyle({
        backgroundColor: theme.color[severity],
      });
    });
  });

  alertSeverityValues.forEach((severity) => {
    it(`Applies correct icon for severity: ${severity}`, () => {
      render(<Alert severity={severity}>Message</Alert>);

      const icon = screen.getByRole("img");

      expect(icon).toHaveAttribute("aria-label", `${severity}-icon`);
    });
  });

  test("Closeable props renders close button and remove alert on click", () => {
    render(<Alert closeable>Message</Alert>);

    const alert = screen.getByText("Message");
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(alert).not.toBeInTheDocument();
  });
});
