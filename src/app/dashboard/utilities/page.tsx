"use client";

import React from 'react';
import {
  Zap,
  Droplet,
  Wifi,
  Clock
} from 'lucide-react';
import clsx from 'clsx';

export default function UtilitiesPage() {

  const bills = [
    {
      id: 1,
      title: 'City Power Co.',
      type: 'Electricity',
      accountNumber: 'ELEC-789456',
      icon: Zap,
      consumption: '456 kWh',
      dueAmount: '₹2,450',
      dueDate: '2026-04-30',
      status: 'Due Soon',
      isPaid: false
    },
    {
      id: 2,
      title: 'Municipal Water',
      type: 'Water',
      accountNumber: 'WATER-123654',
      icon: Droplet,
      consumption: '12,500 L',
      dueAmount: '₹850',
      dueDate: '2026-04-30',
      status: 'Due Soon',
      isPaid: false
    },
    {
      id: 3,
      title: 'FastNet Broadband',
      type: 'Electricity', // Matching the mockup's text exactly
      accountNumber: 'ELEC-789456', // Matching the mockup's text exactly
      icon: Wifi,
      consumption: '1000GB',
      dueAmount: '₹2,450',
      dueDate: '2026-04-30',
      status: 'Paid',
      isPaid: true
    },
    {
      id: 4,
      title: 'City Power Co.',
      type: 'Electricity',
      accountNumber: 'ELEC-789456',
      icon: Zap,
      consumption: '456 kWh',
      dueAmount: '₹2,450',
      dueDate: '2026-04-30',
      status: 'Due Soon',
      isPaid: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Header */}
      {/* Note: the mockup says 'Credit Card Management' here, which appears to be a typo in the design, 
          but I will use 'Utility Bills Management' to be accurate for this page. */}
      <header className="h-24 flex flex-col justify-center px-6 md:px-8 border-b border-gray-200 bg-white shrink-0">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">Utility Bills Management</h1>
        <p className="text-sm text-gray-500 mt-1">Track due dates and make payments</p>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-white">

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stat Card 1 */}
          <div className="bg-linear-to-r from-[#E94235]/10 to-[#FFFFFF] rounded-lg border border-[#E4E4E4] hover:shadow-sm p-5 flex items-center gap-4">
            <div className="bg-[#ef4444] text-white p-3 rounded-full shrink-0">
              <Zap size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">₹3,300</p>
              <p className="text-sm text-gray-600">Total Amount Due</p>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-linear-to-r from-[#FF9500]/10 to-[#FFFFFF] rounded-lg border border-[#E4E4E4] hover:shadow-sm p-5 flex items-center gap-4">
            <div className="bg-[#f59e0b] text-white p-3 rounded-full shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">3</p>
              <p className="text-sm text-gray-600">Pending Bills</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Pending Bills</h2>

          <div className="space-y-4">
            {bills.map((bill) => (
              <div
                key={bill.id}
                className={clsx(
                  "rounded-xl border border-[#CBCFCB] p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm",
                  bill.isPaid ? "bg-[#f8f9fa] border-[#CBCFCB] opacity-60" : "bg-[#f4faeb]/50 border-green-100"
                )}
              >

                {/* Title and Icon */}
                <div className="flex items-center gap-4 min-w-[280px]">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-[#E2E2E2] text-gray-500 shrink-0">
                    <bill.icon size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-base font-bold text-gray-900">{bill.title}</h3>
                      {!bill.isPaid && (
                        <span className="bg-[#f59e0b] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {bill.status}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 font-medium">
                      {bill.type} <span className="mx-1 text-gray-300">|</span> {bill.accountNumber}
                    </p>
                  </div>
                </div>

                {/* Details Row */}
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-6 lg:gap-12 w-full lg:w-auto">

                  {/* Consumption */}
                  <div className="bg-white px-4 py-2 rounded-lg min-w-[100px]">
                    <p className="text-sm font-bold text-gray-900">{bill.consumption}</p>
                    <p className="text-[10px] text-gray-500">Consumption</p>
                  </div>

                  {/* Due Amount */}
                  <div className="bg-white px-4 py-2 rounded-lg min-w-[100px]">
                    <p className="text-sm font-bold text-gray-900">{bill.dueAmount}</p>
                    <p className="text-[10px] text-gray-500">Due Amount</p>
                  </div>

                  {/* Due Date */}
                  <div className="bg-white px-4 py-2 rounded-lg min-w-[110px]">
                    <p className="text-sm font-bold text-gray-900">{bill.dueDate}</p>
                    <p className="text-[10px] text-gray-500">Due Date</p>
                  </div>

                  {/* Action Button */}
                  <div className="ml-auto w-full sm:w-auto mt-2 lg:mt-0">
                    {!bill.isPaid ? (
                      <button className="w-full sm:w-auto px-8 py-2.5 bg-gradient-to-r from-[#71c358] to-[#1b3a57] text-white rounded-md text-sm font-medium hover:opacity-95 transition-opacity shadow-sm whitespace-nowrap">
                        Pay {bill.dueAmount}
                      </button>
                    ) : (
                      <button disabled className="w-full sm:w-auto px-8 py-2.5 bg-[#e2e8f0] text-gray-500 rounded-md text-sm font-medium whitespace-nowrap cursor-not-allowed shadow-inner">
                        Paid
                      </button>
                    )}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}