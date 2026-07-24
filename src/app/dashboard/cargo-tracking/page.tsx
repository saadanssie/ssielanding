"use client";

import React from 'react';
import {
  Search,
  SlidersHorizontal,
  Truck,
  CheckCircle2
} from 'lucide-react';

export default function CargoTrackingPage() {

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Header */}
      <header className="h-24 flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-8 border-b border-gray-200 bg-white shrink-0 py-4 md:py-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">Cargo Shipment Tracking</h1>
          <p className="text-sm text-gray-500 mt-1">ERP System Integration - Real-time tracking</p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 bg-white">

        {/* Filters Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-sm font-medium text-gray-600">Tuesday, April 28, 2026</p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search by Tracking Number..."
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#5CAE3A] focus:ring-1 focus:ring-[#5CAE3A]"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shrink-0">
              Filter By
              <SlidersHorizontal size={16} />
            </button>
          </div>
        </div>

        {/* Tracking Cards List */}
        <div className="space-y-6">

          {/* Card 1: In-Transit */}
          <div className="bg-gradient-to-r from-[rgba(76,94,143,0.07)] via-[rgba(69,109,82,0.07)] to-[rgba(127,195,77,0.07)] rounded-xl border border-gray-200 p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-bold text-gray-900">#SH-2024-001</h2>
                  <span className="flex items-center gap-1.5 bg-[#4C7FFF] text-white px-3 py-1 rounded-full text-xs font-medium">
                    <Truck size={14} /> In-Transit
                  </span>
                </div>
                <p className="text-sm text-gray-600">500 units - Electronics</p>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-2 bg-white border border-[#0A1757] text-[#0A1757] rounded-md text-sm font-bold hover:bg-blue-50 transition-colors cursor-pointer ">
                View Details
              </button>
            </div>

            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
              <p className="text-lg font-bold text-gray-900">Apr 30, 2026</p>
            </div>

            {/* Timeline */}
            <div className="relative mt-8">
              {/* Line background (remaining) */}
              <div className="absolute top-4 left-14 right-14 h-1.5 bg-[#E8F5E9] rounded-full -translate-y-1/2 z-0"></div>
              {/* Line progress (completed) */}
              <div className="absolute top-4 left-14 w-[calc(50%-56px)] h-2.5 bg-[#1b3a57] rounded-full -translate-y-1/2 z-0"></div>

              {/* Waypoints */}
              <div className="relative z-10 flex justify-between items-start">
                {/* Point 1 */}
                <div className="flex flex-col items-center w-28 shrink-0">
                  <div className="h-8 flex items-center justify-center mb-2">
                    <div className="w-3.5 h-3.5 bg-[#1b3a57] rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-gray-900 leading-tight">Mumbai, India</p>
                    <p className="text-[10px] text-gray-500 mt-1">20 April 2026</p>
                  </div>
                </div>

                {/* Point 2 (Current Location) */}
                <div className="flex flex-col items-center w-28 shrink-0">
                  <div className="h-8 flex items-center justify-center mb-2">
                    <div className="w-10 h-10 bg-[#7FC34D]/25 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-7.5 h-7.5 bg-gradient-to-br from-[#0A1757] to-[#7FC34D] rounded-full flex items-center justify-center text-white shadow-md">
                        <Truck size={14} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-gray-900 leading-tight">Dubai Port</p>
                    <p className="text-[10px] text-gray-500 mt-1">27 April 2026</p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex flex-col items-center w-28 shrink-0">
                  <div className="h-8 flex items-center justify-center mb-2">
                    <div className="w-3.5 h-3.5 bg-white rounded-full border-2 border-green-200 shadow-sm"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-gray-900 leading-tight">New York</p>
                    <p className="text-[10px] text-gray-500 mt-1">30 April 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Delivered */}
          <div className="bg-gradient-to-r from-[rgba(76,94,143,0.07)] via-[rgba(69,109,82,0.07)] to-[rgba(127,195,77,0.07)] rounded-xl border border-gray-200 p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-bold text-gray-900">#SH-2024-001</h2>
                  <span className="flex items-center gap-1.5 bg-[#7FC34D] text-white px-3 py-1 rounded-full text-xs font-medium">
                    <CheckCircle2 size={14} /> Delivered
                  </span>
                </div>
                <p className="text-sm text-gray-600">500 units - Electronics</p>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-2 bg-white border border-[#0A1757] text-[#152656] rounded-md text-sm font-bold hover:bg-blue-50 transition-colors cursor-pointer ">
                View Details
              </button>
            </div>

            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
              <p className="text-lg font-bold text-gray-900">Apr 30, 2026</p>
            </div>

            {/* Timeline */}
            <div className="relative mt-8">
              {/* Line progress (completed - 100%) */}
              <div className="absolute top-4 left-14 right-14 h-2.5 bg-[#2d662c] rounded-full -translate-y-1/2 z-0"></div>

              {/* Waypoints */}
              <div className="relative z-10 flex justify-between items-start">
                {/* Point 1 */}
                <div className="flex flex-col items-center w-28 shrink-0">
                  <div className="h-8 flex items-center justify-center mb-2">
                    <div className="w-3.5 h-3.5 bg-[#1b3a57] rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-gray-900 leading-tight">Mumbai, India</p>
                    <p className="text-[10px] text-gray-500 mt-1">20 April 2026</p>
                  </div>
                </div>

                {/* Point 3 (Current Location - End) */}
                <div className="flex flex-col items-center w-28 shrink-0">
                  <div className="h-8 flex items-center justify-center mb-2">
                    <div className="w-10 h-10 bg-[#7FC34D]/25 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-7.5 h-7.5 bg-[#2d662c] rounded-full flex items-center justify-center text-white shadow-md">
                        <Truck size={15} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-gray-900 leading-tight">New York</p>
                    <p className="text-[10px] text-gray-500 mt-1">30 April 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Pending */}
          <div className="bg-gradient-to-r from-[rgba(76,94,143,0.07)] via-[rgba(69,109,82,0.07)] to-[rgba(127,195,77,0.07)] rounded-xl border border-gray-200 p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-bold text-gray-900">#SH-2024-001</h2>
                  <span className="flex items-center gap-1.5 bg-[#FF9500] text-white px-3 py-1 rounded-full text-xs font-medium">
                    <Truck size={14} /> Pending
                  </span>
                </div>
                <p className="text-sm text-gray-600">500 units - Electronics</p>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-2 bg-white border border-[#0A1757] text-[#152656] rounded-md text-sm font-bold hover:bg-blue-50 transition-colors #0A1757">
                View Details
              </button>
            </div>

            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
              <p className="text-lg font-bold text-gray-900">Apr 30, 2026</p>
            </div>

            {/* Timeline */}
            <div className="relative mt-8 px-4">
              {/* Line background (remaining - 100%) */}
              <div className="absolute top-4 left-14 right-14 h-2.5 bg-[#E8F5E9] rounded-full -translate-y-1/2 z-0"></div>

              {/* Waypoints */}
              <div className="relative z-10 flex justify-between items-start">
                {/* Point 1 (Current Location - Start) */}
                <div className="flex flex-col items-center w-28 shrink-0">
                  <div className="h-8 flex items-center justify-center mb-2">
                    <div className="w-10 h-10 bg-[#FF9500]/20 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-7.5 h-7.5 bg-gradient-to-br from-[#0A1757] to-[#FF9500] rounded-full flex items-center justify-center text-white shadow-md">
                        <Truck size={14} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-gray-900 leading-tight">Mumbai, India</p>
                    <p className="text-[10px] text-gray-500 mt-1">20 April 2026</p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex flex-col items-center w-28 shrink-0">
                  <div className="h-8 flex items-center justify-center mb-2">
                    <div className="w-3.5 h-3.5 bg-white rounded-full border-2 border-green-200 shadow-sm"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-gray-900 leading-tight">New York</p>
                    <p className="text-[10px] text-gray-500 mt-1">30 April 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

