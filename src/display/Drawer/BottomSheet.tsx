import React from "react";
import { Sheet } from "react-modal-sheet";

const BottomSheet = ({
  isOpen,
  header,
  children,
  footer,
  detent,
  isDismissable,
  onClose,
  ariaLabel,
}: {
  isOpen: boolean;
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  detent: "full-height" | "content-height";
  isDismissable: boolean;
  onClose: () => void;
  ariaLabel: string;
}) => {
  return (
    <Sheet isOpen={isOpen} onClose={onClose} detent={detent}>
      <Sheet.Container>
        <Sheet.Header aria-label={ariaLabel} data-testid="bottom-sheet">
          {header}
        </Sheet.Header>
        <Sheet.Content>
          {children}
          {footer}
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={isDismissable ? onClose : undefined} />
    </Sheet>
  );
};

export default BottomSheet;
