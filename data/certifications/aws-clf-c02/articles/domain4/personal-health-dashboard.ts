import { Article } from "@/types";

export const personalHealthDashboard: Article = {
  id: "d4-art-10",
  slug: "personal-health-dashboard",
  title: "AWS Health Dashboard y Personal Health Dashboard",
  shortDescription:
    "Monitorea el estado de servicios AWS y eventos que afectan tus recursos.",
  domainId: "domain4",
  content: {
    introduction:
      "AWS proporciona dashboards para monitorear el estado de los servicios a nivel global y personal. Entender la diferencia entre Service Health Dashboard y Personal Health Dashboard es importante para el examen y para la operación diaria.",
    sections: [
      {
        title: "Dos Dashboards de Salud",
        content: `**AWS ofrece dos vistas diferentes:**

**1. Service Health Dashboard (status.aws.amazon.com):**
- Vista pública de todos los servicios AWS
- Estado global por región
- Historial de incidentes
- Accesible sin cuenta AWS

**2. Personal Health Dashboard (PHD):**
- Vista personalizada para TU cuenta
- Solo eventos que afectan TUS recursos
- Alertas proactivas
- Recomendaciones específicas
- Requiere cuenta AWS

**Comparación:**
\`\`\`
Característica         | Service Health | Personal Health
-----------------------|----------------|----------------
Acceso                 | Público        | Requiere cuenta
Scope                  | Todos          | Tus recursos
Alertas proactivas     | ❌             | ✅
Recomendaciones        | ❌             | ✅
Afectación directa     | No muestra     | ✅ Específica
Integración EventBridge| ❌             | ✅
\`\`\``,
      },
      {
        title: "Service Health Dashboard",
        content: `**Vista global del estado de AWS:**

**URL:** status.aws.amazon.com

**Información disponible:**
- Estado actual de cada servicio
- Estado por región
- Incidentes en progreso
- Historial de 12 meses

**Iconos de estado:**
\`\`\`
✅ Verde: Servicio operando normalmente
⚠️ Amarillo: Degradación de rendimiento
🔴 Rojo: Interrupción del servicio
📋 Azul: Información/Mantenimiento
\`\`\`

**Ejemplo de vista:**
\`\`\`
Amazon EC2 (N. Virginia)    ✅
Amazon EC2 (Ohio)           ✅
Amazon S3                   ✅
Amazon RDS (N. Virginia)    ⚠️ Performance Issues
AWS Lambda                  ✅
\`\`\`

**Limitaciones:**
- Solo muestra información general
- No sabes si TUS recursos están afectados
- Sin alertas personalizadas
- Sin recomendaciones de acción`,
      },
      {
        title: "Personal Health Dashboard",
        content: `**Vista personalizada para tu cuenta:**

**Acceso:** AWS Console → AWS Health Dashboard

**Características:**
- Eventos que afectan TUS recursos específicos
- Alertas antes de que ocurran problemas
- Recomendaciones de acción
- Notificaciones personalizadas

**Tipos de eventos:**

**1. Open Issues:**
\`\`\`
Problemas activos que afectan tus recursos
Ejemplo: "EC2 instance i-1234 affected by
hardware issue in us-east-1a"
\`\`\`

**2. Scheduled Changes:**
\`\`\`
Mantenimientos programados
Ejemplo: "RDS maintenance scheduled for
db-prod on 2024-03-15 02:00 UTC"
\`\`\`

**3. Other Notifications:**
\`\`\`
Información importante
Ejemplo: "Security update available for
your EC2 instances running kernel 5.x"
\`\`\`

**Ejemplo de alerta:**
\`\`\`
Event: AWS_EC2_INSTANCE_RETIREMENT
Status: Scheduled
Region: us-east-1
Affected Resources:
  - i-0abc123def456789
  - i-0def456789abc123
Action Required: Migrate before 2024-03-20
\`\`\``,
        note: "PHD te avisa ANTES de que algo afecte tus recursos, permitiendo acción proactiva.",
      },
      {
        title: "AWS Health API",
        content: `**Acceso programático a eventos de salud:**

**Disponibilidad:**
- Requiere Business o Enterprise Support
- O AWS Organizations con feature habilitado

**Endpoints:**
\`\`\`
Global: health.us-east-1.amazonaws.com
\`\`\`

**Operaciones principales:**
\`\`\`python
import boto3

health = boto3.client('health', region_name='us-east-1')

# Listar eventos que afectan tu cuenta
events = health.describe_events(
    filter={
        'eventStatusCodes': ['open', 'upcoming'],
        'eventTypeCategories': ['issue', 'scheduledChange']
    }
)

# Obtener detalles de evento
event_details = health.describe_event_details(
    eventArns=['arn:aws:health:...']
)

# Recursos afectados
affected = health.describe_affected_entities(
    filter={'eventArns': ['arn:aws:health:...']}
)
\`\`\`

**Casos de uso:**
- Automatizar respuesta a eventos
- Integrar con sistemas de ticketing
- Dashboards personalizados
- Alertas a Slack/Teams`,
      },
      {
        title: "Integración con EventBridge",
        content: `**Automatiza respuestas a eventos de salud:**

**Configuración:**
\`\`\`json
{
  "source": ["aws.health"],
  "detail-type": ["AWS Health Event"],
  "detail": {
    "service": ["EC2"],
    "eventTypeCategory": ["scheduledChange"]
  }
}
\`\`\`

**Ejemplo de evento:**
\`\`\`json
{
  "source": "aws.health",
  "detail-type": "AWS Health Event",
  "detail": {
    "eventArn": "arn:aws:health:us-east-1::event/...",
    "service": "EC2",
    "eventTypeCode": "AWS_EC2_INSTANCE_RETIREMENT",
    "eventTypeCategory": "scheduledChange",
    "startTime": "2024-03-10T00:00:00Z",
    "endTime": "2024-03-20T23:59:59Z",
    "affectedEntities": [
      {"entityValue": "i-0abc123def456789"}
    ]
  }
}
\`\`\`

**Acciones automáticas:**
1. **Notificación:**
   - SNS → Email/SMS
   - Lambda → Slack/Teams
   - Lambda → PagerDuty

2. **Remediación:**
   - Lambda para migrar instancias
   - SSM Automation para patches
   - Stop/Start automático

**Arquitectura típica:**
\`\`\`
AWS Health Event
    ↓
EventBridge Rule
    ↓
SNS Topic → Email, SMS
    ↓
Lambda → Slack, crear ticket JIRA
    ↓
SSM Automation → Remediar
\`\`\``,
      },
      {
        title: "Organizational Health",
        content: `**Vista centralizada para múltiples cuentas:**

**Con AWS Organizations:**
- Ver eventos de todas las cuentas miembro
- Agregación centralizada
- Gestión desde cuenta management

**Configuración:**
1. Habilitar AWS Health Organizational View
2. Acceso desde cuenta management
3. Ver eventos de todas las cuentas

**Beneficios:**
- Un dashboard para toda la organización
- Detectar patrones entre cuentas
- Respuesta coordinada
- Reportes consolidados

**Filtros disponibles:**
\`\`\`
- Por cuenta específica
- Por región
- Por servicio
- Por tipo de evento
- Por estado
\`\`\`

**Caso de uso:**
\`\`\`
Empresa con 50 cuentas AWS
- Equipo de operaciones central
- Monitorea salud de todas las cuentas
- Alerta al equipo correcto según cuenta
- Tracking de SLAs internos
\`\`\``,
        note: "Organizational Health requiere AWS Organizations y acceso desde la cuenta management.",
      },
      {
        title: "Comparación con Otros Servicios",
        content: `**No confundir con:**

**CloudWatch:**
- Métricas y logs de TUS recursos
- Alarmas basadas en umbrales
- Dashboards personalizados
- No muestra problemas de infraestructura AWS

**Service Health Dashboard:**
- Estado público de AWS
- No personalizado
- Sin API

**Personal Health Dashboard:**
- Específico para TUS recursos
- Proactivo
- Con API
- Integración EventBridge

**Trusted Advisor:**
- Recomendaciones de mejora
- No eventos en tiempo real
- Checks programados

**Resumen para el examen:**
\`\`\`
Pregunta sobre...              → Respuesta
Estado general de AWS          → Service Health Dashboard
Eventos que afectan MI cuenta  → Personal Health Dashboard
Métricas de mis recursos       → CloudWatch
Recomendaciones de mejora      → Trusted Advisor
\`\`\`

**Preguntas típicas:**
- "¿Cómo saber si un servicio AWS tiene problemas?"
  → Service Health Dashboard
  
- "¿Cómo recibir alertas cuando MIS recursos están afectados?"
  → Personal Health Dashboard + EventBridge
  
- "¿Cómo automatizar respuesta a eventos de salud?"
  → Personal Health Dashboard + EventBridge + Lambda`,
      },
    ],
  },
  keyTakeaways: [
    "Service Health Dashboard: estado público de todos los servicios AWS",
    "Personal Health Dashboard: eventos específicos que afectan TUS recursos",
    "PHD proporciona alertas proactivas antes de que ocurran problemas",
    "Health API requiere Business o Enterprise Support",
    "EventBridge permite automatizar respuestas a eventos de salud",
  ],
  relatedQuestions: ["q90", "q100"],
  tags: [
    "Health Dashboard",
    "monitoreo",
    "alertas",
    "incidentes",
    "EventBridge",
  ],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
