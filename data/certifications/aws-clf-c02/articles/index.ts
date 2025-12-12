import { Article } from "@/types";
import { domain1Articles } from "./domain1";
import { domain2Articles } from "./domain2";
import { domain3Articles } from "./domain3";
import { domain4Articles } from "./domain4";

export { domain1Articles } from "./domain1";
export { domain2Articles } from "./domain2";
export { domain3Articles } from "./domain3";
export { domain4Articles } from "./domain4";

export const allArticles: Article[] = [
  ...domain1Articles,
  ...domain2Articles,
  ...domain3Articles,
  ...domain4Articles,
];

const domainIdMap: Record<string, string> = {
  "domain-1": "domain-1",
  "domain-2": "domain-2", 
  "domain-3": "domain-3",
  "domain-4": "domain-4",
  "domain1": "domain-1",
  "domain2": "domain-2", 
  "domain3": "domain-3",
  "domain4": "domain-4",
  "cloud-concepts": "domain-1",
  "security-compliance": "domain-2",
  "technology": "domain-3",
  "billing-pricing": "domain-4",
};

export function normalizeDomainId(domainId: string): string {
  return domainIdMap[domainId] || domainId;
}

export function getArticleNormalizedDomain(article: Article): string {
  return normalizeDomainId(article.domainId);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((article) => article.slug === slug);
}

export function getArticlesByDomain(domainId: string): Article[] {
  const normalizedInput = normalizeDomainId(domainId);
  return allArticles.filter((article) => {
    const articleDomain = normalizeDomainId(article.domainId);
    return articleDomain === normalizedInput;
  });
}

export function getArticlesForQuestion(questionId: string): Article[] {
  return allArticles.filter((article) =>
    article.relatedQuestions?.includes(questionId)
  );
}

export function getArticlesByTag(tag: string): Article[] {
  return allArticles.filter((article) =>
    article.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))
  );
}

export function searchArticles(query: string): Article[] {
  const lowerQuery = query.toLowerCase();
  return allArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.shortDescription.toLowerCase().includes(lowerQuery) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export const articleStats = {
  total: allArticles.length,
  byDomain: {
    domain1: domain1Articles.length,
    domain2: domain2Articles.length,
    domain3: domain3Articles.length,
    domain4: domain4Articles.length,
  },
  totalReadingTime: allArticles.reduce(
    (sum, article) => sum + article.readingTime,
    0
  ),
};
