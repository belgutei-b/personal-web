import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belgutei",
  description: "Belgutei's personal website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="flex flex-row h-screen w-screen font-mono overflow-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="w-1/12"></div>
          <div className="flex flex-col justify-between flex-auto">
            <div>
              <Header />
              <div className="flex flex-row mb-10">
                <div className="w-1/12"></div>
                <div className="flex-auto">{children}</div>
                <div className="w-1/12"></div>
              </div>
            </div>
            <Footer />
          </div>
          <div className="w-1/12"></div>
        </div>
      </body>
    </html>
  );
}
