import { Question } from "@/types";

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
  {
    id: "clf-028",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "easy",
    question:
      "Tu equipo de diseño está planificando una aplicación que se alojará en AWS Cloud. Uno de sus principales requisitos no funcionales es: 'Reducir interdependencias para que los fallos no impacten otros componentes'. ¿A qué concepto se refiere este requisito?",
    options: [
      { id: "a", text: "Integración" },
      { id: "b", text: "Desacoplamiento" },
      { id: "c", text: "Agregación" },
      { id: "d", text: "Segregación" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "El concepto de desacoplamiento (decoupling) asegura que los diferentes componentes de las aplicaciones puedan gestionarse y mantenerse por separado. Si todos los componentes están fuertemente acoplados, toda la aplicación caería cuando un componente falle. Por eso siempre es mejor práctica desacoplar los componentes de la aplicación.",
      whyOthersWrong: {
        a: "La integración se refiere a conectar sistemas, no a reducir dependencias entre ellos.",
        c: "La agregación combina múltiples elementos en uno, lo cual aumentaría las dependencias, no las reduciría.",
        d: "La segregación separa responsabilidades pero no es el término técnico usado en arquitectura cloud para este concepto.",
      },
    },
    tags: ["desacoplamiento", "arquitectura", "mejores-practicas", "well-architected"],
  },
  {
    id: "clf-029",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS proporciona una base de datos NoSQL completamente administrada que ofrece rendimiento rápido y predecible con escalabilidad sin interrupciones?",
    options: [
      { id: "a", text: "AWS RDS" },
      { id: "b", text: "Amazon DynamoDB" },
      { id: "c", text: "Oracle RDS" },
      { id: "d", text: "Amazon EMR" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "DynamoDB es una oferta NoSQL completamente administrada proporcionada por AWS. Ofrece rendimiento de milisegundos de un solo dígito a cualquier escala, con escalabilidad automática.",
      whyOthersWrong: {
        a: "AWS RDS es un servicio de bases de datos relacionales (SQL), no NoSQL.",
        c: "Oracle RDS es una opción de motor dentro de RDS, que es relacional, no NoSQL.",
        d: "Amazon EMR (Elastic MapReduce) es un servicio para procesamiento de big data, no una base de datos NoSQL.",
      },
    },
    tags: ["dynamodb", "nosql", "base-datos", "serverless"],
  },
  {
    id: "clf-030",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "multiple",
    difficulty: "medium",
    question:
      "En el modelo de responsabilidad compartida para servicios de infraestructura como Amazon EC2, ¿cuáles de las siguientes son responsabilidad del CLIENTE? (Seleccione DOS respuestas)",
    options: [
      { id: "a", text: "Infraestructura de red" },
      { id: "b", text: "Amazon Machine Images (AMIs)" },
      { id: "c", text: "Infraestructura de virtualización" },
      { id: "d", text: "Seguridad física del hardware" },
      { id: "e", text: "Políticas y configuración" },
    ],
    correctAnswers: ["b", "e"],
    explanation: {
      correct:
        "En el modelo de responsabilidad compartida para IaaS (Amazon EC2), el cliente es responsable de: AMIs, sistemas operativos, aplicaciones, datos en tránsito y reposo, credenciales, y políticas/configuración. AWS gestiona: instalaciones, seguridad física del hardware, infraestructura de red e infraestructura de virtualización.",
      whyOthersWrong: {
        a: "La infraestructura de red es responsabilidad de AWS.",
        c: "La infraestructura de virtualización (hipervisores) es responsabilidad de AWS.",
        d: "La seguridad física del hardware es responsabilidad exclusiva de AWS.",
      },
    },
    tags: ["responsabilidad-compartida", "ec2", "iaas", "seguridad"],
  },
  {
    id: "clf-031",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Cuáles de las siguientes actividades están dentro del alcance del soporte de AWS? (Seleccione DOS respuestas)",
    options: [
      { id: "a", text: "Solución de problemas con APIs" },
      { id: "b", text: "Desarrollo de código" },
      { id: "c", text: "Depuración de software personalizado" },
      { id: "d", text: "Configuración de aplicaciones de terceros en recursos AWS" },
      { id: "e", text: "Ajuste de consultas de base de datos" },
    ],
    correctAnswers: ["a", "d"],
    explanation: {
      correct:
        "AWS Support incluye: consultas sobre servicios AWS, mejores prácticas, solución de problemas de APIs y SDKs, problemas operativos, herramientas AWS, y configuración de aplicaciones de terceros en recursos AWS. NO incluye: desarrollo de código, depuración de software personalizado, administración de sistemas, ni ajuste de consultas de BD.",
      whyOthersWrong: {
        b: "El desarrollo de código no está en el alcance de AWS Support. Esto es responsabilidad del cliente.",
        c: "La depuración de software personalizado no está en el alcance de AWS Support.",
        e: "El ajuste de consultas de base de datos (query tuning) no está en el alcance de AWS Support.",
      },
    },
    tags: ["aws-support", "soporte", "alcance"],
  },
  {
    id: "clf-032",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "medium",
    question:
      "Los usuarios del equipo de desarrollo necesitan desplegar una aplicación web multi-capa. ¿Qué servicio puede usarse para crear un portafolio personalizado que ayude a los usuarios con el despliegue rápido?",
    options: [
      { id: "a", text: "AWS Config" },
      { id: "b", text: "AWS CodeDeploy" },
      { id: "c", text: "AWS Service Catalog" },
      { id: "d", text: "AWS CloudFormation" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "AWS Service Catalog permite crear y desplegar portafolios de productos dentro de la infraestructura AWS. Esto ayuda a crear recursos consistentes con despliegue rápido. Estos catálogos pueden usarse para desplegar desde un solo recurso hasta aplicaciones web multi-capa.",
      whyOthersWrong: {
        a: "AWS Config es para evaluar configuraciones de recursos desplegados, no para crear portafolios de despliegue.",
        b: "AWS CodeDeploy es para automatizar despliegues de software, no para crear portafolios de recursos.",
        d: "AWS CloudFormation provisiona recursos usando plantillas, pero no crea portafolios gestionados como Service Catalog.",
      },
    },
    tags: ["service-catalog", "portafolio", "despliegue", "gobernanza"],
  },
  {
    id: "clf-033",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "easy",
    question:
      "Una gran empresa de petróleo y gas planea desplegar una aplicación de alto volumen en múltiples instancias Amazon EC2. ¿Cuál de las siguientes opciones puede ayudar a reducir los gastos operativos?",
    options: [
      { id: "a", text: "Desplegar instancias Amazon EC2 con Auto Scaling" },
      { id: "b", text: "Desplegar instancias Amazon EC2 en múltiples AZs" },
      { id: "c", text: "Desplegar instancias Amazon EC2 con AMI respaldada por instance store" },
      { id: "d", text: "Desplegar instancias Amazon EC2 con grupo de placement en clúster" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "Usar Amazon EC2 Auto Scaling ayuda a ajustar la carga de trabajo de la aplicación con el número óptimo de instancias. Durante baja carga, las instancias EC2 se terminan, lo que reduce los costos operativos.",
      whyOthersWrong: {
        b: "Desplegar en múltiples AZs mejora la disponibilidad pero no reduce los gastos operativos.",
        c: "Usar AMI respaldada por instance store incurre en cargos por uso de EC2 y almacenamiento de AMI en S3. No impacta los gastos operativos.",
        d: "El grupo de placement en clúster ayuda a tener baja latencia entre instancias pero no reduce los gastos operativos.",
      },
    },
    tags: ["auto-scaling", "optimizacion-costos", "ec2", "elasticidad"],
  },
  {
    id: "clf-034",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "medium",
    question:
      "¿Cuál de los siguientes describe MEJOR los beneficios del AWS Cloud Adoption Framework (AWS CAF)?",
    options: [
      { id: "a", text: "Proporciona plantillas de CloudFormation predefinidas para migración" },
      { id: "b", text: "Reduce el riesgo empresarial, mejora el rendimiento ESG, aumenta los ingresos y la eficiencia operativa" },
      { id: "c", text: "Ofrece descuentos automáticos en servicios AWS durante la migración" },
      { id: "d", text: "Garantiza el 100% de tiempo de actividad durante el proceso de migración" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "El AWS Cloud Adoption Framework (CAF) ayuda a las organizaciones a entender cómo la adopción de la nube transforma la forma en que trabajan. Sus beneficios incluyen: reducción del riesgo empresarial, mejora del rendimiento ambiental, social y de gobernanza (ESG), aumento de ingresos y mayor eficiencia operativa.",
      whyOthersWrong: {
        a: "AWS CAF es un framework de orientación, no proporciona plantillas de CloudFormation.",
        c: "AWS CAF no ofrece descuentos. Los descuentos se obtienen a través de Reserved Instances o Savings Plans.",
        d: "Ningún framework puede garantizar 100% de tiempo de actividad.",
      },
    },
    tags: ["cloud-adoption-framework", "caf", "migracion", "beneficios"],
  },
  {
    id: "clf-035",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "medium",
    question:
      "¿Cuál de las siguientes es una estrategia de migración apropiada que implica mover una base de datos a AWS usando replicación?",
    options: [
      { id: "a", text: "Rehosting (lift and shift)" },
      { id: "b", text: "Replatforming" },
      { id: "c", text: "Repurchasing" },
      { id: "d", text: "Refactoring" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "Rehosting (también conocido como 'lift and shift') implica mover aplicaciones sin cambios a la nube. Para bases de datos, esto típicamente usa AWS Database Migration Service (DMS) con replicación continua para minimizar el tiempo de inactividad.",
      whyOthersWrong: {
        b: "Replatforming implica hacer algunas optimizaciones durante la migración, como cambiar a RDS, pero no se enfoca específicamente en replicación.",
        c: "Repurchasing significa cambiar a un producto diferente, típicamente SaaS, no migrar mediante replicación.",
        d: "Refactoring implica re-arquitecturar la aplicación para aprovechar capacidades nativas de la nube.",
      },
    },
    tags: ["migracion", "rehosting", "dms", "estrategias-migracion"],
  },
  {
    id: "clf-036",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "easy",
    question:
      "¿Cuál de los siguientes conceptos describe la capacidad de AWS de adquirir recursos a un costo menor que el cliente individual debido a su gran escala de operaciones?",
    options: [
      { id: "a", text: "Elasticidad" },
      { id: "b", text: "Agilidad" },
      { id: "c", text: "Economías de escala" },
      { id: "d", text: "Alta disponibilidad" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Las economías de escala se refieren a las ventajas de costo que AWS obtiene debido a su tamaño y escala de operaciones. AWS puede comprar hardware, energía y otros recursos a precios más bajos y transferir estos ahorros a los clientes.",
      whyOthersWrong: {
        a: "La elasticidad es la capacidad de escalar recursos hacia arriba o abajo según la demanda.",
        b: "La agilidad es la velocidad con la que puedes innovar y desplegar nuevos recursos.",
        d: "La alta disponibilidad se refiere a que un sistema permanezca operativo minimizando el tiempo de inactividad.",
      },
    },
    tags: ["economias-escala", "beneficios-nube", "costos"],
  },
  {
    id: "clf-037",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "medium",
    question:
      "¿Cuál es el beneficio de usar servicios administrados de AWS como Amazon RDS, Amazon ECS, Amazon EKS y Amazon DynamoDB?",
    options: [
      { id: "a", text: "El cliente tiene control total sobre el hardware subyacente" },
      { id: "b", text: "AWS gestiona tareas operativas como parches, backups y escalado" },
      { id: "c", text: "Son más baratos que ejecutar en instancias EC2" },
      { id: "d", text: "Proporcionan acceso directo al sistema operativo" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Los servicios administrados de AWS reducen la carga operativa del cliente. AWS se encarga de tareas como parches de seguridad, backups automáticos, escalado y mantenimiento, permitiendo que los equipos se enfoquen en la lógica de negocio.",
      whyOthersWrong: {
        a: "Con servicios administrados, el cliente NO tiene control sobre el hardware subyacente. AWS lo gestiona.",
        c: "No necesariamente son más baratos; el beneficio es la reducción de carga operativa, no siempre el costo.",
        d: "Los servicios administrados típicamente no proporcionan acceso al sistema operativo subyacente.",
      },
    },
    tags: ["servicios-administrados", "rds", "dynamodb", "beneficios"],
  },
  {
    id: "clf-038",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "easy",
    question:
      "¿Cuál de los siguientes es un beneficio de la automatización con AWS CloudFormation?",
    options: [
      { id: "a", text: "Reduce el costo de los servicios AWS en un 50%" },
      { id: "b", text: "Elimina la necesidad de pruebas de seguridad" },
      { id: "c", text: "Permite provisionamiento y configuración consistente y repetible" },
      { id: "d", text: "Garantiza cero errores en las aplicaciones desplegadas" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "AWS CloudFormation permite definir infraestructura como código, lo que proporciona provisionamiento consistente y repetible. Puedes versionar tus plantillas, reutilizarlas en múltiples entornos y asegurar que la configuración sea idéntica cada vez.",
      whyOthersWrong: {
        a: "CloudFormation no reduce automáticamente los costos en un porcentaje fijo.",
        b: "La automatización no elimina la necesidad de pruebas de seguridad.",
        d: "Ninguna herramienta puede garantizar cero errores en las aplicaciones.",
      },
    },
    tags: ["cloudformation", "iac", "automatizacion", "beneficios"],
  },
  {
    id: "clf-089",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "easy",
    question:
      "Una zona de disponibilidad consiste en:",
    options: [
      { id: "a", text: "Uno o más centros de datos en una sola ubicación" },
      { id: "b", text: "Dos o más centros de datos en múltiples ubicaciones" },
      { id: "c", text: "Uno o más hosts físicos en un solo centro de datos" },
      { id: "d", text: "Dos o más hosts físicos en múltiples centros de datos" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "Una zona de disponibilidad en AWS consiste en uno o más centros de datos aislados dentro de una región, cada uno con energía, refrigeración y seguridad física independientes.",
      whyOthersWrong: {
        b: "Una zona de disponibilidad está en una sola ubicación geográfica, no en múltiples ubicaciones.",
        c: "Una AZ contiene centros de datos completos, no solo hosts físicos.",
        d: "Los hosts físicos están dentro de centros de datos, y una AZ no abarca múltiples ubicaciones.",
      },
    },
    tags: ["availability-zone", "infraestructura", "region"],
  },
  {
    id: "clf-090",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Cuáles de los siguientes son principios de diseño de la nube de AWS? (Seleccione DOS)",
    options: [
      { id: "a", text: "Pagar por recursos de computación por adelantado" },
      { id: "b", text: "Tomar decisiones basadas en datos para determinar el diseño arquitectónico de la nube" },
      { id: "c", text: "Enfatizar procesos manuales para habilitar cambios frecuentes" },
      { id: "d", text: "Probar sistemas a escala de producción" },
      { id: "e", text: "Refinar procedimientos operativos con poca frecuencia" },
    ],
    correctAnswers: ["b", "d"],
    explanation: {
      correct:
        "Tomar decisiones basadas en datos y probar sistemas a escala de producción son principios de diseño de la nube de AWS que ayudan a construir sistemas seguros, eficientes y operacionalmente sólidos.",
      whyOthersWrong: {
        a: "La nube permite pagar por uso, no por adelantado. Este es el modelo tradicional on-premises.",
        c: "La automatización es preferida sobre procesos manuales para habilitar cambios frecuentes y consistentes.",
        e: "Se debe refinar los procedimientos operativos frecuentemente basándose en lecciones aprendidas.",
      },
    },
    tags: ["principios-diseno", "well-architected", "mejores-practicas"],
  },
  {
    id: "clf-091",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa transfiere su infraestructura de las instalaciones a la nube de AWS. Ahora, la empresa puede aprovisionar instancias adicionales de Amazon EC2 cuando sea necesario. Con esta capacidad, la empresa puede lanzar nuevas campañas de marketing en 3 días en lugar de 3 semanas. ¿Qué beneficio de la nube de AWS demuestra este escenario?",
    options: [
      { id: "a", text: "Ahorro de costos" },
      { id: "b", text: "Resiliencia operacional mejorada" },
      { id: "c", text: "Aumento de agilidad empresarial" },
      { id: "d", text: "Seguridad mejorada" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Este escenario demuestra el aumento de agilidad empresarial como un beneficio de la nube de AWS, permitiendo a la empresa responder rápidamente a las necesidades del mercado y lanzar campañas de marketing significativamente más rápido.",
      whyOthersWrong: {
        a: "Aunque puede haber ahorro de costos, el escenario enfatiza la velocidad de lanzamiento, no el ahorro.",
        b: "La resiliencia operacional se refiere a la capacidad de recuperarse de fallos, no a la velocidad de lanzamiento.",
        d: "El escenario no menciona mejoras de seguridad.",
      },
    },
    tags: ["agilidad", "beneficios-nube", "time-to-market"],
  },
  {
    id: "clf-092",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Cuáles de las siguientes son ventajas de la nube de AWS? (Seleccione DOS)",
    options: [
      { id: "a", text: "Cambiar gasto variable por gasto de capital" },
      { id: "b", text: "Economías masivas de escala" },
      { id: "c", text: "Lanzar globalmente en minutos" },
      { id: "d", text: "Enfocarse en administrar infraestructura de hardware" },
      { id: "e", text: "Sobreaprovisionamiento para asegurar capacidad" },
    ],
    correctAnswers: ["b", "c"],
    explanation: {
      correct:
        "La nube de AWS proporciona economías masivas de escala (precios más bajos debido al uso agregado de todos los clientes) y la capacidad de lanzar recursos globalmente en minutos gracias a la infraestructura global de AWS.",
      whyOthersWrong: {
        a: "Es al revés: la nube permite cambiar gasto de capital (CapEx) por gasto variable (OpEx).",
        d: "Un beneficio de la nube es NO tener que administrar hardware, no enfocarse en ello.",
        e: "La elasticidad de la nube elimina la necesidad de sobreaprovisionamiento.",
      },
    },
    tags: ["beneficios-nube", "economia-escala", "global"],
  },
  {
    id: "clf-093",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "easy",
    question:
      "Usar Amazon Elastic Container Service (Amazon ECS) para dividir una arquitectura monolítica en microservicios es un ejemplo de:",
    options: [
      { id: "a", text: "Una arquitectura de acoplamiento débil" },
      { id: "b", text: "Una arquitectura de acoplamiento fuerte" },
      { id: "c", text: "Una arquitectura sin estado" },
      { id: "d", text: "Una arquitectura con estado" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "Usar Amazon ECS para dividir una arquitectura monolítica en microservicios es un ejemplo de una arquitectura de acoplamiento débil (loosely coupled), donde los componentes son independientes y se comunican a través de interfaces bien definidas.",
      whyOthersWrong: {
        b: "Una arquitectura monolítica es de acoplamiento fuerte; los microservicios representan lo opuesto.",
        c: "Stateless/stateful se refiere al manejo de estado, no a cómo se acoplan los componentes.",
        d: "Igual que la opción C, el estado es un concepto diferente al acoplamiento.",
      },
    },
    tags: ["microservicios", "ecs", "acoplamiento-debil", "arquitectura"],
  },
  {
    id: "clf-094",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "medium",
    question:
      "¿Cuál de los siguientes promueve las mejores prácticas arquitectónicas de la nube de AWS para diseñar y operar sistemas confiables, seguros, eficientes y rentables?",
    options: [
      { id: "a", text: "Marco de aplicaciones sin servidor de AWS" },
      { id: "b", text: "Soporte empresarial de AWS" },
      { id: "c", text: "Principio de menor privilegio" },
      { id: "d", text: "Marco de Buena Arquitectura de AWS (Well-Architected Framework)" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "El AWS Well-Architected Framework promueve las mejores prácticas arquitectónicas para ayudar a diseñar y operar sistemas que son confiables, seguros, eficientes, rentables y sostenibles.",
      whyOthersWrong: {
        a: "El Serverless Application Model (SAM) es para desplegar aplicaciones serverless, no un framework de mejores prácticas.",
        b: "El soporte empresarial proporciona asistencia técnica, no guías arquitectónicas.",
        c: "El principio de menor privilegio es una práctica de seguridad específica, no un framework completo.",
      },
    },
    tags: ["well-architected", "mejores-practicas", "framework"],
  },
  {
    id: "clf-095",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Cuáles capacidades están en la perspectiva de plataforma del AWS Cloud Adoption Framework (AWS CAF)? (Seleccione DOS)",
    options: [
      { id: "a", text: "Gestión de rendimiento y capacidad" },
      { id: "b", text: "Ingeniería de datos" },
      { id: "c", text: "Integración y entrega continua (CI/CD)" },
      { id: "d", text: "Protección de infraestructura" },
      { id: "e", text: "Gestión de cambios y versiones" },
    ],
    correctAnswers: ["b", "c"],
    explanation: {
      correct:
        "La ingeniería de datos y CI/CD son capacidades de la perspectiva de plataforma del AWS CAF. Esta perspectiva ayuda a construir una plataforma de nube híbrida escalable y de nivel empresarial, modernizar cargas de trabajo existentes e implementar soluciones cloud-native.",
      whyOthersWrong: {
        a: "La gestión de rendimiento y capacidad pertenece a la perspectiva de Operaciones.",
        d: "La protección de infraestructura pertenece a la perspectiva de Seguridad.",
        e: "La gestión de cambios pertenece a la perspectiva de Operaciones.",
      },
    },
    tags: ["caf", "cloud-adoption-framework", "plataforma"],
  },
  {
    id: "clf-096",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa quiere monitorear el rendimiento de su carga de trabajo. La empresa quiere asegurar que los servicios en la nube se entreguen a un nivel que satisfaga sus necesidades de negocio. ¿Qué perspectiva del AWS Cloud Adoption Framework (AWS CAF) cumplirá estos requisitos?",
    options: [
      { id: "a", text: "Negocio" },
      { id: "b", text: "Gobernanza" },
      { id: "c", text: "Plataforma" },
      { id: "d", text: "Operaciones" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "La perspectiva de Operaciones ayuda a monitorear y gestionar las cargas de trabajo en la nube para asegurar que se entreguen a un nivel que satisfaga las necesidades del negocio. Involucra al COO, director de nube y gerentes de operaciones.",
      whyOthersWrong: {
        a: "La perspectiva de Negocio se enfoca en alinear inversiones en nube con objetivos de negocio.",
        b: "La perspectiva de Gobernanza se enfoca en riesgos, cumplimiento y gestión de beneficios.",
        c: "La perspectiva de Plataforma se enfoca en construir la infraestructura de nube.",
      },
    },
    tags: ["caf", "operaciones", "monitoreo"],
  },
  {
    id: "clf-097",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "multiple",
    difficulty: "medium",
    question:
      "La elasticidad en la nube de AWS se refiere a ¿cuál de los siguientes? (Seleccione DOS)",
    options: [
      { id: "a", text: "Qué tan rápido se puede reiniciar una instancia Amazon EC2" },
      { id: "b", text: "La capacidad de escalar recursos según cambia la demanda" },
      { id: "c", text: "La cantidad máxima de RAM que puede usar una instancia EC2" },
      { id: "d", text: "El modelo de facturación pagar-por-lo-que-usas" },
      { id: "e", text: "Qué tan fácilmente se pueden obtener recursos cuando se necesitan" },
    ],
    correctAnswers: ["b", "e"],
    explanation: {
      correct:
        "La elasticidad en la nube de AWS se refiere a la capacidad de adquirir recursos cuando los necesitas y liberarlos cuando ya no los necesitas. Esto significa que puedes escalar recursos según cambia la demanda y obtener recursos fácilmente cuando se necesitan.",
      whyOthersWrong: {
        a: "La velocidad de reinicio no define la elasticidad.",
        c: "El límite de RAM es una especificación de instancia, no elasticidad.",
        d: "El modelo de pago por uso está relacionado pero no define la elasticidad en sí.",
      },
    },
    tags: ["elasticidad", "escalabilidad", "beneficios-nube"],
  },
  {
    id: "clf-098",
    certificationId: "aws-clf-c02",
    domainId: "domain-1",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa está ejecutando una aplicación monolítica on-premises que no escala y es difícil de mantener. La empresa tiene un plan para migrar la aplicación a AWS y dividirla en microservicios. ¿Qué mejor práctica del AWS Well-Architected Framework está siguiendo la empresa con este plan?",
    options: [
      { id: "a", text: "Integrar pruebas funcionales como parte del despliegue en AWS" },
      { id: "b", text: "Usar automatización para realizar cambios" },
      { id: "c", text: "Desplegar la aplicación en múltiples ubicaciones" },
      { id: "d", text: "Implementar dependencias de acoplamiento débil" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "La empresa está siguiendo la mejor práctica de implementar dependencias de acoplamiento débil (loosely coupled) al dividir el monolito en microservicios. Esto mejora la escalabilidad, confiabilidad y facilidad de mantenimiento del sistema.",
      whyOthersWrong: {
        a: "Las pruebas funcionales son importantes pero no es lo que describe el escenario.",
        b: "La automatización es una buena práctica pero no es el enfoque principal del escenario.",
        c: "El despliegue multi-ubicación mejora la disponibilidad pero no es lo que describe dividir en microservicios.",
      },
    },
    tags: ["well-architected", "microservicios", "acoplamiento-debil"],
  },
];

export default domain1Questions;
