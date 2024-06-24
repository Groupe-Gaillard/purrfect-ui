import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import TextArea from "./TextArea";

describe("textArea", () => {
  it("Should show a textArea", () => {
    render(<TextArea label="My textarea" />);
    const textArea = screen.getByLabelText("My textarea");

    expect(textArea).toBeInTheDocument();
  });

  it("Input value should change when user is typing", async () => {
    render(<TextArea label="My textarea" name="my-textarea" />);
    const user = userEvent.setup();
    const textArea = screen.getByRole("textbox");

    await user.type(textArea, "test texfield");

    expect(textArea).toHaveValue("test texfield");
  });

  it("Input value should be on error", async () => {
    render(
      <form>
        <TextArea label="My textarea" name="my-textarea" isRequired={true} />
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
