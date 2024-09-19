import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gotham = localFont({
  src: [
    {
      path: "./fonts/GothamBook.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Gotham-Bold.otf",
      weight: "700",
    },
    {
      path: "./fonts/Gotham-Black.otf",
      weight: "900",
    },
    {
      path: "./fonts/GothamLight.ttf",
      weight: "300",
    },
    {
      path: "./fonts/GothamMedium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/GothamLight.ttf",
      weight: "100",
    },
  ],
});

export const metadata: Metadata = {
  title: "Nami Music",
  description: "Listen to ad-free music with Nami Music on Telegram!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gotham.className} antialiased`}>{children}</body>
    </html>
  );
}
