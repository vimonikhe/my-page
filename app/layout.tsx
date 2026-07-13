import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MadeByVictor| Front-End Web Developer",
  description:
    "Portfolio of Victor Imonikhe, a Front-end Web Developer specializing in responsive websites built with Next.js, React, HTML, CSS and JavaScript",
  keywords: [
    "Victor Imonikhe",
    "MadeByVictor",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Developer Nigeria",
  ],

  authors: [{ name: "Victor Imonikhe" }],

  creator: "Victor Imonikhe",

  metadataBase: new URL("https://madebyvictor.online"),

  openGraph: {
    title: "MadeByVictor | Front-End Web Developer",
    description:
      "Portfolio of Victor Imonikhe showcasing web development projects.",
    url: "https://madebyvictor.online",
    siteName: "MadeByVictor",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MadeByVictor",
    description: "Front-End Web Developer Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
