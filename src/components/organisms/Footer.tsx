import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-1.5 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
        <div className="flex items-center gap-3">
          <div className="w-70">
            <img src="./logo.png" alt="Logo" />
          </div>
        </div>
        <div>
          <p className="text-[18px] font-[500] text-[#1E1E1E] text-center">
            Where Connections Turn Into Opportunities — Powered by AI
          </p>
        </div>

        <div className="flex gap-6">
          <Link href="#" className="text-[16px] text-[#1E1E1E] hover:text-[#5CAE3A] font-medium transition-colors">Privacy</Link>
          <Link href="#" className="text-[16px] text-[#1E1E1E] hover:text-[#5CAE3A] font-medium transition-colors">Terms</Link>
          <Link href="#" className="text-[16px] text-[#1E1E1E] hover:text-[#5CAE3A] font-medium transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
};
