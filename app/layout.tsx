import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/molecules/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salim Baktash Portfolio",
  description: "Hi Everyone, Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className="bg-dark-color lg:w-10/12 m-auto lg:my-20 p-10 rounded-xl">
          {children}
        </div>
      </body>
    </html>
  );
}
