import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import Table from "./Table";

const dataColumns = [
  { id: "name", name: "Name", isVisible: true },
  { id: "type", name: "Type", isVisible: true },
  { id: "date", name: "Date Modified", isVisible: true },
];

const dataColumnsResizable = [
  { id: "name", name: "Name", isVisible: true },
  { id: "type", name: "Type", isVisible: true, isResizable: true },
  { id: "date", name: "Date Modified", isVisible: true, isResizable: true },
  { id: "action", name: "Action", isVisible: true },
];

const dataRows = [
  {
    id: 1,
    name: "Games",
    date: "6/7/2020",
    type: "File folder",
  },
  {
    id: 2,
    name: "Program Files",
    date: "4/7/2021",
    type: "File folder",
  },
  {
    id: 3,
    name: "bootmgr",
    date: "11/20/2010",
    type: "System file",
  },
  {
    id: 4,
    name: "log.txt",
    date: "1/18/2016",
    type: "Text Document",
  },
];

const dataRowsOneIsDisabled = [
  {
    id: 1,
    name: "Games",
    date: "6/7/2020",
    type: "File folder",
    isDisabled: true,
  },
  {
    id: 2,
    name: "Program Files",
    date: "4/7/2021",
    type: "File folder",
  },
  {
    id: 3,
    name: "bootmgr",
    date: "11/20/2010",
    type: "System file",
  },
  {
    id: 4,
    name: "log.txt",
    date: "1/18/2016",
    type: "Text Document",
  },
];

describe("Table", () => {
  it("Should show a Table", () => {
    render(
      <Table
        dataColumns={dataColumns}
        dataRows={dataRows}
        tableTitle="Example table"
      />,
    );
    const table = screen.getByRole("grid");
    const headerCell = screen.getByText(/Name/i);
    const checkboxes = screen.getAllByRole("checkbox");

    expect(table).toBeInTheDocument();
    expect(headerCell).toBeInTheDocument();
    expect(checkboxes.length).toBeGreaterThan(1);
  });

  it("Should show default selected row", async () => {
    render(
      <Table
        dataColumns={dataColumns}
        dataRows={dataRows}
        tableTitle="Example table"
        defaultSelectedKeys={[1]}
      />,
    );
    const rowSelected = screen.getByRole("row", { name: /Games/i });
    const rowNotSelected = screen.getByRole("row", { name: /System file/i });

    expect(rowSelected).toHaveAttribute("aria-selected", "true");
    expect(rowNotSelected).not.toHaveAttribute("aria-selected", "true");
  });

  it("Should show a Table non selectable", () => {
    render(
      <Table
        dataColumns={dataColumns}
        dataRows={dataRows}
        selectionMode="none"
        tableTitle="Example table"
      />,
    );
    const checkbox = screen.queryByRole("checkbox");

    expect(checkbox).toBeNull();
  });

  it("Should click on a row", async () => {
    render(
      <Table
        dataColumns={dataColumns}
        dataRows={dataRows}
        tableTitle="Example table"
      />,
    );

    const row = screen.getByRole("row", { name: /Games/i });
    await waitFor(() => userEvent.click(row));

    expect(row).toHaveAttribute("aria-selected", "true");
  });

  it("Should click only on one row", async () => {
    render(
      <Table
        dataColumns={dataColumns}
        dataRows={dataRows}
        tableTitle="Example table"
        selectionMode="single"
      />,
    );

    const firstRow = screen.getByRole("row", { name: /Games/i });
    await waitFor(() => userEvent.click(firstRow));

    const secondRow = screen.getByRole("row", { name: /Program Files/i });
    await waitFor(() => userEvent.click(secondRow));

    expect(firstRow).not.toHaveAttribute("aria-selected", "true");
    expect(secondRow).toHaveAttribute("aria-selected", "true");
  });

  it("Shouldn't click on a row", async () => {
    render(
      <Table
        dataColumns={dataColumns}
        dataRows={dataRowsOneIsDisabled}
        tableTitle="Example table"
      />,
    );

    const row = screen.getByRole("row", { name: /Games/i });
    await waitFor(() => userEvent.click(row));

    expect(row).not.toHaveAttribute("aria-selected", "true");
  });

  it("Should resize a column", async () => {
    render(
      <Table
        dataColumns={dataColumnsResizable}
        dataRows={dataRows}
        tableTitle="Example table"
      />,
    );

    const row = screen.getByRole("columnheader", { name: /Type/i });
    const initialWidth = parseInt(
      window.getComputedStyle(row).width.replace("px", ""),
    );
    let resizedWidth = parseInt(
      window.getComputedStyle(row).width.replace("px", ""),
    );

    const resizer = row.querySelector('div[role="presentation"]');
    if (resizer) {
      fireEvent.mouseDown(resizer);
      fireEvent.mouseMove(document, { clientX: initialWidth + 100 });
      fireEvent.mouseUp(document);
      resizedWidth = parseInt(
        window.getComputedStyle(row).width.replace("px", ""),
      );
    }

    expect(resizer).toBeInTheDocument();
    expect(resizedWidth).toBeGreaterThan(initialWidth);
  });
});
