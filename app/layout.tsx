import type { Metadata } from "next";
import {
  Cinzel,
  Gabarito,
  DM_Serif_Text,
  Yeseva_One,
  Gloock,
  Libre_Baskerville,
} from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/custom/navMenu";
import Footer from "@/components/custom/footer";
import HomeBg from "@/components/custom/homeBg";
import GradientCanvas from "@/components/custom/gradientCanvas";

const body = Gabarito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400"],
});

const subheading = Libre_Baskerville({
  variable: "--font-subheading",
  subsets: ["latin"],
  weight: ["400"],
});

// const body = Gabarito({
//   variable: "--font-body",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
// });

const heading = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  style: ["normal"],
  fallback: ["sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: "SPELLMAKER",
  description: "Production company based in Ireland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex flex-col min-h-screen">
      <body
        className={`${heading.variable} ${body.variable} antialiased flex flex-col justify-between flex-1 relative overflow-hidden`}
      >
        <HomeBg />
        <NavMenu />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
