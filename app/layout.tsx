import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Joey's Party Rentals - San Bernardino, CA",
  description: "Family-owned party rentals in San Bernardino. Tables, chairs, tents and more. Local service, no costly delivery fees. Get instant quotes online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}