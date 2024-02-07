import React from "react";

import { CAREERS } from "@/common/constant/careers";
import CareerCard from "./CareerCard";

const Careers = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      {CAREERS?.map((career, index: number) => (
        <CareerCard key={index} {...career}/>
      ))}
    </div>
  );
};

export default Careers;
