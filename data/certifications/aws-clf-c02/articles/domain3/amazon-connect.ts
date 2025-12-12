import { Article } from "@/types";

export const amazonConnect: Article = {
  id: "d3-art-15",
  slug: "amazon-connect",
  title: "Amazon Connect: Contact Center en la Nube",
  shortDescription:
    "Implementa un centro de contacto omnicanal escalable con IA integrada.",
  domainId: "domain3",
  content: {
    introduction:
      "Amazon Connect es un servicio de contact center omnicanal basado en la nube que facilita a las empresas ofrecer un mejor servicio al cliente a menor costo. Es el mismo sistema que usa el servicio de atención al cliente de Amazon.",
    sections: [
      {
        title: "¿Qué es Amazon Connect?",
        content: `Amazon Connect es un **centro de contacto en la nube** completamente administrado.

**Origen:**
- Desarrollado originalmente para el servicio al cliente de Amazon
- Disponible públicamente desde 2017
- Probado a escala masiva (millones de interacciones)

**Características principales:**
- **Omnicanal**: Voz y chat en una sola plataforma
- **Serverless**: Sin infraestructura que gestionar
- **Pay-per-use**: Pago por minuto/mensaje
- **Escalable**: De 10 a 10,000+ agentes
- **IA integrada**: Transcripción, análisis de sentimiento, bots

**Casos de uso:**
- Servicio al cliente
- Soporte técnico
- Ventas entrantes
- Encuestas y feedback
- Notificaciones salientes`,
      },
      {
        title: "Componentes Principales",
        content: `**Contact Flows:**
- Flujos visuales drag-and-drop
- Definen la experiencia del cliente
- IVR (Interactive Voice Response)
- Enrutamiento inteligente

**Queues (Colas):**
- Agrupan contactos similares
- Priorización configurable
- Métricas por cola

**Routing Profiles:**
- Definen qué colas puede atender un agente
- Prioridades entre colas
- Concurrencia (cuántos contactos simultáneos)

**Agent Workspace:**
- Interfaz para agentes
- Información del cliente
- Historial de contactos
- Softphone integrado

**Diagrama de flujo:**
\`\`\`
Cliente llama
     │
     ▼
Contact Flow (IVR)
"Presione 1 para ventas..."
     │
     ▼
Queue (Ventas)
     │
     ▼
Routing → Agente disponible
     │
     ▼
Agent Workspace
\`\`\``,
      },
      {
        title: "Capacidades de IA",
        content: `**Amazon Lex (Chatbots):**
- Bots de voz y texto
- Mismo motor que Alexa
- Entiende lenguaje natural
- Integración nativa con Connect

**Contact Lens:**
- Análisis en tiempo real de llamadas
- Transcripción automática
- Análisis de sentimiento
- Detección de temas y categorías
- Alertas para supervisores

**Amazon Q in Connect:**
- Asistente IA para agentes
- Sugiere respuestas en tiempo real
- Búsqueda en base de conocimiento
- Reduce tiempo de resolución

**Voice ID:**
- Autenticación por voz
- Verificación biométrica
- Detección de fraude
- Mejora experiencia del cliente

**Ejemplo de flujo con IA:**
\`\`\`
Cliente: "Quiero cancelar mi pedido"
     │
Lex Bot: Identifica intención "cancelar pedido"
     │
Connect: Solicita número de pedido
     │
Integración: Consulta sistema de pedidos
     │
Bot o Agente: Procesa cancelación
\`\`\``,
      },
      {
        title: "Integraciones",
        content: `**Integración con servicios AWS:**
- **Lambda**: Lógica personalizada en flows
- **DynamoDB**: Almacenar datos de contexto
- **S3**: Grabaciones de llamadas
- **Lex**: Chatbots y IVR conversacional
- **Polly**: Text-to-speech natural
- **Kinesis**: Streaming de datos en tiempo real

**CRM y terceros:**
- Salesforce
- ServiceNow
- Zendesk
- Microsoft Dynamics

**APIs y SDKs:**
- Streams API (datos en tiempo real)
- APIs para administración
- SDKs para desarrollo

**Ejemplo de integración Lambda:**
\`\`\`
Contact Flow
     │
"Invocar Lambda"
     │
     ▼
Lambda Function
├── Consulta CRM
├── Obtiene historial cliente
└── Retorna datos a flow
     │
     ▼
Contact Flow usa datos
para personalizar experiencia
\`\`\``,
      },
      {
        title: "Precios y Consideraciones",
        content: `**Modelo de precios (pago por uso):**

**Voz:**
- Entrante: ~$0.018/minuto
- Saliente: ~$0.018/minuto + costo telefonía

**Chat:**
- ~$0.004/mensaje

**Características adicionales:**
- Contact Lens: $0.015/minuto
- Voice ID: $0.025/transacción
- Tasks: $0.04/task

**Sin costos iniciales:**
- Sin licencias
- Sin servidores
- Sin compromisos mínimos

**Ejemplo de costo mensual:**
- 10,000 minutos de llamadas: ~$180
- 5,000 mensajes de chat: ~$20
- Total: ~$200/mes

**Consideraciones:**
- Costos de telefonía adicionales (números, PSTN)
- Almacenamiento de grabaciones en S3
- Funciones Lambda invocadas

**Ventajas vs tradicional:**
- Sin inversión inicial en infraestructura
- Escala elásticamente (Black Friday, etc.)
- Actualizaciones automáticas
- Innovación continua (nuevas features)`,
        note: "Amazon Connect puede reducir costos de contact center hasta 80% comparado con soluciones tradicionales.",
      },
      {
        title: "Implementación Típica",
        content: `**Pasos para comenzar:**

1. **Crear instancia Connect** (minutos, no semanas)
2. **Configurar números telefónicos** (claim o portar)
3. **Diseñar Contact Flows** (editor visual)
4. **Crear colas y routing profiles**
5. **Agregar agentes** (usuarios)
6. **Integrar con sistemas existentes** (opcional)

**Arquitectura empresarial:**
\`\`\`
                 Clientes
                    │
         ┌──────────┼──────────┐
         │          │          │
      Teléfono    Chat       Email
         │          │          │
         └──────────┼──────────┘
                    │
             Amazon Connect
         ┌──────────┼──────────┐
         │          │          │
    Contact Lens  Lambda    Lex Bot
         │          │          │
         └──────────┼──────────┘
                    │
              ┌─────┴─────┐
           Agentes      CRM
\`\`\`

**Mejores prácticas:**
- Empezar simple, iterar
- Usar análisis de Contact Lens para mejorar
- Diseñar flujos pensando en el cliente
- Medir y optimizar métricas clave`,
      },
    ],
  },
  keyTakeaways: [
    "Amazon Connect es contact center omnicanal serverless (voz y chat)",
    "Pago por uso (~$0.018/min voz, ~$0.004/mensaje chat)",
    "Contact Lens provee análisis de llamadas y sentimiento con IA",
    "Integra con Lambda, Lex, y CRMs como Salesforce",
    "Mismo sistema usado por el servicio al cliente de Amazon",
  ],
  relatedQuestions: ["q74"],
  tags: ["Connect", "contact center", "IVR", "omnicanal", "servicio al cliente"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
