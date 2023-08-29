/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "html"],
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ["res.cloudinary.com", "inupurnomo.netlify.app"],
  },
  compiler: {
    removeConsole: true,
  },
};

module.exports = nextConfig;
