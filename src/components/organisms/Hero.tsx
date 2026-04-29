import React from "react";
import { Button } from "../atoms/Button";
import { Badge, Heading } from "../atoms/Typography";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[65vh] flex flex-col items-center justify-center pt-35 pb-8 px-6 text-center">
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <Badge>Powered by AI Intelligence</Badge>

        <h1 className="text-white font-[700] mt-5 mb-5 text-[48px] leading-[56px]">
          Empowering Growth Through <br />
          Personalised <span className="text-brand-green"> AI Intelligence</span>
        </h1>

        <p className="text-white text-[15px] max-w-2xl mb-8 leading-relaxed">
          What if every member had a dedicated business advisor working 24/7 to grow their network and business? At Saadan, this is now a reality.
        </p>

        <div className="flex flex-col align-center sm:flex-row gap-4">
          <Button variant="primary" size="lg" className="group">
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
