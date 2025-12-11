"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Heart, AlertTriangle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-slate-50/50 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
      {/* Disclaimer Banner */}
      <div className="bg-amber-50/80 dark:bg-amber-900/20 border-b border-amber-200/60 dark:border-amber-800/50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-center text-sm text-amber-800 dark:text-amber-200">
            <AlertTriangle className="h-4 w-4 flex-shrink-0" />
            <p>
              <strong>Proyecto comunitario.</strong> No afiliado con AWS, Microsoft, Google ni ninguna empresa.
              {" "}
              <Link href="/disclaimer" className="underline hover:no-underline">
                Ver disclaimer completo
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="AprobaYa"
                width={450}
                height={120}
                className="h-32 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              La forma más cute y efectiva de prepararte para tus certificaciones de software.
              Open source y gratuito para siempre.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Link
                href="https://github.com/sespinosav/aprobaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Plataforma</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/certifications"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400"
                >
                  Certificaciones
                </Link>
              </li>
              <li>
                <Link
                  href="/simulator"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400"
                >
                  Simulador
                </Link>
              </li>
              <li>
                <Link
                  href="/progress"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400"
                >
                  Mi Progreso
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Comunidad</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="https://github.com/sespinosav/aprobaya"
                  target="_blank"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400"
                >
                  Contribuir
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/sespinosav/aprobaya/issues"
                  target="_blank"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400"
                >
                  Reportar bug
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-slate-200/60 pt-6 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 AprobaYa. Licencia CC BY-NC-SA 4.0
            </p>
            <p className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
              Hecho con <Heart className="h-4 w-4 text-red-500" /> por la comunidad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
