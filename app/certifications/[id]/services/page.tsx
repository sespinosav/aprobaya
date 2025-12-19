"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  Server,
  ArrowLeft,
  Search,
  ChevronDown,
  ChevronRight,
  Zap,
  Target,
  DollarSign,
  Filter,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Import data
import {
  awsCloudPractitionerInfo,
} from "@/data/certifications/aws-clf-c02";
import {
  services,
  servicesByCategory,
  AWSService,
} from "@/data/certifications/aws-clf-c02/services";

// Category icons and colors
const categoryConfig: Record<string, { icon: string; color: string; bgColor: string }> = {
  Compute: { icon: "🖥️", color: "text-orange-600", bgColor: "bg-orange-50 dark:bg-orange-900/30" },
  Storage: { icon: "💾", color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-900/30" },
  Database: { icon: "🗄️", color: "text-purple-600", bgColor: "bg-purple-50 dark:bg-purple-900/30" },
  Networking: { icon: "🌐", color: "text-green-600", bgColor: "bg-green-50 dark:bg-green-900/30" },
  Security: { icon: "🔒", color: "text-red-600", bgColor: "bg-red-50 dark:bg-red-900/30" },
  "Management & Governance": { icon: "⚙️", color: "text-slate-600", bgColor: "bg-slate-50 dark:bg-slate-900/30" },
  "Developer Tools": { icon: "🛠️", color: "text-indigo-600", bgColor: "bg-indigo-50 dark:bg-indigo-900/30" },
  "Application Integration": { icon: "🔗", color: "text-pink-600", bgColor: "bg-pink-50 dark:bg-pink-900/30" },
  Analytics: { icon: "📊", color: "text-cyan-600", bgColor: "bg-cyan-50 dark:bg-cyan-900/30" },
  "Machine Learning": { icon: "🤖", color: "text-violet-600", bgColor: "bg-violet-50 dark:bg-violet-900/30" },
  "Migration & Transfer": { icon: "🚀", color: "text-amber-600", bgColor: "bg-amber-50 dark:bg-amber-900/30" },
  "Cost Management": { icon: "💰", color: "text-emerald-600", bgColor: "bg-emerald-50 dark:bg-emerald-900/30" },
  Support: { icon: "🎧", color: "text-teal-600", bgColor: "bg-teal-50 dark:bg-teal-900/30" },
};

const getCategory = (category: string) => {
  return categoryConfig[category] || { icon: "📦", color: "text-gray-600", bgColor: "bg-gray-50 dark:bg-gray-900/30" };
};

export default function ServicesPage() {
  const params = useParams();
  const id = params.id as string;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  if (id !== "aws-clf-c02") {
    notFound();
  }

  const certification = awsCloudPractitionerInfo;
  const categories = Object.keys(servicesByCategory);

  // Filter services based on search and category
  const filteredServices = useMemo(() => {
    let result = services;

    if (selectedCategory) {
      result = result.filter((s) => s.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.shortName?.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query) ||
          s.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  // Group filtered services by category
  const groupedServices = useMemo(() => {
    return filteredServices.reduce((acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = [];
      }
      acc[service.category].push(service);
      return acc;
    }, {} as Record<string, AWSService[]>);
  }, [filteredServices]);

  const toggleService = (serviceId: string) => {
    setExpandedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
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
                <Server className="h-8 w-8 text-orange-600" />
                Servicios de AWS
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Explora los {services.length} servicios de AWS incluidos en el examen {certification.code}
              </p>
            </div>
            <Badge variant="info" size="lg">
              {services.length} servicios
            </Badge>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar servicios por nombre, descripción..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === null
                  ? "bg-orange-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              Todos ({services.length})
            </button>
            {categories.map((category) => {
              const config = getCategory(category);
              const count = servicesByCategory[category].length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === category
                      ? "bg-orange-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                  }`}
                >
                  <span>{config.icon}</span>
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 border-0">
            <CardContent className="py-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.slice(0, 4).map((category) => {
                  const config = getCategory(category);
                  return (
                    <div key={category} className="text-center">
                      <div className="text-2xl mb-1">{config.icon}</div>
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        {servicesByCategory[category].length}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 line-clamp-1">
                        {category}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Services List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="space-y-8"
        >
          {filteredServices.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Filter className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No se encontraron servicios
                </h3>
                <p className="text-gray-500">
                  Intenta con otros términos de búsqueda o elimina los filtros
                </p>
              </CardContent>
            </Card>
          ) : (
            Object.entries(groupedServices).map(([category, categoryServices], categoryIndex) => {
              const config = getCategory(category);
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.05 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${config.bgColor} flex items-center justify-center text-xl`}>
                      {config.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {category}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {categoryServices.length} servicios
                      </p>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid gap-4 md:grid-cols-2">
                    {categoryServices.map((service) => (
                      <Card
                        key={service.id}
                        className="overflow-hidden"
                      >
                        {/* Service Header */}
                        <button
                          onClick={() => toggleService(service.id)}
                          className="cursor-pointer w-full p-4 flex items-center justify-between hover:bg-slate-50/80 dark:hover:bg-gray-800 transition-colors text-left"
                        >
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                              {service.shortName || service.name}
                            </h3>
                            <p className="text-sm text-gray-500 truncate">
                              {service.name !== service.shortName && service.shortName ? service.name : service.description.slice(0, 60) + "..."}
                            </p>
                          </div>
                          {expandedServices.includes(service.id) ? (
                            <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 ml-2" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 ml-2" />
                          )}
                        </button>

                        {/* Service Details */}
                        {expandedServices.includes(service.id) && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.15 }}
                          >
                            <div className="px-4 pb-4 space-y-4 border-t dark:border-gray-700 pt-4">
                              {/* Description */}
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {service.description}
                              </p>

                              {/* Key Features */}
                              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-medium mb-3">
                                  <Zap className="h-4 w-4" />
                                  Características Clave
                                </div>
                                <ul className="space-y-1.5">
                                  {service.keyFeatures.map((feature, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                                    >
                                      <span className="text-blue-500 mt-1">•</span>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Use Cases */}
                              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                                <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-medium mb-3">
                                  <Target className="h-4 w-4" />
                                  Casos de Uso
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {service.useCases.map((useCase, i) => (
                                    <Badge key={i} variant="outline" size="sm">
                                      {useCase}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Pricing */}
                              {service.pricing && (
                                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4">
                                  <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-medium mb-2">
                                    <DollarSign className="h-4 w-4" />
                                    Modelo de Precios
                                  </div>
                                  <p className="text-sm text-gray-700 dark:text-gray-300">
                                    {service.pricing}
                                  </p>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </Card>
                    ))}
                  </div>
                </motion.div>
              );
            })
          )}
        </motion.div>
      </div>
    </div>
  );
}
