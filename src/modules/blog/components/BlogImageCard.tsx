import React, { useEffect, useRef } from "react";

import Image from "@/common/components/elements/Image";
import Link from "next/link";
import gsap from "gsap";
import Tag from "@/common/components/blog/Tag";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import DateTime from "@/common/components/elements/DateTime";

type Props = {
  post: {
    coverImage?: string;
    coverImageAlt?: string;
    slug: string;
    title: string;
    excerpt: string;
    datetime: string;
    tags?: string[];
  };
  fullWH?: boolean;
  className?: string;
};

const BlogImageCard = ({ post, fullWH = false, className = "" }: Props) => {
  const { title, coverImage, coverImageAlt, slug, excerpt, datetime, tags } =
    post;

  const sectionRef = useRef<HTMLDivElement>(null);

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `70% bottom`,
      },
    });

    tl.fromTo(
      q(".blog-image"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeInOut",
        duration: 0.5,
        stagger: 0.2,
      }
    )
      .fromTo(q(".blog-title"), { y: 100 }, { y: 0, stagger: 0.2 }, "<25%")
      .fromTo(
        q(".blog-text"),
        { opacity: 0 },
        { opacity: 1, stagger: 0.2 },
        "<10%"
      );
  }, []);
  return (
    <div
      ref={sectionRef}
      className={`sm:min-w-[17rem] transition translate-y-2 hover:-translate-y-0 max-w-md bg-gray-100 dark:bg-carddark p-4 rounded shadow-md hover:shadow-xl ${
        fullWH ? "w-full" : "w-72 my-2"
      } ${className}`}
    >
      <div className="flex flex-col-reverse">
        <div className="mb-2 overflow-hidden">
          <Link
            href={`/blog/posts/${slug}`}
            target="_blank"
            className="blog-title link inline-block outline-none dark:outline-none focus-within:underline"
          >
            <h3
              className={`${
                fullWH ? "text-lg sm:text-md" : "text-md"
              } font-medium line-clamp-2`}
            >
              {title}
            </h3>
          </Link>
        </div>
        <div className="blog-image relative w-full h-48 md:h-40 mb-3">
          <Image
            src={coverImage!}
            sizes="100vw"
            fill
            className="object-contain"
            alt={coverImageAlt ?? title}
          />
        </div>
      </div>
      <div className="italic text-sm mb-1 text-carddark dark:text-gray-300 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <DateTime datetime={datetime} />
      </div>
      <p
        className={`blog-text dark:text-gray-300 ${
          fullWH ? "text-base sm:text-sm" : "text-sm w-60"
        } overflow-hidden text-ellipsis line-clamp-4 leading-7 sm:leading-6`}
      >
        {excerpt}
      </p>
      {tags && (
        <div className="my-2">
          {tags.map((tag: string) => (
            <Tag
              page="index"
              tag={tag.replace(/\s+/g, "-").toLowerCase()}
              key={tag.replace(/\s+/g, "-").toLowerCase()}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogImageCard;
