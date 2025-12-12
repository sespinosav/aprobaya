// ============================================
// CERTIFICATION TYPES
// ============================================

export interface ExamDetails {
  duration: number; // in minutes
  questionCount: number;
  passingScore: number;
  maxScore: number;
  questionTypes: string[];
  languages: string[];
  examFee: number;
  retakePolicy: string;
  validityPeriod: string;
}

export interface Certification {
  id: string;
  name: string;
  shortName: string;
  code: string;
  provider: "aws" | "azure" | "gcp" | "docker" | "kubernetes" | "other";
  providerName: string;
  level: "foundational" | "associate" | "professional" | "specialty";
  color: string;
  gradient: string;
  icon: string;
  description: string;
  examDetails: ExamDetails;
  domains: Domain[];
  totalQuestions: number;
  officialLink: string;
  examGuideLink: string;
  lastUpdated: string;
  version: string;
  contributors: string[];
}

export interface Domain {
  id: string;
  name: string;
  description: string;
  weight: number; // percentage
  topics: Topic[];
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  keyPoints: string[];
  services?: string[];
  estimatedTime?: number; // minutes
}

export interface Concept {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  services?: ServiceReference[];
}

export interface ServiceReference {
  id: string;
  name: string;
}

// ============================================
// SERVICE TYPES (for AWS, Azure, etc.)
// ============================================

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  icon?: string;
  useCases: string[];
  keyFeatures: string[];
  pricing?: string;
  officialDoc: string;
  relatedServices?: string[];
}

// ============================================
// QUESTION TYPES
// ============================================

export type QuestionType = "single" | "multiple";

export interface QuestionOption {
  id: string;
  text: string;
}

export interface QuestionExplanation {
  correct: string;
  whyOthersWrong: Record<string, string>;
}

export interface Question {
  id: string;
  certificationId: string;
  domainId: string;
  type: QuestionType;
  difficulty: "easy" | "medium" | "hard";
  question: string;
  options: QuestionOption[];
  correctAnswers: string[];
  explanation: QuestionExplanation;
  tags: string[];
  officialDoc?: string;
}

// ============================================
// EXAM TYPES
// ============================================

export type ExamMode = "study" | "exam" | "domain";

export interface ExamConfig {
  certificationId: string;
  mode: ExamMode;
  domainId?: string;
  questionCount: number;
  timeLimit: number; // in seconds, 0 for no limit
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
}

export interface ExamState {
  config: ExamConfig;
  questions: Question[];
  currentIndex: number;
  answers: Record<string, string[]>;
  startTime: number;
  endTime?: number;
  isFinished: boolean;
}

export interface ExamResult {
  id: string;
  certificationId: string;
  date: string;
  mode: ExamMode;
  domainId?: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  domainScores: Record<string, { correct: number; total: number }>;
  questionResults: QuestionResult[];
}

export interface QuestionResult {
  questionId: string;
  userAnswers: string[];
  correctAnswers: string[];
  isCorrect: boolean;
  timeSpent?: number;
}

// ============================================
// USER PROGRESS TYPES
// ============================================

export interface UserProgress {
  version: string;
  lastUpdated: string;
  certifications: Record<string, CertificationProgress>;
  settings: UserSettings;
  achievements: string[];
  streak: StreakData;
}

export interface CertificationProgress {
  theoryProgress: Record<string, TopicProgress>;
  examHistory: ExamResult[];
  questionStats: Record<string, QuestionStats>;
}

export interface TopicProgress {
  completed: boolean;
  lastVisited: string;
}

export interface QuestionStats {
  attempts: number;
  correct: number;
  lastAttempt: string;
}

export interface UserSettings {
  theme: "light" | "dark" | "system";
  language: "es" | "en";
  soundEnabled: boolean;
}

export interface StreakData {
  current: number;
  lastStudyDate: string;
  longest: number;
}

// ============================================
// ACHIEVEMENT TYPES
// ============================================

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
  unlockedAt?: string;
}

// ============================================
// ARTICLE TYPES
// ============================================

export interface ArticleSection {
  title: string;
  content: string;
  code?: string;
  note?: string;
}

export interface ArticleContentStructured {
  introduction: string;
  sections: ArticleSection[];
}

export type ArticleContentType = ArticleSection[] | ArticleContentStructured;

export interface Article {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  domainId: string;
  certificationId?: string;
  content: ArticleContentType;
  keyTakeaways?: string[];
  keyPoints?: string[];
  tags: string[];
  relatedQuestions?: string[];
  relatedServices?: string[];
  relatedArticles?: string[];
  readingTime: number; // in minutes
  lastUpdated: string;
}

export function getArticleSections(article: Article): ArticleSection[] {
  if (Array.isArray(article.content)) {
    return article.content;
  }
  return article.content.sections;
}

export function getArticleIntroduction(article: Article): string {
  if (Array.isArray(article.content)) {
    return "";
  }
  return article.content.introduction;
}

export function getArticleKeyPoints(article: Article): string[] {
  return article.keyTakeaways || article.keyPoints || [];
}

// ============================================
// UI TYPES
// ============================================

export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  badge?: string;
  children?: NavItem[];
}
