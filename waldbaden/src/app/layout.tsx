import type { Metadata } from "next";
import Header from '@/components/Header'
import "./globals.css";

export const metadata: Metadata = {
  title: "Waldbaden mit Christiane",
  description: "Placeholder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
