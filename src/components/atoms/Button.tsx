import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-[#5CAE3A] text-white font-[400] text-[16px] px-12 py-2 hover:bg-[#3b7f27] cursor-pointer",
    secondary: "bg-white text-black hover:bg-gray-100 font-bold cursor-pointer",
    outline: "border border-white/20 text-[#5CAE3A] bg-[white] hover:bg-white/10 cursor-pointer",
    ghost: "text-white hover:text-brand-green transition-colors cursor-pointer",
  };

  const sizes = {
    sm: "px-4 py-2 text-[16px]",
    md: "px-4 py-2 text-[16px]",
    lg: "px-5 py-2 text-[16px]",
  };

  return (
    <button
      className={cn(
        "rounded-full transition-all duration-300 flex items-center justify-center gap-2 active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
