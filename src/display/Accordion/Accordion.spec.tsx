import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import { describe, expect, it } from "vitest";
import Link from "src/action/Link/Link";
import { body1 } from "src/guidelines/theme";
import { Title } from "src/utils/StorybookComponents/Titles";
import { sizing } from "src/utils/utils";
import Accordion from "./Accordion";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizing(8)};
  margin: ${sizing(8, 0)};
`;

const StyledParagraph = styled.p`
  ${body1}
  margin: ${sizing(8, 0)};
`;

const standardHtml = (
  <StyledParagraph>
    Line 1: This is the first line of the dropdown content.
    <br />
    Line 2: This is the second line of the dropdown content.
    <br />
    Line 3: This is the third line of the dropdown content.
    <br />
    Line 4: This is the fourth line of the dropdown content.
    <br />
    Line 5: This is the fifth line of the dropdown content.
  </StyledParagraph>
);

const linkHtml = (
  <StyledContainer>
    <Link href="https://www.google.com">Google</Link>
    <Link href="https://www.facebook.com">Facebook</Link>
    <Link href="https://www.twitter.com">Twitter</Link>
  </StyledContainer>
);

describe("Accordion Component", () => {
  it("renders with content", () => {
    render(
      <Accordion title="Accordion Title" className="custom-class">
        {standardHtml}
      </Accordion>,
    );
    expect(screen.getByText("Accordion Title")).toBeInTheDocument();
    expect(
      screen.getByText((content) =>
        content.startsWith(
          "Line 1: This is the first line of the dropdown content.",
        ),
      ),
    ).toBeInTheDocument();
  });

  it("toggles content visibility on header click", () => {
    render(
      <Accordion title="Accordion Title" className="custom-class">
        {standardHtml}
      </Accordion>,
    );
    const header = screen.getByText("Accordion Title");
    fireEvent.click(header);
    expect(
      screen.getByText((content) =>
        content.startsWith(
          "Line 1: This is the first line of the dropdown content.",
        ),
      ),
    ).toBeVisible();
    fireEvent.click(header);
    expect(
      screen.queryByText((content) =>
        content.startsWith(
          "Line 1: This is the first line of the dropdown content.",
        ),
      ),
    ).not.toBeVisible();
  });

  it("renders multiple accordions", () => {
    render(
      <>
        <Title>Multiple Accordions</Title>
        <Accordion title="Accordion 1">{linkHtml}</Accordion>
        <Accordion title="Accordion 2">{standardHtml}</Accordion>
        <Accordion title="Accordion 3">{linkHtml}</Accordion>
      </>,
    );
    expect(screen.getByText("Accordion 1")).toBeInTheDocument();
    expect(screen.getByText("Accordion 2")).toBeInTheDocument();
    expect(screen.getByText("Accordion 3")).toBeInTheDocument();
  });
});
