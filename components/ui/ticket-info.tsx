export default function TicketInfo() {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Ticket Information</h3>

      {/* Flight Route */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1">
          <div className="text-sm text-gray-600 mb-1">From</div>
          <div className="text-2xl font-bold text-gray-900">BRU</div>
          <div className="text-xs text-gray-500 mt-1">Departure</div>
        </div>

        {/* Route Line */}
        <div className="flex-1 mx-4">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full mb-1"></div>
              <span className="text-xs text-gray-600 font-medium">Duration 05:50</span>
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-1"></div>
            </div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
        </div>

        <div className="flex-1 text-right">
          <div className="text-sm text-gray-600 mb-1">To</div>
          <div className="text-2xl font-bold text-gray-900">JFK</div>
          <div className="text-xs text-gray-500 mt-1">Arrival</div>
        </div>
      </div>

      {/* Time Info */}
      <div className="flex items-center justify-between text-center border-t border-gray-200 pt-4">
        <div>
          <div className="text-lg font-bold text-gray-900">09:00</div>
          <div className="text-xs text-gray-600">Departure</div>
        </div>
        <div className="flex-1"></div>
        <div>
          <div className="text-lg font-bold text-gray-900">12:45</div>
          <div className="text-xs text-gray-600">Arrival</div>
        </div>
      </div>

      {/* Flight Info */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 mb-2">Flight Information</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">Airline Title</span>
          <div className="flex items-center gap-3">
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">ITA Code</span>
            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">9000</span>
          </div>
        </div>
      </div>
    </div>
  )
}
