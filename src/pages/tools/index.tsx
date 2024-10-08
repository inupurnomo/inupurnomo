import React, { useEffect, useRef } from "react";

import { useTheme } from "next-themes";

import { NextSeo } from "next-seo";

const Tools = () => {
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
      <NextSeo title="Tools" />
      <section>Dev Tools</section>
    </>
  );
};

export default Tools;
