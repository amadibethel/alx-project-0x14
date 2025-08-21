// pages/_document.tsx

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to PWA manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for browser toolbar */}
        <meta name="theme-color" content="#0070f3" />

        {/* Optional: icons can also be linked here */}
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="310x310" href="/icons/ms-icon-310x310.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
