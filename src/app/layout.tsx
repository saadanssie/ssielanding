import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "SSIE - Saadan Super-Intelligence Engine",
  description: "Empowering Growth Through Personalised AI Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} font-sans min-h-screen bg-[#000b1d] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
