import type { Metadata } from "next";
import {  Inter, Pirata_One, DM_Serif_Text  } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const pirata = Pirata_One ({ weight: ['400'], subsets: ["latin"]})
const dm = DM_Serif_Text ({ weight:['400'], subsets: ['latin'] })

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
