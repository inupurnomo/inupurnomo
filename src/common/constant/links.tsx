import {
  BiBriefcaseAlt2 as BusinessIcon,
  BiCalendar as ChitChatIcon,
  BiCoffee as CoffeeIcon,
  BiFile as PDFIcon,
  BiPin as WebsiteIcon,
} from "react-icons/bi";

import { LinkProps } from "../types/link";
import { PROFILE as profile } from "./about";

export const LINKS: LinkProps[] = [
  {
    label: "Personal Website & Portfolio",
    icon: <WebsiteIcon size={21} className="text-neutral-600" />,
    href: "https://inupurnomo.my.id",
    className: "bg-emerald-700",
    target: "_blank",
  },
  {
    label: "Resume & Curriculum Vitae",
    icon: <PDFIcon size={21} className="text-neutral-600" />,
    href: profile.resume ?? '#',
    className: "bg-sky-700",
    target: "_blank",
  },
  {
    label: "1 on 1 Chit Chat Session",
    icon: <ChitChatIcon size={21} className="text-neutral-600" />,
    href: "https://cal.com/inupurnomo/schedule",
    className: "bg-rose-600",
    target: "_blank",
  },
  // {
  //   label: "PT Flexcode Space Teknologi",
  //   icon: <BusinessIcon size={21} className="text-neutral-600" />,
  //   href: "https://flexcode.co.id",
  //   className: "bg-violet-800",
  //   target: "_blank",
  // },
  {
    label: "Buy me a Cup of Coffee",
    icon: <CoffeeIcon size={21} className="text-neutral-600" />,
    href: "#",
    className: "bg-neutral-800",
    target: "",
  },
];
