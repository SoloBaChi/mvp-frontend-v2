import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mussia",
  description: "Parenting in Your Teens Native Language",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href={`/mussia-logo.svg`} type="image/favicon" rel="icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
