"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Target,
  Trophy,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
  Users,
  Zap,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    id: "aws-clf-c02",
    name: "AWS Cloud Practitioner",
    code: "CLF-C02",
    icon: "☁️",
    color: "from-orange-400 to-amber-500",
    bgColor: "bg-orange-50/80 dark:bg-orange-900/30",
    borderColor: "border-orange-200/60 dark:border-orange-700",
    available: true,
    questions: 200,
  },
  {
    id: "azure-az900",
    name: "Azure Fundamentals",
    code: "AZ-900",
    icon: "🔷",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50/80 dark:bg-blue-900/30",
    borderColor: "border-blue-200/60 dark:border-blue-700",
    available: false,
    questions: 0,
  },
  {
    id: "gcp-cdl",
    name: "Google Cloud Digital Leader",
    code: "CDL",
    icon: "🌐",
    color: "from-green-400 to-blue-500",
    bgColor: "bg-green-50/80 dark:bg-green-900/30",
    borderColor: "border-green-200/60 dark:border-green-700",
    available: false,
    questions: 0,
  },
  {
    id: "docker-dca",
    name: "Docker Certified Associate",
    code: "DCA",
    icon: "🐳",
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-50/80 dark:bg-cyan-900/30",
    borderColor: "border-cyan-200/60 dark:border-cyan-700",
    available: false,
    questions: 0,
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Teoría Completa",
    description:
      "Todo el contenido organizado por dominios del examen, con explicaciones claras y ejemplos.",
    color: "text-indigo-500",
    bg: "bg-indigo-50/80 dark:bg-indigo-900/30",
  },
  {
    icon: Target,
    title: "Simulador de Exámenes",
    description:
      "Practica con preguntas tipo examen real. Incluye timer y puntuación oficial.",
    color: "text-purple-500",
    bg: "bg-purple-50/80 dark:bg-purple-900/30",
  },
  {
    icon: CheckCircle2,
    title: "Explicaciones Detalladas",
    description:
      "Entiende POR QUÉ cada respuesta es correcta o incorrecta. Aprende de tus errores.",
    color: "text-emerald-500",
    bg: "bg-emerald-50/80 dark:bg-green-900/30",
  },
  {
    icon: Trophy,
    title: "Gamificación",
    description:
      "Badges, streaks y logros para mantenerte motivado en tu camino a la certificación.",
    color: "text-amber-500",
    bg: "bg-amber-50/80 dark:bg-amber-900/30",
  },
  {
    icon: Zap,
    title: "100% Offline",
    description:
      "Una vez cargada, funciona sin conexión. Estudia donde quieras, cuando quieras.",
    color: "text-cyan-500",
    bg: "bg-cyan-50/80 dark:bg-cyan-900/30",
  },
  {
    icon: Users,
    title: "Open Source",
    description:
      "Proyecto comunitario. Puedes contribuir con preguntas, traducciones y más.",
    color: "text-pink-500",
    bg: "bg-pink-50/80 dark:bg-pink-900/30",
  },
];

const stats = [
  { value: "200+", label: "Preguntas de práctica" },
  { value: "4", label: "Dominios cubiertos" },
  { value: "100%", label: "Gratis y open source" },
  { value: "∞", label: "Intentos ilimitados" },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 text-6xl opacity-20"
          >
            ☁️
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute top-40 right-20 text-5xl opacity-20"
          >
            🎓
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="absolute bottom-20 left-1/4 text-4xl opacity-20"
          >
            ✨
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="info" size="lg" className="mb-6">
                <Sparkles className="h-4 w-4" />
                100% Gratis y Open Source
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="block text-gray-900 dark:text-white">
                Prepárate para tus
              </span>
              <span className="block gradient-text-animated mt-2">
                Certificaciones
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
            >
              La forma más <span className="text-indigo-600 font-semibold">cute</span> y{" "}
              <span className="text-purple-600 font-semibold">efectiva</span> de aprobar
              tus exámenes de software. AWS, Azure, GCP, Docker y más.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/certifications/aws-clf-c02">
                <Button size="xl" className="group">
                  <GraduationCap className="h-5 w-5" />
                  Comenzar Ahora
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/certifications">
                <Button variant="outline" size="xl">
                  <Cloud className="h-5 w-5" />
                  Ver Certificaciones
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-slate-50/50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Certificaciones Disponibles
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Elige tu certificación y comienza a estudiar
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={cert.available ? `/certifications/${cert.id}` : "#"}
                  className={cert.available ? "" : "cursor-not-allowed"}
                >
                  <Card
                    hover={cert.available ? "lift" : "none"}
                    className={`relative overflow-hidden ${
                      !cert.available && "opacity-60"
                    }`}
                  >
                    {!cert.available && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="warning" size="sm">
                          <Clock className="h-3 w-3" />
                          Pronto
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-2">
                      <div
                        className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${cert.bgColor} ${cert.borderColor} border-2 mb-3`}
                      >
                        {cert.icon}
                      </div>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <Badge variant="outline" size="sm">
                        {cert.code}
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      {cert.available ? (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {cert.questions} preguntas de práctica
                        </p>
                      ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400">Próximamente</p>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              ¿Por qué AprobaYa?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Todo lo que necesitas para aprobar tu certificación
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card hover="glow" className="h-full">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}
                    >
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              ¿Listo para aprobar tu certificación?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Únete a la comunidad y comienza a estudiar gratis hoy mismo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/certifications/aws-clf-c02">
                <Button
                  size="xl"
                  className="bg-white text-indigo-600 hover:bg-indigo-50"
                >
                  <GraduationCap className="h-5 w-5" />
                  Empezar con AWS Cloud Practitioner
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-indigo-200">
              🎉 Sin registro • Sin pagos • Sin límites
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
