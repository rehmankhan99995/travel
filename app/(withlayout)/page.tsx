import { Calendar } from "lucide-react";
import { CirclePoundSterling } from "lucide-react";
import { Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="p-8">
        {/* Top Section with Button */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl text-black font-bold">Dashboard</h1>
          </div>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800">
            + New Demand
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="flex flex-col justify-between bg-white rounded-lg border border-slate-200 py-3 px-6">
            <div className="text-slate-500 text-sm mb-2"></div>
            <div className="text-3xl font-bold text-slate-900 mb-4">3 Days</div>
            <div className="flex items-center justify-between gap-2 text-slate-500">
              <span className="text-sm">Next Payment</span>
              <div className="bg-[#f8f8f8] py-2 px-3 rounded-full"><Calendar /></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between bg-white rounded-lg border border-slate-200 py-3 px-6">
            {/* <div className="text-slate-500 text-sm ">Last Payment</div> */}
            <div className="text-3xl font-bold text-slate-900 mb-4">90 €</div>
            <div className="flex items-center justify-between gap-2 text-slate-500">
              <span className="text-sm">Payment Status</span>
              <div className="bg-[#f8f8f8] py-2 px-3 rounded-full"><CirclePoundSterling /></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between bg-white rounded-lg border border-slate-200 py-3 px-6">
            {/* <div className="text-slate-500 text-sm mb-2"></div> */}
            <div className="text-3xl font-bold text-slate-900 mb-4">180 €</div>
            <div className="flex items-center justify-between gap-2 text-slate-500">
              <span className="text-sm">Remaining Balance</span>
              <div className="bg-[#f8f8f8] py-2 px-3 rounded-full"><Banknote /></div>
            </div>
          </div>
        </div>
        <div className="flex w-screen h-auto">
          {/* Left Column - Ticket Information & Payments */}
          <div className="w-[50%] border border-r-0 rounded-l-lg">
            {/* Ticket Information */}
            <div className="bg-white rounded-l-lg border-0 p-6 h-[373px]">
              <h2 className="text-2xl font-bold text-slate-900 mb-9">
                Ticket Information
              </h2>

              {/* Flight Route */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-slate-900">BRU</div>
                  <div className="text-sm text-slate-600 mt-1">09:00</div>
                  <div className="text-xs text-slate-500 mt-2">
                    Flight Information
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center mx-8">
                  <div className="w-full h-px bg-slate-200 mb-2" />
                  <div className="text-xs text-slate-500">Duration 08:50</div>
                  <svg
                    className="w-5 h-5 text-slate-400 mt-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-slate-900">JFK</div>
                  <div className="text-sm text-slate-600 mt-1">12:45</div>
                  <div className="text-xs text-slate-500 mt-2">Arrival</div>
                </div>
              </div>

              {/* Airline Info */}
              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500 mb-1">
                      Airline Title
                    </div>
                    <div className="font-medium text-slate-900">Emirates</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-purple-600 mb-1">PNR Code</div>
                    <div className="text-sm font-medium text-slate-900">
                      X400
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="w-[25%] border border-l-0 rounded-r-lg">
            <div className="bg-white border-0 border-l-2 border-dashed p-6 rounded-r-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Details
                </h2>
                <Button
                  variant="default"
                  className="bg-purple-100 text-xs text-purple-600 rounded-full px-3"
                >
                  Economy Class
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-2 font-medium">
                    Name
                  </div>
                  <div className="font-bold text-slate-900">
                    Muhammad Mahjupri
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-2 font-medium">
                    Email
                  </div>
                  <div className="text-base font-bold text-slate-900 break-all">
                    mahjupri123@gmail.com
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-2 font-medium">
                    Passport Number
                  </div>
                  <div className="font-bold text-slate-900">23454422</div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-2 font-medium">
                    Airline Booking Code
                  </div>
                  <div className="font-bold text-slate-900">GI38522</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Payment Section */}

         <div className="bg-white rounded-lg border border-slate-200 p-6 mt-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Payments
                </h2>
                <a href="#" className="text-purple-600 text-sm hover:underline">
                  View All
                </a>
              </div>

              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <CirclePoundSterling className="text-black" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">90 €</div>
                        <div className="text-xs text-slate-500">
                          Your Payment for GI38522
                        </div>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-purple-600 text-sm hover:underline"
                    >
                      Details
                    </a>
                  </div>
                ))}
              </div>
            </div>

      </main>
    </div>
  );
}
