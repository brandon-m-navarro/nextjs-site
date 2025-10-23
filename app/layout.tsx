"use client";

import "./globals.css";
import Header from "./ui/header";
import { josefin } from "@/app/ui/fonts";
import type { Metadata } from "next";

import { ThemeContextProvider } from "./store/ThemeContext";
import Footer from "./ui/footer";


export const metadata: Metadata = {
  title: "Brandon Navarro",
  description: "My portfolio site built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body
          className={`${josefin.className} antialiased w-full bg-white select-none`}
        >
          <Header />
          <div>
            <main>{children}</main>
          </div>
          <Footer />
        </body>
      </ThemeContextProvider>
    </html>
  );
}
