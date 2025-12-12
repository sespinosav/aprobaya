import { Article } from "@/types";

export const awsOrganizations: Article = {
  id: "d4-art-06",
  slug: "aws-organizations",
  title: "AWS Organizations: Gestión Multi-Cuenta",
  shortDescription:
    "Administra múltiples cuentas AWS de forma centralizada con políticas y facturación consolidada.",
  domainId: "domain4",
  content: {
    introduction:
      "AWS Organizations es un servicio que permite consolidar múltiples cuentas de AWS en una organización para administrarlas de forma centralizada. Facilita la gobernanza, el control de acceso y la facturación consolidada.",
    sections: [
      {
        title: "¿Qué es AWS Organizations?",
        content: `AWS Organizations permite **gestionar múltiples cuentas AWS** como una unidad.

**Beneficios principales:**
- Facturación consolidada (una factura)
- Descuentos por volumen
- Control centralizado de políticas
- Creación automatizada de cuentas

**Componentes:**
- **Organization**: La entidad principal
- **Root**: Contenedor raíz de la organización
- **OU (Organizational Unit)**: Agrupaciones de cuentas
- **Account**: Cuentas AWS individuales
- **SCP**: Service Control Policies

**Estructura típica:**
\`\`\`
Organization Root
├── OU: Security
│   └── Account: Security-Audit
├── OU: Production
│   ├── Account: Prod-App1
│   └── Account: Prod-App2
├── OU: Development
│   ├── Account: Dev-Team1
│   └── Account: Dev-Team2
└── Account: Management (payer)
\`\`\``,
      },
      {
        title: "Facturación Consolidada",
        content: `Una de las principales ventajas de Organizations.

**Cómo funciona:**
- Una cuenta paga por todas (management account)
- Una sola factura mensual
- Visibilidad de costos por cuenta

**Beneficios de volumen:**
- AWS agrega el uso de todas las cuentas
- Se alcanzan tiers de descuento más rápido
- Ejemplo: S3 pricing tiers

**Ejemplo de ahorro:**
\`\`\`
Sin Organizations:
- Cuenta A: 50 TB S3 = $0.023/GB
- Cuenta B: 50 TB S3 = $0.023/GB
Total: 100 TB a precio tier 1

Con Organizations:
- Uso combinado: 100 TB
- Primeros 50 TB: $0.023/GB
- Siguientes 50 TB: $0.022/GB (tier 2)
Ahorro: ~$500/mes
\`\`\`

**Reserved Instances compartidas:**
- Las RIs pueden compartirse entre cuentas
- Maximiza utilización de reservas
- Configurable (puedes deshabilitarlo)

**Savings Plans:**
- También se comparten en la organización
- Aplican automáticamente donde haya uso`,
        note: "La facturación consolidada está disponible incluso sin habilitar todas las features de Organizations.",
      },
      {
        title: "Service Control Policies (SCPs)",
        content: `Las **SCPs** son políticas que controlan qué servicios y acciones están disponibles en las cuentas.

**Características:**
- NO otorgan permisos, solo restringen
- Se heredan hacia abajo en la jerarquía
- No afectan a la management account
- Afectan a todos los usuarios/roles de la cuenta

**Ejemplo de SCP - Denegar regiones:**
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Deny",
      "Action": "*",
      "Resource": "*",
      "Condition": {
        "StringNotEquals": {
          "aws:RequestedRegion": [
            "us-east-1",
            "eu-west-1"
          ]
        }
      }
    }
  ]
}
\`\`\`

**Casos de uso comunes:**
- Restringir regiones permitidas
- Prevenir eliminación de CloudTrail
- Bloquear servicios no aprobados
- Requerir tags en recursos

**Jerarquía de SCPs:**
\`\`\`
Root (SCP: FullAWSAccess)
└── OU: Production (SCP: DenyDeleteLogs)
    └── Account: Prod-App1
        Usuario con AdministratorAccess
        ↓
        NO puede eliminar logs
        (SCP lo bloquea)
\`\`\``,
      },
      {
        title: "Organizational Units (OUs)",
        content: `Las **OUs** son contenedores para agrupar cuentas.

**Estrategias de organización:**

**Por ambiente:**
\`\`\`
Root
├── OU: Production
├── OU: Staging
├── OU: Development
└── OU: Sandbox
\`\`\`

**Por función:**
\`\`\`
Root
├── OU: Security
├── OU: Infrastructure
├── OU: Workloads
│   ├── OU: Business Unit A
│   └── OU: Business Unit B
└── OU: Sandbox
\`\`\`

**AWS Landing Zone pattern:**
\`\`\`
Root
├── OU: Security
│   ├── Log Archive Account
│   └── Audit Account
├── OU: Infrastructure
│   ├── Network Account
│   └── Shared Services
├── OU: Workloads
│   ├── OU: Prod
│   └── OU: Non-Prod
└── OU: Sandbox
\`\`\`

**Beneficios de OUs:**
- Aplicar SCPs a grupos de cuentas
- Organización lógica
- Delegación de administración
- Facilita auditoría`,
      },
      {
        title: "Creación y Gestión de Cuentas",
        content: `**Crear cuentas nuevas:**
- Desde Organizations console
- API/CLI automatizado
- AWS Control Tower (recomendado)

**Proceso de creación:**
1. Especificar email único
2. Nombre de cuenta
3. IAM role para acceso (OrganizationAccountAccessRole)
4. OU de destino

**Invitar cuentas existentes:**
- Enviar invitación a cuenta existente
- La cuenta acepta la invitación
- Pasa a formar parte de la organización

**Mover cuentas entre OUs:**
- Drag and drop en consola
- API: MoveAccount
- Los SCPs se actualizan automáticamente

**Dejar la organización:**
- La cuenta puede salir (si tiene pago configurado)
- Pierde beneficios de consolidated billing
- Historial de facturación se mantiene

**Cerrar cuentas:**
- Período de 90 días antes de eliminación
- Algunos recursos pueden persistir
- Requiere resolver dependencias primero`,
      },
      {
        title: "Mejores Prácticas",
        content: `**Diseño de organización:**
- Planificar estructura antes de crear
- Usar OUs para agrupar por políticas similares
- Mínimo: separar producción de desarrollo

**Seguridad:**
- La management account solo para billing
- Crear cuenta dedicada para security/audit
- Habilitar CloudTrail a nivel organización
- SCPs restrictivos en producción

**Cuentas recomendadas:**
| Cuenta | Propósito |
|--------|-----------|
| Management | Billing, Organizations |
| Log Archive | CloudTrail, Config logs |
| Audit | Security Hub, GuardDuty master |
| Network | Transit Gateway, VPCs compartidas |
| Shared Services | CI/CD, repos, herramientas |

**Automatización:**
- AWS Control Tower para setup guiado
- CloudFormation StackSets para desplegar en múltiples cuentas
- AWS Service Catalog para productos aprobados

**Monitoreo:**
- Cost Explorer por cuenta
- AWS Budgets por cuenta/OU
- Trusted Advisor organizacional`,
        note: "AWS Control Tower es la forma recomendada de configurar una organización multi-cuenta desde cero.",
      },
    ],
  },
  keyTakeaways: [
    "Organizations permite gestionar múltiples cuentas AWS centralizadamente",
    "Facturación consolidada proporciona una factura y descuentos por volumen",
    "SCPs restringen qué servicios/acciones están disponibles en cuentas",
    "OUs agrupan cuentas para aplicar políticas comunes",
    "Las RIs y Savings Plans se comparten automáticamente entre cuentas",
  ],
  relatedQuestions: ["q90", "q91"],
  tags: ["Organizations", "multi-cuenta", "SCP", "facturación", "gobernanza"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
