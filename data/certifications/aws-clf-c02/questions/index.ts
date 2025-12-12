// Barrel file para todas las preguntas del AWS CLF-C02
import { Question } from "@/types";
import { domain1Questions } from "./domain1";
import { domain2Questions } from "./domain2";
import { domain3Questions } from "./domain3";
import { domain4Questions } from "./domain4";

export const allQuestions: Question[] = [
  ...domain1Questions,
  ...domain2Questions,
  ...domain3Questions,
  ...domain4Questions,
];

export const getQuestionsByDomain = (domainId: string): Question[] => {
  return allQuestions.filter((q) => q.domainId === domainId);
};

export const getQuestionById = (id: string): Question | undefined => {
  return allQuestions.find((q) => q.id === id);
};

export const getQuestionsByDifficulty = (
  difficulty: "easy" | "medium" | "hard"
): Question[] => {
  return allQuestions.filter((q) => q.difficulty === difficulty);
};

// AWS CLF-C02 exam domain weights
const DOMAIN_WEIGHTS = {
  "domain-1": 0.24, // Cloud Concepts - 24%
  "domain-2": 0.30, // Security and Compliance - 30%
  "domain-3": 0.34, // Cloud Technology and Services - 34%
  "domain-4": 0.12, // Billing, Pricing and Support - 12%
};

export const getRandomQuestions = (count: number, weighted: boolean = true): Question[] => {
  if (!weighted) {
    // Unweighted mode: simple random selection
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  // Weighted mode: respect exam percentages
  const result: Question[] = [];
  const questionsByDomain: Record<string, Question[]> = {
    "domain-1": [...domain1Questions].sort(() => Math.random() - 0.5),
    "domain-2": [...domain2Questions].sort(() => Math.random() - 0.5),
    "domain-3": [...domain3Questions].sort(() => Math.random() - 0.5),
    "domain-4": [...domain4Questions].sort(() => Math.random() - 0.5),
  };

  // Calculate how many questions from each domain
  const domainCounts = {
    "domain-1": Math.round(count * DOMAIN_WEIGHTS["domain-1"]),
    "domain-2": Math.round(count * DOMAIN_WEIGHTS["domain-2"]),
    "domain-3": Math.round(count * DOMAIN_WEIGHTS["domain-3"]),
    "domain-4": Math.round(count * DOMAIN_WEIGHTS["domain-4"]),
  };

  // Adjust if rounding doesn't sum exactly to count
  let total = Object.values(domainCounts).reduce((a, b) => a + b, 0);
  while (total !== count) {
    if (total < count) {
      // Add to the domain with highest weight
      domainCounts["domain-3"]++;
      total++;
    } else {
      // Remove from the domain with lowest weight
      if (domainCounts["domain-4"] > 0) {
        domainCounts["domain-4"]--;
        total--;
      } else if (domainCounts["domain-1"] > 0) {
        domainCounts["domain-1"]--;
        total--;
      }
    }
  }

  // Select questions from each domain
  for (const [domain, targetCount] of Object.entries(domainCounts)) {
    const available = questionsByDomain[domain];
    const toTake = Math.min(targetCount, available.length);
    result.push(...available.slice(0, toTake));
  }

  // Shuffle the final result
  return result.sort(() => Math.random() - 0.5);
};

export const getDomainWeights = () => DOMAIN_WEIGHTS;

export const getQuestionStats = () => {
  return {
    total: allQuestions.length,
    byDomain: {
      "domain-1": domain1Questions.length,
      "domain-2": domain2Questions.length,
      "domain-3": domain3Questions.length,
      "domain-4": domain4Questions.length,
    },
    byDifficulty: {
      easy: allQuestions.filter((q) => q.difficulty === "easy").length,
      medium: allQuestions.filter((q) => q.difficulty === "medium").length,
      hard: allQuestions.filter((q) => q.difficulty === "hard").length,
    },
    byType: {
      single: allQuestions.filter((q) => q.type === "single").length,
      multiple: allQuestions.filter((q) => q.type === "multiple").length,
    },
  };
};

export {
  domain1Questions,
  domain2Questions,
  domain3Questions,
  domain4Questions,
};

export default allQuestions;
