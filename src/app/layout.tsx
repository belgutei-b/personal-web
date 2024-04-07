import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        <div className="flex">
          <div className="w-1/12"></div>
          <div className="font-mono flex-1">
            <Navbar />
            <div className="flex flex-row">
              <div className="w-1/12"></div>
              <div className="flex-auto">{children}</div>
              <div className="w-1/12"></div>
            </div>
          </div>
          <div className="w-1/12"></div>
        </div>
      </body>
    </html>
  );
}
