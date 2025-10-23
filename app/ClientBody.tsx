"use client";

import Header from "./ui/header";
import Footer from "./ui/footer";
import { ThemeContextProvider } from "./store/ThemeContext";
import { josefin } from "@/app/ui/fonts";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={`${josefin.className} antialiased w-full bg-white select-none`}>
      <ThemeContextProvider>
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </ThemeContextProvider>
    </body>
  );
}
