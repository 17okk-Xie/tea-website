import type { Metadata } from "next";
import ClientLayout from "./components/ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chinese Tea House - Premium Chinese Tea",
  description: "Explore thousands of years of tea culture, experience the perfect blend of nature and tradition. We carefully select quality tea leaves and preserve ancient craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
