"use client";

import React, { useState } from 'react';
import {
  CheckCircle2,
  Sparkles,
  RefreshCw,
  Type,
  Palette,
  Flame,
  Download
} from 'lucide-react';
import clsx from 'clsx';

export default function LabelDesignPage() {
  const [productName, setProductName] = useState('Premium Organic Coffee');
  const [description, setDescription] = useState('100% Arabica beans, Fair Trade certified');

  const templates = [
    { id: 1, name: 'Modern Minimalist', selected: true, color: 'bg-[#b6aa9f]' },
    { id: 2, name: 'Vintage Classic', selected: false, color: 'bg-[#5e1818]' },
    { id: 3, name: 'Bold & Vibrant', selected: false, color: 'bg-gradient-to-r from-cyan-400 to-blue-500' },
    { id: 4, name: 'Eco-Friendly', selected: false, color: 'bg-[#0f5132]' },
  ];

  const colorTones = [
    '#6366f1', '#1e3a8a', '#be185d', '#f97316', '#78350f', '#0d9488', '#1e40af', '#7c3aed',
    '#e11d48', '#451a03', '#854d0e', '#34d399', '#a3e635', '#4338ca', '#dc2626', '#312e81'
  ];

  const selectedColor = '#854d0e'; // The olive one

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Header */}
      <header className="h-24 flex flex-col justify-center px-6 md:px-8 border-b border-gray-200 bg-white shrink-0">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">Design Your Label</h1>
        <p className="text-sm text-gray-500 mt-1">AI will generate professional designs based on your inputs</p>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-white">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column (Inputs) */}
          <div className="w-full lg:w-[45%] space-y-8">

            {/* Input Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#5CAE3A] focus:ring-1 focus:ring-[#5CAE3A]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description/Tagline</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#5CAE3A] focus:ring-1 focus:ring-[#5CAE3A]"
                />
              </div>
            </div>

            {/* Label Template */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Label Template</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {templates.map((template) => (
                  <div key={template.id} className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className={clsx(
                      "w-full aspect-[4/3] rounded-lg relative overflow-hidden flex items-center justify-center transition-all",
                      template.color,
                      template.selected ? "ring-2 ring-offset-2 ring-[#5CAE3A]" : "hover:opacity-90"
                    )}>
                      {template.selected && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="bg-white rounded-full p-0.5">
                            <CheckCircle2 size={24} className="text-[#5CAE3A]" />
                          </div>
                        </div>
                      )}
                      {/* Fake graphics for templates */}
                      {!template.selected && <div className="w-1/2 h-1/2 bg-white/20 rounded-full blur-sm"></div>}
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center">{template.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Tone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Color Tone</label>
              <div className="grid grid-cols-8 gap-3 sm:gap-4">
                {colorTones.map((color, idx) => {
                  const isSelected = color === selectedColor;
                  return (
                    <div
                      key={idx}
                      className="aspect-square rounded-full cursor-pointer relative flex items-center justify-center transition-transform hover:scale-110"
                      style={{ backgroundColor: color }}
                    >
                      {/* Bottom half lighter shade illusion via pseudo or inner div could go here, keeping it simple */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white/20 rounded-b-full"></div>

                      {isSelected && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="bg-white rounded-full p-0.5 shadow-sm">
                            <CheckCircle2 size={16} className="text-[#854d0e]" />
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button className="flex-1 py-3 bg-gradient-to-r from-[#71c358] to-[#1b3a57] text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-sm">
                <Sparkles size={16} />
                Generate AI Design
              </button>
              <button className="flex-1 py-3 bg-white border border-[#1b3a57] text-[#1b3a57] rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow-sm">
                <RefreshCw size={16} />
                Regenerate
              </button>
            </div>

            {/* AI Suggestions */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">AI Suggestions</h3>
              <div className="space-y-3">
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-4 flex items-start gap-4 relative overflow-hidden">
                  <div className="bg-white p-2.5 rounded-full shadow-sm shrink-0 text-gray-700">
                    <Type size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Typography Recommendation</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Consider using 'Playfair Display' for elegance</p>
                  </div>
                  <div className="absolute top-0 right-0 bg-[#5cae3a] text-white p-1 rounded-bl-lg">
                    <Sparkles size={12} />
                  </div>
                </div>

                <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-4 flex items-start gap-4 relative overflow-hidden">
                  <div className="bg-white p-2.5 rounded-full shadow-sm shrink-0 text-gray-700">
                    <Palette size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Color Psychology</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Earth tones convey natural & organic qualities</p>
                  </div>
                  <div className="absolute top-0 right-0 bg-[#5cae3a] text-white p-1 rounded-bl-lg">
                    <Sparkles size={12} />
                  </div>
                </div>

                <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-4 flex items-start gap-4 relative overflow-hidden">
                  <div className="bg-white p-2.5 rounded-full shadow-sm shrink-0 text-orange-500">
                    <Flame size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Industry Trend</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Minimalist designs are trending in coffee packaging</p>
                  </div>
                  <div className="absolute top-0 right-0 bg-[#5cae3a] text-white p-1 rounded-bl-lg">
                    <Sparkles size={12} />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Preview) */}
          <div className="w-full lg:w-[55%] space-y-6">

            {/* Main Preview Box */}
            <div className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6 flex flex-col h-[600px]">

              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-bold text-gray-900">Label Preview</h2>
                  <span className="flex items-center gap-1 bg-[#e0e7ff] text-[#4f46e5] px-2 py-0.5 rounded-full text-xs font-bold">
                    <Sparkles size={12} /> AI Generated
                  </span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#71c358] to-[#1b3a57] text-white rounded-md text-sm font-medium hover:opacity-95 transition-opacity shadow-sm">
                  <Download size={16} />
                  Download
                </button>
              </div>

              {/* The mockup container */}
              <div className="flex-1 bg-white border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center p-8 relative overflow-hidden">

                {/* Simulated 3D Box Background */}
                <div className="absolute inset-0 bg-[#e5e5e5] flex items-center justify-center">
                  {/* Brown Coffee Box representation */}
                  <div className="w-[80%] max-w-md aspect-[4/3] bg-[#a67c52] shadow-2xl relative rotate-[-2deg] flex items-center justify-center">

                    {/* The Label applied on the box */}
                    <div className="bg-white w-[85%] h-[70%] rounded shadow-lg flex flex-col items-center justify-center text-center p-6 relative">
                      <h3 className="text-3xl font-serif font-bold text-[#854d0e] leading-tight mb-4">
                        Premium Organic<br />Coffee
                      </h3>
                      <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest border-b border-gray-200 pb-4">
                        100% Arabica beans, Fair Trade certified
                      </p>

                      <div className="flex gap-3 justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#78350f]"></div>
                        <div className="w-6 h-6 rounded-full bg-[#d97706]"></div>
                        <div className="w-6 h-6 rounded-full bg-[#fef3c7]"></div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* Recent Designs */}
            <div className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Design</h2>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {/* Placeholder for Design 1 */}
                <div className="w-40 aspect-square rounded-xl bg-[#fff8e7] border border-gray-200 flex-shrink-0 flex items-center justify-center shadow-sm">
                  <div className="w-24 h-16 bg-[#8b5a2b] rounded flex flex-col items-center justify-center">
                    <span className="text-[8px] text-white/70">Coffee Box</span>
                  </div>
                </div>
                {/* Placeholder for Design 2 */}
                <div className="w-40 aspect-square rounded-xl bg-[#f0f0f0] border border-gray-200 flex-shrink-0 flex items-center justify-center shadow-sm">
                  <div className="w-16 h-24 bg-[#ff6b00] rounded-t-3xl flex flex-col items-center justify-center">
                    <span className="text-[8px] text-white">Coffee Cup</span>
                  </div>
                </div>
                {/* Placeholder for Design 3 */}
                <div className="w-40 aspect-square rounded-xl bg-[#5c3a21] border border-gray-200 flex-shrink-0 flex items-center justify-center shadow-sm">
                  <div className="w-20 h-12 bg-[#c69c6d] rounded flex flex-col items-center justify-center rotate-[10deg]">
                    <span className="text-[8px] text-[#5c3a21] font-bold">Tag</span>
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