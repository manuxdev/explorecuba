import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider, useMessages } from "next-intl";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Explore Cuba in Classic Cars",
    template: "%s | Explore Cuba in Classic Cars",
  },
  description:
    "Provides information, tours or services related to exploring Cuba in classic cars. It can be a valuable resource for enthusiasts, travelers or people interested in the history and culture of classic Cuban cars.",
  twitter: {
    card: "summary_large_image",
    title: "Explore Cuba in Classic Cars",
    description:
      "Provides information, tours or services related to exploring Cuba in classic cars. It can be a valuable resource for enthusiasts, travelers or people interested in the history and culture of classic Cuban cars.",

    images: [
      "https://opengraph.b-cdn.net/production/documents/fbc25111-6eaf-4ec1-bf8f-7f9095fbdbdd.png?token=BaF9XN2V2yK_NNP95Kx0xpD4ZroofTDNLUUqpdfYhVM&height=630&width=1200&expires=33241470864",
    ],
  },
  openGraph: {
    url: "https://explorecubainclassiccars.com",
    siteName: "Explore Cuba in Classic Cars",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/documents/fbc25111-6eaf-4ec1-bf8f-7f9095fbdbdd.png?token=BaF9XN2V2yK_NNP95Kx0xpD4ZroofTDNLUUqpdfYhVM&height=630&width=1200&expires=33241470864", // Must be an absolute URL
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children, locale }) {
  const messages = useMessages();
  return (
    <html lang={locale}>
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
