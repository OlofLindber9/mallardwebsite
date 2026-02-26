import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "anka.it",
    template: "%s | Manka.it",
  },
  description: "Anka Software",
  openGraph: {
    title: "anka.it",
    description:
      "ANKA Software",
    url: "https://anka.it",
    siteName: "anka.it",
    images: [
      {
        url: "https://mallard.business/mallard_logo.png",
        width: 1024,
        height: 750,
      },
    ],
    locale: "sv-SE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "anka",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/mallard_icon_v4.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body className="bg-black">
        {children}
      </body>
    </html>
  );
}
