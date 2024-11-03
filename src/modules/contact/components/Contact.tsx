/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";

import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import { useSection } from "@/common/context/section";
import useOnScreen from "@/common/hooks/useOnScreen";
import useScrollActive from "@/common/hooks/useScrollActive";
import Form from "./ContactForm";
import SocialList from "./SocialList";
import BookACall from "./BookACall";
import Separator from "@/common/components/elements/Separator";

const Contact = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for contact section
  const contactSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    contactSection && onSectionChange!("contact");
  }, [contactSection, onSectionChange]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section min-h-[768px] text-center"
    >
      <div className="text-center" ref={elementRef}>
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "#007A7A" : "#6290c8"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="text-2xl inline-block my-6 font-medium">Contact</h2>
        </RoughNotation>
      </div>
      <div className="contact text-left">
        <SocialList />
        <BookACall />
        <Separator />
        <Form />
      </div>
    </section>
  );
};

export default Contact;
