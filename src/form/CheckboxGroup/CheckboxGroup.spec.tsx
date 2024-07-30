import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import Checkbox from "src/form/Checkbox/Checkbox";
import CheckboxGroup from "src/form/CheckboxGroup/CheckboxGroup";

const checkboxArray = [
  {
    label: "Meow",
    value: "meow",
    id: "idMeow",
  },
  {
    label: "Miaou",
    value: "miaou",
    id: "idMiaou",
  },
  {
    label: "Maullar",
    value: "maullar",
    id: "idMaullar",
  },
];

describe("CheckboxGroup", () => {
  it("Should show a checkboxGroup", () => {
    render(
      <CheckboxGroup label="My checkboxGroup">
        {checkboxArray.map((oneCheckbox, index) => (
          <Checkbox key={index} {...oneCheckbox} />
        ))}
      </CheckboxGroup>,
    );
    const checkboxGroup = screen.getByLabelText("My checkboxGroup");

    expect(checkboxGroup).toBeInTheDocument();
  });

  it("Should show one checkbox button in CheckboxGroup checked", async () => {
    render(
      <CheckboxGroup label="My checkboxGroup">
        {checkboxArray.map((oneCheckbox, index) => (
          <Checkbox key={index} {...oneCheckbox} />
        ))}
      </CheckboxGroup>,
    );

    const oneCheckbox = screen.getByRole("checkbox", { name: /Miaou/i });
    userEvent.click(oneCheckbox);

    await new Promise((resolve) => setTimeout(resolve, 100));

    const checkboxChecked = screen.getByRole("checkbox", { name: /Miaou/i });
    expect(checkboxChecked.getAttribute("checked") === "true");
  });

  it("Should show the required CheckboxGroup to be on error", async () => {
    render(
      <form>
        <CheckboxGroup label="My textfield" isRequired={true}>
          {checkboxArray.map((oneCheckbox, index) => (
            <Checkbox key={index} {...oneCheckbox} />
          ))}
        </CheckboxGroup>
        <button type="submit">Submit</button>
      </form>,
    );

    const button = screen.getByRole("button", { name: /Submit/i });
    userEvent.click(button);

    await new Promise((resolve) => setTimeout(resolve, 100));

    const errorMessage = screen.getByText("Constraints not satisfied");
    expect(errorMessage).toBeInTheDocument();
  });
});
