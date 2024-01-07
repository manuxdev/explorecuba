import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
