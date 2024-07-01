import {
  fireEvent,
  getByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import Upload from "./Upload";

beforeAll(() => {
  (global as any).originalURL = global.URL;

  global.URL = {
    ...(global.URL as any),
    createObjectURL: vi.fn(),
    revokeObjectURL: vi.fn(),
  };
});

afterAll(() => {
  global.URL = (global as any).originalURL;
});

describe("Upload", () => {
  it("should renders without errors", () => {
    render(<Upload label="Upload File" buttonProps={{ onPress: vi.fn() }} />);
    expect(screen.getByText("Upload File")).toBeInTheDocument();
  });

  it("should display a preview after file upload", () => {
    const { container } = render(
      <Upload label="Upload" buttonProps={{ onPress: vi.fn() }} />,
    );
    const input = container.querySelector('input[type="file"]')!;
    const file = new File(["contenu"], "exemple.txt", { type: "text/plain" });
    fireEvent.change(input, { target: { files: [file] } });
    expect(screen.getByText("exemple.txt")).toBeInTheDocument();
  });

  it("should display the trailing SVG icon after the button label when trailingIcon is true", () => {
    const { getByText } = render(
      <Upload
        label="Upload"
        buttonProps={{ onPress: vi.fn() }}
        trailingIcon={
          <svg>
            <path d="..." />
          </svg>
        }
      />,
    );
    const button = getByText("Upload").closest("button");
    expect(button).not.toBeNull();
    const svgIcons = button?.querySelectorAll("svg");
    expect(svgIcons).not.toBeNull();
    expect(svgIcons?.length).toBeGreaterThan(0);
  });

  it("should allow uploading multiple files with a max of 5", () => {
    const { container } = render(
      <Upload
        label="Upload"
        buttonProps={{ onPress: vi.fn() }}
        allowsMultiple
        maxFiles={5}
      />,
    );

    const files = [
      new File(["content"], "file1.txt", { type: "text/plain" }),
      new File(["content"], "file2.txt", { type: "text/plain" }),
      new File(["content"], "file3.txt", { type: "text/plain" }),
      new File(["content"], "file4.txt", { type: "text/plain" }),
      new File(["content"], "file5.txt", { type: "text/plain" }),
    ];

    const input = container.querySelector('input[type="file"]')!;
    fireEvent.change(input, { target: { files } });

    files.forEach((file) => {
      expect(screen.getByText(file.name)).toBeInTheDocument();
    });

    const extraFiles = [
      ...files,
      new File(["content"], "file6.txt", { type: "text/plain" }),
    ];

    fireEvent.change(input, { target: { files: extraFiles } });

    expect(screen.queryByText("file6.txt")).not.toBeInTheDocument();
  });

  it("should delete a file when DeleteIcon is clicked", async () => {
    const { queryByText, findByText, container } = render(
      <Upload label="Upload File" buttonProps={{ onPress: vi.fn() }} />,
    );

    const file = new File(["content"], "file1.txt", { type: "text/plain" });
    const input = container.querySelector('input[type="file"]')!;
    fireEvent.change(input, { target: { files: [file] } });

    await findByText("file1.txt");

    const deleteIcon = getByTestId(container, "delete-icon");
    deleteIcon && userEvent.click(deleteIcon);

    await waitFor(() => {
      expect(queryByText("file1.txt")).not.toBeInTheDocument();
    });
  });

  it("should filter files by type with acceptedFileTypes prop", () => {
    const { container } = render(
      <Upload
        label="Upload File"
        buttonProps={{ onPress: vi.fn() }}
        acceptedFileTypes={[".txt"]}
      />,
    );

    const validFiles = [
      new File(["content"], "file1.txt", { type: "text/plain" }),
      new File(["content"], "file2.txt", { type: "text/plain" }),
    ];
    const invalidFiles = [
      new File(["content"], "file3.pdf", { type: "application/pdf" }),
      new File(["content"], "image.gif", { type: "image/gif" }),
    ];

    const input = container.querySelector('input[type="file"]')!;
    fireEvent.change(input, { target: { files: validFiles } });

    validFiles.forEach(async (file) => {
      expect(
        await screen.findByText(new RegExp(file.name, "i")),
      ).toBeInTheDocument();
    });

    fireEvent.change(input, { target: { files: invalidFiles } });

    invalidFiles.forEach((file) => {
      expect(screen.queryByText(file.name)).not.toBeInTheDocument();
    });
  });
});
