"use client";

import { FeatureCard } from "../molecules/FeatureCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const FeaturesGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card-anim", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      iconSrc: "/business.png",
      title: "Understand Your",
      highlight: "Business",
      description: "AI learns your goals, strengths, and business needs to provide tailored recommendations."
    },
    {
      iconSrc: "/connection.png",
      title: "Right",
      highlight: "Connections",
      description: "Identify and connect with the most relevant people in your network."
    },
    {
      iconSrc: "/goal.png",
      title: "Business",
      highlight: "Opportunities",
      description: "Discover potential clients and partnerships matched to your profile."
    },
    {
      iconSrc: "/visibility.png",
      title: "Visibility &",
      highlight: "Reputation",
      description: "Get guidance to improve your profile and stand out in the network."
    },
    {
      iconSrc: "/chat.png",
      title: "Professional",
      highlight: "Communication",
      description: "AI-assisted messaging to communicate effectively with prospects."
    },
    {
      iconSrc: "/learn.png",
      title: "Continuous",
      highlight: "Learning",
      description: "Your AI advisor works and evolves as your business grows."
    }
  ];

  return (
    <section id="features" ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-[40px] font-[700] mb-4 text-white leading-12">
          Your Personal <span className="text-brand-green">AI Business Assistant</span>
        </h2>
        <p className="text-white text-[15px] max-w-3xl mx-auto leading-relaxed">
          Your AI-Powered agent works hand-in-hand with you to accelerate business growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div key={i} className="feature-card-anim">
            <FeatureCard
              iconSrc={feature.iconSrc}
              title={feature.title}
              highlight={feature.highlight}
              description={feature.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
