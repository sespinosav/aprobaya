"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Clock,
  ArrowLeft,
  Lightbulb,
  FileText,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import data
import {
  awsCloudPractitionerInfo,
  allDomains,
} from "@/data/certifications/aws-clf-c02";
import { getArticlesByDomain } from "@/data/certifications/aws-clf-c02/articles";

export default function TheoryPage() {
  const params = useParams();
  const id = params.id as string;

  const [expandedDomains, setExpandedDomains] = useState<string[]>(["domain-1"]);
  const [expandedTopics, setExpandedTopics] = useState<string[]>([]);

  if (id !== "aws-clf-c02") {
    notFound();
  }

  const certification = awsCloudPractitionerInfo;
  const domains = allDomains;

  const toggleDomain = (domainId: string) => {
    setExpandedDomains((prev) =>
      prev.includes(domainId)
        ? prev.filter((id) => id !== domainId)
        : [...prev, domainId]
    );
  };

  const toggleTopic = (topicId: string) => {
    setExpandedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

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
            Volver a {certification.shortName}
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-indigo-600" />
                Módulo de Teoría
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Estudia todos los conceptos necesarios para el examen {certification.code}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Articles Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link href={`/certifications/${id}/articles`}>
            <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 border-0 hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer mb-8">
              <CardContent className="py-5 flex items-center justify-between">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">64 Artículos de Teoría</h3>
                    <p className="text-indigo-100 text-sm">
                      Contenido completo para dominar todos los conceptos del examen
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-6 w-6 text-white" />
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
            {/* Domain Progress Overview */}
              <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 border-0">
                <CardContent className="py-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {domains.map((domain, i) => (
                      <div key={domain.id} className="text-center">
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                          {domain.weight}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Dominio {i + 1}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 line-clamp-1">
                          {domain.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Domains Accordion */}
              {domains.map((domain, domainIndex) => (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: domainIndex * 0.1 }}
                  id={domain.id}
                >
                  <Card className="overflow-hidden">
                    {/* Domain Header */}
                    <button
                      onClick={() => toggleDomain(domain.id)}
                      className="cursor-pointer w-full p-6 flex items-center justify-between hover:bg-slate-50/80 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-lg">
                          {domainIndex + 1}
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {domain.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {domain.topics.length} temas • {domain.weight}% del examen
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="hidden sm:flex">
                          {domain.weight}%
                        </Badge>
                        {expandedDomains.includes(domain.id) ? (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {/* Domain Content */}
                    {expandedDomains.includes(domain.id) && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.15 }}
                      >
                        <div className="px-6 pb-6 border-t dark:border-gray-700">
                            <p className="mt-4 text-gray-600 dark:text-gray-400 mb-6">
                              {domain.description}
                            </p>

                            {/* Topics */}
                            <div className="space-y-4">
                              {domain.topics.map((topic, topicIndex) => (
                                <div
                                  key={topic.id}
                                  className="border dark:border-gray-700 rounded-xl overflow-hidden"
                                >
                                  {/* Topic Header */}
                                  <button
                                    onClick={() => toggleTopic(topic.id)}
                                    className="cursor-pointer w-full p-4 flex items-center justify-between hover:bg-slate-50/80 dark:hover:bg-gray-800 transition-colors"
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded-lg bg-indigo-50/80 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 text-sm font-medium">
                                        {domainIndex + 1}.{topicIndex + 1}
                                      </div>
                                      <span className="font-medium text-gray-900 dark:text-white text-left">
                                        {topic.name}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      {topic.estimatedTime && (
                                        <span className="text-xs text-gray-500 hidden sm:flex items-center gap-1">
                                          <Clock className="h-3 w-3" />
                                          {topic.estimatedTime} min
                                        </span>
                                      )}
                                      {expandedTopics.includes(topic.id) ? (
                                        <ChevronDown className="h-4 w-4 text-gray-400" />
                                      ) : (
                                        <ChevronRight className="h-4 w-4 text-gray-400" />
                                      )}
                                    </div>
                                  </button>

                                  {/* Topic Content */}
                                  {expandedTopics.includes(topic.id) && (
                                    <motion.div
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ duration: 0.15 }}
                                    >
                                      <div className="p-4 pt-0 space-y-4">
                                          <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {topic.description}
                                          </p>

                                          {/* Key Points */}
                                          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                                            <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-medium mb-3">
                                              <Lightbulb className="h-4 w-4" />
                                              Puntos Clave
                                            </div>
                                            <ul className="space-y-2">
                                              {topic.keyPoints.map((point, i) => (
                                                <li
                                                  key={i}
                                                  className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                                                >
                                                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                  {point}
                                                </li>
                                              ))}
                                            </ul>
                                          </div>

                                          {/* Articles Link */}
                                          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-medium">
                                                <FileText className="h-4 w-4" />
                                                Artículos de Estudio
                                              </div>
                                              <Link
                                                href={`/certifications/${id}/articles?domain=${domain.id}`}
                                                className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 flex items-center gap-1"
                                              >
                                                Ver {getArticlesByDomain(domain.id).length} artículos
                                                <ChevronRight className="h-4 w-4" />
                                              </Link>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                              Contenido completo para dominar este tema y aprobar el examen.
                                            </p>
                                          </div>
                                        </div>
                                      </motion.div>
                                    )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                  </Card>
                </motion.div>
              ))}
        </motion.div>
      </div>
    </div>
  );
}
