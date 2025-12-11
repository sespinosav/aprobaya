import { Domain } from "@/types";

export const domain1: Domain = {
  id: "domain-1",
  name: "Conceptos de la nube",
  weight: 24,
  description:
    "Este dominio cubre los conceptos fundamentales de la nube de AWS, incluyendo la propuesta de valor, los beneficios económicos y los principios de diseño de la arquitectura en la nube.",
  topics: [
    {
      id: "topic-1-1",
      name: "Definir los beneficios de la nube de AWS",
      description:
        "Comprender la propuesta de valor de la nube de AWS y cómo beneficia a las organizaciones.",
      keyPoints: [
        "Alta disponibilidad y tolerancia a fallos",
        "Elasticidad y escalabilidad automática",
        "Agilidad y velocidad de despliegue",
        "Pago por uso (pay-as-you-go)",
        "Economías de escala",
        "Alcance global en minutos",
        "Sin gestión de data centers propios",
      ],
      services: ["aws-global-infrastructure"],
      estimatedTime: 15,
    },
    {
      id: "topic-1-2",
      name: "Identificar aspectos de la economía de la nube",
      description:
        "Entender los conceptos de gastos de capital (CapEx) vs gastos operativos (OpEx) y el modelo de precios de AWS.",
      keyPoints: [
        "CapEx vs OpEx: de inversión inicial a gastos operativos",
        "Total Cost of Ownership (TCO)",
        "Right-sizing: elegir el tamaño correcto de recursos",
        "Beneficios de las instancias reservadas",
        "Ahorro con Savings Plans",
        "AWS Pricing Calculator para estimaciones",
      ],
      services: ["aws-pricing-calculator", "aws-tco-calculator"],
      estimatedTime: 20,
    },
    {
      id: "topic-1-3",
      name: "Explicar los principios de diseño de la arquitectura en la nube",
      description:
        "Conocer los pilares del AWS Well-Architected Framework y sus mejores prácticas.",
      keyPoints: [
        "Diseñar para fallos (Design for failure)",
        "Desacoplar componentes",
        "Implementar elasticidad",
        "Pensar en paralelo",
        "Mantener servidores sin estado (stateless)",
        "Los 6 pilares del Well-Architected Framework",
      ],
      services: ["aws-well-architected-tool"],
      estimatedTime: 25,
    },
    {
      id: "topic-1-4",
      name: "Comprender los modelos de computación en la nube",
      description:
        "Diferenciar entre IaaS, PaaS y SaaS, así como los modelos de despliegue.",
      keyPoints: [
        "IaaS: Infraestructura como Servicio (EC2)",
        "PaaS: Plataforma como Servicio (Elastic Beanstalk)",
        "SaaS: Software como Servicio",
        "Nube pública, privada e híbrida",
        "AWS Outposts para nube híbrida",
        "Ventajas de cada modelo",
      ],
      services: ["ec2", "elastic-beanstalk", "aws-outposts"],
      estimatedTime: 20,
    },
  ],
};

export const domain2: Domain = {
  id: "domain-2",
  name: "Seguridad y cumplimiento",
  weight: 30,
  description:
    "Este dominio abarca el modelo de responsabilidad compartida, los servicios de seguridad de AWS, y los conceptos de cumplimiento normativo.",
  topics: [
    {
      id: "topic-2-1",
      name: "Modelo de responsabilidad compartida",
      description:
        "Comprender qué seguridad gestiona AWS y qué es responsabilidad del cliente.",
      keyPoints: [
        "AWS: Seguridad DE la nube (infraestructura física)",
        "Cliente: Seguridad EN la nube (datos, acceso, apps)",
        "Varía según el servicio (EC2 vs Lambda vs S3)",
        "AWS gestiona: hardware, software, redes, instalaciones",
        "Cliente gestiona: datos, IAM, firewalls, cifrado",
        "Cumplimiento normativo compartido",
      ],
      services: ["iam", "aws-artifact"],
      estimatedTime: 20,
    },
    {
      id: "topic-2-2",
      name: "AWS Identity and Access Management (IAM)",
      description:
        "Gestionar usuarios, grupos, roles y políticas de acceso en AWS.",
      keyPoints: [
        "Usuarios IAM: identidades individuales",
        "Grupos IAM: colecciones de usuarios",
        "Roles IAM: permisos temporales para servicios/usuarios",
        "Políticas IAM: documentos JSON que definen permisos",
        "Principio de mínimo privilegio",
        "MFA para seguridad adicional",
        "Access Keys para acceso programático",
        "Usuario root: proteger y no usar diariamente",
      ],
      services: ["iam", "aws-organizations", "aws-sso"],
      estimatedTime: 30,
    },
    {
      id: "topic-2-3",
      name: "Servicios de seguridad de AWS",
      description:
        "Conocer los principales servicios de seguridad para proteger recursos en AWS.",
      keyPoints: [
        "AWS WAF: firewall de aplicaciones web",
        "AWS Shield: protección DDoS",
        "Amazon GuardDuty: detección de amenazas",
        "AWS Inspector: análisis de vulnerabilidades",
        "AWS Macie: protección de datos sensibles (S3)",
        "AWS Security Hub: vista centralizada de seguridad",
        "AWS Secrets Manager: gestión de secretos",
        "AWS KMS: gestión de claves de cifrado",
      ],
      services: ["waf", "shield", "guardduty", "inspector", "macie", "security-hub", "secrets-manager", "kms"],
      estimatedTime: 35,
    },
    {
      id: "topic-2-4",
      name: "Cumplimiento y gobernanza",
      description:
        "Entender los programas de cumplimiento de AWS y herramientas de gobernanza.",
      keyPoints: [
        "AWS Artifact: informes de cumplimiento y acuerdos",
        "Programas de cumplimiento: HIPAA, PCI-DSS, SOC, GDPR",
        "AWS Config: auditoría de configuraciones",
        "AWS CloudTrail: registro de llamadas a API",
        "AWS Organizations: gestión multi-cuenta",
        "Service Control Policies (SCPs)",
        "AWS Control Tower: configuración multi-cuenta segura",
      ],
      services: ["aws-artifact", "aws-config", "cloudtrail", "aws-organizations", "control-tower"],
      estimatedTime: 25,
    },
  ],
};

