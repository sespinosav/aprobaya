import { Article } from "@/types";

export const preciosS3: Article = {
  id: "d4-art-08",
  slug: "precios-s3",
  title: "Precios de Amazon S3: Clases y Optimización",
  shortDescription:
    "Comprende las clases de almacenamiento de S3 y cómo reducir costos.",
  domainId: "domain4",
  content: {
    introduction:
      "Amazon S3 ofrece múltiples clases de almacenamiento optimizadas para diferentes patrones de acceso. Elegir la clase correcta puede significar ahorros significativos sin sacrificar disponibilidad o durabilidad.",
    sections: [
      {
        title: "Clases de Almacenamiento S3",
        content: `**S3 ofrece 7 clases de almacenamiento:**

| Clase | Caso de Uso | Costo Relativo |
|-------|-------------|----------------|
| S3 Standard | Acceso frecuente | $$$$$ |
| S3 Intelligent-Tiering | Patrones variables | $$$$ (+ fee) |
| S3 Standard-IA | Acceso infrecuente | $$$ |
| S3 One Zone-IA | Datos reproducibles | $$ |
| S3 Glacier IR | Archivos con acceso ocasional | $$ |
| S3 Glacier Flexible | Archivos (min-hrs) | $ |
| S3 Glacier Deep Archive | Archivos largo plazo | ¢ |

**Durabilidad (todos):** 99.999999999% (11 nueves)

**Disponibilidad varía:**
- Standard: 99.99%
- IA: 99.9%
- One Zone-IA: 99.5%
- Glacier IR: 99.9%`,
      },
      {
        title: "S3 Standard",
        content: `Clase por defecto para **datos de acceso frecuente**:

**Características:**
- Acceso inmediato (milisegundos)
- Sin cargos de recuperación
- Sin tiempo mínimo de almacenamiento
- Replicación en múltiples AZs

**Precios (us-east-1):**
\`\`\`
Almacenamiento:
- Primeros 50 TB: $0.023/GB-mes
- Siguientes 450 TB: $0.022/GB-mes
- Más de 500 TB: $0.021/GB-mes

Requests:
- PUT/COPY/POST: $0.005/1,000
- GET/SELECT: $0.0004/1,000
\`\`\`

**Ideal para:**
- Contenido web activo
- Aplicaciones móviles
- Big data analytics
- Distribución de contenido`,
      },
      {
        title: "S3 Intelligent-Tiering",
        content: `**Optimización automática** basada en patrones de acceso:

**Funcionamiento:**
1. Monitorea patrones de acceso
2. Mueve objetos automáticamente
3. Sin impacto en rendimiento
4. Sin cargos de recuperación

**Tiers dentro de Intelligent-Tiering:**
\`\`\`
- Frequent Access (default)
  → Objetos accedidos regularmente

- Infrequent Access (auto a 30 días)
  → Sin acceso por 30+ días
  → 40% ahorro

- Archive Instant Access (auto a 90 días)
  → Sin acceso por 90+ días
  → 68% ahorro

- Archive Access (opcional, 90-730 días)
  → Configurado manualmente
  → Acceso en 3-5 horas

- Deep Archive Access (opcional, 180-730 días)
  → Configurado manualmente
  → Acceso en 12 horas
\`\`\`

**Costo adicional:**
- $0.0025/1,000 objetos monitoreados

**Ideal para:**
- Patrones de acceso impredecibles
- Data lakes
- Contenido generado por usuarios`,
        note: "No hay cargos de tiering. Solo pagas el monitoreo y el storage del tier donde está el objeto.",
      },
      {
        title: "S3 Infrequent Access (IA)",
        content: `Para datos **accedidos menos de una vez al mes**:

**S3 Standard-IA:**
\`\`\`
- Almacenamiento: $0.0125/GB-mes (~45% menos)
- Recuperación: $0.01/GB
- Mínimo 128 KB por objeto
- Mínimo 30 días de almacenamiento
- Múltiples AZs
\`\`\`

**S3 One Zone-IA:**
\`\`\`
- Almacenamiento: $0.01/GB-mes (~80% menos)
- Recuperación: $0.01/GB
- Mínimo 128 KB por objeto
- Mínimo 30 días de almacenamiento
- UNA SOLA AZ (menor resiliencia)
\`\`\`

**Cuándo usar Standard-IA:**
- Backups primarios
- Datos de DR
- Datos accedidos mensualmente

**Cuándo usar One Zone-IA:**
- Copias secundarias
- Datos reproducibles
- Datos que pueden regenerarse
- Thumbnails o transcodes

**Cálculo ejemplo:**
\`\`\`
100 GB por 1 mes:
- Standard: $2.30
- Standard-IA: $1.25 + retrieval
- One Zone-IA: $1.00 + retrieval
\`\`\``,
        note: "El cargo mínimo de 30 días significa que objetos eliminados antes generan cargo por el mes completo.",
      },
      {
        title: "S3 Glacier",
        content: `Para **archivado a largo plazo** con diferentes velocidades:

**S3 Glacier Instant Retrieval:**
\`\`\`
- Almacenamiento: $0.004/GB-mes
- Retrieval: $0.03/GB (milisegundos)
- Mínimo: 90 días, 128 KB
- Acceso: ~1 vez por trimestre
\`\`\`

**S3 Glacier Flexible Retrieval:**
\`\`\`
- Almacenamiento: $0.0036/GB-mes
- Retrieval Expedited: 1-5 min ($0.03/GB)
- Retrieval Standard: 3-5 hrs ($0.01/GB)
- Retrieval Bulk: 5-12 hrs ($0.0025/GB)
- Mínimo: 90 días, 40 KB
\`\`\`

**S3 Glacier Deep Archive:**
\`\`\`
- Almacenamiento: $0.00099/GB-mes
- Retrieval Standard: 12 hrs ($0.02/GB)
- Retrieval Bulk: 48 hrs ($0.0025/GB)
- Mínimo: 180 días, 40 KB
\`\`\`

**Comparación de costos 1 TB/mes:**
\`\`\`
Standard:       $23.00
Glacier IR:      $4.00
Glacier Flex:    $3.60
Deep Archive:    $0.99
\`\`\``,
        note: "Deep Archive es el almacenamiento más económico de AWS. Ideal para cumplimiento regulatorio a largo plazo.",
      },
      {
        title: "Lifecycle Policies",
        content: `**Automatiza transiciones** entre clases:

**Ejemplo de política:**
\`\`\`json
{
  "Rules": [
    {
      "ID": "ArchiveOldLogs",
      "Status": "Enabled",
      "Filter": {"Prefix": "logs/"},
      "Transitions": [
        {
          "Days": 30,
          "StorageClass": "STANDARD_IA"
        },
        {
          "Days": 90,
          "StorageClass": "GLACIER"
        },
        {
          "Days": 365,
          "StorageClass": "DEEP_ARCHIVE"
        }
      ],
      "Expiration": {
        "Days": 2555
      }
    }
  ]
}
\`\`\`

**Flujo típico:**
\`\`\`
Día 0-29: Standard ($0.023/GB)
    ↓ Transición automática
Día 30-89: Standard-IA ($0.0125/GB)
    ↓ Transición automática
Día 90-364: Glacier Flexible ($0.0036/GB)
    ↓ Transición automática
Día 365+: Deep Archive ($0.00099/GB)
    ↓ Expiración
Día 2555: Eliminación automática
\`\`\`

**Consideraciones:**
- Transiciones tienen costo ($0.01/1,000 objetos)
- No puedes ir hacia arriba (Deep → Standard)
- Objetos pequeños pueden costar más en IA
- Evalúa el break-even point`,
      },
      {
        title: "Costos Adicionales de S3",
        content: `**Más allá del almacenamiento:**

**Data Transfer:**
\`\`\`
- IN: Gratis
- OUT a Internet: $0.09/GB (primeros 10 TB)
- OUT a otra región: $0.02/GB
- OUT a CloudFront: Gratis
- Misma región: Gratis
\`\`\`

**Requests:**
\`\`\`
Standard:
- PUT/POST/COPY: $0.005/1,000
- GET: $0.0004/1,000
- DELETE: Gratis

Glacier:
- Requests más caros
- + Retrieval fees
\`\`\`

**Replication:**
- Cross-Region Replication (CRR)
- Same-Region Replication (SRR)
- Pagas almacenamiento en destino + transfer

**S3 Select/Glacier Select:**
- Consultas SQL sobre objetos
- Pagas por datos escaneados y retornados
- Puede reducir transfer costs

**Optimización:**
- Usar CloudFront para reducir transfer
- Comprimir datos antes de subir
- Batch requests cuando sea posible
- Eliminar versiones antiguas`,
      },
    ],
  },
  keyTakeaways: [
    "7 clases de almacenamiento: de Standard (acceso frecuente) a Deep Archive (archivado)",
    "Glacier Deep Archive es el más económico: ~$1/TB-mes",
    "Lifecycle policies automatizan transiciones y ahorran dinero",
    "Intelligent-Tiering optimiza automáticamente según patrones de acceso",
    "Considerar costos de retrieval y tiempos mínimos al elegir clase",
  ],
  relatedQuestions: ["q90", "q95"],
  tags: ["S3", "storage", "Glacier", "precios", "lifecycle", "archivado"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
