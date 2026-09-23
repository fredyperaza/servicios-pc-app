// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Servicios a las PC's y M@s",
  description: "Soporte técnico, redes, biométricos y CCTV en Santa Ana y todo El Salvador.",
};

// ⚠️ Cambia por el número de WhatsApp de la empresa
const TELEFONO_WHATSAPP = '50370000000';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* Botón flotante disponible en todo el sitio */}
        <WhatsAppFloatButton telefono={TELEFONO_WHATSAPP} />
      </body>
    </html>
  );
}