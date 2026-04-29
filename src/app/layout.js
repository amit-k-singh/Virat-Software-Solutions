import { Manrope, Sora } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://viratsoftwaresolutions.com"),
  title: {
    default: "Virat Software Solutions",
    template: "%s | Virat Software Solutions",
  },
  description:
    "Virat Software Solutions builds scalable web, mobile, SaaS, AI, and automation products for modern businesses.",
  keywords: [
    "software development company",
    "web development",
    "mobile app development",
    "saas development",
    "ai automation",
    "data engineering",
    "cloud devops",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Virat Software Solutions",
    description:
      "Scalable product engineering for web, mobile, SaaS, AI, and automation initiatives.",
    url: "https://viratsoftwaresolutions.com",
    siteName: "Virat Software Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virat Software Solutions",
    description:
      "Scalable product engineering for web, mobile, SaaS, AI, and automation initiatives.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
