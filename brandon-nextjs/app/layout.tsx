'use client'

//import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./ui/header";
import { ThemeContextProvider } from "./store/ThemeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Brandon Navarro",
//   description: "Junior Fullstack Web Developer",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}>
          <Header/>
          <div>
            <main>
              {children}
            </main>
          </div>
        </body>
      </ThemeContextProvider>
    </html>
  );
}
