import { Article } from "@/types";

export const securityGroupsNacls: Article = {
  id: "d2-art-03",
  slug: "security-groups-nacls",
  title: "Security Groups vs NACLs",
  shortDescription:
    "Comprende las diferencias entre los dos niveles de firewall en AWS VPC.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "Dos Niveles de Firewall",
      content: `AWS proporciona dos mecanismos de seguridad de red en VPC:

1. **Security Groups (SG):** Firewall a nivel de instancia (ENI)
2. **Network ACLs (NACL):** Firewall a nivel de subred

Ambos trabajan juntos para proteger tus recursos, pero funcionan de manera diferente.

\`\`\`
Internet
    │
    ▼
[Internet Gateway]
    │
    ▼
┌───────────────────────┐
│  Subred Pública       │ ◄── NACL (primer filtro)
│  ┌─────────────────┐  │
│  │    EC2          │  │ ◄── Security Group (segundo filtro)
│  └─────────────────┘  │
└───────────────────────┘
\`\`\``,
    },
    {
      title: "Security Groups",
      content: `### ¿Qué son?
Firewalls virtuales a nivel de **interfaz de red (ENI)**. Controlan el tráfico de entrada y salida de instancias.

### Características clave:

| Característica | Descripción |
|----------------|-------------|
| **Nivel** | Instancia (ENI) |
| **Estado** | Stateful (con estado) |
| **Reglas** | Solo ALLOW |
| **Evaluación** | Todas las reglas se evalúan |
| **Default** | Deny todo inbound, Allow todo outbound |

### Stateful significa:
Si permites tráfico de entrada, la respuesta sale automáticamente (y viceversa).

**Ejemplo:**
- Regla inbound: Allow TCP 443 desde 0.0.0.0/0
- La respuesta del servidor (salida) está automáticamente permitida
- No necesitas regla outbound explícita para la respuesta

### Sintaxis de reglas:

**Inbound (entrada):**
| Type | Protocol | Port Range | Source |
|------|----------|------------|--------|
| HTTPS | TCP | 443 | 0.0.0.0/0 |
| SSH | TCP | 22 | 10.0.0.0/16 |
| Custom | TCP | 3000 | sg-abc123 (otro SG) |

**Outbound (salida):**
| Type | Protocol | Port Range | Destination |
|------|----------|------------|-------------|
| All traffic | All | All | 0.0.0.0/0 |`,
    },
    {
      title: "Network ACLs (NACLs)",
      content: `### ¿Qué son?
Firewalls a nivel de **subred**. Todo el tráfico que entra o sale de la subred pasa por la NACL.

### Características clave:

| Característica | Descripción |
|----------------|-------------|
| **Nivel** | Subred |
| **Estado** | Stateless (sin estado) |
| **Reglas** | ALLOW y DENY |
| **Evaluación** | En orden numérico |
| **Default** | Allow todo (NACL por defecto) |

### Stateless significa:
Debes definir reglas tanto para entrada como para salida explícitamente.

**Ejemplo:**
- Para permitir HTTP: necesitas regla inbound puerto 80 Y regla outbound puertos efímeros (1024-65535)

### Sintaxis de reglas:

**Inbound:**
| Rule # | Type | Protocol | Port | Source | Allow/Deny |
|--------|------|----------|------|--------|------------|
| 100 | HTTP | TCP | 80 | 0.0.0.0/0 | ALLOW |
| 110 | HTTPS | TCP | 443 | 0.0.0.0/0 | ALLOW |
| * | All | All | All | 0.0.0.0/0 | DENY |

**Outbound:**
| Rule # | Type | Protocol | Port | Destination | Allow/Deny |
|--------|------|----------|------|-------------|------------|
| 100 | Custom | TCP | 1024-65535 | 0.0.0.0/0 | ALLOW |
| * | All | All | All | 0.0.0.0/0 | DENY |

### Evaluación por número:
Las reglas se evalúan en orden numérico ascendente. La primera que hace match se aplica.

**Ejemplo:**
- Rule 100: DENY SSH desde 1.2.3.4
- Rule 110: ALLOW SSH desde 0.0.0.0/0
- Resultado: SSH denegado solo para 1.2.3.4, permitido para el resto`,
    },
    {
      title: "Comparación Detallada",
      content: `### Security Groups vs NACLs

| Aspecto | Security Group | NACL |
|---------|----------------|------|
| **Aplica a** | Instancia (ENI) | Subred |
| **Stateful** | ✅ Sí | ❌ No |
| **Tipos de regla** | Solo Allow | Allow y Deny |
| **Regla default** | Deny implícito | Allow all (NACL default) |
| **Evaluación** | Todas las reglas | Primera que hace match |
| **Asociación** | Múltiples SG por instancia | Una NACL por subred |
| **Cambios** | Efecto inmediato | Efecto inmediato |

### Cuándo usar cada uno:

**Security Groups (uso principal):**
- Control granular por instancia
- Reglas basadas en otros Security Groups
- La mayoría de casos de uso

**NACLs:**
- Bloquear IPs específicas (deny rules)
- Capa adicional de defensa
- Control a nivel de subred`,
    },
    {
      title: "Patrones Comunes",
      content: `### Patrón: Web Server

**Security Group "web-sg":**
\`\`\`
Inbound:
- HTTP (80) desde 0.0.0.0/0
- HTTPS (443) desde 0.0.0.0/0
- SSH (22) desde 10.0.0.0/16 (solo VPC)

Outbound:
- All traffic to 0.0.0.0/0
\`\`\`

### Patrón: Base de Datos

**Security Group "db-sg":**
\`\`\`
Inbound:
- MySQL (3306) desde web-sg (referencia al SG del web server)

Outbound:
- All traffic to 0.0.0.0/0
\`\`\`

La referencia a otro SG es poderosa: permite tráfico de cualquier instancia que tenga ese SG, sin importar su IP.

### Patrón: Bloquear IP Maliciosa

**NACL (para bloquear 1.2.3.4):**
\`\`\`
Rule 50: DENY All from 1.2.3.4/32
Rule 100: ALLOW HTTPS from 0.0.0.0/0
...
\`\`\`

Usamos NACL porque Security Groups no permiten DENY.`,
    },
    {
      title: "Default Security Group vs Custom",
      content: `### Default Security Group (creado con la VPC)

**Inbound:**
- Allow todo desde instancias con el mismo SG

**Outbound:**
- Allow todo hacia 0.0.0.0/0

> ⚠️ El default SG permite comunicación entre todas las instancias que lo usan. Crea SGs personalizados para control granular.

### Default NACL (creada con la VPC)

**Inbound:**
- Rule *: ALLOW all from 0.0.0.0/0

**Outbound:**
- Rule *: ALLOW all to 0.0.0.0/0

> La NACL por defecto permite todo. Al crear NACLs custom, el default es DENY todo.

### Custom NACL (cuando creas una nueva)

**Inbound:**
- Rule *: DENY all

**Outbound:**
- Rule *: DENY all

Debes agregar reglas explícitas para permitir tráfico.`,
    },
    {
      title: "En el Examen CLF-C02",
      content: `### Puntos clave:

1. **Security Groups:** Stateful, nivel de instancia, solo Allow
2. **NACLs:** Stateless, nivel de subred, Allow y Deny
3. **Stateful:** Respuesta automática permitida
4. **Stateless:** Necesitas reglas explícitas en ambas direcciones
5. **Para bloquear IPs:** Usa NACL (tiene Deny)
6. **Referencia entre SGs:** Permite tráfico por grupo, no por IP

### Preguntas típicas:

*"¿Qué firewall opera a nivel de subred?"*
→ Network ACL (NACL)

*"¿Cómo bloquear una IP específica en VPC?"*
→ NACL con regla DENY

*"¿Por qué no necesito regla outbound en Security Group si permito inbound?"*
→ Porque es stateful, la respuesta sale automáticamente

*"¿Qué sucede si quiero permitir tráfico solo desde mis servidores web a mi base de datos?"*
→ En el SG de la DB, permite tráfico desde el SG del web server

*"¿En qué orden se evalúan las reglas de NACL?"*
→ En orden numérico ascendente`,
    },
  ],
  keyPoints: [
    "Security Groups: Nivel instancia, stateful, solo Allow",
    "NACLs: Nivel subred, stateless, Allow y Deny",
    "Stateful: Respuesta automática (no necesita regla outbound)",
    "Stateless: Necesitas reglas en ambas direcciones",
    "Para bloquear IPs: NACL (única opción con Deny)",
    "SG puede referenciar otro SG (tráfico por grupo)",
    "NACL evalúa reglas en orden numérico",
  ],
  tags: [
    "Security Groups",
    "NACL",
    "firewall",
    "VPC",
    "seguridad de red",
    "stateful",
    "stateless",
  ],
  relatedServices: ["vpc", "ec2"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
