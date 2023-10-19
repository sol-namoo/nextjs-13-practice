import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Solnamoo's blog",
    template: "%s | 블로그 제작 프로젝트",
  },
  description: "Solnamoo's blog",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className + " container mx-auto"}>
        <header className="flex justify-between">
          <Link href="/home">
            <h1 className="text-2xl font-medium">{"Solnamoo's blog"}</h1>
          </Link>
          <nav className="flex space-x-4 ml-auto">
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
