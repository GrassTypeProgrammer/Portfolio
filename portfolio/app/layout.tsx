import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css'
import { Theme } from "@radix-ui/themes";
import Navbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Luke Reeve",
  description: "Luke Reeve's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme
          // accentColor="indigo"
          grayColor="gray"
          className={inter.variable}
        >
          <Navbar />
          <main className='p-5'>

          {children}
          {/* <ThemePanel /> */}
        </main>
      </Theme>
    </body>
    </html >
  );
}
