import { Article } from "@/types";

export const amazonGuardduty: Article = {
  id: "d2-art-06",
  slug: "amazon-guardduty",
  title: "Amazon GuardDuty",
  shortDescription:
    "Detección inteligente de amenazas para proteger tus cuentas y cargas de trabajo AWS.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "¿Qué es Amazon GuardDuty?",
      content: `**Amazon GuardDuty** es un servicio de detección de amenazas que monitorea continuamente tus cuentas AWS buscando actividad maliciosa y comportamiento no autorizado.

### Características principales:
- **Inteligente:** Usa machine learning y threat intelligence
- **Sin agentes:** No requiere instalar software en tus recursos
- **Automatizado:** Analiza continuamente sin intervención manual
- **Fácil de activar:** Un clic para habilitarlo

### ¿Qué detecta?
- Cuentas comprometidas
- Instancias infectadas con malware
- Reconocimiento por parte de atacantes
- Comunicación con IPs maliciosas
- Minería de criptomonedas no autorizada`,
    },
    {
      title: "Fuentes de Datos",
      content: `### GuardDuty analiza automáticamente:

| Fuente | Qué detecta |
|--------|-------------|
| **VPC Flow Logs** | Tráfico de red inusual, comunicación con IPs maliciosas |
| **CloudTrail Events** | Llamadas API sospechosas, acceso inusual |
| **CloudTrail Management Events** | Cambios de configuración sospechosos |
| **DNS Logs** | Consultas DNS a dominios maliciosos |
| **EKS Audit Logs** | Actividad sospechosa en Kubernetes |
| **S3 Data Events** | Acceso inusual a buckets S3 |
| **RDS Login Activity** | Intentos de login sospechosos |
| **Lambda Network Activity** | Tráfico inusual de funciones Lambda |

### No necesitas habilitar estas fuentes manualmente
GuardDuty accede a ellas directamente sin que tengas que configurar logging.`,
    },
    {
      title: "Tipos de Hallazgos (Findings)",
      content: `### Categorías de amenazas:

**Reconocimiento (Recon):**
- Escaneo de puertos
- Enumeración de API inusual
- Sondeo desde IPs sospechosas

**Instancia Comprometida:**
- Comunicación con IPs de comando y control
- Malware conocido
- Criptominería

**Cuenta Comprometida:**
- Llamadas API desde ubicaciones inusuales
- Credenciales usadas desde IPs maliciosas
- Deshabilitación de logs de seguridad

**Bucket Comprometido:**
- Acceso desde IPs de Tor
- Acceso anómalo a datos sensibles
- Cambios de políticas sospechosos

### Severidad de Findings:

| Severidad | Rango | Significado |
|-----------|-------|-------------|
| **Low** | 0.1 - 3.9 | Actividad sospechosa, investigar |
| **Medium** | 4.0 - 6.9 | Actividad potencialmente maliciosa |
| **High** | 7.0 - 8.9 | Recurso comprometido, actuar urgente |
| **Critical** | 9.0 - 10.0 | Amenaza activa confirmada |`,
    },
    {
      title: "Ejemplos de Findings",
      content: `### Finding: CryptoCurrency:EC2/BitcoinTool.B!DNS

**Significado:** Una instancia EC2 está consultando dominios asociados con minería de Bitcoin.

**Acción recomendada:**
1. Investigar la instancia
2. Verificar si la minería es autorizada
3. Si no es autorizada, aislar y remediar

### Finding: UnauthorizedAccess:IAMUser/ConsoleLogin

**Significado:** Login exitoso a la consola desde una IP que no se ha visto antes.

**Acción recomendada:**
1. Verificar si el usuario reconoce el login
2. Revisar ubicación geográfica
3. Si es sospechoso, revocar sesiones y rotar credenciales

### Finding: Recon:EC2/PortProbeUnprotectedPort

**Significado:** Un puerto abierto está siendo escaneado desde Internet.

**Acción recomendada:**
1. Verificar si el puerto debe estar abierto
2. Revisar Security Groups
3. Considerar bloquear IP en NACL si es maliciosa`,
    },
    {
      title: "Integración y Automatización",
      content: `### EventBridge para automatización

GuardDuty envía findings a EventBridge, permitiendo automatización:

\`\`\`
[GuardDuty Finding] → [EventBridge Rule] → [Lambda] → [Respuesta]
\`\`\`

**Ejemplos de automatización:**
- Enviar alerta a Slack cuando severity > Medium
- Bloquear IP automáticamente en NACL
- Aislar instancia EC2 cambiando Security Group
- Crear ticket en sistema de incidentes

### Integración con Security Hub

GuardDuty envía findings a **AWS Security Hub**, que centraliza alertas de múltiples servicios de seguridad.

### Integración con Detective

**Amazon Detective** ayuda a investigar findings de GuardDuty:
- Visualiza relaciones entre recursos
- Timeline de actividad
- Análisis forense facilitado`,
    },
    {
      title: "Configuración y Costos",
      content: `### Activación

**Por cuenta individual:**
1. Ir a GuardDuty en la consola
2. Click en "Get Started"
3. Click en "Enable GuardDuty"

**Para Organizations:**
1. Designar cuenta de administrador delegado
2. Habilitar automáticamente para cuentas nuevas
3. Centralizar findings en una cuenta

### Trusted IP Lists y Threat Lists

**Trusted IP List:**
IPs que GuardDuty debe ignorar (ej: tu VPN corporativa)

**Threat Intelligence List:**
IPs adicionales que consideras maliciosas

### Costos

GuardDuty cobra por:
- Volumen de eventos de CloudTrail analizados
- Volumen de VPC Flow Logs analizados
- Volumen de DNS queries analizados

**Free Tier:**
30 días de prueba gratuita con estimación de costos.

**Costo típico:**
Empresas medianas: $100-500/mes
Varía significativamente según volumen de actividad`,
    },
    {
      title: "GuardDuty en el Examen",
      content: `### Puntos clave:

1. **Detección de amenazas:** ML + threat intelligence
2. **Sin agentes:** No instala nada en instancias
3. **Fuentes:** VPC Flow Logs, CloudTrail, DNS logs
4. **Findings:** Alertas categorizadas por severidad
5. **Automatización:** Integración con EventBridge
6. **Multi-cuenta:** Gestión centralizada con Organizations

### Diferencias con otros servicios:

| Servicio | Propósito |
|----------|-----------|
| **GuardDuty** | Detecta amenazas activas |
| **Inspector** | Escanea vulnerabilidades en EC2/ECR |
| **Macie** | Descubre datos sensibles en S3 |
| **Security Hub** | Centraliza findings de todos |

### Preguntas típicas:

*"¿Qué servicio detecta criptominería no autorizada en EC2?"*
→ Amazon GuardDuty

*"¿Qué servicio usa ML para detectar actividad maliciosa en cuentas AWS?"*
→ Amazon GuardDuty

*"¿Qué servicio puede detectar credenciales IAM comprometidas?"*
→ Amazon GuardDuty

*"¿Cómo automatizar respuesta a hallazgos de seguridad?"*
→ GuardDuty + EventBridge + Lambda`,
    },
  ],
  keyPoints: [
    "GuardDuty: Detección inteligente de amenazas con ML",
    "Sin agentes: No requiere instalar software",
    "Analiza: VPC Flow Logs, CloudTrail, DNS logs automáticamente",
    "Findings: Alertas con severidad (Low, Medium, High, Critical)",
    "Detecta: Cuentas comprometidas, malware, criptominería",
    "Automatización: Integración con EventBridge y Lambda",
    "Multi-cuenta: Gestión centralizada con Organizations",
  ],
  tags: [
    "GuardDuty",
    "detección de amenazas",
    "seguridad",
    "ML",
    "findings",
    "malware",
    "criptominería",
  ],
  relatedServices: ["guardduty", "security-hub", "detective"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
