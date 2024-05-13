import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "PhongNV Blog",
  description: "Anh chính trị viên",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
