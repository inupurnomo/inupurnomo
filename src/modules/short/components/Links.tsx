"use client";

import { useState } from "react";
import { PiLinkBreakDuotone as LinkIcon } from "react-icons/pi";

import Sheet from "react-modal-sheet";
import BottomSheet from "@/common/components/elements/BottomSheet";
import SectionHeader from "@/common/components/layouts/SectionHeader";
import { LINKS } from "@/common/constant/links";

import BuyACoffee from "./BuyACoffee";
import LinkItem from "./LinkItem";

const Links = () => {
  const [isOpen, setOpen] = useState(false);
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const handleClick = (url: string, target: string | undefined) => {
    if (url !== "#") {
      window.open(url, target);
    } else {
      setOpen(true);
    }
  };

  return (
    <section className="space-y-4">
      <SectionHeader icon={<LinkIcon size={24} />} title="Links" />
      <div className="flex flex-col w-full gap-y-3">
        {LINKS?.map((item, index) => (
          <LinkItem key={index} index={index} onClick={handleClick} {...item} />
        ))}
      </div>

      <BottomSheet
        key={isBottomSheetOpen ? "bottom-sheet-open" : "bottom-sheet-closed"}
        title="Buy me a Cup of Coffee"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      >
        <BuyACoffee />
      </BottomSheet>
    </section>
  );
};

export default Links;
