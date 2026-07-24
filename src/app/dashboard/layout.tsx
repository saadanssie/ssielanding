"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Bot,
  Lightbulb,
  BarChart3,
  Users,
  Truck,
  Calendar,
  Tag,
  Percent,
  Landmark,
  ClipboardList,
  CreditCard,
  Settings,
  ChevronLeft,
  ChevronRight,
  GaugeIcon,
  Menu,
  X
} from 'lucide-react';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { useState } from 'react';

const routes = [
  {
    name: 'Dashboard', path: '/dashboard', icon: GaugeIcon
  },
  { name: 'AI Advisor', path: '/dashboard/ai-advisor', icon: Bot },
  { name: 'Opportunities', path: '/dashboard/opportunities', icon: Lightbulb },
  { name: 'Insights', path: '/dashboard/insights', icon: BarChart3 },
  { name: 'Daily Meetings', path: '/dashboard/daily-meetings', icon: Users },
  { name: 'Cargo Tracking', path: '/dashboard/cargo-tracking', icon: Truck },
  { name: 'Work Due', path: '/dashboard/work-due', icon: Calendar },
  { name: 'Label Design', path: '/dashboard/label-design', icon: Tag },
  { name: 'Promotions', path: '/dashboard/promotions', icon: Percent },
  { name: 'Banking', path: '/dashboard/banking', icon: Landmark },
  { name: 'Inventory', path: '/dashboard/inventory', icon: ClipboardList },
  { name: 'Credit Cards', path: '/dashboard/credit-cards', icon: CreditCard },
  { name: 'Utilities', path: '/dashboard/utilities', icon: Settings },
];

interface SidebarProps {
  isMobileOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isMobileOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <aside
        className={clsx(
          "shrink-0 bg-[#F8FAFC] border-r border-gray-200 h-full flex flex-col transition-all duration-300",
          "fixed inset-y-0 left-0 z-50 lg:relative lg:z-0 lg:flex",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          isOpen ? "w-[280px] lg:w-[260px] xl:w-[320px]" : "w-[280px] lg:w-[100px]"
        )}
        style={{
          backgroundImage: "url('/questionnaire_bg.jpg')",
          backgroundSize: 'auto',
          backgroundPosition: 'center'
        }}
      >
        <div className={clsx(
          "h-20 lg:h-24 flex items-center border-b border-gray-200 overflow-hidden px-6 justify-between"
        )}>
          {(isOpen || isMobileOpen) && (
            <Link href="/" className="shrink-0" onClick={onClose}>
              <Image src="/logo.png" alt="SSIE Logo" width={140} height={60} className="object-contain" />
            </Link>
          )}
          <div className="flex items-center">
            {/* Mobile close button */}
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-200 rounded-md text-gray-500 shrink-0 transition-colors"
              title="Close Menu"
            >
              <X size={18} />
            </button>
            {/* Desktop collapse/expand button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hidden lg:block p-2 hover:bg-gray-200 rounded-md text-gray-500 shrink-0 transition-colors"
              title={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
            >
              {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-6 space-y-1">
          {routes.map((route) => {
            const isActive = pathname === route.path || (route.path !== '/dashboard' && pathname.startsWith(route.path));
            return (
              <Link
                key={route.path}
                href={route.path}
                onClick={onClose}
                className={clsx(
                  "flex items-center py-3 rounded-lg text-sm font-medium transition-colors",
                  isOpen || isMobileOpen ? "gap-3 px-4" : "justify-center px-0",
                  isActive
                    ? "bg-gradient-to-r from-[#5CAE3A] to-[#002758] text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 border-b border-[#4269521A]/100 "
                )}
                title={!isOpen && !isMobileOpen ? route.name : undefined}
              >
                <route.icon size={18} className={isActive ? "text-white shrink-0" : "text-gray-500 shrink-0"} />
                {(isOpen || isMobileOpen) && <span className="whitespace-nowrap">{route.name}</span>}
              </Link>
            );
          })}
        </div>

        {/* Profile Section */}
        <div className={clsx(
          "border-t border-gray-200 p-4 flex items-center transition-all",
          isOpen || isMobileOpen ? "justify-between" : "justify-center"
        )}>
          <div className="flex items-center gap-3 overflow-hidden" title={!isOpen && !isMobileOpen ? "John Doe" : undefined}>
            <div className="w-10 h-10 bg-[#f0fdf4] border border-green-200 text-green-700 font-bold rounded-full flex items-center justify-center shrink-0">
              JD
            </div>
            {(isOpen || isMobileOpen) && (
              <div className="flex flex-col truncate">
                <span className="text-sm font-bold text-gray-900 truncate">John Doe</span>
                <span className="text-xs text-gray-500 truncate">Clarasoft Pvt Ltd</span>
              </div>
            )}
          </div>
          {(isOpen || isMobileOpen) && (
            <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 shrink-0" title="Settings">
              <Settings size={18} />
            </button>
          )}
        </div>
      </aside>
    </>
  );
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#F4F7F9] text-gray-900 overflow-hidden font-sans relative">
      {/* Mobile Navbar */}
      <header className="lg:hidden h-16 bg-[#F8FAFC] border-b border-gray-200 px-4 flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-md text-gray-500 transition-colors"
            title="Open Menu"
          >
            <Menu size={20} />
          </button>
          <Link href="/">
            <Image src="/logo.png" alt="SSIE Logo" width={110} height={48} className="object-contain" />
          </Link>
        </div>
        <div className="w-8 h-8 bg-[#f0fdf4] border border-green-200 text-green-700 font-bold rounded-full flex items-center justify-center text-xs">
          JD
        </div>
      </header>

      <Sidebar isMobileOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
