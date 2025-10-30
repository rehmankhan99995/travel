import { Calendar } from "lucide-react";
import { CirclePoundSterling } from "lucide-react";
import { Banknote } from "lucide-react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between px-8 py-4">
          <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:text-slate-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100">
              <div className="h-8 w-8 rounded-full bg-slate-300" />
              <span className="text-sm font-medium text-slate-900">
                John Doe
              </span>
              <svg
                className="w-4 h-4 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="p-8">
        {/* Top Section with Button */}
        <div className="flex items-center justify-between mb-8">
          <div />
          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800">
            + New Demand
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="text-slate-500 text-sm mb-2"></div>
            <div className="text-3xl font-bold text-slate-900 mb-4">3 Days</div>
            <div className="flex items-center justify-between gap-2 text-slate-500">
              <span className="text-sm">Next Payment</span>
              <Calendar />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            {/* <div className="text-slate-500 text-sm ">Last Payment</div> */}
            <div className="text-3xl font-bold text-slate-900 mb-4">90 €</div>
            <div className="flex items-center justify-between gap-2 text-slate-500">
              <span className="text-sm">Payment Status</span>
              <CirclePoundSterling />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            {/* <div className="text-slate-500 text-sm mb-2"></div> */}
            <div className="text-3xl font-bold text-slate-900 mb-4">180 €</div>
            <div className="flex items-center justify-between gap-2 text-slate-500">
              <span className="text-sm">Remaining Balance</span>
              <Banknote />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Ticket Information & Payments */}
          <div className="col-span-2 space-y-6">
            {/* Ticket Information */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
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

            {/* Payments Section */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
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
                        <svg
                          className="w-5 h-5 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h18M7 15h10m4 0a1 1 0 11-2 0 1 1 0 012 0zM7 15a1 1 0 11-2 0 1 1 0 012 0z"
                          />
                        </svg>
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
          </div>

          {/* Right Column - Details */}
          <div>
            <div className="bg-white rounded-lg border border-slate-200 p-6">
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
                  <div className="font-medium text-slate-900">
                    Muhammad Mahjupri
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-2 font-medium">
                    Email
                  </div>
                  <div className="text-sm text-slate-700 break-all">
                    mahjupri123@gmail.com
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-2 font-medium">
                    Passport Number
                  </div>
                  <div className="font-medium text-slate-900">23454422</div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-2 font-medium">
                    Airline Booking Code
                  </div>
                  <div className="font-medium text-slate-900">GI38522</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
