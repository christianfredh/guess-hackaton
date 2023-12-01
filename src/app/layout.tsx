import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import { Background } from "./background";
const pressStartP2 = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Holken",
  description: "Early Birds egna fika-spel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pressStartP2.className}>
        <Header />
        <Background />
        <div className="flex items-center justify-center h-screen">
          <div className="centrerad-div z-30">{children}</div>
        </div>
      </body>
    </html>
  );
}
