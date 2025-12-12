import { Article } from "@/types";

export const dynamodbIntroduccion: Article = {
  id: "d1-art-07",
  slug: "dynamodb-introduccion",
  title: "Amazon DynamoDB: Introducción",
  shortDescription:
    "Conoce DynamoDB, la base de datos NoSQL serverless de AWS con rendimiento de milisegundos.",
  certificationId: "aws-clf-c02",
  domainId: "cloud-concepts",
  content: [
    {
      title: "¿Qué es Amazon DynamoDB?",
      content: `**Amazon DynamoDB** es una base de datos NoSQL completamente administrada que proporciona rendimiento rápido y predecible con escalabilidad perfecta.

### Características principales:
- **Serverless:** No hay servidores que administrar
- **Escalable:** Maneja desde miles hasta millones de requests por segundo
- **Rápida:** Latencia de milisegundos de un solo dígito
- **Durable:** Replicación automática en múltiples AZs
- **Flexible:** Schema-less, almacena documentos JSON`,
    },
    {
      title: "¿Por qué NoSQL?",
      content: `### Bases de datos relacionales (SQL) vs NoSQL

| Característica | SQL (RDS) | NoSQL (DynamoDB) |
|----------------|-----------|------------------|
| **Schema** | Fijo, definido previamente | Flexible, por item |
| **Escalabilidad** | Vertical (limitada) | Horizontal (ilimitada) |
| **Transacciones** | ACID completo | ACID limitado |
| **Consultas** | Joins complejos | Key-value, índices |
| **Caso de uso** | Datos relacionales | Alto volumen, baja latencia |

### Cuándo usar DynamoDB:
- ✅ Aplicaciones web y móviles de alta escala
- ✅ Gaming (leaderboards, sesiones)
- ✅ IoT (millones de dispositivos)
- ✅ Catálogos de productos
- ✅ Sesiones de usuario

### Cuándo NO usar DynamoDB:
- ❌ Consultas complejas con múltiples joins
- ❌ Reporting y analytics (usa Redshift)
- ❌ Datos altamente relacionales`,
    },
    {
      title: "Conceptos Fundamentales",
      content: `### Tabla
Colección de items, similar a una tabla SQL pero sin schema fijo.

### Item
Un registro individual, similar a una fila. Cada item puede tener diferentes atributos.

### Atributos
Campos de datos, similares a columnas pero flexibles por item.

### Primary Key
Identificador único de cada item. Dos tipos:

**1. Partition Key (Simple):**
- Un solo atributo como key
- DynamoDB usa hash para distribuir datos
- Ejemplo: \`userId\`

**2. Partition Key + Sort Key (Compuesta):**
- Dos atributos combinados
- Partition key agrupa, sort key ordena
- Ejemplo: \`userId\` + \`orderDate\`

### Ejemplo de tabla "Orders":

| userId (PK) | orderDate (SK) | total | items |
|-------------|----------------|-------|-------|
| user-123 | 2024-01-15 | 99.99 | [...] |
| user-123 | 2024-01-20 | 149.99 | [...] |
| user-456 | 2024-01-18 | 29.99 | [...] |`,
    },
    {
      title: "Modos de Capacidad",
      content: `DynamoDB ofrece dos modos de facturación:

### 1. On-Demand (Bajo Demanda)
- **Pago por request:** Pagas solo por lecturas/escrituras realizadas
- **Escalado automático:** Sin límites que configurar
- **Ideal para:** Tráfico impredecible, nuevas aplicaciones

**Precios (aproximados):**
- Escrituras: ~$1.25 por millón de escrituras
- Lecturas: ~$0.25 por millón de lecturas

### 2. Provisioned (Provisionado)
- **Capacidad definida:** Configuras RCUs y WCUs
- **Auto Scaling opcional:** Ajusta automáticamente
- **Más económico:** Para tráfico predecible

**Unidades de capacidad:**
- **RCU (Read Capacity Unit):** 1 lectura consistente de hasta 4 KB/segundo
- **WCU (Write Capacity Unit):** 1 escritura de hasta 1 KB/segundo

**Ejemplo de cálculo:**
- Si tu item es de 8 KB → necesitas 2 RCUs por lectura
- Si escribes 3 KB → necesitas 3 WCUs por escritura

### ¿Cuál elegir?

| Escenario | Modo recomendado |
|-----------|------------------|
| Tráfico impredecible | On-Demand |
| Picos repentinos | On-Demand |
| Tráfico estable conocido | Provisioned |
| Optimización de costos | Provisioned + Auto Scaling |`,
    },
    {
      title: "Índices Secundarios",
      content: `Los índices permiten consultar por atributos diferentes a la primary key.

### Global Secondary Index (GSI)
- Partition key y sort key diferentes a la tabla base
- Se puede crear en cualquier momento
- Tiene su propia capacidad provisionada
- Consistencia eventual solamente

**Ejemplo:** Si tu tabla tiene \`userId\` como PK, pero necesitas buscar por \`email\`:
→ Creas un GSI con \`email\` como partition key

### Local Secondary Index (LSI)
- Misma partition key que la tabla, diferente sort key
- Debe crearse al crear la tabla
- Comparte capacidad con la tabla base
- Soporta consistencia fuerte

**Ejemplo:** Tabla de Orders con PK \`customerId\`:
- Sort key original: \`orderDate\`
- LSI sort key: \`orderTotal\`
→ Puedes consultar "los pedidos más caros de cada cliente"

### Límites:
- Máximo 20 GSIs por tabla
- Máximo 5 LSIs por tabla`,
    },
    {
      title: "Características Avanzadas",
      content: `### DynamoDB Streams
Captura cambios en la tabla en tiempo real (insert, update, delete).

**Usos:**
- Trigger Lambda en cada cambio
- Replicación a otras regiones
- Analytics en tiempo real

### DynamoDB Accelerator (DAX)
Caché in-memory compatible con DynamoDB.

**Beneficios:**
- Latencia de microsegundos (vs milisegundos)
- Sin cambios en el código de aplicación
- Reduce carga en la tabla

### Global Tables
Replicación multi-región activa-activa.

**Beneficios:**
- Lecturas/escrituras en cualquier región
- Replicación automática
- Disaster recovery integrado

### Point-in-Time Recovery (PITR)
Restaura la tabla a cualquier punto en los últimos 35 días.

### Backup On-Demand
Backups manuales que se guardan hasta que los elimines.`,
    },
    {
      title: "Operaciones Básicas",
      content: `### Operaciones de Item:
| Operación | Descripción |
|-----------|-------------|
| \`PutItem\` | Crear o reemplazar un item |
| \`GetItem\` | Obtener un item por primary key |
| \`UpdateItem\` | Modificar atributos de un item |
| \`DeleteItem\` | Eliminar un item |

### Operaciones de Consulta:
| Operación | Descripción |
|-----------|-------------|
| \`Query\` | Buscar items con misma partition key |
| \`Scan\` | Leer TODA la tabla (costoso, evitar) |

### Consistencia de lecturas:

**Eventually Consistent (default):**
- Los datos pueden tardar milisegundos en replicarse
- 2x más barato
- Bueno para la mayoría de casos

**Strongly Consistent:**
- Siempre lee el dato más reciente
- Requiere especificar en la solicitud
- Usa más capacidad

### Transacciones:
DynamoDB soporta transacciones ACID para operaciones que requieren "todo o nada":
\`\`\`
TransactWriteItems: Múltiples Put/Update/Delete atómicos
TransactGetItems: Múltiples Gets atómicos
\`\`\``,
    },
    {
      title: "DynamoDB en el Examen",
      content: `### Puntos clave para el CLF-C02:

1. **Es NoSQL, no relacional**
   - No soporta SQL ni joins
   - Schema flexible

2. **Es serverless**
   - No hay instancias que gestionar
   - Escala automáticamente

3. **Latencia de un solo dígito de milisegundos**
   - Ideal para aplicaciones de alta velocidad

4. **Modos de capacidad**
   - On-Demand: Pago por uso
   - Provisioned: Capacidad definida

5. **Global Tables para multi-región**
   - Replicación activa-activa

6. **DAX para caché**
   - Microsegundos de latencia

### Preguntas típicas:
*"¿Qué servicio proporciona base de datos NoSQL serverless con latencia de milisegundos?"*
→ Amazon DynamoDB

*"¿Cómo reducir latencia de DynamoDB a microsegundos?"*
→ Amazon DynamoDB Accelerator (DAX)`,
    },
  ],
  keyPoints: [
    "DynamoDB: Base de datos NoSQL serverless de AWS",
    "Latencia de milisegundos de un solo dígito",
    "Dos modos: On-Demand (pago por uso) y Provisioned (capacidad definida)",
    "Primary Key: Partition Key o Partition Key + Sort Key",
    "GSI y LSI permiten consultas por otros atributos",
    "DAX: Caché in-memory para latencia de microsegundos",
    "Global Tables: Replicación multi-región activa-activa",
  ],
  tags: [
    "DynamoDB",
    "NoSQL",
    "base de datos",
    "serverless",
    "DAX",
    "Global Tables",
    "partition key",
    "GSI",
  ],
  relatedServices: ["dynamodb"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
