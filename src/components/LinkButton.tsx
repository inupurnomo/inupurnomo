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
    <a
      role="button"
      className={`${
        outline
          ? "border border-marrsgreen hover:bg-marrsgreen dark:border-carrigreen dark:hover:bg-carrigreen text-marrsgreen hover:text-cardlight dark:text-carrigreen dark:hover:text-cardlight transition"
          : "bg-marrsgreen hover:bg-marrslight active:bg-marrsdark dark:hover:bg-carrilight dark:active:bg-carridark dark:bg-carrigreen text-bglight dark:text-cardlight"
      } py-2 px-3 rounded ${className} outline-marrsgreen dark:outline-carrigreen focus-visible:outline-double outline-offset-2`}
      href={href}
      target={`${targetBlank ? "_blank" : "_self"}`}
      title={title}
    >
      {children}
    </a>
  );
};