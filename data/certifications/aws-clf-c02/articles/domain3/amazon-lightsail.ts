import { Article } from "@/types";

export const amazonLightsail: Article = {
  id: "d3-art-21",
  slug: "amazon-lightsail",
  title: "Amazon Lightsail: VPS Simple y Económico",
  shortDescription:
    "Servidores virtuales, bases de datos y almacenamiento con precios fijos y fácil configuración.",
  domainId: "domain3",
  content: {
    introduction:
      "Amazon Lightsail es la forma más fácil de comenzar con AWS. Ofrece servidores virtuales, almacenamiento, bases de datos y redes con precios mensuales fijos predecibles, ideal para proyectos simples y usuarios que recién comienzan.",
    sections: [
      {
        title: "¿Qué es Amazon Lightsail?",
        content: `Lightsail es una plataforma de **nube simplificada** con precios fijos.

**Filosofía:**
- Simple como un VPS tradicional
- Precios predecibles (sin sorpresas)
- Todo incluido en bundles
- Interfaz amigable

**¿Para quién es Lightsail?**
- Desarrolladores individuales
- Pequeñas empresas
- Proyectos simples
- Usuarios nuevos en AWS
- Blogs, sitios WordPress

**Comparación rápida:**
| Aspecto | Lightsail | EC2 |
|---------|-----------|-----|
| Complejidad | Baja | Alta |
| Flexibilidad | Limitada | Total |
| Precios | Fijos | Por uso |
| Ideal para | Simple | Enterprise |`,
      },
      {
        title: "Recursos Disponibles",
        content: `**Instances (Servidores virtuales):**
- Linux o Windows
- Apps pre-instaladas disponibles
- SSD storage incluido
- Transferencia de datos incluida

**Blueprints disponibles:**
- **OS solamente**: Amazon Linux, Ubuntu, Debian, Windows
- **Apps**: WordPress, LAMP, Node.js, Joomla, Magento
- **Stacks**: MEAN, GitLab, Plesk

**Databases:**
- MySQL, PostgreSQL administrados
- Backups automáticos
- Alta disponibilidad opcional

**Storage:**
- Block storage adicional
- Object storage (compatible con S3)

**Networking:**
- Static IPs (gratis, 5 incluidas)
- DNS zones
- Load balancers
- VPC peering con AWS`,
      },
      {
        title: "Planes y Precios",
        content: `**Planes de instancias Linux/Unix:**
| Plan | RAM | vCPU | SSD | Transfer | Precio |
|------|-----|------|-----|----------|--------|
| $3.50 | 512MB | 1 | 20GB | 1TB | $3.50/mes |
| $5 | 1GB | 1 | 40GB | 2TB | $5/mes |
| $10 | 2GB | 1 | 60GB | 3TB | $10/mes |
| $20 | 4GB | 2 | 80GB | 4TB | $20/mes |
| $40 | 8GB | 2 | 160GB | 5TB | $40/mes |
| $80 | 16GB | 4 | 320GB | 6TB | $80/mes |
| $160 | 32GB | 8 | 640GB | 7TB | $160/mes |

**Windows es más caro** (~2x el precio)

**Lo que está incluido:**
- Instancia virtual
- Almacenamiento SSD
- Transferencia de datos (salida)
- IP estática
- Acceso SSH/RDP
- Snapshots manuales (con costo de storage)

**Free Tier:**
- 3 meses gratis del plan $3.50 Linux
- 1 mes gratis del plan $8 Windows
- Para nuevos clientes`,
        note: "Lightsail es significativamente más simple de presupuestar que EC2 por los precios fijos.",
      },
      {
        title: "Casos de Uso Ideales",
        content: `**WordPress y blogs:**
- Blueprint WordPress listo para usar
- SSL con Let's Encrypt incluido
- CDN de Lightsail disponible
- Plan $5/mes es suficiente para muchos blogs

**Aplicaciones web simples:**
- Landing pages
- Sitios informativos
- Aplicaciones Node.js básicas

**Ambientes de desarrollo:**
- Probar aplicaciones
- Staging environments
- Learning y experimentación

**Pequeños negocios:**
- E-commerce pequeño (WooCommerce)
- Sitios corporativos
- Aplicaciones internas

**Cuándo NO usar Lightsail:**
- Aplicaciones enterprise
- Necesitas Auto Scaling
- Arquitecturas complejas
- Integración profunda con otros servicios AWS
- Requisitos de compliance específicos`,
      },
      {
        title: "Lightsail vs EC2",
        content: `**Comparación detallada:**

| Característica | Lightsail | EC2 |
|---------------|-----------|-----|
| Modelo de precio | Fijo mensual | Por hora/segundo |
| Tipos de instancia | ~10 | Cientos |
| Auto Scaling | No | Sí |
| Load Balancer | Simple | ALB/NLB/CLB |
| Networking | Simplificado | VPC completo |
| IAM | Limitado | Completo |
| Storage options | SSD incluido | EBS, Instance Store |
| Billing | Predecible | Variable |

**Migrar de Lightsail a EC2:**
- Es posible exportar snapshots a EC2
- Cuando tu proyecto crece
- Cuando necesitas features avanzados

**Costos comparados (similar spec):**
- Lightsail 2GB, 1vCPU: $10/mes fijo
- EC2 t3.small 2GB: ~$15/mes (24/7)
- Pero EC2 cobra transferencia aparte

**Recomendación:**
- Empieza con Lightsail si es simple
- Migra a EC2 cuando necesites más`,
      },
      {
        title: "Contenedores y Bases de Datos en Lightsail",
        content: `**Lightsail Containers:**
- Contenedores sin gestionar infraestructura
- Hasta 20 contenedores por servicio
- Load balancer incluido
- Certificado SSL/TLS incluido

**Planes de contenedores:**
- Nano (512MB, 0.25 vCPU): $7/mes
- Micro (1GB, 0.5 vCPU): $10/mes
- Small (2GB, 1 vCPU): $25/mes
- Medium (4GB, 2 vCPU): $50/mes

**Lightsail Databases:**
- MySQL y PostgreSQL administrados
- Backups automáticos (7 días)
- Mantenimiento automático
- Opción de alta disponibilidad

**Planes de DB:**
- Standard (1GB): $15/mes
- Standard (2GB): $30/mes
- High Availability: 2x el precio

**Lightsail CDN:**
- Distribución global de contenido
- Integra con instancias Lightsail
- Certificados SSL gratis
- Desde $2.50/mes + transferencia

**Resumen de servicios:**
\`\`\`
Lightsail
├── Instances (VPS)
├── Containers
├── Databases
├── Storage (block + object)
├── Load Balancers
├── CDN
└── DNS
\`\`\``,
      },
    ],
  },
  keyTakeaways: [
    "Lightsail ofrece VPS con precios fijos predecibles desde $3.50/mes",
    "Incluye almacenamiento SSD, transferencia de datos e IP estática",
    "Blueprints pre-configurados para WordPress, LAMP, Node.js, etc.",
    "Ideal para principiantes, proyectos simples y pequeños negocios",
    "Puedes migrar a EC2 cuando necesites más flexibilidad y escala",
  ],
  relatedQuestions: ["q82"],
  tags: ["Lightsail", "VPS", "hosting", "WordPress", "simple"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
