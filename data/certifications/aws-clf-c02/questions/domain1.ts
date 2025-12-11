import { Question } from "@/types";

// Dominio 1: Conceptos de la nube (24%)
export const domain1Questions: Question[] = [
  {
    id: "clf-001",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "easy",
    question:
      "¿Cuál de las siguientes opciones describe MEJOR la propuesta de valor de la nube de AWS?",
    options: [
      {
        id: "a",
        text: "AWS garantiza el 100% de disponibilidad para todos los servicios",
      },
      {
        id: "b",
        text: "Los usuarios pueden intercambiar gastos de capital por gastos variables",
      },
      {
        id: "c",
        text: "AWS gestiona toda la seguridad de las aplicaciones del cliente",
      },
      {
        id: "d",
        text: "Los usuarios deben comprar hardware con años de anticipación",
      },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "La nube de AWS permite a las empresas cambiar de gastos de capital (CapEx) - como comprar servidores y data centers - a gastos operativos variables (OpEx), pagando solo por lo que consumen. Esto reduce el riesgo y permite escalar según la demanda.",
      whyOthersWrong: {
        a: "Ningún proveedor de nube garantiza 100% de disponibilidad. AWS ofrece SLAs con diferentes niveles de disponibilidad según el servicio, típicamente entre 99.9% y 99.999%.",
        c: "Según el modelo de responsabilidad compartida, AWS gestiona la seguridad DE la nube (infraestructura), pero el cliente es responsable de la seguridad EN la nube (datos, aplicaciones, configuraciones).",
        d: "Esto describe el modelo tradicional on-premises, no la nube. AWS permite provisionar recursos bajo demanda sin compras anticipadas.",
      },
    },
    tags: ["propuesta-valor", "capex-opex", "beneficios-nube"],
  },
  {
    id: "clf-002",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "easy",
    question:
      "Una empresa necesita ejecutar cargas de trabajo que pueden tolerar interrupciones y busca la opción de cómputo más económica. ¿Qué tipo de instancia EC2 debería usar?",
    options: [
      { id: "a", text: "Instancias On-Demand" },
      { id: "b", text: "Instancias Reserved" },
      { id: "c", text: "Instancias Spot" },
      { id: "d", text: "Instancias Dedicated" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Las instancias Spot permiten acceder a capacidad EC2 no utilizada con descuentos de hasta el 90% respecto a On-Demand. Son ideales para cargas de trabajo flexibles que pueden tolerar interrupciones, como procesamiento batch, análisis de datos, o testing.",
      whyOthersWrong: {
        a: "Las instancias On-Demand son más caras que Spot ya que pagas el precio completo por hora sin descuentos. Son ideales cuando necesitas capacidad garantizada sin compromiso a largo plazo.",
        b: "Las instancias Reserved ofrecen hasta 72% de descuento con compromisos de 1-3 años, pero son más caras que Spot y requieren un compromiso de uso continuo.",
        d: "Las instancias Dedicated son las más caras porque proporcionan hardware físico dedicado a un solo cliente. Se usan para cumplir requisitos de licenciamiento o regulatorios.",
      },
    },
    tags: ["ec2", "spot", "optimizacion-costos", "tipos-instancia"],
  },
  {
    id: "clf-003",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "medium",
    question:
      "¿Cuáles son los pilares del AWS Well-Architected Framework? (Seleccione la respuesta correcta)",
    options: [
      {
        id: "a",
        text: "Excelencia operativa, Seguridad, Fiabilidad, Eficiencia de rendimiento, Optimización de costos, Sostenibilidad",
      },
      {
        id: "b",
        text: "Disponibilidad, Durabilidad, Seguridad, Rendimiento, Costo",
      },
      {
        id: "c",
        text: "Cómputo, Almacenamiento, Base de datos, Redes, Seguridad",
      },
      {
        id: "d",
        text: "Diseño, Desarrollo, Testing, Despliegue, Operaciones",
      },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "El AWS Well-Architected Framework tiene 6 pilares: 1) Excelencia operativa - ejecutar y monitorear sistemas, 2) Seguridad - proteger datos y sistemas, 3) Fiabilidad - recuperarse de fallos, 4) Eficiencia de rendimiento - usar recursos eficientemente, 5) Optimización de costos - evitar gastos innecesarios, 6) Sostenibilidad - minimizar impacto ambiental.",
      whyOthersWrong: {
        b: "Estos términos son conceptos válidos en AWS pero no son los pilares oficiales del Well-Architected Framework.",
        c: "Estos son categorías de servicios de AWS (compute, storage, database, networking, security), no los pilares del framework.",
        d: "Esto describe fases de un ciclo de desarrollo de software, no el Well-Architected Framework.",
      },
    },
    tags: ["well-architected", "pilares", "mejores-practicas"],
  },
  {
    id: "clf-004",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué beneficio de la nube permite a una aplicación aumentar automáticamente su capacidad durante picos de tráfico y reducirla cuando el tráfico disminuye?",
    options: [
      { id: "a", text: "Alta disponibilidad" },
      { id: "b", text: "Elasticidad" },
      { id: "c", text: "Agilidad" },
      { id: "d", text: "Economía de escala" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "La elasticidad es la capacidad de escalar recursos automáticamente hacia arriba o hacia abajo según la demanda. AWS Auto Scaling es un ejemplo de servicio que proporciona elasticidad, permitiendo que las aplicaciones manejen picos de tráfico sin intervención manual.",
      whyOthersWrong: {
        a: "La alta disponibilidad se refiere a que un sistema permanezca operativo y accesible, minimizando el tiempo de inactividad. Está relacionada con redundancia y failover, no con escalado.",
        c: "La agilidad en la nube se refiere a la velocidad con la que puedes innovar y desplegar nuevos recursos. No está directamente relacionada con el escalado automático.",
        d: "Las economías de escala se refieren a los ahorros de costos que AWS puede transferir a los clientes por operar a gran escala. No describe el escalado automático.",
      },
    },
    tags: ["elasticidad", "auto-scaling", "beneficios-nube"],
  },
  {
    id: "clf-005",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa está evaluando migrar a la nube y quiere comparar los costos de ejecutar cargas de trabajo on-premises versus en AWS. ¿Qué herramienta debería usar?",
    options: [
      { id: "a", text: "AWS Cost Explorer" },
      { id: "b", text: "AWS Pricing Calculator" },
      { id: "c", text: "AWS Budgets" },
      { id: "d", text: "AWS Trusted Advisor" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Pricing Calculator permite estimar el costo de arquitecturas de AWS antes de usarlas. Es ideal para planificar migraciones y comparar el TCO (Total Cost of Ownership) entre on-premises y AWS. Puedes modelar tu arquitectura y obtener estimaciones mensuales y anuales.",
      whyOthersWrong: {
        a: "AWS Cost Explorer analiza costos históricos de recursos AWS que ya estás usando. No sirve para estimar costos de arquitecturas futuras o para empresas que aún no están en AWS.",
        c: "AWS Budgets permite crear presupuestos y alertas para controlar gastos en AWS. Requiere que ya tengas recursos desplegados en AWS.",
        d: "AWS Trusted Advisor proporciona recomendaciones de mejores prácticas en varias categorías incluyendo optimización de costos, pero no sirve para estimar costos de migración.",
      },
    },
    tags: ["pricing-calculator", "tco", "migracion", "estimacion-costos"],
  },
];

export default domain1Questions;
