export interface AWSService {
  id: string;
  name: string;
  shortName?: string;
  category: string;
  description: string;
  keyFeatures: string[];
  useCases: string[];
  pricing?: string;
  icon?: string;
}

export const services: AWSService[] = [
  // Compute
  {
    id: "ec2",
    name: "Amazon Elastic Compute Cloud",
    shortName: "Amazon EC2",
    category: "Compute",
    description:
      "Capacidad de cómputo escalable en la nube. Permite lanzar servidores virtuales (instancias) con diferentes configuraciones de CPU, memoria, almacenamiento y red.",
    keyFeatures: [
      "Múltiples tipos de instancias (propósito general, cómputo, memoria, almacenamiento, aceleradas)",
      "Auto Scaling para ajustar capacidad automáticamente",
      "Opciones de compra: On-Demand, Reserved, Spot, Dedicated",
      "Integración con EBS para almacenamiento persistente",
      "AMIs (Amazon Machine Images) para plantillas de instancias",
    ],
    useCases: [
      "Servidores web y aplicaciones",
      "Entornos de desarrollo y pruebas",
      "Procesamiento por lotes",
      "Gaming backends",
    ],
    pricing: "Pago por segundo/hora según tipo de instancia y región",
  },
  {
    id: "lambda",
    name: "AWS Lambda",
    category: "Compute",
    description:
      "Servicio de cómputo serverless que ejecuta código en respuesta a eventos. No requiere provisionar ni administrar servidores.",
    keyFeatures: [
      "Ejecución basada en eventos (S3, API Gateway, DynamoDB, etc.)",
      "Escalado automático según demanda",
      "Pago solo por tiempo de ejecución (milisegundos)",
      "Soporte para múltiples lenguajes (Python, Node.js, Java, Go, etc.)",
      "Hasta 15 minutos de tiempo de ejecución por invocación",
    ],
    useCases: [
      "APIs REST sin servidores",
      "Procesamiento de archivos en S3",
      "Automatización de tareas",
      "Backends para IoT",
    ],
    pricing: "Pago por número de solicitudes y duración de ejecución",
  },
  {
    id: "elastic-beanstalk",
    name: "AWS Elastic Beanstalk",
    category: "Compute",
    description:
      "Servicio PaaS para desplegar y escalar aplicaciones web. Gestiona automáticamente la infraestructura subyacente.",
    keyFeatures: [
      "Despliegue automático de aplicaciones",
      "Soporte para Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker",
      "Gestión automática de capacidad, balanceo de carga y monitoreo",
      "Personalización de la infraestructura si es necesario",
      "Integración con otros servicios AWS",
    ],
    useCases: [
      "Aplicaciones web",
      "APIs RESTful",
      "Aplicaciones en contenedores",
    ],
    pricing: "Sin costo adicional, solo pagas por los recursos subyacentes (EC2, RDS, etc.)",
  },
  {
    id: "ecs",
    name: "Amazon Elastic Container Service",
    shortName: "Amazon ECS",
    category: "Compute",
    description:
      "Servicio de orquestación de contenedores Docker completamente administrado.",
    keyFeatures: [
      "Ejecuta contenedores Docker a escala",
      "Integración con Fargate para modo serverless",
      "Integración con ECR para registro de imágenes",
      "Programación de tareas y servicios",
      "Integración con ALB/NLB para balanceo de carga",
    ],
    useCases: [
      "Microservicios",
      "Aplicaciones en contenedores",
      "CI/CD pipelines",
    ],
    pricing: "ECS sin costo; pagas por recursos (EC2 o Fargate)",
  },
  {
    id: "eks",
    name: "Amazon Elastic Kubernetes Service",
    shortName: "Amazon EKS",
    category: "Compute",
    description:
      "Servicio administrado de Kubernetes para ejecutar aplicaciones en contenedores.",
    keyFeatures: [
      "Kubernetes administrado y certificado",
      "Alta disponibilidad del plano de control",
      "Integración con servicios AWS (IAM, VPC, ALB)",
      "Soporte para Fargate y EC2",
      "Actualizaciones automáticas de Kubernetes",
    ],
    useCases: [
      "Migración de cargas Kubernetes existentes",
      "Microservicios a escala",
      "Machine learning con Kubeflow",
    ],
    pricing: "$0.10/hora por clúster + recursos de cómputo",
  },
  {
    id: "fargate",
    name: "AWS Fargate",
    category: "Compute",
    description:
      "Motor de cómputo serverless para contenedores. Funciona con ECS y EKS sin necesidad de gestionar servidores.",
    keyFeatures: [
      "Sin gestión de servidores o clústeres",
      "Pago por recursos (vCPU y memoria) utilizados",
      "Aislamiento por tarea/pod",
      "Escalado automático",
      "Compatible con ECS y EKS",
    ],
    useCases: [
      "Contenedores sin gestión de infraestructura",
      "Microservicios serverless",
      "Procesamiento por lotes",
    ],
    pricing: "Pago por vCPU y memoria por segundo",
  },
  {
    id: "lightsail",
    name: "Amazon Lightsail",
    category: "Compute",
    description:
      "Servidores virtuales privados (VPS) simplificados con precio fijo mensual. Ideal para proyectos simples y usuarios nuevos.",
    keyFeatures: [
      "Precios fijos predecibles",
      "Plantillas preconfiguradas (WordPress, LAMP, Node.js)",
      "Incluye almacenamiento SSD, transferencia de datos y DNS",
      "Consola simplificada",
      "Snapshots para backups",
    ],
    useCases: [
      "Sitios web y blogs",
      "Aplicaciones web simples",
      "Entornos de desarrollo",
    ],
    pricing: "Desde $3.50/mes con recursos incluidos",
  },

  // Storage
  {
    id: "s3",
    name: "Amazon Simple Storage Service",
    shortName: "Amazon S3",
    category: "Storage",
    description:
      "Almacenamiento de objetos con 99.999999999% (11 nueves) de durabilidad. El servicio de almacenamiento más utilizado de AWS.",
    keyFeatures: [
      "Almacenamiento ilimitado de objetos hasta 5TB cada uno",
      "Múltiples clases de almacenamiento (Standard, IA, Glacier, etc.)",
      "Versionado de objetos",
      "Cifrado en reposo y en tránsito",
      "Lifecycle policies para gestión automática",
      "Replicación entre regiones (CRR)",
      "Hosting de sitios web estáticos",
    ],
    useCases: [
      "Backup y archivado",
      "Data lakes",
      "Hosting de contenido estático",
      "Almacenamiento de logs",
    ],
    pricing: "Pago por GB almacenado + solicitudes + transferencia de datos",
  },
  {
    id: "ebs",
    name: "Amazon Elastic Block Store",
    shortName: "Amazon EBS",
    category: "Storage",
    description:
      "Almacenamiento en bloque persistente de alto rendimiento para instancias EC2.",
    keyFeatures: [
      "Volúmenes SSD y HDD",
      "Snapshots para backups a S3",
      "Cifrado transparente",
      "Escalado de IOPS provisionados",
      "Múltiples tipos: gp3, io2, st1, sc1",
    ],
    useCases: [
      "Bases de datos",
      "Sistemas de archivos",
      "Almacenamiento de aplicaciones",
    ],
    pricing: "Pago por GB provisionado + IOPS (según tipo)",
  },
  {
    id: "efs",
    name: "Amazon Elastic File System",
    shortName: "Amazon EFS",
    category: "Storage",
    description:
      "Sistema de archivos NFS elástico y compartido para cargas de trabajo Linux.",
    keyFeatures: [
      "Escalado automático (petabytes)",
      "Acceso simultáneo desde múltiples instancias",
      "Alta disponibilidad y durabilidad",
      "Clases de almacenamiento: Standard e IA",
      "Compatible con NFS v4",
    ],
    useCases: [
      "Aplicaciones web compartidas",
      "Gestión de contenido",
      "Directorios home",
    ],
    pricing: "Pago por GB utilizado",
  },
  {
    id: "storage-gateway",
    name: "AWS Storage Gateway",
    category: "Storage",
    description:
      "Servicio de almacenamiento híbrido que conecta entornos on-premises con AWS.",
    keyFeatures: [
      "Tres tipos: File, Volume, Tape Gateway",
      "Caché local para baja latencia",
      "Integración con S3, EBS y Glacier",
      "Compatible con protocolos estándar (NFS, iSCSI, VTL)",
    ],
    useCases: [
      "Backup en la nube",
      "Migración de datos",
      "Archivado de cintas virtuales",
    ],
    pricing: "Pago por gateway + almacenamiento + transferencia",
  },
  {
    id: "snowball",
    name: "AWS Snow Family",
    category: "Storage",
    description:
      "Dispositivos físicos para migración masiva de datos y edge computing.",
    keyFeatures: [
      "Snowcone: 8-14TB, portátil",
      "Snowball Edge: 80TB, cómputo local",
      "Snowmobile: hasta 100PB (camión)",
      "Transferencia segura y cifrada",
      "Edge computing capabilities",
    ],
    useCases: [
      "Migración de petabytes de datos",
      "Entornos sin conectividad",
      "Edge computing remoto",
    ],
    pricing: "Tarifa por trabajo + días de uso del dispositivo",
  },

  // Database
  {
    id: "rds",
    name: "Amazon Relational Database Service",
    shortName: "Amazon RDS",
    category: "Database",
    description:
      "Bases de datos relacionales administradas. AWS gestiona backups, parches, alta disponibilidad y escalado.",
    keyFeatures: [
      "6 motores: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Amazon Aurora",
      "Multi-AZ para alta disponibilidad",
      "Read Replicas para escalado de lectura",
      "Backups automáticos y snapshots",
      "Cifrado en reposo y en tránsito",
    ],
    useCases: [
      "Aplicaciones web con bases de datos",
      "ERPs y CRMs",
      "Aplicaciones transaccionales",
    ],
    pricing: "Pago por hora de instancia + almacenamiento + I/O",
  },
  {
    id: "aurora",
    name: "Amazon Aurora",
    category: "Database",
    description:
      "Base de datos relacional compatible con MySQL y PostgreSQL, diseñada para la nube con hasta 5x mejor rendimiento que MySQL.",
    keyFeatures: [
      "Compatible con MySQL y PostgreSQL",
      "Almacenamiento auto-escalable hasta 128TB",
      "6 copias de datos en 3 AZs",
      "Aurora Serverless para cargas variables",
      "Global Database para multi-región",
    ],
    useCases: [
      "Aplicaciones empresariales críticas",
      "SaaS con alta demanda",
      "Microservicios",
    ],
    pricing: "Pago por instancia + I/O + almacenamiento",
  },
  {
    id: "dynamodb",
    name: "Amazon DynamoDB",
    category: "Database",
    description:
      "Base de datos NoSQL serverless, key-value y documentos, con latencia de milisegundos a cualquier escala.",
    keyFeatures: [
      "Escalado automático sin límites",
      "Latencia de milisegundos de un solo dígito",
      "Tablas globales para multi-región",
      "DynamoDB Streams para eventos",
      "DAX para caché en memoria",
      "Modo on-demand o provisionado",
    ],
    useCases: [
      "Gaming leaderboards",
      "Sesiones de usuario",
      "IoT y telemetría",
      "Carritos de compra",
    ],
    pricing: "Pago por solicitudes + almacenamiento",
  },
  {
    id: "elasticache",
    name: "Amazon ElastiCache",
    category: "Database",
    description:
      "Servicio de caché en memoria totalmente administrado compatible con Redis y Memcached.",
    keyFeatures: [
      "Compatible con Redis y Memcached",
      "Sub-milisegundo de latencia",
      "Escalado horizontal",
      "Multi-AZ con failover automático (Redis)",
      "Backup y restauración (Redis)",
    ],
    useCases: [
      "Caching de sesiones",
      "Caching de consultas de base de datos",
      "Pub/sub messaging",
      "Leaderboards en tiempo real",
    ],
    pricing: "Pago por hora de nodo + transferencia de datos",
  },
  {
    id: "redshift",
    name: "Amazon Redshift",
    category: "Database",
    description:
      "Data warehouse rápido y escalable para análisis de datos a escala de petabytes.",
    keyFeatures: [
      "Almacenamiento columnar",
      "Compresión automática",
      "Redshift Spectrum para consultar S3",
      "Escalado bajo demanda",
      "Integración con QuickSight y otras herramientas BI",
    ],
    useCases: [
      "Business Intelligence",
      "Análisis de logs",
      "Data warehousing",
    ],
    pricing: "Pago por nodo por hora",
  },

  // Networking
  {
    id: "vpc",
    name: "Amazon Virtual Private Cloud",
    shortName: "Amazon VPC",
    category: "Networking",
    description:
      "Red virtual aislada lógicamente en la nube de AWS donde lanzas tus recursos.",
    keyFeatures: [
      "Control total de configuración de red",
      "Subredes públicas y privadas",
      "Tablas de enrutamiento personalizadas",
      "Internet Gateways y NAT Gateways",
      "VPC Peering para conectar VPCs",
      "VPC Endpoints para acceso privado a servicios AWS",
    ],
    useCases: [
      "Aislamiento de recursos",
      "Redes híbridas",
      "Arquitecturas multi-tier",
    ],
    pricing: "VPC gratis; costos por NAT Gateway, VPN, etc.",
  },
  {
    id: "route53",
    name: "Amazon Route 53",
    category: "Networking",
    description:
      "Servicio de DNS escalable y de alta disponibilidad. También ofrece registro de dominios.",
    keyFeatures: [
      "DNS autoritativo con 100% SLA de disponibilidad",
      "Múltiples políticas de enrutamiento (simple, weighted, latency, geolocation, failover)",
      "Health checks para failover",
      "Registro de dominios",
      "Integración con otros servicios AWS",
    ],
    useCases: [
      "Gestión de DNS",
      "Failover global",
      "Registro de dominios",
    ],
    pricing: "$0.50/mes por hosted zone + $0.40 por millón de consultas",
  },
  {
    id: "cloudfront",
    name: "Amazon CloudFront",
    category: "Networking",
    description:
      "Red de distribución de contenido (CDN) global con baja latencia y alta velocidad de transferencia.",
    keyFeatures: [
      "Más de 400 edge locations globalmente",
      "Integración nativa con S3, EC2, ELB",
      "HTTPS gratuito con AWS Certificate Manager",
      "Lambda@Edge para personalización",
      "Protección contra DDoS con Shield",
    ],
    useCases: [
      "Entrega de contenido estático",
      "Streaming de video",
      "APIs con baja latencia",
    ],
    pricing: "Pago por transferencia de datos + solicitudes",
  },
  {
    id: "elb",
    name: "Elastic Load Balancing",
    category: "Networking",
    description:
      "Distribución automática del tráfico entre múltiples destinos (EC2, contenedores, IPs, Lambda).",
    keyFeatures: [
      "Application Load Balancer (HTTP/HTTPS, Layer 7)",
      "Network Load Balancer (TCP/UDP, Layer 4, millones de req/s)",
      "Gateway Load Balancer (appliances de red)",
      "Health checks automáticos",
      "Integración con Auto Scaling",
    ],
    useCases: [
      "Alta disponibilidad de aplicaciones",
      "Microservicios",
      "Aplicaciones en contenedores",
    ],
    pricing: "Pago por hora + unidades de capacidad (LCU)",
  },
  {
    id: "direct-connect",
    name: "AWS Direct Connect",
    category: "Networking",
    description:
      "Conexión de red dedicada entre tus instalaciones y AWS, evitando internet público.",
    keyFeatures: [
      "Conexiones dedicadas de 1Gbps a 100Gbps",
      "Menor latencia que internet",
      "Costos de transferencia reducidos",
      "Conexión privada a VPC",
      "Compatible con VPN como backup",
    ],
    useCases: [
      "Cargas de trabajo híbridas",
      "Transferencia de grandes volúmenes de datos",
      "Aplicaciones con baja latencia",
    ],
    pricing: "Pago por hora de puerto + transferencia de datos",
  },

  // Security & Identity
  {
    id: "iam",
    name: "AWS Identity and Access Management",
    shortName: "AWS IAM",
    category: "Security & Identity",
    description:
      "Servicio para gestionar el acceso a los servicios y recursos de AWS de forma segura.",
    keyFeatures: [
      "Usuarios, grupos, roles y políticas",
      "Principio de mínimo privilegio",
      "Multi-Factor Authentication (MFA)",
      "Federación de identidades",
      "Access Analyzer para auditoría",
      "Gratuito",
    ],
    useCases: [
      "Control de acceso granular",
      "Permisos temporales para aplicaciones",
      "SSO con proveedores de identidad",
    ],
    pricing: "Gratuito",
  },
  {
    id: "kms",
    name: "AWS Key Management Service",
    shortName: "AWS KMS",
    category: "Security & Identity",
    description:
      "Servicio administrado para crear y controlar claves de cifrado.",
    keyFeatures: [
      "Claves administradas por AWS o por el cliente (CMK)",
      "Integración con más de 100 servicios AWS",
      "Rotación automática de claves",
      "Auditoría con CloudTrail",
      "Cumplimiento FIPS 140-2",
    ],
    useCases: [
      "Cifrado de datos en S3, EBS, RDS",
      "Cifrado de aplicaciones",
      "Gestión centralizada de claves",
    ],
    pricing: "$1/mes por clave CMK + solicitudes de API",
  },
  {
    id: "waf",
    name: "AWS WAF",
    category: "Security & Identity",
    description:
      "Firewall de aplicaciones web que protege contra exploits web comunes.",
    keyFeatures: [
      "Reglas personalizables",
      "Reglas administradas de AWS y partners",
      "Protección contra SQL injection y XSS",
      "Rate limiting",
      "Integración con CloudFront, ALB, API Gateway",
    ],
    useCases: [
      "Protección de aplicaciones web",
      "Bloqueo de bots maliciosos",
      "Mitigación de ataques Layer 7",
    ],
    pricing: "$5/mes por web ACL + $1/regla + solicitudes",
  },
  {
    id: "shield",
    name: "AWS Shield",
    category: "Security & Identity",
    description:
      "Protección administrada contra ataques DDoS.",
    keyFeatures: [
      "Shield Standard: gratuito, protección básica",
      "Shield Advanced: protección avanzada, $3,000/mes",
      "Mitigación automática de ataques",
      "Integración con WAF (Advanced)",
      "Acceso a DDoS Response Team (Advanced)",
    ],
    useCases: [
      "Protección de aplicaciones críticas",
      "Mitigación de DDoS Layer 3/4 y Layer 7",
    ],
    pricing: "Standard: gratis | Advanced: desde $3,000/mes",
  },
  {
    id: "guardduty",
    name: "Amazon GuardDuty",
    category: "Security & Identity",
    description:
      "Servicio de detección de amenazas que monitorea actividad maliciosa.",
    keyFeatures: [
      "Análisis de VPC Flow Logs, CloudTrail, DNS",
      "Machine learning para detección de anomalías",
      "Alertas priorizadas por severidad",
      "Sin agentes que instalar",
      "Integración con Security Hub",
    ],
    useCases: [
      "Detección de cuentas comprometidas",
      "Identificación de actividad sospechosa",
      "Monitoreo continuo de seguridad",
    ],
    pricing: "Pago por volumen de datos analizados",
  },

  // Management & Governance
  {
    id: "cloudwatch",
    name: "Amazon CloudWatch",
    category: "Management & Governance",
    description:
      "Servicio de monitoreo y observabilidad para recursos y aplicaciones AWS.",
    keyFeatures: [
      "Métricas de servicios AWS",
      "Métricas personalizadas",
      "Alarmas y notificaciones",
      "Logs centralizados",
      "Dashboards personalizados",
      "Events/EventBridge para automatización",
    ],
    useCases: [
      "Monitoreo de infraestructura",
      "Centralización de logs",
      "Alertas operacionales",
    ],
    pricing: "Métricas básicas gratis; pago por métricas, logs, alarmas +",
  },
  {
    id: "cloudformation",
    name: "AWS CloudFormation",
    category: "Management & Governance",
    description:
      "Infraestructura como código: modela y provisiona recursos AWS con plantillas.",
    keyFeatures: [
      "Plantillas JSON o YAML",
      "Stacks para agrupar recursos",
      "Change sets para preview de cambios",
      "Rollback automático en fallos",
      "Drift detection",
    ],
    useCases: [
      "Infraestructura reproducible",
      "Despliegues consistentes",
      "Gestión de entornos (dev, staging, prod)",
    ],
    pricing: "Gratuito (solo pagas por recursos creados)",
  },
  {
    id: "cloudtrail",
    name: "AWS CloudTrail",
    category: "Management & Governance",
    description:
      "Registra todas las llamadas a API de tu cuenta AWS para auditoría y compliance.",
    keyFeatures: [
      "Registro de eventos de gestión y datos",
      "Almacenamiento en S3",
      "Integración con CloudWatch Logs",
      "Insights para detección de anomalías",
      "Multi-región y multi-cuenta",
    ],
    useCases: [
      "Auditoría de seguridad",
      "Investigación de incidentes",
      "Cumplimiento normativo",
    ],
    pricing: "Primera copia de eventos gratis; costos por trails +",
  },
  {
    id: "aws-config",
    name: "AWS Config",
    category: "Management & Governance",
    description:
      "Servicio para evaluar, auditar y evaluar las configuraciones de recursos AWS.",
    keyFeatures: [
      "Inventario de recursos",
      "Historial de cambios de configuración",
      "Reglas de cumplimiento (managed y custom)",
      "Remediación automática",
      "Aggregators multi-cuenta",
    ],
    useCases: [
      "Compliance continuo",
      "Auditoría de cambios",
      "Detección de recursos no conformes",
    ],
    pricing: "Pago por regla evaluada + items de configuración",
  },
  {
    id: "trusted-advisor",
    name: "AWS Trusted Advisor",
    category: "Management & Governance",
    description:
      "Servicio que proporciona recomendaciones de mejores prácticas en 5 categorías.",
    keyFeatures: [
      "Optimización de costos",
      "Rendimiento",
      "Seguridad",
      "Tolerancia a fallos",
      "Límites de servicio",
      "Checks completos con Business/Enterprise Support",
    ],
    useCases: [
      "Reducción de costos",
      "Mejora de seguridad",
      "Aumento de resiliencia",
    ],
    pricing: "Básico gratis; completo con Business/Enterprise Support",
  },
  {
    id: "aws-organizations",
    name: "AWS Organizations",
    category: "Management & Governance",
    description:
      "Servicio para gestionar múltiples cuentas AWS de forma centralizada.",
    keyFeatures: [
      "Facturación consolidada",
      "Service Control Policies (SCPs)",
      "Organizational Units (OUs)",
      "Creación automática de cuentas",
      "Integración con otros servicios AWS",
    ],
    useCases: [
      "Gestión empresarial multi-cuenta",
      "Separación de entornos",
      "Gobernanza centralizada",
    ],
    pricing: "Gratuito",
  },

  // Application Integration
  {
    id: "sqs",
    name: "Amazon Simple Queue Service",
    shortName: "Amazon SQS",
    category: "Application Integration",
    description:
      "Servicio de colas de mensajes totalmente administrado para desacoplar aplicaciones.",
    keyFeatures: [
      "Colas Standard (alto throughput) y FIFO (orden garantizado)",
      "Escalado automático",
      "Retención de mensajes hasta 14 días",
      "Dead Letter Queues",
      "Integración con Lambda",
    ],
    useCases: [
      "Desacoplamiento de microservicios",
      "Procesamiento asíncrono",
      "Buffer de trabajos",
    ],
    pricing: "1 millón de solicitudes gratis/mes; luego por solicitud",
  },
  {
    id: "sns",
    name: "Amazon Simple Notification Service",
    shortName: "Amazon SNS",
    category: "Application Integration",
    description:
      "Servicio de mensajería pub/sub totalmente administrado.",
    keyFeatures: [
      "Topics para publicar mensajes",
      "Múltiples suscriptores: SQS, Lambda, HTTP, email, SMS",
      "Filtrado de mensajes",
      "FIFO topics",
      "Mobile push notifications",
    ],
    useCases: [
      "Notificaciones a múltiples sistemas",
      "Alertas por email/SMS",
      "Fanout a múltiples colas",
    ],
    pricing: "Primeras 1M publicaciones gratis/mes",
  },
  {
    id: "eventbridge",
    name: "Amazon EventBridge",
    category: "Application Integration",
    description:
      "Bus de eventos serverless para conectar aplicaciones con datos de diversas fuentes.",
    keyFeatures: [
      "Eventos de servicios AWS, SaaS y aplicaciones propias",
      "Reglas para filtrar y enrutar eventos",
      "Scheduler para eventos programados",
      "Schema Registry",
      "Archive y Replay de eventos",
    ],
    useCases: [
      "Arquitecturas event-driven",
      "Integración con SaaS (Zendesk, Datadog, etc.)",
      "Automatización de workflows",
    ],
    pricing: "Pago por evento publicado",
  },
  {
    id: "step-functions",
    name: "AWS Step Functions",
    category: "Application Integration",
    description:
      "Orquestación visual de workflows serverless con Lambda y otros servicios.",
    keyFeatures: [
      "Workflows visuales con diagrama de estados",
      "Manejo de errores y reintentos",
      "Standard (larga duración) y Express (alta velocidad)",
      "Integración con más de 200 servicios AWS",
      "Parallel y Map states",
    ],
    useCases: [
      "Orquestación de microservicios",
      "Pipelines de ML",
      "Procesos de aprobación",
    ],
    pricing: "Pago por transición de estado",
  },

  // Developer Tools
  {
    id: "codecommit",
    name: "AWS CodeCommit",
    category: "Developer Tools",
    description:
      "Servicio de control de versiones Git privado y administrado.",
    keyFeatures: [
      "Repositorios Git privados ilimitados",
      "Escalado automático",
      "Cifrado en reposo y en tránsito",
      "Integración con IAM",
      "Triggers para automatización",
    ],
    useCases: [
      "Almacenamiento de código fuente",
      "Colaboración en equipos",
    ],
    pricing: "5 usuarios activos gratis/mes",
  },
  {
    id: "codebuild",
    name: "AWS CodeBuild",
    category: "Developer Tools",
    description:
      "Servicio de compilación completamente administrado.",
    keyFeatures: [
      "Sin servidores que gestionar",
      "Escalado automático",
      "Entornos preconfigurados y personalizados",
      "Integración con CodePipeline",
      "Caché de dependencias",
    ],
    useCases: [
      "CI/CD",
      "Compilación de aplicaciones",
      "Ejecución de tests",
    ],
    pricing: "Pago por minuto de compilación",
  },
  {
    id: "codedeploy",
    name: "AWS CodeDeploy",
    category: "Developer Tools",
    description:
      "Automatiza despliegues de código a EC2, Lambda, ECS y on-premises.",
    keyFeatures: [
      "Despliegues in-place y blue/green",
      "Rollback automático",
      "Integración con Auto Scaling",
      "Hooks de ciclo de vida",
      "Compatible con on-premises",
    ],
    useCases: [
      "Automatización de despliegues",
      "Zero-downtime deployments",
    ],
    pricing: "Gratis para EC2/Lambda; on-premises tiene costo",
  },
  {
    id: "codepipeline",
    name: "AWS CodePipeline",
    category: "Developer Tools",
    description:
      "Servicio de entrega continua (CI/CD) completamente administrado.",
    keyFeatures: [
      "Pipelines visuales",
      "Integración con GitHub, CodeCommit, S3",
      "Acciones paralelas y secuenciales",
      "Aprobaciones manuales",
      "Integración con Jenkins y herramientas de terceros",
    ],
    useCases: [
      "CI/CD automatizado",
      "Release automation",
    ],
    pricing: "$1/mes por pipeline activo (primero gratis)",
  },

  // Analytics
  {
    id: "athena",
    name: "Amazon Athena",
    category: "Analytics",
    description:
      "Servicio de consultas SQL serverless para analizar datos en S3.",
    keyFeatures: [
      "SQL estándar (Presto)",
      "Sin infraestructura que gestionar",
      "Soporta CSV, JSON, Parquet, ORC",
      "Integración con Glue Data Catalog",
      "Consultas federadas",
    ],
    useCases: [
      "Análisis ad-hoc de datos en S3",
      "Análisis de logs",
      "Preparación de datos",
    ],
    pricing: "$5 por TB escaneado",
  },
  {
    id: "quicksight",
    name: "Amazon QuickSight",
    category: "Analytics",
    description:
      "Servicio de Business Intelligence serverless para crear visualizaciones.",
    keyFeatures: [
      "SPICE: motor de cálculo en memoria",
      "ML Insights automatizados",
      "Dashboards embeddidos",
      "Múltiples fuentes de datos",
      "Acceso móvil",
    ],
    useCases: [
      "Dashboards ejecutivos",
      "Reportes de negocio",
      "Análisis self-service",
    ],
    pricing: "Desde $9/mes por usuario autor",
  },
  {
    id: "kinesis",
    name: "Amazon Kinesis",
    category: "Analytics",
    description:
      "Plataforma para procesar datos en streaming en tiempo real.",
    keyFeatures: [
      "Kinesis Data Streams: ingesta de datos",
      "Kinesis Data Firehose: carga a destinos",
      "Kinesis Data Analytics: SQL en streaming",
      "Kinesis Video Streams: video en tiempo real",
      "Escalado bajo demanda",
    ],
    useCases: [
      "Análisis en tiempo real",
      "Logs y métricas en streaming",
      "IoT data processing",
    ],
    pricing: "Varía por servicio (shards, datos procesados)",
  },

  // Machine Learning
  {
    id: "sagemaker",
    name: "Amazon SageMaker",
    category: "Machine Learning",
    description:
      "Plataforma completa para construir, entrenar y desplegar modelos de ML.",
    keyFeatures: [
      "Notebooks Jupyter administrados",
      "Entrenamiento distribuido",
      "Hosting de modelos",
      "AutoML con Autopilot",
      "MLOps con Pipelines",
    ],
    useCases: [
      "Desarrollo de modelos ML",
      "MLOps",
      "Computer Vision y NLP",
    ],
    pricing: "Pago por recursos utilizados",
  },
  {
    id: "rekognition",
    name: "Amazon Rekognition",
    category: "Machine Learning",
    description:
      "Servicio de visión por computadora para análisis de imágenes y video.",
    keyFeatures: [
      "Detección de objetos, escenas, caras",
      "Reconocimiento de celebridades",
      "Detección de contenido inapropiado",
      "Comparación de caras",
      "Análisis de video",
    ],
    useCases: [
      "Verificación de identidad",
      "Moderación de contenido",
      "Búsqueda visual",
    ],
    pricing: "Pago por imagen/minuto de video",
  },
  {
    id: "comprehend",
    name: "Amazon Comprehend",
    category: "Machine Learning",
    description:
      "Servicio de NLP para extraer insights de texto.",
    keyFeatures: [
      "Detección de sentimiento",
      "Extracción de entidades",
      "Detección de idioma",
      "Modelado de temas",
      "Comprehend Medical para salud",
    ],
    useCases: [
      "Análisis de feedback de clientes",
      "Clasificación de documentos",
      "Análisis de redes sociales",
    ],
    pricing: "Pago por unidad de texto analizado",
  },
  {
    id: "lex",
    name: "Amazon Lex",
    category: "Machine Learning",
    description:
      "Servicio para construir interfaces conversacionales (chatbots) con voz y texto.",
    keyFeatures: [
      "Misma tecnología que Alexa",
      "ASR (speech-to-text) y NLU",
      "Integración con Lambda",
      "Multi-canal (web, móvil, contact centers)",
      "Lex V2 con conversaciones mejoradas",
    ],
    useCases: [
      "Chatbots de servicio al cliente",
      "Asistentes virtuales",
      "IVR automatizado",
    ],
    pricing: "Pago por solicitud de texto/voz",
  },
  {
    id: "polly",
    name: "Amazon Polly",
    category: "Machine Learning",
    description:
      "Servicio de text-to-speech que convierte texto en audio realista.",
    keyFeatures: [
      "Más de 60 voces en 30+ idiomas",
      "Voces neurales de alta calidad",
      "SSML para control de pronunciación",
      "Lexicons personalizados",
      "Streaming de audio",
    ],
    useCases: [
      "Accesibilidad",
      "E-learning",
      "Aplicaciones de voz",
    ],
    pricing: "Pago por caracteres convertidos",
  },
  {
    id: "transcribe",
    name: "Amazon Transcribe",
    category: "Machine Learning",
    description:
      "Servicio de speech-to-text para convertir audio en texto.",
    keyFeatures: [
      "Transcripción batch y en tiempo real",
      "Identificación de hablantes",
      "Vocabulario personalizado",
      "Filtrado de contenido",
      "Transcribe Medical para salud",
    ],
    useCases: [
      "Subtitulado",
      "Transcripción de llamadas",
      "Análisis de conversaciones",
    ],
    pricing: "Pago por segundo de audio",
  },
  {
    id: "translate",
    name: "Amazon Translate",
    category: "Machine Learning",
    description:
      "Servicio de traducción automática neuronal.",
    keyFeatures: [
      "75+ idiomas",
      "Traducción en tiempo real y batch",
      "Terminología personalizada",
      "Active Custom Translation",
      "Integración con S3",
    ],
    useCases: [
      "Localización de contenido",
      "Comunicación multilingüe",
      "Análisis de datos en otros idiomas",
    ],
    pricing: "Pago por carácter traducido",
  },
  // Cloud Economics & Pricing
  {
    id: "aws-pricing-calculator",
    name: "AWS Pricing Calculator",
    category: "Cloud Financial Management",
    description:
      "Herramienta web para estimar costos de servicios AWS antes de desplegar.",
    keyFeatures: [
      "Estimaciones detalladas por servicio",
      "Comparación de escenarios",
      "Exportar y compartir estimaciones",
      "Incluye todos los servicios AWS",
    ],
    useCases: [
      "Planificación de presupuesto",
      "Comparación de arquitecturas",
      "Propuestas a clientes",
    ],
    pricing: "Gratuito",
  },
  {
    id: "aws-tco-calculator",
    name: "AWS TCO Calculator",
    category: "Cloud Financial Management",
    description:
      "Calculadora de Costo Total de Propiedad para comparar costos on-premises vs AWS.",
    keyFeatures: [
      "Comparación on-premises vs cloud",
      "Incluye costos ocultos",
      "Análisis de 3 años",
      "Reportes ejecutivos",
    ],
    useCases: [
      "Justificación de migración a cloud",
      "Análisis de ROI",
      "Presentaciones a ejecutivos",
    ],
    pricing: "Gratuito",
  },
  {
    id: "cost-explorer",
    name: "AWS Cost Explorer",
    category: "Cloud Financial Management",
    description:
      "Herramienta para visualizar, entender y gestionar costos de AWS.",
    keyFeatures: [
      "Gráficos de costos por servicio/cuenta",
      "Pronósticos de gastos",
      "Recomendaciones de ahorro",
      "Filtros y agrupaciones personalizadas",
      "API para automatización",
    ],
    useCases: [
      "Monitoreo de gastos",
      "Identificar oportunidades de ahorro",
      "Análisis de tendencias",
    ],
    pricing: "Gratuito (API tiene costo por solicitud)",
  },
  {
    id: "aws-budgets",
    name: "AWS Budgets",
    category: "Cloud Financial Management",
    description:
      "Servicio para crear presupuestos y recibir alertas cuando se excedan.",
    keyFeatures: [
      "Presupuestos de costo, uso y reservas",
      "Alertas por email y SNS",
      "Acciones automáticas al exceder",
      "Integración con AWS Cost Explorer",
    ],
    useCases: [
      "Control de gastos",
      "Alertas proactivas",
      "Gobierno de costos",
    ],
    pricing: "Primeros 2 presupuestos gratis, luego $0.02/día",
  },
  {
    id: "billing",
    name: "AWS Billing and Cost Management",
    category: "Cloud Financial Management",
    description:
      "Consola centralizada para gestionar facturación y pagos de AWS.",
    keyFeatures: [
      "Facturas detalladas",
      "Métodos de pago",
      "Créditos y cupones",
      "Consolidated Billing para Organizations",
    ],
    useCases: [
      "Gestión de facturas",
      "Configuración de pagos",
      "Facturación consolidada multi-cuenta",
    ],
    pricing: "Gratuito",
  },
  // Infrastructure
  {
    id: "aws-global-infrastructure",
    name: "AWS Global Infrastructure",
    category: "Infrastructure",
    description:
      "La infraestructura física global de AWS: Regiones, Zonas de Disponibilidad y Edge Locations.",
    keyFeatures: [
      "30+ Regiones geográficas",
      "99 Zonas de Disponibilidad",
      "400+ Edge Locations para CloudFront",
      "Local Zones y Wavelength",
      "Alta disponibilidad y redundancia",
    ],
    useCases: [
      "Despliegue global de aplicaciones",
      "Cumplimiento de residencia de datos",
      "Baja latencia para usuarios finales",
    ],
    pricing: "N/A - Es la infraestructura base",
  },
  {
    id: "aws-outposts",
    name: "AWS Outposts",
    category: "Hybrid Cloud",
    description:
      "Infraestructura y servicios AWS completamente administrados en tu data center.",
    keyFeatures: [
      "Hardware AWS en tu ubicación",
      "Mismas APIs y herramientas de AWS",
      "Baja latencia para cargas locales",
      "Rack completo o servidores individuales",
    ],
    useCases: [
      "Aplicaciones con requisitos de latencia",
      "Residencia de datos local",
      "Migración gradual a cloud",
    ],
    pricing: "Modelo de suscripción de 3 años",
  },
  // Security & Compliance
  {
    id: "aws-artifact",
    name: "AWS Artifact",
    category: "Security",
    description:
      "Portal de autoservicio para acceder a informes de cumplimiento y acuerdos de AWS.",
    keyFeatures: [
      "Informes SOC, PCI, ISO",
      "Business Associate Addendum (BAA)",
      "Acuerdos de confidencialidad",
      "Descarga bajo demanda",
    ],
    useCases: [
      "Auditorías de cumplimiento",
      "Requisitos regulatorios",
      "Due diligence",
    ],
    pricing: "Gratuito",
  },
  {
    id: "aws-sso",
    name: "AWS IAM Identity Center",
    shortName: "IAM Identity Center (SSO)",
    category: "Security",
    description:
      "Gestión centralizada de acceso SSO a múltiples cuentas AWS y aplicaciones.",
    keyFeatures: [
      "Single Sign-On para cuentas AWS",
      "Integración con directorios externos (AD, Okta)",
      "Asignación de permisos centralizada",
      "Portal de usuario para acceso",
    ],
    useCases: [
      "Acceso multi-cuenta",
      "Federación de identidades",
      "Simplificar acceso de usuarios",
    ],
    pricing: "Gratuito",
  },
  {
    id: "inspector",
    name: "Amazon Inspector",
    category: "Security",
    description:
      "Servicio de evaluación de seguridad automatizada para EC2 y contenedores.",
    keyFeatures: [
      "Escaneo continuo de vulnerabilidades",
      "Análisis de configuración de red",
      "Integración con ECR para imágenes",
      "Puntuación de riesgo",
    ],
    useCases: [
      "Evaluación de seguridad",
      "Cumplimiento de parches",
      "Pipeline de CI/CD seguro",
    ],
    pricing: "Pago por instancia/imagen escaneada",
  },
  {
    id: "macie",
    name: "Amazon Macie",
    category: "Security",
    description:
      "Servicio de seguridad que usa ML para descubrir y proteger datos sensibles en S3.",
    keyFeatures: [
      "Descubrimiento automático de datos sensibles",
      "Detección de PII, PHI, credenciales",
      "Alertas de acceso anómalo",
      "Dashboard de seguridad de datos",
    ],
    useCases: [
      "Protección de datos personales",
      "Cumplimiento GDPR/HIPAA",
      "Auditoría de datos en S3",
    ],
    pricing: "Pago por GB escaneado",
  },
  {
    id: "security-hub",
    name: "AWS Security Hub",
    category: "Security",
    description:
      "Vista centralizada de alertas de seguridad y estado de cumplimiento.",
    keyFeatures: [
      "Agregación de findings de múltiples servicios",
      "Estándares de seguridad (CIS, PCI-DSS)",
      "Puntuación de seguridad",
      "Automatización con EventBridge",
    ],
    useCases: [
      "Gestión centralizada de seguridad",
      "Cumplimiento continuo",
      "Priorización de remediación",
    ],
    pricing: "Pago por checks y findings",
  },
  {
    id: "secrets-manager",
    name: "AWS Secrets Manager",
    category: "Security",
    description:
      "Servicio para almacenar, rotar y gestionar secretos (contraseñas, API keys).",
    keyFeatures: [
      "Rotación automática de credenciales",
      "Integración nativa con RDS",
      "Cifrado con KMS",
      "Acceso vía API/SDK",
    ],
    useCases: [
      "Gestión de contraseñas de BD",
      "API keys y tokens",
      "Credenciales de aplicaciones",
    ],
    pricing: "$0.40/secreto/mes + $0.05 por 10K llamadas",
  },
  {
    id: "control-tower",
    name: "AWS Control Tower",
    category: "Management",
    description:
      "Servicio para configurar y gobernar un entorno multi-cuenta seguro.",
    keyFeatures: [
      "Landing Zone automatizada",
      "Guardrails (preventivos y detectivos)",
      "Account Factory para crear cuentas",
      "Dashboard de cumplimiento",
    ],
    useCases: [
      "Configuración inicial de AWS",
      "Gobierno multi-cuenta",
      "Cumplimiento empresarial",
    ],
    pricing: "Sin costo adicional (pagas servicios subyacentes)",
  },
  // Compute +
  {
    id: "batch",
    name: "AWS Batch",
    category: "Compute",
    description:
      "Servicio para ejecutar trabajos de procesamiento por lotes a cualquier escala.",
    keyFeatures: [
      "Provisión automática de recursos",
      "Colas de trabajos con prioridades",
      "Integración con Spot Instances",
      "Soporte para contenedores",
    ],
    useCases: [
      "Procesamiento de datos masivo",
      "Renderizado de video",
      "Simulaciones científicas",
    ],
    pricing: "Sin costo adicional (pagas EC2/Fargate)",
  },
  // Storage +
  {
    id: "fsx",
    name: "Amazon FSx",
    category: "Storage",
    description:
      "Sistemas de archivos completamente administrados (Windows, Lustre, NetApp, OpenZFS).",
    keyFeatures: [
      "FSx for Windows File Server",
      "FSx for Lustre (HPC)",
      "FSx for NetApp ONTAP",
      "FSx for OpenZFS",
    ],
    useCases: [
      "Aplicaciones Windows",
      "Machine Learning/HPC",
      "Migración de NAS",
    ],
    pricing: "Pago por GB-mes y throughput",
  },
  // Database +
  {
    id: "documentdb",
    name: "Amazon DocumentDB",
    category: "Database",
    description:
      "Base de datos de documentos compatible con MongoDB, completamente administrada.",
    keyFeatures: [
      "Compatible con MongoDB",
      "Escalado automático de almacenamiento",
      "Alta disponibilidad con replicación",
      "Backups automáticos",
    ],
    useCases: [
      "Aplicaciones con MongoDB",
      "Catálogos de productos",
      "Gestión de contenido",
    ],
    pricing: "Pago por instancia + almacenamiento + I/O",
  },
  {
    id: "neptune",
    name: "Amazon Neptune",
    category: "Database",
    description:
      "Base de datos de grafos completamente administrada.",
    keyFeatures: [
      "Soporta Property Graph y RDF",
      "Consultas Gremlin y SPARQL",
      "Alta disponibilidad",
      "Replicación de lectura",
    ],
    useCases: [
      "Redes sociales",
      "Detección de fraude",
      "Grafos de conocimiento",
    ],
    pricing: "Pago por instancia + almacenamiento + I/O",
  },
  // Networking +
  {
    id: "global-accelerator",
    name: "AWS Global Accelerator",
    category: "Networking",
    description:
      "Servicio que mejora disponibilidad y rendimiento usando la red global de AWS.",
    keyFeatures: [
      "IPs anycast estáticas",
      "Enrutamiento inteligente por red AWS",
      "Health checks y failover",
      "Protección DDoS incluida",
    ],
    useCases: [
      "Aplicaciones globales",
      "Gaming y streaming",
      "Failover multi-región",
    ],
    pricing: "Pago por hora + datos transferidos",
  },
  {
    id: "vpn",
    name: "AWS VPN",
    category: "Networking",
    description:
      "Conexiones VPN seguras entre tu red y AWS.",
    keyFeatures: [
      "Site-to-Site VPN para conectar data centers",
      "Client VPN para usuarios remotos",
      "IPsec cifrado",
      "Alta disponibilidad con túneles redundantes",
    ],
    useCases: [
      "Conectividad híbrida",
      "Acceso remoto seguro",
      "Backup de Direct Connect",
    ],
    pricing: "Pago por hora de conexión + datos",
  },
  // Management & Governance +
  {
    id: "systems-manager",
    name: "AWS Systems Manager",
    category: "Management",
    description:
      "Suite de herramientas para gestionar recursos AWS y on-premises.",
    keyFeatures: [
      "Session Manager: acceso shell sin SSH",
      "Patch Manager: gestión de parches",
      "Parameter Store: almacén de configuración",
      "Run Command: ejecución remota",
      "Automation: runbooks automatizados",
    ],
    useCases: [
      "Gestión de flotas de servidores",
      "Automatización de operaciones",
      "Gestión de configuración",
    ],
    pricing: "Muchas funciones gratuitas; algunas avanzadas tienen costo",
  },
  {
    id: "auto-scaling",
    name: "AWS Auto Scaling",
    category: "Management",
    description:
      "Servicio para escalar automáticamente recursos según demanda.",
    keyFeatures: [
      "Escalado de EC2, ECS, DynamoDB, Aurora",
      "Políticas basadas en métricas",
      "Escalado predictivo con ML",
      "Planes de escalado unificados",
    ],
    useCases: [
      "Mantener disponibilidad",
      "Optimizar costos",
      "Manejar picos de tráfico",
    ],
    pricing: "Gratuito (pagas por recursos +)",
  },
  {
    id: "x-ray",
    name: "AWS X-Ray",
    category: "Developer Tools",
    description:
      "Servicio para analizar y depurar aplicaciones distribuidas.",
    keyFeatures: [
      "Trazas de solicitudes end-to-end",
      "Mapa de servicios visual",
      "Identificación de cuellos de botella",
      "Integración con Lambda, ECS, EC2",
    ],
    useCases: [
      "Debug de microservicios",
      "Análisis de rendimiento",
      "Identificar errores",
    ],
    pricing: "Primeras 100K trazas gratis, luego $5/millón",
  },
  {
    id: "aws-well-architected-tool",
    name: "AWS Well-Architected Tool",
    category: "Management",
    description:
      "Herramienta para revisar arquitecturas según las mejores prácticas del Well-Architected Framework.",
    keyFeatures: [
      "Evaluación de los 6 pilares",
      "Identificación de riesgos",
      "Recomendaciones de mejora",
      "Seguimiento de progreso",
    ],
    useCases: [
      "Revisión de arquitecturas",
      "Mejora continua",
      "Preparación para producción",
    ],
    pricing: "Gratuito",
  },
  // Support
  {
    id: "aws-support",
    name: "AWS Support",
    category: "Support",
    description:
      "Planes de soporte técnico de AWS con diferentes niveles de servicio.",
    keyFeatures: [
      "Basic: documentación y foros (gratis)",
      "Developer: soporte técnico por email",
      "Business: soporte 24/7, respuesta en 1 hora",
      "Enterprise: TAM dedicado, respuesta en 15 min",
    ],
    useCases: [
      "Resolución de problemas técnicos",
      "Orientación arquitectónica",
      "Optimización de costos",
    ],
    pricing: "Desde gratis hasta % del gasto mensual",
  },
  {
    id: "aws-health",
    name: "AWS Health Dashboard",
    shortName: "AWS Health",
    category: "Support",
    description:
      "Dashboard personalizado que muestra el estado de servicios AWS que afectan tu cuenta.",
    keyFeatures: [
      "Alertas de eventos que afectan tus recursos",
      "Estado de servicios en tiempo real",
      "Notificaciones proactivas",
      "Integración con EventBridge",
    ],
    useCases: [
      "Monitoreo de disponibilidad",
      "Respuesta a incidentes",
      "Planificación de mantenimiento",
    ],
    pricing: "Gratuito",
  },
  {
    id: "aws-marketplace",
    name: "AWS Marketplace",
    category: "Support",
    description:
      "Catálogo digital de software de terceros para ejecutar en AWS.",
    keyFeatures: [
      "Miles de productos de software",
      "Facturación consolidada con AWS",
      "Despliegue con 1 clic",
      "AMIs, contenedores, SaaS",
    ],
    useCases: [
      "Adquirir software de terceros",
      "Probar soluciones rápidamente",
      "Vender tu propio software",
    ],
    pricing: "Varía según el producto",
  },
];

export const servicesByCategory = services.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service.category].push(service);
  return acc;
}, {} as Record<string, AWSService[]>);

export const getServiceById = (id: string): AWSService | undefined => {
  return services.find((s) => s.id === id);
};

export default services;
