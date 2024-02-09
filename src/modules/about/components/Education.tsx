import React, { useRef } from "react";

import EduGroup from "./EduGroup";
import { EDUCATION } from "@/common/constant/education";

const Education = () => {
  const eduRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className="col-start-3 col-end-6 row-start-1 row-end-5 place-content-end md:ml-8 lg:row-start-2 lg:row-end-5"
      ref={eduRef}
    >
      <p className="edu-bg my-4 font-semibold">
        Here is my educational background.
      </p>
      {EDUCATION.map((edu, index: number) => (
        <EduGroup key={index} {...edu} />
      ))}
    </div>
  );
};

export default Education;
