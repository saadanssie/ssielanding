import React from "react";

export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#063E4780]/70 border border-[#E2FFD74D] text-[15px] tracking-wider text-white">
      <img src="/badge.png" alt="Badge" />
      {children}
    </div>
  );
};

export const Heading = ({
  level = 1,
  children,
  className = "",
}: {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}) => {
  const Tag = `h${level}` as any;
  const styles = {
    1: "text-4xl md:text-6xl font-black leading-tight",
    2: "text-3xl md:text-5xl font-bold leading-tight",
    3: "text-2xl md:text-4xl font-bold",
    4: "text-xl md:text-2xl font-bold",
  };

  return (
    <Tag className={`${styles[level as keyof typeof styles]} ${className}`}>
      {children}
    </Tag>
  );
};
