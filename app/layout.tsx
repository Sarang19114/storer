import type { Metadata } from "next";
import React from 'react';
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins  =  Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Storer",
  description: "Storer - The NEXT Storage App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-[var(--font-poppins)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
