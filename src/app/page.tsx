import { Navbar } from "@/components/organisms/Navbar";
import { Hero } from "@/components/organisms/Hero";
import { PersonalAIAgent } from "@/components/organisms/PersonalAIAgent";
import { FeaturesGrid } from "@/components/organisms/FeaturesGrid";
import { BenefitsSection } from "@/components/organisms/BenefitsSection";
import { StatsBanner } from "@/components/organisms/StatsBanner";
import { WhoShouldJoin } from "@/components/organisms/WhoShouldJoin";
import { SuccessStories } from "@/components/organisms/SuccessStories";
import { FooterCTA } from "@/components/organisms/FooterCTA";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Background container for top sections */}
      <div className="bg-[url('/hero-bg.png')] bg-cover bg-top bg-no-repeat">
        <Hero />
        <PersonalAIAgent />
        <FeaturesGrid />
        <BenefitsSection />
      </div>

      <StatsBanner />

      {/* Background container for join and success stories */}
      <div className="bg-[url('/why-bg.png')] bg-cover bg-center">
        <WhoShouldJoin />
        <SuccessStories />
      </div>

      <FooterCTA />
      <Footer />
    </main>
  );
}
