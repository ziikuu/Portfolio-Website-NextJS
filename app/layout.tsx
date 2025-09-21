import type { Metadata } from "next";
import { IBM_Plex_Sans, DM_Mono,Playfair_Display_SC } from "next/font/google";
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

const playfairDisplaySC = Playfair_Display_SC({
  variable: "--font-Playfair_Display_SC",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
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
    <html lang="en" className={`${ibmPlexSans.variable} ${dmMono.variable} ${playfairDisplaySC.variable} antialiased`}>
      <body className="min-h-screen bg-[#D9D9D9]">
        
        <div className=" ">
          <ResponsiveNavBar />
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
