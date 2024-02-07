import { useTheme } from "next-themes";
import React from "react";
import { RoughNotation } from "react-rough-notation";
import RepoCard from "./RepoCard";
import { getRepos } from "@/services/github";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { GetServerSideProps } from "next";

const Source = ({ data }: any) => {
  const { theme } = useTheme();
  return (
    <section className="section justify-center sm:pt-10 overflow-hidden my-10">
      <div className="text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={true}
        >
          <h2 className="section-heading">Open Sources</h2>
        </RoughNotation>
      </div>
      <div className="mt-8 mb-20">
        <RepoCard repos={data} />
      </div>
    </section>
  );
};

export default Source;
