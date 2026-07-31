import React from "react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`w-full h-fit bg-[#1E3A8A99] py-1 text-center text-xs text-[#FFFFFF] border-t border-border/40 mt-auto ${className}`}>
      Copyright &copy; {new Date().getFullYear()} SAHIL FREIGHT EXPRESS PVT LTD
    </footer>
  );
}
