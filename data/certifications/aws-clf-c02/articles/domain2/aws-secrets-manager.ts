import { Article } from "@/types";

export const awsSecretsManager: Article = {
  id: "d2-art-11",
  slug: "aws-secrets-manager",
  title: "AWS Secrets Manager",
  shortDescription:
    "Gestiona, rota y protege secretos como contraseñas y API keys.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "¿Qué es AWS Secrets Manager?",
      content: `**AWS Secrets Manager** es un servicio para gestionar secretos de forma segura: contraseñas de bases de datos, API keys, tokens, y otras credenciales.

### Problemas que resuelve:

**Sin Secrets Manager:**
\`\`\`
❌ Contraseñas hardcodeadas en código
❌ Credenciales en archivos de configuración
❌ Secretos compartidos por email/Slack
❌ Rotación manual de contraseñas
❌ Falta de auditoría de acceso a secretos
\`\`\`

**Con Secrets Manager:**
\`\`\`
✅ Secretos almacenados de forma segura y cifrada
✅ Acceso controlado por IAM
✅ Rotación automática
✅ Auditoría con CloudTrail
✅ Recuperación programática desde aplicaciones
\`\`\``,
    },
    {
      title: "Características Principales",
      content: `### Cifrado

- Todos los secretos cifrados con KMS
- Puedes usar la clave por defecto o tu propia clave CMK

### Control de Acceso

- Políticas IAM para usuarios y roles
- Resource-based policies en cada secreto
- Granularidad a nivel de secreto

### Rotación Automática

- Rota secretos sin cambiar código de aplicación
- Funciones Lambda preconfiguradas para RDS, Redshift, DocumentDB
- Custom Lambda para otros servicios

### Versionado

- Múltiples versiones de cada secreto
- Labels como "AWSCURRENT" y "AWSPREVIOUS"
- Rollback si hay problemas

### Multi-Región

- Replicación automática a otras regiones
- Mismo secreto disponible en múltiples regiones
- Disaster recovery`,
    },
    {
      title: "Rotación Automática",
      content: `### ¿Por qué rotar secretos?

- Limita impacto si un secreto se expone
- Cumplimiento regulatorio (PCI-DSS requiere rotación)
- Mejores prácticas de seguridad

### Rotación para RDS (Nativa)

Secrets Manager tiene rotación integrada para:
- Amazon RDS (MySQL, PostgreSQL, Oracle, SQL Server, MariaDB)
- Amazon Aurora
- Amazon Redshift
- Amazon DocumentDB

**Proceso automático:**
1. Secrets Manager genera nueva contraseña
2. Actualiza el secreto
3. Actualiza la contraseña en la base de datos
4. La aplicación obtiene automáticamente la nueva contraseña

### Rotación Personalizada

Para otros servicios, creas una función Lambda:

\`\`\`
1. createSecret: Genera el nuevo valor
2. setSecret: Aplica el nuevo valor al servicio
3. testSecret: Verifica que funciona
4. finishSecret: Actualiza labels (AWSCURRENT)
\`\`\`

### Configuración de rotación:

\`\`\`
Frecuencia: Cada 30 días (o el período que elijas)
Lambda: Función de rotación
Ventana: Preferencia de horario
\`\`\``,
    },
    {
      title: "Uso desde Aplicaciones",
      content: `### SDK de AWS

\`\`\`python
import boto3
import json

client = boto3.client('secretsmanager')

response = client.get_secret_value(
    SecretId='mi-secreto-db'
)

secret = json.loads(response['SecretString'])
password = secret['password']
\`\`\`

### Best Practice: Caché de Secretos

Usa las librerías de caché para reducir llamadas:

\`\`\`python
from aws_secretsmanager_caching import SecretCache

cache = SecretCache()
secret = cache.get_secret_string('mi-secreto-db')
\`\`\`

**Beneficios del caché:**
- Menos llamadas a la API (costos)
- Menor latencia
- Resiliente a fallos temporales del servicio

### Inyección en contenedores (ECS/EKS)

ECS puede inyectar secretos como variables de entorno:

\`\`\`json
{
  "containerDefinitions": [{
    "secrets": [{
      "name": "DB_PASSWORD",
      "valueFrom": "arn:aws:secretsmanager:...:mi-secreto"
    }]
  }]
}
\`\`\``,
    },
    {
      title: "Secrets Manager vs Parameter Store",
      content: `### Comparación:

| Característica | Secrets Manager | Parameter Store |
|----------------|-----------------|-----------------|
| **Propósito principal** | Secretos con rotación | Configuración general |
| **Rotación automática** | ✅ Nativa | ❌ Debes implementar |
| **Cifrado** | Siempre cifrado | Opcional (SecureString) |
| **Costo** | $0.40/secreto/mes | Gratis (estándar) |
| **Generación de secretos** | ✅ | ❌ |
| **Cross-region replication** | ✅ | ❌ |
| **Integración RDS** | ✅ Nativa | ❌ |

### Cuándo usar cada uno:

**Secrets Manager:**
- Credenciales de bases de datos
- API keys que necesitan rotación
- Secretos que requieren replicación multi-región

**Parameter Store:**
- Configuración de aplicaciones
- Feature flags
- URLs de servicios
- Parámetros que no son sensibles (Standard)
- SecureStrings si no necesitas rotación`,
    },
    {
      title: "Seguridad y Auditoría",
      content: `### Políticas de Acceso

**Resource-based policy en el secreto:**
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": {
      "AWS": "arn:aws:iam::123456789012:role/MyAppRole"
    },
    "Action": "secretsmanager:GetSecretValue",
    "Resource": "*"
  }]
}
\`\`\`

### Auditoría con CloudTrail

CloudTrail registra todas las acciones:
- \`GetSecretValue\`: Quién accedió al secreto
- \`CreateSecret\`, \`UpdateSecret\`: Cambios
- \`RotateSecret\`: Rotaciones

### VPC Endpoints

Accede a Secrets Manager sin salir a Internet:

\`\`\`
[EC2 en VPC privada] → [VPC Endpoint] → [Secrets Manager]
\`\`\`

### Bloqueo de Secretos

\`\`\`
secretsmanager:BlockPublicAccess
\`\`\`
Previene configuraciones que exponen secretos públicamente.`,
    },
    {
      title: "Secrets Manager en el Examen",
      content: `### Puntos clave:

1. **Almacenamiento seguro:** Secretos cifrados con KMS
2. **Rotación automática:** Nativa para RDS, custom para otros
3. **Acceso por IAM:** Control granular de quién accede
4. **Auditoría:** CloudTrail registra todo
5. **Multi-región:** Replicación automática
6. **vs Parameter Store:** SM tiene rotación nativa, más costoso

### Preguntas típicas:

*"¿Cómo almacenar contraseñas de base de datos de forma segura?"*
→ AWS Secrets Manager

*"¿Qué servicio permite rotar contraseñas de RDS automáticamente?"*
→ AWS Secrets Manager

*"¿Cómo evitar hardcodear credenciales en el código?"*
→ Usar Secrets Manager y recuperar programáticamente

*"¿Cuál es la diferencia entre Secrets Manager y Parameter Store?"*
→ Secrets Manager tiene rotación automática nativa y cuesta; Parameter Store Standard es gratis pero sin rotación

*"¿Cómo auditar quién accedió a un secreto?"*
→ CloudTrail registra las llamadas a GetSecretValue`,
    },
  ],
  keyPoints: [
    "Secrets Manager: Almacenamiento seguro de credenciales",
    "Rotación automática: Nativa para RDS, DocumentDB, Redshift",
    "Cifrado: Siempre cifrado con KMS",
    "Acceso controlado por IAM y resource policies",
    "Auditoría: CloudTrail registra todos los accesos",
    "Multi-región: Replicación automática de secretos",
    "vs Parameter Store: SM tiene rotación nativa pero cuesta más",
  ],
  tags: [
    "Secrets Manager",
    "secretos",
    "contraseñas",
    "rotación",
    "credenciales",
    "seguridad",
    "KMS",
  ],
  relatedServices: ["secrets-manager", "kms", "rds"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
