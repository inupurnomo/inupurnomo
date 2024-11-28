import React from "react";

import Footer from "@/common/components/layouts/Footer";
import Source from "@/modules/opensource";
import { getRepos } from "@/services/github";
import SkipToMain from "@/common/components/elements/SkipToMain";
import Loader from "@/common/components/elements/Loader";
import { NextSeo } from "next-seo";

export const getStaticProps = async () => {
  const response = await getRepos();

  if (response?.status >= 404) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: response,
    },
  };
};

const OpenSource = ({ data }: any) => {
  return (
    <>
      <NextSeo title="Open Source" />
      <Loader>Open Source</Loader>
      <div className="overflow-hidden bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <main>
            {/* <Archives /> */}
            <Source {...data} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default OpenSource;
