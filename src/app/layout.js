import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Explore Cuba in Classic Cars",
  description:
    "provides information, tours, or services related to exploring classic cars in Cuba. It can be a valuable resource for enthusiasts, travellers, or individuals interested in the history and culture of Cuban classic cars.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
