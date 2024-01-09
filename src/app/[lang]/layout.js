import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { NextIntlClientProvider, useMessages } from "next-intl";
// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Explore Cuba in Classic Cars",
  description:
    "Provides information, tours, or services related to exploring classic cars in Cuba. It can be a valuable resource for enthusiasts, travellers, or individuals interested in the history and culture of Cuban classic cars.",
};

export default function RootLayout({ children, locale }) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <Head>
        <meta
          property="og:title"
          content="Explore Cuba in Classic Cars"
          key="title"
        />
        <meta
          property="og:description"
          content="Provides information, tours, or services related to exploring classic cars in Cuba. It can be a valuable resource for enthusiasts, travellers, or individuals interested in the history and culture of Cuban classic cars."
          key="description"
        />
        <meta property="og:image" content="/favicon.ico" key="image" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
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
