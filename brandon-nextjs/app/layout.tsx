'use client'

import "./globals.css";
import Header from "./ui/header";
import { josefin } from '@/app/ui/fonts';

import { ThemeContextProvider } from "./store/ThemeContext";
import Footer from "./ui/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body
          className={`${josefin.className} antialiased w-full bg-white select-none`}>
          <Header/>
          <div>
            <main>
              {children}
            </main>
          </div>
          <Footer/>
        </body>
      </ThemeContextProvider>
    </html>
  );
}
