import React from "react";
import { ABOUT } from "@/common/constant/about";

const Story = () => {
  return (
    <div className="about-intro col-start-1 col-end-3 row-start-4 row-end-6 md:row-start-3 lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-2 lg:ml-8 lg:mt-auto">
      <span dangerouslySetInnerHTML={{ __html: ABOUT }} />
    </div>
  );
};

export default Story;
