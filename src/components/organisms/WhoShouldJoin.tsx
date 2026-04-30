"use client";

import { User, Store, Factory, HeartHandshake, GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const WhoShouldJoin = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".join-content", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const roles = [
    { iconSrc: "/Group 104.png", title: "Entrepreneurs" },
    { iconSrc: "/Group 105.png", title: "Traders" },
    { iconSrc: "/Group 106.png", title: "Manufacturers" },
    { iconSrc: "/Group 107.png", title: "Service Providers" },
    { iconSrc: "/Group 108.png", title: "Professionals" }
  ];

  return (
    <section id="join" ref={containerRef} className="pt-16 px-6 relative overflow-hidden bg-transparent">
      <div className="join-content max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-[40px] font-[700] mb-2 text-[#2B2B2B]">
            Who Should <span className="text-brand-green">Join?</span>
          </h2>
          <p className="text-[#434343] text-[16px]">Perfect for professionals seeking meaningful business connections</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
          {roles.map((role, i) => (
            <div key={i} className="role-card bg-[#ffffff]/10 p-4 max-[768px]:p-3 rounded-[12px] border border-[#D1D7FD] flex flex-col items-center gap-4 hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 max-[768px]:w-12 max-[768px]:h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src={role.iconSrc} alt={role.title} className="w-full h-full object-contain" />
              </div>
              <span className="font-[600] text-[18px] max-[768px]:text-[15px] text-[#000000] tracking-tight">{role.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
