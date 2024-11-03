import React from "react";

import Footer from "@/common/components/layouts/Footer";
import Header from "@/common/components/layouts/Navbar";
import Source from "@/modules/opensource";
import { getRepos } from "@/services/github";

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
      <Header />
      <Source {...data} />
      <Footer />
    </>
  );
};

export default OpenSource;
