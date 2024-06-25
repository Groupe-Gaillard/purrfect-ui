import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import Select, { OptionProps } from "./Select";

const options: OptionProps[] = [
  { id: "cat", label: "Cat" },
  { id: "dog", label: "Dog" },
  { id: "kangaroo", label: "Kangaroo" },
  { id: "panda", label: "Panda" },
  { id: "snake", label: "Snake" },
];
describe("Select", () => {
  it("Should show a select", () => {
    render(<Select label="My Select" options={options} />);
    const select = screen.getByLabelText("My Select");

    expect(select).toBeInTheDocument();
  });

  it("Input value should change when user is typing", async () => {
    render(<Select label="My select" options={options} />);
    const user = userEvent.setup();
    const select = screen.getByRole("button");

    await user.click(select);

    const oneOption = screen.getByRole("option", { name: /Dog/i });
    user.click(oneOption);

    expect(oneOption.getAttribute("checked") === "true");
  });

  it("Input value should be on error", async () => {
    render(
      <form>
        <Select
          label="My select"
          name="my-select"
          isRequired={true}
          options={options}
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
