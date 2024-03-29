import { FiArrowLeft } from "react-icons/fi";

import Image from "@/common/components/elements/Image";

const Qris = ({ onBack }: { onBack: () => void }) => {
  const downloadQrisImage = () => {
    const link = document.createElement("a");
    link.href = "/images/qris-inupurnomo.webp";
    link.download = "qris-inupurnomo.webp";
    link.click();
  };

  return (
    <>
      <Image src="/images/qris-long.webp" alt="QRIS" width={200} height={50} />
      <Image src="/images/qris.svg" alt="QRIS" width={300} height={300} />
      <div className="flex w-full px-3 gap-3 text-bgdark">
        <button
          onClick={onBack}
          className="flex w-auto items-center justify-center gap-x-2 p-3 rounded-full hover:gap-x-3 transition-all duration-300 border-2 border-neutral-500 hover:border-neutral-900"
        >
          <FiArrowLeft size={24} />
        </button>
        <button
          onClick={downloadQrisImage}
          className="flex flex-grow items-center justify-center gap-x-2 py-3 px-5 rounded-xl hover:gap-x-3 transition-all duration-300 bg-neutral-900 text-white"
        >
          Download QRIS Image
        </button>
      </div>
    </>
  );
};

export default Qris;
