import MetricsGrid from "@/components/ui/metrics-grid"
import ReportsSection from "@/components/ui/reports-section"

export default function DashboardHome() {
  return (
    <div className="p-8 space-y-8">
      <MetricsGrid />
      <ReportsSection />
    </div>
  )
}
