import { Article } from "@/types";

export const s3ClasesAlmacenamiento: Article = {
  id: "d3-art-03",
  slug: "s3-clases-almacenamiento",
  title: "Clases de Almacenamiento de S3",
  shortDescription:
    "Conoce las diferentes clases de almacenamiento de S3 y cuándo usar cada una para optimizar costos.",
  domainId: "domain3",
  content: {
    introduction:
      "Amazon S3 ofrece múltiples clases de almacenamiento diseñadas para diferentes casos de uso. Elegir la clase correcta puede reducir significativamente los costos manteniendo el rendimiento necesario.",
    sections: [
      {
        title: "S3 Standard",
        content: `La clase de almacenamiento por defecto, diseñada para datos de acceso frecuente.

**Características:**
- **Disponibilidad**: 99.99%
- **Durabilidad**: 99.999999999% (11 nueves)
- **AZs**: Mínimo 3
- **Latencia**: Milisegundos

**Casos de uso:**
- Aplicaciones en producción
- Contenido dinámico
- Datos de acceso frecuente
- Big data y analytics

**Costos:**
- Precio de almacenamiento más alto
- Sin cargo por recuperación
- Sin duración mínima de almacenamiento`,
      },
      {
        title: "S3 Intelligent-Tiering",
        content: `Clase que **mueve automáticamente** datos entre niveles según patrones de acceso.

**Niveles automáticos:**
- Frequent Access (acceso frecuente)
- Infrequent Access (sin acceso por 30 días)
- Archive Instant Access (sin acceso por 90 días)
- Archive Access (opcional, 90-180 días)
- Deep Archive Access (opcional, 180+ días)

**Características:**
- Sin cargos por recuperación
- Sin impacto en rendimiento
- Pequeño cargo mensual de monitoreo por objeto

**Ideal para:**
- Patrones de acceso impredecibles
- Datos con cambios en frecuencia de acceso
- Cuando no quieres administrar lifecycle policies`,
        note: "S3 Intelligent-Tiering es la única clase que optimiza costos automáticamente sin penalización de rendimiento.",
      },
      {
        title: "S3 Standard-IA y One Zone-IA",
        content: `**S3 Standard-IA (Infrequent Access):**
- Para datos accedidos con menos frecuencia
- Mismo rendimiento que Standard
- Disponibilidad: 99.9%
- Replicado en 3+ AZs
- Costo menor de almacenamiento + cargo por recuperación
- Mínimo 30 días de almacenamiento
- Mínimo 128 KB por objeto

**S3 One Zone-IA:**
- Similar a Standard-IA pero en **UNA sola AZ**
- 20% más barato que Standard-IA
- Disponibilidad: 99.5%
- Durabilidad: 99.999999999% (en una AZ)

**Casos de uso One Zone-IA:**
- Datos que pueden recrearse fácilmente
- Réplicas secundarias de backups
- Datos no críticos

**No usar One Zone-IA para:**
- Datos únicos e irremplazables
- Datos de producción críticos`,
      },
      {
        title: "S3 Glacier: Almacenamiento de Archivo",
        content: `Clases diseñadas para **archivado de largo plazo** con costos muy bajos.

**S3 Glacier Instant Retrieval:**
- Acceso en milisegundos
- Para datos archivados que necesitan acceso inmediato ocasional
- Una vez por trimestre como mínimo de acceso
- Mínimo 90 días de almacenamiento

**S3 Glacier Flexible Retrieval (antes Glacier):**
- Tiempos de recuperación:
  - Expedited: 1-5 minutos
  - Standard: 3-5 horas
  - Bulk: 5-12 horas
- Mínimo 90 días de almacenamiento

**S3 Glacier Deep Archive:**
- **Costo más bajo** de todas las clases
- Tiempos de recuperación:
  - Standard: 12 horas
  - Bulk: 48 horas
- Mínimo 180 días de almacenamiento
- Ideal para cumplimiento regulatorio a largo plazo`,
      },
      {
        title: "Lifecycle Policies",
        content: `Las **políticas de ciclo de vida** automatizan el movimiento de datos entre clases.

**Acciones disponibles:**
- **Transition**: Mover a otra clase de almacenamiento
- **Expiration**: Eliminar objetos después de cierto tiempo

**Ejemplo de política:**
\`\`\`
Día 0-30: S3 Standard
Día 31-90: S3 Standard-IA
Día 91-365: S3 Glacier Flexible Retrieval
Después de 365 días: S3 Glacier Deep Archive
Después de 7 años: Eliminar
\`\`\`

**Consideraciones:**
- Las transiciones deben seguir un flujo lógico
- No se puede volver a clases "más calientes" automáticamente
- Evaluar cargos mínimos de almacenamiento

**Beneficios:**
- Optimización automática de costos
- Cumplimiento de políticas de retención
- Reducción de gestión manual`,
      },
      {
        title: "Comparativa de Clases",
        content: `| Clase | Disponibilidad | AZs | Latencia | Uso |
|-------|---------------|-----|----------|-----|
| Standard | 99.99% | ≥3 | ms | Acceso frecuente |
| Intelligent-Tiering | 99.9% | ≥3 | ms | Patrones variables |
| Standard-IA | 99.9% | ≥3 | ms | Acceso infrecuente |
| One Zone-IA | 99.5% | 1 | ms | No crítico, infrecuente |
| Glacier Instant | 99.9% | ≥3 | ms | Archivo, acceso inmediato |
| Glacier Flexible | 99.99% | ≥3 | min-hrs | Archivo, acceso flexible |
| Glacier Deep Archive | 99.99% | ≥3 | horas | Archivo largo plazo |

**Regla general de costos:**
Standard > Standard-IA > One Zone-IA > Glacier Instant > Glacier Flexible > Deep Archive`,
      },
    ],
  },
  keyTakeaways: [
    "S3 Standard es para acceso frecuente, más caro pero sin cargos de recuperación",
    "S3 Intelligent-Tiering mueve datos automáticamente según uso",
    "Standard-IA y One Zone-IA son para acceso infrecuente (One Zone más barato, menos resiliente)",
    "Glacier (Instant, Flexible, Deep Archive) es para archivado con diferentes tiempos de recuperación",
    "Lifecycle Policies automatizan la transición entre clases para optimizar costos",
  ],
  relatedQuestions: ["q47", "q48", "q49", "q51"],
  tags: ["S3", "clases de almacenamiento", "Glacier", "costos", "lifecycle"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
