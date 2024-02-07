import React from "react";
import clsx from "clsx";

import Button from "@/common/components/elements/Button";
import { SOCIAL_MEDIA } from "@/common/constant/social";

const SocialList = () => {
  const handleAction = (link: string) => window.open(link, "_blank");

  return (
    <>
      <div className="header-contact py-4">
        <h2 className="text-xl">Find me on social media</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-3">
        {SOCIAL_MEDIA?.map((item, index: number) => (
          <Button
            className={clsx(
              "w-full md:w-1/5 flex justify-center items-center hover:scale-105 transition-all duration-300",
              item?.className
            )}
            key={index}
            onClick={() => handleAction(item?.href)}
            icon={item?.icon}
            data-umami-event={item?.eventName}
          >
            {item?.title}
          </Button>
        ))}
      </div>
    </>
  );
};

export default SocialList;
