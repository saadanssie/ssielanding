import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-4 px-6 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">

        <div className="flex flex-row items-center justify-between w-full md:w-auto gap-4">
          <div className="w-32 md:w-40 shrink-0">
            <img src="./logo.png" alt="Logo" className="w-full h-auto object-contain" />
          </div>
          <p className="md:hidden text-[12px] font-[500] text-[#1E1E1E] text-right leading-tight">
            Where Connections Turn Into <br /> Opportunities — Powered by AI
          </p>
        </div>

        <p className="hidden md:block text-[18px] font-[500] text-[#1E1E1E] text-center flex-1 px-4">
          Where Connections Turn Into Opportunities — Powered by AI
        </p>
        <div className="flex gap-8 justify-center w-full md:w-auto">
          <Link href="#" className="text-[14px] md:text-[16px] text-[#1E1E1E] hover:text-[#5CAE3A] font-medium transition-colors">Privacy</Link>
          <Link href="#" className="text-[14px] md:text-[16px] text-[#1E1E1E] hover:text-[#5CAE3A] font-medium transition-colors">Terms</Link>
          <Link href="#" className="text-[14px] md:text-[16px] text-[#1E1E1E] hover:text-[#5CAE3A] font-medium transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
};
