import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Lovekesh's Portfolio",
  description: "Lovekesh a creative backend developer who creates scalable, reliable and updated Production grade APIs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
