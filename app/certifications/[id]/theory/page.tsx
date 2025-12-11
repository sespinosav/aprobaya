"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Clock,
  ArrowLeft,
  ExternalLink,
  Lightbulb,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Import data
import {
  awsCloudPractitionerInfo,
  allDomains,
  services,
  servicesByCategory,
} from "@/data/certifications/aws-clf-c02";

export default function TheoryPage() {
  const params = useParams();
  const id = params.id as string;

  const [expandedDomains, setExpandedDomains] = useState<string[]>(["domain-1"]);
  const [expandedTopics, setExpandedTopics] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"domains" | "services">("domains");

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

            {/* Tabs */}
            <div className="flex gap-2 p-1 bg-slate-100/80 dark:bg-gray-800 rounded-xl">
              <button
                onClick={() => setActiveTab("domains")}
                className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === "domains"
                    ? "bg-white dark:bg-gray-700 text-indigo-600 shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                Por Dominios
              </button>
              <button
                onClick={() => setActiveTab("services")}
                className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === "services"
                    ? "bg-white dark:bg-gray-700 text-indigo-600 shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                Por Servicios
              </button>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "domains" ? (
            <motion.div
              key="domains"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
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
                    <AnimatePresence>
                      {expandedDomains.includes(domain.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
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
                                  <AnimatePresence>
                                    {expandedTopics.includes(topic.id) && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
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

                                          {/* Related Services */}
                                          {topic.services && topic.services.length > 0 && (
                                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                                              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-medium mb-3">
                                                <Server className="h-4 w-4" />
                                                Servicios Relacionados
                                              </div>
                                              <div className="flex flex-wrap gap-2">
                                                {topic.services.map((serviceId) => {
                                                  const service = services.find(
                                                    (s) => s.id === serviceId
                                                  );
                                                  return (
                                                    <Badge
                                                      key={serviceId}
                                                      variant="info"
                                                      size="sm"
                                                      className="cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
                                                      onClick={() => setActiveTab("services")}
                                                    >
                                                      {service?.shortName || service?.name || serviceId}
                                                    </Badge>
                                                  );
                                                })}
                                              </div>
                                            </div>
                                          )}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="services"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              {/* Services by Category */}
              {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
                <div key={category}>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Server className="h-5 w-5 text-indigo-600" />
                    {category}
                    <Badge variant="outline" size="sm">
                      {categoryServices.length} servicios
                    </Badge>
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryServices.map((service) => (
                      <Card key={service.id} hover="lift" className="h-full">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">
                            {service.shortName || service.name}
                          </CardTitle>
                          {service.shortName && (
                            <p className="text-xs text-gray-500">{service.name}</p>
                          )}
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                            {service.description}
                          </p>

                          <div className="mt-4 space-y-2">
                            <div className="text-xs font-medium text-gray-500">
                              Características principales:
                            </div>
                            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                              {service.keyFeatures.slice(0, 3).map((feature, i) => (
                                <li key={i} className="flex items-start gap-1">
                                  <span className="text-indigo-500">•</span>
                                  <span className="line-clamp-1">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {service.pricing && (
                            <div className="mt-3 pt-3 border-t dark:border-gray-700">
                              <div className="text-xs text-gray-500">
                                💰 {service.pricing}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
