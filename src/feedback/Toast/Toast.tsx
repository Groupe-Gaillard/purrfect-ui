import React from "react";
import styled from "styled-components";
import Alert, { AlertProps } from "src/feedback/Alert/Alert";

const toastPositionValues = [
  "top-left",
  "top-right",
  "top-centered",
  "bottom-left",
  "bottom-right",
  "bottom-centered",
] as const;
type ToastPositionType = (typeof toastPositionValues)[number];

type ToastProps = {
  position: ToastPositionType;
} & AlertProps;

const ToastWrapper = styled.div<{ position: ToastPositionType }>`
  position: fixed;
  z-index: 1000;
  display: flex;
  ${({ position }) => {
    switch (position) {
      case "top-right":
        return `
          top: 1rem;
          right: 1rem;
        `;
      case "top-left":
        return `
          top: 1rem;
          left: 1rem;
        `;
      case "top-centered":
        return `
          top: 1rem;
          margin-left: 50%;
        `;
      case "bottom-left":
        return `
          bottom: 1rem;
          left: 1rem;
        `;
      case "bottom-right":
        return `
          bottom: 1rem;
          right: 1rem;
        `;
      case "bottom-centered":
        return `
          bottom: 1rem;
          margin-left: 50%;
        `;
    }
  }}
`;

const Toast = ({ position, ...rest }: ToastProps) => {
  return (
    <ToastWrapper position={position}>
      <Alert {...rest}>{rest.children}</Alert>
    </ToastWrapper>
  );
};

export default Toast;
export { toastPositionValues };
