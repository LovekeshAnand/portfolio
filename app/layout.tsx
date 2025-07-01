import type { Metadata } from "next";

import "./globals.css";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

export const metadata: Metadata = {
  title: "Lovekesh Anand",
  description: "Lovekesh a creative backend developer who creates scalable, reliable and updated Production grade APIs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body>
        <SmoothScrollWrapper>
          {children}
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}

