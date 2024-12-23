import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Header/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anki",
  description: "Anki AI generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto flex min-h-screen max-w-full flex-col px-8 font-sans antialiased bg-gradient-to-b from-white to-gray-100`}
      >
        <SidebarProvider >
          <AppSidebar />
          <main className="mx-auto flex flex-col flex-1 w-full max-w-full">
            <Header />
            {children}
          </main>
        </SidebarProvider>
        <Toaster />
        <Footer />
      </body>

    </html >
  );
}
