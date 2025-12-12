import { Article } from "@/types";

export const awsDmsMigracion: Article = {
  id: "d3-art-11",
  slug: "aws-dms-migracion",
  title: "AWS Database Migration Service (DMS)",
  shortDescription:
    "Migra bases de datos a AWS de forma segura con mínimo tiempo de inactividad usando DMS.",
  domainId: "domain3",
  content: {
    introduction:
      "AWS Database Migration Service (DMS) facilita la migración de bases de datos hacia AWS de forma rápida y segura. La base de datos de origen permanece operativa durante la migración, minimizando el tiempo de inactividad.",
    sections: [
      {
        title: "¿Qué es AWS DMS?",
        content: `DMS es un servicio que ayuda a **migrar bases de datos** hacia, desde o entre bases de datos en AWS.

**Características principales:**
- Base de datos origen permanece operativa durante migración
- Soporta migraciones homogéneas y heterogéneas
- Replicación continua opcional
- Validación de datos automática

**Tipos de migración:**

**Homogénea:**
- Mismo motor de BD origen y destino
- Ejemplo: Oracle on-premises → Amazon RDS Oracle
- Más simple, sin conversión de esquema

**Heterogénea:**
- Diferente motor de BD
- Ejemplo: SQL Server → Amazon Aurora PostgreSQL
- Requiere AWS Schema Conversion Tool (SCT)

**Casos de uso:**
- Migración de on-premises a la nube
- Consolidación de bases de datos
- Replicación continua para DR
- Modernización de plataforma`,
      },
      {
        title: "Cómo Funciona DMS",
        content: `**Componentes:**

**Instancia de replicación:**
- EC2 que ejecuta las tareas de migración
- Debe tener acceso a origen y destino
- Tamaño según volumen de datos

**Endpoints:**
- **Source endpoint**: Conexión a BD origen
- **Target endpoint**: Conexión a BD destino
- Configuración de credenciales y red

**Tareas de migración:**
- Define qué tablas/esquemas migrar
- Configuración de mapeo
- Reglas de transformación

**Flujo de migración:**
\`\`\`
┌─────────────┐     ┌──────────────────┐     ┌─────────────┐
│   Source    │────→│   Replication    │────→│   Target    │
│   Database  │     │    Instance      │     │   Database  │
└─────────────┘     └──────────────────┘     └─────────────┘
   On-premises           AWS DMS             Amazon RDS
\`\`\``,
      },
      {
        title: "Tipos de Migración",
        content: `**Full Load:**
- Migra todos los datos existentes
- Snapshot en un punto en el tiempo
- Adecuado para bases de datos pequeñas
- Requiere ventana de mantenimiento

**Full Load + CDC:**
- Full Load inicial
- Change Data Capture (CDC) para cambios posteriores
- Sincroniza cambios hasta el cutover
- Minimiza downtime

**CDC Only:**
- Solo replica cambios
- Asume que datos ya están en destino
- Para sincronización continua

**Replicación continua:**
- Mantiene origen y destino sincronizados
- Útil para:
  - Disaster Recovery
  - Migración con cutover planificado
  - Distribución geográfica`,
        note: "CDC requiere que la base de datos origen tenga habilitados los logs de transacciones.",
      },
      {
        title: "AWS Schema Conversion Tool (SCT)",
        content: `**¿Qué es SCT?**
- Herramienta para migraciones heterogéneas
- Convierte esquema de BD a otro motor
- Identifica código que necesita conversión manual

**Cuándo usar SCT:**
- Oracle → PostgreSQL/Aurora
- SQL Server → MySQL/Aurora
- Cualquier cambio de motor de BD

**Funcionalidades:**
- Conversión de esquema (tablas, vistas, procedimientos)
- Reporte de evaluación de migración
- Identifica código incompatible
- Sugiere alternativas

**Flujo con SCT:**
1. Analizar BD origen con SCT
2. Revisar reporte de evaluación
3. Convertir esquema automáticamente
4. Ajustar código no convertido manualmente
5. Aplicar esquema en destino
6. Usar DMS para migrar datos

**SCT no es necesario para:**
- Migraciones homogéneas (mismo motor)
- Solo migración de datos sin esquema`,
      },
      {
        title: "Orígenes y Destinos Soportados",
        content: `**Orígenes soportados:**
- **On-premises**: Oracle, SQL Server, MySQL, PostgreSQL, MongoDB, SAP ASE
- **AWS**: RDS, Aurora, S3, Redshift
- **Otros cloud**: Azure SQL, Google Cloud SQL

**Destinos soportados:**
- Amazon RDS (todos los motores)
- Amazon Aurora
- Amazon Redshift
- Amazon S3
- Amazon DynamoDB
- Amazon OpenSearch
- Amazon Neptune
- Amazon Kinesis Data Streams

**Migraciones populares:**
| Origen | Destino | Tipo |
|--------|---------|------|
| Oracle on-prem | RDS Oracle | Homogénea |
| Oracle on-prem | Aurora PostgreSQL | Heterogénea |
| SQL Server | RDS SQL Server | Homogénea |
| MySQL | Aurora MySQL | Homogénea |
| MongoDB | DynamoDB | Heterogénea |
| Cualquier RDBMS | S3 | Data lake |`,
      },
      {
        title: "Mejores Prácticas y Precios",
        content: `**Mejores prácticas:**
- Realizar pruebas de migración antes de producción
- Validar datos después de la migración
- Usar instancias de replicación adecuadas al volumen
- Configurar monitoreo con CloudWatch
- Planificar ventana de cutover

**Consideraciones de red:**
- VPN o Direct Connect para on-premises
- Endpoints en VPC para seguridad
- Considerar latencia de red

**Monitoreo:**
- CloudWatch metrics para tareas DMS
- Logs de tareas para troubleshooting
- Alertas para errores

**Modelo de precios:**
- Pago por hora de instancia de replicación
- Cargos por almacenamiento de logs
- Transferencia de datos hacia AWS (ingress) es gratis
- Transferencia entre regiones tiene costo

**Ejemplo de costos:**
- Instancia dms.t3.medium: ~$0.07/hora
- Migración de 100 GB podría tomar unas horas
- Costo total: $1-10 para migración simple

**Free Tier:**
- 750 horas de dms.t2.micro por mes
- Durante 6 meses
- Suficiente para pruebas`,
      },
    ],
  },
  keyTakeaways: [
    "DMS migra bases de datos con mínimo downtime usando replicación",
    "Soporta migraciones homogéneas (mismo motor) y heterogéneas (diferente motor)",
    "AWS SCT convierte esquemas para migraciones heterogéneas",
    "CDC permite sincronización continua hasta el cutover",
    "El origen permanece operativo durante toda la migración",
  ],
  relatedQuestions: ["q69"],
  tags: ["DMS", "migración", "bases de datos", "SCT", "CDC"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
