import React from "react";
import { Infinity } from "lucide-react";

export const StatsBanner = () => {
  return (
    <div
      className="py-8 px-6 border-y border-white/5 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("/stats-bg.png")' }}
    >

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4">
        <div className="flex flex-col items-center text-center group">
          <div className="text-[54px] font-[700] mb-1 drop-shadow-[0_0_20px_rgba(137,211,17,0.3)] group-hover:scale-105 transition-transform duration-500 text-white">24/7</div>
          <p className="text-white text-[16px]">AI Working for you</p>
        </div>

        <div className="flex flex-col items-center text-center border-y md:border-y-0 md:border-x border-white/60 py-12 md:py-0 group">
          <div className="text-[54px] font-[700] mb-1 drop-shadow-[0_0_20px_rgba(137,211,17,0.3)] group-hover:scale-105 transition-transform duration-500 text-white">100%</div>
          <p className="text-white text-[16px]">Personalised Matching</p>
        </div>

        <div className="flex flex-col items-center text-center group">
          <div className="mb-0 drop-shadow-[0_0_20px_rgba(137,211,17,0.3)] group-hover:scale-105 transition-transform duration-500">
            <Infinity className="w-10 h-10 md:w-24 md:h-24 text-white" />
          </div>
          <p className="text-white text-[16px]">Growth Opportunities</p>
        </div>
      </div>
    </div>
  );
};
