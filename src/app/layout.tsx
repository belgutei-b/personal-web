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
          className="flex flex-row h-screen w-screen font-mono overflow-auto bg-stone-900"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex flex-col justify-between flex-auto">
            <div className="">
              <Header />
              <div className="w-full">{children}</div>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
