import { Article } from "@/types";

export const iamFundamentos: Article = {
  id: "d2-art-01",
  slug: "iam-fundamentos",
  title: "AWS IAM: Fundamentos",
  shortDescription:
    "Domina la gestión de identidades y accesos en AWS con IAM.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "¿Qué es AWS IAM?",
      content: `**AWS Identity and Access Management (IAM)** es el servicio que controla quién puede acceder a qué recursos en tu cuenta de AWS.

### Características principales:
- **Gratuito:** No tiene costo adicional
- **Global:** No es específico de una región
- **Centralizado:** Un solo lugar para gestionar accesos
- **Granular:** Control fino sobre permisos

### ¿Por qué es importante?
IAM es la primera línea de defensa de tu cuenta AWS. Una mala configuración de IAM puede exponer todos tus recursos.`,
    },
    {
      title: "Componentes de IAM",
      content: `### 1. Usuarios (Users)
Representan personas o aplicaciones que interactúan con AWS.

**Características:**
- Credenciales propias (contraseña y/o access keys)
- Pueden pertenecer a grupos
- Pueden tener políticas directas

### 2. Grupos (Groups)
Colecciones de usuarios que comparten permisos.

**Características:**
- Simplifican la gestión de permisos
- Un usuario puede estar en múltiples grupos
- Los grupos no pueden contener otros grupos
- No pueden usarse para asumir roles

**Ejemplo:** Grupo "Developers" con permisos de EC2 y S3

### 3. Roles (Roles)
Identidades que pueden asumir usuarios, servicios o cuentas externas.

**Características:**
- No tienen credenciales permanentes
- Credenciales temporales (STS)
- Ideales para servicios AWS y federación
- Más seguros que access keys

**Ejemplo:** Role que permite a Lambda acceder a DynamoDB

### 4. Políticas (Policies)
Documentos JSON que definen permisos.

**Tipos:**
- **AWS Managed:** Creadas y mantenidas por AWS
- **Customer Managed:** Creadas por ti
- **Inline:** Embebidas directamente en usuario/grupo/rol`,
    },
    {
      title: "Anatomía de una Política IAM",
      content: `Las políticas son documentos JSON con esta estructura:

\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowS3Read",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::my-bucket",
        "arn:aws:s3:::my-bucket/*"
      ],
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "192.168.1.0/24"
        }
      }
    }
  ]
}
\`\`\`

### Elementos:

| Elemento | Descripción |
|----------|-------------|
| **Version** | Siempre "2012-10-17" |
| **Statement** | Array de declaraciones de permisos |
| **Sid** | ID opcional para identificar el statement |
| **Effect** | "Allow" o "Deny" |
| **Action** | Operaciones permitidas/denegadas |
| **Resource** | ARNs de recursos afectados |
| **Condition** | Condiciones opcionales |

### Reglas de evaluación:
1. Por defecto, todo está **denegado** (implicit deny)
2. Un **Allow** explícito permite la acción
3. Un **Deny** explícito siempre gana`,
    },
    {
      title: "Usuarios vs Roles",
      content: `### Cuándo usar Usuarios:
- Personas que necesitan acceso a la consola
- Acceso programático desde aplicaciones externas a AWS
- Acceso de larga duración

### Cuándo usar Roles:
- Servicios AWS que necesitan permisos (EC2, Lambda)
- Acceso cross-account (entre cuentas)
- Federación con IdP externo (SAML, OIDC)
- Acceso temporal

### Mejores prácticas:
> **Prefiere roles sobre access keys cuando sea posible**

**Para EC2:**
En lugar de guardar access keys en la instancia:
\`\`\`
❌ Access Keys en el código
❌ Access Keys en variables de entorno
✅ IAM Role asociado a la instancia (Instance Profile)
\`\`\`

**Para Lambda:**
\`\`\`
✅ Execution Role con permisos necesarios
\`\`\``,
    },
    {
      title: "IAM Identity Center (SSO)",
      content: `### Anteriormente conocido como AWS SSO

**IAM Identity Center** es el servicio recomendado para gestionar acceso de workforce (empleados) a múltiples cuentas AWS y aplicaciones.

### Beneficios:
- Single Sign-On a múltiples cuentas AWS
- Integración con proveedores de identidad (Okta, Azure AD, etc.)
- Gestión centralizada de permisos
- Acceso a aplicaciones SaaS

### Cuándo usar Identity Center vs IAM Users:
| Escenario | Recomendación |
|-----------|---------------|
| Una sola cuenta, pocos usuarios | IAM Users puede ser suficiente |
| Múltiples cuentas | IAM Identity Center |
| Integración con directorio corporativo | IAM Identity Center |
| Servicios/aplicaciones que acceden a AWS | IAM Roles |

### Permission Sets:
Templates de permisos que aplicas a usuarios o grupos para acceso a cuentas específicas.`,
    },
    {
      title: "Mejores Prácticas de IAM",
      content: `### 1. Protege la cuenta root
- No uses root para tareas diarias
- Activa MFA en root
- No crees access keys para root
- Guarda las credenciales de forma segura

### 2. Aplica el principio de privilegio mínimo
- Otorga solo los permisos necesarios
- Empieza sin permisos y añade según necesidad
- Usa AWS Access Analyzer para identificar permisos no usados

### 3. Usa grupos para asignar permisos
- Evita políticas directas en usuarios
- Crea grupos por función (Developers, Admins, etc.)

### 4. Activa MFA
- Obligatorio para usuarios privilegiados
- Considera políticas que requieran MFA

### 5. Rota credenciales regularmente
- Access keys deben rotarse
- Usa IAM Credential Report para auditar

### 6. Usa roles para aplicaciones
- En lugar de access keys hardcodeadas
- Instance Profiles para EC2
- Execution Roles para Lambda

### 7. Usa condiciones en políticas
- Restricciones por IP
- Restricciones por hora
- Requerir MFA para acciones sensibles`,
    },
    {
      title: "Herramientas de IAM",
      content: `### IAM Credential Report
Reporte CSV con todos los usuarios y el estado de sus credenciales:
- Cuándo se usó la contraseña por última vez
- Si MFA está activado
- Estado de access keys
- Rotación de credenciales

**Descarga desde:** IAM Console → Credential Report

### IAM Access Analyzer
Identifica recursos compartidos externamente y analiza políticas:
- Buckets S3 públicos
- Roles asumibles por cuentas externas
- Políticas excesivamente permisivas

### IAM Policy Simulator
Prueba políticas antes de aplicarlas:
- Simula acciones con políticas existentes
- Valida nuevas políticas
- Troubleshooting de permisos

### Access Advisor
Muestra los servicios a los que un usuario/rol ha accedido:
- Identifica permisos no utilizados
- Ayuda a aplicar principio de mínimo privilegio`,
    },
    {
      title: "IAM en el Examen",
      content: `### Puntos clave para el CLF-C02:

1. **IAM es global** (no regional)
2. **Root account** debe protegerse con MFA
3. **Roles > Access Keys** para servicios AWS
4. **Grupos** simplifican gestión de permisos
5. **Políticas** definen permisos en JSON
6. **Deny** siempre gana sobre Allow
7. **Mínimo privilegio** es una mejor práctica fundamental

### Preguntas típicas:

*"¿Cómo permitir que una aplicación en EC2 acceda a S3 de forma segura?"*
→ Usar un IAM Role (Instance Profile)

*"¿Qué debería activarse para proteger la cuenta root?"*
→ MFA (Multi-Factor Authentication)

*"¿Dónde se definen los permisos en AWS?"*
→ Políticas IAM (IAM Policies)

*"¿Qué reporte muestra el estado de credenciales de todos los usuarios?"*
→ IAM Credential Report`,
    },
  ],
  keyPoints: [
    "IAM es global y gratuito",
    "Componentes: Users, Groups, Roles, Policies",
    "Root account: Proteger con MFA, no usar para tareas diarias",
    "Roles: Preferidos sobre access keys para servicios AWS",
    "Políticas: JSON con Effect, Action, Resource",
    "Deny explícito siempre gana sobre Allow",
    "Principio de mínimo privilegio: Solo permisos necesarios",
  ],
  tags: [
    "IAM",
    "seguridad",
    "usuarios",
    "roles",
    "políticas",
    "MFA",
    "acceso",
    "permisos",
  ],
  relatedServices: ["iam"],
  readingTime: 15,
  lastUpdated: "2025-12-11",
};
