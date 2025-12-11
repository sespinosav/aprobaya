"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, ArrowRight, BookOpen, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const availableSimulators = [
  {
    id: "aws-clf-c02",
    name: "AWS Cloud Practitioner",
    code: "CLF-C02",
    icon: "☁️",
    questions: 200,
    modes: ["Estudio", "Examen", "Por dominio"],
  },
];

const comingSoon = [
  { name: "AWS Solutions Architect", code: "SAA-C03", icon: "🏗️" },
  { name: "Azure Fundamentals", code: "AZ-900", icon: "🔷" },
  { name: "GCP Cloud Digital Leader", code: "CDL", icon: "🌐" },
];

export default function SimulatorPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-50/80 dark:bg-purple-900/30 mb-4">
            <Target className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simulador de Exámenes
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Practica con preguntas tipo examen real. Incluye timer, puntuación y explicaciones detalladas.
          </p>
        </motion.div>

        {/* Modes Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid gap-6 md:grid-cols-3 mb-12"
        >
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-xl bg-blue-50/80 dark:bg-blue-900/30 flex items-center justify-center mb-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Modo Estudio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ve las respuestas y explicaciones inmediatamente después de responder cada pregunta.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-xl bg-purple-50/80 dark:bg-purple-900/30 flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Modo Examen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Simula el examen real con temporizador. Ve los resultados al final.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-xl bg-emerald-50/80 dark:bg-green-900/30 flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-emerald-600" />
              </div>
              <CardTitle className="text-lg">Por Dominio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enfócate en un dominio específico para reforzar áreas débiles.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Available Simulators */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Simuladores Disponibles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {availableSimulators.map((sim, i) => (
              <motion.div
                key={sim.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/certifications/${sim.id}/simulator`}>
                  <Card hover="lift" className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-orange-50/80 dark:bg-orange-900/30 flex items-center justify-center text-2xl">
                          {sim.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{sim.name}</CardTitle>
                          <Badge variant="outline" size="sm">
                            {sim.code}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {sim.questions}+ preguntas de práctica
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {sim.modes.map((mode) => (
                          <Badge key={mode} variant="info" size="sm">
                            {mode}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm" className="w-full">
                        Iniciar Simulador
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Clock className="h-5 w-5 text-amber-500" />
            Próximamente
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {comingSoon.map((sim, i) => (
              <motion.div
                key={sim.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Card className="opacity-60">
                  <CardContent className="flex items-center gap-4 py-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100/80 dark:bg-gray-800 flex items-center justify-center text-xl grayscale">
                      {sim.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{sim.name}</p>
                      <Badge variant="warning" size="sm">
                        Pronto
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
