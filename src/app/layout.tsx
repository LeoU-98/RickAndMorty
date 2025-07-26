import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_Header/Navbar";
import ReactQueryProvider from "./_Provider/ReactQueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rick & Morty",
  description:
    "This Website is a Gallery For Rick & Morty TV Show , Users Will Be Able To Navigate Characters and Episodes and Places in The Show ",
  authors: {
    name: "Mohamed Hamdy",
    url: "https://github.com/LeoU-98",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-800 bg-[url(/background.jpg)] bg-cover bg-fixed bg-center text-white antialiased`}
      >
        <Navbar />

        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
