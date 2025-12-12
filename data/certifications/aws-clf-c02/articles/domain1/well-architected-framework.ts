import { Article } from "@/types";

export const wellArchitectedFramework: Article = {
  id: "d1-art-03",
  slug: "well-architected-framework",
  title: "AWS Well-Architected Framework",
  shortDescription:
    "Conoce los 6 pilares fundamentales para diseñar arquitecturas seguras, eficientes y resilientes en AWS.",
  certificationId: "aws-clf-c02",
  domainId: "cloud-concepts",
  content: [
    {
      title: "¿Qué es el Well-Architected Framework?",
      content: `El **AWS Well-Architected Framework** es un conjunto de mejores prácticas y principios de diseño que AWS ha desarrollado a partir de años de experiencia ayudando a miles de clientes a construir arquitecturas en la nube.

No es un checklist rígido, sino una guía para tomar decisiones arquitectónicas informadas, entendiendo las ventajas y desventajas (trade-offs) de cada elección.

### ¿Por qué es importante para el examen?
El Well-Architected Framework es un tema **fundamental** en el CLF-C02. Debes conocer los 6 pilares, qué principios incluye cada uno, y poder identificar qué pilar aplica a diferentes escenarios.`,
    },
    {
      title: "Los 6 Pilares del Framework",
      content: `El Framework se organiza en **6 pilares**. Un acrónimo útil para recordarlos es **CROPSS**:

1. **C**ost Optimization (Optimización de Costos)
2. **R**eliability (Fiabilidad)
3. **O**perational Excellence (Excelencia Operacional)
4. **P**erformance Efficiency (Eficiencia de Rendimiento)
5. **S**ecurity (Seguridad)
6. **S**ustainability (Sostenibilidad) - Añadido en 2021

Cada pilar tiene principios de diseño y mejores prácticas específicas.`,
    },
    {
      title: "1. Excelencia Operacional",
      content: `**Enfoque:** Ejecutar y monitorear sistemas para entregar valor de negocio y mejorar continuamente procesos y procedimientos.

### Principios de Diseño:
- **Realizar operaciones como código** (Infrastructure as Code)
- Hacer cambios pequeños, frecuentes y reversibles
- Refinar procedimientos operativos frecuentemente
- Anticipar fallos y aprender de ellos
- Documentar todo con "runbooks" automatizados

### Servicios clave:
- **AWS CloudFormation** - Infraestructura como código
- **AWS Config** - Seguimiento de configuraciones
- **Amazon CloudWatch** - Monitoreo y logs
- **AWS X-Ray** - Rastreo de aplicaciones
- **AWS Systems Manager** - Gestión operativa

### Ejemplo de pregunta típica:
*"¿Qué servicio permite gestionar infraestructura usando plantillas de código?"*
→ AWS CloudFormation (Excelencia Operacional)`,
    },
    {
      title: "2. Seguridad",
      content: `**Enfoque:** Proteger información, sistemas y activos mientras se entrega valor de negocio.

### Principios de Diseño:
- Implementar una **base de identidad sólida** (IAM)
- Habilitar **trazabilidad** (logs de todo)
- Aplicar seguridad en **todas las capas**
- **Automatizar** las mejores prácticas de seguridad
- Proteger datos **en tránsito y en reposo**
- Mantener a las personas **alejadas de los datos** (acceso automatizado)
- Prepararse para **eventos de seguridad**

### Servicios clave:
- **AWS IAM** - Gestión de identidades
- **AWS KMS** - Gestión de llaves de cifrado
- **AWS CloudTrail** - Auditoría de llamadas API
- **Amazon GuardDuty** - Detección de amenazas
- **AWS Shield/WAF** - Protección DDoS y web
- **AWS Secrets Manager** - Gestión de secretos

### Modelo de Responsabilidad Compartida:
La seguridad es responsabilidad compartida entre AWS y el cliente. AWS protege **la nube** (hardware, instalaciones), el cliente protege **en la nube** (datos, configuración, accesos).`,
    },
    {
      title: "3. Fiabilidad",
      content: `**Enfoque:** Asegurar que un sistema pueda recuperarse de fallos de infraestructura o servicio, adquirir recursos dinámicamente y mitigar interrupciones.

### Principios de Diseño:
- **Recuperación automática** de fallos
- **Probar procedimientos de recuperación** (Chaos Engineering)
- **Escalar horizontalmente** para aumentar disponibilidad
- **Dejar de adivinar** la capacidad
- Gestionar cambios mediante **automatización**

### Conceptos clave:
- **Alta Disponibilidad (HA):** El sistema sigue funcionando ante fallos
- **Tolerancia a Fallos:** El sistema se recupera automáticamente
- **Recuperación ante Desastres (DR):** Plan para eventos catastróficos

### Servicios clave:
- **Amazon Route 53** - DNS con health checks
- **Elastic Load Balancing** - Distribución de tráfico
- **Auto Scaling** - Escalado automático
- **Amazon S3** - Almacenamiento con 99.999999999% durabilidad
- **AWS Backup** - Respaldos automatizados

### Métricas importantes:
- **RTO (Recovery Time Objective):** Tiempo máximo para recuperarse
- **RPO (Recovery Point Objective):** Pérdida de datos aceptable`,
    },
    {
      title: "4. Eficiencia de Rendimiento",
      content: `**Enfoque:** Usar recursos de cómputo eficientemente y mantener esa eficiencia a medida que cambian la demanda y las tecnologías.

### Principios de Diseño:
- **Democratizar tecnologías avanzadas** (usar servicios gestionados)
- **Globalizar en minutos** (usar múltiples regiones)
- Usar **arquitecturas serverless**
- **Experimentar más frecuentemente**
- Tener **afinidad mecánica** (elegir la herramienta correcta para cada trabajo)

### Áreas clave:
1. **Selección:** Elegir el tipo correcto de recurso (instancia, base de datos)
2. **Revisión:** Evaluar nuevas tecnologías y servicios
3. **Monitoreo:** Medir rendimiento continuamente
4. **Trade-offs:** Entender las compensaciones (ej: consistencia vs latencia)

### Servicios clave:
- **Amazon CloudWatch** - Métricas de rendimiento
- **AWS Auto Scaling** - Ajuste dinámico de capacidad
- **Amazon ElastiCache** - Caché en memoria
- **Amazon CloudFront** - CDN para menor latencia`,
    },
    {
      title: "5. Optimización de Costos",
      content: `**Enfoque:** Evitar gastos innecesarios y ejecutar sistemas al costo más bajo.

### Principios de Diseño:
- Implementar **gestión financiera de la nube** (FinOps)
- Adoptar un **modelo de consumo** (pagar solo por lo que usas)
- Medir la **eficiencia general**
- Dejar de gastar en trabajo **pesado indiferenciado** (usar servicios gestionados)
- **Analizar y atribuir gastos** (tags, Cost Explorer)

### Estrategias de ahorro:
1. **Right-sizing:** Elegir el tamaño correcto de instancias
2. **Reserved Instances / Savings Plans:** Compromisos con descuento
3. **Spot Instances:** Usar capacidad no utilizada
4. **Apagar recursos no usados:** Desarrollo en horas laborales
5. **Servicios gestionados:** Menos overhead operativo

### Servicios clave:
- **AWS Cost Explorer** - Análisis de costos
- **AWS Budgets** - Alertas de presupuesto
- **AWS Trusted Advisor** - Recomendaciones de ahorro
- **AWS Compute Optimizer** - Right-sizing de EC2
- **S3 Intelligent-Tiering** - Optimización automática de storage`,
    },
    {
      title: "6. Sostenibilidad",
      content: `**Enfoque:** Minimizar el impacto ambiental de las cargas de trabajo en la nube.

Este pilar fue añadido en 2021, reflejando la importancia creciente de la sostenibilidad.

### Principios de Diseño:
- **Entender tu impacto** ambiental
- Establecer **metas de sostenibilidad**
- **Maximizar utilización** de recursos
- Anticipar y adoptar ofertas de **hardware más eficiente**
- Usar **servicios gestionados** (AWS optimiza a escala)
- **Reducir el impacto downstream** de tus cargas

### Mejores prácticas:
- Elegir **regiones con energía renovable**
- Usar **instancias basadas en ARM** (Graviton) - más eficientes energéticamente
- **Optimizar código** para usar menos recursos
- **Eliminar datos innecesarios**
- Usar **Auto Scaling** para evitar sobre-provisioning

### Servicios relevantes:
- **AWS Graviton** - Procesadores ARM eficientes
- **Amazon S3 Intelligent-Tiering** - Mover datos fríos automáticamente
- **AWS Customer Carbon Footprint Tool** - Medir huella de carbono`,
    },
    {
      title: "AWS Well-Architected Tool",
      content: `AWS ofrece una herramienta gratuita para evaluar tus arquitecturas contra el Framework:

### AWS Well-Architected Tool
- Disponible en la consola de AWS
- Guía paso a paso con preguntas sobre tu arquitectura
- Genera un reporte con riesgos identificados
- Proporciona recomendaciones de mejora
- Puedes trackear el progreso a lo largo del tiempo

### Well-Architected Labs
AWS también ofrece labs prácticos gratuitos para cada pilar en: [wellarchitectedlabs.com](https://wellarchitectedlabs.com)`,
    },
  ],
  keyPoints: [
    "6 pilares: Excelencia Operacional, Seguridad, Fiabilidad, Eficiencia de Rendimiento, Optimización de Costos, Sostenibilidad",
    "Acrónimo CROPSS para recordar los pilares",
    "Seguridad: Base de identidad sólida, protección en todas las capas",
    "Fiabilidad: Recuperación automática, escalado horizontal",
    "Costos: Right-sizing, Reserved/Spot Instances, apagar recursos ociosos",
    "Sostenibilidad: Maximizar utilización, usar Graviton, reducir desperdicios",
    "Well-Architected Tool: Herramienta gratuita para evaluar arquitecturas",
  ],
  tags: [
    "Well-Architected",
    "pilares",
    "seguridad",
    "fiabilidad",
    "costos",
    "rendimiento",
    "sostenibilidad",
    "mejores prácticas",
  ],
  relatedServices: [
    "cloudformation",
    "cloudwatch",
    "iam",
    "trusted-advisor",
    "cost-explorer",
  ],
  readingTime: 15,
  lastUpdated: "2025-12-11",
};
