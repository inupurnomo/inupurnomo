import Head from "next/head";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import {motion} from "framer-motion";
import Footer from "@/components/Footer";
import {FaAngleDoubleLeft} from "react-icons/fa";
import Link from "next/link";
import RepoCard from "@/components/part/RepoCard";
import DarkMode from "@/components/part/DarkMode";
import { GITHUB_API_URL, GITHUB_USERNAME } from "@/data";
import Layout from "@/layout/Layout";

export const getStaticProps = async () => {
  const res = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`);
  let allAlbums = await res.json();

  return {
    props: {data: allAlbums},
  };
};

export default function OpenSource({data}:any) {
  return (
    <Layout customMeta={{title: 'Open Source - Diggy'}}>
      <main className="w-full overflow-x-hidden overflow-y-hidden bg-light1 font-bodyFont text-textDark dark:bg-dark1 dark:text-textLight">
        <div className="w-full items-center justify-between gap-20 xl:flex">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.5}}
            className="fixed bottom-0 left-0 w-32 xl:inline-flex"
          >
            <LeftSide />
          </motion.div>
          <div className="mx-auto w-full">
            <div className="w-full text-2xl">
              <div className="absolute flex w-full flex-row items-center justify-between px-12 py-10 mdl:px-28">
                <Link href={"/"}>
                  <motion.div
                    initial={{x: -20, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className="flex flex-row gap-3"
                  >
                    <span className="text-textPrimarymt-1">
                      <FaAngleDoubleLeft />
                    </span>
                    <span className="text-lg transition-all duration-300 hover:translate-x-2 hover:text-textLink">
                      Back to Home
                    </span>
                  </motion.div>
                </Link>
                <motion.div
                  initial={{x: 20, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  transition={{duration: 0.5, delay: 0.5}}
                >
                  <DarkMode />
                </motion.div>
              </div>
            </div>
            {<RepoCard repos={data} />}
            <Footer />
          </div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.7}}
            className="fixed -right-6 top-0 w-32 xl:inline-flex"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </Layout>
  );
}
