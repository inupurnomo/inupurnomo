import React from "react";

import Image from "@/common/components/elements/Image";

const Profile = () => {
  return (
    <div className="col-start-1 col-end-3 row-start-1 row-end-5 flex items-center justify-center py-4 md:row-start-1 md:row-end-3 lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-5">
      <div className="relative w-72">
        <svg
          width="96"
          height="21"
          viewBox="0 0 96 21"
          aria-hidden="true"
          className="img-svg absolute -left-14 -top-14 hidden fill-marrsgreen dark:fill-carrigreen lg:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M79.2202 0.959991L62.7802 17.32L46.3301 0.959991L29.8902 17.32L13.4501 0.959991L0.410156 13.94L0.400146 17.58L13.4501 4.58999L29.8902 20.95L46.3301 4.58999L62.7802 20.95L79.2202 4.58999L93.7302 19.02L95.5402 17.19L79.2202 0.959991Z" />
        </svg>

        <div className="profile-picture overflow-hidden rounded-md md:overflow-visible md:shadow-2xl">
          <Image
            src={'/images/me.webp'}
            width={1700}
            height={1790}
            alt="inupurnomo profile picture"
            className="rounded-md"
          />
        </div>

        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          aria-hidden="true"
          className="img-svg absolute -right-12 bottom-8 hidden fill-marrsgreen dark:fill-carrigreen lg:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.68 11.51L9.23 7.05998L13.68 2.61C14.24 2.05 14.24 1.12999 13.68 0.569994C13.12 0.00999391 12.2 0.00999391 11.64 0.569994L7.19002 5.02001L2.74001 0.569994C2.18001 0.00999391 1.26003 0.00999391 0.700029 0.569994C0.140029 1.12999 0.140029 2.05 0.700029 2.61L5.15004 7.05998L0.700029 11.51C0.140029 12.07 0.140029 12.99 0.700029 13.55C1.26003 14.11 2.18001 14.11 2.74001 13.55L7.19002 9.09999L11.64 13.55C12.2 14.11 13.12 14.11 13.68 13.55C14.24 12.99 14.24 12.08 13.68 11.51Z" />
        </svg>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="img-svg absolute -bottom-10 right-6 hidden scale-150 fill-[#FF9D00] lg:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.6799 5.68002C11.6799 8.65002 9.27994 11.05 6.30994 11.05C3.33994 11.05 0.939941 8.65002 0.939941 5.68002C0.939941 2.71002 3.33994 0.309998 6.30994 0.309998C9.27994 0.309998 11.6799 2.71002 11.6799 5.68002Z" />
        </svg>
      </div>
    </div>
  );
};

export default Profile;
