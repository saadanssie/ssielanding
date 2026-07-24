"use client";

import React from 'react';
import {
  Plus,
  Hourglass,
  Settings,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export default function WorkDuePage() {

  // Sample data to generate the cards
  const tasks = [
    {
      id: 1,
      title: 'Complete Q2 Financial Report',
      description: 'Prepare and submit quarterly financial statements',
      priority: 'HIGH',
      date: 'April 29, 2026',
      status: 'pending',
      progress: 0
    },
    {
      id: 2,
      title: 'Complete Q2 Financial Report',
      description: 'Prepare and submit quarterly financial statements',
      priority: 'HIGH',
      date: 'April 29, 2026',
      status: 'in-progress',
      progress: 70
    },
    {
      id: 3,
      title: 'Complete Q2 Financial Report',
      description: 'Prepare and submit quarterly financial statements',
      priority: 'MEDIUM',
      date: 'April 29, 2026',
      status: 'pending',
      progress: 0
    },
    {
      id: 4,
      title: 'Complete Q2 Financial Report',
      description: 'Prepare and submit quarterly financial statements',
      priority: 'HIGH',
      date: 'April 29, 2026',
      status: 'pending',
      progress: 0
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Header */}
      <header className="h-24 flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-8 border-b border-gray-200 bg-white shrink-0 py-4 md:py-0 gap-4 md:gap-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">Work Due & Pending Tasks</h1>
          <p className="text-sm text-gray-500 mt-1">Track and manage your work deadlines</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#71c358] to-[#1b3a57] text-white rounded-md text-sm font-medium hover:opacity-95 transition-opacity shadow-sm shrink-0">
          <Plus size={18} />
          Add Task
        </button>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-white">

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat Card 1 */}
          <div className="bg-white rounded-xl border border-[#CFCFCF] hover:shadow-sm p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-[#FFEBE2] text-orange-500 p-2.5 rounded-full border border-orange-100">
                <img src={"/pending_task.png"} className='w-5 h-5' alt="pending" />
              </div>
              <p className="text-sm font-bold text-[#1E1E1E]">Pending Task</p>
            </div>
            <p className="text-xl font-bold text-[#1E1E1E]">2</p>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-white rounded-xl border border border-[#CFCFCF] hover:shadow-sm p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-[#E8E9FF] text-blue-500 p-2.5 rounded-full border border-blue-100">
                <img src={"/inprogress.png"} className='w-5 h-5' alt="pending" />
              </div>
              <p className="text-sm font-bold text-[#1E1E1E]">In Progress</p>
            </div>
            <p className="text-xl font-bold text-[#1E1E1E]">12</p>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-white rounded-xl border border border-[#CFCFCF] hover:shadow-sm p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-[#E7FFD5] text-green-500 p-2.5 rounded-full border border-green-100">
                <img src={"/completed.png"} className='w-5 h-5' alt="pending" />
              </div>
              <p className="text-sm font-bold text-[#1E1E1E]">Completed</p>
            </div>
            <p className="text-xl font-bold text-[#1E1E1E]">5</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Pending & In Progress</h2>

          {/* Tasks Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tasks.map((task) => (
              <div key={task.id} className="bg-[#f8f9fa] border border-[#E0E0E0] rounded-xl p-6 shadow-sm">

                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{task.title}</h3>
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shrink-0 ml-2 border ${task.priority === 'HIGH'
                    ? 'bg-red-50 text-[#E94235] border-[#E94235]'
                    : 'bg-[#FFEBB3] text-[#C07000] border-[#C07000]'
                    }`}>
                    {task.priority}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-6">{task.description}</p>

                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-700">AB</div>
                    <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-xs font-bold text-green-700">CD</div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-bold text-purple-700">EF</div>
                  </div>
                  <span className="text-sm text-gray-500">+2 More Assignee</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-700 font-medium mb-6">
                  <Calendar size={16} className="text-gray-400" />
                  {task.date}
                </div>

                <div className="flex gap-4 mb-6">
                  {task.status === 'pending' ? (
                    <button className="cursor-pointer flex-1 py-2.5 bg-white border border-[#0A1757] text-[#152656] rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors">
                      Start
                    </button>
                  ) : (
                    <button className="cursor-pointer flex-1 py-2.5 bg-blue-50 border border-transparent text-[#1b3a57] rounded-lg text-sm font-bold">
                      In Progress
                    </button>
                  )}
                  <button className="cursor-pointer flex-1 py-2.5 bg-gradient-to-r from-[#71c358] to-[#1b3a57] text-white rounded-lg text-sm font-bold hover:opacity-95 transition-opacity shadow-sm">
                    Complete
                  </button>
                </div>

                <div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                    {task.progress > 0 && (
                      <div
                        className="h-full bg-gradient-to-r from-[#1b3a57] to-[#71c358] rounded-full"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    )}
                  </div>
                  <p className="text-[10px] font-bold text-gray-500">
                    {task.progress === 0 ? 'Task Not Started Yet' : `Progress : ${task.progress}%`}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}