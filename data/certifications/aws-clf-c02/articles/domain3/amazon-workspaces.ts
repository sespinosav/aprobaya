import { Article } from "@/types";

export const amazonWorkspaces: Article = {
  id: "d3-art-14",
  slug: "amazon-workspaces",
  title: "Amazon WorkSpaces: Escritorios Virtuales en la Nube",
  shortDescription:
    "Despliega escritorios virtuales Windows o Linux seguros para usuarios remotos.",
  domainId: "domain3",
  content: {
    introduction:
      "Amazon WorkSpaces es un servicio de Desktop as a Service (DaaS) completamente administrado que permite provisionar escritorios virtuales Windows o Linux seguros en minutos y escalar rápidamente para proporcionar escritorios a trabajadores en todo el mundo.",
    sections: [
      {
        title: "¿Qué es Amazon WorkSpaces?",
        content: `WorkSpaces es un servicio de **escritorios virtuales en la nube** (VDI/DaaS).

**Concepto:**
- Un escritorio Windows o Linux ejecutándose en AWS
- Los usuarios se conectan desde cualquier dispositivo
- Datos y procesamiento en la nube, no en el dispositivo local

**Beneficios:**
- **Acceso desde cualquier lugar**: PC, Mac, tablets, thin clients
- **Seguridad centralizada**: Datos no residen en dispositivos locales
- **Rápido despliegue**: Minutos vs semanas para VDI tradicional
- **Escalabilidad**: Agregar/quitar escritorios según necesidad
- **Bajo mantenimiento**: AWS gestiona la infraestructura

**Casos de uso:**
- Trabajo remoto y teletrabajo
- Contratistas y empleados temporales
- BYOD (Bring Your Own Device)
- Fusiones y adquisiciones
- Cumplimiento regulatorio
- Desarrollo y testing`,
      },
      {
        title: "Bundles Disponibles",
        content: `**Bundles son las configuraciones de hardware virtual:**

**Bundles estándar:**
| Bundle | vCPUs | RAM | Almacenamiento | Uso típico |
|--------|-------|-----|----------------|-----------|
| Value | 1 | 2 GB | 10 GB + 10 GB | Tareas básicas |
| Standard | 2 | 4 GB | 50 GB + 50 GB | Office, web |
| Performance | 2 | 8 GB | 100 GB + 100 GB | Desarrollo |
| Power | 4 | 16 GB | 175 GB + 100 GB | Análisis datos |
| PowerPro | 8 | 32 GB | 175 GB + 100 GB | CAD, 3D |
| Graphics | GPU | 15 GB | 100 GB + 100 GB | Diseño, rendering |
| GraphicsPro | GPU | 122 GB | 100 GB + 100 GB | ML, video |

**Sistemas operativos:**
- Windows 10, Windows 11
- Windows Server 2016, 2019, 2022
- Amazon Linux 2

**Almacenamiento:**
- Root volume: Sistema operativo
- User volume: Datos del usuario (persiste entre sesiones)

**Personalización:**
- Crear imágenes personalizadas (custom bundles)
- Incluir aplicaciones pre-instaladas
- Configuraciones de empresa`,
      },
      {
        title: "Arquitectura y Conexión",
        content: `**Componentes:**
- **Directory**: AWS Managed Microsoft AD o Simple AD
- **WorkSpaces**: Los escritorios virtuales
- **Clients**: Aplicaciones para conectarse

**Arquitectura típica:**
\`\`\`
Usuarios remotos
    │
    ├── Internet
    │   └── WorkSpaces client
    │
    └── Corporate Network
        └── WorkSpaces Gateway
            │
            VPC
        ┌───┴───┐
        │  AD   │
        └───────┘
            │
    ┌───────┼───────┐
┌───┴───┐ ┌───┴───┐ ┌───┴───┐
│  WS1  │ │  WS2  │ │  WS3  │
└───────┘ └───────┘ └───────┘
\`\`\`

**Clientes disponibles:**
- Windows, macOS, Linux
- iPad, Android tablets
- Chromebook
- Fire tablets
- Web browser (Zero Client)

**Protocolo de streaming:**
- PCoIP (PC over IP) - legacy
- WSP (WorkSpaces Streaming Protocol) - nuevo, recomendado
- Compresión adaptativa según ancho de banda`,
      },
      {
        title: "Seguridad y Gestión",
        content: `**Características de seguridad:**
- **Cifrado**: Volúmenes cifrados en reposo con KMS
- **MFA**: Multi-Factor Authentication soportado
- **Acceso condicional**: Por IP, por tipo de dispositivo
- **Aislamiento de red**: VPC privada
- **Sin datos locales**: Todo permanece en AWS

**Políticas de grupo:**
- Aplicar Group Policies estándar
- Controlar instalación de software
- Configurar restricciones de usuario

**Control de dispositivos:**
- Restringir copy/paste entre WorkSpace y local
- Controlar redirección de impresoras
- Bloquear dispositivos USB
- Control de acceso por certificado de cliente

**Monitoreo:**
- CloudWatch para métricas
- Amazon EventBridge para eventos
- Logs de conexión

**Updates:**
- Maintenance windows configurables
- Patches automáticos del OS
- Control de reinicio`,
      },
      {
        title: "Modelos de Precio",
        content: `**Dos modelos de facturación:**

**Hourly (por hora):**
- Pago solo cuando el WorkSpace está en uso
- Se cobra tarifa de infraestructura pequeña 24/7
- Bueno para uso ocasional (< 80 horas/mes)

**Monthly (mensual):**
- Tarifa fija por mes
- Mejor para uso frecuente (> 80 horas/mes)
- Más predecible para presupuestos

**Ejemplo de precios (Standard Bundle, us-east-1):**
| Modelo | Precio |
|--------|--------|
| Monthly | ~$25/mes |
| Hourly | ~$7.25/mes + $0.22/hora |

**¿Cuándo Hourly vs Monthly?**
- Usuario trabaja 160 hrs/mes → Monthly ($25 vs $42)
- Usuario trabaja 40 hrs/mes → Hourly ($16 vs $25)

**AutoStop:**
- Con Hourly, WorkSpaces se apaga tras inactividad
- Reduce costos significativamente
- Configurable: 1-48 horas de timeout`,
        note: "Usa el modelo Hourly con AutoStop para usuarios que trabajan menos de 80 horas mensuales.",
      },
      {
        title: "WorkSpaces vs Alternativas",
        content: `**WorkSpaces vs AppStream 2.0:**
| Aspecto | WorkSpaces | AppStream 2.0 |
|---------|------------|---------------|
| Tipo | Escritorio completo | Aplicaciones específicas |
| Persistencia | Sí (user volume) | Opcional |
| Uso típico | Trabajo diario | Acceso a una app |
| Precio | Mayor | Menor |

**WorkSpaces vs EC2:**
| Aspecto | WorkSpaces | EC2 + Remote Desktop |
|---------|------------|---------------------|
| Administración | Baja | Alta |
| Directorio | Integrado | Manual |
| Clientes | Apps nativas | RDP genérico |
| Escala | Muy fácil | Manual |

**WorkSpaces Web:**
- Nueva opción para navegador solamente
- Acceso a aplicaciones SaaS
- Sin escritorio completo
- Más económico

**Cuándo WorkSpaces:**
- Usuarios necesitan escritorio completo
- Múltiples aplicaciones
- Trabajo regular desde varios dispositivos
- Requisitos de seguridad altos`,
      },
    ],
  },
  keyTakeaways: [
    "WorkSpaces es DaaS - escritorios Windows/Linux virtuales en AWS",
    "Usuarios se conectan desde cualquier dispositivo con clientes nativos",
    "Bundles desde básico (1 vCPU, 2GB) hasta GPU para gráficos",
    "Modelo Hourly para uso ocasional, Monthly para uso frecuente",
    "Datos permanecen en AWS, no en dispositivos locales (seguridad)",
  ],
  relatedQuestions: ["q72", "q73"],
  tags: ["WorkSpaces", "VDI", "DaaS", "escritorios virtuales", "remoto"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
