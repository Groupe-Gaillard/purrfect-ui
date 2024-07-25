import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Avatar from "src/display/Avatar/Avatar";

const mockImage =
  "https://i.pinimg.com/736x/e5/18/a6/e518a631f086064879c6697d58efaf1f.jpg";

describe("Avatar", () => {
  it("Should show an avatar with an image"),
    () => {
      render(<Avatar src={mockImage} />);
      const avatar = screen.getByRole("img");
      expect(avatar).toHaveAttribute("src", mockImage);
      expect(avatar).toBeInTheDocument();
    };
  it("Should show an avatar without an image but with username's initials"),
    () => {
      render(<Avatar username="Chat Botté" />);
      const avatar = screen.getByText("CB");
      expect(avatar).toBeInTheDocument();
    };
  it("Should show a disabled avatar"),
    () => {
      render(<Avatar isDisabled />);
      const avatar = screen.getByRole("img");
      expect(avatar).toHaveStyle("filter: grayscale(100%)");
      expect(avatar).toHaveStyle("opacity: 0.5");
    };
});
