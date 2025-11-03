export default function PaymentInfo() {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Payments</h3>
        <button className="text-sm text-gray-600 hover:text-gray-900 font-medium">View All</button>
      </div>

      <div className="space-y-4">
        {/* Payment Item 1 */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs">💳</span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">90 €</p>
              <p className="text-xs text-gray-600">Your Payment for G3185Z2</p>
            </div>
          </div>
          <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">Details</button>
        </div>

        {/* Payment Item 2 */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs">💳</span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">90 €</p>
              <p className="text-xs text-gray-600">Your Payment for G3185Z2</p>
            </div>
          </div>
          <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">Details</button>
        </div>
      </div>
    </div>
  )
}
