import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-center text-sm pb-6 text-neutral-500">
      <div>© {new Date().getFullYear()} by <Link href={"/"} title="inupurnomo">inupurnomo</Link></div>
    </div>
  );
};

export default Footer;
