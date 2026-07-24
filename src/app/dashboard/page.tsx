import React from 'react';
import {
  TrendingUp,
  Eye,
  MessageSquare,
  Bot,
  Search,
  Users,
  BarChart,
  Edit3,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-full bg-white">

      {/* Top Header */}
      <header className="min-h-24 py-6 md:py-0 flex flex-col md:flex-row md:items-center justify-between px-6 md:px-8 border-b border-gray-200 bg-white shrink-0 gap-4 md:gap-0">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Good Morning, John</h1>
          <p className="text-sm text-gray-500 mt-1">Here's what we've discovered for your business today</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="w-full sm:w-auto sm:min-w-50 md:w-52.5 bg-linear-to-r from-[#00B250]/30 to-[#FFFFFF] border border-[#BEE9D2] rounded-lg p-3 flex items-center gap-3 hover:shadow-sm">
            <div className="bg-[#FFFFFF] text-[#009E47] p-2 rounded-full shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">+24%</p>
              <p className="text-xs text-gray-500 font-medium whitespace-nowrap">Network Growth</p>
            </div>
          </div>

          <div className="w-full sm:w-auto sm:min-w-50 md:w-52.5 bg-linear-to-r from-[#8800F0]/30 to-[#FFFFFF] border border-[#EDE2EE] rounded-lg p-3 flex items-center gap-3 hover:shadow-sm">
            <div className="bg-[#FFFFFF] text-[#962BE8] p-2 rounded-full shrink-0">
              <Eye size={18} />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">156</p>
              <p className="text-xs text-gray-500 font-medium whitespace-nowrap">Profile Views</p>
            </div>
          </div>

          <div className="w-full sm:w-auto sm:min-w-50 md:w-52.5 bg-linear-to-r from-[#00C0E8]/30 to-[#FFFFFF] border border-[#C2DEE4] rounded-lg p-3 flex items-center gap-3 hover:shadow-sm">
            <div className="bg-[#FFFFFF] text-[#00A2C4] p-2 rounded-full shrink-0">
              <MessageSquare size={18} />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">7</p>
              <p className="text-xs text-gray-500 font-medium whitespace-nowrap">Active Conversation</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="p-6 md:p-8 space-y-6 bg-white">

        {/* AI Advisor Banner */}
        <section
          className="relative overflow-hidden rounded-xl shadow-[inset_0px_0px_8px_1px_#84848440] text-white p-6"
          style={{
            // backgroundImage: "linear-gradient(135deg, #00B250 0%, #2C65D6 100%)",
            boxShadow: "0px 4px 10px 0px #FFFFFF80 inset"
          }}
        >
          {/* Blurred background image with 100% opacity */}
          <div
            className="absolute -inset-2 bg-cover bg-center bg-no-repeat opacity-100 blur-sm pointer-events-none scale-105"
            style={{ backgroundImage: "url('/ai_advisor_bg.png')" }}
          />
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#FFFFFF1A]/80 p-4 sm:p-5 rounded-full backdrop-blur-md shrink-0">
                  <img src="/robot.png" alt="AI Advisor" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold">Your AI Business Advisor</h2>
                  <p className="text-blue-100 text-xs sm:text-sm">Ask me anything about growing your network and business</p>
                </div>
              </div>
              <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2.5 rounded-lg text-sm font-medium border border-white/30 backdrop-blur-md shrink-0 w-full sm:w-auto">
                <Sparkles size={16} />
                Start Conversation
              </button>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              {[
                { icon: Search, text: "Find me potential buyers for my services" },
                { icon: Users, text: "Suggest strategic partnerships in my industry" },
                { icon: BarChart, text: "Help me improve my business profile" },
                { icon: Edit3, text: "Draft an introduction message" }
              ].map((action, i) => (
                <button key={i} className="flex items-center justify-center sm:justify-start gap-2 bg-white/10 hover:bg-white/20 transition-colors border border-white/20 rounded-full px-4 py-2.5 text-xs font-medium backdrop-blur-sm w-full sm:w-auto">
                  <action.icon size={14} className="shrink-0" />
                  <span>{action.text}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Background glow effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400 rounded-full blur-[100px] opacity-30 mix-blend-screen translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-30 mix-blend-screen translate-y-1/2" />
        </section>

        {/* 4 Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-lg border border-[#BFDADF] shadow-sm flex flex-col h-full overflow-hidden">
            <div className="p-5  border-b border-[#00B250]/10 flex flex-col gap-3 bg-linear-to-b from-[#EBFCFF]/20 to-[#B7FFE2]/20">
              <div className="flex items-start justify-between gap-3 ">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3590A2] p-2 rounded-lg shrink-0 flex items-center justify-center w-12 h-12">
                    <img src="/clients_icon.png" alt="Clients Icon" className="w-7 h-7 object-contain brightness-0 invert" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">Potential Clients Identified</h3>
                </div>
                <span className="bg-[#3590A2] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shrink-0 mt-1">8</span>
              </div>
              <p className="text-xs text-gray-500 leading-normal">New businesses matching your service offerings</p>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between gap-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700 leading-tight">
                  <CheckCircle2 size={16} className="text-[#3590A2] mt-0.5 shrink-0" />
                  <span>Manufacturing Co. seeking tech solutions</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 leading-tight">
                  <CheckCircle2 size={16} className="text-[#3590A2] mt-0.5 shrink-0" />
                  <span>Retail chain needs inventory management</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#3590A2] font-semibold leading-tight">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  <span>+ 6 more opportunities</span>
                </li>
              </ul>
              <button className="w-full py-2 border border-[#0A1757] rounded-md text-sm font-semibold text-[#0A1757] hover:bg-[#0A1757] hover:text-[#ffff] cursor-pointer flex items-center justify-center gap-2 transition-colors mt-auto">
                View All Clients
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg border border-[#C8CBFF] shadow-sm flex flex-col h-full overflow-hidden">
            <div className="p-5 border-b border-[#2C65D6]/10 flex flex-col gap-3 bg-linear-to-b from-[#EBFCFF]/20 to-[#B7B8FF]/20">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[#5B64FF] p-2 rounded-lg shrink-0 flex items-center justify-center w-12 h-12">
                    <img src="/members_icon.png" alt="Members Icon" className="w-7 h-7 object-contain brightness-0 invert" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">Members You Should Meet</h3>
                </div>
                <span className="bg-[#5B64FF] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shrink-0 mt-1">12</span>
              </div>
              <p className="text-xs text-gray-500 leading-normal">Highly relevant connections for your goals</p>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between gap-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700 leading-tight">
                  <CheckCircle2 size={16} className="text-[#5B64FF] mt-0.5 shrink-0" />
                  <span>Sarah Chen - Strategic partnerships</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 leading-tight">
                  <CheckCircle2 size={16} className="text-[#5B64FF] mt-0.5 shrink-0" />
                  <span>Marcus Rodriguez - Supplier network</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#5B64FF] font-semibold leading-tight">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  <span>+ 10 more suggestions</span>
                </li>
              </ul>
              <button className="w-full py-2 border border-[#0A1757] rounded-md text-sm font-semibold text-[#0A1757] hover:bg-[#0A1757] hover:text-[#ffff] cursor-pointer flex items-center justify-center gap-2 transition-colors mt-auto">
                View All Members
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg border border-[#DED579] shadow-sm flex flex-col h-full overflow-hidden">
            <div className="p-5 border-b border-[#D49E00]/10 flex flex-col gap-3 bg-linear-to-b from-[#EBFCFF]/20 to-[#E8D651]/20">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[#BEAE0C] p-2 rounded-lg shrink-0 flex items-center justify-center w-12 h-12">
                    <img src="/improvements_icon.png" alt="Improvements Icon" className="w-7 h-7 object-contain brightness-0 invert" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">Profile Improvements</h3>
                </div>
                <span className="bg-[#BEAE0C] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shrink-0 mt-1">3</span>
              </div>
              <p className="text-xs text-gray-500 leading-normal">Boost your visibility in the network</p>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between gap-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700 leading-tight">
                  <CheckCircle2 size={16} className="text-[#BEAE0C] mt-0.5 shrink-0" />
                  <span>Add case studies to showcase expertise</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 leading-tight">
                  <CheckCircle2 size={16} className="text-[#BEAE0C] mt-0.5 shrink-0" />
                  <span>Complete service portfolio details</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#BEAE0C] font-semibold leading-tight">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  <span>+ 6 more opportunities</span>
                </li>
              </ul>
              <button className="w-full py-2 border border-[#0A1757] rounded-md text-sm font-semibold text-[#0A1757] hover:bg-[#0A1757] hover:text-[#ffff] cursor-pointer flex items-center justify-center gap-2 transition-colors mt-auto">
                Start Improving
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg border border-[#C483FF] shadow-sm flex flex-col h-full overflow-hidden">
            <div className="p-5  border-b border-[#8800F0]/10 flex flex-col gap-3  bg-linear-to-b from-[#EBFCFF]/20 to-[#D298FF]/20">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[#C483FF] p-2 rounded-lg shrink-0 flex items-center justify-center w-12 h-12">
                    <img src="/message_icon.png" alt="Message Icon" className="w-7 h-7 object-contain brightness-0 invert" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">Ready-to-Send Messages</h3>
                </div>
                <span className="bg-[#C483FF] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shrink-0 mt-1">5</span>
              </div>
              <p className="text-xs text-gray-500 leading-normal">Personalized outreach drafts for key contacts</p>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between gap-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700 leading-tight">
                  <CheckCircle2 size={16} className="text-[#C483FF] mt-0.5 shrink-0" />
                  <span>Introduction to potential partner</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 leading-tight">
                  <CheckCircle2 size={16} className="text-[#C483FF] mt-0.5 shrink-0" />
                  <span>Follow-up with recent connection</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#C483FF] font-semibold leading-tight">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  <span>+ 3 more drafts ready</span>
                </li>
              </ul>
              <button className="w-full py-2 border border-[#0A1757] rounded-md text-sm font-semibold text-[#0A1757] hover:bg-[#0A1757] hover:text-[#ffff] cursor-pointer flex items-center justify-center gap-2 transition-colors mt-auto">
                View Drafts
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </section>

        {/* AI Insight Footer */}
        <section className="bg-white rounded-xl border border-[#7FC34D] shadow-sm overflow-hidden mt-6">
          <div className="bg-linear-to-r from-[#7FC34D] to-[#0A1757] text-white px-4 py-2 inline-flex items-center gap-2 rounded-br-4xl rounded-tl-xl text-sm md:text-base font-medium">
            <Sparkles size={16} className="text-[#FFFFFF]" />
            Today's AI insight
          </div>
          <div className="p-6">
            <p className="text-[#1E1E1E] text-sm md:text-base italic mb-4">
              Based on recent network activity, there's increased demand for technology integration services in the manufacturing sector. We've identified 3 high-priority prospects you should connect with this week.
            </p>
            <button className="text-[#1E1E1ECC]/80 hover:text-gray-900 text-sm font-medium flex items-center gap-2 transition-colors">
              Ask AI for more details
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
