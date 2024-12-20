"use client";

import clsx from "clsx";
import { useState } from "react";
import { LuClipboardCopy as CopyIcon } from "react-icons/lu";

import Image from "@/common/components/elements/Image";
import { BankAccountsProps } from "@/common/types/bank";

const AccountCard = ({
  bank,
  number,
  holder,
  logo,
  type,
  color,
  className,
}: BankAccountsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const gradientCard = isHovered
    ? "url('/images/bg-gradient-1.svg'), url('/images/shiny_card_animated.svg')"
    : "url('/images/bg-gradient-1.svg')";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(number).then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      });
    } catch (err) {
      // console.error("Failed to copy: ", err);
    }
  };

  return (
    <div
      className={clsx(
        "flex flex-col justify-between p-5 border rounded-xl h-56 bg-no-repeat ",
        "transition-all duration-300",
        "hover:scale-[103%] group",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: gradientCard,
        backgroundPosition: "right top, center",
        backgroundSize: "88%, cover",
      }}
    >
      <div className="flex justify-between items-start">
        <div
          className="text-lg font-medium group-hover:!text-white"
          style={{ color: color }}
        >
          {bank}
        </div>
        <Image src={logo} alt={bank} height={55} width={55} />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-y-0.5">
          <span className="text-xs font-light opacity-80">ACCOUNT NUMBER</span>
          <div className="flex gap-1 items-center">
            <div className="font-medium text-xl">
              {number?.match(/.{1,3}/g)?.map((group, index) => (
                <span key={index} className="mr-1.5">
                  {group}
                </span>
              ))}
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer text-xs border py-1 px-1.5 rounded-full border-neutral-300 group-hover:border-white hover:bg-neutral-500/60 duration-100"
              title="Click to copy"
              onClick={handleCopy}
              data-umami-event={`Copy : Account Number ${bank}`}
            >
              <CopyIcon size={14} />
              <span>Copy</span>
            </div>
            {isCopied && <span className="text-xs ml-2">Copied!</span>}
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex flex-col flex-grow gap-y-0.5">
            <span className="text-xs font-light opacity-80">
              ACCOUNT HOLDER
            </span>
            <span className="text-base uppercase font-medium">{holder}</span>
          </div>
          <Image
            src={`/images/payment/${type}.png`}
            alt={bank}
            height={85}
            width={65}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
