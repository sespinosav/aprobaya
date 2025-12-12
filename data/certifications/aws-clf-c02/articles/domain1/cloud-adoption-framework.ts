import { Article } from "@/types";

export const cloudAdoptionFramework: Article = {
  id: "d1-art-11",
  slug: "cloud-adoption-framework",
  title: "AWS Cloud Adoption Framework (CAF)",
  shortDescription:
    "Guía estructurada para planificar y ejecutar la transformación digital con AWS.",
  certificationId: "aws-clf-c02",
  domainId: "cloud-concepts",
  content: [
    {
      title: "¿Qué es AWS CAF?",
      content: `El **AWS Cloud Adoption Framework (CAF)** es un marco de trabajo que proporciona orientación para acelerar la transformación digital de una organización mediante el uso de AWS.

### Propósito:
- Ayudar a identificar brechas en habilidades y procesos
- Proporcionar un enfoque estructurado para la migración
- Alinear personas, procesos y tecnología
- Reducir riesgos de transformación

### ¿Por qué es importante?
Migrar a la nube no es solo un proyecto técnico. Involucra cambios en personas, procesos, y toda la organización. CAF ayuda a abordar todos estos aspectos de manera integral.`,
    },
    {
      title: "Las 6 Perspectivas del CAF",
      content: `El CAF organiza las capacidades necesarias en **6 perspectivas**, divididas en dos grupos:

### Capacidades de Negocio (Business Capabilities):
1. **Business** - Negocio
2. **People** - Personas
3. **Governance** - Gobernanza

### Capacidades Técnicas (Technical Capabilities):
4. **Platform** - Plataforma
5. **Security** - Seguridad
6. **Operations** - Operaciones

Cada perspectiva representa un área de responsabilidad y tiene stakeholders específicos.`,
    },
    {
      title: "1. Perspectiva de Negocio (Business)",
      content: `### Enfoque:
Asegurar que las inversiones en nube aceleren las ambiciones de transformación digital y los resultados de negocio.

### Stakeholders típicos:
- CEO, CFO, COO
- Directores de línea de negocio
- Gerentes de estrategia

### Capacidades clave:
- **Gestión de estrategia:** Alinear nube con objetivos de negocio
- **Gestión de portfolio:** Priorizar iniciativas de migración
- **Innovación:** Aprovechar la nube para nuevos productos/servicios
- **Gestión de productos:** Crear ofertas basadas en nube
- **Gestión de datos:** Monetizar y aprovechar datos

### Preguntas que responde:
- ¿Cómo impacta la nube en nuestro modelo de negocio?
- ¿Cuál es el ROI de la migración?
- ¿Qué nuevas oportunidades habilita la nube?`,
    },
    {
      title: "2. Perspectiva de Personas (People)",
      content: `### Enfoque:
Evolucionar hacia una cultura de crecimiento continuo, aprendizaje y cambio organizacional.

### Stakeholders típicos:
- CHRO (Chief Human Resources Officer)
- Directores de talento
- Gerentes de capacitación

### Capacidades clave:
- **Evolución cultural:** Fomentar mentalidad de innovación
- **Liderazgo transformacional:** Liderar el cambio
- **Fluidez en la nube:** Desarrollar habilidades técnicas
- **Gestión del cambio:** Manejar la transición organizacional
- **Diseño organizacional:** Nuevas estructuras y roles

### Preguntas que responde:
- ¿Qué habilidades necesita nuestro equipo?
- ¿Cómo manejamos la resistencia al cambio?
- ¿Qué nuevos roles necesitamos crear?`,
    },
    {
      title: "3. Perspectiva de Gobernanza (Governance)",
      content: `### Enfoque:
Orquestar iniciativas de nube maximizando beneficios y minimizando riesgos.

### Stakeholders típicos:
- CTO, CIO
- Chief Data Officer
- Arquitectos empresariales
- Oficina de gestión de programas

### Capacidades clave:
- **Gestión de programas y proyectos:** Metodologías de entrega
- **Gestión de beneficios:** Medir valor entregado
- **Gestión de riesgos:** Identificar y mitigar riesgos
- **Gestión financiera de la nube (FinOps):** Optimizar costos
- **Gestión de datos:** Gobernanza de datos y compliance

### Preguntas que responde:
- ¿Cómo controlamos los costos de la nube?
- ¿Cómo medimos el éxito de la migración?
- ¿Cuáles son los riesgos y cómo los mitigamos?`,
    },
    {
      title: "4. Perspectiva de Plataforma (Platform)",
      content: `### Enfoque:
Construir una plataforma de nube híbrida, escalable y de nivel empresarial.

### Stakeholders típicos:
- CTO
- Arquitectos de soluciones
- Ingenieros de plataforma

### Capacidades clave:
- **Arquitectura de plataforma:** Diseño de la landing zone
- **Ingeniería de datos:** Pipelines de datos modernos
- **Ingeniería de plataforma:** CI/CD, automatización
- **Aprovisionamiento:** Infrastructure as Code
- **Desarrollo de aplicaciones modernas:** Containers, serverless

### Preguntas que responde:
- ¿Cómo diseñamos nuestra arquitectura de nube?
- ¿Qué servicios de AWS usamos para cada caso?
- ¿Cómo automatizamos el aprovisionamiento?`,
    },
    {
      title: "5. Perspectiva de Seguridad (Security)",
      content: `### Enfoque:
Lograr confidencialidad, integridad y disponibilidad de datos y cargas de trabajo.

### Stakeholders típicos:
- CISO (Chief Information Security Officer)
- Equipo de seguridad
- Compliance officers

### Capacidades clave:
- **Gobernanza de seguridad:** Políticas y estándares
- **Aseguramiento de seguridad:** Verificación continua
- **Gestión de identidad y acceso:** IAM, federación
- **Detección de amenazas:** Monitoreo y respuesta
- **Gestión de vulnerabilidades:** Escaneo y remediación
- **Protección de infraestructura:** Seguridad de red y compute
- **Protección de datos:** Cifrado, clasificación
- **Protección de aplicaciones:** Seguridad del código
- **Respuesta a incidentes:** Planes y procedimientos

### Preguntas que responde:
- ¿Cómo protegemos nuestros datos en la nube?
- ¿Cómo cumplimos con regulaciones?
- ¿Cómo detectamos y respondemos a amenazas?`,
    },
    {
      title: "6. Perspectiva de Operaciones (Operations)",
      content: `### Enfoque:
Entregar servicios de nube que satisfagan las necesidades del negocio.

### Stakeholders típicos:
- Gerentes de operaciones de TI
- SRE (Site Reliability Engineers)
- DevOps engineers

### Capacidades clave:
- **Observabilidad:** Logs, métricas, trazas
- **Gestión de eventos (AIOps):** Automatización inteligente
- **Gestión de incidentes y problemas:** ITIL, respuesta
- **Gestión de cambios y releases:** CI/CD, deployments
- **Gestión de rendimiento y capacidad:** Right-sizing
- **Gestión de configuración:** IaC, GitOps
- **Gestión de parches:** Actualizaciones de seguridad
- **Gestión de disponibilidad y continuidad:** DR, backup
- **Gestión de aplicaciones:** ALM

### Preguntas que responde:
- ¿Cómo monitoreamos nuestra infraestructura?
- ¿Cómo respondemos a incidentes?
- ¿Cómo hacemos deployments seguros?`,
    },
    {
      title: "Fases del Journey de Transformación",
      content: `El CAF también define 4 fases para el viaje de transformación:

### 1. Envision (Visualizar)
- Demostrar cómo la nube acelerará resultados de negocio
- Identificar stakeholders clave
- Crear la visión de transformación

### 2. Align (Alinear)
- Identificar brechas de capacidades
- Identificar dependencias
- Mapear stakeholders
- Crear plan de acción

### 3. Launch (Lanzar)
- Entregar pilotos en producción
- Demostrar valor incremental
- Ajustar enfoque según aprendizajes

### 4. Scale (Escalar)
- Expandir pilotos a escala completa
- Optimizar operaciones
- Lograr los beneficios de negocio planificados`,
    },
    {
      title: "CAF en el Examen CLF-C02",
      content: `### Puntos clave para el examen:

1. **Las 6 perspectivas:**
   - Business, People, Governance (Negocio)
   - Platform, Security, Operations (Técnicas)

2. **Propósito:**
   - Guía para transformación digital
   - No solo técnico, también personas y procesos
   - Identifica brechas y riesgos

3. **Perspectivas vs Stakeholders:**
   - Business → CEO, CFO
   - People → CHRO, Training
   - Governance → CTO, CIO, Arquitectos
   - Platform → Arquitectos, DevOps
   - Security → CISO
   - Operations → IT Ops, SRE

### Preguntas típicas:

*"¿Qué framework ayuda a planificar la migración a AWS considerando personas, procesos y tecnología?"*
→ AWS Cloud Adoption Framework (CAF)

*"¿Qué perspectiva del CAF se enfoca en desarrollar habilidades del equipo?"*
→ People (Personas)

*"¿Qué perspectiva del CAF trata sobre FinOps y control de costos?"*
→ Governance (Gobernanza)`,
    },
  ],
  keyPoints: [
    "CAF: Framework para transformación digital integral",
    "6 perspectivas: Business, People, Governance, Platform, Security, Operations",
    "Business, People, Governance: Capacidades de negocio",
    "Platform, Security, Operations: Capacidades técnicas",
    "People: Cultura, habilidades, gestión del cambio",
    "Governance: FinOps, riesgos, beneficios",
    "4 fases: Envision, Align, Launch, Scale",
  ],
  tags: [
    "CAF",
    "Cloud Adoption Framework",
    "transformación digital",
    "migración",
    "perspectivas",
    "gobernanza",
    "plataforma",
  ],
  relatedServices: ["migration-hub", "application-discovery-service"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
