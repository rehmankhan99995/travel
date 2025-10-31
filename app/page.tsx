"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App 🚀</h1>
      <p className="text-gray-600 mb-6">This is your homepage (app/page.tsx)</p>

      <Button
        onClick={() => toast.success("Hello from Sonner! 🎉")}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        Show Toast
      </Button>
    </main>
  )
}