export const domain3: Domain = {
  id: "domain-3",
  name: "Tecnología y servicios en la nube",
  weight: 34,
  description:
    "El dominio más extenso cubre la infraestructura global de AWS, los servicios principales de cómputo, almacenamiento, bases de datos, redes y más.",
  topics: [
    {
      id: "topic-3-1",
      name: "Infraestructura global de AWS",
      description:
        "Comprender la arquitectura global de regiones, zonas de disponibilidad y edge locations.",
      keyPoints: [
        "Regiones: áreas geográficas con múltiples AZs",
        "Zonas de disponibilidad (AZs): data centers aislados",
        "Edge Locations: puntos de presencia para CDN",
        "Cómo elegir una región (latencia, cumplimiento, costo)",
        "Regiones vs Local Zones vs Wavelength Zones",
        "Alta disponibilidad con múltiples AZs",
      ],
      services: ["cloudfront", "global-accelerator"],
      estimatedTime: 20,
    },
    {
      id: "topic-3-2",
      name: "Servicios de cómputo",
      description:
        "Conocer las opciones de cómputo en AWS: EC2, Lambda, contenedores y más.",
      keyPoints: [
        "Amazon EC2: servidores virtuales escalables",
        "Tipos de instancias EC2: propósito general, cómputo, memoria, etc.",
        "AWS Lambda: cómputo serverless (sin servidores)",
        "Amazon ECS/EKS: contenedores Docker/Kubernetes",
        "AWS Fargate: contenedores serverless",
        "AWS Elastic Beanstalk: PaaS para aplicaciones",
        "Amazon Lightsail: VPS simplificado",
        "AWS Batch: procesamiento por lotes",
      ],
      services: ["ec2", "lambda", "ecs", "eks", "fargate", "elastic-beanstalk", "lightsail", "batch"],
      estimatedTime: 40,
    },
    {
      id: "topic-3-3",
      name: "Servicios de almacenamiento",
      description:
        "Entender las opciones de almacenamiento: S3, EBS, EFS, y más.",
      keyPoints: [
        "Amazon S3: almacenamiento de objetos (11 nueves de durabilidad)",
        "Clases de S3: Standard, IA, Glacier, etc.",
        "Amazon EBS: volúmenes de bloque para EC2",
        "Amazon EFS: sistema de archivos compartido (NFS)",
        "Amazon FSx: sistemas de archivos administrados",
        "AWS Storage Gateway: híbrido on-premises/cloud",
        "AWS Snow Family: migración de datos masiva",
      ],
      services: ["s3", "ebs", "efs", "fsx", "storage-gateway", "snowball"],
      estimatedTime: 35,
    },
    {
      id: "topic-3-4",
      name: "Servicios de bases de datos",
      description:
        "Conocer las opciones de bases de datos relacionales y NoSQL de AWS.",
      keyPoints: [
        "Amazon RDS: bases de datos relacionales administradas",
        "Motores RDS: MySQL, PostgreSQL, Oracle, SQL Server, MariaDB",
        "Amazon Aurora: MySQL/PostgreSQL optimizado para la nube",
        "Amazon DynamoDB: NoSQL serverless de alto rendimiento",
        "Amazon ElastiCache: caché en memoria (Redis/Memcached)",
        "Amazon Redshift: data warehouse",
        "Amazon DocumentDB: compatible con MongoDB",
        "Amazon Neptune: base de datos de grafos",
      ],
      services: ["rds", "aurora", "dynamodb", "elasticache", "redshift", "documentdb", "neptune"],
      estimatedTime: 35,
    },
    {
      id: "topic-3-5",
      name: "Servicios de redes",
      description:
        "Comprender VPC, subredes, seguridad de red y conectividad.",
      keyPoints: [
        "Amazon VPC: red virtual privada en la nube",
        "Subredes públicas y privadas",
        "Internet Gateway: acceso a internet",
        "NAT Gateway: salida a internet para subredes privadas",
        "Security Groups: firewall a nivel de instancia (stateful)",
        "Network ACLs: firewall a nivel de subred (stateless)",
        "Route 53: DNS y registro de dominios",
        "VPN y Direct Connect: conectividad híbrida",
        "Elastic Load Balancing: distribución de tráfico",
      ],
      services: ["vpc", "route53", "elb", "direct-connect", "vpn"],
      estimatedTime: 40,
    },
    {
      id: "topic-3-6",
      name: "Servicios de gestión y monitoreo",
      description:
        "Herramientas para monitorear, gestionar y automatizar recursos de AWS.",
      keyPoints: [
        "Amazon CloudWatch: monitoreo y alertas",
        "AWS CloudFormation: infraestructura como código",
        "AWS Systems Manager: gestión de recursos",
        "AWS Auto Scaling: escalado automático",
        "AWS Trusted Advisor: recomendaciones de mejores prácticas",
        "AWS CloudTrail: auditoría de acciones",
        "AWS X-Ray: trazabilidad de aplicaciones",
      ],
      services: ["cloudwatch", "cloudformation", "systems-manager", "auto-scaling", "trusted-advisor", "x-ray"],
      estimatedTime: 30,
    },
  ],
};

