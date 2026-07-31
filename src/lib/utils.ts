import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getFileNameFromUrl = (url: string): string => {
  try {
    return decodeURIComponent(
      new URL(url).pathname.split("/").pop() || ""
    );
  } catch {
    return "";
  }
};
