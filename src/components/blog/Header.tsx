import {BsTwitter, BsInstagram} from "react-icons/bs";

export default function Header() {
  return (
    <div className="px-4 py-4 flex flex-col gap-6">
      <div className="profile w-full flex-row">
        <div className="flex justify-center lg:justify-start">
          <h2>Ilham Ibnu Purnomo</h2>
        </div>
        <div className="flex justify-center lg:justify-start text-center lg:text-left">
          a happy full-stack developer who aims to help others grow in web
          development
        </div>
      </div>
      <div className="about w-full flex-row">
        <div className="flex flex-col pb-4 justify-center items-center lg:justify-start lg:items-start">
          <div className="text-xl font-semibold">About</div>
          <div>a man from moon</div>
        </div>
        <div className="social flex justify-center gap-2 text-lg">
          <a
            href="http://twitter.com/inupurnomo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-300 dark:bg-slate-700 duration-300 text-black dark:text-white"
          >
            <BsTwitter />
          </a>
          <a
            href="http://instagram.com/inupurnomo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-300 dark:bg-slate-700 duration-300 text-black dark:text-white"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
