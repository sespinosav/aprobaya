import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ToastProvider } from "@/components/ui/toast";
import { ModalProvider } from "@/components/ui/modal";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AprobaYa - Prepárate para tus Certificaciones",
  description:
    "La forma más cute y efectiva de aprobar tus certificaciones de software. AWS, Azure, GCP, Docker, Kubernetes y más. 100% gratis y open source.",
  keywords: [
    "certificaciones",
    "AWS",
    "Azure",
    "Cloud Practitioner",
    "examen",
    "simulador",
    "estudio",
    "práctica",
  ],
  authors: [{ name: "AprobaYa Community" }],
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo-short.png",
    apple: "/logo-short.png",
  },
  openGraph: {
    title: "AprobaYa - Prepárate para tus Certificaciones",
    description: "La forma más cute y efectiva de aprobar tus certificaciones",
    url: "https://aprobaya.academy",
    siteName: "AprobaYa",
    locale: "es_ES",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AprobaYa",
    description: "Prepárate para tus certificaciones de software",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-mesh min-h-screen flex flex-col`}
      >
        <ToastProvider>
          <ModalProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ModalProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
