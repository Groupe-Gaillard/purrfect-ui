import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import Toast, { toastPositionValues } from "src/feedback/Toast/Toast";

vi.mock("src/feedback/Alert/Alert", () => ({
  __esModule: true,
  default: (props: any) => (
    <div data-testid={props["data-testid"] ?? "alert"}>{props.children}</div>
  ),
}));

describe("Toast", () => {
  const expectedStyle = {
    "top-left": "top: 1rem; left: 1rem;",
    "top-right": "top: 1rem; right: 1rem;",
    "top-centered": "top: 1rem; margin-left: 50%;",
    "bottom-left": "bottom: 1rem; left: 1rem;",
    "bottom-right": "bottom: 1rem; right: 1rem;",
    "bottom-centered": "bottom: 1rem; margin-left: 50%;",
  };

  toastPositionValues.forEach((position) => {
    it(`Applies correct style for position: ${position}`, () => {
      render(<Toast position={position}>Message</Toast>);

      const toast = screen.getByTestId("alert").parentElement;

      expect(toast).toHaveStyle({
        position: "fixed",
        zIndex: 1000,
        display: "flex",
      });

      expect(toast).toHaveStyle(expectedStyle[position]);
    });
  });

  it("Spreads props to Alert component", () => {
    render(
      <Toast position={"top-left"} data-testid="test-alert">
        Message
      </Toast>,
    );

    const alertMessage = screen.getByText("Message");
    const alert = screen.getByTestId("test-alert");

    expect(alertMessage).toBeInTheDocument();
    expect(alert).toBeInTheDocument();
  });

  it("Disappears after the specified duration ", () => {
    render(
      <Toast position={"top-left"} duration={500}>
        Message
      </Toast>,
    );

    const toast = screen.getByText("Message");

    expect(toast).toBeInTheDocument();

    waitFor(
      () => {
        const toast = screen.getByText("Message");

        expect(toast).not.toBeInTheDocument();
      },
      { timeout: 1000 },
    );
  });
});
