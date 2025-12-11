"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-50/80 dark:bg-amber-900/30 mb-4">
            <AlertTriangle className="h-8 w-8 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Información importante sobre este proyecto
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardContent className="py-8 prose dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Proyecto Comunitario Independiente
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                <strong>AprobaYa</strong> es un proyecto comunitario de código abierto creado con fines educativos. 
                Este proyecto <strong>NO está afiliado, asociado, autorizado, respaldado ni conectado de ninguna manera</strong> con:
              </p>
              
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
                <li>Amazon Web Services (AWS)</li>
                <li>Microsoft Corporation (Azure)</li>
                <li>Google LLC (Google Cloud Platform)</li>
                <li>Docker, Inc.</li>
                <li>The Linux Foundation (Kubernetes)</li>
                <li>Ninguna otra empresa propietaria de las certificaciones mencionadas</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                Sobre las Preguntas de Práctica
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Las preguntas de práctica disponibles en esta plataforma son:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
                <li>Creadas por la comunidad con fines educativos</li>
                <li>Basadas en la documentación oficial pública de cada proveedor</li>
                <li><strong>NO son preguntas reales de exámenes oficiales</strong></li>
                <li>Diseñadas para ayudar a entender conceptos, no para memorizar respuestas</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                Marcas Registradas
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Todos los nombres de productos, logos y marcas son propiedad de sus respectivos dueños. 
                El uso de estos nombres, logos y marcas no implica ninguna afiliación o respaldo.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
                <li>AWS, Amazon Web Services y sus logos son marcas registradas de Amazon.com, Inc.</li>
                <li>Microsoft, Azure y sus logos son marcas registradas de Microsoft Corporation</li>
                <li>Google Cloud y sus logos son marcas registradas de Google LLC</li>
                <li>Docker y sus logos son marcas registradas de Docker, Inc.</li>
                <li>Kubernetes y sus logos son marcas registradas de The Linux Foundation</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                Sin Garantías
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Este proyecto se proporciona &quot;tal cual&quot;, sin garantías de ningún tipo. 
                El uso de esta plataforma no garantiza aprobar ningún examen de certificación oficial. 
                Para preparación oficial, consulta los recursos proporcionados directamente por cada proveedor:
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <a href="https://aws.amazon.com/certification/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                    AWS Certification
                  </Button>
                </a>
                <a href="https://learn.microsoft.com/certifications/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                    Microsoft Learn
                  </Button>
                </a>
                <a href="https://cloud.google.com/certification" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                    Google Cloud
                  </Button>
                </a>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                Licencia
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Este proyecto está licenciado bajo <strong>Creative Commons BY-NC-SA 4.0</strong>. 
                Puedes ver el código fuente, contribuir y crear tu propia versión, siempre que no sea con fines comerciales 
                y mantengas la misma licencia.
              </p>
              <a href="https://github.com/sespinosav/aprobaya" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4" />
                  Ver en GitHub
                </Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
