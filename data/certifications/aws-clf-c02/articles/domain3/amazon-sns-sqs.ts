import { Article } from "@/types";

export const amazonSnsSqs: Article = {
  id: "d3-art-16",
  slug: "amazon-sns-sqs",
  title: "Amazon SNS y SQS: Mensajería en AWS",
  shortDescription:
    "Comprende los servicios de mensajería de AWS: notificaciones push con SNS y colas con SQS.",
  domainId: "domain3",
  content: {
    introduction:
      "Amazon Simple Notification Service (SNS) y Amazon Simple Queue Service (SQS) son servicios de mensajería fundamentales en AWS. SNS es para notificaciones pub/sub, mientras que SQS es para colas de mensajes que desacoplan componentes.",
    sections: [
      {
        title: "Amazon SNS: Notificaciones",
        content: `**¿Qué es SNS?**
SNS es un servicio de **mensajería pub/sub** completamente administrado.

**Modelo Pub/Sub:**
- **Publisher**: Quien envía el mensaje
- **Topic**: Canal de comunicación
- **Subscriber**: Quien recibe el mensaje

**Tipos de suscriptores:**
- HTTP/HTTPS endpoints
- Email/Email-JSON
- Amazon SQS
- AWS Lambda
- SMS (mensajes de texto)
- Aplicaciones móviles (push)

**Características:**
- Un mensaje → múltiples destinatarios
- Entrega instantánea (push)
- Filtrado de mensajes por atributos
- Cifrado con KMS

**Diagrama:**
\`\`\`
Publisher
    │
    ▼
SNS Topic ──┬──→ Lambda
            ├──→ SQS Queue
            ├──→ Email
            └──→ HTTP Endpoint
\`\`\``,
      },
      {
        title: "Amazon SQS: Colas de Mensajes",
        content: `**¿Qué es SQS?**
SQS es un servicio de **colas de mensajes** completamente administrado.

**Modelo de cola:**
- **Producer**: Envía mensajes a la cola
- **Queue**: Almacena mensajes
- **Consumer**: Lee y procesa mensajes

**Tipos de colas:**

**Standard Queue:**
- Throughput ilimitado
- Orden "best-effort" (puede variar)
- Entrega "at-least-once" (puede duplicar)
- Menor costo

**FIFO Queue:**
- 300 msg/s (o 3,000 con batching)
- Orden estricto garantizado
- Entrega "exactly-once"
- Nombre termina en .fifo

**Características:**
- Retención de mensajes: 1-14 días (default 4)
- Tamaño máximo: 256 KB
- Visibility timeout: tiempo que el mensaje es invisible
- Dead-letter queue para mensajes fallidos`,
        code: `// Ejemplo de envío a SQS
const response = await sqs.sendMessage({
  QueueUrl: 'https://sqs.us-east-1.amazonaws.com/123456/my-queue',
  MessageBody: JSON.stringify({ orderId: '12345' })
});`,
      },
      {
        title: "SNS vs SQS: Diferencias Clave",
        content: `| Característica | SNS | SQS |
|---------------|-----|-----|
| Modelo | Pub/Sub (push) | Cola (pull) |
| Destinatarios | Múltiples | Uno (por mensaje) |
| Persistencia | No persiste | Hasta 14 días |
| Reintentos | No | Sí (visibility timeout) |
| Uso típico | Notificaciones | Desacoplamiento |

**SNS es para:**
- Notificar múltiples sistemas de un evento
- Enviar alertas (email, SMS)
- Fan-out de mensajes

**SQS es para:**
- Desacoplar componentes
- Bufferear requests
- Procesamiento asíncrono
- Manejar picos de tráfico

**Ejemplo: SNS**
"Nuevo pedido creado" → Notificar a:
- Sistema de inventario
- Sistema de facturación
- Email al cliente

**Ejemplo: SQS**
Frontend → Cola → Workers procesan en background`,
      },
      {
        title: "Patrón Fan-Out (SNS + SQS)",
        content: `El patrón **Fan-Out** combina SNS y SQS para enviar un mensaje a múltiples colas.

**¿Por qué no solo SNS?**
- SNS no reintenta si el consumidor falla
- SQS permite reprocesar mensajes
- Cada consumidor procesa a su ritmo

**Arquitectura Fan-Out:**
\`\`\`
    Publisher
        │
        ▼
    SNS Topic
   ┌────┼────┐
   ▼    ▼    ▼
 SQS1  SQS2  SQS3
   │    │    │
   ▼    ▼    ▼
Worker Worker Worker
  A      B      C
\`\`\`

**Beneficios:**
- Cada servicio tiene su cola independiente
- Fallo en uno no afecta a otros
- Procesamiento paralelo
- Reintentos independientes

**Caso de uso:**
1. Nuevo pedido → SNS Topic "Pedidos"
2. SNS envía a 3 colas SQS:
   - Cola de inventario
   - Cola de facturación
   - Cola de notificaciones
3. Cada sistema procesa independientemente`,
        note: "El patrón Fan-Out es fundamental para arquitecturas desacopladas y resilientes.",
      },
      {
        title: "Casos de Uso Comunes",
        content: `**SNS - Notificaciones:**
- Alertas de CloudWatch a email/SMS
- Notificaciones push a móviles
- Webhook a sistemas externos
- Publicar eventos a múltiples Lambda

**SQS - Desacoplamiento:**
- Jobs de background (envío de emails, procesamiento de imágenes)
- Buffer para APIs con picos de tráfico
- Comunicación entre microservicios
- Ingesta de datos desde IoT

**Ejemplo: E-commerce**
\`\`\`
Checkout
    │
    ▼
SNS "Orden Creada"
    │
    ├──→ SQS "Procesar Pago"
    │         └──→ Lambda procesa pago
    │
    ├──→ SQS "Actualizar Inventario"
    │         └──→ Lambda actualiza stock
    │
    └──→ SQS "Enviar Email"
              └──→ Lambda envía confirmación
\`\`\`

**Ejemplo: Procesamiento de Imágenes**
\`\`\`
S3 Upload ──→ SNS ──→ SQS ──→ Lambda
                                │
                              Resize
                              Watermark
                              Thumbnail
\`\`\``,
      },
      {
        title: "Precios y Mejores Prácticas",
        content: `**Precios SNS:**
- Primeros 1 millón requests/mes: GRATIS
- Después: $0.50 por millón
- SMS tiene costos adicionales por mensaje

**Precios SQS:**
- Primer millón requests/mes: GRATIS
- Standard: $0.40 por millón después
- FIFO: $0.50 por millón

**Free Tier (siempre gratis):**
- 1 millón de requests SNS
- 1 millón de requests SQS

**Mejores prácticas SNS:**
- Usar filtros de mensajes para reducir ruido
- Configurar Dead-letter queue para entregas fallidas
- Cifrar topics sensibles con KMS

**Mejores prácticas SQS:**
- Configurar Dead-letter queue para mensajes fallidos
- Ajustar visibility timeout según tiempo de procesamiento
- Usar long polling para reducir costos
- Usar FIFO solo si realmente necesitas orden

**Long Polling vs Short Polling:**
- Short: Respuesta inmediata (puede ser vacía)
- Long: Espera hasta 20s por mensajes
- Long polling reduce costos y latencia`,
      },
    ],
  },
  keyTakeaways: [
    "SNS es pub/sub para notificar múltiples suscriptores de un evento",
    "SQS es cola de mensajes para desacoplar y bufferear componentes",
    "Patrón Fan-Out combina SNS + SQS para durabilidad y paralelismo",
    "SQS Standard es más rápido, FIFO garantiza orden y exactly-once",
    "Ambos tienen 1 millón de requests gratis mensuales",
  ],
  relatedQuestions: ["q75", "q76"],
  tags: ["SNS", "SQS", "mensajería", "pub/sub", "colas", "desacoplamiento"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
