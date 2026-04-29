import React from "react";

export interface FeatureCardProps {
  iconSrc: string;
  title: string;
  highlight?: string;
  description: string;
}

export const FeatureCard = ({ iconSrc, title, highlight, description }: FeatureCardProps) => {
  return (
    <div className="bg-[#006F7633]/80 p-6 rounded-[10px] border border-[#E2FFD74D] hover:border-brand-green/20 transition-all duration-500 group">
      <div className="w-14 h-14 mb-3 group-hover:scale-110 transition-transform duration-500">
        <img src={iconSrc} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-[20px] font-[600] mb-1 text-white">
        {title} <span className="text-brand-green">{highlight}</span>
      </h3>
      <p className="text-white leading-relaxed text-[15px] mb-0 pe-4">
        {description}
      </p>
    </div>
  );
};