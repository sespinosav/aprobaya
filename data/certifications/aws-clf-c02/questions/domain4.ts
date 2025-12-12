import { Question } from "@/types";

// Dominio 4: Facturación, precios y soporte (12%)
export const domain4Questions: Question[] = [
  {
    id: "clf-021",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué modelo de precios de AWS permite a los clientes pagar por capacidad de cómputo por hora o por segundo, sin compromisos a largo plazo?",
    options: [
      { id: "a", text: "Reserved Instances" },
      { id: "b", text: "Spot Instances" },
      { id: "c", text: "On-Demand Instances" },
      { id: "d", text: "Savings Plans" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Las instancias On-Demand permiten pagar por capacidad de cómputo por hora o por segundo (según el sistema operativo) sin compromisos iniciales ni a largo plazo. Ideal para cargas impredecibles o aplicaciones de corta duración.",
      whyOthersWrong: {
        a: "Reserved Instances requieren un compromiso de 1 o 3 años a cambio de descuentos significativos (hasta 72%). No son sin compromiso.",
        b: "Spot Instances ofrecen los mayores descuentos (hasta 90%) pero pueden ser interrumpidas cuando AWS necesita la capacidad. No garantizan disponibilidad.",
        d: "Savings Plans requieren un compromiso de uso por hora durante 1 o 3 años a cambio de descuentos. No son sin compromiso.",
      },
    },
    tags: ["precios", "on-demand", "modelos-pago"],
  },
  {
    id: "clf-022",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS permite a los clientes crear presupuestos y recibir alertas cuando los costos o el uso exceden los umbrales definidos?",
    options: [
      { id: "a", text: "AWS Cost Explorer" },
      { id: "b", text: "AWS Budgets" },
      { id: "c", text: "AWS Pricing Calculator" },
      { id: "d", text: "AWS Cost and Usage Report" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Budgets permite crear presupuestos personalizados para rastrear costos y uso. Puede configurar alertas por email o SNS cuando los gastos actuales o proyectados superan umbrales definidos (por ejemplo, 80% del presupuesto mensual).",
      whyOthersWrong: {
        a: "AWS Cost Explorer visualiza y analiza costos históricos con gráficos y filtros. Muestra datos pasados y proyecciones, pero las alertas de presupuesto están en AWS Budgets.",
        c: "AWS Pricing Calculator estima costos de arquitecturas futuras antes de desplegarlas. No monitorea gastos actuales ni envía alertas.",
        d: "AWS Cost and Usage Report genera informes detallados de costos y uso para análisis en profundidad o integración con herramientas de BI. No envía alertas.",
      },
    },
    tags: ["budgets", "presupuestos", "alertas", "gestion-costos"],
  },
  {
    id: "clf-023",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "easy",
    question:
      "¿Cuál de los siguientes planes de AWS Support proporciona acceso a un Technical Account Manager (TAM)?",
    options: [
      { id: "a", text: "Basic Support" },
      { id: "b", text: "Developer Support" },
      { id: "c", text: "Business Support" },
      { id: "d", text: "Enterprise Support" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "Solo el plan Enterprise Support incluye un Technical Account Manager (TAM) dedicado. El TAM proporciona orientación proactiva, coordina el acceso a programas y expertos de AWS, y ayuda a optimizar el uso de AWS.",
      whyOthersWrong: {
        a: "Basic Support es gratuito e incluye solo documentación, whitepapers, y acceso a foros. No incluye soporte técnico ni TAM.",
        b: "Developer Support ($29/mes mínimo) incluye soporte por email durante horario laboral para desarrollo y testing. No incluye TAM.",
        c: "Business Support ($100/mes mínimo) incluye soporte 24/7 por chat y teléfono, y acceso completo a Trusted Advisor, pero no incluye TAM.",
      },
    },
    tags: ["support-plans", "tam", "enterprise", "soporte"],
  },
  {
    id: "clf-024",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS proporciona recomendaciones automatizadas para ayudar a reducir costos, mejorar el rendimiento, y aumentar la seguridad y tolerancia a fallos?",
    options: [
      { id: "a", text: "AWS Personal Health Dashboard" },
      { id: "b", text: "AWS Trusted Advisor" },
      { id: "c", text: "AWS Systems Manager" },
      { id: "d", text: "AWS Config" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Trusted Advisor analiza tu cuenta AWS y proporciona recomendaciones en 5 categorías: Optimización de costos, Rendimiento, Seguridad, Tolerancia a fallos, y Límites de servicio. Los checks disponibles dependen del plan de soporte.",
      whyOthersWrong: {
        a: "AWS Personal Health Dashboard (ahora parte de AWS Health) muestra el estado de los servicios de AWS que afectan tus recursos específicos, pero no proporciona recomendaciones de mejores prácticas.",
        c: "AWS Systems Manager proporciona visibilidad operativa y automatización (parches, inventario, etc.), pero no recomendaciones de costos o mejores prácticas como Trusted Advisor.",
        d: "AWS Config audita las configuraciones de recursos para cumplimiento con reglas, pero no proporciona recomendaciones generales de mejores prácticas como Trusted Advisor.",
      },
    },
    tags: ["trusted-advisor", "recomendaciones", "mejores-practicas", "optimizacion"],
  },
  {
    id: "clf-025",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué beneficio proporciona AWS Organizations en términos de facturación?",
    options: [
      { id: "a", text: "Descuentos automáticos del 50% en todos los servicios" },
      { id: "b", text: "Facturación consolidada para múltiples cuentas AWS" },
      { id: "c", text: "Créditos AWS ilimitados para nuevas cuentas" },
      { id: "d", text: "Soporte Enterprise gratuito para todas las cuentas" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Organizations permite consolidar la facturación de múltiples cuentas AWS en una sola factura. Esto simplifica la gestión financiera y puede generar descuentos por volumen al agregar el uso de todas las cuentas.",
      whyOthersWrong: {
        a: "AWS Organizations no proporciona descuentos automáticos del 50%. Los descuentos por volumen dependen del uso agregado y varían según el servicio.",
        c: "AWS Organizations no proporciona créditos ilimitados. Los créditos AWS se obtienen a través de programas específicos o promociones.",
        d: "Cada cuenta debe tener su propio plan de soporte. Organizations no proporciona soporte Enterprise gratuito.",
      },
    },
    tags: ["organizations", "facturacion-consolidada", "multi-cuenta"],
  },
  {
    id: "clf-026",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Cuáles de las siguientes son categorías de verificación de AWS Trusted Advisor? (Seleccione DOS respuestas)",
    options: [
      { id: "a", text: "Optimización de costos" },
      { id: "b", text: "Velocidad de despliegue" },
      { id: "c", text: "Seguridad" },
      { id: "d", text: "Innovación" },
      { id: "e", text: "Cumplimiento GDPR" },
    ],
    correctAnswers: ["a", "c"],
    explanation: {
      correct:
        "AWS Trusted Advisor tiene 5 categorías de verificación: 1) Optimización de costos, 2) Rendimiento, 3) Seguridad, 4) Tolerancia a fallos, y 5) Límites de servicio. Optimización de costos y Seguridad son dos de las categorías oficiales.",
      whyOthersWrong: {
        b: "Velocidad de despliegue no es una categoría de Trusted Advisor. El rendimiento de aplicaciones sí se evalúa, pero no la velocidad de despliegue.",
        d: "Innovación no es una categoría de Trusted Advisor. Las categorías se centran en operaciones, costos y seguridad, no en innovación.",
        e: "Cumplimiento GDPR específico no es una categoría de Trusted Advisor. La seguridad general sí se evalúa, pero el cumplimiento normativo específico se gestiona con AWS Artifact y Config.",
      },
    },
    tags: ["trusted-advisor", "categorias", "optimizacion-costos", "seguridad"],
  },
  {
    id: "clf-027",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué incluye la capa gratuita de AWS (Free Tier) para nuevos clientes durante los primeros 12 meses?",
    options: [
      { id: "a", text: "Instancias EC2 ilimitadas" },
      { id: "b", text: "750 horas mensuales de instancias t2.micro o t3.micro EC2" },
      { id: "c", text: "Soporte Enterprise gratuito" },
      { id: "d", text: "Almacenamiento S3 ilimitado" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "El Free Tier de AWS incluye 750 horas mensuales de instancias t2.micro o t3.micro EC2 (suficiente para ejecutar una instancia 24/7) durante los primeros 12 meses. También incluye otros servicios como 5GB de S3, 25GB de DynamoDB, y más.",
      whyOthersWrong: {
        a: "El Free Tier no incluye instancias ilimitadas. Está limitado a tipos específicos (t2.micro/t3.micro) y horas mensuales.",
        c: "El Free Tier incluye el plan Basic Support, no Enterprise. Enterprise Support tiene un costo significativo.",
        d: "El Free Tier incluye solo 5GB de almacenamiento estándar en S3, no ilimitado.",
      },
    },
    tags: ["free-tier", "ec2", "capa-gratuita", "nuevos-clientes"],
  },
  // Nuevas preguntas basadas en Whizlabs y guía oficial CLF-C02
  {
    id: "clf-075",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué herramienta de AWS ayuda a los clientes a visualizar, entender y gestionar los costos y el uso de AWS a lo largo del tiempo?",
    options: [
      { id: "a", text: "AWS Budgets" },
      { id: "b", text: "AWS Cost Explorer" },
      { id: "c", text: "AWS Pricing Calculator" },
      { id: "d", text: "AWS Organizations" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Cost Explorer te permite visualizar y gestionar tus costos y uso de AWS a lo largo del tiempo. Proporciona informes predeterminados, la capacidad de crear informes personalizados, y predicciones de costos futuros.",
      whyOthersWrong: {
        a: "AWS Budgets permite establecer alertas cuando los costos superan umbrales, pero Cost Explorer es para visualización y análisis.",
        c: "Pricing Calculator estima costos de nuevos servicios, no analiza costos históricos.",
        d: "Organizations gestiona múltiples cuentas AWS, no visualiza costos detallados.",
      },
    },
    tags: ["cost-explorer", "costos", "visualizacion", "optimizacion"],
  },
  {
    id: "clf-076",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué herramienta de AWS proporciona alertas personalizadas que notifican cuando problemas de rendimiento o disponibilidad pueden afectar tus recursos AWS?",
    options: [
      { id: "a", text: "AWS CloudWatch" },
      { id: "b", text: "AWS Personal Health Dashboard" },
      { id: "c", text: "AWS Trusted Advisor" },
      { id: "d", text: "AWS Config" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Personal Health Dashboard proporciona alertas y orientación proactiva cuando AWS experimenta eventos que pueden afectar tus recursos. Muestra eventos relevantes personalizados para tu entorno específico.",
      whyOthersWrong: {
        a: "CloudWatch monitorea métricas de tus recursos, no eventos de salud del servicio AWS.",
        c: "Trusted Advisor da recomendaciones de mejores prácticas, no alertas de problemas del servicio AWS.",
        d: "Config rastrea configuraciones de recursos, no problemas de disponibilidad del servicio AWS.",
      },
    },
    tags: ["personal-health-dashboard", "alertas", "disponibilidad", "eventos"],
  },
  {
    id: "clf-077",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué modelo de precios de AWS ofrece hasta un 72% de descuento a cambio de un compromiso de uso de 1 o 3 años?",
    options: [
      { id: "a", text: "On-Demand Instances" },
      { id: "b", text: "Spot Instances" },
      { id: "c", text: "Savings Plans" },
      { id: "d", text: "Dedicated Hosts" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Savings Plans ofrecen precios más bajos (hasta 72% de descuento) comparado con On-Demand, a cambio de un compromiso de uso consistente (medido en $/hora) durante 1 o 3 años. Hay Compute Savings Plans y EC2 Instance Savings Plans.",
      whyOthersWrong: {
        a: "On-Demand es el precio completo sin descuentos ni compromisos.",
        b: "Spot Instances ofrecen hasta 90% de descuento pero pueden ser interrumpidas.",
        d: "Dedicated Hosts son para requisitos de licenciamiento, no ofrecen los mayores descuentos.",
      },
    },
    tags: ["savings-plans", "descuentos", "compromiso", "precios"],
  },
  {
    id: "clf-078",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Cuáles de los siguientes factores determinan el costo de almacenamiento en Amazon S3? (Seleccione DOS respuestas)",
    options: [
      { id: "a", text: "La cantidad de datos almacenados" },
      { id: "b", text: "El número de buckets creados" },
      { id: "c", text: "La región donde se almacenan los datos" },
      { id: "d", text: "El nombre del bucket" },
      { id: "e", text: "El nombre de los objetos" },
    ],
    correctAnswers: ["a", "c"],
    explanation: {
      correct:
        "El costo de S3 depende de: 1) La cantidad de datos almacenados (GB/mes), 2) La región de almacenamiento (los precios varían por región), 3) La clase de almacenamiento, 4) Las solicitudes realizadas, y 5) La transferencia de datos.",
      whyOthersWrong: {
        b: "No hay cargo por crear buckets; el cargo es por los datos almacenados en ellos.",
        d: "El nombre del bucket no afecta el costo.",
        e: "El nombre de los objetos no afecta el costo; solo su tamaño y clase de almacenamiento.",
      },
    },
    tags: ["s3", "precios", "almacenamiento", "factores-costo"],
  },
  {
    id: "clf-079",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué plan de soporte de AWS proporciona acceso a un Technical Account Manager (TAM)?",
    options: [
      { id: "a", text: "Basic" },
      { id: "b", text: "Developer" },
      { id: "c", text: "Business" },
      { id: "d", text: "Enterprise" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "Solo el plan Enterprise Support proporciona acceso a un Technical Account Manager (TAM) dedicado que ayuda a coordinar el acceso a programas y expertos de AWS.",
      whyOthersWrong: {
        a: "Basic Support no incluye TAM; solo incluye acceso a documentación y foros.",
        b: "Developer Support no incluye TAM; incluye soporte técnico por email.",
        c: "Business Support no incluye TAM; incluye soporte 24/7 pero sin un gestor dedicado.",
      },
    },
    tags: ["enterprise-support", "tam", "soporte", "planes"],
  },
  {
    id: "clf-080",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué herramienta de AWS permite establecer presupuestos personalizados y recibir alertas cuando los costos o el uso superan los umbrales definidos?",
    options: [
      { id: "a", text: "AWS Cost Explorer" },
      { id: "b", text: "AWS Budgets" },
      { id: "c", text: "AWS Billing Dashboard" },
      { id: "d", text: "AWS Trusted Advisor" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Budgets te permite establecer presupuestos personalizados para costos, uso, Savings Plans y Reserved Instances. Puedes configurar alertas por email o SNS cuando se alcanzan los umbrales definidos.",
      whyOthersWrong: {
        a: "Cost Explorer visualiza y analiza costos pero no establece presupuestos con alertas.",
        c: "Billing Dashboard muestra la factura actual pero no permite configurar alertas de presupuesto.",
        d: "Trusted Advisor da recomendaciones de mejores prácticas, no gestiona presupuestos.",
      },
    },
    tags: ["budgets", "presupuestos", "alertas", "costos"],
  },
  {
    id: "clf-081",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué característica de AWS Organizations permite gestionar la facturación de múltiples cuentas AWS de forma centralizada?",
    options: [
      { id: "a", text: "Service Control Policies (SCPs)" },
      { id: "b", text: "Consolidated Billing" },
      { id: "c", text: "AWS Single Sign-On" },
      { id: "d", text: "Resource Access Manager" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Consolidated Billing (Facturación Consolidada) de AWS Organizations permite recibir una única factura para todas las cuentas de la organización, simplificando el pago y permitiendo obtener descuentos por volumen agregado.",
      whyOthersWrong: {
        a: "SCPs controlan permisos de servicios en las cuentas, no la facturación.",
        c: "Single Sign-On gestiona el acceso de usuarios, no la facturación.",
        d: "Resource Access Manager comparte recursos entre cuentas, no gestiona facturación.",
      },
    },
    tags: ["organizations", "consolidated-billing", "facturacion", "multi-cuenta"],
  },
  {
    id: "clf-082",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué modelo de precios de EC2 es más adecuado para cargas de trabajo con inicio y fin flexibles que pueden tolerar interrupciones?",
    options: [
      { id: "a", text: "On-Demand Instances" },
      { id: "b", text: "Reserved Instances" },
      { id: "c", text: "Spot Instances" },
      { id: "d", text: "Dedicated Instances" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Spot Instances permiten usar capacidad EC2 no utilizada con descuentos de hasta 90%. Son ideales para cargas de trabajo tolerantes a interrupciones, como procesamiento por lotes, análisis de datos, y CI/CD.",
      whyOthersWrong: {
        a: "On-Demand es para cargas de trabajo que no pueden ser interrumpidas.",
        b: "Reserved Instances son para cargas de trabajo predecibles y constantes.",
        d: "Dedicated Instances son para requisitos de aislamiento, no para ahorro con interrupciones.",
      },
    },
    tags: ["spot-instances", "precios", "interrupciones", "ahorro"],
  },
  {
    id: "clf-083",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "easy",
    question:
      "¿Cuál de los siguientes servicios de AWS tiene un nivel de uso gratuito permanente (Always Free)?",
    options: [
      { id: "a", text: "Amazon EC2" },
      { id: "b", text: "Amazon RDS" },
      { id: "c", text: "AWS Lambda (1 millón de solicitudes/mes)" },
      { id: "d", text: "Amazon Redshift" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "AWS Lambda tiene un nivel Always Free que incluye 1 millón de solicitudes gratuitas y 400,000 GB-segundos de tiempo de computación por mes, permanentemente, no solo durante los primeros 12 meses.",
      whyOthersWrong: {
        a: "EC2 Free Tier (t2.micro/t3.micro) solo es gratuito durante los primeros 12 meses.",
        b: "RDS Free Tier solo es gratuito durante los primeros 12 meses.",
        d: "Redshift tiene una prueba gratuita limitada, no un nivel Always Free significativo.",
      },
    },
    tags: ["free-tier", "always-free", "lambda", "gratuito"],
  },
  {
    id: "clf-084",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué característica de AWS permite obtener descuentos en EC2 y otros servicios al agregar el uso de múltiples cuentas bajo una organización?",
    options: [
      { id: "a", text: "Reserved Instance Marketplace" },
      { id: "b", text: "Spot Instance Savings" },
      { id: "c", text: "Volume Discounts (Descuentos por Volumen)" },
      { id: "d", text: "On-Demand Capacity Reservations" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Con Consolidated Billing de AWS Organizations, el uso de todas las cuentas se agrega para aplicar descuentos por volumen. Cuanto más uso agregado, mayores los descuentos en servicios como S3 y transferencia de datos.",
      whyOthersWrong: {
        a: "RI Marketplace es para comprar/vender RIs, no para descuentos por volumen agregado.",
        b: "Spot Savings son por usar capacidad no utilizada, no por agregar múltiples cuentas.",
        d: "Capacity Reservations garantizan capacidad pero no proporcionan descuentos por volumen.",
      },
    },
    tags: ["volume-discounts", "organizations", "descuentos", "multi-cuenta"],
  },
  {
    id: "clf-085",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "hard",
    question:
      "Una empresa necesita garantizar que su uso de EC2 cumpla con licencias de software que requieren aislamiento físico del servidor. ¿Qué opción de precios de EC2 deben usar?",
    options: [
      { id: "a", text: "Reserved Instances" },
      { id: "b", text: "Spot Instances" },
      { id: "c", text: "On-Demand Instances" },
      { id: "d", text: "Dedicated Hosts" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "Dedicated Hosts proporcionan un servidor físico EC2 completamente dedicado para tu uso. Esto es necesario para requisitos de licenciamiento que requieren visibilidad sobre sockets, cores físicos, o aislamiento de host.",
      whyOthersWrong: {
        a: "Reserved Instances reducen costos pero no garantizan aislamiento físico del servidor.",
        b: "Spot Instances usan capacidad compartida no utilizada.",
        c: "On-Demand Instances no garantizan aislamiento físico del servidor.",
      },
    },
    tags: ["dedicated-hosts", "licenciamiento", "aislamiento", "cumplimiento"],
  },
  {
    id: "clf-086",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué plan de soporte de AWS incluye acceso a todas las verificaciones de AWS Trusted Advisor?",
    options: [
      { id: "a", text: "Basic" },
      { id: "b", text: "Developer" },
      { id: "c", text: "Business y Enterprise" },
      { id: "d", text: "Solo Enterprise" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Los planes Business y Enterprise Support incluyen acceso completo a todas las verificaciones de AWS Trusted Advisor. Los planes Basic y Developer solo incluyen las verificaciones básicas de seguridad y límites de servicio.",
      whyOthersWrong: {
        a: "Basic solo incluye verificaciones básicas de seguridad y límites de servicio.",
        b: "Developer solo incluye verificaciones básicas, igual que Basic.",
        d: "Enterprise incluye todas las verificaciones, pero Business también las incluye.",
      },
    },
    tags: ["trusted-advisor", "business-support", "enterprise", "verificaciones"],
  },
  {
    id: "clf-087",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Cuál es el tiempo de respuesta máximo para casos críticos de sistema caído (business-critical system down) en el plan Enterprise Support?",
    options: [
      { id: "a", text: "24 horas" },
      { id: "b", text: "4 horas" },
      { id: "c", text: "1 hora" },
      { id: "d", text: "15 minutos" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "El plan Enterprise Support proporciona un tiempo de respuesta de menos de 15 minutos para casos críticos de sistema de negocio caído. Este es el nivel más rápido de respuesta disponible.",
      whyOthersWrong: {
        a: "24 horas es el tiempo para casos de orientación general.",
        b: "4 horas es el tiempo para casos de sistema en producción deteriorado en Business Support.",
        c: "1 hora es el tiempo para casos de sistema en producción caído en Business Support.",
      },
    },
    tags: ["enterprise-support", "sla", "tiempo-respuesta", "soporte"],
  },
  {
    id: "clf-088",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué herramienta gratuita de AWS permite estimar el costo mensual de los servicios AWS antes de desplegarlos?",
    options: [
      { id: "a", text: "AWS Cost Explorer" },
      { id: "b", text: "AWS Pricing Calculator" },
      { id: "c", text: "AWS Budgets" },
      { id: "d", text: "AWS Total Cost of Ownership (TCO) Calculator" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Pricing Calculator es una herramienta gratuita basada en web que permite crear estimaciones de costos para servicios AWS antes de comprometerlos. Puedes configurar servicios y ver el costo mensual estimado.",
      whyOthersWrong: {
        a: "Cost Explorer analiza costos históricos, no estima servicios nuevos.",
        c: "Budgets gestiona presupuestos y alertas, no estima costos de nuevos servicios.",
        d: "TCO Calculator compara costos on-premises vs AWS, no estima servicios específicos.",
      },
    },
    tags: ["pricing-calculator", "estimacion", "costos", "planificacion"],
  },
  {
    id: "clf-113",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué herramienta de AWS proporciona recomendaciones para dimensionar correctamente (right-sizing) los recursos y reducir costos?",
    options: [
      { id: "a", text: "AWS Trusted Advisor" },
      { id: "b", text: "AWS Compute Optimizer" },
      { id: "c", text: "AWS Cost Explorer" },
      { id: "d", text: "AWS Budgets" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Compute Optimizer analiza el uso de tus recursos (EC2, Lambda, EBS) y proporciona recomendaciones específicas de dimensionamiento correcto para optimizar rendimiento y reducir costos.",
      whyOthersWrong: {
        a: "Trusted Advisor ofrece algunas recomendaciones generales, pero Compute Optimizer está especializado en dimensionamiento.",
        c: "Cost Explorer analiza costos pero no proporciona recomendaciones específicas de dimensionamiento de recursos.",
        d: "Budgets es para establecer alertas de gasto, no para recomendaciones de optimización.",
      },
    },
    tags: ["compute-optimizer", "right-sizing", "optimizacion", "costos"],
  },
  {
    id: "clf-114",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué recurso de AWS proporciona predicciones de gastos futuros basándose en el uso histórico?",
    options: [
      { id: "a", text: "AWS Budgets" },
      { id: "b", text: "AWS Cost Explorer" },
      { id: "c", text: "AWS Pricing Calculator" },
      { id: "d", text: "AWS Trusted Advisor" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Cost Explorer incluye funcionalidad de pronóstico (forecasting) que analiza tu historial de uso y gasto para predecir costos futuros hasta 12 meses.",
      whyOthersWrong: {
        a: "Budgets te permite establecer alertas de gasto pero no predice costos futuros.",
        c: "Pricing Calculator estima costos de nuevos servicios, no predice basándose en uso histórico.",
        d: "Trusted Advisor ofrece recomendaciones de optimización, no predicciones de costos.",
      },
    },
    tags: ["cost-explorer", "forecasting", "prediccion", "costos"],
  },
  {
    id: "clf-115",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué característica de AWS permite asignar metadatos a los recursos para rastrear y organizar los costos por proyecto o departamento?",
    options: [
      { id: "a", text: "AWS Organizations" },
      { id: "b", text: "Etiquetas de asignación de costos (Cost Allocation Tags)" },
      { id: "c", text: "AWS Resource Groups" },
      { id: "d", text: "AWS Service Catalog" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Las etiquetas de asignación de costos permiten categorizar recursos con metadatos personalizados (como proyecto, departamento, entorno) para luego filtrar y analizar costos en Cost Explorer y facturas detalladas.",
      whyOthersWrong: {
        a: "Organizations gestiona múltiples cuentas, pero las etiquetas son para asignación de costos específica.",
        c: "Resource Groups agrupa recursos para gestión, pero no está optimizado para seguimiento de costos.",
        d: "Service Catalog gestiona catálogos de servicios aprobados, no el seguimiento de costos.",
      },
    },
    tags: ["cost-allocation-tags", "etiquetas", "organizacion", "costos"],
  },
  {
    id: "clf-116",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué plan de soporte de AWS es gratuito y está disponible para todos los clientes?",
    options: [
      { id: "a", text: "Developer" },
      { id: "b", text: "Business" },
      { id: "c", text: "Basic" },
      { id: "d", text: "Enterprise" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "El plan Basic Support es gratuito y está incluido para todas las cuentas AWS. Proporciona acceso a documentación, foros de la comunidad, verificaciones básicas de Trusted Advisor y el AWS Personal Health Dashboard.",
      whyOthersWrong: {
        a: "Developer tiene un costo mensual mínimo de $29.",
        b: "Business tiene un costo mensual mínimo de $100.",
        d: "Enterprise tiene un costo mensual mínimo de $15,000.",
      },
    },
    tags: ["basic-support", "plan-gratuito", "soporte", "aws-support"],
  },
  {
    id: "clf-117",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué beneficio exclusivo proporciona el plan Enterprise Support que no está disponible en otros planes?",
    options: [
      { id: "a", text: "Acceso a AWS Trusted Advisor" },
      { id: "b", text: "Technical Account Manager (TAM) designado" },
      { id: "c", text: "Soporte técnico 24/7" },
      { id: "d", text: "Acceso a la API de AWS Support" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "El Technical Account Manager (TAM) designado es exclusivo del plan Enterprise Support. El TAM proporciona orientación proactiva, ayuda con la arquitectura, revisiones de operaciones y acceso directo a ingenieros de AWS.",
      whyOthersWrong: {
        a: "Trusted Advisor está disponible en todos los planes (con más verificaciones en Business y Enterprise).",
        c: "Soporte técnico 24/7 también está disponible en Business Support.",
        d: "La API de AWS Support está disponible en Business y Enterprise.",
      },
    },
    tags: ["enterprise-support", "tam", "technical-account-manager", "soporte"],
  },
  {
    id: "clf-170",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa desea consolidar la facturación de varias cuentas AWS y aplicar descuentos por volumen. ¿Qué servicio debería usar?",
    options: [
      { id: "a", text: "AWS Cost Explorer" },
      { id: "b", text: "AWS Organizations con Facturación Consolidada" },
      { id: "c", text: "AWS Budgets" },
      { id: "d", text: "AWS Control Tower" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Organizations con Facturación Consolidada (Consolidated Billing) permite combinar el uso de todas las cuentas para obtener descuentos por volumen en servicios como S3, EC2 Reserved Instances y Savings Plans.",
      whyOthersWrong: {
        a: "Cost Explorer analiza costos pero no consolida facturación ni aplica descuentos.",
        c: "Budgets establece alertas de gasto pero no consolida cuentas.",
        d: "Control Tower configura entornos multi-cuenta pero la facturación consolidada es de Organizations.",
      },
    },
    tags: ["organizations", "consolidated-billing", "descuentos-volumen", "multi-cuenta"],
  },
  {
    id: "clf-142",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "easy",
    question:
      "¿Cuál de las siguientes opciones de compra de EC2 proporciona los mayores descuentos a cambio de un compromiso de uso de 1 o 3 años?",
    options: [
      { id: "a", text: "On-Demand Instances" },
      { id: "b", text: "Spot Instances" },
      { id: "c", text: "Reserved Instances" },
      { id: "d", text: "Dedicated Hosts" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Reserved Instances ofrecen descuentos de hasta 72% comparado con On-Demand a cambio de un compromiso de 1 o 3 años. Son ideales para cargas de trabajo predecibles y estables.",
      whyOthersWrong: {
        a: "On-Demand no ofrece descuentos, es el precio estándar por hora.",
        b: "Spot puede tener mayores descuentos (hasta 90%) pero puede ser interrumpido y no requiere compromiso.",
        d: "Dedicated Hosts son servidores físicos dedicados, generalmente más costosos.",
      },
    },
    tags: ["reserved-instances", "ahorro", "compromiso", "ec2"],
  },
  {
    id: "clf-143",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué opción de compra flexible de AWS permite comprometerse a un gasto constante por hora ($/hr) a cambio de descuentos, aplicable a EC2, Lambda y Fargate?",
    options: [
      { id: "a", text: "Reserved Instances" },
      { id: "b", text: "Spot Instances" },
      { id: "c", text: "Savings Plans" },
      { id: "d", text: "On-Demand Instances" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Savings Plans ofrecen descuentos significativos (hasta 72%) a cambio de comprometerse a un gasto consistente por hora durante 1 o 3 años. Son más flexibles que Reserved Instances y aplican a EC2, Lambda y Fargate.",
      whyOthersWrong: {
        a: "Reserved Instances son específicas para un tipo de instancia y región, menos flexibles.",
        b: "Spot Instances no requieren compromiso pero pueden ser interrumpidas.",
        d: "On-Demand no tiene descuentos ni compromisos.",
      },
    },
    tags: ["savings-plans", "flexibilidad", "descuentos", "compute"],
  },
  {
    id: "clf-144",
    certificationId: "aws-clf-c02",
    domainId: "domain-4",
    type: "single",
    difficulty: "easy",
    question:
      "¿Cuál es el modelo de precios predeterminado para la mayoría de los servicios AWS que permite pagar solo por lo que se usa sin compromisos a largo plazo?",
    options: [
      { id: "a", text: "Pago por capacidad reservada" },
      { id: "b", text: "Pago por uso (Pay-as-you-go)" },
      { id: "c", text: "Suscripción anual" },
      { id: "d", text: "Licencia perpetua" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "El modelo Pay-as-you-go (pago por uso) es el predeterminado en AWS. Solo pagas por los recursos que consumes, sin costos iniciales ni compromisos a largo plazo, permitiendo flexibilidad total.",
      whyOthersWrong: {
        a: "La capacidad reservada es una opción para obtener descuentos, no el modelo predeterminado.",
        c: "AWS no utiliza suscripciones anuales como modelo base.",
        d: "AWS no vende licencias perpetuas, utiliza modelos de consumo.",
      },
    },
    tags: ["pay-as-you-go", "pricing-model", "flexibilidad", "sin-compromiso"],
  },
];

export default domain4Questions;
