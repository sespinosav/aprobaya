import { Question } from "@/types";

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
  {
    id: "clf-039",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "easy",
    question:
      "Estás desarrollando una aplicación web y necesitas asegurar que los usuarios tengan los mínimos privilegios necesarios. ¿Qué concepto de seguridad satisface este requisito?",
    options: [
      { id: "a", text: "Rotación de contraseñas" },
      { id: "b", text: "Autenticación multifactor" },
      { id: "c", text: "Cifrado de datos" },
      { id: "d", text: "Principio de privilegio mínimo" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "El principio de privilegio mínimo (least privilege) significa otorgar solo los permisos necesarios para realizar una tarea. Este es un concepto fundamental de seguridad que ayuda a minimizar el daño potencial de errores o actores malintencionados.",
      whyOthersWrong: {
        a: "La rotación de contraseñas mejora la seguridad pero no se relaciona con los permisos mínimos necesarios.",
        b: "MFA agrega una capa extra de autenticación pero no define el alcance de los permisos.",
        c: "El cifrado protege los datos pero no controla el acceso basado en permisos mínimos.",
      },
    },
    tags: ["privilegio-minimo", "iam", "mejores-practicas", "seguridad"],
  },
  {
    id: "clf-040",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "Tu empresa quiere usar una aplicación web segura basada en HTTPS. ¿Qué servicio de AWS puede usarse para gestionar certificados SSL/TLS?",
    options: [
      { id: "a", text: "AWS CloudWatch" },
      { id: "b", text: "AWS Certificate Manager" },
      { id: "c", text: "AWS CloudTrail" },
      { id: "d", text: "Amazon Route 53" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Certificate Manager (ACM) gestiona, provisiona y despliega certificados SSL/TLS públicos y privados para usarlos con servicios AWS. Puedes generar certificados y añadirlos a balanceadores de carga y CloudFront de forma sencilla.",
      whyOthersWrong: {
        a: "CloudWatch es un servicio de monitoreo y observabilidad, no gestiona certificados.",
        c: "CloudTrail es para auditoría y registro de actividades API, no para gestión de certificados.",
        d: "Route 53 es un servicio DNS que puede enrutar tráfico, pero no gestiona certificados SSL/TLS.",
      },
    },
    tags: ["certificate-manager", "ssl", "tls", "https", "seguridad"],
  },
  {
    id: "clf-041",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "¿Cuál de los siguientes servicios de AWS puede usarse para proteger aplicaciones contra ataques comunes de capa de aplicación como inyección SQL y cross-site scripting (XSS)?",
    options: [
      { id: "a", text: "AWS Shield" },
      { id: "b", text: "AWS WAF" },
      { id: "c", text: "AWS Inspector" },
      { id: "d", text: "AWS Security Hub" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS WAF (Web Application Firewall) es un firewall para aplicaciones web que ayuda a proteger contra ataques comunes como inyección SQL y cross-site scripting. Permite crear reglas personalizadas para filtrar tráfico malicioso.",
      whyOthersWrong: {
        a: "AWS Shield protege contra ataques DDoS, no contra inyección SQL o XSS.",
        c: "AWS Inspector evalúa la seguridad de instancias EC2, no filtra tráfico web.",
        d: "Security Hub agrega hallazgos de seguridad pero no protege activamente contra ataques.",
      },
    },
    tags: ["waf", "firewall", "sql-injection", "xss", "seguridad"],
  },
  {
    id: "clf-042",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS permite evaluar continuamente las configuraciones de los recursos AWS frente a las configuraciones deseadas?",
    options: [
      { id: "a", text: "AWS CloudTrail" },
      { id: "b", text: "AWS Config" },
      { id: "c", text: "AWS Trusted Advisor" },
      { id: "d", text: "AWS Inspector" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Config es un servicio que rastrea las configuraciones de los recursos AWS y puede evaluar las configuraciones de los recursos frente a reglas predefinidas o personalizadas. Proporciona un historial detallado de cambios de configuración.",
      whyOthersWrong: {
        a: "CloudTrail registra llamadas API pero no evalúa configuraciones contra reglas.",
        c: "Trusted Advisor proporciona recomendaciones pero no rastrea el historial de configuraciones.",
        d: "Inspector evalúa la seguridad de EC2 pero no es para tracking general de configuraciones.",
      },
    },
    tags: ["config", "cumplimiento", "configuracion", "auditoria"],
  },
  {
    id: "clf-043",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "easy",
    question:
      "¿Cuál es la función principal de los Security Groups en AWS?",
    options: [
      { id: "a", text: "Cifrar datos en reposo" },
      { id: "b", text: "Actuar como firewall virtual para controlar tráfico entrante y saliente" },
      { id: "c", text: "Gestionar usuarios y sus permisos" },
      { id: "d", text: "Monitorear el rendimiento de las instancias" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Los Security Groups actúan como un firewall virtual que controla el tráfico entrante (inbound) y saliente (outbound) para instancias EC2. Operan a nivel de instancia y son stateful (si permites tráfico de entrada, la respuesta está automáticamente permitida).",
      whyOthersWrong: {
        a: "El cifrado de datos en reposo se gestiona con KMS o características específicas de cada servicio, no con Security Groups.",
        c: "La gestión de usuarios y permisos se hace con IAM, no con Security Groups.",
        d: "El monitoreo de rendimiento se hace con CloudWatch, no con Security Groups.",
      },
    },
    tags: ["security-groups", "firewall", "vpc", "ec2"],
  },
  {
    id: "clf-044",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS se utiliza para escanear instancias EC2 en busca de vulnerabilidades de software y exposiciones de red no deseadas?",
    options: [
      { id: "a", text: "AWS Shield" },
      { id: "b", text: "AWS Config" },
      { id: "c", text: "Amazon Inspector" },
      { id: "d", text: "AWS Security Hub" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Amazon Inspector es un servicio automatizado de evaluación de seguridad que analiza las instancias Amazon EC2 para detectar exposiciones de red no deseadas y vulnerabilidades en el software instalado.",
      whyOthersWrong: {
        a: "AWS Shield protege contra ataques DDoS, no escanea vulnerabilidades.",
        b: "AWS Config rastrea configuraciones de recursos, no escanea vulnerabilidades de software.",
        d: "Security Hub agrega hallazgos de múltiples servicios pero no realiza los escaneos directamente.",
      },
    },
    tags: ["inspector", "vulnerabilidades", "escaneo", "seguridad"],
  },
  {
    id: "clf-045",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS proporciona protección gestionada contra ataques de Denegación de Servicio Distribuido (DDoS)?",
    options: [
      { id: "a", text: "AWS WAF" },
      { id: "b", text: "AWS Shield" },
      { id: "c", text: "Amazon GuardDuty" },
      { id: "d", text: "AWS Firewall Manager" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Shield es un servicio de protección DDoS gestionado. Shield Standard está incluido automáticamente sin costo adicional, mientras que Shield Advanced ofrece protección adicional contra ataques más sofisticados y soporte del DDoS Response Team.",
      whyOthersWrong: {
        a: "AWS WAF protege contra ataques de capa de aplicación como SQL injection, no específicamente DDoS.",
        c: "GuardDuty detecta amenazas pero no proporciona protección DDoS gestionada.",
        d: "Firewall Manager centraliza la gestión de reglas de seguridad pero no es específico para DDoS.",
      },
    },
    tags: ["shield", "ddos", "proteccion", "seguridad"],
  },
  {
    id: "clf-046",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS debe usarse para almacenar y gestionar de forma segura credenciales de base de datos, claves API y otros secretos?",
    options: [
      { id: "a", text: "AWS KMS" },
      { id: "b", text: "AWS Secrets Manager" },
      { id: "c", text: "Amazon S3" },
      { id: "d", text: "AWS Systems Manager Parameter Store" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Secrets Manager está diseñado específicamente para almacenar, rotar y gestionar credenciales de bases de datos, claves API y otros secretos de forma segura. Ofrece rotación automática de secretos y integración con RDS.",
      whyOthersWrong: {
        a: "KMS gestiona claves de cifrado, no almacena secretos como credenciales.",
        c: "S3 es almacenamiento de objetos, no está diseñado para gestionar secretos de forma segura.",
        d: "Parameter Store puede almacenar secretos pero Secrets Manager es la opción preferida para credenciales con rotación automática.",
      },
    },
    tags: ["secrets-manager", "credenciales", "secretos", "seguridad"],
  },
  {
    id: "clf-047",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué tipo de credenciales se utilizan para el acceso programático a AWS a través de la CLI o SDKs?",
    options: [
      { id: "a", text: "Nombre de usuario y contraseña" },
      { id: "b", text: "Claves de acceso (Access Keys)" },
      { id: "c", text: "Certificados SSL" },
      { id: "d", text: "Tokens de sesión únicamente" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Las claves de acceso (Access Keys) consisten en un Access Key ID y un Secret Access Key. Se utilizan para el acceso programático a AWS mediante la CLI, SDKs o llamadas API directas.",
      whyOthersWrong: {
        a: "El nombre de usuario y contraseña se usan para acceso a la consola AWS, no para acceso programático.",
        c: "Los certificados SSL se usan para HTTPS, no para autenticación programática a AWS.",
        d: "Los tokens de sesión se usan junto con credenciales temporales de STS, pero las Access Keys son las credenciales base.",
      },
    },
    tags: ["access-keys", "iam", "cli", "programatico"],
  },
  {
    id: "clf-048",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "hard",
    question:
      "¿Dónde puede un cliente de AWS acceder a informes de cumplimiento y acuerdos como BAA (HIPAA) y documentos de certificaciones?",
    options: [
      { id: "a", text: "AWS Trusted Advisor" },
      { id: "b", text: "AWS Artifact" },
      { id: "c", text: "AWS Security Hub" },
      { id: "d", text: "AWS Config" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Artifact es un portal de autoservicio para acceder bajo demanda a informes de cumplimiento de AWS y acuerdos selectos. Incluye informes SOC, certificaciones PCI, ISO, y acuerdos como el BAA para HIPAA.",
      whyOthersWrong: {
        a: "Trusted Advisor proporciona recomendaciones de mejores prácticas, no documentos de cumplimiento.",
        c: "Security Hub agrega hallazgos de seguridad, no proporciona documentos de cumplimiento.",
        d: "Config rastrea configuraciones, no proporciona acceso a certificaciones o acuerdos.",
      },
    },
    tags: ["artifact", "cumplimiento", "hipaa", "certificaciones"],
  },
  {
    id: "clf-049",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "hard",
    question:
      "¿Qué servicio de AWS ayuda a configurar y administrar una landing zone segura con múltiples cuentas AWS siguiendo las mejores prácticas?",
    options: [
      { id: "a", text: "AWS Organizations" },
      { id: "b", text: "AWS Control Tower" },
      { id: "c", text: "AWS Service Catalog" },
      { id: "d", text: "AWS CloudFormation" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Control Tower proporciona la forma más fácil de configurar y gobernar un entorno AWS multi-cuenta seguro llamado landing zone. Automatiza la configuración siguiendo las mejores prácticas con guardrails preconfigurados.",
      whyOthersWrong: {
        a: "Organizations gestiona múltiples cuentas pero no configura automáticamente una landing zone con guardrails.",
        c: "Service Catalog gestiona portafolios de productos, no configuraciones multi-cuenta.",
        d: "CloudFormation es IaC pero no ofrece los guardrails y gobernanza integrados de Control Tower.",
      },
    },
    tags: ["control-tower", "landing-zone", "multi-cuenta", "gobernanza"],
  },
  {
    id: "clf-050",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "¿Cuál es la diferencia principal entre AWS Shield Standard y AWS Shield Advanced?",
    options: [
      { id: "a", text: "Shield Standard es de pago y Shield Advanced es gratuito" },
      { id: "b", text: "Shield Standard protege solo EC2, Shield Advanced protege todos los servicios" },
      { id: "c", text: "Shield Standard es gratuito con protección básica, Shield Advanced ofrece protección mejorada y soporte DRT con costo adicional" },
      { id: "d", text: "Shield Standard y Advanced ofrecen exactamente la misma protección" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Shield Standard es gratuito y proporciona protección automática contra ataques DDoS comunes. Shield Advanced es un servicio de pago que ofrece protección mejorada, detección sofisticada, mitigación en tiempo real, acceso al DDoS Response Team (DRT) y protección de costos.",
      whyOthersWrong: {
        a: "Es al revés: Standard es gratuito y Advanced tiene costo.",
        b: "Ambos protegen múltiples servicios AWS, no solo EC2.",
        d: "Shield Advanced ofrece significativamente más protección y beneficios que Standard.",
      },
    },
    tags: ["shield", "ddos", "standard", "advanced"],
  },
  {
    id: "clf-051",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS se utiliza para descubrir, clasificar y proteger datos sensibles como información personal identificable (PII) almacenados en Amazon S3?",
    options: [
      { id: "a", text: "Amazon GuardDuty" },
      { id: "b", text: "Amazon Macie" },
      { id: "c", text: "AWS Config" },
      { id: "d", text: "AWS CloudTrail" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Amazon Macie es un servicio de seguridad que usa machine learning para descubrir, clasificar y proteger automáticamente datos sensibles en AWS, como PII (información personal identificable) almacenada en buckets de S3.",
      whyOthersWrong: {
        a: "GuardDuty detecta amenazas analizando logs, no descubre datos sensibles en S3.",
        c: "Config rastrea configuraciones de recursos, no analiza el contenido de los datos.",
        d: "CloudTrail registra llamadas API, no descubre datos sensibles.",
      },
    },
    tags: ["macie", "pii", "datos-sensibles", "s3"],
  },
  {
    id: "clf-099",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS ayudará a una empresa a identificar al usuario que eliminó una instancia de Amazon EC2 ayer?",
    options: [
      { id: "a", text: "Amazon CloudWatch" },
      { id: "b", text: "AWS Trusted Advisor" },
      { id: "c", text: "AWS CloudTrail" },
      { id: "d", text: "Amazon Inspector" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "AWS CloudTrail es un servicio que permite rastrear la actividad del usuario y el uso de API en su cuenta de AWS, esencial para identificar acciones específicas como eliminar una instancia EC2.",
      whyOthersWrong: {
        a: "CloudWatch monitorea métricas y logs de rendimiento, no rastrea quién realizó acciones.",
        b: "Trusted Advisor proporciona recomendaciones de mejores prácticas, no auditoría de acciones.",
        d: "Inspector escanea vulnerabilidades de seguridad, no rastrea actividad de usuarios.",
      },
    },
    tags: ["cloudtrail", "auditoria", "seguridad", "logs"],
  },
  {
    id: "clf-100",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Qué servicios o herramientas de AWS están diseñados para proteger una carga de trabajo de inyección SQL, scripting entre sitios y ataques DDoS? (Seleccione DOS)",
    options: [
      { id: "a", text: "Punto de conexión de VPC" },
      { id: "b", text: "AWS Shield Standard" },
      { id: "c", text: "AWS Config" },
      { id: "d", text: "AWS WAF" },
    ],
    correctAnswers: ["b", "d"],
    explanation: {
      correct:
        "AWS Shield Standard protege contra ataques DDoS, mientras que AWS WAF protege contra inyección SQL y cross-site scripting. Juntos, proporcionan protección completa contra estos tipos de ataques.",
      whyOthersWrong: {
        a: "Los VPC endpoints permiten conexiones privadas a servicios AWS, no protegen contra ataques.",
        c: "AWS Config rastrea configuraciones de recursos, no protege contra ataques.",
      },
    },
    tags: ["shield", "waf", "ddos", "sql-injection"],
  },
  {
    id: "clf-101",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Cuáles tareas son responsabilidades del cliente según el Modelo de Responsabilidad Compartida de AWS? (Seleccione DOS)",
    options: [
      { id: "a", text: "Determinar dependencias de aplicaciones en sistemas operativos" },
      { id: "b", text: "Proporcionar acceso de usuario con AWS Identity and Access Management (IAM)" },
      { id: "c", text: "Asegurar la seguridad física del centro de datos en una zona de disponibilidad" },
      { id: "d", text: "Parchear el hipervisor" },
      { id: "e", text: "Asegurar la disponibilidad de red a través de zonas de disponibilidad" },
    ],
    correctAnswers: ["a", "b"],
    explanation: {
      correct:
        "Determinar dependencias de aplicaciones y proporcionar acceso de usuario usando AWS IAM son responsabilidades del cliente según el Modelo de Responsabilidad Compartida de AWS.",
      whyOthersWrong: {
        c: "La seguridad física de los data centers es responsabilidad exclusiva de AWS.",
        d: "Parchear el hipervisor es responsabilidad de AWS.",
        e: "La disponibilidad de la red entre AZs es responsabilidad de AWS.",
      },
    },
    tags: ["responsabilidad-compartida", "cliente", "iam"],
  },
  {
    id: "clf-102",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa necesita monitorear continuamente su entorno para analizar la actividad de red y cuenta e identificar posibles amenazas de seguridad. ¿Qué servicio de AWS debe usar la empresa para satisfacer estas necesidades?",
    options: [
      { id: "a", text: "AWS Artifact" },
      { id: "b", text: "AWS CloudTrail" },
      { id: "c", text: "Amazon GuardDuty" },
      { id: "d", text: "Amazon Macie" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Amazon GuardDuty es un servicio de detección de amenazas que monitorea continuamente la actividad maliciosa y el comportamiento no autorizado para proteger sus cuentas y cargas de trabajo de AWS.",
      whyOthersWrong: {
        a: "AWS Artifact proporciona informes de cumplimiento, no monitoreo de amenazas.",
        b: "CloudTrail registra llamadas API pero no analiza amenazas automáticamente.",
        d: "Macie descubre datos sensibles en S3, no monitorea amenazas de red.",
      },
    },
    tags: ["guardduty", "amenazas", "monitoreo", "seguridad"],
  },
  {
    id: "clf-103",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "easy",
    question:
      "Una empresa sospecha que sus recursos de AWS están siendo usados para actividades ilegales. ¿A qué grupo o equipo de AWS debe notificar la empresa?",
    options: [
      { id: "a", text: "Equipo de Abuso de AWS (AWS Abuse Team)" },
      { id: "b", text: "Equipo de Soporte de AWS" },
      { id: "c", text: "Technical Account Managers de AWS" },
      { id: "d", text: "Equipo de Servicios Profesionales de AWS" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "En caso de actividades sospechosas o ilegales, la empresa debe notificar al AWS Abuse Team. Este equipo maneja reportes de abuso relacionados con recursos de AWS.",
      whyOthersWrong: {
        b: "El equipo de soporte ayuda con problemas técnicos, no con reportes de abuso.",
        c: "Los TAMs proporcionan orientación técnica proactiva, no manejan reportes de abuso.",
        d: "Servicios Profesionales ayuda con implementaciones, no con reportes de abuso.",
      },
    },
    tags: ["abuse-team", "seguridad", "compliance"],
  },
  {
    id: "clf-104",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Cuáles tareas son responsabilidades del cliente según el Modelo de Responsabilidad Compartida de AWS? (Seleccione DOS)",
    options: [
      { id: "a", text: "Configurar el firewall de grupos de seguridad proporcionado por AWS" },
      { id: "b", text: "Clasificar los activos de la empresa en la nube de AWS" },
      { id: "c", text: "Determinar qué Zonas de Disponibilidad usar para buckets de Amazon S3" },
      { id: "d", text: "Parchear o actualizar Amazon DynamoDB" },
      { id: "e", text: "Seleccionar instancias Amazon EC2 para ejecutar AWS Lambda" },
    ],
    correctAnswers: ["a", "b"],
    explanation: {
      correct:
        "Según el Modelo de Responsabilidad Compartida, el cliente es responsable de la seguridad EN la nube, lo que incluye configurar los grupos de seguridad y clasificar sus propios activos.",
      whyOthersWrong: {
        c: "S3 gestiona automáticamente la replicación entre AZs; el cliente no elige AZs para S3.",
        d: "DynamoDB es un servicio gestionado; AWS maneja el parcheo.",
        e: "Lambda es serverless; el cliente no selecciona instancias EC2 para ejecutarlo.",
      },
    },
    tags: ["responsabilidad-compartida", "security-groups", "clasificacion"],
  },
  {
    id: "clf-105",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "easy",
    question:
      "¿Cuál de los siguientes es responsabilidad del cliente según el Modelo de Responsabilidad Compartida de AWS?",
    options: [
      { id: "a", text: "Gestión de identidad y acceso" },
      { id: "b", text: "Eliminación de discos duros" },
      { id: "c", text: "Seguridad del hardware del centro de datos" },
      { id: "d", text: "Seguridad de la Zona de Disponibilidad" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "En el Modelo de Responsabilidad Compartida de AWS, la gestión de identidad y acceso (IAM) es responsabilidad del cliente. El cliente debe gestionar usuarios, roles, políticas y permisos.",
      whyOthersWrong: {
        b: "La eliminación segura de hardware es responsabilidad de AWS.",
        c: "La seguridad física del hardware es responsabilidad de AWS.",
        d: "La seguridad de la infraestructura de las AZs es responsabilidad de AWS.",
      },
    },
    tags: ["responsabilidad-compartida", "iam", "cliente"],
  },
  {
    id: "clf-106",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué grupo comparte la responsabilidad con AWS para la seguridad y el cumplimiento de las cuentas y recursos de AWS?",
    options: [
      { id: "a", text: "Proveedores externos" },
      { id: "b", text: "Clientes" },
      { id: "c", text: "Socios revendedores" },
      { id: "d", text: "Proveedores de Internet" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "En el Modelo de Responsabilidad Compartida de AWS, los clientes son responsables de la seguridad 'en la nube', lo que incluye control de acceso y gestión de datos.",
      whyOthersWrong: {
        a: "Los proveedores externos no comparten responsabilidad directa con AWS.",
        c: "Los socios revendedores no son parte del modelo de responsabilidad compartida.",
        d: "Los proveedores de Internet no tienen responsabilidad sobre recursos de AWS.",
      },
    },
    tags: ["responsabilidad-compartida", "clientes", "seguridad"],
  },
  {
    id: "clf-107",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "¿Cuál es la responsabilidad del cliente al usar AWS Lambda según el Modelo de Responsabilidad Compartida de AWS?",
    options: [
      { id: "a", text: "Gestionar el código dentro de la función Lambda" },
      { id: "b", text: "Confirmar que el hardware está funcionando en el centro de datos" },
      { id: "c", text: "Aplicar parches al sistema operativo" },
      { id: "d", text: "Apagar las funciones Lambda cuando ya no se usan" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "Según el Modelo de Responsabilidad Compartida, el cliente es responsable del código dentro de las funciones Lambda y de la configuración de IAM para el servicio Lambda.",
      whyOthersWrong: {
        b: "El hardware es responsabilidad de AWS.",
        c: "Lambda es serverless; AWS gestiona el sistema operativo subyacente.",
        d: "Lambda es event-driven y no requiere ser 'apagado'; AWS gestiona la infraestructura.",
      },
    },
    tags: ["lambda", "responsabilidad-compartida", "serverless"],
  },
  {
    id: "clf-108",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa necesita implementar gestión de identidad para una flota de aplicaciones móviles ejecutándose en la nube de AWS. ¿Qué servicio de AWS cumplirá este requisito?",
    options: [
      { id: "a", text: "Amazon Cognito" },
      { id: "b", text: "AWS Security Hub" },
      { id: "c", text: "AWS Shield" },
      { id: "d", text: "AWS WAF" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "Amazon Cognito proporciona identidad de usuario y autenticación para aplicaciones móviles y web, permitiendo a los usuarios registrarse, iniciar sesión y acceder a recursos de AWS con diferentes proveedores de identidad.",
      whyOthersWrong: {
        b: "Security Hub agrega hallazgos de seguridad, no gestiona identidades de usuarios de aplicaciones.",
        c: "Shield protege contra ataques DDoS, no gestiona identidades.",
        d: "WAF es un firewall de aplicaciones web, no gestiona identidades.",
      },
    },
    tags: ["cognito", "identidad", "aplicaciones-moviles"],
  },
  {
    id: "clf-109",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa necesita un servicio automatizado de gestión de vulnerabilidades que escanee continuamente las cargas de trabajo de AWS en busca de vulnerabilidades de software. ¿Qué servicio de AWS cumplirá estos requisitos?",
    options: [
      { id: "a", text: "Amazon GuardDuty" },
      { id: "b", text: "Amazon Inspector" },
      { id: "c", text: "AWS Security Hub" },
      { id: "d", text: "AWS Shield" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Amazon Inspector es un servicio automatizado de gestión de vulnerabilidades que escanea continuamente cargas de trabajo de AWS (EC2, contenedores, funciones Lambda) en busca de vulnerabilidades de software y exposición de red no deseada.",
      whyOthersWrong: {
        a: "GuardDuty detecta amenazas analizando logs, no escanea vulnerabilidades de software.",
        c: "Security Hub agrega hallazgos pero no realiza los escaneos.",
        d: "Shield protege contra DDoS, no escanea vulnerabilidades.",
      },
    },
    tags: ["inspector", "vulnerabilidades", "automatizado"],
  },
  {
    id: "clf-110",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio o característica de AWS permite a los usuarios cifrar datos en reposo en Amazon S3?",
    options: [
      { id: "a", text: "Políticas IAM" },
      { id: "b", text: "Cifrado del lado del servidor" },
      { id: "c", text: "Amazon GuardDuty" },
      { id: "d", text: "Cifrado del lado del cliente" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "El cifrado del lado del servidor (Server-Side Encryption) es una opción que Amazon S3 proporciona para cifrar datos en reposo. Con SSE, Amazon S3 cifra un objeto antes de guardarlo en disco y lo descifra cuando lo descargas.",
      whyOthersWrong: {
        a: "Las políticas IAM controlan el acceso, no cifran datos.",
        c: "GuardDuty detecta amenazas, no cifra datos.",
        d: "El cifrado del lado del cliente se hace antes de subir a S3, pero SSE es la opción más común para cifrado en reposo gestionado por AWS.",
      },
    },
    tags: ["s3", "cifrado", "server-side-encryption", "seguridad"],
  },
  {
    id: "clf-111",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "Un ingeniero de TI necesita acceder a servicios de AWS desde una aplicación on-premises. ¿Qué credenciales o claves necesita la aplicación para autenticación?",
    options: [
      { id: "a", text: "Nombre de usuario y contraseña de cuenta AWS" },
      { id: "b", text: "Clave de acceso IAM y secreto" },
      { id: "c", text: "Pares de claves de Amazon EC2" },
      { id: "d", text: "Claves de AWS Key Management Service (AWS KMS)" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Las claves de acceso IAM son credenciales a largo plazo que consisten en un ID de clave de acceso y una clave de acceso secreta. Se usan para firmar solicitudes programáticas a AWS desde aplicaciones on-premises.",
      whyOthersWrong: {
        a: "El nombre de usuario y contraseña son para acceso a la consola, no programático.",
        c: "Los pares de claves EC2 son para conexión SSH a instancias, no para autenticación API.",
        d: "Las claves KMS son para cifrado, no para autenticación de acceso a servicios.",
      },
    },
    tags: ["access-keys", "iam", "programatico", "on-premises"],
  },
  {
    id: "clf-112",
    certificationId: "aws-clf-c02",
    domainId: "domain-2",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS proporciona cifrado en reposo para Amazon RDS y para volúmenes de Amazon Elastic Block Store (Amazon EBS)?",
    options: [
      { id: "a", text: "AWS Lambda" },
      { id: "b", text: "AWS Key Management Service (AWS KMS)" },
      { id: "c", text: "AWS WAF" },
      { id: "d", text: "Amazon Rekognition" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Key Management Service (AWS KMS) es un servicio gestionado que facilita crear y controlar las claves de cifrado usadas para proteger tus datos. KMS proporciona control centralizado sobre las claves usadas para cifrar datos en RDS y volúmenes EBS.",
      whyOthersWrong: {
        a: "Lambda es un servicio de computación serverless, no gestiona cifrado.",
        c: "WAF es un firewall de aplicaciones web, no gestiona cifrado.",
        d: "Rekognition es un servicio de análisis de imágenes, no de cifrado.",
      },
    },
    tags: ["kms", "cifrado", "rds", "ebs"],
  },
];

export default domain2Questions;
