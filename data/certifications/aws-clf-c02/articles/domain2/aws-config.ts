import { Article } from "@/types";

export const awsConfig: Article = {
  id: "d2-art-09",
  slug: "aws-config",
  title: "AWS Config",
  shortDescription:
    "Audita y evalúa las configuraciones de tus recursos AWS continuamente.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "¿Qué es AWS Config?",
      content: `**AWS Config** es un servicio que permite evaluar, auditar y registrar las configuraciones de tus recursos de AWS de forma continua.

### ¿Qué problema resuelve?

**Sin AWS Config:**
- "¿Quién cambió la configuración de este Security Group?"
- "¿Cuál era la configuración del bucket S3 hace un mes?"
- "¿Tenemos recursos que violan nuestras políticas de seguridad?"

**Con AWS Config:**
- Historial completo de configuraciones
- Detección automática de cambios
- Evaluación continua contra reglas de compliance`,
    },
    {
      title: "Componentes Principales",
      content: `### 1. Configuration Recorder

**Qué hace:** Registra la configuración de recursos seleccionados.

**Configuración:**
- Qué tipos de recursos grabar
- En qué regiones grabar
- Dónde almacenar (S3 bucket)

### 2. Configuration Items

**Qué es:** Un snapshot de la configuración de un recurso en un momento dado.

**Incluye:**
- Metadatos del recurso
- Atributos de configuración
- Relaciones con otros recursos
- Eventos relacionados
- Estado actual

### 3. Config Rules

**Qué son:** Reglas que evalúan si los recursos cumplen con configuraciones deseadas.

**Tipos:**
- **AWS Managed Rules:** Pre-definidas por AWS (~300 disponibles)
- **Custom Rules:** Creadas con Lambda

### 4. Conformance Packs

**Qué son:** Colecciones de Config Rules agrupadas por compliance framework.

**Ejemplos:** PCI-DSS, HIPAA, CIS Benchmarks`,
    },
    {
      title: "Config Rules: AWS Managed",
      content: `### Reglas más comunes:

| Regla | Qué verifica |
|-------|--------------|
| \`s3-bucket-public-read-prohibited\` | Buckets S3 no deben ser públicos |
| \`s3-bucket-ssl-requests-only\` | S3 debe requerir SSL |
| \`ec2-instance-no-public-ip\` | EC2 no debe tener IP pública |
| \`rds-instance-public-access-check\` | RDS no debe ser accesible públicamente |
| \`encrypted-volumes\` | Volúmenes EBS deben estar cifrados |
| \`iam-password-policy\` | Política de contraseñas adecuada |
| \`iam-root-access-key-check\` | Root no debe tener access keys |
| \`root-account-mfa-enabled\` | MFA habilitado en root |
| \`vpc-flow-logs-enabled\` | VPC Flow Logs habilitados |
| \`cloudtrail-enabled\` | CloudTrail habilitado |

### Trigger de evaluación:

**Configuration Changes (cambios de configuración):**
La regla se evalúa cuando cambia el recurso.

**Periodic (periódico):**
La regla se evalúa cada X horas (1, 3, 6, 12, 24 horas).`,
    },
    {
      title: "Remediación Automática",
      content: `### Config puede remediar automáticamente recursos no conformes

**Cómo funciona:**
1. Una regla detecta un recurso no conforme
2. Se dispara una acción de remediación
3. Un documento de Systems Manager Automation corrige el recurso

### Ejemplo: Bucket S3 público

\`\`\`
1. Config Rule: s3-bucket-public-read-prohibited
2. Resultado: Bucket "my-bucket" NO CONFORME
3. Remediación: AWS-DisableS3BucketPublicReadWrite
4. Acción: Systems Manager bloquea acceso público
5. Resultado: Bucket ahora CONFORME
\`\`\`

### Acciones de remediación:

| Tipo | Descripción |
|------|-------------|
| **Automática** | Se ejecuta inmediatamente |
| **Manual** | Requiere aprobación humana |

### Acciones predefinidas:
AWS proporciona documentos de remediación para casos comunes:
- Habilitar cifrado de EBS
- Eliminar reglas de Security Group demasiado permisivas
- Habilitar versionado de S3
- Habilitar logging`,
    },
    {
      title: "Historial y Timeline",
      content: `### Configuration Timeline

AWS Config mantiene un historial de cambios de cada recurso:

\`\`\`
Recurso: sg-abc123 (Security Group)

2024-01-15 10:00 - Creación
2024-01-15 14:30 - Regla agregada: SSH desde 0.0.0.0/0
2024-01-15 14:35 - Config detecta NO CONFORME
2024-01-15 14:40 - Remediación: SSH limitado a IP corporativa
2024-01-15 14:40 - Config detecta CONFORME
\`\`\`

### Consultas con AWS Config Advanced Queries

Usa SQL para consultar el estado actual de recursos:

\`\`\`sql
SELECT
  resourceId,
  resourceType,
  configuration.instanceType
WHERE
  resourceType = 'AWS::EC2::Instance'
  AND configuration.instanceType LIKE 't2.%'
\`\`\`

### Integración con CloudTrail

Config + CloudTrail responden:
- **Config:** ¿Qué cambió?
- **CloudTrail:** ¿Quién lo cambió y cuándo?`,
    },
    {
      title: "Multi-Account con Organizations",
      content: `### Aggregator

Un **Aggregator** recopila datos de Config de múltiples cuentas y regiones en una vista centralizada.

**Configuración:**
1. Cuenta central como Aggregator
2. Autorización de cuentas fuente
3. Vista consolidada de compliance

### Conformance Packs para Organizations

Despliega conjuntos de reglas a todas las cuentas de la organización:

1. Crear Conformance Pack en cuenta de gestión
2. Especificar cuentas/OUs objetivo
3. El pack se despliega automáticamente
4. Vista centralizada de resultados

### Ejemplo: Compliance de PCI-DSS

\`\`\`
Organization
├── Account A: 95% CONFORME
├── Account B: 88% CONFORME
└── Account C: 100% CONFORME
\`\`\``,
    },
    {
      title: "AWS Config en el Examen",
      content: `### Puntos clave:

1. **Registra configuraciones:** Historial de cambios de recursos
2. **Evalúa compliance:** Reglas que verifican configuraciones
3. **Remediación:** Puede corregir automáticamente
4. **Timeline:** Historial de cambios por recurso
5. **Aggregator:** Vista centralizada multi-cuenta

### Diferencias con otros servicios:

| Servicio | Propósito |
|----------|-----------|
| **Config** | Evaluación continua de configuraciones |
| **CloudTrail** | Auditoría de llamadas API (quién hizo qué) |
| **Trusted Advisor** | Recomendaciones generales |
| **Security Hub** | Centraliza findings de seguridad |

### Preguntas típicas:

*"¿Qué servicio verifica que los buckets S3 no sean públicos continuamente?"*
→ AWS Config con la regla s3-bucket-public-read-prohibited

*"¿Cómo ver el historial de cambios de un Security Group?"*
→ AWS Config Timeline

*"¿Qué servicio puede remediar automáticamente recursos no conformes?"*
→ AWS Config con acciones de remediación

*"¿Cómo evaluar compliance en múltiples cuentas?"*
→ AWS Config Aggregator`,
    },
  ],
  keyPoints: [
    "Config: Registra y evalúa configuraciones de recursos",
    "Config Rules: Evalúan compliance (managed o custom)",
    "Timeline: Historial de cambios de cada recurso",
    "Remediación: Corrección automática de no conformidades",
    "Aggregator: Vista centralizada multi-cuenta",
    "Config registra QUÉ cambió, CloudTrail registra QUIÉN lo cambió",
    "~300 reglas managed disponibles (S3 público, cifrado, etc.)",
  ],
  tags: [
    "Config",
    "compliance",
    "auditoría",
    "configuración",
    "reglas",
    "remediación",
    "historial",
  ],
  relatedServices: ["config", "cloudtrail", "systems-manager"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
