"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Trophy,
  Flame,
  Target,
  BookOpen,
  TrendingUp,
  Calendar,
  Clock,
  ArrowLeft,
  Award,
  BarChart3,
  Zap,
  Star,
  Medal,
  Crown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Import data and storage
import { awsCloudPractitionerInfo, allDomains, getQuestionStats } from "@/data/certifications/aws-clf-c02";
import { getProgress, getStreak, getExamHistory } from "@/lib/storage";
import { formatTime, getScoreColor, calculateScore } from "@/lib/utils";
import { ExamResult } from "@/types";

const achievements = [
  { id: "first-exam", name: "Primer Paso", icon: "🎯", description: "Completa tu primer examen", requirement: "1 examen" },
  { id: "five-exams", name: "En Camino", icon: "🚀", description: "Completa 5 exámenes", requirement: "5 exámenes" },
  { id: "ten-exams", name: "Dedicado", icon: "💪", description: "Completa 10 exámenes", requirement: "10 exámenes" },
  { id: "first-pass", name: "Victoria", icon: "🏆", description: "Aprueba un examen (700+)", requirement: "Score 700+" },
  { id: "perfect-score", name: "Perfección", icon: "⭐", description: "Obtén 1000 puntos", requirement: "Score 1000" },
  { id: "streak-3", name: "Consistente", icon: "🔥", description: "3 días de racha", requirement: "3 días" },
  { id: "streak-7", name: "Imparable", icon: "⚡", description: "7 días de racha", requirement: "7 días" },
  { id: "all-domains", name: "Explorador", icon: "🗺️", description: "Practica todos los dominios", requirement: "4 dominios" },
];

