import React from "react";

import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from "@next/third-parties/google";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />

        {/* Favicons */}
        <meta name="application-name" content="INUPURNOMO Portfoilo" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://inupurnomo.my.id" />
        <meta name="twitter:title" content="INUPURNOMO Portfolio" />
        <meta name="twitter:description" content="INUPURNOMO Personal Website" />
        <meta
          name="twitter:image"
          content="https://inupurnomo.my.id/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@inupurnomo" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="INUPURNOMO Portfolio" />
        <meta property="og:description" content="INUPURNOMO Personal Website" />
        <meta property="og:site_name" content="INUPURNOMO Portfolio" />
        <meta property="og:url" content="https://inupurnomo.my.id" />
        <meta
          property="og:image"
          content="https://inupurnomo.my.id/icons/apple-touch-icon.png"
        />
        {/* google verification */}
        <meta
          name="google-site-verification"
          content="fBdMyULMEPFg43PelSkTyH5FCkC9NRMHlUw6Lu3vPdY"
        />
        {/* bing verification */}
        <meta name="msvalidate.01" content="872E0805F6B02CA8A7AEE37CF7207F9F" />

        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <GoogleTagManager
          gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
      </Head>
      <body className="bg-bglight dark:bg-bgdark">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
