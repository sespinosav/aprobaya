import { Article } from "@/types";

export const awsSupportPlanes: Article = {
  id: "d1-art-09",
  slug: "aws-support-planes",
  title: "Planes de AWS Support",
  shortDescription:
    "Conoce los diferentes niveles de soporte de AWS y qué incluye cada plan.",
  certificationId: "aws-clf-c02",
  domainId: "cloud-concepts",
  content: [
    {
      title: "Introducción a AWS Support",
      content: `AWS ofrece diferentes niveles de soporte técnico para adaptarse a las necesidades de cada cliente, desde desarrolladores individuales hasta grandes empresas con cargas de trabajo críticas.

Cada plan ofrece diferentes tiempos de respuesta, canales de comunicación y servicios incluidos.

> **Importante para el examen:** Es muy común que aparezcan preguntas sobre qué plan ofrece qué característica o tiempo de respuesta.`,
    },
    {
      title: "Comparación de Planes",
      content: `### Los 4 Planes de AWS Support:

| Característica | Basic | Developer | Business | Enterprise |
|----------------|-------|-----------|----------|------------|
| **Costo** | Gratis | Desde $29/mes | Desde $100/mes | Desde $15,000/mes |
| **Casos técnicos** | No | 1 contacto | Ilimitados | Ilimitados |
| **Canales** | Docs, foros | Email | Email, chat, teléfono | Email, chat, teléfono |
| **Trusted Advisor** | Core checks | Core checks | Full checks | Full checks |
| **TAM** | No | No | No | ✅ Sí |
| **Tiempo respuesta (crítico)** | - | - | < 1 hora | < 15 minutos |`,
    },
    {
      title: "Plan Basic (Gratuito)",
      content: `### Incluido automáticamente con toda cuenta AWS

**Acceso a:**
- Documentación de AWS
- Whitepapers y guías
- Foros de discusión de AWS
- AWS Personal Health Dashboard
- 7 core checks de Trusted Advisor

**Soporte de facturación:**
- Preguntas de cuenta y facturación
- Acceso a AWS Support Center

**NO incluye:**
- Casos de soporte técnico
- Guía arquitectónica
- Tiempos de respuesta garantizados

**Ideal para:**
- Explorar AWS
- Proyectos personales
- Aprendizaje y experimentación`,
    },
    {
      title: "Plan Developer",
      content: `### Para desarrollo y pruebas no críticas

**Costo:** Mayor de:
- $29/mes, o
- 3% del uso mensual de AWS

**Todo lo de Basic, más:**
- Soporte técnico por email
- 1 contacto principal puede abrir casos
- Guía general de arquitectura

**Tiempos de respuesta:**
| Severidad | Descripción | Tiempo |
|-----------|-------------|--------|
| General | Preguntas generales | < 24 horas (horario laboral) |
| System impaired | Sistema afectado | < 12 horas (horario laboral) |

**NO incluye:**
- Soporte por teléfono o chat
- Soporte 24/7
- Acceso completo a Trusted Advisor

**Ideal para:**
- Desarrolladores individuales
- Entornos de desarrollo/testing
- Proyectos no críticos`,
    },
    {
      title: "Plan Business",
      content: `### Para cargas de trabajo de producción

**Costo:** Mayor de:
- $100/mes, o
- Escala según uso (10% de primeros $10K, 7% de $10K-$80K, etc.)

**Todo lo de Developer, más:**
- Soporte 24/7 por teléfono, chat y email
- Contactos ilimitados pueden abrir casos
- Acceso completo a Trusted Advisor (todos los checks)
- API de AWS Support (automatizar casos)
- Guía de casos de uso para servicios AWS
- AWS Infrastructure Event Management (con cargo adicional)

**Tiempos de respuesta:**
| Severidad | Descripción | Tiempo |
|-----------|-------------|--------|
| General | Preguntas generales | < 24 horas |
| System impaired | Sistema afectado | < 12 horas |
| Production system impaired | Producción impactada | < 4 horas |
| Production system down | Producción caída | < 1 hora |

**Ideal para:**
- Empresas con cargas de producción
- Necesidad de soporte 24/7
- Múltiples equipos usando AWS`,
    },
    {
      title: "Plan Enterprise On-Ramp",
      content: `### Para empresas en crecimiento (añadido recientemente)

**Costo:** Mayor de:
- $5,500/mes, o
- Escala según uso

**Todo lo de Business, más:**
- Pool de Technical Account Managers (TAMs)
- Revisiones consultivas y guía arquitectónica
- Soporte proactivo de TAM
- Acceso a AWS Incident Detection and Response (con cargo)
- Training Credits

**Tiempos de respuesta:**
| Severidad | Descripción | Tiempo |
|-----------|-------------|--------|
| Business-critical system down | Sistema crítico caído | < 30 minutos |

**Ideal para:**
- Empresas creciendo rápidamente
- Necesidad de guía arquitectónica
- Preparación para Enterprise sin el costo completo`,
    },
    {
      title: "Plan Enterprise",
      content: `### Para cargas de trabajo mission-critical

**Costo:** Mayor de:
- $15,000/mes, o
- Escala según uso

**Todo lo de Enterprise On-Ramp, más:**
- Technical Account Manager (TAM) dedicado
- Concierge Support Team para facturación
- Infrastructure Event Management incluido
- Well-Architected Reviews
- Operations Reviews
- Training workshops

**Tiempos de respuesta:**
| Severidad | Descripción | Tiempo |
|-----------|-------------|--------|
| Business-critical system down | Sistema crítico caído | < 15 minutos |

**Beneficios del TAM dedicado:**
- Conoce tu arquitectura y negocio
- Revisiones proactivas
- Guía en adopción de servicios
- Advocacy interno en AWS
- Coordinación de eventos importantes

**Ideal para:**
- Grandes empresas
- Aplicaciones mission-critical
- Necesidad de soporte personalizado`,
    },
    {
      title: "AWS Trusted Advisor",
      content: `### Incluido en todos los planes (con diferencias)

**Trusted Advisor** es una herramienta que analiza tu cuenta y proporciona recomendaciones en 5 categorías:

1. **Cost Optimization** - Reducir gastos
2. **Performance** - Mejorar rendimiento
3. **Security** - Fortalecer seguridad
4. **Fault Tolerance** - Mejorar resiliencia
5. **Service Limits** - Monitorear límites

### Checks por plan:

**Basic y Developer (7 core checks):**
- S3 Bucket Permissions
- Security Groups - Specific Ports Unrestricted
- IAM Use
- MFA on Root Account
- EBS Public Snapshots
- RDS Public Snapshots
- Service Limits

**Business y Enterprise (todos los checks):**
- +50 checks adicionales
- Recomendaciones de Reserved Instances
- Uso de EBS, EC2, RDS
- Configuraciones de alta disponibilidad
- Y muchos más...

### Integración:
- Alertas por CloudWatch
- Refresh semanal (o manual)
- API para automatización`,
    },
    {
      title: "Características por Plan - Resumen",
      content: `### Tabla de referencia rápida:

| Característica | Basic | Dev | Business | Enterprise |
|----------------|-------|-----|----------|------------|
| Documentación/Foros | ✅ | ✅ | ✅ | ✅ |
| Health Dashboard | ✅ | ✅ | ✅ | ✅ |
| 7 Core Trusted Advisor | ✅ | ✅ | ✅ | ✅ |
| Casos técnicos | ❌ | ✅ | ✅ | ✅ |
| Soporte email | ❌ | ✅ | ✅ | ✅ |
| Soporte teléfono/chat | ❌ | ❌ | ✅ | ✅ |
| 24/7 | ❌ | ❌ | ✅ | ✅ |
| Full Trusted Advisor | ❌ | ❌ | ✅ | ✅ |
| Support API | ❌ | ❌ | ✅ | ✅ |
| TAM | ❌ | ❌ | ❌ | ✅ |
| Concierge | ❌ | ❌ | ❌ | ✅ |
| < 15 min response | ❌ | ❌ | ❌ | ✅ |

### Preguntas típicas del examen:

*"¿Qué plan proporciona un Technical Account Manager?"*
→ Enterprise

*"¿Qué plan tiene acceso completo a Trusted Advisor?"*
→ Business y Enterprise

*"¿Qué plan ofrece soporte 24/7 por teléfono?"*
→ Business y Enterprise

*"¿Cuál es el tiempo de respuesta más rápido para sistema crítico caído?"*
→ Enterprise: 15 minutos`,
    },
  ],
  keyPoints: [
    "4 planes: Basic (gratis), Developer, Business, Enterprise",
    "Basic: Solo documentación, foros y 7 checks de Trusted Advisor",
    "Developer: Email, 1 contacto, horario laboral",
    "Business: 24/7, teléfono/chat, Trusted Advisor completo, <1h respuesta",
    "Enterprise: TAM dedicado, Concierge, <15min respuesta",
    "Trusted Advisor completo: Solo Business y Enterprise",
    "TAM (Technical Account Manager): Solo Enterprise",
  ],
  tags: [
    "AWS Support",
    "planes de soporte",
    "TAM",
    "Trusted Advisor",
    "Enterprise",
    "Business",
    "Developer",
    "tiempos de respuesta",
  ],
  relatedServices: ["trusted-advisor", "health-dashboard"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
