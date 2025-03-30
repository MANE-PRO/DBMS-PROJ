"use client"
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AuthRouter from "@/components/auth/AuthRouter";

const poppins = Poppins({ weight: ["100", "200", "300", "400", '500', "600"], subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div>

          {children}
        </div>
      </body>
    </html>
  );
}
