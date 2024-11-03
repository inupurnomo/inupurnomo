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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {SOCIAL_MEDIA?.map((item, index: number) => (
          // <Button
          //   className={clsx(
          //     "w-full md:w-1/5 flex justify-center items-center hover:scale-105 transition-all duration-300",
          //     item?.className
          //   )}
          //   key={index}
          //   onClick={() => handleAction(item?.href)}
          //   icon={item?.icon}
          //   data-umami-event={item?.eventName}
          // >
          //   {item?.title}
          // </Button>
          <div key={index} className={`flex h-max w-full items-end justify-between rounded-lg border bg-opacity-40 bg-gradient-to-br p-4 md:p-6 ${item.className}`}>
            <div className="text-slate-800 dark:text-slate-400">
              <h3 className="text-xl font-semibold">{item.label}</h3>
              <p className="my-2 max-w-[250px] text-[10px] md:text-xs">
                {item.description}
              </p>
              <Button
                className="group/link leading-tight hover:text-marrsgreen focus-visible:text-marrsgreen mt-4 flex w-max items-center gap-1 rounded-md px-3 py-2 text-xs font-medium text-white shadow-sm transition-all duration-150 dark:text-black md:px-4 md:py-2 md:text-sm bg-slate-800 hover:bg-slate-700 dark:bg-slate-400 dark:hover:bg-slate-300"
                onClick={() => handleAction(item?.href)}
                rel="noreferrer"
                aria-label={"#"}
              >
                <span>
                  {" "}
                  <span className="inline-block">
                    Go to {item.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </Button>
            </div>
            <div className={`flex h-12 w-12 items-center justify-center rounded-full text-white md:h-16 md:w-16 ${item.iconClass}`}>
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SocialList;
