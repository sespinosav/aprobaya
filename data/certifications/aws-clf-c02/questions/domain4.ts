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
];

export default domain4Questions;
