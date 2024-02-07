import React from "react";

import Loader from "@/common/components/Loader";
import SkipToMain from "@/common/components/SkipToMain";
import Footer from "@/common/components/layouts/Footer";

import ArchiveSection from "@/modules/archives/components/Archive";
import { NextSeo } from "next-seo";

const Dashboard = () => {
  return (
    <>
      <NextSeo title="Dashboard" />
      <Loader>Dashboard</Loader>
      <div className="overflow-hidden bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <main>
            <ArchiveSection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
