import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export function calculateScore(correct: number, total: number): number {
  if (total === 0) return 0;
  // AWS scoring: 100-1000 scale, passing is 700
  const percentage = correct / total;
  return Math.round(100 + percentage * 900);
}

export function getScoreColor(score: number): string {
  if (score >= 700) return "text-green-500";
  if (score >= 500) return "text-yellow-500";
  return "text-red-500";
}

export function getPercentageColor(percentage: number): string {
  if (percentage >= 70) return "text-green-500";
  if (percentage >= 50) return "text-yellow-500";
  return "text-red-500";
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
