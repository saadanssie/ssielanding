"use client";

import React from 'react';
import {
  CreditCard,
  Clock,
  Wifi
} from 'lucide-react';
import clsx from 'clsx';

export default function CreditCardsPage() {

  const cards = [
    {
      id: 1,
      bank: 'HDFC Bank',
      cardName: 'HDFC Regalia',
      cardNumber: '**** **** **** 4532',
      status: 'DUE SOON',
      dueAmount: '₹15,000',
      dueDate: '2026-04-28',
      utilizationPercent: 8,
      utilizationText: '₹12,000 / ₹150,000',
      colorBg: 'bg-gradient-to-br from-[#004e92] to-[#000428]',
      cardLogo: '>FREEDOM<',
      logoColor: 'text-white font-bold tracking-widest'
    },
    {
      id: 2,
      bank: 'ICICI Bank',
      cardName: 'ICICI Amazon Pay',
      cardNumber: '**** **** **** 4532',
      status: 'DUE SOON',
      dueAmount: '₹15,000',
      dueDate: '2026-04-28',
      utilizationPercent: 8,
      utilizationText: '₹12,000 / ₹150,000',
      colorBg: 'bg-gradient-to-br from-[#1a1a1a] to-[#000000]',
      cardLogo: 'amazon pay',
      logoColor: 'text-white font-bold'
    },
    {
      id: 3,
      bank: 'SBI Card',
      cardName: 'SBI SimplyCLICK',
      cardNumber: '**** **** **** 4532',
      status: 'PAID',
      dueAmount: '-',
      dueDate: '-',
      utilizationPercent: 0,
      utilizationText: '₹150,000 / ₹150,000',
      colorBg: 'bg-gradient-to-br from-[#0052d4] via-[#4364f7] to-[#6fb1fc]',
      cardLogo: 'SBI card',
      logoColor: 'text-white font-bold'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Header */}
      <header className="h-24 flex flex-col justify-center px-6 md:px-8 border-b border-gray-200 bg-white shrink-0">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">Credit Card Management</h1>
        <p className="text-sm text-gray-500 mt-1">Track due dates and make payments</p>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-white">

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stat Card 1 */}
          <div className="bg-[#fffafa] rounded-xl border border-red-100 shadow-sm p-5 flex items-center gap-4">
            <div className="bg-[#ef4444] text-white p-3 rounded-full shrink-0">
              <CreditCard size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">₹23,500</p>
              <p className="text-sm text-gray-600">Total Amount Due</p>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-[#fffdf5] rounded-xl border border-orange-100 shadow-sm p-5 flex items-center gap-4">
            <div className="bg-[#f59e0b] text-white p-3 rounded-full shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">2</p>
              <p className="text-sm text-gray-600">Pending Payments</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-6">Cards (3)</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div key={card.id} className="flex flex-col space-y-4">

                {/* Physical Card Mockup */}
                <div className={clsx("w-full aspect-[1.6/1] rounded-2xl p-5 flex flex-col justify-between shadow-md relative overflow-hidden", card.colorBg)}>
                  {/* Subtle shine effect */}
                  <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45 transform -translate-x-1/2"></div>

                  <div className="flex justify-between items-start relative z-10">
                    <span className="text-white text-xs font-bold px-2 py-0.5 border border-white/30 rounded">{card.bank}</span>
                    <Wifi className="text-white/80 rotate-90" size={20} />
                  </div>

                  <div className="flex items-center justify-center relative z-10 my-auto">
                    {/* EMV Chip mock */}
                    <div className="absolute left-0 w-9 h-7 bg-[#ffd700] rounded-sm opacity-80 border border-[#b8860b] flex flex-col justify-evenly px-1">
                      <div className="w-full border-t border-[#b8860b]/50"></div>
                      <div className="w-full border-t border-[#b8860b]/50"></div>
                    </div>
                    <span className={clsx("text-2xl", card.logoColor)}>{card.cardLogo}</span>
                  </div>

                  <div className="flex justify-between items-end relative z-10">
                    <div>
                      <p className="text-white/90 font-mono text-sm tracking-widest mb-1">{card.cardNumber.replace('4532', '****')}</p>
                      <p className="text-white/80 text-[10px] uppercase tracking-widest">Vijay Kumar</p>
                    </div>
                    <div className="text-white text-right">
                      <p className="text-[8px] opacity-70 mb-0.5">VALID THRU</p>
                      <p className="text-xs font-bold">12/25</p>
                      <p className="text-lg font-bold italic mt-1">VISA</p>
                    </div>
                  </div>
                </div>

                {/* Card Details & Actions */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex-1 flex flex-col">

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{card.cardName}</h3>
                    <span className={clsx(
                      "text-[10px] font-bold px-2.5 py-0.5 rounded-full",
                      card.status === 'DUE SOON' ? "bg-[#f59e0b] text-white" : "bg-[#71c358] text-white"
                    )}>
                      {card.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">{card.cardNumber}</p>

                  <div className="border border-gray-200 rounded-lg p-3 flex justify-between items-center mb-6">
                    <div>
                      <p className="text-[10px] text-gray-500 mb-1">Due Amount</p>
                      <p className={clsx("text-lg font-bold", card.status === 'DUE SOON' ? "text-[#f59e0b]" : "text-gray-900")}>
                        {card.dueAmount}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-500 mb-1">Due Date</p>
                      <p className="text-sm font-bold text-gray-900 mt-1">
                        {card.dueDate}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center text-[10px] text-gray-500 font-bold mb-2">
                      <span>Credit Utilization {card.utilizationPercent}%</span>
                      <span>{card.utilizationText}</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#71c358] rounded-full"
                        style={{ width: `${card.utilizationPercent || 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    {card.status === 'DUE SOON' ? (
                      <button className="w-full py-2.5 bg-gradient-to-r from-[#71c358] to-[#1b3a57] text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-sm">
                        <CreditCard size={16} />
                        Make Payment
                      </button>
                    ) : (
                      <button disabled className="w-full py-2.5 bg-gray-100 text-gray-400 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-not-allowed">
                        Fully Paid
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