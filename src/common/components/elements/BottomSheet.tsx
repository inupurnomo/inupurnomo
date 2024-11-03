"use client";

import { ReactNode } from "react";
import Sheet from "react-modal-sheet";

import "react-spring-bottom-sheet/dist/style.css";

type BottomSheetProps = {
  title?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
};

const BottomSheet = ({
  title,
  children,
  isOpen,
  onClose,
}: BottomSheetProps) => {
  return (
      <Sheet
        isOpen={isOpen}
        onClose={() => onClose(false)}
        detent="content-height"
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller>
              <div className="text-bgdark text-center">{title}</div>
              <hr className="border mt-2" />
              <div style={{ height: "auto" }}>{children}</div>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
  );
};

export default BottomSheet;
