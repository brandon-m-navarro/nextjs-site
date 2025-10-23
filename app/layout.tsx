import "./globals.css";
import type { Metadata } from "next";
import ClientBody from "./ClientBody";

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
      <ClientBody>{children}</ClientBody>
    </html>
  );
}