import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { CookiesProvider } from "next-client-cookies/server";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CookiesProvider>{children}</CookiesProvider>
      </body>
    </html>
  );
}
