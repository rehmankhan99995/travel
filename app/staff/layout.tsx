'use client'
import type React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import StaffSidebar from "@/components/ui/staffsidebar";
import { Toaster } from "@/components/ui/sonner";

// Load Google Fonts with variable classes
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`overflow-x-hidden ${geist.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <div className="flex w-screen">
          {/* Sidebar */}
          <div className="w-1/5">
            <StaffSidebar />
          </div>

          {/* Main content */}
          <div className="w-4/5">
            <main>{children}</main>
            <Toaster richColors position="top-right" />
          </div>
        </div>
      </body>
    </html>
  );
}
