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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { getProgress, getStreak } from "@/lib/storage";

export default function ProgressPage() {
  const [streak, setStreak] = useState<{ current: number; longest: number }>({ current: 0, longest: 0 });
  const [hasProgress, setHasProgress] = useState(false);

  useEffect(() => {
    const streakData = getStreak();
    const progress = getProgress();
    setStreak(streakData);
    
    // Check if user has any progress
    const certifications = Object.keys(progress.certifications || {});
    setHasProgress(certifications.length > 0);
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/certifications/aws-clf-c02/progress">
                <Card hover="lift" className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-orange-50/80 dark:bg-orange-900/30 flex items-center justify-center text-2xl">
                        ☁️
                      </div>
                      <div>
                        <CardTitle className="text-lg">AWS Cloud Practitioner</CardTitle>
                        <Badge variant="outline" size="sm">CLF-C02</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600 dark:text-gray-400">Progreso general</span>
                          <span className="font-medium text-gray-900 dark:text-white">Ver detalles</span>
                        </div>
                        <Progress value={0} />
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
            Logros
          </h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {[
              { icon: "🎯", name: "Primer Paso", desc: "Completa tu primer examen" },
              { icon: "🔥", name: "En Llamas", desc: "3 días de racha" },
              { icon: "🏆", name: "Victoria", desc: "Aprueba un examen" },
              { icon: "⭐", name: "Perfección", desc: "Obtén 1000 puntos" },
            ].map((achievement, i) => (
              <Card key={i} className="opacity-50">
                <CardContent className="py-4 text-center">
                  <div className="text-3xl mb-2 grayscale">{achievement.icon}</div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">{achievement.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{achievement.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
