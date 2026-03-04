import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Hithu Global Holidays — Premium Travel Experiences",
    template: "%s | Hithu Global Holidays",
  },
  description:
    "Discover curated domestic and international travel packages with Hithu Global Holidays. Personalized itineraries, 24/7 support, and unforgettable experiences. No hidden costs.",
  keywords: [
    "travel packages",
    "holiday packages India",
    "international tours",
    "domestic tours",
    "Kerala packages",
    "Bali tours",
    "Dubai holidays",
    "Hithu Global Holidays",
  ],
  openGraph: {
    title: "Hithu Global Holidays — Premium Travel Experiences",
    description:
      "Discover curated domestic and international travel packages. Personalized itineraries and unforgettable experiences.",
    type: "website",
    locale: "en_IN",
    siteName: "Hithu Global Holidays",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
