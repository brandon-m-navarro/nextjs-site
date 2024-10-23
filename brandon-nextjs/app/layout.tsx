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
          className={`${geistSans.variable} antialiased w-full bg-white dark:bg-nightSoft`}>
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
