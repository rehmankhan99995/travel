export default function PassengerDetails() {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Details</h3>
        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">Economy Class</button>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">Name</p>
          <p className="text-sm font-medium text-gray-900">Muhamed Majupri</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 mb-1">Email</p>
          <p className="text-sm font-medium text-gray-900">majupri123@gmail.com</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 mb-1">Passport Number</p>
          <p className="text-sm font-medium text-gray-900">231454422</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 mb-1">Airline Booking Code</p>
          <p className="text-sm font-medium text-gray-900">G3185Z2</p>
        </div>
      </div>
    </div>
  )
}
