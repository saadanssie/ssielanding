import React from "react";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Typography";
import { Rocket } from "lucide-react";

export const FooterCTA = ({ onJoinClick }: { onJoinClick: () => void }) => {
  return (
    <section
      className="relative py-8 px-8 overflow-hidden bg-brand-navy bg-cover bg-center"
      style={{ backgroundImage: 'url("/cta-bg.png")' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-[40px] font-[600] mb-2 tracking-tight text-white leading-tight">
          <span className="text-brand-green">Become</span> Member Today
        </h2>

        <p className="text-white text-[16px] mb-4 max-w-2xl font-normal leading-relaxed">
          Step into the future of networking with your Personal AI Growth Partner.<br /> Experience business growth like never before.
        </p>

        <Button
          size="lg"
          className="bg-brand-green hover:bg-brand-dark-green px-8 py-2 text-[14px] rounded-2xl shadow-[0_20px_50px_rgba(137,211,17,0.3)]"
          onClick={onJoinClick}
        >
          Join Saadan Business Networking
        </Button>

        <p className="mt-4 text-[14px] text-[#ffffff]/80 font-medium ">Limited spots available for early members</p>
      </div>
    </section>
  );
};
