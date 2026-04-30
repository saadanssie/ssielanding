"use client";

import { TestimonialCard } from "../molecules/TestimonialCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const SuccessStories = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-anim", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      quote: "My AI agent connected me with 3 major clients in just 2 months. The suggestions are incredibly accurate!",
      author: "Rajesh Kumar",
      role: "Manufacturing Business Owner",
      rating: 5
    },
    {
      quote: "The personalized matching is a game changer. I've found partners I would have never met otherwise.",
      author: "Priya Sharma",
      role: "Tech Consultant",
      rating: 4
    },
    {
      quote: "Finally, a platform that understands my business needs. The AI guidance is like having a full-time advisor.",
      author: "Amit Singh",
      role: "E-commerce Founder",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" ref={containerRef} className="pt-12 pb-20 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-[40px] font-[700] mb-2 text-[#2B2B2B]">
            Success <span className="text-brand-green">Stories</span>
          </h2>
          <p className="text-[#434343] text-[16px]">See how Saadan members are growing their businesses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-anim">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
