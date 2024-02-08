import { GetServerSideProps } from "next";
import { getAllPosts } from "@/common/utils/api";
import slugify from "@/common/utils/slugify";

type Data = {
  slugs: (string | string[])[];
  tags: string[];
  categories: (string | string[])[];
};

const generateSiteMap = ({ slugs, categories, tags }: Data) => {
  const date = new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/open-source</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/me</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/pay</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/archive</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog/categories</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.61</priority>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog/tags</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.61</priority>
      </url>
      ${categories
        .map((category) => {
          return `
        <url>
          <loc>${process.env.NEXT_PUBLIC_URL}/blog/categories/${category}</loc>
          <lastmod>${date}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.51</priority>
        </url>
      `;
        })
        .join("")}
      ${tags
        .map((tag) => {
          return `
        <url>
          <loc>${process.env.NEXT_PUBLIC_URL}/blog/tags/${tag}</loc>
          <lastmod>${date}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.51</priority>
        </url>
      `;
        })
        .join("")}
      
      ${slugs
        .map((slug) => {
          return `
        <url>
          <loc>${process.env.NEXT_PUBLIC_URL}/blog/posts/${slug}</loc>
          <lastmod>${date}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.51</priority>
        </url>
      `;
        })
        .join("")}
   </urlset>
 `;
};

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Retrieve slugs tags and category from contents folder
  const posts = getAllPosts(["slug", "tags", "category"]);

  // Generate unique categories and store it in array
  const categories = posts
    .map((post) => slugify(post.category as string))
    .filter((x, i, a) => a.indexOf(x) == i);

  // Generate unique tags and store it in array
  let tags: string[] = [];
  for (let post of posts) {
    if (post.tags) tags.push(...(post.tags as string[]));
  }
  tags = tags.filter((x, i, a) => a.indexOf(x) == i);

  // Generate encoded slugs and store it in array
  const slugs = posts.map((post) =>
    encodeURIComponent((post.slug as string).trim())
  );

  const data = { slugs, tags, categories };

  // Generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(data);

  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
