import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import RadioGroup from "./RadioGroup";

const RadioButtonArray = [
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

describe("RadioGroup", () => {
  it("Should show a radioGroup", () => {
    render(<RadioGroup label="My radioGroup" radio={RadioButtonArray} />);
    const radioGroup = screen.getByLabelText("My radioGroup");

    expect(radioGroup).toBeInTheDocument();
  });

  it("Should show one radio button in RadioGroup checked", async () => {
    render(<RadioGroup label="My radioGroup" radio={RadioButtonArray} />);

    const oneRadio = screen.getByRole("radio", { name: /Miaou/i });
    userEvent.click(oneRadio);

    await new Promise((resolve) => setTimeout(resolve, 100));

    const radioChecked = screen.getByRole("radio", { name: /Miaou/i });
    expect(radioChecked.getAttribute("checked") === "true");
  });

  it("Should show the required RadioGroup to be on error", async () => {
    render(
      <form>
        <RadioGroup
          label="My textfield"
          radio={RadioButtonArray}
          isRequired={true}
        />
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
