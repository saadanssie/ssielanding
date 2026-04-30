"use client";

import { Users, Search, TrendingUp, Cpu } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const PersonalAIAgent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".agent-box", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const agents = [
    {
      iconSrc: "/icon-matching.png",
      title: "Smart Matching",
      desc: "Connect with the right people"
    },
    {
      iconSrc: "/icon-opportunity.png",
      title: "Opportunity Finder",
      desc: "Discover Potential Clients"
    },
    {
      iconSrc: "/icon-growth.png",
      title: "Growth Guidance",
      desc: "Continuous Business Advice"
    }
  ];

  return (
    <div ref={containerRef} className="relative z-20 px-4 md:px-6 max-w-5xl mx-auto w-full">
      <div className="agent-box bg-[#ffff]/15 p-7 rounded-3xl border border-white/30 shadow-2xl">
        <div className="flex items-center gap-4 mb-6">
          <img src="/agentic-ai.png" alt="AI Agent" className="w-15" />
          <div>
            <h3 className="text-xl md:text-2xl font-[600]">Your Personal AI Agent</h3>
            <p className="text-white text-[16px]">Working 24/7 for your business growth</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <div key={i} className="agent-item bg-white p-4 rounded-[8px] group hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 flex items-center justify-center shrink-0 mb-2">
                <img src={agent.iconSrc} alt={agent.title} className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="text-[#2B2B2B] font-[600] text-[16px]">{agent.title}</h4>
                <p className="text-[#434343] text-[14px] font-[400]">{agent.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
