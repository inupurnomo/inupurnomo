import Layout from "@/layout/Layout";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import {motion} from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Project from "@/components/Project";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/part/BackToTop";

export default function Home() {
  return (
    <>
      <Layout customMeta={{title: 'INUPURNOMO - Fullstack Developer'}}>
        <Navbar />
        <div className="w-full items-center justify-between gap-20 xl:flex">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.5}}
            className="fixed bottom-0 left-0 z-50 w-32 xl:inline-flex"
          >
            <LeftSide />
          </motion.div>
          <div className="mx-auto w-full">
            <Banner />
            <About />
            <Experience />
            <Education />
            <Project />
            <Archive />
            <Contact />
            <Footer />
            <BackToTop />
          </div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.5}}
            className="fixed -right-6 top-0 w-32 xl:inline-flex"
          >
            <RightSide />
          </motion.div>
        </div>
      </Layout>
    </>
  );
}