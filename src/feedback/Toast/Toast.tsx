import React from "react";
import styled from "styled-components";
import Alert, { AlertProps } from "src/feedback/Alert/Alert";
import { useToastTimer } from "src/feedback/Toast/useToastTimer";
import { sizing } from "src/utils/utils";

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
  duration?: number; //in ms
} & AlertProps;

const ToastWrapper = styled.div<{ position: ToastPositionType }>`
  position: fixed;
  z-index: 1000;
  display: flex;
  ${({ position }) => {
    switch (position) {
      case "top-right":
        return `
          top: ${sizing(16)};
          right: ${sizing(16)};
        `;
      case "top-left":
        return `
          top: ${sizing(16)};
          left: ${sizing(16)};
        `;
      case "top-centered":
        return `
          top: ${sizing(16)};
          margin-left: 50%;
        `;
      case "bottom-left":
        return `
          bottom: ${sizing(16)};
          left: ${sizing(16)};
        `;
      case "bottom-right":
        return `
          bottom: ${sizing(16)};
          right: ${sizing(16)};
        `;
      case "bottom-centered":
        return `
          bottom: ${sizing(16)};
          margin-left: 50%;
        `;
    }
  }}
`;

const Toast = ({ position, duration, ...rest }: ToastProps) => {
  const visible = useToastTimer(duration);

  if (!visible) {
    return null;
  }

  return (
    <ToastWrapper position={position}>
      <Alert {...rest}>{rest.children}</Alert>
    </ToastWrapper>
  );
};

export default Toast;
export { toastPositionValues };
export type { ToastProps };
