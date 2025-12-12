import { Article } from "@/types";

export const awsAmplify: Article = {
  id: "d3-art-17",
  slug: "aws-amplify",
  title: "AWS Amplify: Desarrollo Web y Móvil Full-Stack",
  shortDescription:
    "Construye aplicaciones web y móviles full-stack con hosting, backend y CI/CD integrado.",
  domainId: "domain3",
  content: {
    introduction:
      "AWS Amplify es un conjunto de herramientas y servicios para desarrolladores frontend y móviles que permite construir aplicaciones full-stack en AWS de manera rápida y sencilla, con hosting, backend serverless y CI/CD integrado.",
    sections: [
      {
        title: "¿Qué es AWS Amplify?",
        content: `Amplify es una **plataforma de desarrollo full-stack** diseñada para desarrolladores frontend y móviles.

**Componentes de Amplify:**

**Amplify Hosting:**
- Hosting de aplicaciones web estáticas
- CI/CD desde Git (GitHub, GitLab, etc.)
- Preview branches
- SSL automático
- CDN global

**Amplify Studio:**
- Interfaz visual para diseñar backend
- Generación de código automática
- Figma to code

**Amplify Libraries:**
- SDKs para JavaScript, iOS, Android, Flutter
- Integración con servicios AWS
- Componentes UI pre-construidos

**Amplify CLI:**
- Línea de comandos para configurar backend
- Genera recursos CloudFormation
- Local mocking para desarrollo`,
      },
      {
        title: "Características de Backend",
        content: `Amplify configura automáticamente servicios AWS:

**Autenticación:**
- Amazon Cognito (users, sign-up, sign-in)
- Social login (Google, Facebook, Apple)
- MFA, password recovery

**API:**
- **GraphQL** con AppSync
- **REST** con API Gateway + Lambda
- Autorización integrada

**Base de Datos:**
- DynamoDB para NoSQL
- Aurora Serverless para SQL
- Real-time sync

**Storage:**
- Amazon S3 para archivos
- Public/protected/private access

**Funciones:**
- AWS Lambda
- Triggers automáticos

**Ejemplo de configuración:**
\`\`\`bash
amplify init           # Inicializar proyecto
amplify add auth       # Agregar autenticación
amplify add api        # Agregar API GraphQL
amplify add storage    # Agregar almacenamiento
amplify push           # Desplegar todo
\`\`\``,
      },
      {
        title: "Amplify Hosting",
        content: `**Características:**
- Deploy desde repositorio Git
- Build automático en cada push
- Branches de preview
- Custom domains
- SSL/HTTPS automático

**Frameworks soportados:**
- React, Vue, Angular
- Next.js, Nuxt
- Gatsby, Hugo
- Static sites (HTML/CSS/JS)

**Flujo de trabajo:**
\`\`\`
Git Push
    │
    ▼
Amplify detecta cambio
    │
    ▼
Build (npm build)
    │
    ▼
Deploy a CDN
    │
    ▼
Sitio disponible globalmente
\`\`\`

**Configuración (amplify.yml):**
\`\`\`yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
\`\`\``,
        note: "Amplify Hosting es similar a Vercel o Netlify pero integrado nativamente con AWS.",
      },
      {
        title: "Amplify Libraries y UI",
        content: `**Amplify JS Library:**
- Fácil integración con servicios AWS
- Autenticación, API, Storage con pocas líneas

**Ejemplo - Autenticación:**
\`\`\`javascript
import { Amplify } from 'aws-amplify';
import { signIn, signUp, signOut } from 'aws-amplify/auth';

// Sign up
await signUp({
  username: 'user@email.com',
  password: 'password123',
});

// Sign in
await signIn({
  username: 'user@email.com',
  password: 'password123',
});
\`\`\`

**Ejemplo - API GraphQL:**
\`\`\`javascript
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

// Query
const todos = await client.graphql({
  query: listTodos
});

// Mutation
await client.graphql({
  query: createTodo,
  variables: { input: { name: "Learn Amplify" } }
});
\`\`\`

**Amplify UI Components:**
- Componentes React/Vue/Angular pre-construidos
- \`<Authenticator>\`: Login completo
- \`<StorageManager>\`: Upload de archivos
- Theming personalizable`,
      },
      {
        title: "Casos de Uso y Ventajas",
        content: `**Ideal para:**
- Startups y prototipos rápidos
- Desarrolladores frontend sin experiencia en backend
- MVPs (Minimum Viable Products)
- Aplicaciones móviles con backend

**Casos de uso:**
- E-commerce con carrito y usuarios
- Apps de productividad
- Redes sociales
- Aplicaciones de contenido con CMS

**Ventajas:**
- Velocidad de desarrollo
- Sin gestión de servidores
- Best practices de AWS automáticas
- Escalabilidad integrada

**Limitaciones:**
- Menos control que configurar cada servicio
- Vendor lock-in con Amplify
- Configuraciones avanzadas pueden requerir acceso directo a servicios

**Comparación:**
| Plataforma | Tipo | Ventaja |
|-----------|------|---------|
| Amplify | AWS-native full-stack | Integración AWS |
| Firebase | Google full-stack | Simplicidad |
| Vercel | Frontend hosting | DX, Next.js |
| Supabase | Backend as a Service | Open source |`,
      },
      {
        title: "Precios",
        content: `**Amplify Hosting:**
- Build & Deploy: $0.01/min de build
- Hosting: $0.023/GB servido
- Requests: $0.15/millón de requests

**Free Tier (12 meses):**
- 1,000 min de build/mes
- 15 GB servidos/mes
- 500,000 requests/mes

**Backend (pagas servicios AWS subyacentes):**
- Cognito: 50,000 MAUs gratis
- AppSync: 250,000 requests gratis
- DynamoDB: 25 GB gratis
- Lambda: 1M invocaciones gratis
- S3: 5 GB gratis

**Ejemplo de costos pequeña app:**
- 10,000 usuarios
- 100,000 API requests/mes
- 10 GB de almacenamiento
- **Total: ~$5-15/mes**

**Para apps más grandes:**
- Costos escalan con uso
- Revisar precios de cada servicio AWS
- Calculadora AWS para estimaciones`,
        note: "Amplify puede ser muy económico para apps pequeñas gracias al free tier de los servicios subyacentes.",
      },
    ],
  },
  keyTakeaways: [
    "Amplify es plataforma full-stack para frontend/móvil developers",
    "Amplify Hosting ofrece CI/CD desde Git con CDN global",
    "Configura Auth, API, DB, Storage con CLI o Studio visual",
    "SDKs para React, Vue, Angular, iOS, Android, Flutter",
    "Pagas por servicios AWS subyacentes, muchos con free tier generoso",
  ],
  relatedQuestions: ["q77"],
  tags: ["Amplify", "full-stack", "hosting", "frontend", "móvil", "CI/CD"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
