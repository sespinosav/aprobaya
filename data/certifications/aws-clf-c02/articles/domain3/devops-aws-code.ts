import { Article } from "@/types";

export const devopsAwsCode: Article = {
  id: "d3-art-20",
  slug: "devops-aws-code",
  title: "Servicios AWS DevOps: CodeCommit, CodeBuild, CodeDeploy, CodePipeline",
  shortDescription:
    "Implementa CI/CD completo con los servicios de desarrollo de AWS: Code family.",
  domainId: "domain3",
  content: {
    introduction:
      "AWS ofrece un conjunto de servicios DevOps que permiten implementar integración continua y entrega continua (CI/CD). Estos servicios, conocidos como la familia 'Code', trabajan juntos para automatizar el ciclo de desarrollo de software.",
    sections: [
      {
        title: "Visión General de los Servicios Code",
        content: `**La familia Code de AWS:**

**CodeCommit:**
- Repositorios Git privados administrados
- Control de versiones

**CodeBuild:**
- Servicio de build completamente administrado
- Compila código, ejecuta tests, produce artefactos

**CodeDeploy:**
- Automatiza despliegues a EC2, Lambda, ECS, on-premises

**CodePipeline:**
- Orquestador de CI/CD
- Conecta todos los servicios en un flujo

**CodeArtifact:**
- Repositorio de artefactos (npm, Maven, PyPI)

**CodeStar (deprecated):**
- Templates para proyectos completos
- Siendo reemplazado por otras herramientas

**Flujo típico:**
\`\`\`
CodeCommit → CodeBuild → CodeDeploy
      └────── CodePipeline ──────┘
                    │
              CodeArtifact
           (dependencias)
\`\`\``,
      },
      {
        title: "AWS CodeCommit",
        content: `**¿Qué es?**
Servicio de control de versiones Git administrado.

**Características:**
- Repositorios Git ilimitados
- Altamente disponible y duradero
- Integración con IAM para acceso
- Cifrado en reposo y tránsito
- Pull requests y revisiones de código

**Comparación con GitHub/GitLab:**
| Característica | CodeCommit | GitHub |
|---------------|------------|--------|
| Hosting | AWS | Cloud/On-prem |
| Repos privados | Ilimitados | Según plan |
| IAM integration | Nativa | Limitada |
| Precio | Por usuario activo | Por usuario |

**Cuándo usar CodeCommit:**
- Quieres todo en AWS
- Requisitos de compliance estrictos
- Integración fuerte con IAM
- Evitar tráfico fuera de AWS

**Cuándo usar GitHub/GitLab:**
- Comunidad open source
- Features avanzadas de colaboración
- Ecosistema de integraciones

**Nota importante:**
AWS está promoviendo más la integración con GitHub que nuevas features para CodeCommit.`,
        note: "AWS recomienda cada vez más usar GitHub con CodePipeline en lugar de CodeCommit.",
      },
      {
        title: "AWS CodeBuild",
        content: `**¿Qué es?**
Servicio de **compilación y testing serverless**.

**Características:**
- Sin servidores que administrar
- Escala automáticamente
- Pago por minuto de build
- Ambientes pre-configurados o custom (Docker)

**Proceso de build:**
\`\`\`
Código fuente (Git/S3)
       │
       ▼
    CodeBuild
    ├── Instalar dependencias
    ├── Compilar
    ├── Ejecutar tests
    └── Empaquetar
       │
       ▼
  Artefactos (S3)
\`\`\`

**buildspec.yml:**
\`\`\`yaml
version: 0.2

phases:
  install:
    runtime-versions:
      nodejs: 18
    commands:
      - npm ci
  build:
    commands:
      - npm run build
      - npm test

artifacts:
  files:
    - '**/*'
  base-directory: dist
\`\`\`

**Ambientes disponibles:**
- Amazon Linux 2
- Ubuntu
- Windows Server
- Custom Docker images

**Precios:**
- $0.005/min (build.general1.small)
- $0.01/min (build.general1.medium)
- Free tier: 100 min/mes`,
      },
      {
        title: "AWS CodeDeploy",
        content: `**¿Qué es?**
Servicio para **automatizar despliegues** de aplicaciones.

**Destinos soportados:**
- Amazon EC2
- AWS Lambda
- Amazon ECS
- Servidores on-premises

**Tipos de despliegue:**

**In-Place (EC2/On-prem):**
- Actualiza aplicación en las instancias existentes
- Downtime durante actualización
- Rollback manual

**Blue/Green (EC2):**
- Crea nuevo conjunto de instancias
- Cambia tráfico cuando está listo
- Rollback instantáneo

**Blue/Green (Lambda):**
- Canary: pequeño % primero
- Linear: incremento gradual
- All-at-once: todo de una vez

**appspec.yml:**
\`\`\`yaml
version: 0.0
os: linux
files:
  - source: /
    destination: /var/www/html
hooks:
  BeforeInstall:
    - location: scripts/before_install.sh
  AfterInstall:
    - location: scripts/after_install.sh
  ApplicationStart:
    - location: scripts/start_server.sh
\`\`\`

**Hooks (orden de ejecución):**
ApplicationStop → BeforeInstall → AfterInstall → ApplicationStart → ValidateService`,
      },
      {
        title: "AWS CodePipeline",
        content: `**¿Qué es?**
Servicio de **orquestación CI/CD** que conecta las etapas del pipeline.

**Etapas típicas:**
1. **Source**: CodeCommit, GitHub, S3
2. **Build**: CodeBuild
3. **Test**: CodeBuild, terceros
4. **Deploy**: CodeDeploy, CloudFormation, ECS, S3

**Características:**
- Ejecución automática con cambios en código
- Aprobaciones manuales
- Acciones paralelas
- Múltiples regiones

**Diagrama de pipeline:**
\`\`\`
┌─────────┐   ┌─────────┐   ┌──────────┐   ┌─────────┐
│ Source  │──→│  Build  │──→│  Test    │──→│ Deploy  │
│(GitHub) │   │(CodeBuild)   │(CodeBuild)   │(CodeDeploy)
└─────────┘   └─────────┘   └──────────┘   └─────────┘
                                 │
                                 ▼
                         ┌──────────────┐
                         │   Approval   │
                         │  (Manual)    │
                         └──────────────┘
                                 │
                                 ▼
                         ┌──────────────┐
                         │   Deploy     │
                         │   (Prod)     │
                         └──────────────┘
\`\`\`

**Precios:**
- $1/mes por pipeline activo
- Primer pipeline gratis siempre
- Free tier: 1 pipeline gratis`,
      },
      {
        title: "CodeArtifact y Ejemplo Completo",
        content: `**AWS CodeArtifact:**
Repositorio de artefactos administrado.

**Formatos soportados:**
- npm (JavaScript)
- PyPI (Python)
- Maven, Gradle (Java)
- NuGet (.NET)

**Beneficios:**
- Cache de dependencias públicas
- Repositorio privado de paquetes
- Control de versiones
- Integración con CodeBuild

**Ejemplo de pipeline completo:**
\`\`\`
Developer push a GitHub
         │
         ▼
CodePipeline detecta cambio
         │
         ▼
Stage 1: Source (GitHub)
         │
         ▼
Stage 2: Build (CodeBuild)
├── npm ci (deps de CodeArtifact)
├── npm run build
├── npm test
└── Produce artefacto
         │
         ▼
Stage 3: Deploy Staging (CodeDeploy)
         │
         ▼
Stage 4: Manual Approval
         │
         ▼
Stage 5: Deploy Production (CodeDeploy)
\`\`\`

**Resumen de precios:**
| Servicio | Precio |
|----------|--------|
| CodeCommit | $1/usuario activo |
| CodeBuild | $0.005+/min |
| CodeDeploy | Gratis para EC2 |
| CodePipeline | $1/pipeline/mes |
| CodeArtifact | $0.05/GB/mes |`,
        note: "CodeDeploy es GRATIS para despliegues a EC2 y on-premises. Solo cobra para Lambda y ECS.",
      },
    ],
  },
  keyTakeaways: [
    "CodeCommit = Git, CodeBuild = CI, CodeDeploy = CD, CodePipeline = Orquestador",
    "CodePipeline conecta source → build → test → deploy automáticamente",
    "CodeDeploy soporta Blue/Green y rolling deployments con rollback",
    "CodeBuild es serverless - pagas por minuto de build",
    "CodeArtifact cachea dependencias npm/PyPI/Maven para builds más rápidos",
  ],
  relatedQuestions: ["q80", "q81"],
  tags: ["DevOps", "CI/CD", "CodePipeline", "CodeBuild", "CodeDeploy"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
