"use client";

import { Button } from "@/components/ui/button";
import { Eye, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Footer from "@/components/ui/footer";

export default function LoginPage() {
  const handleLogin = () => {
    signIn("azure-ad", { callbackUrl: "/dashboard" });
  };
  return (
    <div
      className="
      min-h-screen w-full
      bg-[url('/images/login-background.png')]
      bg-cover bg-center bg-no-repeat
      flex flex-col items-center justify-between
      px-4 sm:px-6 py-6
    "
    >
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <Image
          src="/logo.png"
          width={233}
          height={79}
          alt="sbn-logo"
          className="mb-4"
        />

        <h1 className="text-center text-lg sm:text-xl md:text-2xl font-medium text-[#111827] mb-6">
          Connecting Businesses. Enabling Trade.
        </h1>

        <div
          className="
            w-full max-w-lg
            rounded-2xl
            border border-[#E8DBBE]
            bg-[#FFFBF2]/90
            opacity-90
            flex items-center justify-center flex-col
          "
        >
          <div className=" flex flex-col items-center justify-center gap-6 w-[80%] my-10">
            <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-black">
              <span className="text-[#C9A44E]">SSIE Agent</span> Login
            </h3>
            <Image
              alt="merchant-icon"
              src={"/icons/merchantLogin.png"}
              width={100}
              height={100}
            />
            <Button
              variant={"primary"}
              className="bg-[#C9A44E] w-full text-base cursor-pointer font-bold text-[#FFFFFF] hover:bg-[#af8b35]"
              onClick={handleLogin}
            >
              Login
            </Button>
            {/* <div className="flex items-center gap-2 w-full justify-center">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="text-sm  whitespace-nowrap font-semibold">Or</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div> */}
          </div>

          {/* <div className="text-center text-sm w-full bg-[#1E3A8A] rounded-b-2xl py-2">
            <Link
              href={"/merchant-registration/step-1"}
              className="text-white text-base flex items-center justify-center gap-2"
            >
              Register As Merchant
              <MoveRight />
            </Link>
          </div> */}
        </div>
      </div>
      <Footer className="fixed bottom-0 left-0" />
    </div>
  );
}
