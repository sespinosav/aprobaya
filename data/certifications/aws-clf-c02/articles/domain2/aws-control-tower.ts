import { Article } from "@/types";

export const awsControlTower: Article = {
  id: "d2-art-13",
  slug: "aws-control-tower",
  title: "AWS Control Tower",
  shortDescription:
    "Configura y gobierna un entorno AWS multi-cuenta seguro y conforme.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "¿Qué es AWS Control Tower?",
      content: `**AWS Control Tower** es un servicio que facilita la configuración y gobernanza de un entorno AWS multi-cuenta seguro basado en mejores prácticas.

### El problema que resuelve:

Cuando una empresa crece en AWS:
\`\`\`
❌ Múltiples cuentas sin estándares
❌ Configuraciones de seguridad inconsistentes
❌ Difícil mantener compliance
❌ Sin visibilidad centralizada
\`\`\`

Con Control Tower:
\`\`\`
✅ Landing zone pre-configurada
✅ Guardrails de seguridad automáticos
✅ Creación de cuentas estandarizada
✅ Dashboard centralizado de compliance
\`\`\``,
    },
    {
      title: "Componentes Principales",
      content: `### Landing Zone

Una **Landing Zone** es un entorno multi-cuenta bien arquitectado.

Control Tower crea automáticamente:
- **Management Account:** Cuenta raíz de la organización
- **Log Archive Account:** Centraliza logs de CloudTrail y Config
- **Audit Account:** Para equipos de seguridad y compliance

### Organizational Units (OUs)

Control Tower organiza cuentas en OUs:
- **Security OU:** Log Archive y Audit accounts
- **Sandbox OU:** Para experimentación
- **Custom OUs:** Las que necesites (Production, Development, etc.)

### Account Factory

Proceso estandarizado para crear nuevas cuentas:
- Plantillas pre-configuradas
- Guardrails aplicados automáticamente
- Integración con Service Catalog
- Personalización por tipo de cuenta

### Guardrails (ahora llamados Controls)

Reglas que gobiernan las cuentas:
- **Preventive:** Impiden acciones (usan SCPs)
- **Detective:** Detectan violaciones (usan Config Rules)
- **Proactive:** Verifican antes de desplegar (usan hooks de CFN)`,
    },
    {
      title: "Guardrails / Controls",
      content: `### Tipos de Guardrails:

| Tipo | Implementación | Efecto |
|------|----------------|--------|
| **Preventive** | Service Control Policies | Bloquea la acción |
| **Detective** | AWS Config Rules | Alerta sobre violaciones |
| **Proactive** | CloudFormation Hooks | Verifica antes de crear |

### Categorías de Guardrails:

**Mandatory (Obligatorios):**
Siempre activos, no se pueden desactivar.
- No permitir cambios a la configuración de CloudTrail
- No permitir eliminar cuentas Log Archive o Audit

**Strongly Recommended:**
Mejores prácticas de seguridad.
- Habilitar cifrado en EBS por defecto
- No permitir acceso público a S3 buckets

**Elective:**
Opcionales según tus necesidades.
- Requerir tags específicos en recursos
- Restringir regiones permitidas

### Ejemplos de Guardrails:

| Guardrail | Tipo | Descripción |
|-----------|------|-------------|
| Disallow S3 public access | Preventive | Bloquea configuración pública |
| Detect S3 public access | Detective | Alerta si bucket es público |
| Require encryption | Preventive | Bloquea recursos sin cifrar |
| Detect unencrypted EBS | Detective | Alerta si EBS no cifrado |`,
    },
    {
      title: "Account Factory",
      content: `### Proceso de Creación de Cuentas

**Antes de Control Tower:**
1. Crear cuenta manualmente
2. Configurar IAM, CloudTrail, Config...
3. Aplicar políticas de seguridad
4. Configurar networking
5. Olvidar algo importante...

**Con Account Factory:**
1. Ir a Control Tower → Account Factory
2. Seleccionar template de cuenta
3. Especificar detalles (nombre, email, OU)
4. ¡Listo! Cuenta creada con toda la configuración

### Customization:

**Account Factory Customization (AFC):**
- Blueprints personalizados
- Recursos adicionales por tipo de cuenta
- Integración con tu IaC existente

**Ejemplo de Blueprint:**
\`\`\`
Blueprint "Development Account":
- VPC con 3 subnets privadas
- VPC Flow Logs habilitados
- Tags de costo predefinidos
- Roles IAM estándar para desarrolladores
\`\`\`

### Integración con Service Catalog

Los usuarios pueden solicitar cuentas desde Service Catalog como self-service controlado.`,
    },
    {
      title: "Dashboard y Visibilidad",
      content: `### Control Tower Dashboard

**Vista centralizada de:**
- Todas las cuentas en la organización
- Estado de compliance por cuenta
- Guardrails activos
- Violaciones detectadas

### Estados de Compliance:

| Estado | Significado |
|--------|-------------|
| **Compliant** | Todos los guardrails cumplidos |
| **Non-compliant** | Hay violaciones |
| **Unknown** | No se puede determinar |

### Notificaciones

Control Tower envía notificaciones sobre:
- Nuevas cuentas creadas
- Violaciones de guardrails
- Cambios de compliance
- Problemas de configuración

### Integración con Security Hub

Los findings de los guardrails detective se envían a Security Hub para vista consolidada de seguridad.`,
    },
    {
      title: "Control Tower vs Organizations",
      content: `### ¿Cuál es la diferencia?

**AWS Organizations:**
- Servicio base para multi-cuenta
- Crea la estructura de cuentas y OUs
- Permite SCPs manuales
- Billing consolidado

**AWS Control Tower:**
- Construido SOBRE Organizations
- Automatiza la configuración
- Landing zone pre-configurada
- Guardrails y Account Factory
- Dashboard de compliance

### Cuándo usar cada uno:

**Solo Organizations:**
- Ya tienes configuración multi-cuenta madura
- Necesitas control muy personalizado
- Equipo experimentado en AWS

**Control Tower + Organizations:**
- Nueva implementación multi-cuenta
- Quieres mejores prácticas desde el inicio
- Necesitas gobernanza automatizada
- Quieres Account Factory para self-service`,
    },
    {
      title: "Control Tower en el Examen",
      content: `### Puntos clave:

1. **Landing Zone:** Entorno multi-cuenta pre-configurado
2. **Guardrails:** Preventive (SCPs), Detective (Config Rules)
3. **Account Factory:** Creación estandarizada de cuentas
4. **Construido sobre Organizations** (no lo reemplaza)
5. **Log Archive + Audit accounts:** Creadas automáticamente
6. **Dashboard:** Visibilidad centralizada de compliance

### Preguntas típicas:

*"¿Qué servicio ayuda a configurar un entorno AWS multi-cuenta seguro?"*
→ AWS Control Tower

*"¿Cómo implementar guardrails preventivos en múltiples cuentas?"*
→ AWS Control Tower con guardrails (que usan SCPs)

*"¿Qué servicio facilita la creación estandarizada de nuevas cuentas AWS?"*
→ AWS Control Tower Account Factory

*"¿Cuál es la diferencia entre Control Tower y Organizations?"*
→ Control Tower se construye sobre Organizations y añade automatización, guardrails y Account Factory

*"¿Qué cuentas crea Control Tower automáticamente?"*
→ Management Account, Log Archive Account, Audit Account`,
    },
  ],
  keyPoints: [
    "Control Tower: Gobernanza de entorno AWS multi-cuenta",
    "Landing Zone: Configuración inicial con mejores prácticas",
    "Guardrails: Preventive (SCPs), Detective (Config Rules)",
    "Account Factory: Creación estandarizada de cuentas",
    "Construido sobre Organizations (lo complementa)",
    "Crea automáticamente: Management, Log Archive, Audit accounts",
    "Dashboard centralizado de compliance",
  ],
  tags: [
    "Control Tower",
    "multi-cuenta",
    "landing zone",
    "guardrails",
    "gobernanza",
    "Organizations",
    "compliance",
  ],
  relatedServices: ["control-tower", "organizations", "config"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
