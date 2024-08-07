import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import Drawer from "src/display/Drawer/Drawer";

describe("Drawer", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it("Should not show the drawer", async () => {
    render(
      <Drawer isOpen={false} onClose={vi.fn()}>
        <div>Content</div>
      </Drawer>,
    );

    const content = screen.queryByText(/content/i);

    expect(content).not.toBeInTheDocument();
  });

  it("Should show the drawer", async () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()}>
        <div>Content</div>
      </Drawer>,
    );

    await waitFor(() => screen.getByText(/content/i));

    const content = screen.getByText(/content/i);

    expect(content).toBeInTheDocument();
  });
});
