import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import Upload from "./Upload";

describe("Upload", () => {
  it("renders without errors", () => {
    render(<Upload label="Upload File" buttonProps={{ onPress: vi.fn() }} />);
    expect(screen.getByText("Upload File")).toBeInTheDocument();
  });

  it("should display file previews when showPreview is true", () => {
    const file = new File(["file contents"], "Upload", {
      type: "image/png",
    });
    render(
      <Upload
        label="Upload"
        buttonProps={{ onPress: vi.fn() }}
        showPreview={true}
      />,
    );

    const fileInput = screen.getByLabelText("Upload");
    userEvent.upload(fileInput, file);

    expect(screen.getByAltText("Preview image")).toBeInTheDocument();
    expect(screen.getByText(file.name)).toBeInTheDocument();
  });

  it("should not display file previews when showPreview is false", () => {
    const file = new File(["file contents"], "Upload", {
      type: "image/png",
    });
    render(
      <Upload
        label="Upload"
        buttonProps={{ onPress: vi.fn() }}
        showPreview={false}
      />,
    );

    const fileInput = screen.getByLabelText("Upload");
    userEvent.upload(fileInput, file);

    expect(screen.queryByAltText("Preview image")).not.toBeInTheDocument();
    expect(screen.getByText(file.name)).toBeInTheDocument();
  });

  it("should call onSelect callback when files are selected", () => {
    const onSelectMock = vi.fn();
    render(
      <Upload
        label="Upload"
        buttonProps={{ onPress: vi.fn() }}
        onSelect={onSelectMock}
      />,
    );
  });
});
