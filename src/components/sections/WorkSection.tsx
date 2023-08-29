/* eslint-disable react/no-unescaped-entities */
import {useEffect, useRef} from "react";
import Link from "next/link";
import {useTheme} from "next-themes";
import {RoughNotation} from "react-rough-notation";

import {useSection} from "@/context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";

export default function WorkSection() {
  const {theme} = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for blog section
  const blogSection = useScrollActive(sectionRef);
  const {onSectionChange} = useSection();
  useEffect(() => {
    blogSection && onSectionChange!("blog");
  }, [blogSection, onSectionChange]);

  return (
    <div className="bg-[#F5F5F5] dark:bg-[#1B2731]">
      <section ref={sectionRef} id="blog" className="section md:px-10">
        <div className="text-center">
          <RoughNotation
            type="underline"
            color={`${
              theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"
            }`}
            strokeWidth={2}
            order={1}
            show={isOnScreen}
          >
            <h2 className="section-heading">Work Experience</h2>
          </RoughNotation>
        </div>
        <div className="text-center mb-8" ref={elementRef}>
          My work experience!
        </div>
        <div>
          <div className="mt-4 text-center">
            <Link href="/blog" className="link">
              Read all blog posts{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};