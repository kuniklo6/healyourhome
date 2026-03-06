import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heal Your Home",
  description: "House Healing - Spirit of place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400&family=Work+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-warm-cream antialiased">
        {children}
      </body>
    </html>
  );
}
