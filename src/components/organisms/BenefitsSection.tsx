import React from "react";
import { BenefitCard } from "../molecules/BenefitCard";

export const BenefitsSection = () => {
  const benefits = [
    {
      iconSrc: "/Group 99.png",
      title: "Smart Networking",
      description: "No more random connections - meet the right people at the right time."
    },
    {
      iconSrc: "/Group 100.png",
      title: "Business Growth Support",
      description: "Your AI suggests real opportunities based on your profile."
    },
    {
      iconSrc: "/Group 101.png",
      title: "Increased Visibility",
      description: "Stand out in the network with AI-driven profile and engagement guidance."
    },
    {
      iconSrc: "/Group 102.png",
      title: "Time Saving",
      description: "Let your AI do the research, matching, and suggestions."
    },
    {
      iconSrc: "/Group 103.png",
      title: "Continuous Guidance",
      description: "A dedicated advisor that never stops working for you."
    }
  ];

  return (
    <section id="benefits" className="pt-6 pb-20 px-6 bg-transparent relative overflow-hidden">
      {/* Abstract light effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[40px] font-[700] mb-2 text-white">
            How It <span className="text-brand-green">Benefits</span> You
          </h2>
          <p className="text-white text-[15px] max-w-3xl mx-auto leading-relaxed">Real results that transform your business networking experience</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
          {benefits.map((benefit, i) => (
            <BenefitCard key={i} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};
