import { Article } from "@/types";

export const awsWafShield: Article = {
  id: "d2-art-04",
  slug: "aws-waf-shield",
  title: "AWS WAF y AWS Shield",
  shortDescription:
    "Protege tus aplicaciones web contra ataques y DDoS con WAF y Shield.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "Protección en Capas",
      content: `AWS ofrece múltiples servicios para proteger tus aplicaciones web:

- **AWS Shield:** Protección contra DDoS
- **AWS WAF:** Firewall de aplicaciones web
- **AWS Firewall Manager:** Gestión centralizada

Estos servicios trabajan juntos para proporcionar protección en profundidad contra diferentes tipos de ataques.`,
    },
    {
      title: "AWS Shield",
      content: `### ¿Qué es?
Servicio de protección contra ataques **DDoS (Distributed Denial of Service)**.

### Dos niveles:

## Shield Standard
- **Incluido gratis** con todos los servicios AWS
- Protección automática contra ataques comunes de capa 3 y 4
- Protege contra: SYN floods, UDP floods, reflection attacks
- Sin configuración necesaria

## Shield Advanced
- **Servicio de pago** ($3,000/mes + fees por datos transferidos)
- Protección mejorada contra ataques más sofisticados
- Protección para: EC2, ELB, CloudFront, Global Accelerator, Route 53

**Beneficios de Shield Advanced:**
| Característica | Descripción |
|----------------|-------------|
| **24/7 DDoS Response Team** | Equipo de AWS te ayuda durante ataques |
| **Protección de costos** | Créditos por escalado debido a DDoS |
| **Visibilidad** | Métricas y reportes detallados |
| **WAF incluido** | AWS WAF sin costo adicional |
| **Firewall Manager** | Gestión centralizada incluida |
| **Health-based detection** | Detección basada en salud de aplicación |`,
    },
    {
      title: "AWS WAF (Web Application Firewall)",
      content: `### ¿Qué es?
Firewall de **capa 7 (aplicación)** que protege aplicaciones web filtrando el tráfico HTTP/HTTPS.

### ¿Dónde se despliega?
WAF se asocia a:
- Amazon CloudFront (CDN)
- Application Load Balancer (ALB)
- Amazon API Gateway
- AWS AppSync (GraphQL)
- Amazon Cognito User Pools

### Componentes:

**Web ACL (Access Control List):**
La colección de reglas que define qué tráfico permitir/bloquear.

**Rules:**
Condiciones que inspeccionan las solicitudes web.

**Rule Groups:**
Conjuntos reutilizables de reglas.`,
    },
    {
      title: "Tipos de Reglas WAF",
      content: `### Reglas que puedes crear:

| Tipo | Qué inspecciona | Ejemplo |
|------|-----------------|---------|
| **IP Set** | Dirección IP origen | Bloquear IPs maliciosas |
| **Geo Match** | País de origen | Bloquear países específicos |
| **Rate-based** | Requests por IP/tiempo | Limitar a 1000 req/5min |
| **String Match** | Contenido de la request | Bloquear User-Agents específicos |
| **Regex Match** | Patrones en la request | Detectar patrones de ataque |
| **Size Constraint** | Tamaño de partes | Limitar tamaño de body |
| **SQL Injection** | Inyección SQL | Detectar ' OR 1=1 |
| **XSS** | Cross-site scripting | Detectar <script> |

### AWS Managed Rules

AWS proporciona conjuntos de reglas pre-configuradas:

| Rule Group | Protege contra |
|------------|----------------|
| Core Rule Set | Vulnerabilidades comunes OWASP |
| Admin Protection | Acceso a páginas administrativas |
| Known Bad Inputs | Patrones de exploit conocidos |
| SQL Injection | Inyección SQL |
| Linux/Windows OS | Vulnerabilidades de OS |
| PHP/WordPress | Vulnerabilidades específicas |
| Amazon IP Reputation | IPs con mala reputación |
| Bot Control | Bots maliciosos |

### Reglas de Marketplace

Puedes comprar reglas de terceros como:
- F5
- Fortinet
- Imperva
- Trend Micro`,
    },
    {
      title: "Acciones de WAF",
      content: `### Cuando una regla hace match, WAF puede:

**Allow:**
Permite la solicitud.

**Block:**
Bloquea y retorna código de error (403 por defecto).

**Count:**
Solo cuenta la solicitud (útil para testing).

**CAPTCHA:**
Presenta un desafío CAPTCHA al usuario.

**Challenge:**
Presenta desafío silencioso (JavaScript challenge).

### Rate-based Rules

Limitan solicitudes por IP en un período:

\`\`\`
Regla: Máximo 2000 requests por IP en 5 minutos
Si excede: Block por período configurable
\`\`\`

Útil para:
- Prevenir web scraping
- Mitigar ataques de fuerza bruta
- Proteger APIs de abuso`,
    },
    {
      title: "AWS Firewall Manager",
      content: `### ¿Qué es?
Servicio para gestionar reglas de firewall **de forma centralizada** en múltiples cuentas y recursos.

### Gestiona:
- AWS WAF rules
- AWS Shield Advanced
- Security Groups de VPC
- Network Firewall
- Route 53 Resolver DNS Firewall

### Requisitos:
- AWS Organizations habilitado
- Una cuenta designada como administrador de Firewall Manager

### Beneficios:

| Beneficio | Descripción |
|-----------|-------------|
| **Centralización** | Una vista para todas las cuentas |
| **Compliance** | Asegura que todas las cuentas cumplan políticas |
| **Automatización** | Aplica reglas a nuevos recursos automáticamente |
| **Reportes** | Visibilidad de compliance en toda la organización |

### Casos de uso:
- Empresa con múltiples cuentas AWS
- Requisitos de compliance uniformes
- Equipos de seguridad centralizados`,
    },
    {
      title: "Ejemplo: Arquitectura Protegida",
      content: `### Escenario: Aplicación Web Pública

\`\`\`
          Usuarios
              │
              ▼
        [CloudFront] ◄── WAF Web ACL
              │           ├── AWS Managed Rules (OWASP)
              │           ├── Rate Limiting (1000 req/5min)
              │           └── Geo Block (países no deseados)
              │
      [Shield Standard/Advanced]
              │
              ▼
        [Application LB] ◄── Security Group
              │
              ▼
        [EC2 / ECS / Lambda]
\`\`\`

### Protecciones aplicadas:

1. **Shield:** Mitiga DDoS en capas 3/4
2. **WAF en CloudFront:** 
   - Bloquea SQL injection y XSS
   - Rate limiting por IP
   - Bloquea países no deseados
3. **Security Group:** Solo permite tráfico desde CloudFront`,
    },
    {
      title: "En el Examen CLF-C02",
      content: `### Puntos clave:

1. **Shield Standard:** Gratis, automático, protección DDoS básica
2. **Shield Advanced:** Pago, protección mejorada, DRT 24/7
3. **WAF:** Capa 7, filtra HTTP/HTTPS, reglas personalizables
4. **WAF se asocia a:** CloudFront, ALB, API Gateway, AppSync
5. **Managed Rules:** Reglas pre-configuradas por AWS
6. **Firewall Manager:** Gestión centralizada multi-cuenta

### Preguntas típicas:

*"¿Qué servicio protege contra ataques DDoS de forma gratuita?"*
→ AWS Shield Standard (incluido automáticamente)

*"¿Cómo bloquear solicitudes con inyección SQL?"*
→ AWS WAF con reglas de SQL Injection

*"¿Cómo limitar el número de solicitudes por IP?"*
→ AWS WAF con Rate-based rules

*"¿Qué servicio proporciona acceso al DDoS Response Team?"*
→ AWS Shield Advanced

*"¿Cómo gestionar WAF en múltiples cuentas de forma centralizada?"*
→ AWS Firewall Manager`,
    },
  ],
  keyPoints: [
    "Shield Standard: Gratis, automático, DDoS capa 3/4",
    "Shield Advanced: Pago, DRT 24/7, protección de costos",
    "WAF: Firewall capa 7, filtra HTTP/HTTPS",
    "WAF en: CloudFront, ALB, API Gateway, AppSync",
    "Managed Rules: Reglas pre-configuradas por AWS (OWASP, bots, etc.)",
    "Rate-based rules: Limitar requests por IP",
    "Firewall Manager: Gestión centralizada multi-cuenta",
  ],
  tags: [
    "WAF",
    "Shield",
    "DDoS",
    "firewall",
    "seguridad web",
    "OWASP",
    "rate limiting",
    "protección",
  ],
  relatedServices: ["waf", "shield", "cloudfront", "alb"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
