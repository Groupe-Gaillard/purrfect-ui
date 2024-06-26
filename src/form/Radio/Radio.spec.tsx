import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Radio from "src/form/Radio/Radio";
import RadioGroup from "src/form/RadioGroup/RadioGroup";

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
