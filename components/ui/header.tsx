import { Bell, ChevronDown } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Header() {
  return (
    <header className="bg-white border-b border-border/50 px-8 py-6 flex justify-between items-center sticky top-0 z-10 backdrop-blur-sm">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Travel Agent Dashboard</h2>
        <p className="text-sm text-muted-foreground mt-1">Manage your packages & services</p>
      </div>

      <div className="flex items-center gap-6">
        <button className="p-2 hover:bg-accent/10 rounded-lg transition-colors group relative">
          <Bell size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </button>

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
      </div>
    </header>
  )
}
