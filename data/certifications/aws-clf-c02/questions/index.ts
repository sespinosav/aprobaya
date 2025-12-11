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

export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

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
