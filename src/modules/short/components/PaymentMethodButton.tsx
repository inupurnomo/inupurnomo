import Link from "next/link";

import Image from "@/common/components/elements/Image";


interface PaymentMethodButtonProps {
  href: string;
  imageSrc: string;
  altText: string;
}

const PaymentMethodButton: React.FC<PaymentMethodButtonProps> = ({
  href,
  imageSrc,
  altText,
}) => (
  <Link
    href={href}
    target="_blank"
    className="w-full"
    data-umami-event={`Click : ${altText}`}
  >
    <button className="flex justify-center border border-solid w-full px-5 py-3 rounded-xl hover:border-gray-400">
      <Image src={imageSrc} alt={altText} width={90} height={50} className="h-5" />
    </button>
  </Link>
);

export default PaymentMethodButton;
