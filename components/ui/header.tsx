"use client"

import { useState } from "react"
import { Bell, ChevronDown, LogOut, Settings, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function Header() {
  const [hasNotifications, setHasNotifications] = useState(true)

  const handleLogout = () => {
    toast.success("Logged out successfully!")
    console.log("User logged out")
  }

  return (
    <header className="bg-white border-b border-border/50 px-8 py-6 flex justify-between items-center sticky top-0 z-10 backdrop-blur-sm">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Travel Agent Dashboard</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your packages & services
        </p>
      </div>

      <div className="flex items-center gap-6">
        {/* 🔔 Notification Button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 hover:bg-accent/10 rounded-lg transition-colors relative">
              <Bell size={20} className="text-muted-foreground hover:text-accent transition-colors" />
              {hasNotifications && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setHasNotifications(false)}>
              New booking request received
            </DropdownMenuItem>
            <DropdownMenuItem>Package updated successfully</DropdownMenuItem>
            <DropdownMenuItem>Customer left a review</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* 👤 Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-3 cursor-pointer group">
              <Avatar className="border-2 border-accent/20 group-hover:border-accent/50 transition-colors">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=JohnDoe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-foreground">John Doe</p>
                <p className="text-xs text-muted-foreground">Travel Agent</p>
              </div>
              <ChevronDown size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
