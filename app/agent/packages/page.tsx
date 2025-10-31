import Header from "@/components/ui/header"
import SidebarNav from "@/components/ui/sidebar-nav"
import AvailablePackages from "@/components/ui/available-packages"

export default function PackagesPage() {
  return (
    <div className="flex h-screen bg-background">
      <SidebarNav />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <main className="flex-1 overflow-auto bg-gradient-to-b from-background to-blue-50/30 px-8 py-6">
          <AvailablePackages />
        </main>
      </div>
    </div>
  )
}
