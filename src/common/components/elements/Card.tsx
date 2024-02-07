import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: unknown;
}

const Card = ({ children, className = "", ...others }: CardProps) => {
  return (
    <div
      className={`flex items-center gap-5 py-4 px-6 border border-neutral-300 dark:border-neutral-600 bg-cardlight dark:bg-carddark rounded-xl transition-all duration-300 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
