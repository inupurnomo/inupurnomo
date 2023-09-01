import Link from "next/link";

type Props = {
  href: string;
  title?: string;
  targetBlank?: boolean;
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function LinkButton({
  href,
  title,
  targetBlank = false,
  outline = false,
  className = "",
  children,
}: Props) {
  return (
    <Link
      role="button"
      className={`${
        outline
          ? "border border-marrsgreen text-marrsgreen transition hover:bg-marrsgreen hover:text-cardlight dark:border-carrigreen dark:text-carrigreen dark:hover:bg-carrigreen dark:hover:text-cardlight"
          : "bg-marrsgreen text-bglight hover:bg-marrslight active:bg-marrsdark dark:bg-carrigreen dark:text-cardlight dark:hover:bg-carrilight dark:active:bg-carridark"
      } rounded px-3 py-2 ${className} outline-offset-2 outline-marrsgreen focus-visible:outline-double dark:outline-carrigreen`}
      href={href}
      target={`${targetBlank ? "_blank" : "_self"}`}
      title={title}
    >
      {children}
    </Link>
  );
};