import { Article } from "@/types";

export const herramientasEstimacionCostos: Article = {
  id: "d1-art-05",
  slug: "herramientas-estimacion-costos",
  title: "Herramientas de Estimación y Gestión de Costos",
  shortDescription:
    "Conoce las herramientas de AWS para estimar, analizar y optimizar tus costos en la nube.",
  certificationId: "aws-clf-c02",
  domainId: "cloud-concepts",
  content: [
    {
      title: "Introducción a la Gestión de Costos en AWS",
      content: `Uno de los mayores desafíos al migrar a la nube es entender y controlar los costos. AWS ofrece múltiples herramientas gratuitas para ayudarte en cada etapa:

1. **Antes de usar:** Estimar cuánto costará
2. **Durante el uso:** Monitorear gastos en tiempo real
3. **Después:** Analizar y optimizar

El examen CLF-C02 incluye varias preguntas sobre estas herramientas. Es importante conocer el propósito específico de cada una.`,
    },
    {
      title: "AWS Pricing Calculator",
      content: `### ¿Qué es?
Herramienta web gratuita para **estimar costos ANTES** de desplegar recursos en AWS.

**URL:** [calculator.aws](https://calculator.aws)

### Características:
- No requiere cuenta de AWS
- Configura servicios como EC2, RDS, S3, etc.
- Ve el costo mensual estimado por servicio y total
- Compara diferentes configuraciones
- Exporta estimaciones como enlace o PDF
- Guarda y comparte estimaciones

### Casos de uso:
- Planificar presupuesto de migración
- Comparar costo de diferentes arquitecturas
- Presentar estimaciones a gerencia
- Evaluar opciones de ahorro (Reserved vs On-Demand)

### Ejemplo de uso:
*"Quiero saber cuánto costará ejecutar 5 instancias t3.large 24/7 en us-east-1"*
→ Usa **AWS Pricing Calculator**

> **Nota para el examen:** Si la pregunta dice "estimar costos antes de migrar" o "planificar presupuesto", la respuesta es AWS Pricing Calculator.`,
    },
    {
      title: "AWS Cost Explorer",
      content: `### ¿Qué es?
Herramienta para **visualizar y analizar** tus costos y uso **históricos y actuales**.

### Características principales:
- Gráficos de costos por servicio, cuenta, tag, etc.
- Tendencias de gasto por día, mes, año
- Pronósticos de gastos futuros basados en historial
- Filtros por servicio, región, instancia, tag
- Reportes predefinidos y personalizados

### Tipos de vistas:
1. **Costo mensual por servicio:** Ver qué servicios cuestan más
2. **Costo por cuenta vinculada:** En AWS Organizations
3. **Uso por tipo de instancia:** Identificar oportunidades de right-sizing
4. **Costo por tag:** Si usas Cost Allocation Tags

### Cost Explorer también ofrece:
- **Rightsizing Recommendations:** Sugerencias para reducir tamaño de instancias EC2 subutilizadas
- **RI Coverage y Utilization Reports:** Ver qué tan bien usas tus Reserved Instances
- **Savings Plans Recommendations:** Sugerencias de Savings Plans basadas en tu uso

### Ejemplo de uso:
*"Nuestros costos de AWS subieron 30% el mes pasado. ¿Por qué?"*
→ Usa **AWS Cost Explorer** para analizar

> **Nota para el examen:** Si la pregunta menciona "analizar", "visualizar" o "entender" costos históricos, la respuesta es Cost Explorer.`,
    },
    {
      title: "AWS Budgets",
      content: `### ¿Qué es?
Servicio para **establecer presupuestos** y recibir **alertas** cuando te acercas o excedes límites.

### Tipos de presupuestos:
| Tipo | Descripción |
|------|-------------|
| **Cost Budget** | Alerta cuando gastos superan umbral |
| **Usage Budget** | Alerta cuando uso de servicio supera umbral |
| **Savings Plans Budget** | Alerta sobre utilización de Savings Plans |
| **Reservation Budget** | Alerta sobre utilización de Reserved Instances |

### Configuración de alertas:
- Por **umbral actual:** Cuando alcanzas cierto % del presupuesto
- Por **pronóstico:** Cuando se proyecta que excederás el presupuesto

### Acciones automáticas (Budget Actions):
- Aplicar políticas IAM restrictivas
- Desadjuntar políticas IAM
- Detener instancias EC2
- Aplicar Service Control Policies (SCPs)

### Ejemplo de uso:
*"Quiero que me avisen cuando hayamos gastado el 80% del presupuesto mensual"*
→ Configura **AWS Budgets** con alerta al 80%

### Costos:
- Primeros 2 presupuestos: Gratis
- Presupuestos adicionales: $0.02/día cada uno

> **Nota para el examen:** Si la pregunta menciona "alertas", "notificaciones" o "presupuesto", la respuesta es AWS Budgets.`,
    },
    {
      title: "AWS Cost and Usage Report (CUR)",
      content: `### ¿Qué es?
El reporte más **detallado y granular** de costos y uso de AWS. Contiene TODOS los datos de facturación.

### Características:
- Datos a nivel de línea de factura
- Actualizado múltiples veces al día
- Se entrega a un bucket de S3
- Formato CSV o Parquet
- Integrable con Athena, Redshift, QuickSight

### Casos de uso:
- Análisis avanzado con SQL
- Dashboards personalizados
- Integración con herramientas de FinOps de terceros
- Auditoría detallada

### Cuándo usar CUR vs Cost Explorer:
| Necesidad | Herramienta |
|-----------|-------------|
| Análisis visual rápido | Cost Explorer |
| Datos granulares, análisis SQL | Cost and Usage Report |
| Integración con BI tools | Cost and Usage Report |
| Ver tendencias generales | Cost Explorer |

> **Nota para el examen:** Si la pregunta menciona "reporte detallado", "análisis granular" o "integrar con otras herramientas", la respuesta es AWS Cost and Usage Report.`,
    },
    {
      title: "AWS Free Tier",
      content: `### ¿Qué es?
Conjunto de servicios que puedes usar **gratis** para probar AWS.

### Tipos de Free Tier:
| Tipo | Descripción | Ejemplos |
|------|-------------|----------|
| **Always Free** | Gratis para siempre | Lambda (1M requests/mes), DynamoDB (25 GB) |
| **12 Months Free** | Gratis el primer año | EC2 t2.micro (750 hrs/mes), S3 (5 GB) |
| **Trials** | Período de prueba corto | SageMaker, Redshift, etc. |

### Servicios Always Free destacados:
- **Lambda:** 1 millón de requests/mes
- **DynamoDB:** 25 GB de almacenamiento
- **SNS:** 1 millón de publicaciones
- **CloudWatch:** 10 métricas personalizadas, 10 alarmas

### Servicios 12 Months Free destacados:
- **EC2:** 750 horas/mes de t2.micro o t3.micro
- **S3:** 5 GB de almacenamiento estándar
- **RDS:** 750 horas/mes de db.t2.micro
- **CloudFront:** 50 GB de transferencia de datos

### Cómo monitorear Free Tier:
1. **Billing Dashboard:** Muestra uso vs límites Free Tier
2. **AWS Budgets:** Puedes crear alertas de uso Free Tier
3. **Cost Explorer:** Filtra por uso Free Tier

> **Importante:** Los cargos comienzan automáticamente si excedes los límites del Free Tier.`,
    },
    {
      title: "AWS Compute Optimizer",
      content: `### ¿Qué es?
Servicio que usa **machine learning** para analizar métricas de uso y recomendar recursos de cómputo optimizados.

### Recursos que analiza:
- EC2 instances
- Auto Scaling Groups
- EBS volumes
- Lambda functions
- ECS services on Fargate

### Tipos de recomendaciones:
1. **Over-provisioned:** Recursos más grandes de lo necesario → Reducir
2. **Under-provisioned:** Recursos insuficientes → Aumentar
3. **Optimal:** Configuración adecuada

### Ahorros típicos:
- Hasta 25% de reducción en costos de cómputo
- Mejora de rendimiento cuando está under-provisioned

### Cómo funciona:
1. Recopila métricas de CloudWatch (últimos 14 días mínimo)
2. Analiza patrones de uso con ML
3. Compara contra catálogo de instancias
4. Recomienda cambios con impacto estimado

> **Nota para el examen:** Si la pregunta menciona "right-sizing" o "optimizar tamaño de instancias EC2", considera AWS Compute Optimizer.`,
    },
    {
      title: "Resumen de Herramientas de Costos",
      content: `### Tabla de referencia rápida:

| Herramienta | Propósito | Cuándo usar |
|-------------|-----------|-------------|
| **Pricing Calculator** | Estimar costos futuros | Antes de desplegar o migrar |
| **Cost Explorer** | Visualizar costos actuales/pasados | Análisis mensual, entender tendencias |
| **Budgets** | Alertas de presupuesto | Controlar gastos, evitar sorpresas |
| **Cost and Usage Report** | Datos granulares de facturación | Análisis avanzado, auditoría |
| **Compute Optimizer** | Right-sizing de recursos | Optimizar instancias existentes |
| **Free Tier** | Probar servicios gratis | Aprendizaje, desarrollo, pruebas |

### Flujo típico de gestión de costos:
1. **Planificar:** Pricing Calculator
2. **Monitorear:** Cost Explorer + Budgets
3. **Optimizar:** Compute Optimizer + Right-sizing
4. **Reportar:** Cost and Usage Report`,
    },
  ],
  keyPoints: [
    "AWS Pricing Calculator: Estimar costos ANTES de desplegar",
    "Cost Explorer: Visualizar y analizar costos históricos",
    "AWS Budgets: Alertas cuando se acercan límites de presupuesto",
    "Cost and Usage Report: Datos granulares para análisis avanzado",
    "Compute Optimizer: Recomendaciones de right-sizing con ML",
    "Free Tier: Servicios gratis (Always Free, 12 meses, Trials)",
  ],
  tags: [
    "costos",
    "Pricing Calculator",
    "Cost Explorer",
    "Budgets",
    "CUR",
    "Free Tier",
    "Compute Optimizer",
    "finops",
  ],
  relatedServices: ["cost-explorer", "budgets", "trusted-advisor"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
