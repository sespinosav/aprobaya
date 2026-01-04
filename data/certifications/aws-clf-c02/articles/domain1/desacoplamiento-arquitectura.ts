import { Article } from "@/types";

export const desacoplamientoArquitectura: Article = {
  id: "d1-art-06",
  slug: "desacoplamiento-arquitectura",
  title: "Desacoplamiento de Arquitectura",
  shortDescription:
    "Aprende cómo diseñar sistemas desacoplados y resilientes usando servicios de mensajería AWS.",
  certificationId: "aws-clf-c02",
  domainId: "cloud-concepts",
  content: [
    {
      title: "¿Qué es el Desacoplamiento?",
      content: `El **desacoplamiento** (loose coupling) es un principio de diseño donde los componentes de un sistema interactúan de manera independiente, sin depender directamente unos de otros.

### Arquitectura Acoplada (Tight Coupling)
\`\`\`
[Frontend] ──→ [Backend API] ──→ [Procesamiento] ──→ [Base de datos]
\`\`\`

**Problemas:**
- Si el procesamiento falla, todo el sistema falla
- Si el backend está lento, el frontend se bloquea
- No puede escalar componentes independientemente
- Cambios en un componente pueden romper otros

### Arquitectura Desacoplada (Loose Coupling)
\`\`\`
[Frontend] ──→ [API Gateway] ──→ [Cola SQS] ──→ [Workers Lambda]
                                      │
                                      ↓
                               [Base de datos]
\`\`\`

**Beneficios:**
- Si los workers fallan, los mensajes esperan en la cola
- El frontend responde inmediatamente sin esperar el procesamiento
- Puedes escalar workers según la cola
- Componentes pueden actualizarse independientemente`,
    },
    {
      title: "Patrones de Desacoplamiento",
      content: `### 1. Colas de Mensajes (Message Queues)
Los productores envían mensajes a una cola, los consumidores los procesan cuando pueden.

**Servicio AWS:** Amazon SQS (Simple Queue Service)

**Características:**
- Mensajes se almacenan hasta ser procesados
- Múltiples consumidores pueden leer de la cola, pero solo uno procesa el mensaje
- Si un consumidor falla, el mensaje vuelve a la cola
- Escala automáticamente

### 2. Publicación/Suscripción (Pub/Sub)
Los publicadores envían mensajes a un "topic", múltiples suscriptores reciben copias.

**Servicio AWS:** Amazon SNS (Simple Notification Service)

**Características:**
- Un mensaje llega a muchos destinos
- Suscriptores pueden ser: email, SMS, Lambda, SQS, HTTP
- Filtrado de mensajes por atributos
- Ideal para fan-out (un evento, múltiples reacciones)

### 3. Event-Driven Architecture
Los componentes reaccionan a eventos sin conocerse entre sí.

**Servicio AWS:** Amazon EventBridge

**Características:**
- Bus de eventos centralizado
- Reglas que enrutan eventos a targets
- Integración con servicios AWS y SaaS
- Eventos programados (cron)`,
    },
    {
      title: "Amazon SQS en Detalle",
      content: `### Tipos de Colas:

| Tipo | Orden | Duplicados | Throughput |
|------|-------|------------|------------|
| **Standard** | Mejor esfuerzo | Posibles | Casi ilimitado |
| **FIFO** | Garantizado | Eliminados | 3,000 msg/seg (con batching) |

### Conceptos clave:

**Visibility Timeout:**
- Tiempo que un mensaje está "invisible" mientras se procesa
- Si el consumer no lo elimina, vuelve a estar visible
- Default: 30 segundos

**Dead Letter Queue (DLQ):**
- Cola donde van mensajes que fallan repetidamente
- Configuras cuántos reintentos antes de mover a DLQ
- Permite investigar problemas sin bloquear la cola principal

**Long Polling:**
- El consumer espera hasta que haya mensajes
- Reduce llamadas vacías (y costos)
- Hasta 20 segundos de espera

### Caso de uso típico:
\`\`\`
[Pedidos Web] → [SQS Cola] → [Lambda Processor] → [DynamoDB]
                    │
                    └── [DLQ para pedidos fallidos]
\`\`\``,
    },
    {
      title: "Amazon SNS en Detalle",
      content: `### Modelo Pub/Sub:

\`\`\`
                    ┌─→ [Email]
[Publicador] → [Topic SNS] ─→ [Lambda]
                    ├─→ [SQS Cola]
                    └─→ [SMS]
\`\`\`

### Tipos de suscriptores:
- **HTTP/HTTPS endpoints**
- **Email / Email-JSON**
- **SMS** (mensajes de texto)
- **Amazon SQS** (colas)
- **AWS Lambda** (funciones)
- **Amazon Kinesis Data Firehose**
- **Aplicaciones de plataforma** (push notifications)

### Características:
- **Message Filtering:** Los suscriptores pueden filtrar qué mensajes reciben
- **Message Fanout:** Un mensaje → múltiples destinos
- **Delivery Retry:** Reintentos automáticos con backoff

### Caso de uso: Sistema de alertas
\`\`\`
[CloudWatch Alarm] → [SNS Topic] ─→ [Email a DevOps]
                              ├─→ [SMS a On-Call]
                              └─→ [Lambda para Slack]
\`\`\``,
    },
    {
      title: "Amazon EventBridge",
      content: `### ¿Qué es?
**EventBridge** es un bus de eventos serverless que conecta aplicaciones usando eventos.

### Componentes:
1. **Event Bus:** Donde llegan los eventos
2. **Rules:** Condiciones para enrutar eventos
3. **Targets:** Destinos de los eventos (Lambda, SQS, Step Functions, etc.)

### Fuentes de eventos:
- **Servicios AWS:** EC2 state change, S3 uploads, etc.
- **Aplicaciones propias:** Eventos personalizados
- **Partners SaaS:** Zendesk, Datadog, Auth0, etc.
- **Scheduled:** Eventos tipo cron

### Ejemplo de regla:
\`\`\`json
{
  "source": ["aws.ec2"],
  "detail-type": ["EC2 Instance State-change Notification"],
  "detail": {
    "state": ["terminated"]
  }
}
\`\`\`
*"Cuando una instancia EC2 se termine, ejecutar Lambda"*

### Ventajas sobre SNS:
- Schema Registry (validación de eventos)
- Integración nativa con SaaS
- Reglas más complejas (filtering avanzado)
- Archive & Replay de eventos`,
    },
    {
      title: "Comparación: SQS vs SNS vs EventBridge",
      content: `| Característica | SQS | SNS | EventBridge |
|----------------|-----|-----|-------------|
| **Modelo** | Cola (point-to-point) | Pub/Sub | Event Bus |
| **Consumidores** | 1 por mensaje | Múltiples (fanout) | Múltiples (por reglas) |
| **Retención** | Hasta 14 días | No retiene | Archive opcional |
| **Orden** | FIFO disponible | No garantizado | No garantizado |
| **Caso típico** | Procesamiento async | Notificaciones | Event-driven |

### ¿Cuándo usar cada uno?

**SQS:**
- Procesar tareas en background
- Desacoplar microservicios
- Manejar picos de carga

**SNS:**
- Enviar notificaciones a múltiples destinos
- Alertas y alarmas
- Fanout pattern

**EventBridge:**
- Arquitecturas event-driven complejas
- Integración con SaaS
- Workflows basados en eventos AWS`,
    },
    {
      title: "Patrón: SQS + SNS (Fanout)",
      content: `Un patrón muy común es combinar SNS (fanout) con SQS (buffering):

\`\`\`
                         ┌─→ [SQS Cola A] → [Service A]
[Productor] → [SNS Topic] ─→ [SQS Cola B] → [Service B]
                         └─→ [SQS Cola C] → [Service C]
\`\`\`

### Beneficios:
1. **Un mensaje → Múltiples procesamientos** (SNS)
2. **Cada servicio procesa a su ritmo** (SQS buffer)
3. **Si un servicio falla, no afecta a otros**
4. **Cada cola puede tener su DLQ**

### Ejemplo: Sistema de e-commerce
Cuando se realiza un pedido:
1. SNS envía evento a 3 colas
2. Cola A → Servicio de inventario
3. Cola B → Servicio de envío
4. Cola C → Servicio de notificaciones

Cada servicio procesa independientemente. Si el servicio de envío está lento, los otros no se ven afectados.`,
    },
  ],
  keyPoints: [
    "Desacoplamiento: Componentes independientes, sistemas resilientes",
    "SQS: Colas de mensajes (Standard o FIFO)",
    "SNS: Publicación/Suscripción para múltiples destinos",
    "EventBridge: Bus de eventos para arquitecturas event-driven",
    "Dead Letter Queue (DLQ): Captura mensajes que fallan repetidamente",
    "Patrón Fanout: SNS + múltiples colas SQS",
    "Visibility Timeout: Tiempo que mensaje es invisible mientras se procesa",
  ],
  tags: [
    "desacoplamiento",
    "SQS",
    "SNS",
    "EventBridge",
    "colas",
    "mensajería",
    "pub/sub",
    "fanout",
    "arquitectura",
  ],
  relatedServices: ["sqs", "sns", "eventbridge", "lambda"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};

