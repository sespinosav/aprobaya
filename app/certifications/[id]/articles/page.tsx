"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";
import { use, useEffect } from "react";
import {
  BookOpen,
  Clock,
  ArrowLeft,
  Search,
  Tag,
  FileText,
  ChevronRight,
  Filter,
} from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Import data
import {
  allArticles,
  articleStats,
  getArticlesByDomain,
  getArticleNormalizedDomain,
} from "@/data/certifications/aws-clf-c02/articles";
import { allDomains } from "@/data/certifications/aws-clf-c02";

interface ArticlesPageProps {
  params: Promise<{ id: string }>;
}

const domainColors: Record<string, { bg: string; text: string; border: string }> = {
  "domain-1": {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-200 dark:border-blue-800",
  },
  "domain-2": {
    bg: "bg-rose-50 dark:bg-rose-900/20",
    text: "text-rose-700 dark:text-rose-300",
    border: "border-rose-200 dark:border-rose-800",
  },
  "domain-3": {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    text: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-200 dark:border-emerald-800",
  },
  "domain-4": {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    text: "text-amber-700 dark:text-amber-300",
    border: "border-amber-200 dark:border-amber-800",
  },
};

const domainNames: Record<string, string> = {
  "domain-1": "Conceptos de la Nube",
  "domain-2": "Seguridad y Cumplimiento",
  "domain-3": "Tecnología y Servicios",
  "domain-4": "Facturación y Precios",
};

export default function ArticlesPage({ params }: ArticlesPageProps) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const domainFromUrl = searchParams.get("domain");

  // Only support AWS CLF-C02 for now
  if (id !== "aws-clf-c02") {
    notFound();
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<string | null>(domainFromUrl);

  // Update selectedDomain when URL changes
  useEffect(() => {
    if (domainFromUrl) {
      setSelectedDomain(domainFromUrl);
    }
  }, [domainFromUrl]);

  const filteredArticles = useMemo(() => {
    console.log("allArticles:", allArticles.length, allArticles);
    console.log("selectedDomain:", selectedDomain);
    
    let articles = selectedDomain
      ? getArticlesByDomain(selectedDomain)
      : allArticles;

    console.log("After domain filter:", articles.length);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      articles = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.shortDescription.toLowerCase().includes(query) ||
          article.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return articles;
  }, [searchQuery, selectedDomain]);

  const domains = allDomains;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/certifications/${id}`}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la certificación
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                  Artículos de Teoría
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  AWS Cloud Practitioner (CLF-C02)
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-6">
              Contenido completo organizado por dominios. Después de leer estos
              artículos, deberías poder responder cualquier pregunta del examen.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-indigo-500" />
                <span>{articleStats.total} artículos</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-indigo-500" />
                <span>~{articleStats.totalReadingTime} min de lectura total</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-indigo-500" />
                <span>4 dominios cubiertos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Domain Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedDomain === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDomain(null)}
              >
                <Filter className="h-4 w-4 mr-1" />
                Todos
              </Button>
              {domains.map((domain) => (
                <Button
                  key={domain.id}
                  variant={selectedDomain === domain.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDomain(domain.id)}
                >
                  D{domain.id.replace("domain", "")}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No se encontraron artículos
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Intenta con otros términos de búsqueda o cambia el filtro.
              </p>
            </div>
          ) : (
            <>
              {/* Group by domain if no domain filter */}
              {selectedDomain === null ? (
                <div className="space-y-12">
                  {domains.map((domain) => {
                    const domainArticles = filteredArticles.filter(
                      (a) => getArticleNormalizedDomain(a) === domain.id
                    );
                    if (domainArticles.length === 0) return null;

                    const colors = domainColors[domain.id];

                    return (
                      <motion.div
                        key={domain.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div
                            className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}
                          >
                            <span className={`font-bold ${colors.text}`}>
                              D{domain.id.replace("domain", "")}
                            </span>
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                              {domain.name}
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {domainArticles.length} artículos
                            </p>
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {domainArticles.map((article) => (
                            <ArticleCard
                              key={article.id}
                              article={article}
                              certId={id}
                            />
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      certId={id}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

interface ArticleCardProps {
  article: (typeof allArticles)[0];
  certId: string;
}

function ArticleCard({ article, certId }: ArticleCardProps) {
  const normalizedDomain = getArticleNormalizedDomain(article);
  const colors = domainColors[normalizedDomain] || domainColors.domain1;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/certifications/${certId}/articles/${article.slug}`}>
        <Card className="h-full hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-transparent hover:border-l-indigo-500">
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-2 mb-3">
              <Badge
                variant="outline"
                className={`${colors.bg} ${colors.text} ${colors.border} text-xs`}
              >
                {domainNames[normalizedDomain] || article.domainId}
              </Badge>
              <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {article.readingTime} min
              </span>
            </div>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {article.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {article.shortDescription}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
              {article.tags.length > 3 && (
                <span className="text-xs text-gray-400">
                  +{article.tags.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-medium">
              Leer artículo
              <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
