import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import Radio from "../Radio/Radio";
import RadioGroup from "../RadioGroup/RadioGroup";

const RadioButtonArray = [
  {
    label: "Meow",
    value: "meow",
    id: "idMeow",
  },
];

describe("Radio", () => {
  it("Should show a radio", () => {
    render(
      <RadioGroup label="My radio">
        {RadioButtonArray.map((oneRadio, index) => (
          <Radio key={index} {...oneRadio} />
        ))}
      </RadioGroup>,
    );
    const radio = screen.getByLabelText("Meow");

    expect(radio).toBeInTheDocument();
  });
});
