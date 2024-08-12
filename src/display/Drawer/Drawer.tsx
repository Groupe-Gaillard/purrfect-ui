import React from "react";
import BottomSheet from "src/display/Drawer/BottomSheet";
import SideSheet from "src/display/Drawer/SideSheet";
import { useIsMdScreen } from "src/guidelines/theme/mediaQueries";

export type DrawerProps = {
  openFrom?: "left" | "right";
  isOpen: boolean;
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  detent?: "full" | "content";
  isDismissable?: boolean;
  onClose: () => void;
  ariaLabel: string;
};

const Drawer = ({
  openFrom = "right",
  isOpen,
  header = null,
  footer = null,
  children,
  detent = "content",
  isDismissable = false,
  onClose,
  ariaLabel,
}: DrawerProps) => {
  const isMdScreen = useIsMdScreen();

  return isMdScreen ? (
    <SideSheet
      isOpen={isOpen}
      header={header}
      footer={footer}
      openFrom={openFrom}
      detent={`${detent}-width`}
      isDismissable={isDismissable}
      onClose={onClose}
      ariaLabel={ariaLabel}
    >
      {children}
    </SideSheet>
  ) : (
    <BottomSheet
      isOpen={isOpen}
      header={header}
      footer={footer}
      detent={`${detent}-height`}
      isDismissable={isDismissable}
      onClose={onClose}
      ariaLabel={ariaLabel}
    >
      {children}
    </BottomSheet>
  );
};

export default Drawer;
