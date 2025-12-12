"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  Target,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Play,
  Pause,
  RotateCcw,
  Flag,
  BookOpen,
  Zap,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useModal } from "@/components/ui/modal";

// Import data
import {
  awsCloudPractitionerInfo,
  allDomains,
  getRandomQuestions,
  getQuestionsByDomain,
  getQuestionStats,
} from "@/data/certifications/aws-clf-c02";

import { ExamConfig, ExamState, Question, ExamResult, QuestionResult } from "@/types";
import { shuffleArray, formatTime, calculateScore, getScoreColor, generateId } from "@/lib/utils";
import { saveExamResult } from "@/lib/storage";

type SimulatorView = "config" | "exam" | "results";

export default function SimulatorPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const { showModal } = useModal();

  const [view, setView] = useState<SimulatorView>("config");
  const [config, setConfig] = useState<ExamConfig>({
    certificationId: id,
    mode: "exam",
    questionCount: 20,
    timeLimit: 30 * 60, // 30 minutes
    shuffleQuestions: true,
    shuffleOptions: true,
  });
  const [examState, setExamState] = useState<ExamState | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);

  const questionStats = getQuestionStats();

  // Timer effect
  useEffect(() => {
    if (view !== "exam" || isPaused || !examState || examState.isFinished) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [view, isPaused, examState]);

  const startExam = useCallback(() => {
    let questions: Question[];

    if (config.domainId) {
      questions = getQuestionsByDomain(config.domainId);
    } else {
      questions = getRandomQuestions(config.questionCount);
    }

    if (config.shuffleQuestions) {
      questions = shuffleArray(questions);
    }

    questions = questions.slice(0, config.questionCount);

    if (config.shuffleOptions) {
      questions = questions.map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }));
    }

    setExamState({
      config,
      questions,
      currentIndex: 0,
      answers: {},
      startTime: Date.now(),
      isFinished: false,
    });

    setTimeRemaining(config.timeLimit);
    setView("exam");
    setShowExplanation(false);
  }, [config]);

  const selectAnswer = (optionId: string) => {
    if (!examState || examState.isFinished) return;

    const currentQuestion = examState.questions[examState.currentIndex];
    const currentAnswers = examState.answers[currentQuestion.id] || [];

    let newAnswers: string[];

    if (currentQuestion.type === "single") {
      newAnswers = [optionId];
    } else {
      if (currentAnswers.includes(optionId)) {
        newAnswers = currentAnswers.filter((a) => a !== optionId);
      } else {
        newAnswers = [...currentAnswers, optionId];
      }
    }

    setExamState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        answers: {
          ...prev.answers,
          [currentQuestion.id]: newAnswers,
        },
      };
    });
  };

  const goToQuestion = (index: number) => {
    if (!examState) return;
    setShowExplanation(false);
    setExamState((prev) => {
      if (!prev) return prev;
      return { ...prev, currentIndex: index };
    });
  };

  const nextQuestion = () => {
    if (!examState) return;
    if (examState.currentIndex < examState.questions.length - 1) {
      goToQuestion(examState.currentIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (!examState) return;
    if (examState.currentIndex > 0) {
      goToQuestion(examState.currentIndex - 1);
    }
  };

  const finishExam = useCallback(() => {
    if (!examState) return;

    const endTime = Date.now();
    const timeSpent = Math.floor((endTime - examState.startTime) / 1000);

    // Calculate results
    const questionResults: QuestionResult[] = examState.questions.map((q) => {
      const userAnswers = examState.answers[q.id] || [];
      const isCorrect =
        userAnswers.length === q.correctAnswers.length &&
        userAnswers.every((a) => q.correctAnswers.includes(a));

      return {
        questionId: q.id,
        userAnswers,
        correctAnswers: q.correctAnswers,
        isCorrect,
      };
    });

    const correctCount = questionResults.filter((r) => r.isCorrect).length;

    // Calculate domain scores
    const domainScores: Record<string, { correct: number; total: number }> = {};
    examState.questions.forEach((q, i) => {
      if (!domainScores[q.domainId]) {
        domainScores[q.domainId] = { correct: 0, total: 0 };
      }
      domainScores[q.domainId].total++;
      if (questionResults[i].isCorrect) {
        domainScores[q.domainId].correct++;
      }
    });

    const result: ExamResult = {
      id: generateId(),
      certificationId: id,
      date: new Date().toISOString(),
      mode: config.mode,
      domainId: config.domainId,
      score: calculateScore(correctCount, examState.questions.length),
      totalQuestions: examState.questions.length,
      correctAnswers: correctCount,
      timeSpent,
      domainScores,
      questionResults,
    };

    // Save to localStorage
    saveExamResult(id, result);

    setExamResult(result);
    setExamState((prev) => {
      if (!prev) return prev;
      return { ...prev, isFinished: true, endTime };
    });
    setView("results");
  }, [examState, config, id]);

  const resetExam = () => {
    setView("config");
    setExamState(null);
    setExamResult(null);
    setTimeRemaining(0);
    setIsPaused(false);
    setShowExplanation(false);
  };

  // Config View
  if (view === "config") {
    return (
      <div className="min-h-screen py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
              Volver a {awsCloudPractitionerInfo.shortName}
            </Link>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Target className="h-8 w-8 text-purple-600" />
              Simulador de Examen
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Configura tu examen de práctica
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Configuración del Examen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Mode Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Modo de práctica
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "study", label: "Estudio", icon: BookOpen, desc: "Sin timer, ver respuestas" },
                      { value: "exam", label: "Examen", icon: Target, desc: "Con timer, resultado al final" },
                      { value: "domain", label: "Por dominio", icon: Zap, desc: "Practica un dominio" },
                    ].map((mode) => (
                      <button
                        key={mode.value}
                        onClick={() => setConfig((prev) => ({ ...prev, mode: mode.value as any }))}
                        className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                          config.mode === mode.value
                            ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                            : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                        }`}
                      >
                        <mode.icon className={`h-6 w-6 mb-2 ${
                          config.mode === mode.value ? "text-purple-600" : "text-gray-400"
                        }`} />
                        <div className="font-medium text-gray-900 dark:text-white">
                          {mode.label}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{mode.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Domain Selection (if mode is domain) */}
                {config.mode === "domain" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Selecciona un dominio
                    </label>
                    <div className="space-y-2">
                      {allDomains.map((domain, i) => (
                        <button
                          key={domain.id}
                          onClick={() => setConfig((prev) => ({ ...prev, domainId: domain.id }))}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex items-center justify-between ${
                            config.domainId === domain.id
                              ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                              : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-orange-50/80 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 font-bold">
                              {i + 1}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 dark:text-white">
                                {domain.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {questionStats.byDomain[domain.id as keyof typeof questionStats.byDomain] || 0} preguntas
                              </div>
                            </div>
                          </div>
                          <Badge variant="outline">{domain.weight}%</Badge>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Question Count */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Número de preguntas
                  </label>
                  <div className="flex gap-2">
                    {[10, 20, 30, 50, 65].map((count) => (
                      <button
                        key={count}
                        onClick={() => setConfig((prev) => ({ ...prev, questionCount: count }))}
                        className={`flex-1 py-3 rounded-xl border-2 font-medium transition-all cursor-pointer ${
                          config.questionCount === count
                            ? "border-purple-500 bg-purple-50 text-purple-600 dark:bg-purple-900/20"
                            : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Limit */}
                {config.mode !== "study" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Límite de tiempo
                    </label>
                    <div className="flex gap-2">
                      {[
                        { value: 15 * 60, label: "15 min" },
                        { value: 30 * 60, label: "30 min" },
                        { value: 45 * 60, label: "45 min" },
                        { value: 60 * 60, label: "60 min" },
                        { value: 90 * 60, label: "90 min" },
                      ].map((time) => (
                        <button
                          key={time.value}
                          onClick={() => setConfig((prev) => ({ ...prev, timeLimit: time.value }))}
                          className={`flex-1 py-3 rounded-xl border-2 font-medium transition-all cursor-pointer ${
                            config.timeLimit === time.value
                              ? "border-purple-500 bg-purple-50 text-purple-600 dark:bg-purple-900/20"
                              : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                          }`}
                        >
                          {time.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Start Button */}
                <div className="pt-4">
                  <Button
                    size="xl"
                    className="w-full"
                    onClick={startExam}
                    disabled={config.mode === "domain" && !config.domainId}
                  >
                    <Play className="h-5 w-5" />
                    Comenzar Examen
                  </Button>
                </div>

                {/* Info */}
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 text-sm text-amber-800 dark:text-amber-200">
                  <AlertCircle className="h-4 w-4 inline mr-2" />
                  {config.mode === "study"
                    ? "En modo estudio puedes ver las respuestas correctas inmediatamente."
                    : "El examen se enviará automáticamente cuando se acabe el tiempo."}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  // Exam View
  if (view === "exam" && examState) {
    const currentQuestion = examState.questions[examState.currentIndex];
    const currentAnswers = examState.answers[currentQuestion.id] || [];
    const answeredCount = Object.keys(examState.answers).length;
    const progress = ((examState.currentIndex + 1) / examState.questions.length) * 100;

    return (
      <div className="min-h-screen py-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  showModal({
                    type: "warning",
                    title: "¿Salir del examen?",
                    message: "Perderás todo tu progreso actual. Esta acción no se puede deshacer.",
                    confirmText: "Sí, salir",
                    cancelText: "Continuar",
                    onConfirm: resetExam,
                  });
                }}
              >
                <ArrowLeft className="h-4 w-4" />
                Salir
              </Button>

              <div className="flex items-center gap-2">
                <Progress value={progress} className="w-32" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {examState.currentIndex + 1}/{examState.questions.length}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {config.mode !== "study" && (
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  timeRemaining < 300 ? "bg-red-50/80 text-red-600" : "bg-slate-100/80 dark:bg-gray-800"
                }`}>
                  <Clock className="h-4 w-4" />
                  <span className="font-mono font-bold">
                    {formatTime(timeRemaining)}
                  </span>
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="ml-2 hover:opacity-70"
                  >
                    {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                  </button>
                </div>
              )}

              <Button
                variant="success"
                size="sm"
                onClick={() => {
                  showModal({
                    type: "confirm",
                    title: "Terminar examen",
                    message: "¿Estás seguro de que quieres terminar el examen? No podrás cambiar tus respuestas después.",
                    confirmText: "Sí, terminar",
                    cancelText: "Continuar",
                    onConfirm: finishExam,
                  });
                }}
              >
                <Flag className="h-4 w-4" />
                Terminar
              </Button>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Question Navigator */}
            <div className="order-2 lg:order-1">
              <Card className="sticky top-4">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Navegación</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-5 gap-2">
                    {examState.questions.map((q, i) => {
                      const isAnswered = !!examState.answers[q.id]?.length;
                      const isCurrent = i === examState.currentIndex;

                      return (
                        <button
                          key={q.id}
                          onClick={() => goToQuestion(i)}
                          className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                            isCurrent
                              ? "bg-purple-600 text-white"
                              : isAnswered
                              ? "bg-emerald-50/80 text-emerald-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-slate-100/80 text-slate-600 dark:bg-gray-800 dark:text-gray-400"
                          }`}
                        >
                          {i + 1}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-4 pt-4 border-t dark:border-gray-700 text-xs text-gray-500 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-emerald-50/80 border border-emerald-200 dark:bg-green-900/30 dark:border-green-700" />
                      <span>Respondidas: {answeredCount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-slate-100/80 border border-slate-200 dark:bg-gray-800 dark:border-gray-700" />
                      <span>Sin responder: {examState.questions.length - answeredCount}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Question Content */}
            <div className="order-1 lg:order-2 lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" size="sm" className="text-xs">
                              {allDomains.find(d => d.id === currentQuestion.domainId)?.name || currentQuestion.domainId}
                            </Badge>
                            <Badge
                              variant={
                                currentQuestion.difficulty === "easy"
                                  ? "success"
                                  : currentQuestion.difficulty === "medium"
                                  ? "warning"
                                  : "danger"
                              }
                              size="sm"
                              className="text-xs"
                            >
                              {currentQuestion.difficulty === "easy"
                                ? "Fácil"
                                : currentQuestion.difficulty === "medium"
                                ? "Media"
                                : "Difícil"}
                            </Badge>
                            <Badge variant="info" size="sm" className="text-xs sm:hidden">
                              {currentQuestion.type === "single"
                                ? "Única"
                                : `Selecciona ${currentQuestion.correctAnswers.length}`}
                            </Badge>
                          </div>
                          <CardTitle className="text-base sm:text-lg">
                            Pregunta {examState.currentIndex + 1}
                          </CardTitle>
                        </div>
                        <Badge variant="info" size="sm" className="hidden sm:flex shrink-0">
                          {currentQuestion.type === "single"
                            ? "Respuesta única"
                            : `Selecciona ${currentQuestion.correctAnswers.length}`}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-900 dark:text-white text-lg leading-relaxed">
                        {currentQuestion.question}
                      </p>

                      {/* Options */}
                      <div className="space-y-3">
                        {currentQuestion.options.map((option) => {
                          const isSelected = currentAnswers.includes(option.id);
                          const isCorrect = showExplanation && currentQuestion.correctAnswers.includes(option.id);
                          const isWrong = showExplanation && isSelected && !isCorrect;

                          return (
                            <button
                              key={option.id}
                              onClick={() => !showExplanation && selectAnswer(option.id)}
                              disabled={showExplanation}
                              className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-start gap-3 ${
                                isCorrect
                                  ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                                  : isWrong
                                  ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                                  : isSelected
                                  ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                                  : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                              }`}
                            >
                              <div
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                  isCorrect
                                    ? "border-green-500 bg-green-500 text-white"
                                    : isWrong
                                    ? "border-red-500 bg-red-500 text-white"
                                    : isSelected
                                    ? "border-purple-500 bg-purple-500 text-white"
                                    : "border-gray-300"
                                }`}
                              >
                                {isCorrect && <CheckCircle2 className="h-4 w-4" />}
                                {isWrong && <XCircle className="h-4 w-4" />}
                                {!showExplanation && isSelected && <CheckCircle2 className="h-4 w-4" />}
                              </div>
                              <div>
                                <span className="font-medium mr-2">{option.id.toUpperCase()}.</span>
                                {option.text}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation (Study Mode) */}
                      {config.mode === "study" && (
                        <div>
                          {!showExplanation ? (
                            <Button
                              variant="outline"
                              onClick={() => setShowExplanation(true)}
                              disabled={!currentAnswers.length}
                            >
                              Ver Respuesta
                            </Button>
                          ) : (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="space-y-4"
                            >
                              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                                <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-medium mb-2">
                                  <CheckCircle2 className="h-5 w-5" />
                                  Explicación
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                  {currentQuestion.explanation.correct}
                                </p>
                              </div>

                              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4">
                                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-medium mb-2">
                                  <AlertCircle className="h-5 w-5" />
                                  ¿Por qué las otras opciones son incorrectas?
                                </div>
                                <div className="space-y-2">
                                  {Object.entries(currentQuestion.explanation.whyOthersWrong).map(
                                    ([key, reason]) => (
                                      <div key={key} className="text-sm">
                                        <span className="font-medium text-gray-700 dark:text-gray-300">
                                          {key.toUpperCase()}:
                                        </span>{" "}
                                        <span className="text-gray-600 dark:text-gray-400">
                                          {reason}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      )}

                      {/* Navigation */}
                      <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
                        <Button
                          variant="outline"
                          onClick={previousQuestion}
                          disabled={examState.currentIndex === 0}
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Anterior
                        </Button>

                        {examState.currentIndex === examState.questions.length - 1 ? (
                          <Button
                            variant="success"
                            onClick={() => {
                              showModal({
                                type: "confirm",
                                title: "Terminar examen",
                                message: "¿Estás seguro de que quieres terminar el examen? No podrás cambiar tus respuestas después.",
                                confirmText: "Sí, terminar",
                                cancelText: "Continuar",
                                onConfirm: finishExam,
                              });
                            }}
                          >
                            Terminar Examen
                            <Flag className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button onClick={nextQuestion}>
                            Siguiente
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results View
  if (view === "results" && examResult && examState) {
    const passed = examResult.score >= 700;
    const scoreColor = getScoreColor(examResult.score);

    return (
      <div className="min-h-screen py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-8"
          >
            <div
              className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 ${
                passed ? "bg-emerald-50/80" : "bg-red-50/80"
              }`}
            >
              {passed ? (
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              ) : (
                <XCircle className="h-12 w-12 text-red-600" />
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {passed ? "¡Felicitaciones!" : "Sigue practicando"}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {passed
                ? "Has aprobado el examen de práctica"
                : "No te rindas, cada intento te acerca más a tu meta"}
            </p>
          </motion.div>

          {/* Score Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="mb-6">
              <CardContent className="py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className={`text-4xl font-bold ${scoreColor}`}>
                      {examResult.score}
                    </div>
                    <div className="text-sm text-gray-500">Puntaje (de 1000)</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      {examResult.correctAnswers}/{examResult.totalQuestions}
                    </div>
                    <div className="text-sm text-gray-500">Correctas</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      {Math.round((examResult.correctAnswers / examResult.totalQuestions) * 100)}%
                    </div>
                    <div className="text-sm text-gray-500">Porcentaje</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      {formatTime(examResult.timeSpent)}
                    </div>
                    <div className="text-sm text-gray-500">Tiempo</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Domain Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Resultados por Dominio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(examResult.domainScores).map(([domainId, score]) => {
                    const domain = allDomains.find((d) => d.id === domainId);
                    const percentage = Math.round((score.correct / score.total) * 100);

                    return (
                      <div key={domainId}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {domain?.name || domainId}
                          </span>
                          <span className="text-sm text-gray-500">
                            {score.correct}/{score.total} ({percentage}%)
                          </span>
                        </div>
                        <Progress
                          value={percentage}
                          variant={percentage >= 70 ? "success" : percentage >= 50 ? "warning" : "danger"}
                        />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Question Review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Revisión de Preguntas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {examResult.questionResults.map((result, i) => {
                    const question = examState.questions.find((q) => q.id === result.questionId);
                    if (!question) return null;

                    return (
                      <div
                        key={result.questionId}
                        className={`p-4 rounded-xl border ${
                          result.isCorrect
                            ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                            : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            {result.isCorrect ? (
                              <CheckCircle2 className="h-5 w-5 text-green-600" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-600" />
                            )}
                          </div>
                          <div className="flex-grow">
                            <div className="font-medium text-gray-900 dark:text-white mb-2">
                              {i + 1}. {question.question}
                            </div>
                            <div className="text-sm space-y-1">
                              <div className="text-gray-600 dark:text-gray-400">
                                Tu respuesta:{" "}
                                <span className={result.isCorrect ? "text-green-600" : "text-red-600"}>
                                  {result.userAnswers.join(", ").toUpperCase() || "Sin respuesta"}
                                </span>
                              </div>
                              {!result.isCorrect && (
                                <div className="text-green-600">
                                  Respuesta correcta: {result.correctAnswers.join(", ").toUpperCase()}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="outline" size="lg" onClick={resetExam}>
              <RotateCcw className="h-4 w-4" />
              Nuevo Examen
            </Button>
            <Link href={`/certifications/${id}/theory`}>
              <Button variant="outline" size="lg">
                <BookOpen className="h-4 w-4" />
                Estudiar Teoría
              </Button>
            </Link>
            <Link href={`/certifications/${id}`}>
              <Button size="lg">
                Volver al Inicio
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
}
