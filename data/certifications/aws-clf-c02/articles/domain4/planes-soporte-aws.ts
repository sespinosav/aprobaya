import { Article } from "@/types";

export const planesSoporteAws: Article = {
  id: "d4-art-04",
  slug: "planes-soporte-aws",
  title: "Planes de Soporte de AWS",
  shortDescription:
    "Conoce los diferentes niveles de soporte de AWS: Basic, Developer, Business y Enterprise.",
  domainId: "domain4",
  content: {
    introduction:
      "AWS ofrece diferentes planes de soporte técnico para satisfacer las necesidades de diversos tipos de clientes, desde desarrolladores individuales hasta grandes empresas con cargas de trabajo críticas.",
    sections: [
      {
        title: "Resumen de Planes",
        content: `AWS ofrece **4 niveles de soporte**:

| Plan | Precio | Ideal para |
|------|--------|-----------|
| Basic | Gratis | Todos |
| Developer | $29+/mes | Desarrollo |
| Business | $100+/mes | Producción |
| Enterprise | $15,000+/mes | Misión crítica |

**Progresión:**
\`\`\`
Basic → Developer → Business → Enterprise
  │         │           │           │
  └─────────┴───────────┴───────────┘
     Cada nivel incluye el anterior
\`\`\`

**Factores clave de diferenciación:**
- Tiempo de respuesta
- Canales de soporte
- Acceso a recursos especializados
- Checks de Trusted Advisor
- Capacitación y recursos`,
      },
      {
        title: "Basic Support (Gratis)",
        content: `Incluido gratis para todas las cuentas AWS.

**Qué incluye:**
- Documentación y whitepapers
- Foros de la comunidad AWS
- AWS Personal Health Dashboard
- 7 checks de Trusted Advisor (core)
- Service Quotas

**Trusted Advisor checks (Basic):**
1. S3 bucket permissions
2. Security Groups (ports abiertos)
3. IAM use
4. MFA on root
5. EBS Public Snapshots
6. RDS Public Snapshots
7. Service Quotas

**Limitaciones:**
- Sin soporte técnico directo
- Solo foros de comunidad
- Sin respuesta garantizada

**Ideal para:**
- Exploración y aprendizaje
- Proyectos personales
- Desarrollo inicial
- Cuentas sin cargas de producción`,
      },
      {
        title: "Developer Support",
        content: `Primer nivel de soporte técnico pagado.

**Precio:**
- Mayor de: $29/mes O 3% del uso mensual de AWS

**Qué incluye (adicional a Basic):**
- Soporte técnico por email
- 1 contacto primario
- Tiempo de respuesta (horas de negocio):
  - General guidance: < 24 horas
  - System impaired: < 12 horas

**Características:**
- Casos ilimitados
- Soporte para APIs de AWS
- Guía de arquitectura general

**Limitaciones:**
- Solo email (no teléfono)
- Solo 1 contacto
- Horas de negocio (no 24/7)
- Sin terceros (no ayudan con código en otro lenguaje)

**Ideal para:**
- Desarrolladores y startups
- Testing y desarrollo
- Aprendiendo AWS
- Uso no crítico

**No recomendado para:**
- Sistemas de producción
- Necesidad de respuesta rápida`,
      },
      {
        title: "Business Support",
        content: `Diseñado para cargas de trabajo de producción.

**Precio:**
- Mayor de: $100/mes O porcentaje del uso:
  - 10% de $0-$10K
  - 7% de $10K-$80K
  - 5% de $80K-$250K
  - 3% sobre $250K

**Qué incluye (adicional a Developer):**
- Soporte por teléfono 24/7
- Chat en vivo 24/7
- Contactos ilimitados
- Tiempos de respuesta mejorados:
  - General guidance: < 24 horas
  - System impaired: < 12 horas
  - Production system impaired: < 4 horas
  - Production system down: < 1 hora
- Acceso completo a Trusted Advisor
- AWS Support API
- Third-party software support

**Trusted Advisor completo:**
- 115+ checks vs 7 de Basic
- Cost optimization
- Performance
- Security
- Fault tolerance
- Service quotas

**Ideal para:**
- Producción
- Empresas medianas
- Múltiples equipos usando AWS`,
        note: "Business Support es el mínimo recomendado para cualquier carga de trabajo de producción.",
      },
      {
        title: "Enterprise Support",
        content: `El nivel más alto de soporte para cargas críticas.

**Precio:**
- Mayor de: $15,000/mes O porcentaje del uso:
  - 10% de $0-$150K
  - 7% de $150K-$500K
  - 5% de $500K-$1M
  - 3% sobre $1M

**Qué incluye (adicional a Business):**
- Technical Account Manager (TAM) dedicado
- Concierge Support Team (billing/account)
- Infrastructure Event Management
- Tiempo de respuesta para business-critical:
  - < 15 minutos para business-critical system down
- Well-Architected Reviews
- Operations Reviews
- Training credits

**Technical Account Manager (TAM):**
- Punto de contacto dedicado
- Conoce tu arquitectura y negocio
- Proactivo (no solo reactivo)
- Ayuda a planificar y optimizar
- Participa en revisiones trimestrales

**Concierge Support Team:**
- Soporte de facturación y cuenta
- Ayuda con aspectos no técnicos
- Orientación de best practices

**Infrastructure Event Management:**
- Soporte para eventos grandes (lanzamientos, migraciones)
- Arquitectura y escalabilidad
- Monitoreo proactivo durante el evento`,
      },
      {
        title: "Comparación y Elección",
        content: `**Tabla comparativa:**

| Característica | Basic | Developer | Business | Enterprise |
|---------------|-------|-----------|----------|------------|
| Precio mínimo | Gratis | $29 | $100 | $15,000 |
| Email support | ✗ | ✓ | ✓ | ✓ |
| Phone/Chat | ✗ | ✗ | 24/7 | 24/7 |
| Contactos | ✗ | 1 | Ilimitado | Ilimitado |
| Respuesta crítica | - | - | 1 hora | 15 min |
| Trusted Advisor | 7 checks | 7 checks | Todos | Todos |
| TAM | ✗ | ✗ | ✗ | ✓ |

**Cómo elegir:**

**Basic:**
- Aprendiendo AWS
- Proyectos personales
- Sin necesidad de soporte directo

**Developer:**
- Equipos pequeños
- Desarrollo y testing
- Presupuesto limitado

**Business:**
- Producción
- Empresas con múltiples usuarios
- Necesidad de respuesta rápida

**Enterprise:**
- Misión crítica
- Gran inversión en AWS ($150K+/año)
- Necesidad de TAM y soporte proactivo

**ROI de soporte:**
- Costo de una hora de downtime vs costo de soporte
- Tiempo de equipo buscando soluciones vs llamar a soporte
- Optimización proactiva vs reactiva`,
      },
    ],
  },
  keyTakeaways: [
    "Basic es gratis con documentación, foros y 7 checks de Trusted Advisor",
    "Developer ($29+) agrega email con respuesta en 12-24 horas",
    "Business ($100+) incluye teléfono 24/7 y todos los checks de Trusted Advisor",
    "Enterprise ($15K+) tiene TAM dedicado y respuesta en 15 min para críticos",
    "Business es el mínimo recomendado para cargas de producción",
  ],
  relatedQuestions: ["q2", "q7", "q8", "q9"],
  tags: ["soporte", "Basic", "Developer", "Business", "Enterprise", "TAM"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
