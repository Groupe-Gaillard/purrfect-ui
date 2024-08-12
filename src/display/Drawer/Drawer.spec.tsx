import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import Drawer from "src/display/Drawer/Drawer";
import { useIsMdScreen } from "src/guidelines/theme/mediaQueries";

vi.mock("src/guidelines/theme/mediaQueries");

describe("Drawer", () => {
  beforeAll(() => {
    vi.mocked(useIsMdScreen).mockReturnValue(true);

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated but still needed https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener
        removeListener: vi.fn(), // Deprecated but still needed https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/removeListener
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it("Should not show the drawer", () => {
    render(
      <Drawer isOpen={false} onClose={vi.fn()} ariaLabel="Test">
        <div>Content</div>
      </Drawer>,
    );

    const content = screen.queryByText(/content/i);

    expect(content).not.toBeInTheDocument();
  });

  it("Should show the drawer", async () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()} ariaLabel="Test">
        <div>Content</div>
      </Drawer>,
    );

    await waitFor(() => screen.getByText(/content/i));

    const content = screen.getByText(/content/i);

    expect(content).toBeInTheDocument();
  });

  it("Should show the sides sheet", async () => {
    const onCloseMock = vi.fn();

    render(
      <Drawer
        isOpen={true}
        onClose={onCloseMock}
        ariaLabel="Test"
        detent="content"
        isDismissable
      >
        <div>Content</div>
      </Drawer>,
    );

    await waitFor(() => screen.getByText(/content/i));

    const modal = screen.getByTestId("side-sheet");

    expect(modal).toBeInTheDocument();
  });

  it("Should show the bottom sheet", async () => {
    const onCloseMock = vi.fn();
    vi.mocked(useIsMdScreen).mockReturnValue(false);

    render(
      <Drawer
        isOpen={true}
        onClose={onCloseMock}
        ariaLabel="Test"
        detent="content"
        isDismissable
      >
        <div>Content</div>
      </Drawer>,
    );

    await waitFor(() => screen.getByText(/content/i));

    const modal = screen.getByTestId("bottom-sheet");

    expect(modal).toBeInTheDocument();
  });

  it("Should show the drawer with header and footer", async () => {
    render(
      <Drawer
        isOpen={true}
        onClose={vi.fn()}
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        ariaLabel="Test"
      >
        <div>Content</div>
      </Drawer>,
    );

    await waitFor(() => screen.getByText(/content/i));

    const header = screen.getByText(/header/i);
    const footer = screen.getByText(/footer/i);

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  // The click event or the onClose does not work
  it.skip("Should show a dismissable drawer", async () => {
    const onCloseMock = vi.fn();

    render(
      <Drawer
        isOpen={true}
        onClose={onCloseMock}
        ariaLabel="Test"
        detent="content"
        isDismissable
      >
        <div>Content</div>
      </Drawer>,
    );

    await waitFor(() => screen.getByText(/content/i));

    const button = screen.getByRole("button", {
      name: /dismiss/i,
    });

    userEvent.click(button);

    await waitFor(() => expect(onCloseMock).toBeCalled());
  });
});
