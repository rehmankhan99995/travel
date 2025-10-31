import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../globals.css"
import StaffSidebar from "@/components/ui/staffsidebar"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <div className="flex w-full h-screen bg-gray-100">
          <div className="w-[20%]">
          <StaffSidebar />
          </div>
          <div className="w-[80%]">
          <main className="flex-1 overflow-auto flex flex-col">{children}</main>
        </div>
        </div>
      </body>
    </html>
  )
}
