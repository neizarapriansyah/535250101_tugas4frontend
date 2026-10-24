import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Garuda Byte - Mitra Teknologi Informasi", template: "%s | Garuda Byte" },
  description: "Garuda Byte menyediakan solusi IT, managed services, dan keamanan siber untuk bisnis Anda.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
