import { Article } from "@/types";

export const awsLambdaServerless: Article = {
  id: "d3-art-05",
  slug: "aws-lambda-serverless",
  title: "AWS Lambda y Computación Serverless",
  shortDescription:
    "Entiende el modelo serverless con AWS Lambda: ejecución de código sin administrar servidores.",
  domainId: "domain3",
  content: {
    introduction:
      "AWS Lambda es el servicio de computación serverless de AWS que permite ejecutar código sin aprovisionar ni administrar servidores. Solo pagas por el tiempo de cómputo consumido, sin cargo cuando el código no se ejecuta.",
    sections: [
      {
        title: "¿Qué es Serverless?",
        content: `**Serverless** no significa "sin servidores" - significa que **tú no administras servidores**.

**Características del modelo serverless:**
- **Sin aprovisionamiento**: No configuras servidores, OS ni parches
- **Escalado automático**: De cero a miles de ejecuciones simultáneas
- **Pago por uso**: Solo pagas cuando tu código se ejecuta
- **Alta disponibilidad integrada**: AWS gestiona la infraestructura

**Ventajas:**
- Menor costo operativo
- Tiempo de desarrollo más rápido
- Escalabilidad automática
- Sin capacidad ociosa

**Limitaciones:**
- Timeout máximo (15 minutos en Lambda)
- Estado efímero (stateless)
- Cold starts (latencia inicial)`,
      },
      {
        title: "Cómo Funciona Lambda",
        content: `**Componentes de una función Lambda:**
1. **Código**: Tu función (Python, Node.js, Java, Go, etc.)
2. **Trigger**: Evento que invoca la función
3. **Configuración**: Memoria, timeout, permisos

**Flujo de ejecución:**
1. Un evento dispara la función
2. AWS provisiona un contenedor (si no existe)
3. Tu código se ejecuta
4. Retorna resultado o error
5. El contenedor puede reutilizarse

**Lenguajes soportados:**
- Node.js, Python, Java, Go, Ruby
- .NET (C#/PowerShell)
- Custom Runtime (cualquier lenguaje)

**Configuración clave:**
- **Memoria**: 128 MB a 10 GB
- **Timeout**: Hasta 15 minutos
- **Concurrencia**: Hasta miles de ejecuciones paralelas`,
        code: `# Ejemplo de función Lambda (Python)
def lambda_handler(event, context):
    # event: datos del trigger
    # context: información de la ejecución
    
    name = event.get('name', 'World')
    return {
        'statusCode': 200,
        'body': f'Hello, {name}!'
    }`,
      },
      {
        title: "Triggers y Eventos",
        content: `Lambda puede ser invocado por múltiples servicios AWS:

**API y HTTP:**
- API Gateway (APIs REST/HTTP)
- Application Load Balancer
- Function URLs (endpoints directos)

**Almacenamiento:**
- S3 (cuando se sube/modifica un objeto)
- DynamoDB Streams (cambios en tablas)
- Kinesis (streaming de datos)

**Mensajería:**
- SNS (notificaciones)
- SQS (colas de mensajes)
- EventBridge (eventos programados y personalizados)

**Otros:**
- CloudWatch Events/Logs
- Cognito (autenticación)
- IoT Core (dispositivos IoT)
- Step Functions (orquestación)

**Tipos de invocación:**
- **Síncrona**: Espera respuesta (API Gateway)
- **Asíncrona**: Fire-and-forget (S3, SNS)
- **Poll-based**: Lambda lee de fuente (SQS, Kinesis)`,
      },
      {
        title: "Modelo de Precios",
        content: `**Componentes del costo:**

**1. Número de solicitudes:**
- Primer millón de solicitudes/mes: GRATIS
- Después: $0.20 por millón de solicitudes

**2. Duración de ejecución:**
- Cobro por GB-segundo
- Basado en memoria asignada × tiempo de ejecución
- 400,000 GB-segundos/mes: GRATIS

**Ejemplo de cálculo:**
- Función con 512 MB de memoria
- 3 millones de invocaciones/mes
- 200 ms promedio de ejecución
- Costo: ~$5.60/mes

**Free Tier (siempre gratis):**
- 1 millón de solicitudes/mes
- 400,000 GB-segundos/mes

**Optimización de costos:**
- Ajustar memoria al mínimo necesario
- Optimizar tiempo de ejecución
- Usar Provisioned Concurrency solo si necesitas evitar cold starts`,
        note: "Lambda puede ser extremadamente económico para cargas de trabajo intermitentes o de baja frecuencia.",
      },
      {
        title: "Casos de Uso Comunes",
        content: `**Procesamiento de Datos:**
- Transformar archivos subidos a S3
- Procesar logs en tiempo real
- ETL para data warehouses

**APIs y Backends:**
- APIs REST con API Gateway
- Backends para aplicaciones móviles
- GraphQL con AppSync

**Automatización:**
- Respuesta a eventos de infraestructura
- Tareas programadas (cron jobs)
- Procesamiento de webhooks

**Machine Learning:**
- Inferencia en tiempo real
- Preprocesamiento de datos
- Integración con SageMaker

**Ejemplos específicos:**
- Redimensionar imágenes al subirlas a S3
- Procesar pagos en e-commerce
- Enviar notificaciones push
- Validar formularios
- Generar reportes programados`,
      },
      {
        title: "Lambda vs Otros Servicios de Cómputo",
        content: `| Característica | Lambda | EC2 | ECS/EKS | Fargate |
|---------------|--------|-----|---------|---------|
| Administración | Ninguna | Total | Parcial | Mínima |
| Escalado | Automático | Manual/Auto | Manual/Auto | Automático |
| Precio | Por ejecución | Por hora | Por instancia | Por recurso |
| Duración máx | 15 min | Ilimitada | Ilimitada | Ilimitada |
| Estado | Stateless | Stateful | Stateful | Stateful |

**Cuándo usar Lambda:**
- Tareas cortas (< 15 min)
- Carga de trabajo variable/intermitente
- Eventos puntuales

**Cuándo NO usar Lambda:**
- Procesos de larga duración
- Aplicaciones con estado persistente
- Requisitos de GPU/hardware específico`,
      },
    ],
  },
  keyTakeaways: [
    "Lambda ejecuta código sin aprovisionar servidores, pagas solo por ejecución",
    "Escala automáticamente de 0 a miles de ejecuciones concurrentes",
    "Timeout máximo de 15 minutos por ejecución",
    "Puede ser disparado por S3, API Gateway, DynamoDB, SNS, SQS y más",
    "Free tier incluye 1M solicitudes y 400K GB-segundos mensuales",
  ],
  relatedQuestions: ["q52", "q53", "q54", "q55"],
  tags: ["Lambda", "serverless", "FaaS", "computación", "eventos"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
