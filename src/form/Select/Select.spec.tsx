import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import Select, { Option } from "src/form/Select/Select";

const options = [
  { id: "cat", label: "Cat" },
  { id: "dog", label: "Dog" },
  { id: "kangaroo", label: "Kangaroo" },
  { id: "panda", label: "Panda" },
  { id: "snake", label: "Snake", isDisabled: true },
];

describe("Select", () => {
  it("Should show a select", () => {
    render(
      <Select label="My Select">
        {options.map((oneOption) => {
          return (
            <Option key={oneOption.id} id={oneOption.id}>
              {oneOption.label}
            </Option>
          );
        })}
      </Select>,
    );

    const selectLabel = screen.getByText(/my select/i);

    expect(selectLabel).toBeInTheDocument();
  });

  it("Should allow the user to select an option", async () => {
    render(
      <Select label="My Select">
        {options.map((oneOption) => {
          return (
            <Option key={oneOption.id} id={oneOption.id}>
              {oneOption.label}
            </Option>
          );
        })}
      </Select>,
    );

    // Open Select
    const selectButton = screen.getByRole("button", {
      name: /show suggestions my select/i,
    });
    await waitFor(() => userEvent.click(selectButton));

    // Select the Snake option
    const snakeOption = screen.getByRole("option", { name: /snake/i });
    await waitFor(() => userEvent.click(snakeOption));

    // Check if the Select have the right value
    const select = screen.getByRole("combobox", { name: /my select/i });
    expect(select).toHaveDisplayValue(/snake/i);
  });

  it("Should allow the user to select an option with his keyboard", async () => {
    render(
      <Select label="My Select">
        {options.map((oneOption) => {
          return (
            <Option key={oneOption.id} id={oneOption.id}>
              {oneOption.label}
            </Option>
          );
        })}
      </Select>,
    );

    // Open Select
    const select = screen.getByRole("combobox", { name: /my select/i });
    await waitFor(() => userEvent.type(select, "{arrowdown}"));

    // Select the Snake option
    await waitFor(() =>
      userEvent.type(
        select,
        "{arrowdown}{arrowdown}{arrowdown}{arrowdown}{arrowdown}",
      ),
    );
    await waitFor(() => userEvent.type(select, "{enter}"));

    // Check if the Select have the right value
    expect(select).toHaveDisplayValue(/snake/i);
  });

  it("Should not allow the user to select a disabled option", async () => {
    render(
      <Select label="My Select">
        {options.map((oneOption) => {
          return (
            <Option
              key={oneOption.id}
              id={oneOption.id}
              isDisabled={oneOption.isDisabled ?? false}
            >
              {oneOption.label}
            </Option>
          );
        })}
      </Select>,
    );

    // Open Select
    const selectButton = screen.getByRole("button", {
      name: /show suggestions my select/i,
    });
    await waitFor(() => userEvent.click(selectButton));

    // Select the Snake option
    const snakeOption = screen.getByRole("option", { name: /snake/i });
    await waitFor(() => userEvent.click(snakeOption));

    // Check if the Select have the right value
    const select = screen.getByRole("combobox", { name: /my select/i });
    expect(select).not.toHaveDisplayValue(/snake/i);
  });

  it("Should not allow the user to select a disabled option with his keyboard", async () => {
    render(
      <Select label="My Select">
        {options.map((oneOption) => {
          return (
            <Option
              key={oneOption.id}
              id={oneOption.id}
              isDisabled={oneOption.isDisabled ?? false}
            >
              {oneOption.label}
            </Option>
          );
        })}
      </Select>,
    );

    // Open Select
    const select = screen.getByRole("combobox", { name: /my select/i });
    await waitFor(() => userEvent.type(select, "{arrowdown}"));

    // Select the Snake option
    await waitFor(() =>
      userEvent.type(
        select,
        "{arrowdown}{arrowdown}{arrowdown}{arrowdown}{arrowdown}",
      ),
    );
    await waitFor(() => userEvent.type(select, "{enter}"));

    // Check if the Select have the right value
    expect(select).not.toHaveDisplayValue(/snake/i);
  });

  it("Should allow the user to type an option to select it", async () => {
    render(
      <Select label="My Select">
        {options.map((oneOption) => {
          return (
            <Option key={oneOption.id} id={oneOption.id}>
              {oneOption.label}
            </Option>
          );
        })}
      </Select>,
    );

    const select = screen.getByRole("combobox", { name: /my select/i });
    await waitFor(() => userEvent.type(select, "Snake"));

    const snakeOption = screen.getByRole("option", { name: /snake/i });
    const catOption = screen.queryByRole("option", { name: /cat/i });

    expect(snakeOption).toBeInTheDocument();
    expect(catOption).not.toBeInTheDocument();
  });
});
