import React from "react";

import Loader from "@/common/components/elements/Loader";
import SkipToMain from "@/common/components/elements/SkipToMain";
import Footer from "@/common/components/layouts/Footer";
import RequestBoard from '@/modules/board'
import { NextSeo } from "next-seo";

const Archive = () => {
  return (
    <>
      <NextSeo title="Task Board" />
      <Loader>Task Board</Loader>
      <div className="overflow-hidden bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <main>
            <RequestBoard />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Archive;
