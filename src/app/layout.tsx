import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: "%s — Enclave Compliance",
    default: "Enclave Compliance",
  },
  description:
    "Enclave is a compliance toolset built for teams who need to prove control implementation, not just claim it.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={sourceSerif.variable}>
      <body>
        <Nav />
        <div className="wrap">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
