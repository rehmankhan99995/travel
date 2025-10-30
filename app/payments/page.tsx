export default function Payments() {
  const paymentHistory = [
    {
      id: 1,
      invoice: "Invoice No. 24913",
      date: "16/11/2023",
      amount: "3,252 €",
      status: "Paid",
    },
    {
      id: 2,
      invoice: "Invoice No. 24913",
      date: "15/11/2023",
      amount: "3,252 €",
      status: "Failed",
    },
    {
      id: 3,
      invoice: "Invoice No. 24913",
      date: "15/10/2023",
      amount: "3,252 €",
      status: "Paid",
    },
    {
      id: 4,
      invoice: "Invoice No. 24913",
      date: "15/09/2023",
      amount: "3,252 €",
      status: "Paid",
    },
    {
      id: 5,
      invoice: "Invoice No. 24913",
      date: "15/08/2023",
      amount: "3,252 €",
      status: "Paid",
    },
    {
      id: 6,
      invoice: "Invoice No. 24913",
      date: "15/07/2023",
      amount: "3,252 €",
      status: "Paid",
    },
    {
      id: 7,
      invoice: "Invoice No. 24913",
      date: "15/06/2023",
      amount: "3,252 €",
      status: "Paid",
    },
    {
      id: 8,
      invoice: "Invoice No. 24913",
      date: "15/05/2023",
      amount: "3,252 €",
      status: "Paid",
    },
    {
      id: 9,
      invoice: "Invoice No. 24913",
      date: "15/04/2023",
      amount: "3,252 €",
      status: "Paid",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
  

      <main className="px-8 py-6">
        {/* Top Section */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Payments</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">My Plans</h2>
            <p className="text-sm text-gray-900">
              Your Plan is up for your need!
            </p>
          </div>
          <button className="bg-gray-900 text-white px-5 py-2 rounded text-sm font-semibold hover:bg-gray-800">
            Make a new payment
          </button>
        </div>

        {/* Plan Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 w-[300px]">
          <div className="mb-6">
            <p className="text-sm text-gray-900 font-bold mt-1">Actual Plan</p>
            <h3 className="text-lg font-bold text-purple-200">
              Passenger <span className="text-gray-800 text-lg">Buddy</span> 
            </h3>
          </div>
          <div className="flex gap-5">
            <button className="bg-gray-900 text-white px-4 py-2 rounded-[10px] text-xs font-semibold hover:bg-gray-800">
              Explore Plans
            </button>
            <button className="border-3 border-gray-500 text-gray-900 px-4 py-2 rounded-[10px] text-xs font-semibold hover:bg-gray-50">
              Manage Plans
            </button>
          </div>
        </div>

        {/* Payment History Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-1">
              Payment History
            </h2>
            <p className="text-xs text-gray-500">
              View history of all Payments
            </p>
          </div>

          {/* Table */}
          <div className="bg-white rounded border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="">
                  <th className="px-6 py-3 text-left">
                    {/* <input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" /> */}
                  </th>
                  <th className="px-6 py-3 text-left text-lg font-bold text-gray-900  mb-5 tracking-wider">
                    Payment Invoice
                  </th>
                  <th className="px-6 py-3 text-left text-lg font-bold text-gray-900  tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-lg font-bold text-gray-900 tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-lg font-bold text-gray-900  tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-lg font-bold text-gray-900  tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment, index) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                      />
                    </td>
                    <td className="px-6 py-4 text-base text-gray-900 font-medium">
                      {payment.invoice}
                    </td>
                    <td className="px-6 py-4 text-base text-gray-600">
                      {payment.date}
                    </td>
                    <td className="px-6 py-4 text-base text-gray-900 font-medium">
                      {payment.amount}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-5 py-1 rounded-full text-xs font-semibold ${
                          payment.status === "Paid"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-xs">
                      {index !== 1 && ( // 👈 hide button only on the second row (index 1)
                        <button
                          type="button"
                          className="bg-purple-100 text-purple-700 hover:bg-purple-200 font-semibold px-4 py-2 rounded-full focus:outline-none transition-colors"
                        >
                          Download Invoice
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
