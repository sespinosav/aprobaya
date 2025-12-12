import { Article } from "@/types";

export const appstreamWorkspaces: Article = {
  id: "d3-art-23",
  slug: "appstream-workspaces-comparacion",
  title: "Amazon AppStream 2.0 vs WorkSpaces",
  shortDescription:
    "Comprende las diferencias entre streaming de aplicaciones y escritorios virtuales completos.",
  domainId: "domain3",
  content: {
    introduction:
      "AWS ofrece dos servicios principales para acceso remoto: Amazon AppStream 2.0 para streaming de aplicaciones específicas y Amazon WorkSpaces para escritorios virtuales completos. Entender sus diferencias es clave para elegir la solución correcta.",
    sections: [
      {
        title: "Amazon AppStream 2.0: Streaming de Aplicaciones",
        content: `**¿Qué es AppStream 2.0?**
Servicio que permite **hacer streaming de aplicaciones de escritorio** a navegadores web.

**Cómo funciona:**
- La aplicación corre en AWS
- El usuario ve la aplicación en su navegador
- No requiere instalación local
- Solo la aplicación, no el escritorio completo

**Casos de uso:**
- Software que no puede instalarse en dispositivos de usuario
- Aplicaciones con licencias específicas
- Training y demos de software
- Acceso a CAD, diseño, desarrollo desde cualquier lugar

**Ejemplo:**
\`\`\`
Usuario en navegador
        │
        ▼
   AppStream 2.0
   ┌──────────────┐
   │ AutoCAD      │ ←── Solo esta aplicación
   │ running      │     se ve en el navegador
   └──────────────┘
\`\`\`

**Características:**
- Completamente administrado
- Escala bajo demanda
- Stateless (sin datos persistentes por defecto)
- Fleet de instancias compartidas`,
      },
      {
        title: "Comparación Directa",
        content: `| Característica | AppStream 2.0 | WorkSpaces |
|---------------|---------------|------------|
| Qué ofrece | App específica | Desktop completo |
| Persistencia | No (por defecto) | Sí (user volume) |
| Caso de uso | Una app | Trabajo diario |
| Acceso | Solo navegador | Apps nativas + web |
| Modelo de precio | Por hora de uso | Hourly o Monthly |
| Licencias Windows | No necesita | Incluida |
| Usuario requiere | Solo navegador | Cliente instalado |

**AppStream:**
- "Quiero que mis usuarios usen AutoCAD sin instalarlo"
- Acceso a una aplicación específica
- Sesiones efímeras

**WorkSpaces:**
- "Quiero que mis usuarios tengan su escritorio desde cualquier lugar"
- Acceso a múltiples aplicaciones
- Escritorio persistente

**Analogía:**
- **AppStream**: Ir a un café a usar una computadora (no es tuya)
- **WorkSpaces**: Tu laptop en la nube (configurada como quieres)`,
      },
      {
        title: "Arquitectura de AppStream 2.0",
        content: `**Componentes:**

**Image:**
- AMI con aplicaciones instaladas
- Tú instalas el software necesario
- Se usa como base para fleets

**Fleet:**
- Conjunto de instancias streaming
- **Always-On**: Siempre disponible, costo continuo
- **On-Demand**: Se inicia cuando se necesita, latencia inicial

**Stack:**
- Configuración de acceso
- Políticas de usuario
- Almacenamiento (opcional)

**Flujo de trabajo:**
\`\`\`
1. Crear Image Builder (instancia para configurar)
2. Instalar aplicaciones
3. Crear Image
4. Crear Fleet (basado en Image)
5. Crear Stack
6. Asociar Fleet a Stack
7. Usuarios acceden via URL/SAML
\`\`\`

**Persistencia de datos:**
- Por defecto: Stateless (todo se pierde al cerrar)
- Opcional: Home folders en S3
- Opcional: Application settings persistence`,
      },
      {
        title: "Tipos de Instancias y Precios",
        content: `**AppStream 2.0 Instance Types:**
| Familia | Uso | Ejemplo |
|---------|-----|---------|
| General Purpose | Productividad | stream.standard.medium |
| Compute Optimized | Compiling, simulations | stream.compute.large |
| Memory Optimized | Databases, analytics | stream.memory.large |
| Graphics | CAD, 3D | stream.graphics.g4dn.xlarge |
| Graphics Pro | Video, ML | stream.graphics-pro.4xlarge |

**Modelo de precios AppStream:**
- Pago por hora de instancia running
- Pago por hora de usuario conectado
- Storage para user data opcional

**Ejemplo de costos:**
| Tipo | Running/hr | User/hr | Total (8 hrs) |
|------|-----------|---------|---------------|
| standard.medium | $0.065 | $0.05 | ~$0.92/día |
| graphics.g4dn.xlarge | $0.616 | $0.08 | ~$5.57/día |

**Optimización de costos:**
- On-Demand fleets para uso esporádico
- Scaling policies para ajustar capacidad
- Reserved capacity para uso predecible`,
      },
      {
        title: "Cuándo Usar Cada Servicio",
        content: `**Elige AppStream 2.0 cuando:**
- Usuarios necesitan acceso a una app específica
- No quieres mantener licencias en dispositivos
- Necesitas demos o training de software
- Compliance requiere que datos no salgan de AWS
- Usuarios usan diferentes tipos de dispositivos

**Elige WorkSpaces cuando:**
- Usuarios necesitan escritorio completo
- Trabajo diario con múltiples aplicaciones
- Datos de usuario deben persistir
- Reemplazo de laptops/desktops
- Trabajo remoto full-time

**Escenarios híbridos:**
\`\`\`
Ejemplo empresa:
├── Desarrolladores: WorkSpaces (IDE, múltiples tools)
├── Diseñadores: AppStream (Photoshop licenciado)
├── Contratistas: AppStream (acceso limitado a 1 app)
└── Ejecutivos: WorkSpaces (escritorio completo)
\`\`\`

**Comparación con terceros:**
| Servicio | Tipo | Comparable con |
|----------|------|----------------|
| AppStream 2.0 | App streaming | Citrix XenApp |
| WorkSpaces | VDI | Citrix XenDesktop, VMware Horizon |

**Beneficio de ambos sobre on-premises:**
- Sin infraestructura que mantener
- Escalado elástico
- Pago por uso
- Global reach`,
        note: "Muchas empresas usan ambos servicios: WorkSpaces para empleados full-time y AppStream para apps específicas o contratistas.",
      },
      {
        title: "Integración y Seguridad",
        content: `**Autenticación:**
- **AppStream**: SAML 2.0, User Pool
- **WorkSpaces**: Active Directory (AWS Managed o AD Connector)

**Integración con AD:**
- Ambos soportan Microsoft Active Directory
- SSO con credenciales corporativas
- Group policies

**Seguridad común:**
- Cifrado en tránsito
- Datos en AWS (no en dispositivo local)
- VPC para aislamiento de red
- Logging con CloudTrail

**AppStream específico:**
- Session recording
- Watermarking
- Bloqueo de clipboard

**WorkSpaces específico:**
- MFA
- Acceso por IP
- Device certificates

**Arquitectura segura:**
\`\`\`
Usuario remoto
       │ (HTTPS/WSP)
       ▼
Internet Gateway
       │
    NAT Gateway (opcional)
       │
   Private Subnet
       │
  ┌────┴────┐
  │ AppStream│ ←→ Active Directory
  │   or    │
  │WorkSpaces│ ←→ File Shares (FSx)
  └─────────┘
\`\`\``,
      },
    ],
  },
  keyTakeaways: [
    "AppStream 2.0 hace streaming de aplicaciones específicas al navegador",
    "WorkSpaces provee escritorios virtuales completos persistentes",
    "AppStream: stateless por defecto, WorkSpaces: persistente",
    "AppStream ideal para una app, WorkSpaces para trabajo diario completo",
    "Ambos mantienen datos en AWS, mejorando seguridad",
  ],
  relatedQuestions: ["q72", "q73"],
  tags: ["AppStream", "WorkSpaces", "VDI", "streaming", "escritorios virtuales"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
