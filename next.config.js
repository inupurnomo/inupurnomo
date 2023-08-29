/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://app.forestry.io/login",
        permanent: true,
        basePath: false,
      },
      {
        source: "/group",
        destination: "https://google.com",
        permanent: true,
        basePath: false,
      },
    ];
  },
  // Append the default value with md extensions
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

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "html"],
//   reactStrictMode: true,
//   trailingSlash: false,
//   images: {
//     domains: ["res.cloudinary.com", "inupurnomo.netlify.app"],
//   },
//   compiler: {
//     removeConsole: true,
//   },
// };

// module.exports = nextConfig
