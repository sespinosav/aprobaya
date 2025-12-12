import { Article } from "@/types";

export const awsAppSync: Article = {
  id: "d3-art-22",
  slug: "aws-appsync-graphql",
  title: "AWS AppSync: APIs GraphQL Administradas",
  shortDescription:
    "Crea APIs GraphQL serverless con sincronización en tiempo real y soporte offline.",
  domainId: "domain3",
  content: {
    introduction:
      "AWS AppSync es un servicio administrado que facilita el desarrollo de APIs GraphQL. Permite crear APIs que acceden de forma segura, manipulan y combinan datos de múltiples fuentes, con sincronización en tiempo real y capacidades offline.",
    sections: [
      {
        title: "¿Qué es GraphQL y AppSync?",
        content: `**GraphQL:**
Lenguaje de consulta para APIs que permite a los clientes solicitar exactamente los datos que necesitan.

**REST vs GraphQL:**
\`\`\`
REST (múltiples endpoints):
GET /users/123
GET /users/123/posts
GET /users/123/followers

GraphQL (un endpoint):
query {
  user(id: "123") {
    name
    posts { title }
    followers { name }
  }
}
\`\`\`

**AWS AppSync:**
- GraphQL completamente administrado
- Serverless (sin servidores que gestionar)
- Tiempo real con subscriptions
- Soporte offline para móviles
- Múltiples fuentes de datos

**Beneficios de AppSync:**
- Un endpoint, múltiples operaciones
- El cliente decide qué datos necesita
- Tipado fuerte (schema)
- Documentación automática`,
      },
      {
        title: "Fuentes de Datos (Data Sources)",
        content: `AppSync puede conectar con múltiples backends:

**Amazon DynamoDB:**
- Base de datos NoSQL
- Resolvers automáticos
- Mapeo directo de operaciones

**AWS Lambda:**
- Lógica personalizada
- Integración con cualquier servicio
- Transformaciones complejas

**Amazon RDS / Aurora:**
- Bases de datos relacionales
- SQL via Data API

**Amazon OpenSearch:**
- Búsqueda full-text
- Analytics

**HTTP Endpoints:**
- APIs REST existentes
- Servicios de terceros

**None (Local):**
- Lógica en el resolver
- Operaciones solo de subscriptions

**Arquitectura:**
\`\`\`
Clientes (Web, Mobile)
         │
         ▼
    AWS AppSync
    (GraphQL API)
         │
    ┌────┼────┬────┐
    ▼    ▼    ▼    ▼
DynamoDB Lambda RDS HTTP
\`\`\``,
      },
      {
        title: "Schema y Operaciones",
        content: `**Schema GraphQL define:**
- Tipos de datos
- Queries (lecturas)
- Mutations (escrituras)
- Subscriptions (tiempo real)

**Ejemplo de Schema:**
\`\`\`graphql
type Todo {
  id: ID!
  title: String!
  completed: Boolean!
  createdAt: AWSDateTime!
}

type Query {
  getTodo(id: ID!): Todo
  listTodos: [Todo]
}

type Mutation {
  createTodo(title: String!): Todo
  updateTodo(id: ID!, completed: Boolean): Todo
  deleteTodo(id: ID!): Todo
}

type Subscription {
  onCreateTodo: Todo
    @aws_subscribe(mutations: ["createTodo"])
}
\`\`\`

**Resolvers:**
- Mapean operaciones GraphQL a fuentes de datos
- Escritos en VTL (Velocity Template Language) o JavaScript
- Request mapping template
- Response mapping template`,
        code: `// Ejemplo de resolver JavaScript
export function request(ctx) {
  return {
    operation: 'GetItem',
    key: util.dynamodb.toMapValues({ id: ctx.args.id }),
  };
}

export function response(ctx) {
  return ctx.result;
}`,
      },
      {
        title: "Tiempo Real y Offline",
        content: `**Subscriptions (Tiempo Real):**
- WebSocket connections
- Actualizaciones push automáticas
- Ideal para chat, dashboards, colaboración

**Cómo funcionan:**
\`\`\`
Cliente A                 AppSync                 Cliente B
    │                        │                        │
    │── createTodo ─────────→│                        │
    │                        │←── onCreateTodo ───────│
    │                        │                        │
    │←── onCreateTodo ───────│                        │
\`\`\`

**Soporte Offline (con Amplify):**
- Cache local de datos
- Operaciones en cola cuando offline
- Sincronización automática al reconectar
- Resolución de conflictos configurable

**Estrategias de conflicto:**
- **Optimistic**: Última escritura gana
- **Auto Merge**: Combina cambios
- **Lambda**: Lógica personalizada

**Ideal para apps móviles:**
- Usuarios en aviones, metros
- Conexiones intermitentes
- Experiencia sin interrupciones`,
      },
      {
        title: "Seguridad y Autorización",
        content: `**Modos de autenticación:**

**API Key:**
- Simple, para desarrollo
- Expira (configurable)

**Amazon Cognito User Pools:**
- Usuarios autenticados
- Permisos por grupo

**IAM:**
- Roles y políticas AWS
- Para servicios AWS

**OpenID Connect:**
- Proveedores externos
- Auth0, Okta, etc.

**Lambda Authorizer:**
- Lógica personalizada
- Tokens custom

**Autorización a nivel de campo:**
\`\`\`graphql
type User {
  id: ID!
  email: String! @aws_auth(cognito_groups: ["Admin"])
  name: String!
}
\`\`\`

**Múltiples modos simultáneos:**
- API Key para datos públicos
- Cognito para datos de usuario
- IAM para backend-to-backend`,
      },
      {
        title: "Precios y Cuándo Usar AppSync",
        content: `**Modelo de precios:**
- Pago por request y tiempo real

**Costos:**
| Componente | Precio |
|-----------|--------|
| Queries/Mutations | $4.00 por millón |
| Real-time updates | $2.00 por millón |
| Connection minutes | $0.08 por millón |

**Free Tier (12 meses):**
- 250,000 queries/mes
- 250,000 real-time updates/mes
- 600,000 connection minutes/mes

**Cuándo usar AppSync:**
- Necesitas GraphQL
- Apps móviles con sync offline
- Datos en tiempo real
- Múltiples fuentes de datos
- Desarrollo rápido

**Cuándo usar API Gateway + Lambda:**
- REST es suficiente
- Más control sobre endpoints
- Integración más simple
- Ya tienes APIs REST

**AppSync vs API Gateway:**
| Aspecto | AppSync | API Gateway |
|---------|---------|-------------|
| Protocolo | GraphQL | REST/WebSocket |
| Real-time | Nativo | WebSocket API |
| Offline | Con Amplify | Manual |
| Complejidad | Mayor | Menor |`,
      },
    ],
  },
  keyTakeaways: [
    "AppSync es GraphQL serverless con múltiples fuentes de datos",
    "Soporta DynamoDB, Lambda, RDS, HTTP como data sources",
    "Subscriptions permiten actualizaciones en tiempo real via WebSocket",
    "Con Amplify ofrece sync offline para apps móviles",
    "Múltiples modos de autenticación: API Key, Cognito, IAM, OIDC",
  ],
  relatedQuestions: ["q77", "q83"],
  tags: ["AppSync", "GraphQL", "API", "tiempo real", "serverless"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
