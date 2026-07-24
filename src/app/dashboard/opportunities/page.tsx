"use client";

import { useState } from 'react';
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Building2,
  Calendar,
  Flame,
  ArrowUpRight,
  ClockFading,
  Check
} from 'lucide-react';
import clsx from 'clsx';

export default function OpportunitiesPage() {
  const [activeTab, setActiveTab] = useState('Leads');

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Header */}
      <header className="h-24 flex flex-col justify-center px-6 md:px-8 border-b border-gray-200 bg-white shrink-0">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Business Opportunities</h1>
        <p className="text-sm text-gray-500 mt-1">AI-discovered leads, deals, and partnerships matched to your business</p>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-gray-50/30">

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat Card 1 */}
          <div className="bg-linear-to-r from-[#00B250]/5 to-[#FFFFFF] rounded-lg border border-[#BEE9D2] p-5 flex flex-col justify-between gap-2">
            <div className="flex items-start gap-4">
              <div className="bg-[#7ABC4E] text-white p-3 rounded-full shrink-0">
                <img src="/star.png" alt="Star Icon" className="w-5 h-5 object-contain" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-[#1E1E1E]">24</p>
                <p className="text-sm text-[#1E1E1EB2]">Active Opportunities</p>
              </div>
            </div>
            <p className="text-sm font-medium text-[#1E1E1EB2]"><span className='text-[#7ABC4E]'>+8</span> this week</p>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-linear-to-r from-[#8800F0]/5 to-[#FFFFFF] rounded-lg border border-[#EDE2EE] p-5 flex flex-col justify-between gap-2">
            <div className="flex items-start gap-4">
              <div className="bg-[#a855f7] text-white p-3 rounded-full shrink-0">
                <img src="/dollar.png" alt="Dollar Icon" className="w-5 h-5 object-contain" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-[#1E1E1E]">$3.2M</p>
                <p className="text-sm text-[#1E1E1EB2]">Total Pipeline Value</p>
              </div>
            </div>
            <p className="text-sm font-medium text-[#1E1E1EB2]"><span className='text-[#B565FF]'>+$450K</span> this month</p>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-linear-to-r from-[#FF9900]/5 to-[#FFFFFF] rounded-lg border border-[#FFE3BDB2] p-5 flex flex-col justify-between gap-2">
            <div className="flex items-start gap-4">
              <div className="bg-[#FF9900] text-white p-3 rounded-full shrink-0">
                <img src="/growth.png" alt="Growth Icon" className="w-5 h-5 object-contain" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-[#1E1E1E]">7</p>
                <p className="text-sm text-[#1E1E1EB2]">Hot Leads</p>
              </div>
            </div>
            <p className="text-sm font-medium text-[#1E1E1EB2]"><span className='text-[#FF9900]'>2 Action</span> require</p>
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('Leads')}
              className={clsx(
                "cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2",
                activeTab === 'Leads' ? "bg-[#0A1757] text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              )}
            >
              Leads
              <span className={clsx("text-[10px] w-5 h-5 p-1.5 flex items-center justify-center rounded-full", activeTab === 'Leads' ? "bg-[#7FC34D] text-white" : "bg-gray-200 text-gray-600")}>
                18
              </span>
            </button>
            <button
              onClick={() => setActiveTab('Active Deals')}
              className={clsx(
                "cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                activeTab === 'Active Deals' ? "bg-[#0A1757] text-white border-transparent" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              )}
            >
              Active Deals
            </button>
            <button
              onClick={() => setActiveTab('Partnership')}
              className={clsx(
                "cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                activeTab === 'Partnership' ? "bg-[#0A1757] text-white border-transparent" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              )}
            >
              Partnership
            </button>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search Opportunities"
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#5CAE3A] focus:ring-1 focus:ring-[#5CAE3A]"
              />
            </div>
            <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shrink-0">
              Filter By
              <SlidersHorizontal size={16} />
            </button>
          </div>
        </div>

        {/* Opportunities List */}
        <div className="space-y-6">

          {/* Opportunity Card */}
          <div className="bg-white rounded-xl border border-green-100 shadow-sm overflow-hidden">
            {/* Card Header area with pale green bg */}
            <div className="bg-linear-to-r from-white via-white to-green-50/50 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-100">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-lg md:text-xl font-bold text-gray-900">Manufacturing Excellence Inc.</h2>
                  <span className="flex items-center gap-1 bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-xs font-bold uppercase">
                    <Flame size={12} /> Hot
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 text-[#152656] border border-blue-100 rounded-full flex items-center justify-center font-bold shrink-0">
                    DC
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-bold text-[#1E1E1EF2]">David Chen <span className=" ml-1">· CTO</span></p>
                      <button className="text-[10px] font-medium border border-gray-300 rounded-full px-2 py-0.5 text-gray-500 hover:bg-gray-50">
                        View Details
                      </button>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Building2 size={12} /> Manufacturing</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> Detroit, MI</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-left md:text-right flex flex-col items-start md:items-end w-full md:w-auto">
                <p className="text-lg md:text-xl font-bold text-[#3F9600] mb-1">$150K - $250K</p>
                <p className="text-xs text-gray-500 mb-2">Estimated value</p>
                <div className="bg-[#E8F5E9] text-[#3F9600] text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <ArrowUpRight size={14} /> 80% Match
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="bg-[#0A1757] text-white rounded-full p-0.5 shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Posted specific need for inventory software</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#0A1757] text-white rounded-full p-0.5 shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Budget approved for Q2 implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#0A1757] text-white rounded-full p-0.5 shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Your expertise matches their RFP requirements</span>
                </li>
              </ul>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="flex items-center gap-1.5 bg-[#EFF3FD] border border-[#DCE4FA] text-[#0A1757] p-1 pr-3 rounded-full text-xs font-medium">
                  <span className="h-5 w-5 bg-[#0A1757] rounded-full flex justify-center items-center shrink-0">
                    <Calendar size={11} className="text-white" />
                  </span>
                  <span>2-3 Months</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#EFF3FD] border border-[#DCE4FA] text-[#0A1757] p-1 pr-3 rounded-full text-xs font-medium">
                  <span className="h-5 w-5 bg-[#0A1757] rounded-full flex justify-center items-center shrink-0">
                    <ClockFading size={11} className="text-white" />
                  </span>
                  <span>Discovery Call Within 7 Days</span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cursor-pointer flex-1 bg-linear-to-r from-[#7FC34D] to-[#0A1757] text-white py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-sm">
                  <img src={"/star.png"} alt="AI Approval" className="w-4 h-4" />
                  Engage Opportunity
                </button>
                <button className="cursor-pointer flex-1 bg-white border border-[#1b3a57] text-[#1b3a57] py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow-sm">
                  <img src={"/blue_stars.png"} alt="AI Approval" className="w-4 h-4" />
                  AI Approval
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}