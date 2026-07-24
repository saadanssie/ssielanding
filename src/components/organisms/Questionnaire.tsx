"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const INTERESTS = [
  "Finding New Clients",
  "Strategic Partnerships",
  "Supplier Relationships",
  "Investment Opportunities",
  "Industry Insights",
  "Talent Acquisition",
];

const BUSINESS_CATEGORIES = [
  { value: "tech", label: "Technology" },
  { value: "finance", label: "Finance" },
  { value: "retail", label: "Retail" },
  { value: "health", label: "Healthcare" },
  { value: "other", label: "Other" },
];

const ANNUAL_TURNOVERS = [
  { value: "under-100k", label: "Under ₹100K" },
  { value: "100k-500k", label: "₹100K - ₹500K" },
  { value: "500k-1m", label: "₹500K - ₹1M" },
  { value: "1m-5m", label: "₹1M - ₹5M" },
  { value: "5m-10m", label: "₹5M - ₹10M" },
  { value: "over-10m", label: "Over ₹10M" },
];

const TARGET_GEOGRAPHIES = [
  { value: "north-america", label: "North America" },
  { value: "europe", label: "Europe" },
  { value: "asia-pacific", label: "Asia Pacific" },
  { value: "latin-america", label: "Latin America" },
  { value: "middle-east-africa", label: "Middle East & Africa" },
  { value: "global", label: "Global" },
];

const CustomSelect = ({
  options,
  placeholder,
  value,
  onChange
}: {
  options: { value: string, label: string }[],
  placeholder: string,
  value: string,
  onChange: (val: string) => void
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find(o => o.value === value)?.label || placeholder;

  return (
    <div className="relative" ref={selectRef}>
      <div
        className={`w-full bg-white border rounded-[6px] px-4 py-2 outline-none flex items-center justify-between cursor-pointer transition-all ${isOpen ? 'border-[#5CAE3A] ring-1 ring-[#5CAE3A]' : 'border-gray-200 hover:border-gray-300'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-[14px] ${!value ? 'text-gray-500' : 'text-[#2B2B2B]'}`}>
          {selectedLabel}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden">
          <ul className="max-h-60 overflow-y-scroll py-1">
            {options.map((option) => (
              <li
                key={option.value}
                className={`px-4 py-2 text-[14px] cursor-pointer transition-colors ${value === option.value ? 'bg-[linear-gradient(90deg, #7FC34D 0%, #7FC34D 100%)] text-[#2B2B2B]' : 'text-[#2B2B2B] hover:bg-[#e6f4ea]'}`}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const Questionnaire = () => {
  const [businessCategory, setBusinessCategory] = useState("");
  const [annualTurnover, setAnnualTurnover] = useState("");
  const [targetGeography, setTargetGeography] = useState("");

  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Finding New Clients",
  ]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/questionnaire_bg.jpg")' }}
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d1efdf] rounded-full mix-blend-multiply filter blur-[80px] opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#dbeafc] rounded-full mix-blend-multiply filter blur-[100px] opacity-60 translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#e6f4ea] rounded-full mix-blend-multiply filter blur-[60px] opacity-60 -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      {/* Logo above the card */}
      <div className="mb-8 relative z-10 flex justify-center">
        <Image
          src="/logo.png"
          alt="SSIE Logo"
          width={160}
          height={72}
          className="object-contain"
        />
      </div>

      {/* Main Card */}
      <div className="bg-[#FFFFFF66] backdrop-blur-sm rounded-[24px] shadow-[inset_0px_0px_8px_1px_#84848440] w-full lg:max-w-5xl p-6 md:p-8 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-[700] text-[#2B2B2B] mb-2 tracking-tight">
            Welcome to <span className="text-[#223182]">SSIE</span>
          </h1>
          <p className="text-[#555] text-sm md:text-base">
            Let&apos;s build your personalized AI business advisor
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Business Name */}
            <div className="flex flex-col">
              <label className="text-[13px] font-[500] text-[#1E1E1EB2] mb-1.5 ml-1">
                Business Name
              </label>
              <input
                type="text"
                placeholder="Enter your business name"
                className="w-full bg-white border border-gray-200 rounded-[6px] px-4 py-2 outline-none focus:border-[#5CAE3A] focus:ring-1 focus:ring-[#5CAE3A] text-[14px] transition-all placeholder:text-gray-300 text-black"
              />
            </div>

            {/* Business Category */}
            <div className="flex flex-col">
              <label className="text-[13px] font-[500] text-[#1E1E1EB2] mb-1.5 ml-1">
                Business Category
              </label>
              <CustomSelect
                options={BUSINESS_CATEGORIES}
                placeholder="Select a Category"
                value={businessCategory}
                onChange={setBusinessCategory}
              />
            </div>

            {/* Annual Turnover */}
            <div className="flex flex-col">
              <label className="text-[13px] font-[500] text-[#1E1E1EB2] mb-1.5 ml-1">
                Annual Turnover
              </label>
              <CustomSelect
                options={ANNUAL_TURNOVERS}
                placeholder="Select Turnover Range"
                value={annualTurnover}
                onChange={setAnnualTurnover}
              />
            </div>

            {/* Target Geography */}
            <div className="flex flex-col">
              <label className="text-[13px] font-[500] text-[#1E1E1EB2] mb-1.5 ml-1">
                Target Geography
              </label>
              <CustomSelect
                options={TARGET_GEOGRAPHIES}
                placeholder="Select Target Market"
                value={targetGeography}
                onChange={setTargetGeography}
              />
            </div>
          </div>

          <div className="pt-2">
            <label className="text-[13px] font-[500] text-[#1E1E1EB2] mb-3 block ml-1">
              Primary Business Interests
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {INTERESTS.map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-4 rounded-[6px] border text-[14px] transition-all duration-200 cursor-pointer ${isSelected
                      ? "border-[#7FC34D] text-black font-[600] bg-white shadow-[0_2px_10px_rgba(92,174,58,0.1)]"
                      : "border-[#C8D3FF] text-gray-500 bg-white hover:border-[#7FC34D] hover:bg-gray-5"
                      }`}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-[6px] py-2 text-white font-[500] text-sm md:text-base bg-gradient-to-r from-[#0A1757] to-[#7FC34D] hover:opacity-95 transition-opacity shadow-md cursor-pointer"
            >
              Complete Profile & Continue
            </button>
            <p className="text-center text-sm md:text-base text-[#1E1E1E99] mt-5">
              You can update these details anytime from your profile settings
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
