import {useEffect, useRef} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import LinkButton from "@/components/LinkButton";

import inupurnomo from "public/inupurnomo-illustration.webp";
import laptop from "public/laptop-illustration.webp";
import {Typewriter} from "react-simple-typewriter";

export default function HeroSection() {
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
    let tl = gsap.timeline({defaults: {stagger: 0.2, duration: 0.3}});
    tl.fromTo(q(".text-animation"), {y: 100}, {y: 0, delay: 1});

    // illustration floating effect
    let imgTl = gsap.timeline({repeat: -1});
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
    let laptopTl = gsap.timeline({repeat: -1});
    laptopTl
      .to(q(".laptop"), 3, {
        y: "-=10",
        x: "+=10",
        rotation: "-=1",
        ease: "Power1.easeInOut",
      })
      .to(q(".laptop"), 2, {
        y: "+=10",
        x: "-=10",
        rotation: "-=1",
        ease: "power1.easeInOut",
      })
      .to(q(".laptop"), 3, {
        y: "-=10",
        rotation: "+=1",
        ease: "power1.easeInOut",
      })
      .to(q(".laptop"), 3, {
        y: "+=10",
        rotation: "+=1",
        ease: "power1.easeInOut",
      });
  }, [q]);

  return (
    <section
      ref={sectionRef}
      className="relative pt-8 lg:pt-0 px-4 sm:px-8 md:px-20 max-w-5xl sm:pb-24 min-h-[769px] mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex-row-reverse h-screen"
    >
      <span
        aria-hidden="true"
        className="bg-text absolute -top-36 rotate-12 text-gray-100 dark:text-[#1f2e3a] text-9xl scale-150 tracking-wide font-bold select-none pointer-events-none text-center z-0"
      >
        UI/UX DESIGNER WEB DEVELOPER SOFTWARE ENGINER FULL-STACK DEVELOPER
      </span>

      <div className="image-animation z-10 select-none mt-0 xs:mt-6 sm:mt-14 lg:-mt-20 px-0 mx-auto lg:p-0 lg:basis-1/3">
        <div className="h-[440px] md:w-1/2 pb-[70%] relative flex justify-center items-center">
          <div className="w-32 absolute absolute-x-center bottom-5">
            <video
              className="w-32 rounded-full"
              playsInline={true}
              autoPlay={true}
              loop={true}
              src="/images/ava.mp4"
            >
              <source src="/images/ava.mp4" />
            </video>
          </div>
          <div className="absolute w-96 pb-96 bottom-[-300px] absolute-x-center flex justify-center items-center">
            <div className="absolute absolute-y-center absolute-x-center">
              <div className="circle-dashed w-[501px] pb-[501px] animate-spin-slow"></div>
            </div>
            <div className="absolute absolute-y-center absolute-x-center">
              <div className="circle-dashed w-96 pb-96 animate-spin-slow ease-in"></div>
            </div>
            <div className="absolute absolute-y-center absolute-x-center">
              <div className="circle-dashed w-64 pb-64 animate-spin-slow ease-in"></div>
            </div>
          </div>
          <div className="bg-[#0EA5E9] text-sm font-medium absolute bottom-72 -left-20 px-4 py-1 rounded-full text-white shadow-lg">
            React.js
          </div>
          <div className="bg-[#161616] text-sm font-medium absolute bottom-60 -right-44 px-4 py-1 rounded-full text-white shadow-lg">
            Next.js
          </div>
          <div className="bg-[#F05340] text-sm font-medium absolute bottom-56 -left-44 px-4 py-1 rounded-full text-white shadow-lg">
            Laravel
          </div>
          <div className="bg-[#0468D7] text-sm font-medium absolute bottom-48 -right-32 px-4 py-1 rounded-full text-white shadow-lg">
            Flutter
          </div>
          <div className="bg-indigo-700 text-sm font-medium absolute bottom-32 -left-56 px-4 py-1 rounded-full text-white shadow-lg">
            Rest API
          </div>
          <div className="bg-[#4ba13e] text-sm font-medium absolute bottom-36 -right-56 px-4 py-1 rounded-full text-white shadow-lg">
            MongoDB
          </div>
        </div>
      </div>

      {/* <div className="image-animation z-10 select-none mt-0 xs:mt-6 sm:mt-14 lg:mt-0 px-0 mx-auto lg:p-0 lg:basis-1/3">
        <div className="relative w-72 md:w-80 h-80 flex items-center mx-auto">
          <div className="absolute pointer-events-none scale-90 xs:scale-95 mx-auto">
            <Image
              src={inupurnomo}
              width={1177}
              height={1374}
              priority
              id="character-illustration"
              aria-label="INUPURNOMO character illustration levitating with a Macbook"
              alt="INUPURNOMO character illustration"
            />
          </div>
          <div className="laptop absolute top-14 sm:top-16 left-0 scale-[.41] xs:scale-[.45] pointer-events-none">
            <Image
              src={laptop}
              width={559}
              height={386}
              aria-hidden="true"
              alt="Laptop illustration"
            />
          </div>
        </div>
      </div> */}

      <div className="lg:basis-2/3 z-10 relative">
        <span className="text-marrsgreen lg:text-lg font-medium dark:text-carrigreen">
          Hi 👋🏾! my name is
        </span>
        <div className="overflow-hidden">
          <h1 className="text-animation text-4xl md:text-5xl lg:text-7xl md:my-2 font-semibold my-1">
            Ilham Ibnu Purnomo
          </h1>
        </div>
        <div className="overflow-hidden">
          <span className="text-animation text-2xl md:text-3xl lg:text-5xl block md:my-3 text-marrsgreen dark:text-carrigreen font-medium">
            A{" "}
            <Typewriter
              words={[
                "Full-stack Developer",
                "UI/UX Designer",
                "Web Developer",
                "Software Engineer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
            />
          </span>
        </div>
        <div className="mt-2 my-4 md:mb-4">
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
            href={`/resume.pdf`}
            title="My full resume"
            outline={true}
          >
            Resume
          </LinkButton>
        </div>
      </div>
      <a
        href="#whoami"
        className="group absolute link-outline animate-bounce hidden md:bottom-0 lg:bottom-0 left-1/2 transform -translate-x-1/2 md:flex items-center flex-col"
      >
        <span className="group-hover:text-marrsgreen dark:group-hover:text-carrigreen">
          Scroll
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="dark:fill-bglight group-hover:fill-marrsgreen dark:group-hover:fill-carrigreen"
        >
          <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
          <path d="M11 6h2v6h-2z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="dark:fill-bglight group-hover:fill-marrsgreen dark:group-hover:fill-carrigreen"
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>
      </a>
    </section>
  );
}
