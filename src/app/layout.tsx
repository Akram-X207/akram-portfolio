import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provder";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";

const nunito = localFont({
  src: "./fonts/Nunito/Nunito-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-nunito",
});

const thasadith = localFont({
  src: [
    {
      path: "./fonts/Thasadith/Thasadith-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Thasadith/Thasadith-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Thasadith/Thasadith-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Thasadith/Thasadith-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-thasadith",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/Akram-X207"),
  title: "Shaikh Akram",
  description: "Hey! I'm Shaikh Akram, Software Developer",
  keywords: [
    "Shaikh Akram",
    "Full Stack Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [
    {
      name: "Shaikh Akram",
      url: "https://github.com/Akram-X207",
    },
  ],
  creator: "Shaikh Akram",
  publisher: "Shaikh Akram",

  openGraph: {
    title: "Shaikh Akram Portfolio",
    description: "Shaikh Akram - Software Developer",
    url: "https://github.com/Akram-X207",
    siteName: "Shaikh Akram",
    images: [
      {
        url: "/profilePic.jpg", // using github profile pic as generic og-image for now
        width: 1200,
        height: 630,
        alt: "Shaikh Akram Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shaikh Akram Portfolio",
    description: "Shaikh Akram - Software Developer",
    images: ["/profilePic.jpg"],
    creator: "@Akram_X207",
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} ${thasadith.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
