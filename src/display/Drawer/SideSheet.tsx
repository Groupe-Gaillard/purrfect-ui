import React, { useRef } from "react";
import { usePreventScroll } from "react-aria";
import { Dialog, Modal, ModalOverlay } from "react-aria-components";
import styled, { css } from "styled-components";
import { theme } from "src/guidelines/theme";
import { addAlpha } from "src/guidelines/theme/Color";

const Overlay = styled(ModalOverlay)`
  position: fixed;
  inset: 0;

  @keyframes mymodal-blur {
    from {
      background-color: ${addAlpha(theme.color.gray100, 0)};
      backdrop-filter: blur(0);
    }

    to {
      background-color: ${addAlpha(theme.color.gray100, 30)};
      backdrop-filter: blur(3px);
    }
  }

  &[data-entering] {
    animation: mymodal-blur 300ms;
  }

  &[data-exiting] {
    animation: mymodal-blur 300ms reverse ease-in;
  }
`;

const StyledModal = styled(Modal)<{
  openFrom: "left" | "right";
  detent?: "full-width" | "content-width";
}>`
  height: 100%;
  max-width: 90%;
  position: fixed;
  top: 0;
  bottom: 0;
  background: ${theme.color.white};
  outline: none;

  ${({ detent }) => {
    switch (detent) {
      case "content-width":
        return css``;
      case "full-width":
        return css`
          width: 90%;
        `;
    }
  }}

  ${({ openFrom }) => {
    switch (openFrom) {
      case "left":
        return css`
          left: 0;
          border-right: 1px solid ${theme.color.gray100};
          box-shadow: 8px 0 20px rgba(0 0 0 / 0.1);
          border-top-right-radius: ${theme.borderRadius.big};
          border-bottom-right-radius: ${theme.borderRadius.big};
        `;
      case "right":
        return css`
          right: 0;
          border-left: 1px solid ${theme.color.gray100};
          box-shadow: -8px 0 20px rgba(0 0 0 / 0.1);
          border-top-left-radius: ${theme.borderRadius.big};
          border-bottom-left-radius: ${theme.borderRadius.big};
        `;
    }
  }}

  @keyframes mymodal-slide {
    from {
      ${({ openFrom }) => {
        switch (openFrom) {
          case "left":
            return css`
              transform: translateX(-100%);
            `;
          case "right":
            return css`
              transform: translateX(100%);
            `;
        }
      }}
    }

    to {
      transform: translateX(0);
    }
  }

  &[data-entering] {
    animation: mymodal-slide 300ms;
  }

  &[data-exiting] {
    animation: mymodal-slide 300ms reverse ease-in;
  }
`;

const StyledDialog = styled(Dialog)`
  display: flex;
  flex-direction: column;
`;

type SideSheetProps = {
  isOpen: boolean;
  openFrom: "left" | "right";
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  detent: "full-width" | "content-width";
  isDismissable: boolean;
  onClose: () => void;
};

const SideSheet = ({
  isOpen,
  openFrom,
  header,
  children,
  footer,
  detent,
  isDismissable,
  onClose,
}: SideSheetProps) => {
  usePreventScroll({
    isDisabled: isOpen,
  });

  const ref = useRef<HTMLDivElement>(null);

  return (
    <Overlay
      isOpen={isOpen}
      isDismissable={isDismissable}
      shouldCloseOnInteractOutside={() => {
        if (isDismissable) {
          onClose();
        }

        return false;
      }}
    >
      <StyledModal
        ref={ref}
        isOpen={isOpen}
        openFrom={openFrom}
        detent={detent}
      >
        <StyledDialog>
          {header}
          {children}
          {footer}
        </StyledDialog>
      </StyledModal>
    </Overlay>
  );
};

export default SideSheet;
