"use client";

import React from 'react';
import {
  Users,
  Eye,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import clsx from 'clsx';

export default function InsightsPage() {

  const trendsData = [
    { month: 'Oct', connections: 45, opportunities: 35, messages: 30, total: 44 },
    { month: 'Nov', connections: 50, opportunities: 40, messages: 45, total: 61 },
    { month: 'Dec', connections: 55, opportunities: 25, messages: 50, total: 53 },
    { month: 'Jan', connections: 40, opportunities: 45, messages: 55, total: 80 },
    { month: 'Feb', connections: 45, opportunities: 25, messages: 65, total: 72 },
    { month: 'Mar', connections: 60, opportunities: 35, messages: 35, total: 98 },
  ];

  const valuableConnections = [
    { initials: 'DC', name: 'Sarah Chen', role: 'Strategic Partner', interactions: 24, color: 'bg-[#f0fdf4] text-green-700 border-green-200' },
    { initials: 'MR', name: 'Marcus Rodriguez', role: 'Technology Alliance', interactions: 24, color: 'bg-[#f0fdf4] text-green-700 border-green-200' },
    { initials: 'JW', name: 'Jennifer Wu', role: 'Referral Source', interactions: 24, color: 'bg-[#f0fdf4] text-green-700 border-green-200' },
    { initials: 'DP', name: 'David Park', role: 'Active Client', interactions: 24, color: 'bg-[#f0fdf4] text-green-700 border-green-200' },
    { initials: 'LA', name: 'Lisa Anderson', role: 'Prospect', interactions: 24, color: 'bg-[#f0fdf4] text-green-700 border-green-200' },
  ];

  const industries = [
    { name: 'Technology & Software', percentage: 35, count: 44, width: 'w-[45%]' },
    { name: 'Manufacturing', percentage: 25, count: 32, width: 'w-[35%]' },
    { name: 'Professional Services', percentage: 20, count: 25, width: 'w-[25%]' },
    { name: 'Retail & E-commerce', percentage: 12, count: 15, width: 'w-[15%]' },
    { name: 'Other', percentage: 8, count: 11, width: 'w-[8%]' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Header */}
      <header className="h-24 flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-8 border-b border-gray-200 bg-white shrink-0 py-4 md:py-0 gap-4 md:gap-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">Business Insights</h1>
          <p className="text-sm text-gray-500 mt-1">Analytics and performance metrics for your network activity</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-[#1b3a57] hover:bg-gray-50 transition-colors flex-1 md:flex-none justify-center">
            <Calendar size={16} />
            Last 6 Months
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#5CAE3A] to-[#1b3a57] text-white rounded-lg text-sm font-medium hover:opacity-95 transition-opacity flex-1 md:flex-none justify-center">
            Export Report
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 bg-gray-50/30">

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat Card 1 */}
          <div className="bg-gradient-to-r from-[#00B250]/20 to-[#FFFFFF] rounded-lg border border-[#E4E4E4] p-5 flex flex-col justify-between gap-3">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#71c358] rounded-full flex items-center justify-center shrink-0">
                <img src="/network_growth.png" className="w-6 h-6 object-contain" alt="Network Growth" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">+24%</p>
                <p className="text-sm text-gray-600">Network Growth Rate</p>
              </div>
            </div>
            <p className="text-xs font-medium text-green-500">+5% vs last month</p>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-gradient-to-r from-[#B564FF]/5 to-[#FFFFFF] rounded-lg border border-[#E4E4E4] p-5 flex flex-col justify-between gap-3">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#a855f7] rounded-full flex items-center justify-center shrink-0">
                <img src="/view.png" className="w-6 h-6 object-contain" alt="Profile Views" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
                <p className="text-sm text-gray-600">Profile Views</p>
              </div>
            </div>
            <p className="text-xs font-medium text-green-500">+18% vs last month</p>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-gradient-to-r from-[#FCB44B]/5 to-[#FFFFFF] rounded-lg border border-[#E4E4E4] p-5 flex flex-col justify-between gap-3">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shrink-0">
                <img src="/opportunity.png" className="w-6 h-6 object-contain" alt="Opportunity Conversion" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">32%</p>
                <p className="text-sm text-gray-600">Opportunity Conversion</p>
              </div>
            </div>
            <p className="text-xs font-medium text-red-500">-2% vs last month</p>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-gradient-to-r from-[#BEAE0C]/5 to-[#FFFFFF] rounded-lg border border-[#E4E4E4] p-5 flex flex-col justify-between gap-3">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c2bc27] rounded-full flex items-center justify-center shrink-0">
                <img src="/growth.png" className="w-6 h-6 object-contain" alt="Engagement Score" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">87/100</p>
                <p className="text-sm text-gray-600">Engagement Score</p>
              </div>
            </div>
            <p className="text-xs font-medium text-gray-400">No change</p>
          </div>
        </div>

        {/* Network Activity Trends Chart */}
        <div className="bg-[#FAFFF9] rounded-xl border border-[#D8D8D8] p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Network Activity Trends</h2>
              <p className="text-xs text-gray-500 mt-1">Connections, opportunities, and messages over time</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-gray-600">
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#4f46e5]"></span>Connections</div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500"></span>Opportunities</div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#a855f7]"></span>Messages</div>
            </div>
          </div>

          <div className="space-y-5">
            {trendsData.map((data, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-8 text-sm text-gray-500">{data.month}</div>
                <div className="flex-1 flex items-center gap-2 h-6">
                  <div className="bg-linear-to-b from-[#5B64FF] to-[#363C99] h-full rounded-lg" style={{ width: `${data.connections}%` }}></div>
                  <div className="bg-linear-to-b from-[#FF9900] to-[#C77400] h-full rounded-lg" style={{ width: `${data.opportunities}%` }}></div>
                  <div className="bg-linear-to-b from-[#C483FF] to-[#9362C0] h-full rounded-lg" style={{ width: `${data.messages}%` }}></div>
                </div>
                <div className="w-8 text-sm font-bold text-gray-900 text-right">{data.total}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Columns Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Most Valuable Connections */}
          <div className="bg-[#FAFFF9] rounded-xl border border-[#D8D8D8] overflow-hidden">
            <div className="bg-linear-to-b from-[#7ABC4E]/20 to-[#152656]/5 px-6 py-4 ">
              <h2 className="text-lg font-bold text-gray-900">Most Valuable Connections</h2>
            </div>
            <div className="p-6 space-y-5">
              {valuableConnections.map((conn, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full border border-[#E2E2E2] bg-linear-to-b from-[#152656]/20 to-[#7ABC4E]/5 flex items-center justify-center font-bold text-sm shrink-0 `}>
                      <span className='bg-linear-to-b from-[#152656] to-[#7ABC4E] bg-clip-text text-transparent '>{conn.initials}</span>

                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{conn.name}</p>
                      <p className="text-xs text-gray-500">{conn.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">{conn.interactions}</p>
                    <p className="text-[10px] text-gray-500 uppercase">Interaction</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Network by Industry */}
          <div className="bg-[#FAFFF9] rounded-xl border border-[#D8D8D8] overflow-hidden">
            <div className="bg-linear-to-b from-[#7ABC4E]/20 to-[#152656]/5 px-6 py-4 ">
              <h2 className="text-lg font-bold text-gray-900">Network by Industry</h2>
            </div>
            <div className="p-6 space-y-6">
              {industries.map((industry, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-800">{industry.name}</span>
                    <span className="text-sm font-bold text-gray-600">{industry.percentage}% <span className="font-normal text-gray-400">({industry.count})</span></span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-md overflow-hidden">
                    <div className={`h-full bg-linear-to-r from-[#71c358] to-[#1b3a57] rounded-md ${industry.width}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI-Powered Recommendations */}
        <div className="bg-[#FAFFF9] rounded-xl border border-[#D8D8D8] shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <img src={"/ai_powered.png"}></img>
            <h2 className="text-lg font-bold text-gray-900">AI-Powered Recommendations</h2>
          </div>

          <div className="space-y-4">

            <div className="bg-[#F4F4F4] border border-[#B8B8B8] rounded-xl p-4 flex items-center justify-between group cursor-pointer hover:border-green-300 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-sm font-bold text-[#7E4A00]">Increase engagement with manufacturing sector</h3>
                  <span className="bg-[#FF9500] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">High</span>
                </div>
                <p className="text-sm text-[#1E1E1E">Your conversion rate in manufacturing is 45% higher than other sectors. Focus more outreach here.</p>
              </div>
              <ArrowRight size={18} className="text-[#1E1E1ECC] group-hover:text-gray-700 transition-colors shrink-0 ml-4" />
            </div>

            <div className="bg-[#F4F4F4] border border-[#B8B8B8] rounded-xl p-4 flex items-center justify-between group cursor-pointer hover:border-blue-300 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-sm font-bold text-[#0644FF]">Re-engage dormant connections</h3>
                  <span className="bg-[#0644FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Medium</span>
                </div>
                <p className="text-sm text-[#1E1E1E">12 valuable connections haven't interacted in 60+ days. A simple check-in could revive opportunities.</p>
              </div>
              <ArrowRight size={18} className="text-[#1E1E1ECC] group-hover:text-gray-700 transition-colors shrink-0 ml-4" />
            </div>

            <div className="bg-[#F4F4F4] border border-[#B8B8B8] rounded-xl p-4 flex items-center justify-between group cursor-pointer hover:border-green-300 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-sm font-bold text-[#7E4A00]">Complete your case studies</h3>
                  <span className="bg-[#FF9500] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">High</span>
                </div>
                <p className="text-sm text-[#1E1E1E">Profiles with case studies get 3x more inbound opportunities. You have 2 incomplete drafts.</p>
              </div>
              <ArrowRight size={18} className="text-[#1E1E1ECC] group-hover:text-gray-700 transition-colors shrink-0 ml-4" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}