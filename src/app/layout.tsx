import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trần Lê Hữu Phước - Frontend Developer Portfolio",
  description:
    "Frontend Developer portfolio of Trần Lê Hữu Phước. Specializing in React, TypeScript, Next.js, and modern web development technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      {/* <body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			> */}
      <body className="antialiased">
        {" "}
        {children}
        <Toaster richColors position="top-right" closeButton />
      </body>
    </html>
  );
}
