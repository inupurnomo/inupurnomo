import { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";

import Container from "@/common/components/elements/Container";
import Playground from "@/modules/playground";

const PlaygroundPage: NextPage = () => {
  return (
    <>
      <NextSeo title="JavaScript Playground" />
      <Container className="!mt-0 pt-20 md:pt-0" data-aos="fade-up">
        <Playground id="playground" isHeading />
      </Container>
    </>
  );
};

export default PlaygroundPage;
