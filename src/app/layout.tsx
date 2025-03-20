import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import { Toaster } from "sonner";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Tutor.com a online learning platform which maked by Md Abumahid Islam",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
        <Toaster richColors={true} position="top-right" visibleToasts={1} />
      </body>
    </html>
  );
}
