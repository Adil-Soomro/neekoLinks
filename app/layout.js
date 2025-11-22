import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/LayoutComponents/Navbar";
import Footer from "@/components/LayoutComponents/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NeekoLinks - Free URL Shortener | Fast & Secure Link Management",
  description: "NeekoLinks is the best free URL shortener for creating short, secure, and trackable links. Simplify, manage, and analyze your URLs with ease.",
  keywords: "URL shortener, free link shortener, secure URL shortener, trackable links, link management, shorten URLs, custom short links, free URL shortener, short links, create short links, NeekoLinks, link management, track clicks, social media links, marketing tools",
  author: "NeekoLinks",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased bg-purple-50`}
      >
        <Navbar />
        <Toaster position="top-right" />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
