import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Link from "src/action/Link/Link";
import FilesIcon from "src/icons/Files";
import Tabs from "src/navigation/Tabs/Tabs";

const tabData = [
  {
    id: "One",
    content: "Content of Tab One",
    title: "Title of One",
    className: "tab-1",
  },
  {
    id: "Two",
    content: <Link href="#">Content of Tab Two</Link>,
    title: "Title of Two",
    className: "tab-2",
  },
  {
    id: "Three",
    content: <p>Content of tab three</p>,
    title: "Title of Three",
    className: "tab-3",
  },
];

const tabDataWithIcon = [
  {
    id: "One",
    content: "Content of Tab One",
    title: "Title of One",
    leadingIcon: <FilesIcon />,
  },
  {
    id: "Two",
    content: <Link href="#">Content of Tab Two</Link>,
    title: "Title of Two",
    trailingIcon: <FilesIcon />,
  },
  {
    id: "Three",
    content: <p>Content of tab three</p>,
    title: "Title of Three",
  },
];

describe("Tabs Component", () => {
  it("Should render Tabs correctly", () => {
    render(
      <Tabs
        ariaLabel="Tab list"
        className="default-class"
        isDisabled={false}
        keyboardActivation="automatic"
        orientation="horizontal"
        tabs={tabData}
      />,
    );
    expect(screen.getByText(/Title of One/i)).toBeInTheDocument();
    expect(screen.getByText(/Title of Two/i)).toBeInTheDocument();
    expect(screen.getByText(/Title of Three/i)).toBeInTheDocument();
  });

  it("Should render Custom Color correctly", () => {
    render(<Tabs variant="warning" listVariant="info" tabs={tabData} />);
    const tab = screen.getByText(/Title of One/i).closest("div");
    expect(tab).toHaveStyle("borderBottom: 3px solid #ffb000");
  });

  it("Should render Disabled correctly", () => {
    render(<Tabs tabs={tabData} isDisabled={true} />);
    expect(screen.getByText(/Title of Three/i).closest("div")).toHaveStyle(
      "opacity: 0.5",
    );
  });

  it("Should render a Tag Selected by default", () => {
    render(<Tabs defaultSelectedKey="Two" tabs={tabData} />);
    expect(screen.getByText(/Title of Two/i)).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("Should render Tags in a Vertical Orientation", () => {
    render(<Tabs orientation="vertical" tabs={tabDataWithIcon} />);
    expect(screen.getByRole("tablist")).toHaveAttribute(
      "aria-orientation",
      "vertical",
    );
  });

  it("Should render Tag title with icon", () => {
    render(<Tabs tabs={tabDataWithIcon} />);
    const tab = document.querySelector('[data-key="One"]');
    expect(tab).toContainHTML("svg");
  });
});
