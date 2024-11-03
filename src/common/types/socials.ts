import { ReactNode } from "react";

export type SocialProps = {
  title: string;
  label: string;
  description: string;
  href: string;
  icon: JSX.Element;
  isShow?: boolean;
  isExternal: boolean;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  eventName?: string;
  hideIcon?: boolean;
  type?: string;
  iconClass: string;
};

export type SocialFloatProps = {
  title: string;
  href: string;
  svg: JSX.Element;
};

export interface SocialItemProps {
  title: string;
  href: string;
  icon: ReactNode;
  isShow: boolean;
  isExternal: boolean;
  eventName: string;
  className?: string;
}
