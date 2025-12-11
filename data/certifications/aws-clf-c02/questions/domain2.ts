import { Question } from "@/types";

// Dominio 2: Seguridad y cumplimiento (30%)
export const domain2Questions: Question[] = [
  {
    id: "clf-006",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "easy",
    question:
      "Según el modelo de responsabilidad compartida de AWS, ¿cuál de las siguientes es responsabilidad del CLIENTE?",
    options: [
      { id: "a", text: "Seguridad física de los data centers" },
      { id: "b", text: "Mantenimiento del hardware de red" },
      { id: "c", text: "Configuración de grupos de seguridad" },
      { id: "d", text: "Parcheo del hipervisor" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "La configuración de grupos de seguridad (Security Groups) es responsabilidad del cliente. Los grupos de seguridad actúan como firewall virtual a nivel de instancia, y el cliente debe configurar las reglas de entrada y salida para proteger sus recursos.",
      whyOthersWrong: {
        a: "La seguridad física de los data centers es responsabilidad exclusiva de AWS. Los clientes no tienen acceso físico a las instalaciones de AWS.",
        b: "El mantenimiento del hardware de red (routers, switches, etc.) es responsabilidad de AWS como parte de la infraestructura física.",
        d: "El parcheo del hipervisor que ejecuta las instancias EC2 es responsabilidad de AWS. El cliente es responsable del parcheo del sistema operativo guest.",
      },
    },
    tags: ["responsabilidad-compartida", "security-groups", "seguridad"],
  },
  {
    id: "clf-007",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué servicio de AWS permite gestionar usuarios, grupos, roles y sus permisos de acceso a recursos de AWS?",
    options: [
      { id: "a", text: "Amazon Cognito" },
      { id: "b", text: "AWS IAM" },
      { id: "c", text: "AWS Shield" },
      { id: "d", text: "Amazon GuardDuty" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Identity and Access Management (IAM) es el servicio para gestionar identidades y acceso en AWS. Permite crear usuarios, grupos, roles y políticas que definen quién puede acceder a qué recursos y qué acciones pueden realizar.",
      whyOthersWrong: {
        a: "Amazon Cognito es para gestionar la identidad de usuarios de aplicaciones (sign-up, sign-in para apps web/móviles), no para el acceso a recursos de AWS.",
        c: "AWS Shield es un servicio de protección contra ataques DDoS, no gestiona identidades ni permisos.",
        d: "Amazon GuardDuty es un servicio de detección de amenazas que analiza logs para identificar actividad maliciosa, no gestiona permisos.",
      },
    },
    tags: ["iam", "usuarios", "permisos", "seguridad"],
  },
  {
    id: "clf-008",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "¿Cuál es la MEJOR práctica para proteger la cuenta root de AWS?",
    options: [
      { id: "a", text: "Usar la cuenta root para tareas administrativas diarias" },
      { id: "b", text: "Compartir las credenciales root con los administradores del equipo" },
      { id: "c", text: "Habilitar MFA y no usar la cuenta root para tareas diarias" },
      { id: "d", text: "Crear access keys para la cuenta root para automatización" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "La mejor práctica es habilitar Multi-Factor Authentication (MFA) en la cuenta root y evitar usarla para tareas diarias. Debe crear usuarios IAM con los permisos necesarios para operaciones regulares. La cuenta root solo debe usarse para tareas que la requieren específicamente, como cambiar la información de la cuenta.",
      whyOthersWrong: {
        a: "Nunca use la cuenta root para tareas diarias. Tiene acceso completo y sin restricciones a todos los recursos, lo que representa un riesgo de seguridad significativo.",
        b: "Nunca comparta las credenciales root. Cada persona debe tener su propio usuario IAM para trazabilidad y seguridad.",
        d: "AWS recomienda NO crear access keys para la cuenta root. Si existen, deben eliminarse y usar roles IAM o usuarios con permisos limitados.",
      },
    },
    tags: ["root-account", "mfa", "mejores-practicas", "seguridad"],
  },
  {
    id: "clf-009",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa necesita proteger su aplicación web contra ataques comunes como SQL injection y cross-site scripting (XSS). ¿Qué servicio de AWS debería usar?",
    options: [
      { id: "a", text: "AWS Shield" },
      { id: "b", text: "AWS WAF" },
      { id: "c", text: "Amazon Inspector" },
      { id: "d", text: "AWS Secrets Manager" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS WAF (Web Application Firewall) protege aplicaciones web contra exploits comunes como SQL injection, XSS, y otros ataques de capa 7 (aplicación). Permite crear reglas personalizadas o usar reglas administradas para filtrar tráfico malicioso.",
      whyOthersWrong: {
        a: "AWS Shield protege contra ataques DDoS (Distributed Denial of Service) en las capas 3 y 4 (red y transporte), no contra ataques de aplicación como SQL injection o XSS.",
        c: "Amazon Inspector es un servicio de evaluación de vulnerabilidades que escanea instancias EC2 y contenedores para encontrar vulnerabilidades de software, pero no bloquea ataques en tiempo real.",
        d: "AWS Secrets Manager almacena y rota secretos como credenciales de bases de datos y API keys. No proporciona protección contra ataques web.",
      },
    },
    tags: ["waf", "seguridad-aplicaciones", "sql-injection", "xss"],
  },
  {
    id: "clf-010",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué servicio de AWS proporciona informes de auditoría y certificaciones de cumplimiento que demuestran el cumplimiento de AWS con estándares como SOC, PCI-DSS e HIPAA?",
    options: [
      { id: "a", text: "AWS Trusted Advisor" },
      { id: "b", text: "AWS Config" },
      { id: "c", text: "AWS Artifact" },
      { id: "d", text: "AWS CloudTrail" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "AWS Artifact proporciona acceso bajo demanda a informes de seguridad y cumplimiento de AWS, así como a acuerdos en línea. Incluye informes SOC, PCI-DSS, ISO, HIPAA y otros que demuestran el cumplimiento de AWS con diversos estándares.",
      whyOthersWrong: {
        a: "AWS Trusted Advisor proporciona recomendaciones de mejores prácticas en categorías como costos, seguridad, rendimiento, pero no proporciona informes de cumplimiento.",
        b: "AWS Config audita y evalúa las configuraciones de sus recursos AWS para cumplimiento, pero no proporciona los informes de certificación de AWS.",
        d: "AWS CloudTrail registra las llamadas a la API de AWS para auditoría, pero no proporciona los informes de cumplimiento y certificaciones de AWS.",
      },
    },
    tags: ["artifact", "cumplimiento", "compliance", "soc", "pci-dss"],
  },
  {
    id: "clf-011",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Cuáles de las siguientes son responsabilidades de AWS según el modelo de responsabilidad compartida? (Seleccione DOS respuestas)",
    options: [
      { id: "a", text: "Cifrado de datos del cliente en reposo" },
      { id: "b", text: "Seguridad física de los data centers" },
      { id: "c", text: "Gestión de parches del sistema operativo en EC2" },
      { id: "d", text: "Mantenimiento de la infraestructura de virtualización" },
      { id: "e", text: "Configuración de Network ACLs" },
    ],
    correctAnswers: ["b", "d"],
    explanation: {
      correct:
        "AWS es responsable de: 1) La seguridad física de los data centers, incluyendo acceso biométrico, vigilancia 24/7, y controles ambientales. 2) El mantenimiento de la infraestructura de virtualización, incluyendo los hipervisores que ejecutan las instancias EC2.",
      whyOthersWrong: {
        a: "El cifrado de datos del cliente es responsabilidad del cliente. AWS proporciona las herramientas (KMS, cifrado de S3, EBS, RDS), pero el cliente decide qué cifrar y cómo.",
        c: "La gestión de parches del sistema operativo guest en EC2 es responsabilidad del cliente. AWS parchea el hipervisor subyacente, no el SO de las instancias.",
        e: "La configuración de Network ACLs es responsabilidad del cliente. AWS proporciona el servicio VPC, pero el cliente configura las reglas de tráfico.",
      },
    },
    tags: ["responsabilidad-compartida", "aws-responsabilidad", "seguridad-fisica"],
  },
  {
    id: "clf-012",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS detecta automáticamente comportamientos potencialmente maliciosos o no autorizados analizando eventos de VPC Flow Logs, CloudTrail y DNS?",
    options: [
      { id: "a", text: "AWS Inspector" },
      { id: "b", text: "AWS Macie" },
      { id: "c", text: "Amazon GuardDuty" },
      { id: "d", text: "AWS Security Hub" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Amazon GuardDuty es un servicio de detección de amenazas que analiza continuamente VPC Flow Logs, CloudTrail logs y DNS logs usando machine learning para identificar actividad maliciosa como reconocimiento, compromiso de instancias, exfiltración de datos y cuentas comprometidas.",
      whyOthersWrong: {
        a: "AWS Inspector evalúa la seguridad de las instancias EC2 escaneando vulnerabilidades de software y desviaciones de mejores prácticas, pero no analiza logs de red o API.",
        b: "AWS Macie descubre y protege datos sensibles almacenados en S3, como información personal identificable (PII). No analiza logs de red o actividad de API.",
        d: "AWS Security Hub agrega hallazgos de seguridad de múltiples servicios (incluyendo GuardDuty) en un solo lugar, pero no realiza la detección por sí mismo.",
      },
    },
    tags: ["guardduty", "deteccion-amenazas", "machine-learning", "logs"],
  },
];

export default domain2Questions;
