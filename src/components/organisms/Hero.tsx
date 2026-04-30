"use client";

import React from "react";
import { Button } from "../atoms/Button";
import { Badge, Heading } from "../atoms/Typography";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export const Hero = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[65vh] flex flex-col items-center justify-center pt-35 pb-8 px-6 text-center">
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <div className="animate-item">
          <Badge>Powered by AI Intelligence</Badge>
        </div>

        <h1 className="animate-item text-white font-[700] mt-5 mb-5 text-[48px] max-[768px]:text-[32px] max-[768px]:leading-[42px] leading-[56px]">
          Empowering Growth Through <br className="md:block hidden" />
          Personalised <span className="text-brand-green"> AI Intelligence</span>
        </h1>

        <p className="animate-item text-white text-[15px] max-w-2xl mb-8 leading-relaxed">
          What if every member had a dedicated business advisor working 24/7 to grow their network and business? At Saadan, this is now a reality.
        </p>

        <div className="animate-item flex flex-col align-center sm:flex-row gap-4">
          <Button variant="primary" size="lg" className="group" onClick={onJoinClick}>
            Become Member Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};
