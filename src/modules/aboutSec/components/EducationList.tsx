
import { EducationProps } from "@/common/types/education";
import EducationCard from "./EducationCard";
import { EDUCATION } from "@/common/constant/education";

const EducationList = () => {

  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-1">
        {EDUCATION?.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default EducationList;
