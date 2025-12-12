import { Article } from "@/types";

export const awsCostExplorer: Article = {
  id: "d4-art-03",
  slug: "aws-cost-explorer",
  title: "AWS Cost Explorer: Análisis de Costos",
  shortDescription:
    "Visualiza, entiende y gestiona tus costos y uso de AWS con análisis detallado.",
  domainId: "domain4",
  content: {
    introduction:
      "AWS Cost Explorer es una herramienta que permite visualizar, comprender y gestionar los costos y el uso de AWS a lo largo del tiempo. Proporciona gráficos interactivos, filtros y capacidades de forecast para optimizar gastos.",
    sections: [
      {
        title: "¿Qué es Cost Explorer?",
        content: `Cost Explorer es la herramienta principal de **análisis de costos** de AWS.

**Funcionalidades:**
- Visualizar costos históricos
- Analizar tendencias de uso
- Proyectar costos futuros
- Generar recomendaciones de ahorro
- Exportar datos

**Características clave:**
- Datos de los últimos 12 meses
- Forecast de 12 meses futuros
- Filtros granulares
- Múltiples visualizaciones
- Reportes guardables

**Acceso:**
- Consola de AWS → Billing → Cost Explorer
- O directamente: ce.console.aws.amazon.com

**Primer uso:**
- Debe habilitarse (una sola vez)
- Datos disponibles en ~24 horas
- Gratis para uso básico`,
      },
      {
        title: "Vistas y Filtros",
        content: `**Vistas predeterminadas:**

**Monthly costs by service:**
- Costos mensuales desglosados por servicio
- Visualización más común

**Daily costs:**
- Granularidad diaria
- Detectar picos de gasto

**Monthly costs by linked account:**
- Para AWS Organizations
- Costos por cuenta

**Filtros disponibles:**
- **Service**: EC2, S3, RDS, etc.
- **Linked Account**: Cuenta específica
- **Region**: us-east-1, eu-west-1, etc.
- **Instance Type**: t3.micro, m5.large
- **Usage Type**: DataTransfer, Requests
- **Tag**: Tus tags personalizados
- **Purchase Option**: On-Demand, Reserved, Spot

**Ejemplo de análisis:**
\`\`\`
Pregunta: "¿Por qué subió mi factura el mes pasado?"

Análisis:
1. Comparar mes actual vs anterior
2. Filtrar por servicio → EC2 subió
3. Filtrar por usage type → Data Transfer
4. Identificar: Incremento de tráfico saliente
5. Solución: Usar CloudFront para caché
\`\`\``,
      },
      {
        title: "Reportes y Forecast",
        content: `**Reportes guardados:**
- Crear reportes personalizados
- Guardar filtros frecuentes
- Programar envío por email

**Forecast (Proyección):**
- Predice costos futuros
- Basado en patrones históricos
- Hasta 12 meses adelante
- Incluye intervalos de confianza

**Cómo usar Forecast:**
\`\`\`
Forecast para próximo mes:
- Predicted: $12,500
- Low estimate: $11,200
- High estimate: $13,800

Si forecast excede budget → Tomar acción
\`\`\`

**Cost and Usage Reports (CUR):**
- Datos más detallados que Cost Explorer
- Se exportan a S3
- Para análisis avanzado (Athena, QuickSight)
- Nivel de granularidad: por hora, por recurso

**Cuándo usar CUR vs Cost Explorer:**
| Necesidad | Herramienta |
|-----------|-------------|
| Análisis rápido visual | Cost Explorer |
| Reportes programados básicos | Cost Explorer |
| Datos por hora | CUR |
| Integración con BI | CUR |
| Análisis con SQL | CUR + Athena |`,
      },
      {
        title: "Recomendaciones de Ahorro",
        content: `Cost Explorer genera **recomendaciones automáticas**:

**Reserved Instance Recommendations:**
- Analiza tu uso On-Demand
- Sugiere qué RIs comprar
- Calcula ahorro potencial

**Savings Plans Recommendations:**
- Similar a RIs pero más flexible
- Compromiso en $/hora
- Cubre EC2, Lambda, Fargate

**Rightsizing Recommendations:**
- Instancias sobredimensionadas
- Sugiere tamaño óptimo
- Basado en uso de CPU/memoria

**Ejemplo de recomendación:**
\`\`\`
Rightsizing:
Instancia: i-abc123 (m5.xlarge)
CPU promedio: 15%
Memoria promedio: 22%

Recomendación: Cambiar a m5.large
Ahorro estimado: $50/mes
\`\`\`

**Acceder a recomendaciones:**
1. Cost Explorer → Menú izquierdo
2. "Recommendations" sección
3. RI, Savings Plans, o Rightsizing

**Tips:**
- Revisar recomendaciones mensualmente
- Validar antes de aplicar (puede haber picos)
- Empezar con Savings Plans (más flexibles)`,
        note: "Las recomendaciones de rightsizing están en AWS Compute Optimizer para análisis más profundo.",
      },
      {
        title: "Análisis por Tags",
        content: `**Cost Allocation Tags:**
Para analizar costos por proyecto, equipo, ambiente, etc.

**Tipos de tags:**
- **AWS-generated**: aws:createdBy, etc.
- **User-defined**: Tus propios tags

**Habilitar tags para Cost Explorer:**
1. Billing → Cost Allocation Tags
2. Activar tags que quieres rastrear
3. Datos aparecen en ~24 horas

**Estrategia de tagging recomendada:**
\`\`\`
Recurso: EC2 Instance

Tags:
- Environment: production
- Project: website-main
- Team: engineering
- CostCenter: CC-1234
- Owner: john.doe@company.com
\`\`\`

**Análisis con tags:**
1. Filtrar por tag "Project"
2. Ver costos de cada proyecto
3. Comparar contra presupuesto del proyecto

**Mejores prácticas:**
- Definir estándar de tags en la organización
- Usar AWS Organizations SCPs para forzar tags
- Revisar recursos sin tags regularmente
- Automatizar tagging con Lambda/CloudFormation`,
      },
      {
        title: "Precios y API",
        content: `**Precios de Cost Explorer:**
- Acceso a la interfaz: **Gratis**
- Forecast y recomendaciones: **Gratis**
- API: $0.01 por request

**Cost Explorer API:**
- Integrar datos de costos en tus sistemas
- Automatizar reportes
- Construir dashboards personalizados

**Ejemplo de API request:**
\`\`\`bash
aws ce get-cost-and-usage \\
  --time-period Start=2025-01-01,End=2025-01-31 \\
  --granularity MONTHLY \\
  --metrics "UnblendedCost" \\
  --group-by Type=DIMENSION,Key=SERVICE
\`\`\`

**Casos de uso de API:**
- Reporte diario automático a Slack
- Dashboard interno de costos
- Alertas personalizadas
- Integración con sistemas financieros

**Herramientas complementarias:**
| Herramienta | Uso |
|-------------|-----|
| Cost Explorer | Análisis visual |
| Budgets | Alertas y límites |
| CUR | Datos detallados |
| Compute Optimizer | Rightsizing |
| Trusted Advisor | Checks de costos |

**Stack completo de cost management:**
Cost Explorer (análisis) + Budgets (alertas) + Tags (asignación) + CUR (datos raw)`,
      },
    ],
  },
  keyTakeaways: [
    "Cost Explorer visualiza costos históricos y proyecta futuros (12 meses)",
    "Filtros por servicio, cuenta, región, tags y más",
    "Genera recomendaciones de Reserved Instances y Savings Plans",
    "Rightsizing suggestions para instancias sobredimensionadas",
    "Gratis para uso básico, API cuesta $0.01/request",
  ],
  relatedQuestions: ["q88", "q89"],
  tags: ["Cost Explorer", "costos", "análisis", "forecast", "optimización"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
