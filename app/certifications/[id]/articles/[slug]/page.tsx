"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import {
  ArrowLeft,
  Clock,
  Tag,
  BookOpen,
  CheckCircle2,
  FileQuestion,
  ChevronRight,
  Calendar,
  Lightbulb,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Import data
import { getArticleBySlug, allArticles } from "@/data/certifications/aws-clf-c02/articles";
import { allDomains } from "@/data/certifications/aws-clf-c02";
import { getArticleSections, getArticleIntroduction, getArticleKeyPoints } from "@/types";

interface ArticlePageProps {
  params: Promise<{ id: string; slug: string }>;
}

const domainColors: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  domain1: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-200 dark:border-blue-800",
    accent: "blue",
  },
  domain2: {
    bg: "bg-rose-50 dark:bg-rose-900/20",
    text: "text-rose-700 dark:text-rose-300",
    border: "border-rose-200 dark:border-rose-800",
    accent: "rose",
  },
  domain3: {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    text: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-200 dark:border-emerald-800",
    accent: "emerald",
  },
  domain4: {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    text: "text-amber-700 dark:text-amber-300",
    border: "border-amber-200 dark:border-amber-800",
    accent: "amber",
  },
};

export default function ArticlePage({ params }: ArticlePageProps) {
  const { id, slug } = use(params);

  // Only support AWS CLF-C02 for now
  if (id !== "aws-clf-c02") {
    notFound();
  }

  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const domain = allDomains.find((d) => d.id === article.domainId);
  const colors = domainColors[article.domainId];

  // Get related articles (same domain, different article)
  const relatedArticles = allArticles
    .filter((a) => a.domainId === article.domainId && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className={`${colors.bg} py-10 border-b ${colors.border}`}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/certifications/${id}/articles`}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a artículos
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge
                variant="outline"
                className={`${colors.bg} ${colors.text} ${colors.border}`}
              >
                {domain?.name || article.domainId}
              </Badge>
              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readingTime} min de lectura
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.lastUpdated}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {article.title}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {article.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              {/* Introduction */}
              {getArticleIntroduction(article) && (
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {getArticleIntroduction(article)}
                  </p>
                </div>
              )}

              {/* Sections */}
              {getArticleSections(article).map((section, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className={`w-8 h-8 rounded-lg ${colors.bg} ${colors.text} flex items-center justify-center text-sm font-bold`}>
                        {index + 1}
                      </span>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <ArticleContent content={section.content} />
                    </div>

                    {section.code && (
                      <div className="mt-4 rounded-lg bg-gray-900 dark:bg-gray-950 p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
                          <code>{section.code}</code>
                        </pre>
                      </div>
                    )}

                    {section.note && (
                      <div className="mt-4 flex gap-3 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                        <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-800 dark:text-amber-200">
                          {section.note}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}

              {/* Key Takeaways */}
              {getArticleKeyPoints(article).length > 0 && (
                <Card className="border-2 border-emerald-200 dark:border-emerald-800">
                  <CardHeader className="bg-emerald-50 dark:bg-emerald-900/20">
                    <CardTitle className="text-xl flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                      <CheckCircle2 className="h-6 w-6" />
                      Puntos Clave para el Examen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {getArticleKeyPoints(article).map((takeaway, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Table of Contents */}
              <Card className="sticky top-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Contenido
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <nav className="space-y-1">
                    {getArticleSections(article).map((section, index) => (
                      <a
                        key={index}
                        href={`#section-${index}`}
                        className="block text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 py-1.5 border-l-2 border-transparent hover:border-indigo-500 pl-3 transition-colors"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Related Questions */}
              {(article.relatedQuestions?.length ?? 0) > 0 && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <FileQuestion className="h-4 w-4" />
                      Preguntas Relacionadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {article.relatedQuestions?.length ?? 0} pregunta(s) del simulador
                      cubren este tema.
                    </p>
                    <Link href={`/certifications/${id}/simulator`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Practicar en Simulador
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">
                      Artículos Relacionados
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.id}
                        href={`/certifications/${id}/articles/${related.slug}`}
                        className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                          {related.title}
                        </h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3" />
                          {related.readingTime} min
                        </span>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href={`/certifications/${id}/articles`}>
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Todos los artículos
              </Button>
            </Link>
            <Link href={`/certifications/${id}/simulator`}>
              <Button>
                Practicar
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component to render markdown-like content
function ArticleContent({ content }: { content: string }) {
  // Simple parsing for tables, code blocks, and text formatting
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];

  const processLine = (line: string, index: number) => {
    // Check for code block
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <div key={`code-${index}`} className="my-4 rounded-lg bg-gray-900 dark:bg-gray-950 p-4 overflow-x-auto">
            <pre className="text-sm text-gray-100 font-mono whitespace-pre">
              {codeLines.join("\n")}
            </pre>
          </div>
        );
        codeLines = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      return;
    }

    // Check for table row
    if (line.includes("|") && !line.trim().startsWith("```")) {
      if (!inTable) inTable = true;
      const cells = line
        .split("|")
        .map((cell) => cell.trim())
        .filter((cell) => cell && !cell.match(/^[-:]+$/));
      if (cells.length > 0 && !line.match(/^\|?[\s-:|]+\|?$/)) {
        tableRows.push(cells);
      }
      return;
    } else if (inTable) {
      // End of table
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-${index}`} className="my-4 overflow-x-auto">
            <table className="min-w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  {tableRows[0].map((cell, i) => (
                    <th
                      key={i}
                      className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-gray-300 dark:border-gray-600 px-3 py-2"
                      >
                        {formatText(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      tableRows = [];
      inTable = false;
    }

    // Regular line
    if (line.trim()) {
      elements.push(
        <p key={`p-${index}`} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          {formatText(line)}
        </p>
      );
    }
  };

  lines.forEach(processLine);

  // Handle any remaining table or code block
  if (inTable && tableRows.length > 0) {
    elements.push(
      <div key="table-final" className="my-4 overflow-x-auto">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              {tableRows[0].map((cell, i) => (
                <th
                  key={i}
                  className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border border-gray-300 dark:border-gray-600 px-3 py-2"
                  >
                    {formatText(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (inCodeBlock && codeLines.length > 0) {
    elements.push(
      <div key="code-final" className="my-4 rounded-lg bg-gray-900 dark:bg-gray-950 p-4 overflow-x-auto">
        <pre className="text-sm text-gray-100 font-mono whitespace-pre">
          {codeLines.join("\n")}
        </pre>
      </div>
    );
  }

  return <>{elements}</>;
}

// Format inline text (bold, italic, etc.)
function formatText(text: string): React.ReactNode {
  // Handle **bold**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-gray-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
