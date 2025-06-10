import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Class와 Name을 줄인 말 = cn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
