import React from "react";
import styled from "styled-components";
import { Variant } from "src/action/Button/Button";
import { sizing, theme } from "src/guidelines/theme";

const StyledLoader = styled.div<{ size?: number; variant?: Variant }>`
  --color: ${({ variant }) =>
    variant ? theme.color[variant] : theme.color.gray900};
  --thickness: ${({ size }) => sizing((size ?? 50) * 0.16)};

  width: ${({ size }) => sizing(size ?? 50)};
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, var(--color) 94%, #0000) top/var(--thickness)
      var(--thickness) no-repeat,
    conic-gradient(#0000 30%, var(--color));
  -webkit-mask: radial-gradient(
    farthest-side,
    #0000 calc(100% - var(--thickness)),
    #000 0
  );
  mask: radial-gradient(
    farthest-side,
    #0000 calc(100% - var(--thickness)),
    #000 0
  );
  animation: loader 1s infinite linear;
  @keyframes loader {
    100% {
      transform: rotate(1turn);
    }
  }
`;

type LoaderProps = {
  size?: number;
  variant?: Variant;
  className?: string;
};

const Loader = (props: LoaderProps) => {
  return (
    <StyledLoader
      {...props}
      role="progressbar"
      aria-busy="true"
      aria-live="polite"
      aria-valuetext="Chargement de l'élément"
    />
  );
};

export default Loader;
export type { LoaderProps };
