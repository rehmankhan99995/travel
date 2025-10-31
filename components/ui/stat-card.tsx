import { Calendar, Clock, Wallet, TrendingUp } from "lucide-react"

interface StatCardProps {
  value: string
  label: string
  icon: "calendar" | "clock" | "wallet" | "trending"
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  const iconMap = {
    calendar: <Calendar className="w-5 h-5" />,
    clock: <Clock className="w-5 h-5" />,
    wallet: <Wallet className="w-5 h-5" />,
    trending: <TrendingUp className="w-5 h-5" />,
  }

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-600 mt-1">{label}</p>
        </div>
        <div className="text-gray-400">{iconMap[icon]}</div>
      </div>
    </div>
  )
}
