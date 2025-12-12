import { Article } from "@/types";

export const seguridadCuentaRoot: Article = {
  id: "d2-art-02",
  slug: "seguridad-cuenta-root",
  title: "Seguridad de la Cuenta Root",
  shortDescription:
    "Aprende a proteger la cuenta root de AWS y cuándo usarla.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "¿Qué es la Cuenta Root?",
      content: `La **cuenta root** (o usuario root) es la identidad que se crea cuando abres una cuenta de AWS por primera vez. Tiene **acceso completo e irrestricto** a todos los recursos y servicios de la cuenta.

### Características:
- Se accede con el email usado al crear la cuenta
- Tiene todos los permisos posibles
- No se puede limitar con políticas IAM
- Es la única que puede realizar ciertas tareas

> ⚠️ **La cuenta root es el activo más valioso y peligroso de tu cuenta AWS**`,
    },
    {
      title: "Tareas Exclusivas del Root",
      content: `Algunas tareas **solo pueden realizarse** con la cuenta root:

### Gestión de Cuenta:
- Cambiar el nombre, email o contraseña de la cuenta
- Cerrar la cuenta de AWS
- Cambiar el plan de AWS Support
- Ver ciertas páginas de facturación

### Configuración de Cuenta:
- Activar/desactivar IAM access to billing
- Restaurar permisos de IAM accidentalmente eliminados
- Registrar como seller en Marketplace

### Servicios Específicos:
- Crear claves de CloudFront (signed URLs)
- Configurar un bucket S3 para habilitar MFA Delete
- Transferir Route 53 domains a otra cuenta
- Cambiar o cancelar el plan de AWS Support

### Para todo lo demás:
> Usa usuarios IAM o roles con los permisos apropiados`,
    },
    {
      title: "Mejores Prácticas de Seguridad",
      content: `### 1. Activar MFA (Multi-Factor Authentication)

**¡OBLIGATORIO!** MFA agrega una segunda capa de autenticación.

**Opciones de MFA:**
| Tipo | Descripción |
|------|-------------|
| **Virtual MFA** | App como Google Authenticator, Authy |
| **Hardware MFA** | Llave física (YubiKey, Gemalto) |
| **FIDO2 Security Key** | Autenticación sin contraseña |

**Cómo activar:**
1. Inicia sesión como root
2. IAM → Security credentials
3. Assign MFA device

### 2. No Crear Access Keys

La cuenta root **no debería tener access keys**.

- Si existen, elimínalas
- Usa IAM users o roles para acceso programático
- Las access keys de root son extremadamente peligrosas

### 3. No Usar Root para Tareas Diarias

Crea un usuario IAM administrador para tareas diarias:
1. Crea usuario IAM
2. Asigna la política AdministratorAccess
3. Activa MFA en ese usuario
4. Usa ese usuario en lugar de root

### 4. Contraseña Fuerte y Única

- Mínimo 14 caracteres
- Combinación de mayúsculas, minúsculas, números, símbolos
- No reutilizar de otras cuentas
- Guardar en password manager seguro`,
    },
    {
      title: "Monitoreo y Alertas",
      content: `### CloudTrail para Auditoría

**CloudTrail** registra todas las acciones realizadas, incluyendo las del root:

\`\`\`
Acción registrada:
- Quién: root
- Qué: ConsoleLogin
- Cuándo: 2024-01-15T10:30:00Z
- Desde dónde: IP 192.168.1.1
\`\`\`

### Alertas de Uso de Root

Configura alarmas para detectar uso del root:

**Con CloudWatch:**
1. Crea un metric filter en CloudTrail logs
2. Filtra por \`"$.userIdentity.type" = "Root"\`
3. Crea alarma cuando count > 0
4. Notifica por SNS (email/SMS)

**Con EventBridge:**
1. Crea regla para eventos de login de root
2. Target: SNS topic para notificaciones

### AWS Config

Usa Config Rules para verificar:
- \`root-account-mfa-enabled\`: Alerta si MFA no está activo
- \`iam-root-access-key-check\`: Alerta si existen access keys`,
    },
    {
      title: "Escenarios de Compromiso",
      content: `### ¿Qué hacer si sospechas que root está comprometida?

**Pasos inmediatos:**
1. Cambiar la contraseña de root inmediatamente
2. Rotar/eliminar todas las access keys (si existen)
3. Revisar y eliminar usuarios IAM sospechosos
4. Verificar recursos creados recientemente
5. Revisar CloudTrail logs

### Señales de compromiso:
- Recursos que no creaste (especialmente EC2 en regiones inusuales)
- Costos inesperados
- Usuarios IAM desconocidos
- Cambios en políticas de seguridad
- Emails de AWS sobre actividad sospechosa

### Contactar a AWS:
Si confirmas un compromiso, abre un caso de soporte con AWS inmediatamente. Ellos pueden ayudar a identificar y remediar la brecha.`,
    },
    {
      title: "AWS Organizations y Root",
      content: `### En un ambiente multi-cuenta con Organizations:

**Cuenta de gestión (Management Account):**
- Tiene el root principal de la organización
- Puede crear y gestionar cuentas miembro
- Puede aplicar SCPs (Service Control Policies)

**Cuentas miembro:**
- Cada cuenta tiene su propio usuario root
- Las SCPs pueden limitar qué puede hacer el root de cuentas miembro
- Pero el root de la cuenta de gestión no está limitado por SCPs

### SCPs y Root:
Una SCP puede denegar acciones incluso al root de una cuenta miembro:

\`\`\`json
{
  "Effect": "Deny",
  "Action": [
    "ec2:TerminateInstances"
  ],
  "Resource": "*"
}
\`\`\`

Con esta SCP, ni siquiera el root de la cuenta miembro puede terminar instancias EC2.`,
    },
    {
      title: "Root en el Examen CLF-C02",
      content: `### Puntos clave:

1. **Root tiene acceso total:** No se puede limitar con políticas IAM
2. **MFA es obligatorio:** Primera medida de seguridad
3. **No usar para tareas diarias:** Solo para tareas exclusivas
4. **No crear access keys:** Peligro de exposición
5. **Monitorear con CloudTrail:** Detectar uso no autorizado
6. **SCPs pueden limitar root de cuentas miembro** (pero no el de management account)

### Preguntas típicas:

*"¿Cuál es la primera acción para asegurar una nueva cuenta AWS?"*
→ Activar MFA en la cuenta root

*"¿Qué usuario puede cerrar una cuenta de AWS?"*
→ Solo el usuario root

*"¿Cómo monitorear si alguien usa la cuenta root?"*
→ CloudTrail + CloudWatch Alarms

*"¿Las SCPs pueden limitar a la cuenta root?"*
→ Sí, en cuentas miembro. No en la cuenta de gestión.

*"¿Debería la cuenta root tener access keys?"*
→ No, nunca. Usar IAM users/roles para acceso programático.`,
    },
  ],
  keyPoints: [
    "Root tiene acceso total e irrestricto a la cuenta AWS",
    "MFA obligatorio en root (primera medida de seguridad)",
    "No usar root para tareas diarias, crear IAM admin",
    "No crear access keys para root",
    "Solo root puede: cerrar cuenta, cambiar email, cambiar plan de soporte",
    "CloudTrail + alarmas para detectar uso de root",
    "SCPs pueden limitar root de cuentas miembro (no management)",
  ],
  tags: [
    "root",
    "seguridad",
    "MFA",
    "cuenta",
    "mejores prácticas",
    "CloudTrail",
    "Organizations",
  ],
  relatedServices: ["iam", "cloudtrail", "organizations"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
