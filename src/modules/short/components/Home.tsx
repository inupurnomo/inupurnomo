import BreakLine from "@/common/components/elements/BreakLine";
import Contact from "./Contact";
import Hero from "./Hero";
import Links from "./Links";
import SocialsLinks from "./SocialsLinks";
import PageWrapper from "@/common/components/layouts/PageWrapper";
import clsx from "clsx";
import { Sora } from "next/font/google";
import Layout from "@/common/components/layouts/Layout";
const sora = Sora({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Layout>
        <PageWrapper>
          <Hero />
          <div className="p-6 space-y-5">
            <SocialsLinks />
            <BreakLine />
            <Links />
            <BreakLine />
            <Contact />
          </div>
        </PageWrapper>
      </Layout>
    </>
  );
};

export default Home;
