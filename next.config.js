/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
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
    unoptimized: true,
  },
  compiler: {
    removeConsole: false,
  },
});

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
