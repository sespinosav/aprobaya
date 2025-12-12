import { Article } from "@/types";

export const awsCertificateManager: Article = {
  id: "d2-art-08",
  slug: "aws-certificate-manager",
  title: "AWS Certificate Manager (ACM)",
  shortDescription:
    "Gestiona certificados SSL/TLS de forma gratuita para proteger tus aplicaciones.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "¿Qué es AWS Certificate Manager?",
      content: `**AWS Certificate Manager (ACM)** es un servicio que te permite aprovisionar, gestionar y desplegar certificados SSL/TLS públicos y privados para usar con servicios de AWS.

### Beneficios principales:
- **Gratuito:** Certificados públicos sin costo
- **Renovación automática:** No te preocupes por expiración
- **Integrado:** Funciona con ELB, CloudFront, API Gateway, etc.
- **Seguro:** Las claves privadas están protegidas por AWS`,
    },
    {
      title: "¿Por qué necesitas certificados SSL/TLS?",
      content: `### SSL/TLS proporciona:

**1. Cifrado:**
Los datos entre el usuario y tu servidor están cifrados. Nadie puede leer el tráfico interceptado.

**2. Autenticación:**
El certificado prueba que el servidor es quien dice ser, no un impostor.

**3. Integridad:**
Los datos no pueden ser modificados en tránsito sin ser detectados.

### El candado verde (🔒)
Cuando ves el candado en el navegador, significa que:
- La conexión está cifrada con TLS
- El certificado del sitio es válido
- El dominio coincide con el certificado

### Sin HTTPS:
\`\`\`
❌ "Not Secure" en Chrome
❌ SEO penalizado por Google
❌ Datos expuestos (contraseñas, datos de tarjetas)
❌ Usuarios desconfían del sitio
\`\`\``,
    },
    {
      title: "Tipos de Certificados en ACM",
      content: `### Certificados Públicos (Gratis)

**Características:**
- Emitidos por Amazon Trust Services
- Validados para dominios que controlas
- Renovación automática
- Usables en servicios AWS integrados

**Tipos de validación:**
| Tipo | Cómo funciona | Cuándo usar |
|------|---------------|-------------|
| **DNS Validation** | Agregas registro CNAME en tu DNS | Recomendado, renovación automática |
| **Email Validation** | Recibes email en admin@tudominio.com | Si no controlas DNS directamente |

### Certificados Privados (Pago)

**Características:**
- Emitidos por tu propia CA privada en ACM
- Para comunicación interna (microservicios, VPNs)
- Más control sobre la jerarquía de certificados

**Costo:** ~$400/mes por CA privada + $0.75 por certificado`,
    },
    {
      title: "Servicios Integrados con ACM",
      content: `### Servicios que usan certificados de ACM directamente:

| Servicio | Uso típico |
|----------|-----------|
| **Elastic Load Balancer** | HTTPS en ALB/NLB |
| **Amazon CloudFront** | HTTPS en CDN |
| **Amazon API Gateway** | HTTPS para APIs |
| **AWS Elastic Beanstalk** | HTTPS en aplicaciones |
| **AWS App Runner** | HTTPS automático |
| **Amazon Amplify** | HTTPS para apps web |

### Servicios que NO soportan ACM directamente:

| Servicio | Alternativa |
|----------|------------|
| **EC2** | Instalar certificado manualmente o usar ELB |
| **On-premises** | Exportar certificados privados (solo privados) |

### Arquitectura típica:

\`\`\`
Usuarios (HTTPS)
      │
      ▼
[CloudFront] ◄── Certificado ACM (*.midominio.com)
      │
      ▼
[Application LB] ◄── Certificado ACM (interno.midominio.com)
      │
      ▼
[EC2 / ECS] (HTTP interno, cifrado termina en ALB)
\`\`\``,
    },
    {
      title: "Proceso de Solicitud de Certificado",
      content: `### Paso 1: Solicitar certificado

1. Ir a ACM en la consola
2. "Request a certificate"
3. Elegir "Request a public certificate"
4. Ingresar nombres de dominio:
   - \`midominio.com\`
   - \`*.midominio.com\` (wildcard)

### Paso 2: Validar propiedad del dominio

**DNS Validation (recomendado):**
1. ACM genera un registro CNAME
2. Agregas el CNAME en tu DNS (Route 53 lo hace automático)
3. ACM verifica y emite el certificado
4. Renovación automática mientras el CNAME exista

**Email Validation:**
1. ACM envía email a admin@, administrator@, hostmaster@, etc.
2. Haces clic en link de aprobación
3. ACM emite el certificado
4. Debes aprobar manualmente cada renovación

### Paso 3: Usar el certificado

Selecciona el certificado en el servicio (ELB, CloudFront, etc.)`,
    },
    {
      title: "Renovación Automática",
      content: `### Certificados Públicos con DNS Validation

**Renovación completamente automática:**
- ACM renueva ~60 días antes de expiración
- No requiere acción tuya
- El registro CNAME debe seguir existiendo

### Certificados Públicos con Email Validation

**Requiere acción manual:**
- ACM envía email de renovación
- Debes aprobar antes de expiración
- Riesgo de expiración si no recibes el email

### Certificados Importados

Si importas certificados de terceros (DigiCert, Let's Encrypt, etc.):
- **NO hay renovación automática**
- Debes renovar e importar manualmente
- ACM te notifica antes de expiración

### Monitoreo de expiración:

**CloudWatch Metrics:**
- \`DaysToExpiry\`: Días hasta expiración
- Crea alarma cuando DaysToExpiry < 30

**AWS Config:**
- Rule: \`acm-certificate-expiration-check\`
- Alerta si certificado expira pronto`,
    },
    {
      title: "ACM en el Examen CLF-C02",
      content: `### Puntos clave:

1. **Certificados públicos gratuitos** con ACM
2. **Renovación automática** con DNS validation
3. **Integrado con:** ELB, CloudFront, API Gateway
4. **No se puede usar directamente en EC2** (necesitas ELB o exportar privados)
5. **DNS validation > Email validation** (automático vs manual)
6. **Certificados importados** no se renuevan automáticamente

### Preguntas típicas:

*"¿Cómo obtener certificados SSL gratis para un sitio web en AWS?"*
→ AWS Certificate Manager (ACM)

*"¿Qué servicio gestiona certificados SSL con renovación automática?"*
→ AWS Certificate Manager

*"¿Cómo habilitar HTTPS en un Application Load Balancer?"*
→ Asociar un certificado de ACM al listener HTTPS

*"¿Qué método de validación permite renovación automática de certificados?"*
→ DNS Validation

*"¿Se puede usar un certificado ACM directamente en una instancia EC2?"*
→ No, se necesita un ELB frente a la instancia`,
    },
  ],
  keyPoints: [
    "ACM: Certificados SSL/TLS públicos gratuitos",
    "Renovación automática con DNS validation",
    "Integrado con: ELB, CloudFront, API Gateway",
    "DNS validation > Email validation (automático)",
    "No se puede usar directamente en EC2",
    "Certificados importados no se renuevan automáticamente",
    "Certificados privados requieren CA privada (pago)",
  ],
  tags: [
    "ACM",
    "SSL",
    "TLS",
    "certificados",
    "HTTPS",
    "seguridad",
    "cifrado",
  ],
  relatedServices: ["acm", "elb", "cloudfront", "api-gateway"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
