"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Calendar } from "lucide-react";
import { Earth } from "lucide-react";

export default function Journeys() {
  const [dateRange, setDateRange] = useState({ from: 2022, to: 2023 });

  // SVG World Map with hexagonal grid and dots
  const WorldMap = () => (
    <svg
      viewBox="0 0 1000 600"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Background */}
      <rect width="1000" height="600" fill="#ffffff" />

      {/* Hexagonal grid pattern */}
      <defs>
        <pattern
          id="hexGrid"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 40 10 L 40 30 L 20 40 L 0 30 L 0 10 Z"
            fill="none"
            stroke="#e9e5f5"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>

      {/* Grid overlay */}
      <rect width="1000" height="600" fill="url(#hexGrid)" />

      {/* Simplified world map outline */}
      <g fill="none" stroke="#e9e5f5" strokeWidth="1.5" opacity="0.6">
        {/* North America */}
        <path d="M 150 150 L 200 140 L 210 180 L 180 200 L 150 180 Z" />
        {/* South America */}
        <path d="M 200 250 L 220 280 L 210 350 L 190 340 L 185 280 Z" />
        {/* Europe */}
        <path d="M 380 120 L 420 110 L 430 150 L 400 160 Z" />
        {/* Africa */}
        <path d="M 420 180 L 480 170 L 490 300 L 450 310 Z" />
        {/* Asia */}
        <path d="M 500 100 L 600 90 L 620 200 L 550 210 Z" />
        {/* Australia */}
        <path d="M 650 350 L 680 340 L 690 400 L 660 410 Z" />
      </g>

      {/* Connection lines */}
      <line
        x1="200"
        y1="160"
        x2="400"
        y2="140"
        stroke="#d4c5f9"
        strokeWidth="2"
        opacity="0.5"
      />
      <line
        x1="400"
        y1="140"
        x2="550"
        y2="150"
        stroke="#d4c5f9"
        strokeWidth="2"
        opacity="0.5"
      />
      <line
        x1="200"
        y1="160"
        x2="450"
        y2="250"
        stroke="#d4c5f9"
        strokeWidth="2"
        opacity="0.5"
      />

      {/* Colored dots - Blue */}
      <circle cx="120" cy="180" r="5" fill="#1e40af" />
      <circle cx="180" cy="120" r="4" fill="#1e40af" />
      <circle cx="250" cy="200" r="4" fill="#1e40af" />
      <circle cx="320" cy="280" r="5" fill="#1e40af" />
      <circle cx="380" cy="320" r="4" fill="#1e40af" />
      <circle cx="450" cy="250" r="5" fill="#1e40af" />
      <circle cx="520" cy="180" r="4" fill="#1e40af" />
      <circle cx="580" cy="240" r="4" fill="#1e40af" />
      <circle cx="620" cy="300" r="5" fill="#1e40af" />
      <circle cx="680" cy="350" r="4" fill="#1e40af" />

      {/* Colored dots - Red */}
      <circle cx="150" cy="240" r="4" fill="#dc2626" />
      <circle cx="280" cy="150" r="4" fill="#dc2626" />
      <circle cx="420" cy="200" r="5" fill="#dc2626" />
      <circle cx="550" cy="320" r="4" fill="#dc2626" />
      <circle cx="700" cy="280" r="4" fill="#dc2626" />

      {/* Colored dots - Orange */}
      <circle cx="200" cy="280" r="4" fill="#f97316" />
      <circle cx="350" cy="240" r="4" fill="#f97316" />
      <circle cx="480" cy="350" r="4" fill="#f97316" />
      <circle cx="600" cy="380" r="4" fill="#f97316" />

      {/* Purple circular markers */}
      <circle
        cx="200"
        cy="160"
        r="12"
        fill="none"
        stroke="#c084fc"
        strokeWidth="2"
        opacity="0.7"
      />
      <circle cx="200" cy="160" r="6" fill="#c084fc" opacity="0.3" />

      <circle
        cx="450"
        cy="250"
        r="12"
        fill="none"
        stroke="#c084fc"
        strokeWidth="2"
        opacity="0.7"
      />
      <circle cx="450" cy="250" r="6" fill="#c084fc" opacity="0.3" />

      <circle
        cx="620"
        cy="300"
        r="12"
        fill="none"
        stroke="#c084fc"
        strokeWidth="2"
        opacity="0.7"
      />
      <circle cx="620" cy="300" r="6" fill="#c084fc" opacity="0.3" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}

      <main className="px-8 py-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Journeys</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Total Miles */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div className="flex gap-1">
                <p className="text-3xl font-bold text-gray-900">2,000</p>
                <p className="text-sm font-bold text-gray-900 mt-4">Miles</p>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <p className="text-base font-semibold text-gray-900 mt-4">
                Total Miles
              </p>
              <div className="p-2 bg-purple-100 rounded-full ">
                <MapPin className="text-black" />
              </div>
            </div>
          </div>

          {/* Miles This Year */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div className="flex gap-1">
                <p className="text-3xl font-bold text-gray-900">2,000</p>
                <p className="text-sm font-bold text-gray-900 mt-4">Miles</p>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <p className="text-base font-semibold text-gray-900 mt-4">
                Miles of the year
              </p>
              <div className="p-2 bg-purple-100 rounded-full ">
                <Calendar className="text-black" />
              </div>
            </div>
          </div>

          {/* Company Most Used */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div className="flex gap-1">
                <p className="text-3xl font-bold text-gray-900">RyanAir</p>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <p className="text-base font-semibold text-gray-900 mt-4">
                Company most used
              </p>
              <div className="p-2 bg-purple-100 rounded-full ">
                <Earth className="text-black"/>
              </div>
            </div>
          </div>
        </div>

        {/* Your Next Trip Section */}
        <div className="">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Your next trip
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="h-3/4">
              <WorldMap />
            </div>
          </div>
        </div>

        {/* Flight Information Section */}
        <div className="bg-[#8383831a]  border border-purple-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900">
              Flight Information
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-600">From</span>
                <select className="text-sm font-light text-gray-900 bg-transparent border-none cursor-pointer">
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                </select>
              </div>
              <span className="text-xs text-gray-400">-</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-600">to</span>
                <select className="text-sm font-light text-gray-900 bg-transparent border-none cursor-pointer">
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-end  mt-7 mr-40">
            <p className="text-base text-gray-500">Date</p>
          </div>
        </div>
      </main>
    </div>
  );
}