export const domain4: Domain = {
  id: "domain-4",
  name: "Facturación, precios y soporte",
  weight: 12,
  description:
    "Este dominio cubre los modelos de precios de AWS, herramientas de gestión de costos y los planes de soporte disponibles.",
  topics: [
    {
      id: "topic-4-1",
      name: "Modelos de precios de AWS",
      description:
        "Comprender los diferentes modelos de pago y opciones de ahorro.",
      keyPoints: [
        "Pago por uso: sin compromisos iniciales",
        "Reserva de capacidad: descuentos por 1-3 años",
        "Instancias Spot: hasta 90% de descuento",
        "Savings Plans: flexibilidad con compromiso de uso",
        "Capa gratuita (Free Tier): 12 meses + siempre gratuito",
        "Precios por regiones pueden variar",
        "Transferencia de datos: entrada gratis, salida cobra",
      ],
      services: ["aws-pricing-calculator"],
      estimatedTime: 20,
    },
    {
      id: "topic-4-2",
      name: "Herramientas de gestión de costos",
      description:
        "Conocer las herramientas para monitorear y optimizar costos en AWS.",
      keyPoints: [
        "AWS Cost Explorer: visualización de gastos",
        "AWS Budgets: alertas de presupuesto",
        "AWS Cost and Usage Reports: informes detallados",
        "AWS Billing Dashboard: resumen de facturación",
        "Tags para asignación de costos",
        "AWS Organizations: facturación consolidada",
        "Reserved Instance recommendations",
      ],
      services: ["cost-explorer", "aws-budgets", "billing"],
      estimatedTime: 20,
    },
    {
      id: "topic-4-3",
      name: "Planes de soporte de AWS",
      description:
        "Entender los diferentes niveles de soporte y sus características.",
      keyPoints: [
        "Basic: gratuito, acceso a documentación y foros",
        "Developer: $29/mes, soporte por email",
        "Business: $100+/mes, soporte 24/7, Trusted Advisor completo",
        "Enterprise On-Ramp: $5,500/mes, TAM pool",
        "Enterprise: $15,000+/mes, TAM dedicado",
        "Tiempos de respuesta según severidad",
        "AWS re:Post (antes foros) y documentación",
        "AWS Professional Services para proyectos",
      ],
      services: ["aws-support", "trusted-advisor"],
      estimatedTime: 15,
    },
    {
      id: "topic-4-4",
      name: "Recursos de soporte técnico",
      description:
        "Identificar recursos para obtener ayuda técnica en AWS.",
      keyPoints: [
        "AWS Documentation: guías y referencias",
        "AWS re:Post: comunidad de preguntas y respuestas",
        "AWS Knowledge Center: FAQ técnico",
        "AWS Trusted Advisor: recomendaciones automatizadas",
        "AWS Health Dashboard: estado de los servicios",
        "AWS IQ: expertos certificados on-demand",
        "AWS Marketplace: soluciones de terceros",
      ],
      services: ["trusted-advisor", "aws-health", "aws-marketplace"],
      estimatedTime: 15,
    },
  ],
};

export const allDomains: Domain[] = [domain1, domain2, domain3, domain4];

export default allDomains;
