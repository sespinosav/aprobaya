import { Article } from "@/types";

export const kmsCifrado: Article = {
  id: "d2-art-15",
  slug: "kms-cifrado",
  title: "AWS KMS y Cifrado de Datos",
  shortDescription:
    "Gestiona claves de cifrado y protege tus datos en reposo y en tránsito.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "Conceptos Básicos de Cifrado",
      content: `### ¿Por qué cifrar?

El cifrado protege los datos haciéndolos ilegibles sin la clave correcta.

**Datos en reposo (at rest):**
Datos almacenados en disco, S3, bases de datos, etc.

**Datos en tránsito (in transit):**
Datos moviéndose por la red (HTTPS, TLS).

### Tipos de cifrado:

**Cifrado simétrico:**
Una sola clave para cifrar y descifrar. Es más rápido.

**Cifrado asimétrico:**
Par de claves (pública/privada). Se usa para intercambio de claves y firmas.

### AWS maneja la complejidad

No necesitas ser experto en criptografía. AWS proporciona servicios que simplifican el cifrado.`,
    },
    {
      title: "AWS Key Management Service (KMS)",
      content: `### ¿Qué es KMS?

**AWS KMS** es un servicio gestionado para crear y controlar claves de cifrado usadas para proteger tus datos.

### Características:

- **Gestión centralizada:** Todas las claves en un lugar
- **Integrado con servicios AWS:** S3, EBS, RDS, Lambda, etc.
- **Auditoría:** CloudTrail registra cada uso de claves
- **Cumplimiento:** FIPS 140-2 Level 3 validated

### Tipos de claves en KMS:

| Tipo | Quién la gestiona | Costo |
|------|-------------------|-------|
| **AWS Managed Keys** | AWS completamente | Gratis |
| **Customer Managed Keys (CMK)** | Tú (con opciones de AWS) | $1/mes + uso |
| **AWS Owned Keys** | AWS (no ves en tu cuenta) | Gratis |

### AWS Managed Keys:
- Creadas automáticamente por servicios (ej: aws/s3)
- Rotación automática cada año
- No puedes administrarlas directamente

### Customer Managed Keys:
- Tú las creas y gestionas
- Control sobre rotación
- Puedes definir políticas de acceso
- Puedes importar tu propio material de clave`,
    },
    {
      title: "Operaciones de KMS",
      content: `### Cifrado con KMS:

\`\`\`
[Datos] → [KMS: Encrypt con CMK] → [Datos cifrados]
[Datos cifrados] → [KMS: Decrypt con CMK] → [Datos]
\`\`\`

### Envelope Encryption (Cifrado de sobre):

Para datos grandes, KMS usa una técnica más eficiente:

\`\`\`
1. KMS genera Data Key (clave de datos)
2. Usa Data Key para cifrar los datos (localmente)
3. Cifra la Data Key con la CMK
4. Almacena: datos cifrados + Data Key cifrada
\`\`\`

**¿Por qué?**
- KMS tiene límite de 4KB por operación
- Cifrar localmente es más rápido
- Solo la Data Key viaja a KMS

### Operaciones principales:

| Operación | Descripción |
|-----------|-------------|
| \`Encrypt\` | Cifra datos (hasta 4KB) |
| \`Decrypt\` | Descifra datos |
| \`GenerateDataKey\` | Genera Data Key para envelope encryption |
| \`ReEncrypt\` | Descifra y recifra con otra clave |`,
    },
    {
      title: "Políticas de Claves",
      content: `### Key Policy (Política de clave)

Cada CMK tiene una política que define quién puede usarla.

**Estructura:**
\`\`\`json
{
  "Statement": [{
    "Sid": "Allow use of the key",
    "Effect": "Allow",
    "Principal": {
      "AWS": "arn:aws:iam::123456789012:role/MyRole"
    },
    "Action": [
      "kms:Encrypt",
      "kms:Decrypt",
      "kms:GenerateDataKey"
    ],
    "Resource": "*"
  }]
}
\`\`\`

### Grants

Permisos temporales delegables:
- Un usuario puede dar acceso a la clave a otro
- Útil para servicios que necesitan acceso temporal
- Revocables

### ViaService Condition

Permite que la clave solo se use a través de ciertos servicios:

\`\`\`json
"Condition": {
  "StringEquals": {
    "kms:ViaService": "s3.us-east-1.amazonaws.com"
  }
}
\`\`\`

*"Esta clave solo puede usarse cuando S3 la invoque"*`,
    },
    {
      title: "Rotación de Claves",
      content: `### Rotación Automática

**Para Customer Managed Keys:**
- Puedes habilitar rotación automática
- Nueva clave cada año
- Las versiones anteriores se mantienen para descifrar datos antiguos
- Los datos NO se recifran automáticamente

**Para AWS Managed Keys:**
- Rotación automática cada año
- No puedes deshabilitarla

### Rotación Manual

Para importar material de clave nuevo:
1. Crear nueva CMK con nuevo material
2. Actualizar alias a nueva CMK
3. Los datos viejos usan clave vieja (por ID)
4. Recifrar datos si es necesario

### Alias de Claves

Nombres amigables para tus claves:
- \`alias/mi-clave-produccion\`
- Puedes apuntar a diferentes CMKs
- Útil para rotación sin cambiar código`,
    },
    {
      title: "Cifrado en Servicios AWS",
      content: `### Servicios con cifrado integrado:

| Servicio | Tipo de cifrado |
|----------|-----------------|
| **S3** | SSE-S3, SSE-KMS, SSE-C |
| **EBS** | Cifrado con KMS |
| **RDS** | Cifrado con KMS |
| **DynamoDB** | Cifrado con KMS |
| **Lambda** | Variables de entorno cifradas |
| **Secrets Manager** | Cifrado con KMS |

### S3 Server-Side Encryption:

| Opción | Quién gestiona la clave |
|--------|------------------------|
| **SSE-S3** | AWS completamente |
| **SSE-KMS** | AWS KMS (tú controlas) |
| **SSE-C** | Tú (proporcionas la clave) |

### Client-Side Encryption:

Tú cifras antes de enviar a AWS:
- Más control
- AWS nunca ve datos en claro
- Más complejidad de implementación

### Datos en tránsito:

- **HTTPS/TLS:** Para todas las APIs de AWS
- **VPN:** Para conexiones on-premises
- **PrivateLink:** Tráfico privado sin Internet`,
    },
    {
      title: "KMS en el Examen CLF-C02",
      content: `### Puntos clave:

1. **KMS gestiona claves de cifrado**
2. **AWS Managed Keys:** Gratuitas, AWS las gestiona
3. **Customer Managed Keys:** $1/mes, tú controlas
4. **Envelope Encryption:** Data Keys para datos grandes
5. **Rotación automática:** Anual para managed y CMK
6. **Auditoría con CloudTrail:** Cada uso de clave se registra
7. **Integrado con muchos servicios:** S3, EBS, RDS, etc.

### Preguntas típicas:

*"¿Qué servicio gestiona claves de cifrado en AWS?"*
→ AWS KMS

*"¿Cómo cifrar datos en S3 con control sobre las claves?"*
→ SSE-KMS (Server-Side Encryption con KMS)

*"¿Qué tipo de clave de KMS es gratuita?"*
→ AWS Managed Keys

*"¿Con qué frecuencia rotan las claves en KMS?"*
→ Automáticamente cada año (si está habilitado)

*"¿Dónde se registra cada uso de una clave KMS?"*
→ AWS CloudTrail`,
    },
  ],
  keyPoints: [
    "KMS: Gestión centralizada de claves de cifrado",
    "AWS Managed Keys: Gratis, gestionadas por AWS",
    "Customer Managed Keys: $1/mes, tú controlas políticas",
    "Envelope Encryption: Data Keys para datos grandes",
    "Rotación automática: Cada año (habilitado por defecto en managed)",
    "Auditoría: CloudTrail registra cada operación",
    "Integrado con: S3, EBS, RDS, DynamoDB, Lambda, etc.",
  ],
  tags: [
    "KMS",
    "cifrado",
    "encryption",
    "claves",
    "seguridad",
    "SSE",
    "CMK",
    "datos en reposo",
  ],
  relatedServices: ["kms", "s3", "ebs", "rds"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
