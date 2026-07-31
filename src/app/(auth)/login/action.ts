"use server";

import { authService } from "@/app/services/auth.service";
import { cookies } from "next/headers";

export async function loginAction(): Promise<{ success: boolean }> {
  const res = await authService.login();

  if (!res?.data?.access_token) {
    throw new Error("Invalid credentials");
  }
  (await cookies()).set("auth_token", res?.data?.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return { success: true };
}