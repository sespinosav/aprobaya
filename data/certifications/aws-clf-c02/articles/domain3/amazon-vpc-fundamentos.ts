import { Article } from "@/types";

export const amazonVpcFundamentos: Article = {
  id: "d3-art-06",
  slug: "amazon-vpc-fundamentos",
  title: "Amazon VPC: Fundamentos de Redes en AWS",
  shortDescription:
    "Aprende los conceptos básicos de Virtual Private Cloud: subredes, gateways, tablas de rutas y conectividad.",
  domainId: "domain3",
  content: {
    introduction:
      "Amazon Virtual Private Cloud (VPC) te permite lanzar recursos de AWS en una red virtual aislada que tú defines. Tienes control total sobre la configuración de red, incluyendo rangos de IP, subredes, tablas de rutas y gateways.",
    sections: [
      {
        title: "¿Qué es una VPC?",
        content: `Una **VPC** es tu propia red privada virtual dentro de AWS.

**Analogía:** Es como tener tu propia sección privada del centro de datos de AWS, aislada de otros clientes.

**Características principales:**
- **Aislamiento**: Completamente separada de otras VPCs
- **Control**: Tú defines el rango de IPs (CIDR block)
- **Regional**: Una VPC existe dentro de una región
- **Personalizable**: Subredes, rutas, gateways

**VPC Default:**
- AWS crea una VPC default en cada región
- Incluye subredes públicas en cada AZ
- Lista para usar inmediatamente

**VPC Custom:**
- Tú la creas con configuración específica
- Mayor control y seguridad
- Recomendada para producción`,
      },
      {
        title: "Componentes de una VPC",
        content: `**CIDR Block:**
- Rango de direcciones IP para la VPC
- Ejemplo: 10.0.0.0/16 (65,536 IPs)
- Una vez creado, no se puede cambiar

**Subredes (Subnets):**
- Subdividen el CIDR de la VPC
- Residen en una sola AZ
- Públicas o privadas según configuración

**Internet Gateway (IGW):**
- Permite comunicación con Internet
- Altamente disponible y escalable
- Una VPC puede tener un solo IGW

**NAT Gateway:**
- Permite que recursos privados accedan a Internet
- No permite conexiones entrantes desde Internet
- Útil para actualizaciones, parches

**Route Tables:**
- Definen hacia dónde va el tráfico
- Cada subred debe asociarse a una tabla de rutas`,
        note: "Una subred es PÚBLICA si tiene una ruta al Internet Gateway. Es PRIVADA si no la tiene.",
      },
      {
        title: "Subredes Públicas vs Privadas",
        content: `**Subred Pública:**
- Tiene ruta a Internet Gateway
- Recursos pueden tener IP pública
- Para: Load balancers, bastion hosts, web servers

**Subred Privada:**
- Sin ruta directa a Internet
- Solo IPs privadas
- Para: Bases de datos, servidores de aplicación, backend

**Arquitectura típica (Multi-tier):**
\`\`\`
Internet
    │
Internet Gateway
    │
┌───────────────────────────────────────┐
│  Subred Pública (10.0.1.0/24)        │
│  - Application Load Balancer          │
│  - Bastion Host                       │
└───────────────────────────────────────┘
    │
NAT Gateway
    │
┌───────────────────────────────────────┐
│  Subred Privada (10.0.2.0/24)        │
│  - EC2 Instances (App Servers)        │
└───────────────────────────────────────┘
    │
┌───────────────────────────────────────┐
│  Subred Privada (10.0.3.0/24)        │
│  - RDS Database                       │
└───────────────────────────────────────┘
\`\`\``,
      },
      {
        title: "Conectividad",
        content: `**Conexión a Internet:**
- Internet Gateway: tráfico bidireccional público
- NAT Gateway: salida para recursos privados

**Conexión a otras VPCs:**
- **VPC Peering**: Conexión directa entre 2 VPCs
  - No transitivo (A↔B, B↔C no significa A↔C)
  - Puede ser entre regiones o cuentas

- **Transit Gateway**: Hub central para conectar múltiples VPCs
  - Simplifica topologías complejas
  - Escalable a miles de VPCs

**Conexión a on-premises:**
- **VPN (Site-to-Site)**: Túnel cifrado sobre Internet
  - Rápido de configurar
  - Sujeto a variabilidad de Internet

- **AWS Direct Connect**: Conexión física dedicada
  - Latencia consistente
  - Mayor ancho de banda
  - Más costoso, requiere tiempo de setup`,
      },
      {
        title: "VPC Endpoints",
        content: `Los **VPC Endpoints** permiten conectar tu VPC a servicios AWS **sin usar Internet**.

**Beneficios:**
- Tráfico permanece en la red de AWS
- Mayor seguridad (sin exposición a Internet)
- Menor latencia

**Tipos de Endpoints:**

**Gateway Endpoints (gratis):**
- Solo para S3 y DynamoDB
- Se configura en la tabla de rutas

**Interface Endpoints (PrivateLink):**
- Para la mayoría de servicios AWS
- Crea una ENI en tu subred
- Tiene costo por hora y por GB

**Ejemplo de uso:**
- EC2 en subred privada accede a S3 sin NAT Gateway
- Ahorra costos de NAT y mejora seguridad`,
        note: "Gateway Endpoints para S3 y DynamoDB son GRATIS y recomendados siempre.",
      },
      {
        title: "Ejemplo de Diseño de VPC",
        content: `**Diseño para aplicación típica:**

**VPC:** 10.0.0.0/16

**Subredes Públicas (una por AZ):**
- 10.0.1.0/24 (AZ-a) - ALB, NAT Gateway
- 10.0.2.0/24 (AZ-b) - ALB

**Subredes Privadas - App (una por AZ):**
- 10.0.10.0/24 (AZ-a) - EC2 App
- 10.0.11.0/24 (AZ-b) - EC2 App

**Subredes Privadas - DB (una por AZ):**
- 10.0.20.0/24 (AZ-a) - RDS Primary
- 10.0.21.0/24 (AZ-b) - RDS Standby

**Seguridad:**
- Security Groups por capa
- NACLs en subredes
- VPC Endpoints para S3

**Mejores prácticas:**
- Usar múltiples AZs para alta disponibilidad
- Subredes privadas para datos sensibles
- Diseñar CIDRs pensando en crecimiento futuro`,
      },
    ],
  },
  keyTakeaways: [
    "VPC es tu red privada virtual aislada en AWS",
    "Subredes públicas tienen ruta a Internet Gateway, privadas no",
    "NAT Gateway permite a recursos privados acceder a Internet (salida)",
    "VPC Peering conecta 2 VPCs, Transit Gateway conecta muchas",
    "VPC Endpoints permiten acceder a servicios AWS sin Internet",
  ],
  relatedQuestions: ["q56", "q57", "q58", "q59", "q60"],
  tags: ["VPC", "redes", "subredes", "gateway", "conectividad"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
