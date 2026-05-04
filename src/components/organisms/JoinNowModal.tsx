"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, UploadCloud } from "lucide-react";
import { Button } from "../atoms/Button";

interface JoinNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinNowModal = ({ isOpen, onClose }: JoinNowModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[999] backdrop-blur-[2px]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-[20px] w-full max-w-[520px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] pointer-events-auto"
            >
              {/* Header with Gradient */}
              <div className="bg-gradient-to-r from-[#5CAE3A] to-[#2E5B9A] px-5 py-3 text-white relative">
                <h2 className="text-[22px] font-bold leading-tight">Join Saadan</h2>
                <p className="text-white/90 text-[15px] mt-1">
                  Fill in your details to get started
                </p>
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all active:scale-90"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>

              {/* Form Body */}
              <div className="px-5 py-4 space-y-2">
                {/* Full Name */}
                <div className="flex flex-col gap-1 mb-4">
                  <label className="text-[14px] text-[#000000]">
                    Full Name<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 rounded-lg border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#5CAE3A]/10 focus:border-[#5CAE3A] transition-all text-[15px]"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1 mb-4">
                  <label className="text-[14px] text-[#000000]">
                    Email Address<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 rounded-lg border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#5CAE3A]/10 focus:border-[#5CAE3A] transition-all text-[15px]"
                  />
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap-1 mb-4">
                  <label className="text-[14px] text-[#000000]">
                    Company Name<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full px-4 py-2 rounded-lg border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#5CAE3A]/10 focus:border-[#5CAE3A] transition-all text-[15px]"
                  />
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col gap-1 mb-4">
                  <label className="text-[14px] text-[#000000]">
                    Mobile Number<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <div className="flex gap-3">
                    <div className="flex items-center justify-center px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-500 font-medium min-w-[75px] text-[15px]">
                      +91
                    </div>
                    <input
                      type="tel"
                      placeholder="98765 43210"
                      className="flex-1 px-4 py-2 rounded-lg border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#5CAE3A]/10 focus:border-[#5CAE3A] transition-all text-[15px]"
                    />
                  </div>
                </div>

                {/* GST Certificate */}
                <div className="flex flex-col gap-1 mb-4">
                  <label className="text-[14px] text-[#000000]">
                    GST Certificate
                  </label>
                  <label className="flex flex-col items-center justify-center w-full px-4 py-3 border border-[#00000026] rounded-lg cursor-pointer hover:bg-zinc-50 transition-colors group">
                    <div className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-600 transition-colors">
                      <UploadCloud size={22} strokeWidth={1.5} />
                      <span className="text-[14px]">Upload GST Certificate (PDF, PNG - Max 5MB)</span>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button className="w-full bg-[#5CAE3A] hover:bg-[#4d9330] text-white py-2 rounded-full transition-all active:scale-[0.98] text-[18px] shadow-lg shadow-[#5CAE3A]/20">
                    Submit
                  </button>
                </div>

                {/* Terms */}
                <p className="text-center text-[13px] text-[#00000080] mt-4 font-medium">
                  By registering, you agree to our{" "}
                  <a href="#" className="hover:underline text-[#00000080]">Terms of Service</a> and{" "}
                  <a href="#" className="hover:underline text-[#00000080]">Privacy Policy</a>
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
