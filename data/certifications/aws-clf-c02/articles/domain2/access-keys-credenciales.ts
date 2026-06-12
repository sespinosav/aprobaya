import { Article } from "@/types";

export const accessKeysCredenciales: Article = {
  id: "d2-art-12",
  slug: "access-keys-credenciales",
  title: "Access Keys y Gestión de Credenciales",
  shortDescription:
    "Entiende los tipos de credenciales AWS y las mejores prácticas para gestionarlas.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "Tipos de Credenciales en AWS",
      content: `AWS utiliza diferentes tipos de credenciales según el contexto de acceso:

### 1. Contraseña + MFA (Console)
Para acceso a la consola web de AWS.

### 2. Access Keys (API/CLI/SDK)
Para acceso programático a AWS.

### 3. Signing Certificates (Menos común)
Para servicios específicos como CloudFront signed URLs.

### 4. SSH Keys
Para acceso a instancias EC2 y CodeCommit.

### 5. Credenciales Temporales (STS)
Generadas por roles IAM, expiran automáticamente.`,
    },
    {
      title: "Access Keys en Detalle",
      content: `### ¿Qué son?

Las Access Keys son un par de credenciales para acceso programático:
- **Access Key ID:** Identificador público (empieza con AKIA...)
- **Secret Access Key:** Clave secreta (solo visible al crearla)

### Dónde se usan:
- AWS CLI
- SDKs (boto3, aws-sdk-js, etc.)
- Herramientas de terceros
- Aplicaciones que llaman a APIs de AWS

### ⚠️ Peligros de Access Keys:

\`\`\`
❌ Hardcodeadas en código → Se suben a GitHub
❌ En archivos de configuración → Se exponen en backups
❌ Compartidas entre equipos → Sin accountability
❌ Nunca rotadas → Mayor ventana de exposición
\`\`\`

### Alternativa preferida: IAM Roles

En lugar de Access Keys, usa roles siempre que sea posible:
- EC2 → Instance Profile
- Lambda → Execution Role
- ECS → Task Role
- Usuarios → AssumeRole con credenciales temporales`,
    },
    {
      title: "Mejores Prácticas para Access Keys",
      content: `### 1. No crear Access Keys para Root

La cuenta root **nunca** debería tener Access Keys. Si existen, elimínalas.

### 2. Rotar Access Keys regularmente

**Proceso de rotación:**
1. Crear nueva Access Key (puedes tener 2 activas)
2. Actualizar aplicaciones para usar la nueva
3. Verificar que la vieja no se usa (CloudTrail)
4. Desactivar la vieja
5. Después de un tiempo, eliminarla

### 3. Usar credenciales temporales cuando sea posible

\`\`\`
aws sts assume-role \\
  --role-arn arn:aws:iam::123456789012:role/MyRole \\
  --role-session-name my-session
\`\`\`

Las credenciales temporales:
- Expiran automáticamente (1-12 horas)
- No necesitan rotación manual
- Se pueden restringir por sesión

### 4. No compartir Access Keys

Cada usuario/aplicación debe tener sus propias credenciales para:
- Auditoría individual
- Revocación sin afectar a otros
- Principio de mínimo privilegio

### 5. Monitorear uso de Access Keys

- CloudTrail para auditar acciones
- IAM Credential Report para ver estado
- Access Analyzer para detectar anomalías`,
    },
    {
      title: "IAM Credential Report",
      content: `### ¿Qué es?

Reporte CSV que muestra el estado de todas las credenciales en la cuenta.

### Información incluida:

| Campo | Descripción |
|-------|-------------|
| \`user\` | Nombre del usuario |
| \`password_enabled\` | Si tiene contraseña de consola |
| \`password_last_used\` | Última vez que usó la consola |
| \`mfa_active\` | Si tiene MFA activado |
| \`access_key_1_active\` | Si la key 1 está activa |
| \`access_key_1_last_used\` | Última vez que se usó |
| \`access_key_1_last_rotated\` | Última rotación |
| \`access_key_2_*\` | Mismos campos para key 2 |

### Casos de uso:

**Auditoría de seguridad:**
- ¿Qué usuarios no tienen MFA?
- ¿Qué keys no se han rotado en >90 días?
- ¿Qué usuarios no han accedido en >90 días?

### Cómo obtenerlo:

1. IAM Console → Credential Report → Download
2. CLI: \`aws iam generate-credential-report\` + \`get-credential-report\``,
    },
    {
      title: "AWS STS y Credenciales Temporales",
      content: `### AWS Security Token Service (STS)

STS genera credenciales temporales para:
- Asumir roles (AssumeRole)
- Federación de identidades
- Acceso cross-account

### Componentes de credenciales temporales:

\`\`\`json
{
  "AccessKeyId": "AKIA...",
  "SecretAccessKey": "...",
  "SessionToken": "...",
  "Expiration": "2024-01-15T18:00:00Z"
}
\`\`\`

### Operaciones comunes de STS:

| Operación | Uso |
|-----------|-----|
| \`AssumeRole\` | Asumir rol en la misma u otra cuenta |
| \`AssumeRoleWithSAML\` | Federación con proveedor SAML |
| \`AssumeRoleWithWebIdentity\` | Federación con IdP web (Google, etc.) |
| \`GetSessionToken\` | Credenciales temporales con MFA |
| \`GetFederationToken\` | Para federation proxy |

### Duración de credenciales:

| Tipo | Duración |
|------|----------|
| Role sessions | 1 hora (default), hasta 12 horas |
| Federation tokens | Hasta 36 horas |
| GetSessionToken | Hasta 36 horas |`,
    },
    {
      title: "Detección de Credenciales Expuestas",
      content: `### AWS detecta credenciales expuestas

Si AWS detecta Access Keys en repositorios públicos (GitHub, etc.):
1. Envía alerta al propietario de la cuenta
2. Puede aplicar una política restrictiva automáticamente

### Qué hacer si se exponen credenciales:

**Inmediatamente:**
1. Desactivar las Access Keys expuestas
2. Revisar CloudTrail para ver si fueron usadas
3. Rotar cualquier secreto que pudiera haberse accedido

**Investigación:**
1. ¿Qué recursos se accedieron?
2. ¿Se crearon recursos no autorizados?
3. ¿Se modificaron políticas?

**Remediación:**
1. Eliminar recursos no autorizados
2. Crear nuevas credenciales
3. Implementar controles para evitar repetición

### Herramientas de detección:

- **git-secrets:** Pre-commit hook para detectar secrets
- **truffleHog:** Escanea repositorios
- **AWS Secrets Detection en CodeGuru:** Detecta en code reviews`,
    },
    {
      title: "Credenciales en el Examen",
      content: `### Puntos clave:

1. **Root nunca debe tener Access Keys**
2. **Roles > Access Keys** (credenciales temporales)
3. **Rotar Access Keys regularmente**
4. **IAM Credential Report** para auditoría
5. **STS para credenciales temporales**
6. **No hardcodear credenciales en código**

### Preguntas típicas:

*"¿Cuál es la forma más segura de dar acceso a AWS desde una aplicación en EC2?"*
→ Usar un IAM Role (Instance Profile) en lugar de Access Keys

*"¿Cómo verificar que todos los usuarios tienen MFA activado?"*
→ IAM Credential Report

*"¿Qué hacer si descubres Access Keys expuestas en GitHub?"*
→ Desactivar inmediatamente, revisar CloudTrail, rotar credenciales

*"¿Qué servicio genera credenciales temporales para asumir roles?"*
→ AWS STS (Security Token Service)

*"¿Por qué son preferibles las credenciales temporales?"*
→ Expiran automáticamente, reducen riesgo de exposición`,
    },
  ],
  keyPoints: [
    "Access Keys: Par de credenciales para acceso programático",
    "Root nunca debe tener Access Keys",
    "Roles > Access Keys (credenciales temporales)",
    "Rotar Access Keys cada 90 días (mínimo)",
    "IAM Credential Report: Auditoría de todas las credenciales",
    "STS: Genera credenciales temporales para roles",
    "Credenciales expuestas: Desactivar inmediatamente",
  ],
  tags: [
    "access keys",
    "credenciales",
    "STS",
    "rotación",
    "seguridad",
    "IAM",
    "mejores prácticas",
  ],
  relatedServices: ["iam", "sts"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
