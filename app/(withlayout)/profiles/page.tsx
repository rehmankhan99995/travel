"use client";

import type React from "react";
import { useState } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    firstName: "Gael",
    lastName: "Matendo",
    phone: "004673678",
    email: "gael@example.com",
    country: "Morocco",
    city: "Bahia Blanca",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
  });

  const [selectedBank, setSelectedBank] = useState(0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile</h1>

        {/* 🧩 ONE BIG CARD */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Left Column - General Information */}
            <div className="col-span-2">
              <h2 className="text-base font-semibold text-gray-900 mb-6">
                General
              </h2>

              <div className="flex items-start gap-6 mb-8">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-gray-300" />
                  <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full border border-gray-200 hover:bg-gray-50">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <h3 className="text-lg mt-4 font-semibold text-gray-900">
                    John Doe
                  </h3>
                </div>
              </div>

              <div className="mb-5">
                <p className="text-sm text-gray-600 mb-1">
                  Profile Strength:{" "}
                  <span className="font-semibold text-gray-900">
                    Intermediate
                  </span>
                </p>
                <div className="w-[550px] h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-2/6 bg-green-500 rounded-full" />
                </div>
              </div>

              {/* Form */}
              <div className="bg-white border-none py-3 px-2 rounded-lg shadow-sm space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-semibold text-gray-900 mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-black text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-900 mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-semibold text-gray-900 mb-2 block">
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <div className="flex items-center px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                        <span className="flex items-center text-sm text-gray-600"><img src="/americaflag.svg" alt="" className="h-4 w-4" /> +1</span>
                      </div>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-black text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-900 mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-50 border text-black border-gray-200 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-semibold text-gray-900 mb-2 block">
                      Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 text-black rounded-lg text-sm"
                    >
                      <option>Morocco</option>
                      <option>Egypt</option>
                      <option>Tunisia</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-900 mb-2 block">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-black text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-900 mb-2 block">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-black"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-1 flex flex-col gap-8">
              {/* Travel Information */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-4">
                  Travel Information
                </h3>

                <div className="flex gap-4 border-none justify-between px-2 py-2 rounded-lg shadow-sm space-y-4">
                  <div className="self-center">
                  <div className="mb-3">
                    <label className="text-xs text-black font-bold mb-1 block">
                      ID Number
                    </label>
                    <input type="text" defaultValue={"36524100562030"} className="text-black text-sm bg-[#f8f8f8] py-2 px-2 rounded-lg" disabled />
                  </div>
                  <div>
                    <label className="text-xs text-black font-bold mb-1 block">
                      Passport Number
                    </label>
                    <input type="text" defaultValue={"36KF41C0"} className="text-black text-sm bg-[#f8f8f8] py-2 px-2 rounded-lg" disabled />
                  </div>
                  </div>
                  <div>
                    <label className="text-xs text-[#838383] font-bold mb-2 block">
                      Reference
                    </label>
                    <div className="w-full h-24 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gray-300 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Banking Information */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-semibold text-gray-900">
                    Banking Information
                  </h3>
                  <button className="px-3 py-1.5 bg-blue-700 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 cursor-pointer">
                    + New Bank
                  </button>
                </div>

                <div className="rounded-lg shadow-sm bg-white border py-3 px-2 space-y-3">
                  {[0, 1].map((bank) => (
                    <label
                      key={bank}
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <input
                        type="radio"
                        name="bank"
                        checked={selectedBank === bank}
                        onChange={() => setSelectedBank(bank)}
                        className="w-4 h-4"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span className="text-sm font-semibold text-gray-900">
                            Abu Dhabi Islamic Bank
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                          {bank === 0 ? "14520****8899" : "14452****8844"}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Save Button at bottom */}
          <div className="mt-8">
            <button className="px-6 py-2.5 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 cursor-pointer">
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
