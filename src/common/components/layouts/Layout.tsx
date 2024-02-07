import clsx from "clsx";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";

import Footer from "../../../modules/short/components/Footer";

const sora = Sora({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`max-w-[480px] mx-auto bg-white text-bgdark md:shadow-xl md:rounded-lg md:my-3 ${clsx(
        sora.className
      )}`}
    >
      {children}
      <Footer />
    </div>
  );
}
