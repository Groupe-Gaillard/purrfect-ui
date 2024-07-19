import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import TextField from "src/form/TextField/TextField";

const MockIcon = () => <svg data-testid="mock-icon-1"></svg>;
const MockIcon2 = () => <svg data-testid="mock-icon-2"></svg>;

describe("TextField", () => {
  it("Should show a textField", () => {
    render(<TextField label="My textfield" />);
    const textField = screen.getByLabelText("My textfield");

    expect(textField).toBeInTheDocument();
  });

  it("Should show leading & trailing icons", () => {
    render(
      <TextField
        label="My textfield"
        leadingIcon={<MockIcon />}
        trailingIcon={<MockIcon2 />}
      />,
    );

    const leadingIcon = screen.getByTestId("mock-icon-1");
    expect(leadingIcon).toBeVisible();

    const trailingIcon = screen.getByTestId("mock-icon-2");
    expect(trailingIcon).toBeVisible();
  });

  it("Input value should change when user is typing", async () => {
    render(<TextField label="My textfield" name="my-textfield" />);
    const user = userEvent.setup();
    const textField = screen.getByRole("textbox");

    await user.type(textField, "test texfield");

    expect(textField).toHaveValue("test texfield");
  });

  it("Input value should be on error", async () => {
    render(
      <form>
        <TextField
          label="My textfield"
          name="my-textfield"
          type="text"
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
