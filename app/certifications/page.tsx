"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    id: "aws-clf-c02",
    name: "AWS Cloud Practitioner",
    code: "CLF-C02",
    icon: "☁️",
    description: "Certificación foundacional de AWS. Ideal para comenzar en el mundo cloud.",
    color: "from-orange-400 to-amber-500",
    bgColor: "bg-orange-50/80 dark:bg-orange-900/30",
    borderColor: "border-orange-200/60 dark:border-orange-700",
    available: true,
    questions: 200,
    domains: 4,
    duration: 90,
  },
  {
    id: "aws-saa-c03",
    name: "AWS Solutions Architect Associate",
    code: "SAA-C03",
    icon: "🏗️",
    description: "Diseña arquitecturas resilientes y de alto rendimiento en AWS.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50/80 dark:bg-orange-900/30",
    borderColor: "border-orange-200/60 dark:border-orange-700",
    available: false,
    questions: 0,
    domains: 4,
    duration: 130,
  },
  {
    id: "azure-az900",
    name: "Azure Fundamentals",
    code: "AZ-900",
    icon: "🔷",
    description: "Fundamentos de Microsoft Azure y servicios en la nube.",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50/80 dark:bg-blue-900/30",
    borderColor: "border-blue-200/60 dark:border-blue-700",
    available: false,
    questions: 0,
    domains: 6,
    duration: 85,
  },
  {
    id: "gcp-cdl",
    name: "Google Cloud Digital Leader",
    code: "CDL",
    icon: "🌐",
    description: "Fundamentos de Google Cloud Platform y transformación digital.",
    color: "from-green-400 to-blue-500",
    bgColor: "bg-green-50/80 dark:bg-green-900/30",
    borderColor: "border-green-200/60 dark:border-green-700",
    available: false,
    questions: 0,
    domains: 4,
    duration: 90,
  },
  {
    id: "docker-dca",
    name: "Docker Certified Associate",
    code: "DCA",
    icon: "🐳",
    description: "Domina Docker y la containerización de aplicaciones.",
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-50/80 dark:bg-cyan-900/30",
    borderColor: "border-cyan-200/60 dark:border-cyan-700",
    available: false,
    questions: 0,
    domains: 6,
    duration: 90,
  },
  {
    id: "k8s-cka",
    name: "Certified Kubernetes Administrator",
    code: "CKA",
    icon: "⚙️",
    description: "Administra clusters de Kubernetes como un profesional.",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50/80 dark:bg-blue-900/30",
    borderColor: "border-blue-200/60 dark:border-blue-700",
    available: false,
    questions: 0,
    domains: 5,
    duration: 120,
  },
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certificaciones
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Elige la certificación que quieres preparar. Nuevas certificaciones se añaden constantemente.
          </p>
        </motion.div>

        {/* Available */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Disponibles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications
              .filter((cert) => cert.available)
              .map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/certifications/${cert.id}`}>
                    <Card hover="lift" className="h-full">
                      <CardHeader className="text-center pb-2">
                        <div
                          className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center text-4xl ${cert.bgColor} ${cert.borderColor} border-2 mb-4`}
                        >
                          {cert.icon}
                        </div>
                        <CardTitle className="text-xl">{cert.name}</CardTitle>
                        <Badge variant="outline" size="sm" className="mt-2">
                          {cert.code}
                        </Badge>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {cert.description}
                        </p>
                        <div className="flex justify-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                          <span>{cert.questions} preguntas</span>
                          <span>•</span>
                          <span>{cert.domains} dominios</span>
                          <span>•</span>
                          <span>{cert.duration} min</span>
                        </div>
                        <Button size="sm" className="w-full">
                          Comenzar
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications
              .filter((cert) => !cert.available)
              .map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full opacity-70">
                    <CardHeader className="text-center pb-2">
                      <div className="absolute top-3 right-3">
                        <Badge variant="warning" size="sm">
                          <Clock className="h-3 w-3" />
                          Pronto
                        </Badge>
                      </div>
                      <div
                        className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center text-4xl ${cert.bgColor} ${cert.borderColor} border-2 mb-4 grayscale`}
                      >
                        {cert.icon}
                      </div>
                      <CardTitle className="text-xl">{cert.name}</CardTitle>
                      <Badge variant="outline" size="sm" className="mt-2">
                        {cert.code}
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {cert.description}
                      </p>
                      <div className="flex justify-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <span>{cert.domains} dominios</span>
                        <span>•</span>
                        <span>{cert.duration} min</span>
                      </div>
                      <Button size="sm" variant="secondary" className="w-full" disabled>
                        Próximamente
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Contribute CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            ¿Quieres contribuir?
          </h3>
          <p className="text-indigo-100 mb-6">
            Ayúdanos a añadir más certificaciones y preguntas. Es open source.
          </p>
          <Link
            href="https://github.com/sespinosav/aprobaya"
            target="_blank"
          >
            <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
              Ver en GitHub
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
