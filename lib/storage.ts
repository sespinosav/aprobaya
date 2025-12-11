import { UserProgress, ExamResult, CertificationProgress } from "@/types";

const STORAGE_KEY = "aprobaya_progress";
const VERSION = "1.0";

// ============================================
// DEFAULT DATA
// ============================================

const defaultProgress: UserProgress = {
  version: VERSION,
  lastUpdated: new Date().toISOString(),
  certifications: {},
  settings: {
    theme: "system",
    language: "es",
    soundEnabled: true,
  },
  achievements: [],
  streak: {
    current: 0,
    lastStudyDate: "",
    longest: 0,
  },
};

const defaultCertificationProgress: CertificationProgress = {
  theoryProgress: {},
  examHistory: [],
  questionStats: {},
};

// ============================================
// STORAGE FUNCTIONS
// ============================================

export function getProgress(): UserProgress {
  if (typeof window === "undefined") return defaultProgress;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultProgress;
    
    const parsed = JSON.parse(stored) as UserProgress;
    return { ...defaultProgress, ...parsed };
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  
  try {
    progress.lastUpdated = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Error saving progress:", error);
  }
}

export function getCertificationProgress(certId: string): CertificationProgress {
  const progress = getProgress();
  return progress.certifications[certId] || { ...defaultCertificationProgress };
}

export function saveCertificationProgress(
  certId: string,
  certProgress: CertificationProgress
): void {
  const progress = getProgress();
  progress.certifications[certId] = certProgress;
  saveProgress(progress);
}

// ============================================
// EXAM HISTORY
// ============================================

export function saveExamResult(certId: string, result: ExamResult): void {
  const certProgress = getCertificationProgress(certId);
  certProgress.examHistory.push(result);
  
  // Update question stats
  result.questionResults.forEach((qr) => {
    if (!certProgress.questionStats[qr.questionId]) {
      certProgress.questionStats[qr.questionId] = {
        attempts: 0,
        correct: 0,
        lastAttempt: "",
      };
    }
    certProgress.questionStats[qr.questionId].attempts++;
    if (qr.isCorrect) {
      certProgress.questionStats[qr.questionId].correct++;
    }
    certProgress.questionStats[qr.questionId].lastAttempt = result.date;
  });
  
  saveCertificationProgress(certId, certProgress);
  updateStreak();
}

export function getExamHistory(certId: string): ExamResult[] {
  return getCertificationProgress(certId).examHistory;
}

// ============================================
// THEORY PROGRESS
// ============================================

export function markTopicCompleted(certId: string, topicId: string): void {
  const certProgress = getCertificationProgress(certId);
  certProgress.theoryProgress[topicId] = {
    completed: true,
    lastVisited: new Date().toISOString(),
  };
  saveCertificationProgress(certId, certProgress);
  updateStreak();
}

export function isTopicCompleted(certId: string, topicId: string): boolean {
  const certProgress = getCertificationProgress(certId);
  return certProgress.theoryProgress[topicId]?.completed || false;
}

// ============================================
// STREAK
// ============================================

export function updateStreak(): void {
  const progress = getProgress();
  const today = new Date().toISOString().split("T")[0];
  const lastStudy = progress.streak.lastStudyDate;
  
  if (lastStudy === today) {
    // Already studied today
    return;
  }
  
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];
  
  if (lastStudy === yesterdayStr) {
    // Consecutive day
    progress.streak.current++;
  } else {
    // Streak broken
    progress.streak.current = 1;
  }
  
  progress.streak.lastStudyDate = today;
  
  if (progress.streak.current > progress.streak.longest) {
    progress.streak.longest = progress.streak.current;
  }
  
  saveProgress(progress);
}

export function getStreak(): { current: number; longest: number } {
  const progress = getProgress();
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];
  
  // Check if streak is still valid
  if (
    progress.streak.lastStudyDate !== today &&
    progress.streak.lastStudyDate !== yesterdayStr
  ) {
    return { current: 0, longest: progress.streak.longest };
  }
  
  return {
    current: progress.streak.current,
    longest: progress.streak.longest,
  };
}

// ============================================
// ACHIEVEMENTS
// ============================================

export function unlockAchievement(achievementId: string): void {
  const progress = getProgress();
  if (!progress.achievements.includes(achievementId)) {
    progress.achievements.push(achievementId);
    saveProgress(progress);
  }
}

export function getUnlockedAchievements(): string[] {
  return getProgress().achievements;
}

// ============================================
// SETTINGS
// ============================================

export function getSettings() {
  return getProgress().settings;
}

export function updateSettings(settings: Partial<UserProgress["settings"]>): void {
  const progress = getProgress();
  progress.settings = { ...progress.settings, ...settings };
  saveProgress(progress);
}

// ============================================
// EXPORT / IMPORT
// ============================================

export function exportProgress(): string {
  return JSON.stringify(getProgress(), null, 2);
}

export function importProgress(jsonStr: string): boolean {
  try {
    const parsed = JSON.parse(jsonStr) as UserProgress;
    if (parsed.version) {
      saveProgress(parsed);
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

export function resetProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
