import type { Metadata } from "next";
import { Inter, Sacramento } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
});

export const metadata: Metadata = {
  title: "株式会社ネクスライド | NexRide",
  description: "システム開発・SES・AI内製化支援のネクスライド",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body suppressHydrationWarning={true} className={`${inter.variable} ${sacramento.variable} font-sans flex flex-col min-h-screen bg-white text-slate-900`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
