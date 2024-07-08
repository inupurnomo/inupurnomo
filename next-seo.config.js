const canonicalUrl = "https://inupurnomo.my.id";
const metaImage = `${process.env.NEXT_PUBLIC_URL}/inupurnomo-og.png`;
const imageAlt = `INUPURNOMO portfolio website`;
const metaDescription =
  "INUPURNOMO is a full-stack developer based in Jakarta, Indonesia. He is passionate about writing codes and developing web applications to solve real-life challenges.";

const defaultSEOConfig = {
  title: undefined,
  titleTemplate: "%s | INUPURNOMO",
  defaultTitle: "INUPURNOMO | A Full-stack Developer",
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: "Ilham Ibnu Purnomo - Personal Website",
    description: metaDescription,
    type: "website",
    images: [
      {
        url: metaImage,
        alt: imageAlt,
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: imageAlt,
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: imageAlt,
        width: 1600,
        height: 900,
      },
    ],
    site_name: "inupurnomo.my.id",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
