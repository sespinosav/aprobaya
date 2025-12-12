import { Article } from "@/types";

export const dedicatedHosts: Article = {
  id: "d4-art-09",
  slug: "dedicated-hosts",
  title: "EC2 Dedicated Hosts y Dedicated Instances",
  shortDescription:
    "Diferencias entre instancias dedicadas y hosts dedicados para cumplimiento de licencias.",
  domainId: "domain4",
  content: {
    introduction:
      "AWS ofrece opciones de tenencia dedicada para workloads que requieren aislamiento físico o cumplimiento de licencias específicas. Entender la diferencia entre Dedicated Instances y Dedicated Hosts es crucial para el examen.",
    sections: [
      {
        title: "Modelos de Tenencia EC2",
        content: `**Tres modelos de tenencia disponibles:**

**1. Shared (Default):**
- Hardware compartido con otros clientes
- Aislamiento a nivel de hipervisor
- Más económico
- Suficiente para la mayoría de workloads

**2. Dedicated Instance:**
- Hardware dedicado a tu cuenta
- No controlas placement físico
- Más costoso que shared

**3. Dedicated Host:**
- Servidor físico dedicado a tu uso
- Control total del placement
- Visibilidad de sockets y cores
- Más costoso

**Comparación:**
\`\`\`
Característica        | Shared | Dedicated Instance | Dedicated Host
---------------------|--------|-------------------|---------------
Hardware dedicado    |   ❌   |        ✅         |      ✅
Control de placement |   ❌   |        ❌         |      ✅
Visibilidad sockets  |   ❌   |        ❌         |      ✅
BYOL soportado       |   ❌   |        ❌         |      ✅
Costo               | Bajo   |      Medio        |     Alto
\`\`\``,
      },
      {
        title: "Dedicated Instances",
        content: `**Hardware dedicado a nivel de cuenta AWS:**

**Características:**
- Instancias corren en hardware dedicado a tu cuenta
- Pueden compartir hardware con otras instancias de TU cuenta
- Sin control sobre qué servidor físico
- Puede moverse entre hosts durante stop/start

**Cuándo usar:**
- Requisitos regulatorios de aislamiento
- Políticas de seguridad corporativa
- No necesitas BYOL

**Pricing:**
\`\`\`
Costo = Instance fee + Dedicated fee

Instance fee: Precio por hora según tipo
Dedicated fee: $2/hora por región (por cuenta)

Ejemplo:
1 m5.large dedicated = ~$0.096/hr + $2/hr región
= $2.096/hora total

10 m5.large dedicated = ~$0.96/hr + $2/hr región
= $2.96/hora total
\`\`\`

**Configuración:**
- Al lanzar: Tenancy = dedicated
- O usar VPC con tenancy dedicada`,
        note: "El fee de $2/hr por región es único sin importar cuántas instancias dedicadas ejecutes.",
      },
      {
        title: "Dedicated Hosts",
        content: `**Servidor físico completo dedicado:**

**Características:**
- Servidor físico asignado a tu cuenta
- Visibilidad de sockets, cores, host ID
- Control de placement de instancias
- Instancias permanecen en el mismo host
- Soporta BYOL (Bring Your Own License)

**Información visible:**
\`\`\`
Host ID: h-0a1b2c3d4e5f6g7h8
Sockets: 2
Cores: 24
Instance Family: m5
Available capacity: 4 x m5.xlarge
\`\`\`

**Casos de uso:**
- **BYOL (Bring Your Own License)**
  - Windows Server
  - SQL Server
  - Oracle Database
  - Licencias por socket/core

- **Cumplimiento regulatorio**
  - Requisitos de aislamiento estricto
  - Auditorías de seguridad

- **Control de placement**
  - Afinidad de instancias
  - Requisitos de compliance`,
      },
      {
        title: "BYOL (Bring Your Own License)",
        content: `**Usa tus licencias existentes en AWS:**

**El problema:**
\`\`\`
Muchas licencias de software son:
- Por socket físico
- Por core físico  
- Por servidor físico

En instancias compartidas NO sabes:
- Cuántos sockets tiene el host
- Cuántos cores tiene el host
- Qué servidor físico usas
\`\`\`

**La solución - Dedicated Hosts:**
\`\`\`
Sabes exactamente:
- Host ID específico
- Número de sockets
- Número de cores
- Puedes reportar a tu vendor de licencias
\`\`\`

**Licencias comunes BYOL:**
- Microsoft Windows Server
- Microsoft SQL Server
- Oracle Database
- SAP HANA
- RHEL (Red Hat)

**Requisitos:**
1. Verificar términos de licencia con el vendor
2. Usar Dedicated Hosts (no Dedicated Instances)
3. Mantener registros para auditoría
4. Algunos vendors requieren License Manager

**AWS License Manager:**
- Trackea uso de licencias
- Aplica reglas de licensing
- Reportes de cumplimiento
- Funciona con Dedicated Hosts`,
        note: "BYOL solo funciona con Dedicated Hosts porque necesitas visibilidad del hardware físico.",
      },
      {
        title: "Pricing de Dedicated Hosts",
        content: `**Modelos de precio:**

**On-Demand:**
\`\`\`
Pagas por hora de uso del host completo

Ejemplo m5 host:
- ~$4.994/hora
- Incluye capacidad para múltiples instancias
- Sin compromiso

Costo mensual (24/7):
$4.994 × 730 hrs = ~$3,646/mes
\`\`\`

**Savings Plans:**
\`\`\`
Compromiso de 1 o 3 años
Descuentos hasta 72%

Con Savings Plan:
~$1,400/mes (1 año, partial upfront)
~$1,100/mes (3 años, all upfront)
\`\`\`

**Host Reservation:**
\`\`\`
Reserva el host específico
Similar a Reserved Instances
1 o 3 años
Descuentos significativos
\`\`\`

**Comparación m5.xlarge (24/7):**
\`\`\`
Opción                  | Costo/mes | Notas
------------------------|-----------|-------
Shared On-Demand        |    $140   | 1 instancia
Dedicated Instance      |    $1,600 | $140 + $1,460 fee
Dedicated Host On-Demand|    $3,646 | Host completo
Dedicated Host Reserved |    $1,100 | 3yr all upfront
\`\`\``,
      },
      {
        title: "Cuándo Usar Cada Opción",
        content: `**Decision tree:**

\`\`\`
¿Necesitas BYOL?
├── SÍ → Dedicated Host
│
└── NO → ¿Requisito de aislamiento físico?
         ├── SÍ → ¿Necesitas control de placement?
         │        ├── SÍ → Dedicated Host
         │        └── NO → Dedicated Instance
         │
         └── NO → Shared (Default)
\`\`\`

**Resumen por caso:**

**Usa Shared cuando:**
- Sin requisitos especiales de aislamiento
- Quieres el menor costo posible
- Compliance permite multi-tenant

**Usa Dedicated Instances cuando:**
- Compliance requiere aislamiento físico
- No necesitas BYOL
- No necesitas control de placement
- Presupuesto moderado

**Usa Dedicated Hosts cuando:**
- BYOL es requerido
- Necesitas visibilidad de sockets/cores
- Control de placement es necesario
- Auditorías de licencias
- Presupuesto permite el costo

**Para el examen:**
- BYOL = Dedicated Host (siempre)
- Aislamiento sin BYOL = Dedicated Instance (más económico)
- Por defecto = Shared`,
        note: "Pregunta clave: ¿Menciona licencias por socket o BYOL? Si sí, la respuesta es Dedicated Host.",
      },
    ],
  },
  keyTakeaways: [
    "Dedicated Host: servidor físico completo con visibilidad de sockets/cores",
    "Dedicated Instance: hardware dedicado sin control de placement",
    "BYOL (Bring Your Own License) requiere Dedicated Hosts obligatoriamente",
    "Dedicated Instances cobran fee de $2/hr por región adicional",
    "Shared tenancy es suficiente para la mayoría de workloads",
  ],
  relatedQuestions: ["q97"],
  tags: ["EC2", "Dedicated Hosts", "BYOL", "licencias", "tenencia"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
