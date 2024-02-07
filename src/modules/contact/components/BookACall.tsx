import React from "react";

const BookACall = () => {
  return (
    <>
      <div className="header-contact py-4">
        <h2 className="text-xl">Book a Call</h2>
      </div>
      <div className="body-contact">
        <a
          target="_blank"
          data-aos-duration="1000"
          className="flex flex-col space-y-5 bg-gradient-to-tr from-stone-50 to-white dark:from-teal-950 dark:to-teal-800 dark:text-white rounded-2xl py-5 px-6 cursor-pointer hover:scale-[101%] hover:shadow-sm transition-all duration-300 border dark:border-teal-500"
          href="https://cal.com/inupurnomo/schedule"
        >
          <div className="flex gap-5 items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-base md:text-lg font-medium">
                <span>1 on 1 Chit-chat Session</span>
              </div>
              <p className="dark:text-neutral-300 text-sm md:text-base">
                Let’s find some time to talk about anything
              </p>
            </div>
            <div className="p-3 border-2 border-neutral-400 dark:border-teal-600 dark:text-neutral-100 rounded-full">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-5 dark:text-neutral-200 text-sm">
            <div className="flex items-center gap-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>30 Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
              <span>Google Meet</span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default BookACall;
