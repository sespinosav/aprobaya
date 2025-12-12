import { Certification } from "@/types";

export const awsCloudPractitionerInfo: Certification = {
  id: "aws-clf-c02",
  name: "AWS Certified Cloud Practitioner",
  shortName: "Cloud Practitioner",
  code: "CLF-C02",
  provider: "aws",
  providerName: "Amazon Web Services",
  level: "foundational",
  description:
    "El examen AWS Certified Cloud Practitioner valida la comprensión general de la nube de AWS. Es ideal para personas que buscan demostrar conocimientos fundamentales de la nube de AWS.",
  icon: "☁️",
  color: "#FF9900",
  gradient: "from-orange-400 to-amber-500",
  examDetails: {
    duration: 90, // minutos
    questionCount: 65,
    passingScore: 700,
    maxScore: 1000,
    questionTypes: ["multiple-choice", "multiple-response"],
    languages: ["español", "inglés", "japonés", "coreano", "portugués", "chino"],
    examFee: 100, // USD
    retakePolicy: "14 días de espera entre intentos",
    validityPeriod: "3 años",
  },
  officialLink:
    "https://aws.amazon.com/es/certification/certified-cloud-practitioner/",
  examGuideLink:
    "https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf",
  domains: [
    {
      id: "domain-1",
      name: "Conceptos de la nube",
      weight: 24,
      description:
        "Definir la nube de AWS y su propuesta de valor. Identificar aspectos de la economía de la nube de AWS. Explicar los diferentes principios de diseño de arquitectura de la nube.",
      topics: [],
    },
    {
      id: "domain-2",
      name: "Seguridad y cumplimiento",
      weight: 30,
      description:
        "Comprender el modelo de responsabilidad compartida de AWS. Comprender los conceptos de seguridad y cumplimiento de la nube de AWS. Identificar las capacidades de administración de acceso de AWS. Identificar recursos para el soporte de seguridad.",
      topics: [],
    },
    {
      id: "domain-3",
      name: "Tecnología y servicios en la nube",
      weight: 34,
      description:
        "Definir métodos de implementación y operación en la nube de AWS. Definir la infraestructura global de AWS. Identificar los servicios de AWS. Identificar recursos para el soporte tecnológico.",
      topics: [],
    },
    {
      id: "domain-4",
      name: "Facturación, precios y soporte",
      weight: 12,
      description:
        "Comparar los modelos de precios de AWS. Comprender los recursos para el soporte de facturación. Identificar los recursos de soporte técnico de AWS.",
      topics: [],
    },
  ],
  totalQuestions: 200,
  lastUpdated: "2025-12-11",
  version: "1.0.0",
  contributors: ["AprobaYa Community"],
};

export default awsCloudPractitionerInfo;
