import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://trackback.app"),
  title: "track_back | Organize your thoughts with AI",
  description: "The AI notepad that turns chaos into organized, structured folders.",
  keywords: ["AI notes", "note organization", "notepad AI", "productivity app"],
  authors: [{ name: "track_back" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trackback.app",
    title: "track_back AI",
    description: "Turn unorganized text into structured data instantly.",
    siteName: "track_back",
  },
  twitter: {
    card: "summary_large_image",
    title: "track_back AI",
    description: "Turn messy notes into structured next steps with AI.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#031018" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}