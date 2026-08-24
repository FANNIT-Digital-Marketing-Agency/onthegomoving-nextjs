// ==========================================================================
// ON THE GO MOVING — (landing-fb) Route Group Root Layout
// Isolated layout for FB paid traffic landing pages.
// Does NOT inherit from (main) or /get/ layouts.
// Provides its own <html> + <body> so Next.js treats it as a separate tree.
// ==========================================================================
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://onthegomoving.com"),
};

export default function LandingFbRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5PJR9KN');`,
          }}
        />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Nunito+Sans:wght@400;500;600;700&display=swap"
        />
        <link
          id="google-fonts-stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Nunito+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          media="print"
          suppressHydrationWarning
        />
        {/* React can't attach a string as an onLoad handler (it must be a
         *  function), so the media-swap has to happen via a plain script
         *  instead of a JSX `onLoad` prop on the link above. Assigning the
         *  `.onload` DOM property (not setting `media` directly) preserves
         *  the non-render-blocking behavior: the swap only fires once the
         *  stylesheet has actually finished downloading. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.getElementById('google-fonts-stylesheet').onload=function(){this.media='all';};`,
          }}
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Nunito+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5PJR9KN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
