import React, { useEffect, useRef } from "react";

import Image from "@/common/components/elements/Image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import LinkButton from "@/common/components/elements/LinkButton";

import laptop from "public/laptop-illustration.webp";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // bg text parallax effect
    gsap.to(q(".bg-text"), {
      scrollTrigger: {
        trigger: q(".bg-text"),
        scrub: true,
      },
      y: 350,
    });

    // text animation after initial load
    let tl = gsap.timeline({ defaults: { stagger: 0.2, duration: 0.3 } });
    tl.fromTo(q(".text-animation"), { y: 100 }, { y: 0, delay: 1 });

    // illustration floating effect
    let imgTl = gsap.timeline({ repeat: -1 });
    imgTl
      .to(q(".image-animation"), 3, {
        y: "-=30",
        x: "+=20",
        rotation: "-=2",
        ease: "power1.easeInOut",
      })
      .to(q(".image-animation"), 2, {
        y: "+=30",
        x: "-=20",
        rotation: "-=2",
        ease: "power1.easeInOut",
      })
      .to(q(".image-animation"), 3, {
        y: "-=20",
        rotation: "+=2",
        ease: "power1.easeInOut",
      })
      .to(q(".image-animation"), 3, {
        y: "+=20",
        rotation: "+=2",
        ease: "power1.easeInOut",
      });

    // laptop floating effect
    // let laptopTl = gsap.timeline({repeat: -1});
    // laptopTl
    //   .to(q(".laptop"), 3, {
    //     y: "-=10",
    //     x: "+=10",
    //     rotation: "-=1",
    //     ease: "Power1.easeInOut",
    //   })
    //   .to(q(".laptop"), 2, {
    //     y: "+=10",
    //     x: "-=10",
    //     rotation: "-=1",
    //     ease: "power1.easeInOut",
    //   })
    //   .to(q(".laptop"), 3, {
    //     y: "-=10",
    //     rotation: "+=1",
    //     ease: "power1.easeInOut",
    //   })
    //   .to(q(".laptop"), 3, {
    //     y: "+=10",
    //     rotation: "+=1",
    //     ease: "power1.easeInOut",
    //   });
  }, [q]);

  const resume = process.env.NEXT_PUBLIC_RESUME_URL;

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto h-screen min-h-[769px] max-w-5xl px-4 pt-8 sm:flex sm:flex-col sm:items-center sm:justify-center sm:px-8 sm:pb-24 md:px-20 lg:flex-row-reverse lg:pt-0"
    >
      <span
        aria-hidden="true"
        className="bg-text pointer-events-none absolute -top-36 z-0 rotate-12 scale-150 select-none text-center text-9xl font-bold tracking-wide text-gray-100 dark:text-[#1f2e3a]"
      >
        UI/UX DESIGNER WEB DEVELOPER SOFTWARE ENGINEER FULL-STACK DEVELOPER
      </span>

      <div className="image-animation z-10 mx-auto mt-0 select-none px-0 xs:mt-6 sm:mt-14 lg:-mt-20 lg:basis-1/3 lg:p-0">
        <div className="relative flex h-[440px] items-center justify-center pb-[70%] md:w-1/2">
          <div className="absolute-x-center absolute bottom-5 w-32">
            {/* <video
              className="w-32 rounded-full"
              playsInline={true}
              autoPlay={true}
              loop={true}
              src="/images/ava.mp4"
            >
              <source src="/images/ava.mp4" />
            </video> */}
            <Image src={'/images/vector.svg'} width={500} height={500} alt="vector" className="rounded-full" />
          </div>
          <div className="absolute-x-center absolute bottom-[-300px] flex w-96 items-center justify-center pb-96">
            <div className="absolute-y-center absolute-x-center absolute">
              <div className="circle-dashed w-[501px] animate-spin-slow pb-[501px]"></div>
            </div>
            <div className="absolute-y-center absolute-x-center absolute">
              <div className="circle-dashed w-96 animate-spin-slow pb-96 ease-in"></div>
            </div>
            <div className="absolute-y-center absolute-x-center absolute">
              <div className="circle-dashed w-64 animate-spin-slow pb-64 ease-in"></div>
            </div>
          </div>
          <div className="absolute bottom-72 left-36 rounded-full bg-[#0EA5E9] px-4 py-1 text-sm font-medium text-white shadow-lg sm:-left-20 md:-left-20 lg:left-4">
            React.js
          </div>
          <div className="absolute bottom-60 right-8 rounded-full bg-[#161616] px-4 py-1 text-sm font-medium text-white shadow-lg sm:-right-44 md:-right-44 lg:-right-24">
            Next.js
          </div>
          <div className="absolute bottom-56 left-14 rounded-full bg-[#F05340] px-4 py-1 text-sm font-medium text-white shadow-lg sm:-left-44 md:-left-44 lg:-left-24">
            Laravel
          </div>
          <div className="absolute bottom-48 right-24 rounded-full bg-[#0468D7] px-4 py-1 text-sm font-medium text-white shadow-lg sm:-right-32 md:-right-32 lg:-right-12">
            Flutter
          </div>
          <div className="absolute left-0 bottom-32 rounded-full bg-indigo-700 px-4 py-1 text-sm font-medium text-white shadow-lg sm:-left-52 md:-left-56 lg:-left-36">
            Rest API
          </div>
          <div className="absolute right-6 bottom-36 rounded-full bg-[#4ba13e] px-4 py-1 text-sm font-medium text-white shadow-lg sm:-right-56 md:-right-56 lg:-right-40">
            MongoDB
          </div>
        </div>
      </div>

      <div className="relative z-10 lg:basis-2/3">
        <span className="font-medium text-marrsgreen dark:text-carrigreen lg:text-lg">
          Hi 👋🏾! my name is
        </span>
        <div className="overflow-hidden">
          <h1 className="text-animation my-1 text-4xl font-semibold md:my-2 md:text-5xl lg:text-7xl">
            Ilham Ibnu Purnomo
          </h1>
        </div>
        <div className="overflow-hidden">
          <span className="text-animation block text-2xl font-medium text-marrsgreen dark:text-carrigreen md:my-3 md:text-3xl lg:text-5xl">
            A{" "}
            <Typewriter
              words={[
                "Full-stack Developer",
                "Web Developer",
                "Software Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
            />
          </span>
        </div>
        <span className="text-xl">
          Based in Jakarta<span className="ml-1">🇮🇩</span>
        </span>
        <div className="my-4 mt-2 md:mb-4">
          <p className="mb-1">
            I am a Full-Stack Developer with a passion for delivering
            exceptional results.
          </p>
          <p>
            With my expertise in React and NextJS on the frontend, and PHP,
            CodeIgniter, NodeJS, and Express on the backend, I bring a unique
            combination of technical skills and creative problem-solving to
            every project I work on.
          </p>
        </div>
        <div className="flex gap-2">
          <LinkButton
            href={`/open-source`}
            title="Check out my open-source projects"
          >
            Open-source
          </LinkButton>
          <LinkButton
            href={resume ?? '#'}
            title="My full resume"
            outline={true}
            targetBlank
          >
            Resume
          </LinkButton>
        </div>
      </div>
      <a
        href="#whoami"
        className="link-outline group absolute left-1/2 hidden -translate-x-1/2 transform animate-bounce flex-col items-center md:bottom-0 md:flex lg:bottom-0"
      >
        <span className="group-hover:text-marrsgreen dark:group-hover:text-carrigreen">
          Scroll
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="group-hover:fill-marrsgreen dark:fill-bglight dark:group-hover:fill-carrigreen"
        >
          <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
          <path d="M11 6h2v6h-2z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="group-hover:fill-marrsgreen dark:fill-bglight dark:group-hover:fill-carrigreen"
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>
      </a>
    </section>
  );
};

export default Hero;
