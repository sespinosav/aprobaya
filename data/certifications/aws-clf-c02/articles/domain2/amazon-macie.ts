import { Article } from "@/types";

export const amazonMacie: Article = {
  id: "d2-art-14",
  slug: "amazon-macie",
  title: "Amazon Macie",
  shortDescription:
    "Descubre y protege datos sensibles almacenados en Amazon S3.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "¿Qué es Amazon Macie?",
      content: `**Amazon Macie** es un servicio de seguridad de datos que usa machine learning y pattern matching para descubrir, clasificar y proteger datos sensibles en Amazon S3.

### El problema que resuelve:

\`\`\`
❓ ¿Tenemos datos personales (PII) en nuestros buckets?
❓ ¿Hay números de tarjetas de crédito almacenados?
❓ ¿Qué buckets contienen datos sensibles?
❓ ¿Están protegidos adecuadamente?
\`\`\`

Macie responde estas preguntas automáticamente escaneando tus buckets S3.`,
    },
    {
      title: "Qué Detecta Macie",
      content: `### Tipos de Datos Sensibles:

**Información Personal Identificable (PII):**
- Nombres
- Direcciones
- Números de teléfono
- Emails
- Números de pasaporte
- Números de identificación nacional

**Información Financiera:**
- Números de tarjetas de crédito
- Números de cuentas bancarias
- Datos de tarjetas de débito

**Credenciales:**
- AWS Access Keys
- SSH Private Keys
- API Keys
- Contraseñas en texto plano

**Información de Salud:**
- Registros médicos
- Datos de seguros de salud

### Identificadores Personalizados:

Puedes crear patrones personalizados para detectar datos específicos de tu negocio:
- IDs de empleados
- Números de cliente
- Códigos internos`,
    },
    {
      title: "Cómo Funciona",
      content: `### Habilitación:

1. Habilitar Macie (un clic)
2. Macie descubre automáticamente todos tus buckets S3
3. Crea "jobs" de descubrimiento para escanear

### Jobs de Descubrimiento:

**Tipos de jobs:**
| Tipo | Descripción |
|------|-------------|
| **One-time** | Escaneo único |
| **Scheduled** | Escaneo recurrente (diario, semanal, mensual) |

**Configuración:**
- Qué buckets escanear
- Qué tipos de archivos incluir/excluir
- Muestreo (% de objetos a escanear)

### Proceso de Análisis:

\`\`\`
1. Macie accede al bucket S3
2. Lee los objetos (descomprime si es necesario)
3. Aplica ML y pattern matching
4. Clasifica los datos encontrados
5. Genera findings con ubicación exacta
\`\`\`

### Formatos Soportados:

- Texto plano (CSV, JSON, TXT)
- Documentos (PDF, DOCX, XLSX)
- Comprimidos (ZIP, GZIP, TAR)
- Logs de AWS
- Y muchos más...`,
    },
    {
      title: "Dashboard y Findings",
      content: `### Dashboard de Macie:

**Resumen de buckets:**
- Total de buckets
- Buckets públicos
- Buckets compartidos con otras cuentas
- Buckets sin cifrado
- Buckets con datos sensibles

**Estadísticas de datos sensibles:**
- Objetos con PII
- Objetos con información financiera
- Objetos con credenciales

### Findings (Hallazgos):

**Tipos de findings:**

| Categoría | Ejemplos |
|-----------|----------|
| **Sensitive Data** | "El bucket X contiene 500 objetos con números de tarjeta de crédito" |
| **Policy** | "El bucket Y es público" |

**Información en cada finding:**
- Severidad
- Bucket afectado
- Objetos afectados
- Tipo de dato sensible
- Cantidad de ocurrencias
- Ubicación exacta (línea, columna)

### Ejemplo de Finding:

\`\`\`
Finding: SensitiveData:S3Object/Personal
Bucket: company-backups
Objeto: exports/users.csv
Datos: 1,245 emails, 890 números de teléfono
Severidad: High
Acción: Revisar y cifrar/eliminar
\`\`\``,
    },
    {
      title: "Seguridad de Buckets",
      content: `### Macie también evalúa la seguridad de buckets:

**Políticas detectadas:**

| Problema | Descripción |
|----------|-------------|
| **Público** | Bucket accesible desde Internet |
| **Compartido** | Bucket accesible por otras cuentas |
| **No cifrado** | Objetos sin cifrado server-side |
| **Sin versionado** | Versionado no habilitado |
| **Sin logging** | Access logging no habilitado |

### Correlación automática:

Macie correlaciona:
- Buckets con datos sensibles + públicos = 🚨 ALERTA CRÍTICA
- Buckets con credenciales + no cifrados = 🚨 ALERTA ALTA

### Block Public Access:

Macie muestra el estado de S3 Block Public Access a nivel de cuenta y bucket.`,
    },
    {
      title: "Integración y Automatización",
      content: `### EventBridge para automatización:

\`\`\`
[Macie Finding] → [EventBridge] → [Lambda] → [Acción]
\`\`\`

**Ejemplos de automatización:**
- Notificar a Slack cuando se detecte PII
- Crear ticket cuando bucket sea público
- Aplicar cifrado automáticamente
- Mover objetos sensibles a bucket seguro

### Security Hub:

Findings de Macie se envían a Security Hub:
- Vista consolidada de seguridad
- Correlación con otros findings
- Compliance dashboards

### Multi-cuenta con Organizations:

**Administrador delegado:**
- Una cuenta gestiona Macie para toda la organización
- Vista centralizada de todos los buckets
- Políticas uniformes

### S3 para resultados:

Configura un bucket para almacenar:
- Resultados detallados de descubrimiento
- Análisis históricos
- Reportes de compliance`,
    },
    {
      title: "Macie en el Examen CLF-C02",
      content: `### Puntos clave:

1. **Descubre datos sensibles en S3:** PII, financieros, credenciales
2. **Usa ML y pattern matching:** Detección inteligente
3. **Evalúa seguridad de buckets:** Público, compartido, cifrado
4. **Findings detallados:** Ubicación exacta de datos sensibles
5. **Integración:** EventBridge, Security Hub

### Diferencias con otros servicios:

| Servicio | Propósito |
|----------|-----------|
| **Macie** | Descubre datos sensibles en S3 |
| **Inspector** | Escanea vulnerabilidades en EC2/Lambda |
| **GuardDuty** | Detecta amenazas activas |

### Preguntas típicas:

*"¿Qué servicio descubre si hay números de tarjetas de crédito en buckets S3?"*
→ Amazon Macie

*"¿Cómo identificar datos personales (PII) almacenados en S3?"*
→ Amazon Macie

*"¿Qué servicio usa ML para clasificar datos sensibles?"*
→ Amazon Macie

*"¿Cómo saber qué buckets S3 contienen información financiera?"*
→ Amazon Macie con jobs de descubrimiento

*"¿Qué servicio alerta si un bucket con datos sensibles es público?"*
→ Amazon Macie`,
    },
  ],
  keyPoints: [
    "Macie: Descubre datos sensibles en S3 (PII, financieros, credenciales)",
    "Usa ML y pattern matching para clasificación",
    "Jobs de descubrimiento: one-time o scheduled",
    "Evalúa seguridad: buckets públicos, no cifrados, compartidos",
    "Findings detallados con ubicación exacta",
    "Integración con EventBridge y Security Hub",
    "Multi-cuenta con Organizations",
  ],
  tags: [
    "Macie",
    "datos sensibles",
    "PII",
    "S3",
    "clasificación",
    "ML",
    "seguridad de datos",
  ],
  relatedServices: ["macie", "s3", "security-hub"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
