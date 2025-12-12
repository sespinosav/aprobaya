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

export interface Achievement {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: "first-exam", name: "Primer Paso", icon: "🎯", description: "Completa tu primer examen" },
  { id: "five-exams", name: "En Camino", icon: "🚀", description: "Completa 5 exámenes" },
  { id: "ten-exams", name: "Dedicado", icon: "💪", description: "Completa 10 exámenes" },
  { id: "first-pass", name: "Victoria", icon: "🏆", description: "Aprueba un examen (700+)" },
  { id: "perfect-score", name: "Perfección", icon: "⭐", description: "Obtén 1000 puntos" },
  { id: "streak-3", name: "Consistente", icon: "🔥", description: "3 días de racha" },
  { id: "streak-7", name: "Imparable", icon: "⚡", description: "7 días de racha" },
  { id: "all-domains", name: "Explorador", icon: "🗺️", description: "Practica todos los dominios" },
];

// Calculate which achievements should be unlocked based on data
export function calculateAchievements(
  certId: string
): { all: string[]; new: Achievement[] } {
  const progress = getProgress();
  const certProgress = getCertificationProgress(certId);
  const examHistory = certProgress.examHistory;
  const streak = getStreak();
  const previouslyUnlocked = progress.achievements || [];
  
  const shouldBeUnlocked: string[] = [];
  
  // Exam count achievements
  if (examHistory.length >= 1) shouldBeUnlocked.push("first-exam");
  if (examHistory.length >= 5) shouldBeUnlocked.push("five-exams");
  if (examHistory.length >= 10) shouldBeUnlocked.push("ten-exams");
  
  // Score achievements
  if (examHistory.some(e => e.score >= 700)) shouldBeUnlocked.push("first-pass");
  if (examHistory.some(e => e.score >= 1000)) shouldBeUnlocked.push("perfect-score");
  
  // Streak achievements (use longest streak)
  if (streak.longest >= 3) shouldBeUnlocked.push("streak-3");
  if (streak.longest >= 7) shouldBeUnlocked.push("streak-7");
  
  // All domains achievement
  const domainsWithQuestions = new Set<string>();
  examHistory.forEach(exam => {
    Object.keys(exam.domainScores || {}).forEach(domainId => {
      if (exam.domainScores[domainId]?.total > 0) {
        domainsWithQuestions.add(domainId);
      }
    });
  });
  if (domainsWithQuestions.size >= 4) shouldBeUnlocked.push("all-domains");
  
  // Find newly unlocked achievements
  const newlyUnlocked = shouldBeUnlocked.filter(id => !previouslyUnlocked.includes(id));
  const newAchievements = ACHIEVEMENTS.filter(a => newlyUnlocked.includes(a.id));
  
  // Save newly unlocked achievements
  if (newlyUnlocked.length > 0) {
    progress.achievements = [...new Set([...previouslyUnlocked, ...shouldBeUnlocked])];
    saveProgress(progress);
  }
  
  return {
    all: shouldBeUnlocked,
    new: newAchievements,
  };
}

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
