import { BankAccountsProps } from "../types/bank";

export const BANK_ACCOUNTS: BankAccountsProps[] = [
  {
    number: "3370613736",
    holder: "Ilham Ibnu Purnomo",
    bank: "Bank BCA",
    type: "mastercard",
    logo: "/images/payment/bca.png",
    color: "#0066ae",
    className: "border-[#0066ae] hover:bg-[#0066ae] hover:text-white",
  },
  {
    number: "008197426809",
    holder: "Ilham Ibnu Purnomo",
    bank: "Blu BCA DIGITAL",
    type: "mastercard",
    logo: "/images/payment/blu.png",
    color: "#2ecdd2",
    className: "border-[#2ecdd2] hover:bg-[#2ecdd2] hover:text-white",
  },
  {
    number: "102908848956",
    holder: "Ilham Ibnu Purnomo",
    bank: "Bank Jago",
    type: "visa",
    logo: "/images/payment/jago.png",
    color: "#feab2f",
    className: "border-[#feab2f] hover:bg-[#feab2f] hover:text-white",
  },
  // {
  //   number: "#",
  //   holder: "Ilham Ibnu Purnomo",
  //   bank: "Bank Mandiri",
  //   type: "mastercard",
  //   logo: "/images/payment/mandiri.png",
  //   color: "#064c90",
  //   className: "border-[#064c90] hover:bg-[#064c90] hover:text-white",
  // },
  // {
  //   number: "#",
  //   holder: "Ilham Ibnu Purnomo",
  //   bank: "Bank BSI",
  //   type: "mastercard",
  //   logo: "/images/payment/bsi.png",
  //   color: "#00A39D",
  //   className: "border-[#00A39D] hover:bg-[#00A39D] hover:text-white",
  // },
];
