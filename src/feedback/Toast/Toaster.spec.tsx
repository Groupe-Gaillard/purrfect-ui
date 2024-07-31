import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { AlertSeverity, alertSeverityValues } from "src/feedback/Alert/Alert";
import Toaster, {
  ToasterOptions,
  useToaster,
} from "src/feedback/Toast/Toaster";
import { theme } from "src/guidelines/theme";

const TestComponent = ({
  severity,
  options,
}: {
  severity?: AlertSeverity;
  options?: ToasterOptions;
}) => {
  const toaster = useToaster();

  return (
    <button onClick={() => toaster[severity || "success"]("message", options)}>
      Test
    </button>
  );
};

describe("Toaster", () => {
  it("Throws an error when provider is missing", () => {
    expect(() => render(<TestComponent />)).toThrowError(
      "Toaster provider is missing.",
    );
  });

  alertSeverityValues.forEach((severity) => {
    it(`Shows a toast for severity: ${severity}`, () => {
      render(
        <Toaster>
          <TestComponent severity={severity} />
        </Toaster>,
      );

      fireEvent.click(screen.getByText("Test"));

      const toast = screen.getByText("message").parentElement;

      expect(toast).toBeInTheDocument();
      expect(toast).toHaveStyle({
        backgroundColor: theme.color[severity],
      });
    });
  });

  it("Spreads props to Toast Component", () => {
    render(
      <Toaster>
        <TestComponent
          options={{
            position: "bottom-centered",
            duration: 500,
            kind: "outlined",
          }}
        />
      </Toaster>,
    );

    fireEvent.click(screen.getByText("Test"));

    const message = screen.getByText("message");
    const alert = message?.parentElement;
    const toast = alert?.parentElement;

    expect(toast).toHaveStyle({
      bottom: "1rem",
      marginLeft: "50%",
    });

    expect(alert).toHaveStyle({
      border: `2px solid ${theme.color.success}`,
    });

    waitFor(
      () => {
        expect(toast).not.toBeInTheDocument();
      },
      { timeout: 1000 },
    );
  });
});
