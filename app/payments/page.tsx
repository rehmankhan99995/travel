export default function Payments() {
  const paymentHistory = [
    { id: 1, invoice: "Invoice No. 24913", date: "16/11/2023", amount: "3,252 €", status: "Paid" },
    { id: 2, invoice: "Invoice No. 24913", date: "15/11/2023", amount: "3,252 €", status: "Failed" },
    { id: 3, invoice: "Invoice No. 24913", date: "15/10/2023", amount: "3,252 €", status: "Paid" },
    { id: 4, invoice: "Invoice No. 24913", date: "15/09/2023", amount: "3,252 €", status: "Paid" },
    { id: 5, invoice: "Invoice No. 24913", date: "15/08/2023", amount: "3,252 €", status: "Paid" },
    { id: 6, invoice: "Invoice No. 24913", date: "15/07/2023", amount: "3,252 €", status: "Paid" },
    { id: 7, invoice: "Invoice No. 24913", date: "15/06/2023", amount: "3,252 €", status: "Paid" },
    { id: 8, invoice: "Invoice No. 24913", date: "15/05/2023", amount: "3,252 €", status: "Paid" },
    { id: 9, invoice: "Invoice No. 24913", date: "15/04/2023", amount: "3,252 €", status: "Paid" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-8 py-4">
          <div />
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
              <div className="h-8 w-8 rounded-full bg-gray-300" />
              <span className="text-sm font-medium text-gray-900">John Doe</span>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="px-8 py-6">
        {/* Top Section */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Payments</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">My Plans</h2>
            <p className="text-sm text-gray-700">Your Plan is up for your need!</p>
          </div>
          <button className="bg-gray-900 text-white px-5 py-2 rounded text-sm font-semibold hover:bg-gray-800">
            Make a new payment
          </button>
        </div>

        {/* Plan Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 w-[300px]">
          <div className="mb-6">
            <p className="text-xs text-gray-500 mt-1">Actual Plan</p>
            <h3 className="text-base font-bold text-gray-900">Passenger Buddy</h3>
          </div>
          <div className="flex gap-3">
            <button className="bg-gray-900 text-white px-4 py-2 rounded text-xs font-semibold hover:bg-gray-800">
              Explore Plans
            </button>
            <button className="border border-gray-300 text-gray-900 px-4 py-2 rounded text-xs font-semibold hover:bg-gray-50">
              Manage Plans
            </button>
          </div>
        </div>

        {/* Payment History Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Payment History</h2>
            <p className="text-xs text-gray-500">View history of all Payments</p>
          </div>

          {/* Table */}
          <div className="bg-white rounded border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-3 text-left">
                    {/* <input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" /> */}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Payment Invoice
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment) => (
                  <tr key={payment.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" />
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-900 font-medium">{payment.invoice}</td>
                    <td className="px-6 py-4 text-xs text-gray-600">{payment.date}</td>
                    <td className="px-6 py-4 text-xs text-gray-900 font-medium">{payment.amount}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                          payment.status === "Paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs">
                      <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold">
                        Download Invoice
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
