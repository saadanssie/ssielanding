"use client";

import React from 'react';
import {
  Package,
  AlertTriangle,
  Bell
} from 'lucide-react';
import clsx from 'clsx';

export default function InventoryPage() {

  const inventoryItems = [
    {
      id: 1,
      name: 'Premium Coffee Beans',
      sku: '#SKU-001',
      category: 'Food & Beverage',
      status: 'Low Stock',
      current: 45,
      max: 200,
      min: 50,
      lastUpdated: '2026-04-23'
    },
    {
      id: 2,
      name: 'Organic Lavender Soap',
      sku: '#SKU-002',
      category: 'Personal Care',
      status: 'Normal',
      current: 185,
      max: 200,
      min: 50,
      lastUpdated: '2026-04-23'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Header */}
      <header className="h-24 flex flex-col justify-center px-6 md:px-8 border-b border-gray-200 bg-white shrink-0">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">Inventory Management</h1>
        <p className="text-sm text-gray-500 mt-1">Real-time stock monitoring and alerts</p>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-white">

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat Card 1 */}
          <div className="bg-white rounded-xl border border-green-100 shadow-sm p-4 flex items-center gap-4">
            <div className="bg-[#71c358] text-white p-3 rounded-full shrink-0">
              <Package size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">380</p>
              <p className="text-sm text-gray-600">Total Items in Stock</p>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-[#fff9f0] rounded-xl border border-orange-100 shadow-sm p-4 flex items-center gap-4">
            <div className="bg-[#f59e0b] text-white p-3 rounded-full shrink-0">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">2</p>
              <p className="text-sm text-gray-600">Low Stock Alerts</p>
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-[#f8f9ff] rounded-xl border border-indigo-100 shadow-sm p-4 flex items-center gap-4">
            <div className="bg-[#5c6be3] text-white p-3 rounded-full shrink-0">
              <Bell size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">4</p>
              <p className="text-sm text-gray-600">Active Products</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Inventory Status</h2>

          <div className="space-y-6">
            {inventoryItems.map((item) => {
              const percentage = Math.min((item.current / item.max) * 100, 100);

              return (
                <div key={item.id} className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6 shadow-sm">

                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                    <span className={clsx(
                      "text-[10px] font-bold px-2.5 py-0.5 rounded-full",
                      item.status === 'Low Stock'
                        ? "bg-[#f59e0b] text-white"
                        : "bg-[#71c358] text-white"
                    )}>
                      {item.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mb-8">
                    {item.sku} <span className="mx-2 text-gray-300">|</span> {item.category}
                  </p>

                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-medium text-gray-700">Stock Level</span>
                      <span className="text-sm font-bold text-gray-900">{item.current} <span className="font-normal text-gray-500">/ {item.max} units</span></span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden mb-2">
                      {/* Gradient Bar */}
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#f59e0b] via-[#eab308] to-[#71c358]"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>Min: {item.min}</span>
                      <span>Last updated: {item.lastUpdated}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}