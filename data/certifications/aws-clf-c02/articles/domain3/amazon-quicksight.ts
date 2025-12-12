import { Article } from "@/types";

export const amazonQuicksight: Article = {
  id: "d3-art-10",
  slug: "amazon-quicksight",
  title: "Amazon QuickSight: Business Intelligence en la Nube",
  shortDescription:
    "Crea visualizaciones y dashboards interactivos con el servicio de BI serverless de AWS.",
  domainId: "domain3",
  content: {
    introduction:
      "Amazon QuickSight es un servicio de Business Intelligence (BI) serverless y escalable que permite crear visualizaciones interactivas, dashboards y reportes para analizar datos de negocio.",
    sections: [
      {
        title: "¿Qué es Amazon QuickSight?",
        content: `QuickSight es un servicio de **Business Intelligence completamente administrado** que permite:

- Crear visualizaciones y dashboards interactivos
- Compartir insights con toda la organización
- Analizar datos de múltiples fuentes
- Usar ML para obtener insights automáticos

**Características principales:**
- **Serverless**: Sin infraestructura que administrar
- **Pay-per-session**: Pagas por uso, no por usuario con licencia
- **SPICE**: Motor de cálculo en memoria super rápido
- **ML Insights**: Detección de anomalías, forecasting
- **Embeddable**: Integra dashboards en aplicaciones

**Casos de uso:**
- Reportes ejecutivos
- Análisis de ventas
- Métricas operativas
- Self-service analytics`,
      },
      {
        title: "Fuentes de Datos Soportadas",
        content: `QuickSight puede conectarse a múltiples fuentes:

**Servicios AWS:**
- Amazon RDS (MySQL, PostgreSQL, etc.)
- Amazon Redshift
- Amazon Athena (queries sobre S3)
- Amazon S3 (archivos CSV, JSON, etc.)
- Amazon OpenSearch
- Amazon Aurora

**Bases de datos externas:**
- MySQL, PostgreSQL, SQL Server
- Oracle, MariaDB
- Presto, Spark

**Aplicaciones SaaS:**
- Salesforce
- ServiceNow
- Adobe Analytics
- GitHub
- Twitter

**Archivos:**
- Excel, CSV
- Archivos de log
- JSON

**SPICE (Super-fast, Parallel, In-memory Calculation Engine):**
- Motor en memoria para rendimiento
- Datos importados y optimizados
- Consultas ultra-rápidas`,
      },
      {
        title: "Componentes de QuickSight",
        content: `**Datasets:**
- Datos preparados para análisis
- Pueden incluir transformaciones
- Se refrescan automáticamente

**Analyses:**
- Espacio de trabajo para crear visualizaciones
- Múltiples gráficos y tablas
- Filtros y controles interactivos

**Dashboards:**
- Versión publicada de un analysis
- De solo lectura (no editable)
- Se comparten con usuarios

**Tipos de visualizaciones:**
- Gráficos de barras, líneas, áreas
- Pie charts, donut charts
- Scatter plots
- Heat maps
- Tree maps
- Tablas pivote
- KPIs y gauges
- Mapas geográficos

**Interactividad:**
- Filtros y drill-down
- Parámetros dinámicos
- Acciones de navegación`,
      },
      {
        title: "ML Insights",
        content: `QuickSight incluye capacidades de Machine Learning automáticas:

**Anomaly Detection:**
- Detecta valores inusuales en métricas
- Alerta sobre desviaciones significativas
- Sin necesidad de configurar modelos

**Forecasting:**
- Predicciones basadas en datos históricos
- Muestra tendencias futuras
- Intervalos de confianza

**Auto-narratives:**
- Genera texto explicativo de los datos
- Resúmenes automáticos en lenguaje natural
- Útil para reportes ejecutivos

**Suggested Insights:**
- QuickSight sugiere visualizaciones relevantes
- Descubre patrones automáticamente
- Acelera el análisis exploratorio

**Q (Natural Language Queries):**
- Hacer preguntas en lenguaje natural
- "¿Cuáles fueron las ventas del Q1?"
- QuickSight genera la visualización`,
        note: "ML Insights está disponible en Enterprise Edition y no requiere experiencia en ciencia de datos.",
      },
      {
        title: "Ediciones y Precios",
        content: `**Standard Edition:**
- Usuarios author y readers
- Conectividad a fuentes de datos
- SPICE incluido
- Compartir dashboards

**Enterprise Edition:**
- Todo de Standard +
- ML Insights
- Row-level security
- Hourly data refresh
- Private VPC connectivity
- Embedded analytics
- Audit logs

**Modelo de precios:**

**Authors (crean dashboards):**
- Standard: $9/mes por autor
- Enterprise: $18/mes por autor

**Readers (solo ven):**
- Pay-per-session: $0.30/sesión (max $5/mes)
- Ideal para usuarios ocasionales

**SPICE:**
- 10 GB incluido por autor
- $0.25/GB adicional por mes

**Ventaja del modelo pay-per-session:**
- BI tradicional: $50-100/usuario/mes
- QuickSight reader: máximo $5/mes
- Reduce significativamente costos de BI`,
      },
      {
        title: "QuickSight vs Otras Herramientas",
        content: `**QuickSight vs Tableau/Power BI:**
| Aspecto | QuickSight | Tableau/Power BI |
|---------|-----------|------------------|
| Despliegue | Cloud nativo | Desktop + Server |
| Integración AWS | Nativa | Conectores |
| Precio | Pay-per-session | Por usuario |
| ML integrado | Sí (Enterprise) | Limitado |
| Serverless | Sí | No |

**Cuándo elegir QuickSight:**
- Ecosistema principalmente AWS
- Muchos readers ocasionales
- Quieres serverless sin gestión
- Presupuesto limitado de BI

**Cuándo elegir alternativas:**
- Necesitas visualizaciones muy avanzadas
- Ecosistema multi-cloud
- Usuarios ya familiarizados con otra herramienta

**Integración con servicios AWS:**
- **Athena**: SQL sobre S3 → QuickSight
- **Redshift**: Data warehouse → QuickSight
- **SageMaker**: Modelos ML → QuickSight
- **IoT Analytics**: Datos IoT → QuickSight`,
      },
    ],
  },
  keyTakeaways: [
    "QuickSight es BI serverless con modelo pay-per-session económico",
    "SPICE es el motor en memoria para consultas ultra-rápidas",
    "Conecta con RDS, Redshift, S3, Athena y fuentes externas",
    "ML Insights incluye detección de anomalías y forecasting automático",
    "Readers pagan máximo $5/mes vs $50-100 en BI tradicional",
  ],
  relatedQuestions: ["q68"],
  tags: ["QuickSight", "BI", "analytics", "dashboards", "visualización"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
