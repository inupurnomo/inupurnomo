import Image from "next/image";
import Link from "next/link";
import fill from "../../public/images/fill.png";
import {profileImg} from "public/assets";
import {GITHUB_API_URL, GITHUB_USERNAME} from "@/data";
import Layout from "@/layout/Layout";
const links = [
  {
    href: "https://www.youtube.com/@inupurnomo",
    label: "YouTube",
  },
  {
    href: "https://instagram.com/inupurnomo",
    label: "Instagram",
  },
  {
    href: "https://twitter.com/inupurnomo",
    label: "Twitter",
  },
  {
    href: "https://github.com/inupurnomo",
    label: "Github",
  },
];

export const getStaticProps = async () => {
  const res = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`);
  let allAlbums = await res.json();

  return {
    props: {data: allAlbums},
  };
};

export default function OpenSource({data}: any) {
  return (
    <Layout customMeta={{title: "ShortLink - INUPURNOMO"}}>
      <main className="w-full overflow-x-hidden overflow-y-hidden bg-light1 font-bodyFont text-textDark dark:bg-dark1 dark:text-textLight">
        <section className="flex h-screen justify-center overflow-hidden sm:px-2 sm:pt-10">
          <div className="flex h-full w-full max-w-shorlink flex-col rounded-t-2xl bg-white shadow-md dark:bg-gray-600">
            <header className="h-[240px] w-full rounded-t-2xl">
              <Image
                src={fill}
                width={1700}
                height={1700}
                priority
                alt="inupurnomo profile picture"
                className="h-full w-full rounded-t-2xl object-cover"
              />
            </header>
            <div className="head flex px-2">
              <div className="-mt-16 h-28 w-28 rounded-full md:shadow-2xl">
                <Image
                  src={profileImg}
                  width={1700}
                  height={1790}
                  priority
                  alt="inupurnomo profile picture"
                  className="rounded-full"
                />
              </div>
              <div className="px-4 py-4 font-bold">
                <h1>INUPURNOMO</h1>
                <p>my-shortlink!</p>
              </div>
            </div>
            <div className="links h-full px-4 py-4">
              {links &&
                links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="mb-2 flex h-14 w-full items-center justify-center rounded-lg border-2 border-black font-bold shadow-md duration-300 hover:text-textLink dark:border-white"
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
            <footer className="relative flex items-center justify-center gap-1 px-4 py-4 text-sm">
              &copy; 2023 - <Link href={"/"}>inupurnomo</Link>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
