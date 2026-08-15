import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fauzil Azhim — Full-stack Web Developer",
  description: "Portfolio of Fauzil Azhim, a full-stack web developer and AI enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
