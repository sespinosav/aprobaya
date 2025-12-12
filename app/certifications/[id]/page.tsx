"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  Target,
  Trophy,
  Clock,
  FileQuestion,
  Award,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Flame,
  BarChart3,
  TrendingUp,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Import data
import { awsCloudPractitionerInfo, allDomains, getQuestionStats } from "@/data/certifications/aws-clf-c02";
import { articleStats } from "@/data/certifications/aws-clf-c02/articles";

// For now, we only support AWS CLF-C02
const certificationData: Record<string, typeof awsCloudPractitionerInfo> = {
  "aws-clf-c02": awsCloudPractitionerInfo,
};

const domainsData: Record<string, typeof allDomains> = {
  "aws-clf-c02": allDomains,
};

interface CertificationPageProps {
  params: Promise<{ id: string }>;
}

export default function CertificationPage({ params }: CertificationPageProps) {
  const { id } = use(params);
  
  const certification = certificationData[id];
  const domains = domainsData[id];
  
  if (!certification || !domains) {
    notFound();
  }

  const questionStats = getQuestionStats();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-orange-50/80 via-amber-50/60 to-yellow-50/40 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row gap-8 items-center lg:items-start"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-6xl lg:text-7xl shadow-lg">
                {certification.icon}
              </div>
            </div>

            {/* Info */}
            <div className="flex-grow text-center lg:text-left">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                <Badge variant="outline" className="text-orange-600 border-orange-300">
                  {certification.code}
                </Badge>
                <Badge variant="info" size="sm">
                  {certification.level === "foundational" ? "Nivel Fundacional" : certification.level}
                </Badge>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {certification.name}
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-6">
                {certification.description}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-500" />
                  <span>{certification.examDetails.duration} minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileQuestion className="h-5 w-5 text-orange-500" />
                  <span>{certification.examDetails.questionCount} preguntas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-orange-500" />
                  <span>Puntaje: {certification.examDetails.passingScore}/{certification.examDetails.maxScore}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Actions */}
      <section className="py-12 -mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Theory Module */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link href={`/certifications/${id}/theory`}>
                <Card hover="lift" className="h-full border-2 hover:border-indigo-300 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50/80 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                      <BookOpen className="h-7 w-7 text-indigo-600" />
                    </div>
                    <CardTitle className="text-xl">Módulo de Teoría</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Aprende todos los conceptos del examen organizados por dominios.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {domains.length} dominios
                      </span>
                      <ArrowRight className="h-5 w-5 text-indigo-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Link href={`/certifications/${id}/articles`}>
                <Card hover="lift" className="h-full border-2 hover:border-cyan-300 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-cyan-50/80 dark:bg-cyan-900/30 flex items-center justify-center mb-4">
                      <FileText className="h-7 w-7 text-cyan-600" />
                    </div>
                    <CardTitle className="text-xl">Artículos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Contenido completo para dominar todos los temas del examen.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {articleStats.total} artículos
                      </span>
                      <ArrowRight className="h-5 w-5 text-cyan-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Simulator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href={`/certifications/${id}/simulator`}>
                <Card hover="lift" className="h-full border-2 hover:border-purple-300 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-purple-50/80 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                      <Target className="h-7 w-7 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Simulador</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Practica con preguntas tipo examen real con timer y explicaciones.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {questionStats.total} preguntas
                      </span>
                      <ArrowRight className="h-5 w-5 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <Link href={`/certifications/${id}/progress`}>
                <Card hover="lift" className="h-full border-2 hover:border-green-300 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50/80 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <Trophy className="h-7 w-7 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Mi Progreso</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Revisa tu avance, estadísticas y logros desbloqueados.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Gráficos • Streaks
                      </span>
                      <ArrowRight className="h-5 w-5 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domains Overview */}
      <section className="py-12 bg-slate-50/50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Dominios del Examen
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              El examen cubre {domains.length} dominios principales
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {domains.map((domain, i) => (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge
                          variant="outline"
                          size="sm"
                          className="mb-2 text-orange-600 border-orange-300"
                        >
                          Dominio {i + 1}
                        </Badge>
                        <CardTitle className="text-lg">{domain.name}</CardTitle>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">
                          {domain.weight}%
                        </div>
                        <div className="text-xs text-gray-500">del examen</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {domain.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        {domain.topics.length} temas •{" "}
                        {questionStats.byDomain[domain.id as keyof typeof questionStats.byDomain] || 0} preguntas
                      </span>
                      <Link
                        href={`/certifications/${id}/theory#${domain.id}`}
                        className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                      >
                        Estudiar
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Details */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Exam Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Detalles del Examen Oficial</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Duración</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{certification.examDetails.duration} minutos</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Preguntas</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{certification.examDetails.questionCount} preguntas</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Puntaje Aprobatorio</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{certification.examDetails.passingScore}/{certification.examDetails.maxScore}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Costo</div>
                      <div className="font-semibold text-gray-900 dark:text-white">${certification.examDetails.examFee} USD</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Validez</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{certification.examDetails.validityPeriod}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Reintentos</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{certification.examDetails.retakePolicy}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Tipos de preguntas</div>
                    <div className="flex gap-2">
                      {certification.examDetails.questionTypes.map((type) => (
                        <Badge key={type} variant="outline" size="sm">
                          {type === "multiple-choice" ? "Opción múltiple" : "Respuesta múltiple"}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <a
                      href={certification.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                        Página Oficial
                      </Button>
                    </a>
                    <a
                      href={certification.examGuideLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                        Guía del Examen
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Start Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-indigo-600 to-purple-700 border-0">
                <CardHeader>
                  <CardTitle className="text-xl !text-white">Comienza a Estudiar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-indigo-100">
                    Tenemos {questionStats.total} preguntas de práctica listas para ti, organizadas por dificultad y dominio.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="h-5 w-5 text-green-300" />
                      <span>Teoría completa con todos los servicios AWS</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="h-5 w-5 text-green-300" />
                      <span>Explicaciones detalladas de cada respuesta</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="h-5 w-5 text-green-300" />
                      <span>Simulador con timer como examen real</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="h-5 w-5 text-green-300" />
                      <span>Progreso guardado localmente</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <Link href={`/certifications/${id}/theory`} className="flex-1">
                      <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50">
                        <BookOpen className="h-4 w-4" />
                        Estudiar Teoría
                      </Button>
                    </Link>
                    <Link href={`/certifications/${id}/simulator`} className="flex-1">
                      <Button className="w-full bg-white/20 text-white hover:bg-white/30 border border-white/30">
                        <Target className="h-4 w-4" />
                        Iniciar Simulador
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
