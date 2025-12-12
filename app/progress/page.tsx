"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Trophy,
  Flame,
  Target,
  BookOpen,
  TrendingUp,
  ArrowRight,
  Award,
  BarChart3,
  RotateCcw,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { getProgress, getStreak, resetProgress, getExamHistory, calculateAchievements, ACHIEVEMENTS } from "@/lib/storage";
import { getScoreColor } from "@/lib/utils";

interface CertificationStats {
  id: string;
  name: string;
  code: string;
  icon: string;
  totalExams: number;
  passedExams: number;
  averageScore: number;
  bestScore: number;
}

export default function ProgressPage() {
  const [streak, setStreak] = useState<{ current: number; longest: number }>({ current: 0, longest: 0 });
  const [hasProgress, setHasProgress] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [certStats, setCertStats] = useState<CertificationStats[]>([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);

  const handleResetProgress = () => {
    resetProgress();
    setStreak({ current: 0, longest: 0 });
    setHasProgress(false);
    setCertStats([]);
    setUnlockedAchievements([]);
    setShowResetModal(false);
  };

  useEffect(() => {
    const streakData = getStreak();
    const progress = getProgress();
    setStreak(streakData);
    
    // Check if user has any progress and calculate stats
    const certifications = Object.keys(progress.certifications || {});
    const hasAnyProgress = certifications.some(certId => {
      const history = getExamHistory(certId);
      return history.length > 0;
    });
    setHasProgress(hasAnyProgress);

    // Calculate stats for AWS CLF-C02
    const awsHistory = getExamHistory("aws-clf-c02");
    if (awsHistory.length > 0) {
      const stats: CertificationStats = {
        id: "aws-clf-c02",
        name: "AWS Cloud Practitioner",
        code: "CLF-C02",
        icon: "☁️",
        totalExams: awsHistory.length,
        passedExams: awsHistory.filter(e => e.score >= 700).length,
        averageScore: Math.round(awsHistory.reduce((acc, e) => acc + e.score, 0) / awsHistory.length),
        bestScore: Math.max(...awsHistory.map(e => e.score)),
      };
      setCertStats([stats]);

      // Calculate achievements
      const { all } = calculateAchievements("aws-clf-c02");
      setUnlockedAchievements(all);
    }
  }, []);

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-50/80 dark:bg-green-900/30 mb-4">
            <Trophy className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mi Progreso
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Revisa tu avance, mantén tu racha y desbloquea logros.
          </p>
        </motion.div>

        {/* Streak Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 border-0 text-white">
            <CardContent className="py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Flame className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-orange-100 text-sm">Racha actual</p>
                    <p className="text-4xl font-bold">{streak.current} días</p>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-orange-100 text-sm">Racha más larga</p>
                  <p className="text-2xl font-bold">{streak.longest} días</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {!hasProgress ? (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="text-center py-16">
              <CardContent>
                <div className="w-20 h-20 rounded-full bg-slate-100/80 dark:bg-gray-800 flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Aún no hay progreso
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                  Comienza a estudiar una certificación para ver tu progreso aquí. 
                  Cada examen que completes aparecerá en tu historial.
                </p>
                <Link href="/certifications">
                  <Button size="lg">
                    <BookOpen className="h-5 w-5" />
                    Elegir Certificación
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          /* Progress Content */
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certStats.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link href={`/certifications/${cert.id}/progress`}>
                  <Card hover="lift" className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-orange-50/80 dark:bg-orange-900/30 flex items-center justify-center text-2xl">
                          {cert.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{cert.name}</CardTitle>
                          <Badge variant="outline" size="sm">{cert.code}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-slate-50/80 dark:bg-gray-800 rounded-xl">
                            <div className="text-2xl font-bold text-purple-600">{cert.totalExams}</div>
                            <div className="text-xs text-gray-500">Exámenes</div>
                          </div>
                          <div className="text-center p-3 bg-slate-50/80 dark:bg-gray-800 rounded-xl">
                            <div className="text-2xl font-bold text-green-600">{cert.passedExams}</div>
                            <div className="text-xs text-gray-500">Aprobados</div>
                          </div>
                          <div className="text-center p-3 bg-slate-50/80 dark:bg-gray-800 rounded-xl">
                            <div className={`text-2xl font-bold ${getScoreColor(cert.averageScore)}`}>{cert.averageScore}</div>
                            <div className="text-xs text-gray-500">Promedio</div>
                          </div>
                          <div className="text-center p-3 bg-slate-50/80 dark:bg-gray-800 rounded-xl">
                            <div className={`text-2xl font-bold ${getScoreColor(cert.bestScore)}`}>{cert.bestScore}</div>
                            <div className="text-xs text-gray-500">Mejor</div>
                          </div>
                        </div>
                        
                        {/* Progress bar based on pass rate */}
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">Tasa de aprobación</span>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {cert.totalExams > 0 ? Math.round((cert.passedExams / cert.totalExams) * 100) : 0}%
                            </span>
                          </div>
                          <Progress 
                            value={cert.totalExams > 0 ? (cert.passedExams / cert.totalExams) * 100 : 0}
                            variant={cert.passedExams / cert.totalExams >= 0.7 ? "success" : cert.passedExams / cert.totalExams >= 0.5 ? "warning" : "danger"}
                          />
                        </div>
                        
                        <Button size="sm" variant="outline" className="w-full">
                          Ver Progreso Completo
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Achievements Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-500" />
            Logros ({unlockedAchievements.length}/{ACHIEVEMENTS.length})
          </h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {ACHIEVEMENTS.map((achievement) => {
              const isUnlocked = unlockedAchievements.includes(achievement.id);
              return (
                <Card 
                  key={achievement.id} 
                  className={isUnlocked ? "border-yellow-200 bg-yellow-50/50 dark:border-yellow-800 dark:bg-yellow-900/20" : "opacity-50"}
                >
                  <CardContent className="py-4 text-center">
                    <div className={`text-3xl mb-2 ${!isUnlocked ? "grayscale" : ""}`}>{achievement.icon}</div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">{achievement.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{achievement.description}</p>
                    {isUnlocked && (
                      <Badge variant="success" size="sm" className="mt-2">Desbloqueado</Badge>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Reset Progress Section */}
        {hasProgress && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Reiniciar Progreso</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Elimina todo tu historial de exámenes, rachas y logros.
                </p>
              </div>
              <Button
                variant="outline"
                className="text-red-600 border-red-200 hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-900/30"
                onClick={() => setShowResetModal(true)}
              >
                <RotateCcw className="h-4 w-4" />
                Reiniciar Todo
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md"
          >
            <Card className="border-red-200 dark:border-red-900">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      ¿Reiniciar todo el progreso?
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Esta acción no se puede deshacer.
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Se eliminarán permanentemente:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-6 ml-4">
                  <li>• Historial de exámenes</li>
                  <li>• Racha actual y récords</li>
                  <li>• Logros desbloqueados</li>
                  <li>• Estadísticas de preguntas</li>
                </ul>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setShowResetModal(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex-1"
                    onClick={handleResetProgress}
                  >
                    <RotateCcw className="h-4 w-4" />
                    Sí, reiniciar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  );
}
