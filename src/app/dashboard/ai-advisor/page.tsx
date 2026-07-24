"use client";

import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Lightbulb,
  Search,
  Users,
  BarChart,
  Edit3,
  Send,
  Bot
} from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function AIAdvisorPage() {
  const [agentConfig, setAgentConfig] = useState<any>(null);
  
  const [messages, setMessages] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [hasSentFirstMessage, setHasSentFirstMessage] = useState(false);

  useEffect(() => {
    const savedConfig = localStorage.getItem('agentConfig');
    let config = null;
    if (savedConfig) {
      config = JSON.parse(savedConfig);
      setAgentConfig(config);
    } else {
      // Default config if none saved
      config = {
        name: 'AI Business Advisor',
        theme: { gradient: 'from-[#1b3a57] to-[#458e37]', color: 'bg-[#1b3a57]' }
      };
      setAgentConfig(config);
    }

    setMessages([
      {
        role: 'ai',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        content: `Hello John! I'm ${config.name}, powered by your profile and the Saadan network. I can help you find clients, identify partnerships, improve your visibility, and grow your business. What would you like to explore today?`
      }
    ]);
  }, []);

  const suggestedQuestions = [
    { icon: Search, text: "Find me potential buyers for my services" },
    { icon: Users, text: "Suggest strategic partnerships in my industry" },
    { icon: BarChart, text: "Help me improve my business profile" },
    { icon: Edit3, text: "Draft an introduction message" }
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), content: text }]);
    setInputValue('');
    setHasSentFirstMessage(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'ai',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        content: "Based on your profile (Technology & Software, targeting North America), I've identified 8 high-potential prospects:\n\n**Top 3 Priority Prospects:**\n\n1. **Manufacturing Excellence Inc.** - Actively seeking digital transformation solutions. Your expertise in software integration matches their current RFP for inventory management systems.\n\n2. **Retail Dynamics Corp** - Recently expanded to 50+ locations and needs..."
      }]);
    }, 1000);
  };

  if (!agentConfig) return null; // Wait for client side hydration

  return (
    <div className="flex flex-col h-screen bg-white">

      {/* Header */}
      <header className={cn("h-24 flex items-center px-6 shrink-0 bg-gradient-to-r text-white", agentConfig.theme.gradient)}>
        <Link href="/dashboard" className="p-2 hover:bg-white/20 rounded-full mr-4 text-white transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-inner mr-4 shrink-0 bg-white/20 backdrop-blur-sm border border-white/30 text-white">
          <Bot size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white leading-tight">{agentConfig.name}</h1>
          <p className="text-sm text-white/80">Personalized for your business growth</p>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Messages */}
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>

              {/* AI Avatar */}
              {msg.role === 'ai' && (
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shadow-sm shrink-0 mt-1 bg-gradient-to-br text-white", agentConfig.theme.gradient)}>
                  <Bot size={20} />
                </div>
              )}

              {/* Message Bubble */}
              <div className={`max-w-[80%] ${msg.role === 'user' ? 'order-1' : 'order-2'}`}>
                {msg.role === 'user' ? (
                  <div className={cn("text-white rounded-xl px-5 py-3 shadow-sm text-[15px]", agentConfig.theme.color)}>
                    {msg.content}
                  </div>
                ) : (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 shadow-sm text-gray-700 text-[15px] whitespace-pre-wrap leading-relaxed">
                    {msg.content}
                  </div>
                )}
                {/* Timestamp for AI */}
                {msg.role === 'ai' && (
                  <div className="text-[11px] text-gray-400 mt-2 ml-1">
                    {msg.time}
                  </div>
                )}
              </div>

              {/* User Avatar */}
              {msg.role === 'user' && (
                <div className={cn("w-10 h-10 bg-white border-2 font-bold rounded-full flex items-center justify-center shrink-0 mt-1 order-2", agentConfig.theme.text, agentConfig.theme.border)}>
                  JD
                </div>
              )}
            </div>
          ))}

          {/* Suggested Questions */}
          {!hasSentFirstMessage && (
            <div className="ml-14">
              <div className="flex items-center gap-2 text-gray-400 mb-4 text-xs font-bold tracking-wider">
                <Lightbulb size={14} />
                SUGGESTED QUESTIONS
              </div>
              <div className="flex flex-wrap gap-3">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q.text)}
                    className="flex items-center gap-2 bg-white border border-gray-200 hover:border-slate-300 hover:bg-slate-50 transition-colors rounded-full px-4 py-2 text-sm text-gray-600 font-medium shadow-sm"
                  >
                    <q.icon size={16} className="text-gray-400" />
                    {q.text}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
              placeholder="Ask me anything about growing your business..."
              className="w-full h-12 pl-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-gray-800"
            />
          </div>
          <button
            onClick={() => handleSend(inputValue)}
            disabled={!inputValue.trim()}
            className={cn(
              "h-12 px-6 rounded-lg text-white font-medium flex items-center gap-2 hover:opacity-95 disabled:opacity-50 transition-opacity shrink-0 bg-gradient-to-r",
              agentConfig.theme.gradient
            )}
          >
            <Send size={18} />
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-400 mt-2">
          AI responses are personalized based on your profile and network context
        </p>
      </div>

    </div>
  );
}