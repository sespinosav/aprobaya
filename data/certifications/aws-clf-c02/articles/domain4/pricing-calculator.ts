import { Article } from "@/types";

export const pricingCalculator: Article = {
  id: "d4-art-12",
  slug: "pricing-calculator",
  title: "AWS Pricing Calculator: Estima tus Costos",
  shortDescription:
    "Aprende a usar el calculador de precios para estimar costos antes de desplegar.",
  domainId: "domain4",
  content: {
    introduction:
      "AWS Pricing Calculator es una herramienta gratuita que permite estimar costos de servicios AWS antes de usarlos. Es esencial para planificación de presupuestos, comparación de arquitecturas y justificación de inversiones.",
    sections: [
      {
        title: "¿Qué es AWS Pricing Calculator?",
        content: `**Herramienta de estimación de costos:**

**URL:** calculator.aws

**Características:**
- Gratuito y sin necesidad de cuenta AWS
- Estima costos mensuales y anuales
- Cubre más de 100 servicios AWS
- Crea y guarda múltiples estimaciones
- Comparte estimaciones con enlaces
- Exporta a CSV para análisis

**Casos de uso:**
- Planificar nueva arquitectura
- Comparar On-Demand vs Reserved
- Justificar migración a la nube
- Presupuestar proyectos
- Evaluar diferentes regiones

**Reemplaza a:**
- Simple Monthly Calculator (deprecated)
- TCO Calculator (integrado)`,
      },
      {
        title: "Crear una Estimación",
        content: `**Flujo de trabajo:**

**Paso 1: Agregar servicios**
\`\`\`
1. Click "Add service"
2. Buscar servicio (ej: "EC2")
3. Seleccionar servicio
4. Click "Configure"
\`\`\`

**Paso 2: Configurar servicio**
\`\`\`
Ejemplo EC2:
- Región: us-east-1
- Instancias: 5
- Tipo: m5.xlarge
- Uso: 730 hrs/mes (24/7)
- OS: Linux
- Pricing: On-Demand / Reserved / Savings Plans
- Storage: 100 GB EBS gp3
\`\`\`

**Paso 3: Ver estimación**
\`\`\`
Monthly estimate:
- EC2 Instances: $700.80
- EBS Storage: $40.00
Total: $740.80/month

Annual: $8,889.60
\`\`\`

**Paso 4: Agregar más servicios**
\`\`\`
+ RDS PostgreSQL
+ S3 Storage
+ CloudFront
+ Lambda
= Estimación total de arquitectura
\`\`\``,
      },
      {
        title: "Configurar Diferentes Escenarios",
        content: `**Grupos para organizar:**

**Crear grupos por:**
- Ambiente (Dev, Staging, Prod)
- Aplicación
- Equipo
- Región

**Ejemplo de estimación completa:**
\`\`\`
Grupo: Production
├── EC2 (Web Servers)
│   - 3x m5.large: $210/mes
│   - EBS: $60/mes
├── RDS PostgreSQL
│   - db.m5.large Multi-AZ: $280/mes
│   - Storage: $40/mes
├── ElastiCache
│   - cache.m5.large: $100/mes
├── Load Balancer
│   - ALB: $22/mes
│   - Data: $8/mes
└── S3 + CloudFront
    - Storage: $23/mes
    - Transfer: $85/mes

Total Production: $828/mes

Grupo: Development
├── EC2: $70/mes
├── RDS Single-AZ: $140/mes
└── S3: $5/mes

Total Development: $215/mes

TOTAL MENSUAL: $1,043
TOTAL ANUAL: $12,516
\`\`\``,
      },
      {
        title: "Comparar Opciones de Precio",
        content: `**Evaluar diferentes estrategias:**

**On-Demand vs Savings Plans vs Reserved:**
\`\`\`
Escenario: 10x m5.xlarge 24/7 por 3 años

On-Demand:
- $0.192/hr × 10 × 730 hrs × 36 meses
= $50,457 total

Compute Savings Plan (3yr All Upfront):
- $28,000 upfront
= $28,000 total (44% ahorro)

EC2 Reserved (3yr All Upfront):
- $24,000 upfront
= $24,000 total (52% ahorro)
\`\`\`

**Comparar regiones:**
\`\`\`
Misma arquitectura:

us-east-1: $1,000/mes
eu-west-1: $1,100/mes (+10%)
ap-southeast-1: $1,150/mes (+15%)
\`\`\`

**Comparar tipos de instancia:**
\`\`\`
Workload: 8 vCPU, 32 GB RAM

m5.2xlarge (Intel): $0.384/hr
m6i.2xlarge (Intel 3rd Gen): $0.384/hr
m6g.2xlarge (Graviton2): $0.308/hr (-20%)
m7g.2xlarge (Graviton3): $0.326/hr (-15%)
\`\`\``,
      },
      {
        title: "Servicios Comunes en Estimaciones",
        content: `**Parámetros clave por servicio:**

**EC2:**
- Tipo y cantidad de instancias
- Horas de uso (730 = 24/7)
- Sistema operativo
- Modelo de pricing
- Storage (EBS)

**RDS:**
- Engine (MySQL, PostgreSQL, etc.)
- Tipo de instancia
- Single-AZ vs Multi-AZ
- Storage y IOPS
- Backups

**S3:**
- Clase de storage
- GB almacenados
- Requests (PUT, GET)
- Data transfer out

**Lambda:**
- Número de requests
- Duración promedio (ms)
- Memoria asignada

**Data Transfer:**
- GB salientes a Internet
- GB entre regiones
- GB entre AZs

**Costos frecuentemente olvidados:**
- NAT Gateway ($0.045/hr + data)
- Elastic IPs no usadas
- EBS snapshots
- CloudWatch logs
- Cross-AZ traffic`,
        note: "El calculador te ayuda a NO olvidar costos ocultos mostrando todos los componentes.",
      },
      {
        title: "Compartir y Exportar",
        content: `**Opciones de compartir:**

**Enlace público:**
\`\`\`
1. Click "Share"
2. "Agree and continue"
3. Copiar enlace generado
4. Válido por 3 años

Ejemplo:
calculator.aws/#/estimate?id=abc123xyz
\`\`\`

**Exportar CSV:**
\`\`\`
1. Click "Export"
2. Descargar CSV
3. Abrir en Excel/Sheets

Contenido:
- Servicio
- Configuración
- Costo mensual
- Costo anual
\`\`\`

**Usos del export:**
- Documentación de proyecto
- Aprobación de presupuesto
- Comparación histórica
- Integrar con herramientas financieras

**Guardar localmente:**
\`\`\`
1. Click "Save"
2. Descarga archivo JSON
3. Importar después con "Import"

Útil para:
- Backup de estimaciones
- Trabajo offline
- Versionar estimaciones
\`\`\``,
      },
      {
        title: "Diferencias con Otras Herramientas",
        content: `**AWS Pricing Calculator vs otros:**

**Pricing Calculator (calculator.aws):**
- Estimaciones ANTES de usar
- Sin cuenta AWS necesaria
- Para planificación
- Arquitecturas hipotéticas

**AWS Cost Explorer:**
- Análisis de costos ACTUALES
- Requiere cuenta AWS con historial
- Para optimización de lo existente
- Datos reales

**AWS Budgets:**
- Alertas de gasto
- Requiere cuenta AWS
- Para control de costos en curso
- Basado en uso real

**AWS Cost and Usage Reports:**
- Datos detallados de billing
- Para análisis profundo
- Integración con BI tools
- Histórico completo

**Resumen para el examen:**
\`\`\`
Pregunta sobre...                → Herramienta
Estimar antes de desplegar       → Pricing Calculator
Analizar gastos actuales         → Cost Explorer
Alertas de presupuesto           → AWS Budgets
Datos detallados de facturación  → Cost and Usage Reports
Recomendaciones de ahorro        → Trusted Advisor + Cost Explorer
\`\`\``,
        note: "Pricing Calculator es para ANTES de usar AWS. Cost Explorer es para DESPUÉS de usar AWS.",
      },
    ],
  },
  keyTakeaways: [
    "AWS Pricing Calculator (calculator.aws) estima costos ANTES de desplegar",
    "Gratuito y no requiere cuenta AWS para usar",
    "Permite comparar On-Demand vs Reserved vs Savings Plans",
    "Puedes compartir estimaciones via enlace o exportar CSV",
    "Diferente a Cost Explorer que analiza costos actuales/históricos",
  ],
  relatedQuestions: ["q88", "q99"],
  tags: [
    "Pricing Calculator",
    "estimación",
    "costos",
    "planificación",
    "presupuesto",
  ],
  readingTime: 9,
  lastUpdated: "2025-12-11",
};
