"use client";

import React, { useState } from 'react';
import {
  Sparkles,
  Share2,
  Download,
  Image as ImageIcon,
  CheckCircle2,
  MessageSquare,
  BarChart2,
  MousePointerClick,
  Lightbulb,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import clsx from 'clsx';

export default function PromotionsPage() {
  const [campaignTitle, setCampaignTitle] = useState('Spring Sale 2026');
  const [promoMessage, setPromoMessage] = useState('Get 30% off on all products! Limited time offer.');
  const [activePlatform, setActivePlatform] = useState('Social Media');
  const [activeTab, setActiveTab] = useState('Social');

  const platforms = [
    { name: 'Social Media', dim: '1080x1080px' },
    { name: 'Instagram Story', dim: '1080x1920px' },
    { name: 'Web Banner', dim: '1200x628px' },
    { name: 'Email Header', dim: '600x200px' },
  ];

  const templates = [
    { id: 1, name: 'Bold & Energetic', selected: true, color: 'bg-[#b6aa9f]' },
    { id: 2, name: 'Professional', selected: false, color: 'bg-[#5e1818]' },
    { id: 3, name: 'Elegant', selected: false, color: 'bg-gradient-to-r from-cyan-400 to-blue-500' },
    { id: 4, name: 'Fresh & Natural', selected: false, color: 'bg-[#0f5132]' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Header */}
      <header className="h-24 flex flex-col justify-center px-6 md:px-8 border-b border-gray-200 bg-white shrink-0">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">Promotion Mockup</h1>
        <p className="text-sm text-gray-500 mt-1">AI will create promotional content based on your inputs</p>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-white">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column (Inputs) */}
          <div className="w-full lg:w-[45%] space-y-8">

            {/* Input Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Title</label>
                <input
                  type="text"
                  value={campaignTitle}
                  onChange={(e) => setCampaignTitle(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#5CAE3A] focus:ring-1 focus:ring-[#5CAE3A]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Promotional Message</label>
                <input
                  type="text"
                  value={promoMessage}
                  onChange={(e) => setPromoMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#5CAE3A] focus:ring-1 focus:ring-[#5CAE3A]"
                />
              </div>
            </div>

            {/* Target Platform */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Target Platform</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {platforms.map((platform) => (
                  <div key={platform.name} className="flex flex-col gap-2">
                    <div
                      onClick={() => setActivePlatform(platform.name)}
                      className={clsx(
                        "w-full aspect-square rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors border-2",
                        activePlatform === platform.name
                          ? "bg-gray-50 border-[#1b3a57]"
                          : "bg-[#f8f9fa] border-transparent hover:border-gray-200"
                      )}
                    >
                      <div className="bg-white p-2 border border-gray-200 shadow-sm rounded mb-2">
                        <ImageIcon size={24} className="text-[#5cae3a]" />
                      </div>
                      <span className="text-[10px] text-gray-400 font-medium">{platform.dim}</span>
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Style Template */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">AI Style Template</label>
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
                      {!template.selected && <div className="w-1/2 h-1/2 bg-white/20 rounded-full blur-sm"></div>}
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center">{template.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <button className="w-full py-3 bg-gradient-to-r from-[#71c358] to-[#1b3a57] text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-sm">
              <Sparkles size={16} />
              Generate Mockup
            </button>

            {/* AI Content Suggestions */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">AI Content Suggestions</h3>
              <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#5cae3a] text-white p-2 rounded-bl-xl">
                  <Sparkles size={16} />
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-4">Headline Ideas:</h4>
                <ul className="space-y-4">
                  <li className="text-sm text-gray-600 italic">"Don't Miss Out! Spring Savings Start Now"</li>
                  <div className="w-full h-px bg-gray-200"></div>
                  <li className="text-sm text-gray-600 italic">"Transform Your Style This Spring"</li>
                  <div className="w-full h-px bg-gray-200"></div>
                  <li className="text-sm text-gray-600 italic">"Limited Time: 30% Off Everything"</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Right Column (Preview & Stats) */}
          <div className="w-full lg:w-[55%] space-y-6">

            {/* Main Preview Box */}
            <div className="bg-[#f4f7f9] rounded-2xl border border-gray-200 p-6 flex flex-col">

              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-bold text-gray-900">Promotion Preview</h2>
                  <span className="flex items-center gap-1 bg-[#e0e7ff] text-[#4f46e5] px-2 py-0.5 rounded-full text-xs font-bold">
                    <Sparkles size={12} /> AI Generated
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 border border-[#1b3a57] text-[#1b3a57] rounded-lg hover:bg-blue-50 transition-colors bg-white">
                    <Share2 size={16} />
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#71c358] to-[#1b3a57] text-white rounded-md text-sm font-medium hover:opacity-95 transition-opacity shadow-sm">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>

              {/* Toggle */}
              <div className="bg-white border border-gray-200 rounded-full p-1 flex mb-8">
                {['Social', 'Story', 'Banner'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={clsx(
                      "flex-1 py-1.5 text-sm font-medium rounded-full transition-colors",
                      activeTab === tab ? "bg-[#0b1a30] text-white" : "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* The mockup container */}
              <div className="w-full aspect-[4/3] max-w-2xl mx-auto bg-white border-2 border-dashed border-gray-300 flex flex-col p-2 rounded-xl">
                {/* The actual ad mockup */}
                <div className="flex-1 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl relative overflow-hidden flex items-center justify-center p-8">
                  {/* Glassmorphism card */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
                    <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-md">
                      Spring Sale 2026
                    </h3>
                    <p className="text-white/90 text-sm mb-8 font-medium">
                      Get 30% off on all products! Limited time offer.
                    </p>
                    <button className="bg-white text-pink-600 font-bold px-6 py-2.5 rounded-full text-sm hover:bg-pink-50 transition-colors inline-flex items-center gap-2 shadow-lg">
                      Shop Now <ArrowRight size={16} />
                    </button>
                  </div>
                  {/* Subtle background element */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                </div>
              </div>
            </div>

            {/* Predicted Performance */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Predicted Performance</h3>
              <p className="text-sm text-gray-500 mb-4">AI-powered engagement forecast</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                  <div className="bg-[#1b3a57] text-white p-2.5 rounded-full">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">85%</p>
                    <p className="text-xs text-gray-500">Est. Engagement</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                  <div className="bg-[#1b3a57] text-white p-2.5 rounded-full">
                    <BarChart2 size={20} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">12.5K</p>
                    <p className="text-xs text-gray-500">Potential Reach</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                  <div className="bg-[#1b3a57] text-white p-2.5 rounded-full">
                    <MousePointerClick size={20} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">4.2%</p>
                    <p className="text-xs text-gray-500">Click Rate</p>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#fff9f0] border border-orange-100 rounded-xl p-4 flex items-start gap-4">
                  <div className="bg-white text-orange-400 p-2 rounded-full shadow-sm shrink-0">
                    <Lightbulb size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">AI Tip</h4>
                    <p className="text-xs text-gray-600">Adding urgency with "Limited Time" can increase conversion rates by up to 25%</p>
                  </div>
                </div>

                <div className="bg-[#fff9f0] border border-orange-100 rounded-xl p-4 flex items-start gap-4">
                  <div className="bg-white text-orange-500 p-2 rounded-full shadow-sm shrink-0">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Optimization Tip</h4>
                    <p className="text-xs text-gray-600">Post between 10 AM - 2 PM on weekdays for maximum engagement with your target audience</p>
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