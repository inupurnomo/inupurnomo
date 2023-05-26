import Link from "next/link";

export default function BlogFooter() {
  return (
    <footer className="flex py-8">
      <div className="px-8 mx-auto">
        Built by{" "}
        <Link
          className="text-gray-900 dark:text-white"
          href="https://inupurnomo.com"
        >
          INUPURNOMO
        </Link>
      </div>
    </footer>
  );
}