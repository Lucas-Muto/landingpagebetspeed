import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react"; // Importação do NextUIProvider

// Definição de fontes locais
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadados da aplicação
export const metadata: Metadata = {
  title: "BetSpeed Prime",
  description: "Você é prime!",
};

// Função principal do layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextUIProvider>
          {/* Container para aplicar o estilo de fundo e garantir o layout */}
          <div style={{ minHeight: "100vh", backgroundColor: "#000000", color: "#FFFFFF" }}>
            {children}
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
