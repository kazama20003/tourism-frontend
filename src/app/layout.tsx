import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import { Suspense } from "react";
import { Toaster } from "sonner";
import { QueryProvider } from "@/components/providers/query-provider";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tourism & Transport Dashboard",
  description: "Manage your tourism and transportation services",
  generator: "Phoenix Solutions IT",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${poppins.variable}`}>
        <QueryProvider>
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster></Toaster>
        </QueryProvider>
      </body>
    </html>
  );
}
