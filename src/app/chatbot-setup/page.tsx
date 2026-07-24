"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, User, Palette } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for cleaner tailwind classes
function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const THEMES = [
  { id: 'ocean', name: 'Ocean Blue', color: 'bg-blue-500', shadow: 'shadow-blue-500/50', border: 'border-blue-500', text: 'text-blue-500', gradient: 'from-blue-500 to-cyan-400' },
  { id: 'emerald', name: 'Emerald Green', color: 'bg-emerald-500', shadow: 'shadow-emerald-500/50', border: 'border-emerald-500', text: 'text-emerald-500', gradient: 'from-emerald-500 to-teal-400' },
  { id: 'amethyst', name: 'Amethyst', color: 'bg-violet-500', shadow: 'shadow-violet-500/50', border: 'border-violet-500', text: 'text-violet-500', gradient: 'from-violet-500 to-purple-400' },
  { id: 'sunset', name: 'Sunset', color: 'bg-orange-500', shadow: 'shadow-orange-500/50', border: 'border-orange-500', text: 'text-orange-500', gradient: 'from-orange-500 to-rose-400' },
  { id: 'midnight', name: 'Midnight', color: 'bg-slate-800', shadow: 'shadow-slate-800/50', border: 'border-slate-800', text: 'text-slate-800', gradient: 'from-slate-800 to-slate-600' }
];

import { useRouter } from 'next/navigation';

export default function ChatbotSetupPage() {
  const [agentName, setAgentName] = useState('');
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]);
  const router = useRouter();

  const handleCreateAgent = () => {
    const config = {
      name: agentName || 'Your Agent',
      theme: selectedTheme
    };
    localStorage.setItem('agentConfig', JSON.stringify(config));
    router.push('/dashboard/ai-advisor');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Form Configuration */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white p-8 sm:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Setup Wizard</span>
          </div>
          
          <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">Configure your Agent</h1>
          <p className="text-slate-500 mb-10 text-lg">Personalize your AI assistant's identity and appearance to match your brand.</p>

          <div className="space-y-8">
            {/* Name Input */}
            <div className="space-y-3">
              <label htmlFor="agent-name" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Bot className="w-4 h-4" />
                Agent Name
              </label>
              <input
                id="agent-name"
                type="text"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                placeholder="e.g. SupportBot, Athena, Jarvis..."
                className={cn(
                  "w-full px-4 py-3.5 rounded-xl border-2 bg-slate-50 text-slate-900 text-lg transition-all duration-200 outline-none placeholder:text-slate-400",
                  "focus:bg-white",
                  selectedTheme.border,
                  agentName ? `border-slate-300 focus:${selectedTheme.border}` : "border-slate-200"
                )}
              />
            </div>

            {/* Theme Selector */}
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Palette className="w-4 h-4" />
                Color Theme
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {THEMES.map((theme) => {
                  const isSelected = selectedTheme.id === theme.id;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme)}
                      className={cn(
                        "relative flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200",
                        isSelected 
                          ? cn("bg-white border-transparent shadow-lg", theme.shadow) 
                          : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                      )}
                    >
                      <div className={cn("w-6 h-6 rounded-full flex-shrink-0 shadow-inner", theme.color)} />
                      <span className={cn("text-sm font-medium", isSelected ? "text-slate-900" : "text-slate-600")}>
                        {theme.name}
                      </span>
                      {isSelected && (
                        <motion.div layoutId="outline" className={cn("absolute inset-0 border-2 rounded-xl", theme.border)} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <button 
              onClick={handleCreateAgent}
              className={cn(
              "w-full mt-4 py-4 px-6 rounded-xl text-white font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r",
              selectedTheme.gradient,
              selectedTheme.shadow
            )}>
              Create Agent
            </button>
          </div>
        </motion.div>

        {/* Right Column: Live Preview */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center bg-slate-100 rounded-[2.5rem] p-4 sm:p-8 overflow-hidden border border-slate-200/50 mt-8 lg:mt-0"
        >
          {/* Background Decorative Blobs */}
          <div className={cn("absolute top-0 right-0 w-64 h-64 bg-gradient-to-br opacity-20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 transition-colors duration-500", selectedTheme.gradient)} />
          <div className={cn("absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr opacity-20 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3 transition-colors duration-500", selectedTheme.gradient)} />

          {/* Chat Interface Preview */}
          <div className="relative w-full max-w-sm bg-white rounded-[2rem] shadow-2xl shadow-slate-200/80 overflow-hidden border border-slate-100 flex flex-col h-[500px]">
            {/* Header */}
            <div className={cn("px-6 py-5 bg-gradient-to-r text-white flex items-center gap-4 transition-colors duration-500", selectedTheme.gradient)}>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg tracking-tight">
                  {agentName || 'Your Agent'}
                </h3>
                <div className="flex items-center gap-1.5 opacity-80">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-medium">Online</span>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-5 bg-slate-50/50 flex flex-col gap-4 overflow-y-auto">
              <AnimatePresence mode="popLayout">
                <motion.div 
                  key="msg-1"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="flex gap-3 max-w-[85%]"
                >
                  <div className={cn("w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white", selectedTheme.color)}>
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className={cn("p-3.5 rounded-2xl rounded-tl-sm text-sm shadow-sm", "bg-white border border-slate-100 text-slate-700")}>
                    Hi there! 👋 I'm <strong className={selectedTheme.text}>{agentName || 'your AI assistant'}</strong>. How can I help you today?
                  </div>
                </motion.div>

                <motion.div 
                  key="msg-2"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-3 max-w-[85%] self-end flex-row-reverse mt-2"
                >
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-slate-200 text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <div className={cn("p-3.5 rounded-2xl rounded-tr-sm text-sm text-white shadow-sm transition-colors duration-500", selectedTheme.color)}>
                    That looks amazing!
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2.5">
                <input type="text" placeholder="Type a message..." className="bg-transparent border-none outline-none text-sm w-full text-slate-700" disabled />
                <button disabled className={cn("w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors duration-500", selectedTheme.color)}>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
