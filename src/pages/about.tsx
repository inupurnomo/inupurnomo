import React from "react";

import Loader from "@/common/components/elements/Loader";
import SkipToMain from "@/common/components/elements/SkipToMain";
import Footer from "@/common/components/layouts/Footer";

import { NextSeo } from "next-seo";

import About from "@/modules/aboutSec/components/About";

const AboutPage = () => {
  return (
    <>
      <NextSeo title="About" />
      <Loader>About</Loader>
      <div className="overflow-hidden bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <main>
            <div className="section">
              
              <About />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
