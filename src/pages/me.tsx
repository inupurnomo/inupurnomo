import React, { useEffect, useRef } from "react";

import { useTheme } from "next-themes";

import Home from "@/modules/short";
import { NextSeo } from "next-seo";

const Me = () => {
  const { theme, setTheme } = useTheme();
  const themeBtnRef = useRef<HTMLButtonElement>(null);
  // update theme button aria-label according to theme value
  useEffect(() => {
    const themeBtn = themeBtnRef.current;
    if (themeBtn) {
      themeBtn.ariaLabel = theme ?? "light";
    }
  }, [theme]);
  return (
    <>
      <NextSeo title="ME" />
      <Home />
    </>
  );
};

export default Me;
