// app/layout.tsx
import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { SITE } from "@/lib/site";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "ProTekno | Redes, videovigilancia y control de acceso en El Salvador",
    template: "%s | ProTekno",
  },
  description:
    "Instalación y soporte de videovigilancia CCTV, redes, cableado estructurado y control de asistencia biométrico en Santa Ana y todo El Salvador.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${sora.variable} ${plex.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatButton telefono={SITE.telefonoWhatsApp} />
      </body>
    </html>
  );
}