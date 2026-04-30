"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "../atoms/Button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Features", href: "features" },
  { label: "Benefits", href: "benefits" },
  { label: "Who Should Join", href: "join" },
  { label: "Testimonials", href: "testimonials" },
];

const NAVBAR_HEIGHT = 72; // px — adjust if your nav height changes

export const Navbar = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update navbar shadow/bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active section while scrolling
  const updateActive = useCallback(() => {
    const scrollY = window.scrollY + NAVBAR_HEIGHT + 32; // 32px look-ahead
    let current = "";
    for (const link of NAV_LINKS) {
      const el = document.getElementById(link.href);
      if (el && el.offsetTop <= scrollY) {
        current = link.href;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive(); // run once on mount
    return () => window.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  // Smooth-scroll with fixed-navbar offset
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Small delay to ensure state change doesn't interrupt the scroll
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const offset = window.innerWidth < 768 ? 80 : 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 max-[768px]:px-3 py-2 bg-white border-b border-black/5 transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative overflow-hidden flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="SSIE Logo"
              width={150}
              height={68}
              className="object-contain"
            />
          </div>
        </div>

        {/* Nav links + CTA */}
        <div className="flex items-center gap-2 md:gap-10">
          <div className="hidden md:flex items-center gap-8 text-zinc-600">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={`#${href}`}
                onClick={(e) => handleNavClick(e, href)}
                className={`relative text-[16px] font-[400] transition-colors duration-200 group ${activeSection === href
                  ? "text-[#5CAE3A]"
                  : "text-[#434343] hover:text-[#5CAE3A]"
                  }`}
              >
                {label}
                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#5CAE3A] rounded-full transition-all duration-300 ${activeSection === href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                    }`}
                />
              </a>
            ))}
          </div>

          <Button
            size="sm"
            variant="primary"
            className="rounded-full px-6 py-2 whitespace-nowrap"
            onClick={onJoinClick}
          >
            Join Now
          </Button>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden p-2 text-[#434343] hover:text-[#5CAE3A] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-black/5 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={`#${href}`}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`text-[18px] font-medium py-2 transition-colors ${activeSection === href ? "text-[#5CAE3A]" : "text-[#434343]"
                    }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
