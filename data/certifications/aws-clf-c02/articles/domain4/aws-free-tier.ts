import { Article } from "@/types";

export const awsFreeTier: Article = {
  id: "d4-art-07",
  slug: "aws-free-tier",
  title: "AWS Free Tier: Aprende sin Costo",
  shortDescription:
    "Conoce los tres tipos de Free Tier de AWS y cómo aprovecharlos al máximo.",
  domainId: "domain4",
  content: {
    introduction:
      "AWS Free Tier permite explorar y probar servicios de AWS sin costo. Existen tres tipos de ofertas gratuitas que ayudan a nuevos usuarios a experimentar con la nube y a usuarios existentes a probar nuevos servicios.",
    sections: [
      {
        title: "Tipos de Free Tier",
        content: `AWS ofrece **tres tipos de ofertas gratuitas**:

**1. Always Free (Siempre gratis):**
- Disponible para todos los clientes AWS
- Sin límite de tiempo
- Ciertos límites de uso

**2. 12 Months Free:**
- Para nuevos clientes AWS
- 12 meses desde la creación de la cuenta
- Límites mensuales específicos

**3. Trials (Pruebas):**
- Para servicios específicos
- Período corto (típicamente 30-60 días)
- Al activar el servicio por primera vez

**Importante:**
- Superar los límites genera cargos normales
- Monitorear uso es crítico
- Configurar alertas de billing`,
      },
      {
        title: "Servicios Always Free",
        content: `Servicios gratuitos **sin límite de tiempo**:

| Servicio | Límite Gratuito |
|----------|-----------------|
| Lambda | 1M requests, 400K GB-s/mes |
| DynamoDB | 25 GB, 25 RCU, 25 WCU |
| SNS | 1M publicaciones |
| SQS | 1M requests |
| CloudWatch | 10 alarmas, 5 GB logs |
| Cognito | 50,000 MAUs |
| CodeBuild | 100 min/mes |
| CodePipeline | 1 pipeline activo |
| CloudFormation | Gratis (solo recursos) |
| IAM | Siempre gratis |
| VPC | Siempre gratis |

**Ejemplos de uso Always Free:**
- Aplicación serverless pequeña
- Sitio web estático con S3
- APIs con bajo tráfico
- Proyectos de aprendizaje

**Lambda Always Free:**
\`\`\`
1 millón de requests/mes
+ 400,000 GB-segundos

Ejemplo:
- 1M invocaciones de 128MB x 200ms
= 25,600 GB-segundos (dentro del free tier)
\`\`\``,
      },
      {
        title: "Servicios 12 Months Free",
        content: `Gratuitos durante **12 meses** para nuevas cuentas:

| Servicio | Límite Mensual |
|----------|----------------|
| EC2 | 750 hrs t2.micro (o t3.micro) |
| S3 | 5 GB, 20,000 GET, 2,000 PUT |
| RDS | 750 hrs db.t2.micro |
| ElastiCache | 750 hrs cache.t2.micro |
| EBS | 30 GB SSD |
| Data Transfer | 15 GB saliente |
| CloudFront | 1 TB transfer, 10M requests |
| API Gateway | 1M calls |
| Lightsail | 750 hrs (3 meses) |

**EC2 Free Tier ejemplo:**
\`\`\`
750 horas/mes de t2.micro
= ~31 días × 24 hrs = 744 hrs
= 1 instancia 24/7 gratis

O: 2 instancias × 375 hrs c/u
O: múltiples instancias que sumen ≤750 hrs
\`\`\`

**Consideraciones:**
- Solo Linux o Windows (Windows cuenta igual)
- Solo regiones que soporten t2.micro/t3.micro
- Se acumulan todas las instancias
- El día 366 empieza el cobro automáticamente`,
        note: "El reloj de 12 meses empieza cuando creas la cuenta AWS, no cuando usas un servicio por primera vez.",
      },
      {
        title: "Trials (Pruebas)",
        content: `**Pruebas cortas** de servicios específicos:

| Servicio | Trial |
|----------|-------|
| SageMaker | 250 hrs/mes × 2 meses |
| Redshift | 750 hrs × 2 meses |
| QuickSight | 30 días |
| Inspector | 90 días |
| GuardDuty | 30 días |
| Macie | 30 días |
| Detective | 30 días |
| Comprehend Medical | 30 días |

**Ejemplo: GuardDuty Trial**
- 30 días gratis al activar
- Detecta amenazas durante el trial
- Evalúa si vale la pena el costo
- Decide antes de que termine

**Activar trials:**
- Generalmente automático al habilitar
- Algunos requieren registro explícito
- Revisar términos específicos

**Tips:**
- Usar trials para evaluar servicios costosos
- Configurar reminder para cuando termina
- Documentar hallazgos durante el trial`,
      },
      {
        title: "Evitar Cargos Inesperados",
        content: `**Errores comunes:**

**1. Dejar recursos corriendo:**
- EC2 instances olvidadas
- RDS sin eliminar
- EBS volumes huérfanos
- NAT Gateways (no son Free Tier)

**2. Elegir el tipo incorrecto:**
- t2.medium en lugar de t2.micro
- Región sin Free Tier
- Multi-AZ RDS (no es gratis)

**3. Exceder límites:**
- Múltiples instancias que suman > 750 hrs
- S3 con más de 5 GB
- Data transfer excesivo

**Configurar alertas:**
\`\`\`
AWS Budgets:
- Budget: $0.01
- Alerta: 1 centavo de cargo

Resultado: Notificación inmediata
si algo genera costo
\`\`\`

**Checklist de limpieza:**
- Terminar EC2 instances
- Eliminar EBS volumes
- Vaciar y eliminar S3 buckets
- Eliminar NAT Gateways
- Liberar Elastic IPs no usadas
- Eliminar RDS instances
- Revisar todas las regiones`,
        note: "Siempre revisa TODAS las regiones. Es común dejar recursos en regiones que olvidaste.",
      },
      {
        title: "Monitorear Uso de Free Tier",
        content: `**Herramientas de monitoreo:**

**Billing Dashboard:**
- Resumen de Free Tier usage
- Porcentaje utilizado por servicio
- Proyección si excederás

**AWS Budgets (Zero Spend):**
\`\`\`
1. Crear budget de $0.01
2. Alerta al 100%
3. Recibir notificación ante cualquier cargo
\`\`\`

**Free Tier Usage Alerts:**
- Billing → Preferences
- Recibir email cuando te acerques al 85%
- Habilitado por defecto

**Cost Explorer:**
- Ver detalles de uso
- Identificar qué servicio genera costo
- Analizar tendencias

**Ejemplo de dashboard Free Tier:**
\`\`\`
EC2: 450/750 hrs (60%)
S3: 2.1/5 GB (42%)
RDS: 0/750 hrs (0%)
Lambda: 50K/1M requests (5%)
Data Transfer: 8/15 GB (53%)
\`\`\`

**Recomendaciones:**
- Revisar semanalmente durante el aprendizaje
- Usar tags para identificar recursos de prueba
- Crear cuenta separada para experimentación
- Eliminar recursos inmediatamente después de labs`,
      },
    ],
  },
  keyTakeaways: [
    "Tres tipos: Always Free (permanente), 12 Months Free, y Trials",
    "EC2 t2.micro: 750 hrs/mes gratis por 12 meses",
    "Lambda y DynamoDB tienen límites Always Free generosos",
    "Configurar alertas de billing con budget de $0.01",
    "Los 12 meses empiezan al crear la cuenta, no al usar el servicio",
  ],
  relatedQuestions: ["q92"],
  tags: ["Free Tier", "gratis", "costos", "aprendizaje", "pruebas"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
