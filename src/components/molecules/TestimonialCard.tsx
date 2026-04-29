import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export const TestimonialCard = ({ quote, author, role, rating }: TestimonialCardProps) => {
  return (
    <div
      className="p-6 rounded-[12px] relative overflow-hidden group bg-cover bg-center h-full min-h-[240px] flex flex-col"
      style={{ backgroundImage: 'url("/testimonial.png")' }}
    >
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "fill-[#ffffff] text-[#ffffff]" : "text-white/20"}`}
          />
        ))}
      </div>
      <p className="text-[18px] text-white leading-relaxed flex-grow">
        "{quote}"
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full bg-[#5cae3a] flex items-center justify-center font-medium text-[#ffffff]">
          {author.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <h5 className="font-[600] text-white text-[16px]">{author}</h5>
          <p className="text-[14px] text-white/70">{role}</p>
        </div>
      </div>
    </div>
  );
};
