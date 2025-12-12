import { Article } from "@/types";

export const elasticNetworkInterface: Article = {
  id: "d3-art-25",
  slug: "elastic-network-interface",
  title: "Elastic Network Interface (ENI): Redes en AWS",
  shortDescription:
    "Entiende las interfaces de red virtuales y cómo conectan recursos en AWS.",
  domainId: "domain3",
  content: {
    introduction:
      "Una Elastic Network Interface (ENI) es un componente de red virtual que representa una tarjeta de red en AWS. Permite a las instancias EC2 y otros servicios comunicarse dentro de una VPC y con el mundo exterior.",
    sections: [
      {
        title: "¿Qué es una ENI?",
        content: `Una **Elastic Network Interface** es una tarjeta de red virtual.

**Analogía:**
- En un servidor físico tienes tarjetas de red (NICs)
- En AWS, las ENIs son el equivalente virtual

**Cada ENI tiene:**
- Una IP privada principal
- Una o más IPs privadas secundarias (opcional)
- Una IP pública (opcional, auto-asignada o Elastic IP)
- Una o más IPs IPv6 (opcional)
- Un Security Group (o varios)
- Dirección MAC
- Source/destination check flag

**Creación automática:**
- Cuando lanzas una EC2, se crea una ENI primaria
- Esta ENI principal (eth0) no se puede separar
- Puedes agregar ENIs secundarias (eth1, eth2...)

**Límites:**
- El número máximo de ENIs depende del tipo de instancia
- t2.micro: 2 ENIs
- t3.large: 3 ENIs
- Instancias grandes: hasta 15+ ENIs`,
      },
      {
        title: "Casos de Uso de Múltiples ENIs",
        content: `**Red de gestión separada:**
\`\`\`
EC2 Instance
├── eth0 (ENI-1): Subnet Pública
│   └── Tráfico de aplicación
│
└── eth1 (ENI-2): Subnet Privada (Management)
    └── SSH, monitoreo, backups
\`\`\`

**Dual-homed instances:**
- Una ENI para tráfico público
- Otra para tráfico privado/interno
- Seguridad mejorada

**Failover de aplicaciones:**
- Mover ENI de una instancia a otra
- La IP se mantiene
- Failover rápido sin cambios de DNS

**Licencias basadas en MAC:**
- Algunas licencias de software se atan a dirección MAC
- La ENI mantiene su MAC address
- Puedes moverla a otra instancia

**Network appliances:**
- Firewalls virtuales
- NAT instances
- Proxies
- Necesitan múltiples interfaces`,
      },
      {
        title: "ENI y Direcciones IP",
        content: `**IP Privada Principal:**
- Asignada automáticamente del CIDR de la subnet
- O elegida manualmente
- No cambia durante la vida de la ENI

**IPs Privadas Secundarias:**
- Puedes agregar múltiples
- Útil para hosting de múltiples sitios
- Cada una puede tener su Elastic IP

**IP Pública:**
- Auto-asignada (puede cambiar al reiniciar)
- O Elastic IP (estática, tú la controlas)

**Elastic IP (EIP):**
- IP pública estática
- Permanece tuya hasta que la liberas
- Se puede mover entre ENIs/instancias
- Costo si no está asociada a instancia running

**IPv6:**
- Direcciones IPv6 son siempre públicas en AWS
- Asignadas del bloque IPv6 de la subnet
- Sin NAT necesario

**Ejemplo de configuración:**
\`\`\`
ENI eth0:
├── Private IP: 10.0.1.100 (principal)
├── Private IP: 10.0.1.101 (secundaria)
├── Public IP: Auto-assigned (temporal)
├── Elastic IP: 52.1.2.3 (en IP secundaria)
└── IPv6: 2600:1f18:xxx::100
\`\`\``,
      },
      {
        title: "Security Groups y ENIs",
        content: `**Relación ENI-Security Group:**
- Los Security Groups se asocian a ENIs, no directamente a instancias
- Una ENI puede tener hasta 5 Security Groups
- Cambiar SG en la ENI afecta la instancia inmediatamente

**Múltiples ENIs, diferentes SGs:**
\`\`\`
EC2 Instance
├── eth0 (ENI-1)
│   └── SG-Web: Permite 80, 443 desde Internet
│
└── eth1 (ENI-2)
    └── SG-Management: Permite 22 desde VPN solamente
\`\`\`

**Source/Destination Check:**
- Por defecto está habilitado
- Verifica que la ENI sea origen o destino del tráfico
- **Deshabilitar para:** NAT instances, firewalls, routers

**Hot attach/detach:**
- ENIs secundarias pueden adjuntarse/separarse en caliente
- Sin detener la instancia
- Útil para failover y mantenimiento`,
      },
      {
        title: "ENI en Otros Servicios AWS",
        content: `**Servicios que crean ENIs:**

**Lambda (en VPC):**
- Lambda crea ENIs para acceder a recursos VPC
- Hyperplane ENIs (compartidas, eficientes)

**RDS:**
- Cada instancia RDS tiene ENI(s)
- Multi-AZ tiene ENIs en múltiples subnets

**ELB / ALB / NLB:**
- Load Balancers usan ENIs en cada AZ
- Las ENIs están en tus subnets

**ECS/EKS (awsvpc mode):**
- Cada task/pod puede tener su propia ENI
- IP única por contenedor

**VPC Endpoints (Interface):**
- Crean ENIs en tus subnets
- Permiten acceso privado a servicios AWS

**ElastiCache / OpenSearch:**
- Nodos tienen ENIs
- En tus subnets privadas

**Implicaciones:**
- Las ENIs consumen IPs de tus subnets
- Planificar subnets con suficiente espacio
- Security Groups de ENIs de servicios deben configurarse`,
      },
      {
        title: "Precios y Mejores Prácticas",
        content: `**Precios:**
- Las ENIs en sí son **gratis**
- Las Elastic IPs tienen costo si no están asociadas ($0.005/hora)
- El tráfico de datos tiene costos normales

**Límites a considerar:**
- ENIs por instancia varía por tipo
- IPs por ENI varía por tipo
- Security Groups por ENI: 5 (ajustable)

**Mejores prácticas:**

**Diseño de subnets:**
- Planificar espacio IP suficiente
- Considerar ENIs de todos los servicios
- /24 mínimo para subnets con muchos recursos

**Alta disponibilidad:**
- ENI failover para aplicaciones legacy
- Preferir Load Balancers cuando sea posible

**Seguridad:**
- Security Groups específicos por ENI/función
- Separar tráfico de management

**Monitoreo:**
- VPC Flow Logs capturan tráfico por ENI
- CloudWatch para métricas de red
- Identificar ENIs por instancia en logs

**Cuando NO usar múltiples ENIs:**
- Si un Load Balancer resuelve tu caso
- Para aplicaciones modernas cloud-native
- Agrega complejidad innecesaria`,
        note: "Para la mayoría de aplicaciones modernas, una sola ENI con Security Groups bien configurados es suficiente.",
      },
    ],
  },
  keyTakeaways: [
    "ENI es una tarjeta de red virtual con IP privada, SG y dirección MAC",
    "Cada EC2 tiene una ENI principal, puede tener secundarias",
    "ENIs pueden moverse entre instancias manteniendo IP y MAC",
    "Security Groups se asocian a ENIs, no directamente a instancias",
    "Muchos servicios AWS (Lambda, RDS, ELB) crean ENIs automáticamente",
  ],
  relatedQuestions: ["q58", "q59"],
  tags: ["ENI", "redes", "VPC", "IP", "Security Groups"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
