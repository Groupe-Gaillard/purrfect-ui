import React from "react";
import styled, { css } from "styled-components";
import { sizing } from "src/utils/utils";

export type IconSizes = "small" | "medium" | "large" | "big";
type IconSizeType = IconSizes;
type IconAlignment = IconSizes;
const iconAlignment = (size: IconAlignment) => {
  switch (size) {
    case "small":
      return css`
        transform: translateY(${sizing(1)});
      `;
    case "medium":
      return css`
        transform: translateY(${sizing(2)});
      `;
    case "large":
      return css`
        transform: translateY(${sizing(3)});
      `;
    case "big":
      return css`
        transform: translateY(${sizing(4)});
      `;
    default:
      return `transform: translateY(${sizing(2)})`;
  }
};

const iconDimension = (size: IconSizeType) => {
  switch (size) {
    case "small":
      return "10px";
    case "medium":
      return "14px";
    case "large":
      return "16px";
    case "big":
      return "20px";
    default:
      return "14px";
  }
};

type CustomSVGProps = React.SVGProps<SVGSVGElement> & {
  iconVerticalAlign?: IconAlignment;
  iconSize?: IconSizeType;
};

const StyledSvg = styled.svg<{
  iconVerticalAlign: IconAlignment;
  iconSize: IconSizeType;
}>`
  ${({ iconVerticalAlign }) => {
    return iconAlignment(iconVerticalAlign);
  }}
  ${({ iconSize }) => {
    return `height: ${iconDimension(iconSize)};`;
  }}
  ${({ iconSize }) => {
    return `width: ${iconDimension(iconSize)};`;
  }}
`;

const PlusIcon = ({
  iconVerticalAlign = "medium",
  iconSize = "medium",
}: CustomSVGProps) => {
  return (
    <StyledSvg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      iconSize={iconSize}
      xmlns="http://www.w3.org/2000/svg"
      iconVerticalAlign={iconVerticalAlign}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      ></path>
    </StyledSvg>
  );
};

export default PlusIcon;
