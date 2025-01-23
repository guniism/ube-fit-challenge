import type { Metadata } from "next";
import "./globals.css";
import { Kanit } from "next/font/google";
import { NextAuthProvider } from "./Providers";
const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "UBE Fit Challenge",
  description: "UBE Fit Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${kanit.className} antialiased`}
      >
        <NextAuthProvider>{children}</NextAuthProvider>
        
      </body>
    </html>
  );
}
