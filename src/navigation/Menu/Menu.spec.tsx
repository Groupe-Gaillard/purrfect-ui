import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { ReactElement } from "react";
import { describe, expect, it } from "vitest";
import Divider from "src/display/Divider/Divider";
import AddIcon from "src/icons/Add";
import Default from "src/icons/Default";
import DeleteIcon from "src/icons/Delete";
import Drag from "src/icons/Drag";
import FilesIcon from "src/icons/Files";
import SortDown from "src/icons/SortDown";
import UploadIcon from "src/icons/Upload";
import Menu from "src/navigation/Menu/Menu";
import MenuButton from "src/navigation/Menu/MenuButton";

const ButtonDisplay = ({
  label,
  icon,
  isDisabled,
}: {
  label: string;
  icon?: ReactElement;
  isDisabled?: boolean;
}) => {
  return (
    <MenuButton
      radius="none"
      kind="normal"
      block
      align="left"
      textStyle="normal"
      size="small"
      leadingIcon={icon}
      variant="dark"
      onPress={() => alert(`${label}`)}
      isDisabled={isDisabled}
    >
      {label}
    </MenuButton>
  );
};

const simpleMenuItems = [
  {
    id: 191,
    value: [
      {
        id: 1,
        value: <ButtonDisplay label="Open" icon={<Default />} />,
      },
      {
        id: 2,
        value: <ButtonDisplay label="Add" icon={<AddIcon />} />,
      },
      {
        id: 3,
        value: <ButtonDisplay label="Delete" icon={<DeleteIcon />} />,
      },
    ],
  },
];

const doubleMenuTitleItems = [
  {
    id: 391,
    name: "Top",
    value: [
      {
        id: 1,
        value: <ButtonDisplay label="Open" icon={<Default />} />,
      },
      {
        id: 2,
        value: <ButtonDisplay label="Add" icon={<AddIcon />} />,
      },
      {
        id: 3,
        value: <ButtonDisplay label="Delete" icon={<DeleteIcon />} />,
      },
    ],
  },
  {
    id: 91,
    name: "End",
    value: [
      {
        id: 4,
        value: <ButtonDisplay label="Print" icon={<FilesIcon />} />,
      },
      {
        id: 5,
        value: <ButtonDisplay label="Move" icon={<Drag />} />,
      },
      {
        id: 6,
        value: <ButtonDisplay label="Delete" icon={<DeleteIcon />} />,
      },
    ],
  },
];

const menuSepratorItems = [
  {
    id: 91,
    value: [
      {
        id: 4,
        value: <ButtonDisplay label="Print" icon={<FilesIcon />} />,
      },
      {
        id: 5,
        value: <ButtonDisplay label="Move" icon={<Drag />} />,
      },
      {
        id: 6,
        value: <Divider />,
      },
      {
        id: 7,
        value: <ButtonDisplay label="Upload file" icon={<UploadIcon />} />,
      },
      {
        id: 8,
        value: <ButtonDisplay label="Sort it" icon={<SortDown />} />,
      },
    ],
  },
];

const menuSubMenuItems = [
  {
    id: 92,
    name: "Menu bottom",
    value: [
      {
        id: 6,
        value: <ButtonDisplay label="Move" icon={<Drag />} />,
      },
      {
        id: 7,
        value: <ButtonDisplay label="Print" icon={<FilesIcon />} />,
      },
      {
        id: 8,
        value: (
          <MenuButton
            radius="none"
            kind="normal"
            block
            align="left"
            textStyle="normal"
            size="small"
            leadingIcon={<UploadIcon />}
            variant="dark"
          >
            Change
          </MenuButton>
        ),
        children: [
          { id: 100, value: <ButtonDisplay label="Crop" /> },
          { id: 101, value: <ButtonDisplay label="Cut" /> },
          { id: 102, value: <ButtonDisplay label="Copy" /> },
        ],
      },
    ],
  },
];

describe("Menu", () => {
  it("Should show a Menu", () => {
    render(<Menu menuItems={simpleMenuItems} />);
    const menu = screen.getByRole("menu");
    const button = screen.getByText(/Open/i);
    const checkboxes = screen.getAllByRole("menuitem");

    expect(menu).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(checkboxes.length).equal(3);
  });

  it("Should show a Menu with two sections with title", () => {
    render(<Menu menuItems={doubleMenuTitleItems} />);
    const titleSection = screen.getByRole("group", { name: /Top/i });
    const sections = screen.getAllByRole("group");
    const button = screen.getByText(/Open/i);

    expect(titleSection).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(sections.length).equal(2);
  });

  it("Should display a Menu including a separator", () => {
    render(<Menu menuItems={menuSepratorItems} />);
    const separator = screen.getByRole("separator");
    const menuItems = screen.getAllByRole("menuitem");
    const button = screen.getByText(/Print/i);

    expect(separator).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(menuItems.length).equal(5);
  });

  it("Should show a Menu with sub menu", async () => {
    render(<Menu menuItems={menuSubMenuItems} />);
    const menuItemSubMenu = screen.getByRole("menuitem", {
      name: /change/i,
    });
    const menuItems = screen.getAllByRole("menuitem");

    expect(menuItemSubMenu).toBeInTheDocument();
    expect(menuItems.length).equal(3);
    expect(menuItemSubMenu).toHaveAttribute("data-has-submenu", "true");

    await waitFor(() => userEvent.hover(menuItemSubMenu));
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const menuItemCrop = screen.getByRole("menuitem", {
      name: /Crop/i,
    });
    expect(menuItemCrop).toBeInTheDocument();
  });
});
