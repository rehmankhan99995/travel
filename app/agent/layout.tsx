import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import SidebarNav from "@/components/ui/sidebar-nav"
import "../globals.css"

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
    <html lang="en">
      <body className={`font-sans antialiased bg-gray-50`}>
        <div className="flex h-screen">
          <SidebarNav />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
