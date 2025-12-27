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
  description:
    "NeekoLinks is the best free URL shortener for creating short, secure, and trackable links. Simplify, manage, and analyze your URLs with ease.",
  keywords:
    "URL shortener, free link shortener, secure URL shortener, trackable links, link management, shorten URLs, custom short links, free URL shortener, short links, create short links, NeekoLinks, link management, track clicks, social media links, marketing tools, Url shorten",

  authors: [{ name: "Muhammad Mubashir" }],
  creator: "Muhammad Mubashir",
  publisher: "Muhammad Mubashir",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // OPENGRAPH SHOULD BE HERE, not inside robots
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neekolinks.netlify.app",
    title: "NeekoLinks - Free URL Shortener | Fast & Secure Link Management",
    description:
      "NeekoLinks is the best free URL shortener for creating short, secure, and trackable links. Simplify, manage, and analyze your URLs with ease.",
    siteName: "NeekoLinks",
    images: [
      {
        url: "https://neekolinks.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeekoLinks - Free URL Shortener Dashboard",
      },
    ],
  },
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
