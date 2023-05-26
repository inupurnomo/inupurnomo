import Image from "next/image";
import {profileImg} from "public/assets";
import {BsTwitter, BsInstagram} from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-6 flex flex-col gap-6 px-4 py-4">
      <div className="profile w-full flex-row">
        <div className="flex flex-col items-center">
          <div className="flex h-48 w-48 rounded-2xl border border-slate-200/50 px-4 py-4">
            <Image
              className="h-full w-full rounded-lg"
              src={profileImg}
              alt="profileImg"
            />
          </div>
        </div>
      </div>
      <div className="me text-center lg:text-left">
        <div className="flex justify-center py-2 text-2xl font-semibold lg:justify-start">
          <h2>Ilham Ibnu Purnomo</h2>
        </div>
        <div className="flex justify-center text-center lg:text-left">
          a happy full-stack developer who aims to help others grow in web
          development
        </div>
      </div>
      <div className="about w-full">
        <div className="flex flex-col items-center justify-center pb-4 lg:items-start">
          <div className="flex text-xl font-semibold">About</div>
          <div>a man from moon</div>
        </div>
        <div className="social text-md flex justify-center gap-2">
          <a
            href="http://twitter.com/inupurnomo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-300 p-3 text-black duration-300 dark:bg-slate-700 dark:text-white"
          >
            <BsTwitter />
          </a>
          <a
            href="http://instagram.com/inupurnomo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-300 p-3 text-black duration-300 dark:bg-slate-700 dark:text-white"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
