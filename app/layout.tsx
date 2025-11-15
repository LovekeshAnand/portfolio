import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

export const metadata: Metadata = {
  title: "Lovekesh Anand",
  description:
    "Lovekesh — a creative backend developer who builds scalable, reliable, and production-grade APIs.",
  openGraph: {
    title: "Lovekesh Anand — Backend Developer Portfolio",
    description:
      "Explore Lovekesh's portfolio showcasing scalable, reliable, and production-grade backend projects.",
    url: "https://lovekeshanand.vercel.app/", 
    siteName: "Lovekesh Anand Portfolio",
    images: [
      {
        url: "/images/preview.svg",
        width: 1200,
        height: 630,
        alt: "Lovekesh Anand Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lovekesh Anand — Backend Developer Portfolio",
    description:
      "Creative backend developer who builds scalable, reliable, and production-grade APIs.",
    images: ["/images/preview.svg"],
    creator: "@LovekeshAnand07", // (Optional)
  },
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollWrapper>
          {children}
          <Analytics />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
