import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import Head from "next/head";
import { NextIntlClientProvider, useMessages } from "next-intl";
// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  // url: "https://explorecubainclassiccars.com",
  // metadataBase: new URL("https://explorecubainclassiccars.com"),
  // alternates: {
  //   canonical: "/",
  // },
  title: {
    default: "Explore Cuba in Classic Cars",
    template: "%s | Explore Cuba in Classic Cars",
  },
  description:
    "Provides information, tours, or services related to exploring classic cars in Cuba. It can be a valuable resource for enthusiasts, travellers, or individuals interested in the history and culture of Cuban classic cars.",
  twitter: {
    card: "summary_large_image",
    title: "Explore Cuba in Classic Cars",
    description:
      "Provides information, tours, or services related to exploring classic cars in Cuba. It can be a valuable resource for enthusiasts, travellers, or individuals interested in the history and culture of Cuban classic cars.",

    images: [
      "https://opengraph.b-cdn.net/production/documents/52c2d502-703a-47d8-99e0-d993e653c12f.png?token=X7qtXFrWrk7PT8PWAXtojXe52W1U8fW0V5Q024MMcvQ&height=630&width=1200&expires=33241468330",
    ],
  },
  openGraph: {
    url: "https://explorecubainclassiccars.com",
    siteName: "Explore Cuba in Classic Cars",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/documents/52c2d502-703a-47d8-99e0-d993e653c12f.png?token=X7qtXFrWrk7PT8PWAXtojXe52W1U8fW0V5Q024MMcvQ&height=630&width=1200&expires=33241468330", // Must be an absolute URL
      },
    ],
    type: "website",
  },
  // metadataBase: new URL("https://explorecuba.vercel.app"),
  // alternates: {
  //   canonical: "/",
  // },
  // openGraph: {
  //   images: "/opengraph-image.png",
  // },
  // openGraph: {
  //   title: "Explore Cuba in Classic Cars",
  //   description:
  //     "Provides information, tours, or services related to exploring classic cars in Cuba. It can be a valuable resource for enthusiasts, travellers, or individuals interested in the history and culture of Cuban classic cars.",
  //   images: "/ogimage.webp",
  // },
  // siteName: "Explore Cuba in Classic Cars",
};

export default function RootLayout({ children, locale }) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      {/* <Head>
        <meta property="og:image" content="/favicon.ico" key="image" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head> */}
      <body className={montserrat.className}>
        <NextIntlClientProvider locale={locale} messages={{ messages }}>
          <Navbar locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
