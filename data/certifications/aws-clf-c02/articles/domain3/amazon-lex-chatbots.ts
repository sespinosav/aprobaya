import { Article } from "@/types";

export const amazonLexChatbots: Article = {
  id: "d3-art-19",
  slug: "amazon-lex-chatbots",
  title: "Amazon Lex: Chatbots con IA Conversacional",
  shortDescription:
    "Crea chatbots de voz y texto con la misma tecnología que impulsa a Alexa.",
  domainId: "domain3",
  content: {
    introduction:
      "Amazon Lex es un servicio para crear interfaces conversacionales de voz y texto. Usa la misma tecnología de deep learning que impulsa a Alexa, permitiendo crear chatbots sofisticados con reconocimiento de voz y comprensión de lenguaje natural.",
    sections: [
      {
        title: "¿Qué es Amazon Lex?",
        content: `Lex es un servicio para crear **interfaces conversacionales** (chatbots).

**Tecnología:**
- Mismo motor que Amazon Alexa
- Automatic Speech Recognition (ASR)
- Natural Language Understanding (NLU)

**Capacidades:**
- Entender intenciones del usuario
- Extraer información (slots)
- Mantener contexto de conversación
- Voz y texto

**Casos de uso:**
- Bots de servicio al cliente
- Asistentes virtuales
- IVR conversacional
- Automatización de tareas

**Ejemplo de interacción:**
\`\`\`
Usuario: "Quiero reservar un hotel en París para 3 noches"

Lex identifica:
- Intent: ReservarHotel
- Slots:
  - ciudad: París
  - noches: 3
  - fecha: [faltante, pregunta]

Lex: "¿Para qué fecha desea la reserva?"
\`\`\``,
      },
      {
        title: "Conceptos Fundamentales",
        content: `**Intent (Intención):**
- Lo que el usuario quiere hacer
- Ejemplo: ReservarVuelo, ConsultarSaldo, CancelarPedido

**Utterances (Expresiones):**
- Formas en que el usuario puede expresar el intent
- "Quiero reservar un vuelo"
- "Necesito un boleto de avión"
- "Busco vuelos a Madrid"

**Slots:**
- Información que Lex necesita recopilar
- Ejemplo: ciudad_origen, ciudad_destino, fecha
- Tipos: built-in (fecha, número) o custom

**Slot Types:**
- AMAZON.City, AMAZON.Date, AMAZON.Number
- Custom: tamaños de pizza, tipos de cuenta

**Fulfillment:**
- Qué hacer cuando se tiene toda la información
- Llamar a Lambda para procesar
- Devolver respuesta al usuario

**Diagrama:**
\`\`\`
Usuario dice algo
       │
       ▼
  ASR (Speech to Text)
       │
       ▼
  NLU (Entender)
  ├── Identificar Intent
  └── Extraer Slots
       │
       ▼
  ¿Slots completos?
   No │     │ Sí
      ▼     ▼
   Preguntar   Lambda
   por slots   (fulfillment)
\`\`\``,
      },
      {
        title: "Lex V2: Características Avanzadas",
        content: `**Mejoras en Lex V2:**
- Múltiples idiomas por bot
- Múltiples intents por turno
- Streaming de audio mejorado
- Mejor manejo de contexto

**Multi-language:**
- Español, inglés, francés, alemán, italiano...
- Mismo bot, diferentes idiomas
- Localización de respuestas

**Contexts (Contextos):**
- Mantener información entre intents
- Input context: qué info ya tenemos
- Output context: qué dejamos para siguiente intent

**Ejemplo con contexto:**
\`\`\`
Usuario: "Reservar hotel en Madrid"
Bot: [Recopila info, reserva] "Reservado. ¿Algo más?"
       └── Context: {ciudad: Madrid, fechas: ...}

Usuario: "También quiero un auto"
Bot: Usa contexto de Madrid para la reserva de auto
\`\`\`

**Conversation flow:**
- Visual conversation builder
- Condiciones y ramas
- Respuestas dinámicas`,
      },
      {
        title: "Integración con Otros Servicios",
        content: `**Amazon Connect:**
- Contact center con IVR conversacional
- Lex maneja la conversación
- Connect maneja telefonía y agentes

**AWS Lambda:**
- Lógica de fulfillment
- Validación de datos
- Integración con sistemas backend

**Amazon Polly:**
- Convierte texto a voz natural
- Múltiples voces y estilos
- Para respuestas de audio

**Amazon Kendra:**
- Búsqueda inteligente
- FAQ automation
- Respuestas basadas en documentos

**Canales de deployment:**
- Facebook Messenger
- Slack
- Twilio SMS
- Web (JavaScript SDK)
- Amazon Connect (voz)

**Arquitectura típica:**
\`\`\`
Canal (web, messenger)
       │
       ▼
   Amazon Lex
       │
       ├── Validación (Lambda)
       │
       ├── Fulfillment (Lambda)
       │        │
       │        ▼
       │   Backend/DB
       │
       └── Respuesta
           │
           ▼
       Usuario
\`\`\``,
      },
      {
        title: "Precios y Mejores Prácticas",
        content: `**Modelo de precios:**
- Pago por request de texto o voz
- Sin costos iniciales

**Precios (aproximados):**
| Tipo | Precio |
|------|--------|
| Texto | $0.00075/request |
| Voz | $0.004/request de 15 segundos |

**Free Tier (primer año):**
- 10,000 requests de texto/mes
- 5,000 requests de voz/mes

**Mejores prácticas:**

**Diseño de conversación:**
- Empezar con intents más comunes
- Utterances variadas (10+ por intent)
- Confirmar información crítica
- Manejar "no entendí" gracefully

**Slots:**
- Usar tipos built-in cuando sea posible
- Validar con Lambda
- Prompts claros para solicitar info

**Testing:**
- Probar con usuarios reales
- Revisar logs de conversaciones
- Iterar y mejorar utterances

**Fallback intent:**
- Siempre configurar uno
- Escalación a humano cuando sea necesario
- Recopilar feedback`,
        note: "Un buen fallback intent es crucial para la experiencia del usuario cuando el bot no entiende.",
      },
      {
        title: "Ejemplo Práctico: Bot de Pedidos",
        content: `**Bot para pizzería:**

**Intent: PedirPizza**
\`\`\`yaml
Utterances:
  - "Quiero ordenar una pizza"
  - "Me gustaría una pizza"
  - "Pizza por favor"
  - "Quisiera pedir una {Tamaño} de {Sabor}"

Slots:
  - Tamaño: pequeña, mediana, grande
  - Sabor: pepperoni, hawaiana, margherita
  - Direccion: AMAZON.StreetAddress

Confirmación: "¿Confirma pizza {Tamaño} de {Sabor} a {Direccion}?"

Fulfillment: Lambda → Crea orden → Responde con tiempo estimado
\`\`\`

**Intent: ConsultarEstado**
\`\`\`yaml
Utterances:
  - "¿Dónde está mi pizza?"
  - "Estado de mi pedido"
  - "¿Cuánto falta?"

Slots:
  - NumeroPedido: AMAZON.Number (o extraer de contexto)

Fulfillment: Lambda → Consulta BD → Responde estado
\`\`\`

**Flujo completo:**
\`\`\`
Usuario: "Quiero una pizza grande de pepperoni"
Lex: "¿A qué dirección la enviamos?"
Usuario: "Calle Principal 123"
Lex: "¿Confirma pizza grande de pepperoni a Calle Principal 123?"
Usuario: "Sí"
Lambda: Crea pedido #456
Lex: "¡Perfecto! Su pedido #456 llegará en 30 minutos"
\`\`\``,
      },
    ],
  },
  keyTakeaways: [
    "Lex usa la misma tecnología de Alexa para chatbots de voz y texto",
    "Intents definen qué quiere el usuario, Slots son los datos a recopilar",
    "Lambda handles fulfillment y lógica de negocio",
    "Integra con Connect para contact centers, Polly para voz",
    "Free tier incluye 10K requests texto y 5K voz mensuales",
  ],
  relatedQuestions: ["q74", "q79"],
  tags: ["Lex", "chatbots", "NLU", "conversacional", "Alexa"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
