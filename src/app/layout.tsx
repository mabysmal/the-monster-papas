import type { Metadata } from "next";
import "./globals.css";
import { inter } from './fonts';

export const metadata: Metadata = {
  title: "The Monster Papas",
  description: "Restaurante 100% regiomontano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}