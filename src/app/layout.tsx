'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { teaAssamChain, client } from "@/lib/config";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <link rel="icon" href="/favico.ico" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThirdwebProvider
          chains={[teaAssamChain]}
          client={client}
        >
          {children}
          <Toaster position="bottom-right" />
        </ThirdwebProvider>
      </body>
    </html>
  );
}
