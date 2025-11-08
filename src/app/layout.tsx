import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artisan Soaps - Handcrafted Natural Beauty",
  description: "Discover our collection of handmade, organic soaps crafted with love and natural ingredients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