export default function ProgressPage() {
  const params = useParams();
  const id = params.id as string;
  
  const [examHistory, setExamHistory] = useState<ExamResult[]>([]);
  const [streak, setStreak] = useState<{ current: number; longest: number }>({ current: 0, longest: 0 });
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);

  const questionStats = getQuestionStats();

  useEffect(() => {
    // Load data from localStorage
    const history = getExamHistory(id);
    const streakData = getStreak();
    const progress = getProgress();
    
    setExamHistory(history);
    setStreak(streakData);
    setUnlockedAchievements(progress?.achievements || []);
  }, [id]);

  // Calculate stats
  const totalExams = examHistory.length;
  const passedExams = examHistory.filter(e => e.score >= 700).length;
  const averageScore = totalExams > 0 
    ? Math.round(examHistory.reduce((acc, e) => acc + e.score, 0) / totalExams)
    : 0;
  const totalTime = examHistory.reduce((acc, e) => acc + e.timeSpent, 0);
  const bestScore = totalExams > 0 ? Math.max(...examHistory.map(e => e.score)) : 0;

  // Domain performance
  const domainPerformance = allDomains.map(domain => {
    const domainResults = examHistory.flatMap(e => {
      const score = e.domainScores[domain.id];
      return score ? [score] : [];
    });
    
    const totalCorrect = domainResults.reduce((acc, s) => acc + s.correct, 0);
    const totalQuestions = domainResults.reduce((acc, s) => acc + s.total, 0);
    const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    
    return {
      ...domain,
      percentage,
      totalQuestions,
      totalCorrect,
    };
  });

  // Recent exams (last 5)
  const recentExams = [...examHistory].reverse().slice(0, 5);

  // Score trend (last 10 exams)
  const scoreTrend = [...examHistory].slice(-10).map(e => e.score);

  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href={`/certifications/${id}`}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a {awsCloudPractitionerInfo.shortName}
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Trophy className="h-8 w-8 text-green-600" />
            Mi Progreso
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Revisa tu avance y estadísticas de estudio
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-purple-600">{totalExams}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Exámenes</div>
                </div>
                <Target className="h-8 w-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-green-600">{passedExams}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Aprobados</div>
                </div>
                <Award className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className={`text-3xl font-bold ${getScoreColor(averageScore)}`}>
                    {averageScore}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Promedio</div>
                </div>
                <TrendingUp className="h-8 w-8 text-amber-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-gray-800 dark:to-gray-800 border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-red-500">{streak.current}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Días racha</div>
                </div>
                <Flame className="h-8 w-8 text-red-400" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Domain Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-indigo-600" />
                    Rendimiento por Dominio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {totalExams === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Completa exámenes para ver tu rendimiento por dominio</p>
                      <Link href={`/certifications/${id}/simulator`}>
                        <Button className="mt-4">Iniciar Examen</Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {domainPerformance.map((domain, i) => (
                        <div key={domain.id}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-orange-50/80 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 font-bold text-sm">
                                {i + 1}
                              </div>
                              <span className="font-medium text-gray-900 dark:text-white text-sm">
                                {domain.name}
                              </span>
                            </div>
                            <div className="text-right">
                              <span className={`font-bold ${
                                domain.percentage >= 70 ? "text-green-600" : 
                                domain.percentage >= 50 ? "text-amber-600" : "text-red-600"
                              }`}>
                                {domain.percentage}%
                              </span>
                              <span className="text-xs text-gray-500 ml-2">
                                ({domain.totalCorrect}/{domain.totalQuestions})
                              </span>
                            </div>
                          </div>
                          <Progress
                            value={domain.percentage}
                            variant={domain.percentage >= 70 ? "success" : domain.percentage >= 50 ? "warning" : "danger"}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Exams */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-600" />
                    Exámenes Recientes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {recentExams.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Aún no has completado ningún examen</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {recentExams.map((exam, i) => (
                        <div
                          key={exam.id}
                          className={`p-4 rounded-xl border ${
                            exam.score >= 700
                              ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                              : "border-slate-200/60 bg-slate-50/50 dark:border-gray-700 dark:bg-gray-800"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className={`text-xl font-bold ${getScoreColor(exam.score)}`}>
                                  {exam.score}
                                </span>
                                {exam.score >= 700 && (
                                  <Badge variant="success" size="sm">Aprobado</Badge>
                                )}
                              </div>
                              <div className="text-sm text-gray-500 mt-1">
                                {new Date(exam.date).toLocaleDateString("es-ES", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {exam.correctAnswers}/{exam.totalQuestions} correctas
                              </div>
                              <div className="text-xs text-gray-500">
                                {formatTime(exam.timeSpent)}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Streak Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-orange-400 to-red-500 text-white border-0">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Flame className="h-16 w-16 mx-auto mb-4 animate-pulse" />
                    <div className="text-5xl font-bold mb-2">{streak.current}</div>
                    <div className="text-orange-100 mb-4">días de racha</div>
                    <div className="text-sm text-orange-200">
                      Récord: {streak.longest} días
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="h-5 w-5 text-amber-500" />
                    Estadísticas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Mejor puntaje</span>
                    <span className={`font-bold ${getScoreColor(bestScore)}`}>{bestScore}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Tiempo total</span>
                    <span className="font-bold text-gray-900 dark:text-white">{formatTime(totalTime)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Preguntas practicadas</span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {examHistory.reduce((acc, e) => acc + e.totalQuestions, 0)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Tasa de aprobación</span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {totalExams > 0 ? Math.round((passedExams / totalExams) * 100) : 0}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Medal className="h-5 w-5 text-yellow-500" />
                    Logros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-3">
                    {achievements.map((achievement) => {
                      const isUnlocked = unlockedAchievements.includes(achievement.id);
                      return (
                        <div
                          key={achievement.id}
                          className={`relative group cursor-pointer ${
                            isUnlocked ? "" : "opacity-40 grayscale"
                          }`}
                          title={`${achievement.name}: ${achievement.description}`}
                        >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                            isUnlocked
                              ? "bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30"
                              : "bg-slate-100/80 dark:bg-gray-800"
                          }`}>
                            {achievement.icon}
                          </div>
                          {isUnlocked && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                              <Star className="h-2.5 w-2.5 text-white" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 text-center text-sm text-gray-500">
                    {unlockedAchievements.length}/{achievements.length} desbloqueados
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 border-0">
            <CardContent className="py-8">
              <h3 className="text-xl font-bold text-white mb-2">
                ¡Sigue practicando!
              </h3>
              <p className="text-indigo-100 mb-6">
                Cada examen te acerca más a tu certificación
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/certifications/${id}/simulator`}>
                  <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
                    <Target className="h-4 w-4" />
                    Nuevo Examen
                  </Button>
                </Link>
                <Link href={`/certifications/${id}/theory`}>
                  <Button className="bg-white/20 text-white hover:bg-white/30 border border-white/30">
                    <BookOpen className="h-4 w-4" />
                    Estudiar Teoría
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
