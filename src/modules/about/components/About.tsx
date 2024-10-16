import React, { useEffect, useRef } from "react";

import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useSection } from "@/common/context/section";
import useOnScreen from "@/common/hooks/useOnScreen";
import useScrollActive from "@/common/hooks/useScrollActive";

import AboutBgSvg from "@/common/components/elements/AboutBgSvg";

import Story from "./Story";
import Education from "./Education";
import Profile from "./Profile";
import Skills from "./Skills";
import Link from "next/link";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // profile-picture
    gsap.fromTo(
      q(".profile-picture"),
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: q(".profile-picture"),
          start: "20% bottom",
        },
      }
    );

    const fromAnimation = {
      y: 100,
      opacity: 0,
    };

    const toAnimation = (triggerTarget: string) => ({
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: q(`.${triggerTarget}`),
        start: "top bottom",
      },
    });

    // about-intro
    gsap.fromTo(q(".about-intro"), fromAnimation, toAnimation("about-intro"));

    // edu-bg
    gsap.fromTo(q(".edu-bg"), fromAnimation, toAnimation("edu-bg"));

    // bg svg parallax effect
    gsap.fromTo(
      q(".bg-svg"),
      { y: -80 },
      {
        scrollTrigger: {
          trigger: q(".bg-svg"),
          scrub: true,
        },
        y: 65,
        duration: 3,
      }
    );

    // image bg svg parallax effect
    gsap.fromTo(
      q(".img-svg"),
      { y: -30 },
      {
        scrollTrigger: {
          trigger: q(".img-svg"),
          start: "80% 75%",
          scrub: true,
        },
        y: 30,
      }
    );
  }, [q]);

  const { theme } = useTheme();

  // Set active link for about section
  const aboutSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    aboutSection ? onSectionChange!("about") : onSectionChange!("");
  }, [aboutSection, onSectionChange]);

  return (
    <div
      ref={sectionRef}
      className="about-panel relative bg-white dark:bg-[#1B2731]"
    >
      <section id="whoami" className="section">
        <div className="text-center">
          <RoughNotation
            type="underline"
            color={`${theme === "light" ? "#007A7A" : "#6290c8"}`}
            strokeWidth={2}
            order={1}
            show={isSecOnScreen}
          >
            <h2 className="section-heading">Who am I?</h2>
          </RoughNotation>
        </div>
        <div className="grid-cols-5 grid-rows-2 md:grid lg:grid-rows-4">
          <Profile />
          <Story />
          <Education />
        </div>
        <div className="my-6 flex justify-center py-1">
          <Link href={"/about"} className="link">
            More About Me{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-6 w-6"
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
        <Skills />
      </section>

      <AboutBgSvg />
    </div>
  );
};

export default About;
