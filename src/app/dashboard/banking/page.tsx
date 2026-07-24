"use client";

import React from 'react';
import {
  RefreshCw,
  ArrowDownLeft,
  ArrowUpRight,
  Wallet
} from 'lucide-react';
import clsx from 'clsx';

export default function BankingPage() {

  // Fake chart data to represent the stacked bars in the screenshot
  const chartData = [
    { day: 'Sun', received: 50, spent: 15 },
    { day: 'Mon', received: 68, spent: 28 },
    { day: 'Tue', received: 80, spent: 14 },
    { day: 'Wed', received: 50, spent: 48 },
    { day: 'Thu', received: 64, spent: 34 },
    { day: 'Fri', received: 32, spent: 40 },
    { day: 'Sat', received: 44, spent: 16 },
  ];

  const transactions = [
    { id: 1, title: 'Payment from Client ABC', date: 'Revenue • 2026-04-23', amount: '+₹50,000', type: 'income' },
    { id: 2, title: 'Office Supplies Purchase', date: 'Revenue • 2026-04-23', amount: '+₹50,000', type: 'expense' },
    { id: 3, title: 'Office Supplies Purchase', date: 'Revenue • 2026-04-23', amount: '+₹50,000', type: 'expense' },
    { id: 4, title: 'Invoice Payment #INV-1234', date: 'Revenue • 2026-04-23', amount: '+₹50,000', type: 'income' },
    { id: 5, title: 'Invoice Payment #INV-1234', date: 'Revenue • 2026-04-23', amount: '+₹50,000', type: 'income' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Header */}
      <header className="h-24 flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-8 border-b border-gray-200 bg-white shrink-0 py-4 md:py-0 gap-4 md:gap-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">Banking Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Daily transaction tracking and payment follow-up</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#71c358] to-[#1b3a57] text-white rounded-md text-sm font-medium hover:opacity-95 transition-opacity shadow-sm shrink-0">
          <RefreshCw size={16} />
          Sync Bank Account
        </button>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 bg-white">

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat Card 1 */}
          <div className="bg-linear-to-r from-[#00B250]/5 to-[#FFFFFF] rounded-xl border border-[#E4E4E4] hover:shadow-sm p-5 flex flex-col justify-between gap-3">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#7ABC4E] rounded-full flex items-center justify-center shrink-0">
                <img src="/growthdown.png" className="w-6 h-6 object-contain" alt="growth-down" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">₹125,000</p>
                <p className="text-sm text-gray-600">Money Received</p>
              </div>
            </div>
            <p className="text-xs font-medium text-green-500">+5% vs last month</p>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-linear-to-r from-[#FF9500]/5 to-[#FFFFFF] rounded-xl border border-[#E4E4E4] hover:shadow-sm p-5 flex flex-col justify-between gap-3">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FF9500] rounded-full flex items-center justify-center shrink-0">
                <img src="/growth.png" className="w-6 h-6 object-contain" alt="growth-up" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">₹30,600</p>
                <p className="text-sm text-gray-600">Money Spent</p>
              </div>
            </div>
            <p className="text-xs font-medium text-green-500">+18% vs last month</p>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-linear-to-r from-[#5B64FF]/5 to-[#FFFFFF] rounded-xl border border-[#E4E4E4] hover:shadow-sm p-5 flex flex-col justify-between gap-3">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#5B64FF] rounded-full flex items-center justify-center shrink-0">
                <img src="/balance.png" className="w-6 h-6 object-contain" alt="balance" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">₹94,400</p>
                <p className="text-sm text-gray-600">Net Balance</p>
              </div>
            </div>
            <p className="text-xs font-medium text-red-500">-2% vs last month</p>
          </div>
        </div>

        {/* Charts & Transactions Row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">

          {/* Weekly Overview Chart */}
          <div className="bg-[#FAFFF9] rounded-[20px] border border-[#D8D8D8] p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-bold text-gray-900">Weekly Overview</h2>
              <div className="flex items-center gap-4 text-xs font-medium text-gray-600">
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#71c358]"></span>Received</div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500"></span>Spent</div>
              </div>
            </div>

            <div className="h-64 relative flex items-end justify-between px-2">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-gray-400 font-medium h-full">
                <span>100k</span>
                <span>80k</span>
                <span>60k</span>
                <span>40k</span>
                <span>20k</span>
                <span>0</span>
              </div>

              {/* Chart Bars */}
              <div className="w-full pl-8 h-full flex justify-between items-end pb-6">
                {chartData.map((data) => (
                  <div key={data.day} className="flex flex-col items-center gap-1 h-full justify-end w-12 group">
                    <div className="w-full flex flex-col items-center justify-end gap-1">
                      {/* Spent Bar (Top, Orange) */}
                      <div
                        className="w-8 bg-orange-500 rounded-t-sm rounded-b-sm transition-all duration-300 group-hover:opacity-80"
                        style={{ height: `${data.spent}%` }}
                      ></div>
                      {/* Received Bar (Bottom, Green) */}
                      <div
                        className="w-8 bg-[#71c358] rounded-t-sm rounded-b-sm transition-all duration-300 group-hover:opacity-80"
                        style={{ height: `${data.received}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-500 font-medium">
                {chartData.map((data) => (
                  <div key={data.day} className="w-12 text-center">{data.day}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Transaction */}
          <div className="bg-[#FAFFF9] rounded-[20px] border border-[#D8D8D8] p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Recent Transaction</h2>

            <div className="space-y-6">
              {transactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={clsx(
                      "p-3 rounded-full flex items-center justify-center shrink-0 transition-colors",
                      tx.type === 'income' ? "bg-[#E1FFCD] text-green-600 group-hover:bg-green-200" : "bg-orange-100 text-orange-500 group-hover:bg-orange-200"
                    )}>
                      {tx.type === 'income' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">{tx.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{tx.date}</p>
                    </div>
                  </div>
                  {/* Matching the screenshot exactly where everything is green +₹50,000 */}
                  <div className="text-sm font-bold text-[#71c358]">
                    {tx.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}