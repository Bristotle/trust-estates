import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { CurrencyProvider } from "@/lib/currency";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: { default: "Estates Trust — Verified Lands, Buildings & Investments in Ghana", template: "%s · Estates Trust" },
  description:
    "Buy, sell and invest in genuine, titled real estate across Ghana, Africa and beyond. Your trust. Our commitment. Your future.",
  openGraph: {
    title: "Estates Trust",
    description: "Verified lands, buildings and investments across Ghana, Africa and beyond.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrument.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <CurrencyProvider>
          <SmoothScroll />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFab />
        </CurrencyProvider>
      </body>
    </html>
  );
}
