import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gerson Carranza | Ingeniero de Sistemas",
  description: "Portafolio profesional de Gerson Josue Carranza Amaya - Ingeniero de Sistemas, Analista de Datos y Desarrollador Full Stack",
  keywords: ["Gerson Carranza", "Ingeniero de Sistemas", "Data Analyst", "Full Stack Developer", "Azure", "SQL Server", "Power BI"],
  authors: [{ name: "Gerson Carranza" }],
  openGraph: {
    title: "Gerson Carranza | Ingeniero de Sistemas",
    description: "Portafolio profesional de Gerson Carranza",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
