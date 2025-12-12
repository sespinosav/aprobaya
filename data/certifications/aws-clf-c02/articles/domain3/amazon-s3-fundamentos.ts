import { Article } from "@/types";

export const amazonS3Fundamentos: Article = {
  id: "d3-art-02",
  slug: "amazon-s3-fundamentos",
  title: "Amazon S3: Fundamentos del Almacenamiento de Objetos",
  shortDescription:
    "Aprende los conceptos básicos de S3, buckets, objetos, control de acceso y casos de uso principales.",
  domainId: "domain3",
  content: {
    introduction:
      "Amazon Simple Storage Service (S3) es el servicio de almacenamiento de objetos más utilizado en la nube. Ofrece escalabilidad, disponibilidad de datos, seguridad y rendimiento líderes en la industria para cualquier cantidad de datos.",
    sections: [
      {
        title: "Conceptos Básicos de S3",
        content: `**¿Qué es almacenamiento de objetos?**
A diferencia del almacenamiento de bloques (EBS) o archivos (EFS), S3 almacena datos como objetos dentro de buckets.

**Bucket:**
- Contenedor para objetos
- Nombre **globalmente único** en todo AWS
- Se crea en una región específica
- URL: https://bucket-name.s3.region.amazonaws.com

**Objeto:**
- Unidad fundamental de almacenamiento
- Consiste en: datos + metadatos + clave única
- Tamaño máximo: **5 TB** por objeto
- Key (clave): ruta completa del objeto (prefix + nombre)

**Ejemplo de estructura:**
\`\`\`
mi-bucket/
  ├── imagenes/
  │   ├── foto1.jpg
  │   └── foto2.png
  └── documentos/
      └── reporte.pdf
\`\`\``,
      },
      {
        title: "Características Principales",
        content: `**Durabilidad:**
- 99.999999999% (11 nueves) de durabilidad
- Datos replicados automáticamente en mínimo 3 AZs
- Diseñado para soportar pérdida de 2 instalaciones simultáneas

**Disponibilidad:**
- Varía según la clase de almacenamiento
- S3 Standard: 99.99% de disponibilidad

**Escalabilidad:**
- Sin límite de almacenamiento total
- Sin aprovisionamiento previo necesario
- Escala automáticamente

**Características adicionales:**
- Versionado de objetos
- Cifrado (en tránsito y en reposo)
- Replicación entre regiones
- Lifecycle policies`,
      },
      {
        title: "Control de Acceso en S3",
        content: `**Bucket Policies:**
- Políticas JSON a nivel de bucket
- Permiten/deniegan acceso a recursos
- Pueden otorgar acceso público o a otras cuentas AWS

**ACLs (Access Control Lists):**
- Control más granular (legacy)
- A nivel de bucket u objeto
- Menos recomendado que bucket policies

**Block Public Access:**
- Configuración a nivel de cuenta o bucket
- **Activado por defecto** para nuevos buckets
- Previene acceso público accidental

**IAM Policies:**
- Controlan qué usuarios/roles pueden acceder
- Se combinan con bucket policies

**Mejores prácticas:**
- Mantener Block Public Access activado
- Usar principio de privilegio mínimo
- Revisar regularmente permisos`,
        note: "Por defecto, los buckets son PRIVADOS. Debes explícitamente configurar acceso público si lo necesitas.",
      },
      {
        title: "Casos de Uso Principales",
        content: `**Backup y Recuperación:**
- Almacenamiento duradero para backups
- Versionado para recuperación de datos
- Cross-Region Replication para DR

**Data Lakes:**
- Almacén central para análisis
- Integración con Athena, Redshift, EMR
- Datos estructurados y no estructurados

**Hosting de Sitios Web Estáticos:**
- HTML, CSS, JavaScript, imágenes
- Combinado con CloudFront para CDN
- Bajo costo y alta disponibilidad

**Archivos y Almacenamiento de Medios:**
- Videos, imágenes, documentos
- Streaming con S3 + CloudFront
- Clases de almacenamiento para archivado

**Distribución de Software:**
- Actualizaciones, parches
- Contenido descargable`,
      },
      {
        title: "S3 y la Integración con Otros Servicios",
        content: `**Servicios que integran con S3:**
- **CloudFront**: CDN para distribución global
- **Lambda**: Procesamiento serverless de objetos
- **Athena**: Consultas SQL directas sobre S3
- **Macie**: Detección de datos sensibles
- **Glacier**: Archivado de largo plazo

**Eventos de S3:**
- Trigger Lambda cuando se sube un objeto
- Notificaciones a SNS/SQS
- EventBridge para flujos complejos

**Transfer Acceleration:**
- Acelera transferencias de larga distancia
- Usa Edge Locations de CloudFront

**Multipart Upload:**
- Obligatorio para objetos > 5 GB
- Recomendado para > 100 MB
- Uploads paralelos`,
      },
    ],
  },
  keyTakeaways: [
    "S3 almacena objetos en buckets con durabilidad de 11 nueves",
    "Los nombres de bucket son globalmente únicos",
    "Por defecto los buckets son privados - Block Public Access activado",
    "Tamaño máximo de objeto: 5 TB",
    "Integra con Lambda, CloudFront, Athena y muchos más servicios",
  ],
  relatedQuestions: ["q47", "q48", "q49", "q50", "q51"],
  tags: ["S3", "almacenamiento", "buckets", "objetos", "durabilidad"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
