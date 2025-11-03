"use client";

import Header from "@/components/ui/staffheader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardList } from "lucide-react";
import { toast } from "sonner";

export default function CheckInPage() {
  const travelers = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      date: "2025-11-15",
      type: "Check-in",
      location: "Jeddah",
    },
    {
      id: 2,
      name: "Fatima Al-Saud",
      date: "2025-11-20",
      type: "Check-out",
      location: "Makkah",
    },
    {
      id: 3,
      name: "Mohammed Al-Amer",
      date: "2025-12-01",
      type: "Check-in",
      location: "Riyadh",
    },
    {
      id: 4,
      name: "Layla Al-Dosari",
      date: "2025-12-05",
      type: "Check-in",
      location: "Medina",
    },
  ];

  return (
    <>
      {/* Header */}
      <Header title="Check-in / Check-out Management" />

      {/* Content */}
      <div className="p-8 overflow-auto flex-1 ml-2.5">
        {/* Title with Action Button */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Traveler Management
            </h2>
            <p className="text-gray-600 mt-1">
              Manage check-in and check-out for travelers (Saudi-based
              operations)
            </p>
          </div>
          <Button className="bg-blue-700 text-white cursor-pointer">
            + New Check-in
          </Button>
        </div>

        {/* Check-in/Check-out Form and List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>New Check-in Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Traveler Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Passport Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Passport #"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                    <option>Select Location</option>
                    <option>Makkah</option>
                    <option>Medina</option>
                    <option>Jeddah</option>
                    <option>Riyadh</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                    <option>Check-in</option>
                    <option>Check-out</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="w-full bg-blue-700 text-white py-2 rounded-lg cursor-pointer transition font-medium"
                  onClick={() => toast.success("Successfully checked in!")}
                >
                  Submit
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Travelers List */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardList className="w-5 h-5" />
                  Recent Check-ins/Check-outs
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {travelers.map((traveler) => (
                  <div
                    key={traveler.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">
                        {traveler.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {traveler.location} • {traveler.date}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        traveler.type === "Check-in"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {traveler.type}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
