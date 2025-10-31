import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { AdminSidebar } from "@/components/ui/adminsidebar"
import "../globals.css"
import AdminNavbar from "@/components/ui/AdminNavbar"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Travel Dashboard",
  description: "Manage travel services and bookings",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`font-sans antialiased`}>
        <div className="flex w-screen">
          <div className="w-[20%]">  
          <AdminSidebar />
          </div>
          <div className="w-[90%]">
            <AdminNavbar />
          <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
