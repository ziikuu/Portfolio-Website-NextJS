import type { Metadata } from "next";
import { IBM_Plex_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNavBar from "@/components/Header/ResponsiveNavBar";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-IBM_Plex_Sans",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--DM_Mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angelo Bringula Portfolio",
  description: "Portfolio website of Angelo Bringula - Web Developer and Software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${dmMono.variable} antialiased`}>
      <body className="bg-[url('/bg/AU-FG-Texture7-8K.jpg')] bg-cover bg-no-repeat bg-fixed min-h-screen">
        <div className="">
          <ResponsiveNavBar />
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
