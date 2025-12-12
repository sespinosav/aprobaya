import { Article } from "@/types";

export const amazonRdsFundamentos: Article = {
  id: "d3-art-08",
  slug: "amazon-rds-fundamentos",
  title: "Amazon RDS: Bases de Datos Relacionales Administradas",
  shortDescription:
    "Aprende sobre RDS, los motores soportados, Multi-AZ, Read Replicas y cuándo usarlo.",
  domainId: "domain3",
  content: {
    introduction:
      "Amazon Relational Database Service (RDS) facilita la configuración, operación y escalado de bases de datos relacionales en la nube. AWS administra las tareas como el aprovisionamiento, parches, backups y recuperación.",
    sections: [
      {
        title: "¿Qué es Amazon RDS?",
        content: `RDS es un servicio de **base de datos relacional administrada** que reduce la carga operativa de administrar bases de datos.

**AWS administra:**
- Aprovisionamiento de hardware
- Instalación y parches del software de BD
- Backups automáticos
- Alta disponibilidad (Multi-AZ)
- Escalado de almacenamiento

**Tú administras:**
- Diseño del esquema de datos
- Optimización de queries
- Configuración de parámetros de BD
- Gestión de usuarios y permisos

**Ventajas sobre EC2 con BD instalada:**
- Menor carga operativa
- Backups automatizados
- Multi-AZ simplificado
- Parches automáticos
- Monitoreo integrado`,
      },
      {
        title: "Motores de Base de Datos Soportados",
        content: `**Motores comerciales:**
- **Oracle**: Enterprise, Standard
- **Microsoft SQL Server**: Express, Web, Standard, Enterprise

**Motores open source:**
- **MySQL**: 5.7, 8.0
- **PostgreSQL**: Múltiples versiones
- **MariaDB**: Fork de MySQL

**Amazon Aurora:**
- Motor propietario de AWS
- Compatible con MySQL y PostgreSQL
- 5x rendimiento de MySQL, 3x de PostgreSQL
- Almacenamiento auto-escalable hasta 128 TB
- Más costoso pero más potente

**Cómo elegir:**
- **Aurora**: Máximo rendimiento, dispuesto a pagar más
- **MySQL/PostgreSQL**: Open source, flexibilidad
- **Oracle/SQL Server**: Aplicaciones legacy o requisitos específicos`,
      },
      {
        title: "Alta Disponibilidad: Multi-AZ",
        content: `**Multi-AZ Deployment:**
- Réplica síncrona en otra AZ
- Failover automático en caso de falla
- Mismo endpoint DNS (sin cambios en aplicación)

**Cómo funciona:**
\`\`\`
         AZ-a              AZ-b
    ┌──────────┐      ┌──────────┐
    │  Primary │─────→│ Standby  │
    │    DB    │ sync │    DB    │
    └──────────┘      └──────────┘
         ▲
         │
    Aplicación
\`\`\`

**Failover automático cuando:**
- Falla de la instancia primaria
- Falla de la AZ
- Mantenimiento de la instancia
- Cambio de tipo de instancia

**Tiempo de failover:**
- Típicamente 60-120 segundos
- Automático, sin intervención manual

**Importante:**
- Multi-AZ es para **disponibilidad**, NO para rendimiento
- El standby NO recibe tráfico de lectura
- Aumenta el costo (pagas por 2 instancias)`,
        note: "Multi-AZ NO es para escalar lecturas. Para eso usa Read Replicas.",
      },
      {
        title: "Read Replicas",
        content: `**¿Qué son?**
- Copias de solo lectura de tu base de datos
- Replicación asíncrona desde la primaria
- Pueden estar en otra AZ o región

**Casos de uso:**
- **Escalar lecturas**: Distribuir queries SELECT
- **Analytics**: Reportes sin afectar producción
- **DR multi-región**: Réplica en otra región

**Características:**
- Hasta 5 Read Replicas por instancia
- Pueden promoverse a BD independiente
- Endpoint separado de la primaria
- Replicación asíncrona (lag posible)

**Diagrama:**
\`\`\`
                Primary DB
               ┌──────────┐
               │  Writes  │
               │  Reads   │
               └────┬─────┘
         ┌─────────┼─────────┐
         ▼         ▼         ▼
    ┌────────┐ ┌────────┐ ┌────────┐
    │Replica1│ │Replica2│ │Replica3│
    │ (AZ-b) │ │ (AZ-c) │ │(Region)│
    └────────┘ └────────┘ └────────┘
      Reads      Reads      DR/Reads
\`\`\`

**Multi-AZ vs Read Replicas:**
| Característica | Multi-AZ | Read Replicas |
|----------------|----------|---------------|
| Propósito | Disponibilidad | Rendimiento |
| Replicación | Síncrona | Asíncrona |
| Tráfico | Solo failover | Lecturas activas |
| Regiones | Misma región | Multi-región posible |`,
      },
      {
        title: "Backups y Recuperación",
        content: `**Backups Automáticos:**
- Activados por defecto
- Retención: 1-35 días (7 por defecto)
- Backup diario + transaction logs
- Point-in-time recovery (PITR)
- Se almacenan en S3 (gestionado por AWS)

**Snapshots Manuales:**
- Iniciados por el usuario
- Sin expiración automática
- Útiles para puntos de restauración específicos
- Pueden compartirse entre cuentas

**Restauración:**
- Siempre crea una NUEVA instancia de BD
- No se puede restaurar sobre la instancia existente
- Restaurar a cualquier punto en el período de retención

**Mejores prácticas:**
- Mantener retención de backups según requisitos de negocio
- Crear snapshots antes de cambios importantes
- Probar restauración periódicamente`,
      },
      {
        title: "RDS vs Alternativas",
        content: `**RDS vs EC2 + DB instalada:**
| Aspecto | RDS | EC2 + DB |
|---------|-----|----------|
| Administración | AWS | Tú |
| Parches | Automático | Manual |
| Backups | Automatizados | Manuales |
| Multi-AZ | Un click | Complejo |
| Flexibilidad | Limitada | Total |
| Costo | Mayor | Potencialmente menor |

**RDS vs DynamoDB:**
| Aspecto | RDS | DynamoDB |
|---------|-----|----------|
| Tipo | Relacional | NoSQL |
| Esquema | Fijo | Flexible |
| Escalado | Vertical | Horizontal |
| Queries | SQL | API/PartiQL |
| Mejor para | Transacciones | Alta escala |

**RDS vs Aurora:**
| Aspecto | RDS MySQL | Aurora |
|---------|-----------|--------|
| Rendimiento | Baseline | 5x MySQL |
| Almacenamiento | Manual | Auto-escala |
| Réplicas | 5 | 15 |
| Costo | Menor | ~20% más |`,
      },
    ],
  },
  keyTakeaways: [
    "RDS es base de datos relacional administrada - AWS gestiona infraestructura",
    "Soporta MySQL, PostgreSQL, MariaDB, Oracle, SQL Server y Aurora",
    "Multi-AZ provee alta disponibilidad con failover automático",
    "Read Replicas escalan lecturas y pueden ser multi-región",
    "Backups automáticos permiten point-in-time recovery hasta 35 días",
  ],
  relatedQuestions: ["q61", "q62", "q63"],
  tags: ["RDS", "bases de datos", "Multi-AZ", "Read Replicas", "Aurora"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
