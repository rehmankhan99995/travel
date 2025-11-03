import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../globals.css"
import StaffSidebar from "@/components/ui/staffsidebar"
import { Toaster } from "@/components/ui/sonner";

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Travel Agent Dashboard",
//   description: "Travel Agent Dashboard - Manage packages, bookings, and more",
//   generator: "v0.app",
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`font-sans antialiased bg-gray-50`}>
        <div className="flex w-screen">
                  <div className="w-[20%]">  
                  <StaffSidebar />
                  </div>
                  <div className="w-[90%]">
                  <main>{children}</main>
                  <Toaster richColors position="top-right" />
                  </div>
                </div>
      </body>
    </html>
  )
}