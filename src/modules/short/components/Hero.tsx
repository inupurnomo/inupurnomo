"use client";

import Image from "@/common/components/elements/Image";
import { PROFILE as profile } from "@/common/constant/about";

const Hero = () => {
  const coverImage =
    "url('/images/shiny_card_animated.svg'), url('/images/cover.webp')";

  return (
    <header className="flex flex-col items-center justify-center">
      <div
        className="w-full h-28 md:h-40 md:rounded-t-lg bg-cover"
        data-aos="fade-down"
        data-aos-duration="1000"
        style={{
          backgroundImage: coverImage,
          backgroundPosition: "center, bottom",
        }}
      ></div>
      <div
        className="rounded-full bg-white border-2 -mt-[60px]"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
        <Image
          src={profile.avatar}
          alt={profile.username}
          width={100}
          height={100}
          rounded="rounded-full"
          className="lg:hover:scale-105"
        />
      </div>
      <div className="pt-5 px-8">
        <div
          className="flex flex-col justify-center items-center space-y-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-1 items-center text-center">
            <h1 className="text-2xl font-medium">{profile.name}</h1>
            <div className="flex gap-2 text-[15px] text-neutral-500">
              <span>{profile.base}</span>
              <span className="text-neutral-300">•</span>
              <span>{profile.pronounce}</span>
            </div>
          </div>
          <p className="text-center text-neutral-600 text-[15px] md:text-base mx-1.5 leading-relaxed">
            {profile.description}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
