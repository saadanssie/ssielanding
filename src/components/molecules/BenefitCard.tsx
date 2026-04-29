import React from "react";

interface BenefitCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export const BenefitCard = ({ iconSrc, title, description }: BenefitCardProps) => {
  return (
    <div
      className="p-5 rounded-[12px] flex flex-col items-center text-center transition-all duration-300 bg-cover bg-center h-full min-h-[220px] shadow-sm"
      style={{ backgroundImage: 'url("/benefit-card-bg.png")' }}
    >
      <div className="w-15 h-15 flex items-center justify-center mb-3">
        <img src={iconSrc} alt={title} className="w-full h-full object-contain" />
      </div>
      <h4 className="font-[700] mb-2 text-[#2B2B2B] text-[15px]">{title}</h4>
      <p className="text-[15px] text-[#434343] font-[400] px-2 leading-[22px]">
        {description}
      </p>
    </div>
  );
};
