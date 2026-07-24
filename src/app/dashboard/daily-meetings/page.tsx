"use client";

import React from 'react';
import {
  Plus,
  Calendar,
  Clock,
  ArrowUpRight,
  Video,
  Users
} from 'lucide-react';

export default function DailyMeetingsPage() {

  // Sample data to generate the cards
  const meetings = [
    { id: 1, title: 'Product Review Meeting', date: 'April 28, 2026', time: '10:00 AM', platform: 'meet' },
    { id: 2, title: 'Product Review Meeting', date: 'April 28, 2026', time: '10:00 AM', platform: 'teams' },
    { id: 3, title: 'Product Review Meeting', date: 'April 28, 2026', time: '10:00 AM', platform: 'meet' },
    { id: 4, title: 'Product Review Meeting', date: 'April 28, 2026', time: '10:00 AM', platform: 'meet' },
    { id: 5, title: 'Product Review Meeting', date: 'April 28, 2026', time: '10:00 AM', platform: 'teams' },
    { id: 6, title: 'Product Review Meeting', date: 'April 28, 2026', time: '10:00 AM', platform: 'meet' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Header */}
      <header className="h-24 flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-8 border-b border-gray-200 bg-white shrink-0 py-4 md:py-0 gap-4 md:gap-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">Daily Meetings</h1>
          <p className="text-sm text-gray-500 mt-1">Gmail & Outlook Calendar Integration</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#71c358] to-[#1b3a57] text-white rounded-md text-sm font-medium hover:opacity-95 transition-opacity shadow-sm shrink-0">
          <Plus size={18} />
          Schedule Meeting
        </button>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#fafafa]">

        <p className="text-sm font-medium text-gray-600 mb-6">Tuesday, April 28, 2026</p>

        {/* Meetings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="bg-[#F5F8FF] border border-[#E0E0E0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-900">{meeting.title}</h3>
                <span className="bg-[#FFEACC] border border-[#FFCF88] text-[#1E1E1E] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0 ml-2">
                  Upcoming
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} className="text-gray-400" />
                  {meeting.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={16} className="text-gray-400" />
                  {meeting.time}
                </div>
                <div className="text-gray-300">|</div>
                <div>
                  {meeting.platform === 'meet' ? (
                    <div className="flex items-center">
                      {/* Fake Google Meet Icon */}
                      <img src="/googlemeet.png" />
                    </div>
                  ) : (
                    <div className="flex items-center">
                      {/* Fake MS Teams Icon */}
                      <img src="/teams.png" />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-700">AB</div>
                  <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-xs font-bold text-green-700">CD</div>
                  <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-bold text-purple-700">EF</div>
                </div>
                <span className="text-sm text-gray-500">+2 More</span>
              </div>

              <button className="cursor-pointer w-full py-3 bg-[#0A1757] text-white rounded-sm text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#1e293b] transition-colors shadow-sm">
                Join Meeting
                <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}