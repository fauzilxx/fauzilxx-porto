import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fauzil Azhim",
  description: "Portfolio of Fauzil Azhim, a full-stack web developer and AI enthusiast.",
  icons: {
    icon: "/pas_foto_icon.png",
    shortcut: "/pas_foto_icon.png",
    apple: "/pas_foto_icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/pas_foto_icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/pas_foto_icon.png" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
