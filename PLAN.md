# 🎓 AprobaYa - Plan de Desarrollo

[![Open Source](https://img.shields.io/badge/Open%20Source-💚-green)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()
[![Community](https://img.shields.io/badge/Community-Driven-blue)]()

> ## ⚠️ DISCLAIMER IMPORTANTE
> 
> **AprobaYa** es un proyecto de código abierto creado por y para la comunidad de desarrolladores y profesionales de tecnología.
> 
> ### Este proyecto:
> 
> - ❌ **NO está afiliado, patrocinado ni respaldado** por Amazon Web Services (AWS), Microsoft, Google, Oracle, ni ninguna otra empresa propietaria de las certificaciones.
> - ❌ **NO es una fuente oficial** de material de estudio ni certificación.
> - ❌ **NO garantiza** que aprobarás ningún examen.
> - ✅ **ES una herramienta comunitaria** de estudio y práctica.
> - ✅ **ES un recurso educativo gratuito** para ayudar a la comunidad.
> 
> Todas las marcas registradas pertenecen a sus respectivos propietarios. Los nombres de productos, logos y marcas son propiedad de sus respectivas empresas.
> 
> **Para material oficial de estudio, consulta siempre los sitios web oficiales de cada certificación.**

---

## 📋 Descripción General

**AprobaYa** es una plataforma web moderna, interactiva y visualmente atractiva para prepararse para certificaciones y exámenes de software. Diseñada para ser extensible y soportar múltiples certificaciones.

### 🚀 Filosofía Técnica: Simple y Eficiente

> **Sin base de datos. Sin backend complejo. Solo código limpio y rápido.**

- ✅ **Datos estáticos (hardcoded)**: Toda la información de teoría, servicios y preguntas está directamente en el código como archivos TypeScript
- ✅ **Lazy Loading**: Los módulos y datos se cargan bajo demanda para mantener la página fluida y rápida
- ✅ **LocalStorage**: El progreso del usuario, configuraciones y estadísticas se guardan en el navegador
- ✅ **Sin autenticación**: Uso inmediato sin registro ni login
- ✅ **Offline-friendly**: Una vez cargada, funciona sin conexión

### Certificaciones Soportadas (Roadmap)

| Proveedor | Certificación | Estado |
|-----------|---------------|--------|
| ☁️ AWS | Cloud Practitioner (CLF-C02) | 🚧 v1.0 |
| ☁️ AWS | Solutions Architect Associate | 📅 Planificado |
| ☁️ AWS | Developer Associate | 📅 Planificado |
| 🔷 Azure | AZ-900 Fundamentals | 📅 Planificado |
| 🔷 Azure | AZ-104 Administrator | 📅 Planificado |
| 🌐 GCP | Cloud Digital Leader | 📅 Planificado |
| 🐳 Docker | DCA (Docker Certified Associate) | 📅 Planificado |
| ☸️ Kubernetes | CKA, CKAD | 📅 Planificado |
| 🔐 Security | CompTIA Security+ | 📅 Planificado |
| 💻 Development | Oracle Java Certified | 📅 Planificado |
| 🗄️ Database | MongoDB Associate | 📅 Planificado |

---

## 🎨 Filosofía de Diseño

### Estilo Visual
- **Temática**: Moderna, limpia, con toques "cute" y amigables
- **Paleta de colores**: 
  - Primario: Gradientes de púrpura/índigo (#6366F1 → #8B5CF6)
  - Secundario: Tonos de cyan/teal para acentos
  - Colores por certificación (naranja para AWS, azul para Azure, etc.)
  - Fondos: Blancos suaves con glassmorphism
- **Tipografía**: Inter/Poppins para legibilidad
- **Iconografía**: Lucide icons + emojis decorativos
- **Animaciones**: 
  - Transiciones suaves (Framer Motion)
  - Micro-interacciones en botones y cards
  - Confetti al completar exámenes
  - Partículas flotantes decorativas
  - Progress bars animados

### Características de UI/UX
- Diseño responsive (mobile-first)
- Modo oscuro/claro
- Navegación intuitiva con sidebar
- Cards con hover effects y glassmorphism
- Indicadores de progreso gamificados
- Badges y logros desbloqueables

---

## 🏗️ Arquitectura de Módulos

### 1. 🏠 **Módulo Home/Dashboard**
- Bienvenida personalizada
- Selector de certificación activa
- Resumen de progreso general
- Estadísticas rápidas (temas estudiados, simulacros completados, puntuación promedio)
- Accesos rápidos a los módulos principales
- Motivational quotes sobre tecnología
- Calendario de estudio sugerido
- **Disclaimer visible**

### 2. 📚 **Módulo de Teoría**
Contenido dinámico según la certificación seleccionada.

#### Ejemplo: AWS Cloud Practitioner (CLF-C02)
Organizado según los 4 dominios del examen:

##### Dominio 1: Cloud Concepts (24% del examen)
- **Beneficios de AWS Cloud**
  - Propuesta de valor
  - Economías de escala
  - Infraestructura global
  - Alta disponibilidad, elasticidad y agilidad
  
- **Principios de Diseño (Well-Architected Framework)**
  - Excelencia operacional
  - Seguridad
  - Fiabilidad
  - Eficiencia de rendimiento
  - Optimización de costos
  - Sostenibilidad
  
- **Migración a la Nube**
  - AWS Cloud Adoption Framework (CAF)
  - Estrategias de migración (6 R's)
  - AWS Snowball, DMS
  
- **Economía de la Nube**
  - Costos fijos vs variables
  - Modelos de licenciamiento (BYOL)
  - Rightsizing
  - Servicios gestionados

##### Dominio 2: Security and Compliance (30% del examen)
- **Modelo de Responsabilidad Compartida**
  - Responsabilidades de AWS
  - Responsabilidades del cliente
  - Variación según el servicio (EC2 vs Lambda vs RDS)
  
- **Seguridad, Gobernanza y Compliance**
  - AWS Artifact
  - AWS Compliance
  - Encryption (transit/rest)
  - Amazon Inspector, GuardDuty, Security Hub, Shield
  - CloudWatch, CloudTrail, AWS Config, Audit Manager
  
- **Gestión de Accesos (IAM)**
  - Users, Groups, Roles, Policies
  - Protección del root user
  - MFA
  - IAM Identity Center
  - Principio de menor privilegio
  - AWS Secrets Manager
  
- **Componentes de Seguridad**
  - Security Groups
  - Network ACLs
  - AWS WAF
  - AWS Marketplace (productos de seguridad)
  - AWS Trusted Advisor

##### Dominio 3: Cloud Technology and Services (34% del examen)
- **Métodos de Despliegue**
  - AWS Management Console
  - CLI, SDKs, APIs
  - Infrastructure as Code (CloudFormation)
  - Modelos: Cloud, Hybrid, On-premises
  
- **Infraestructura Global de AWS**
  - Regions
  - Availability Zones
  - Edge Locations
  - Local Zones, Wavelength Zones
  - Alta disponibilidad multi-AZ
  
- **Servicios de Cómputo**
  | Servicio | Descripción | Caso de Uso |
  |----------|-------------|-------------|
  | Amazon EC2 | Servidores virtuales escalables | Aplicaciones tradicionales |
  | AWS Lambda | Cómputo serverless | Funciones event-driven |
  | Amazon ECS | Orquestación de contenedores Docker | Microservicios |
  | Amazon EKS | Kubernetes gestionado | Orquestación avanzada |
  | AWS Fargate | Contenedores serverless | Contenedores sin gestión |
  | AWS Elastic Beanstalk | PaaS para apps web | Despliegue rápido |
  | Amazon Lightsail | VPS simplificado | Proyectos pequeños |
  | AWS Batch | Procesamiento por lotes | Jobs de larga duración |
  | AWS Outposts | Infraestructura on-premises | Híbrido |

- **Servicios de Base de Datos**
  | Servicio | Tipo | Caso de Uso |
  |----------|------|-------------|
  | Amazon RDS | Relacional gestionado | MySQL, PostgreSQL, Oracle, SQL Server |
  | Amazon Aurora | Relacional de alto rendimiento | Aplicaciones empresariales |
  | Amazon DynamoDB | NoSQL key-value | Alta escala, baja latencia |
  | Amazon ElastiCache | In-memory cache | Redis/Memcached |
  | Amazon MemoryDB | Redis compatible | Durabilidad + velocidad |
  | Amazon Neptune | Grafos | Redes sociales, fraude |
  | Amazon Redshift | Data Warehouse | Analytics |
  | AWS DMS | Migración de BD | Migraciones |

- **Servicios de Red**
  | Servicio | Descripción |
  |----------|-------------|
  | Amazon VPC | Red virtual privada |
  | Subnets | Públicas y privadas |
  | Internet Gateway | Conexión a internet |
  | NAT Gateway | Salida a internet desde subnets privadas |
  | Route 53 | DNS gestionado |
  | CloudFront | CDN global |
  | AWS Global Accelerator | Optimización de rutas |
  | AWS Direct Connect | Conexión dedicada on-prem |
  | AWS VPN | Conexión encriptada |
  | API Gateway | APIs RESTful/WebSocket |

- **Servicios de Almacenamiento**
  | Servicio | Tipo | Caso de Uso |
  |----------|------|-------------|
  | Amazon S3 | Objetos | Archivos, backups, static web |
  | S3 Glacier | Archivado | Largo plazo, bajo costo |
  | Amazon EBS | Bloques | Discos para EC2 |
  | Amazon EFS | Archivos (NFS) | Compartido entre instancias |
  | Amazon FSx | Archivos (Windows/Lustre) | Workloads específicos |
  | AWS Storage Gateway | Híbrido | On-prem to cloud |
  | AWS Backup | Backup centralizado | DR y compliance |

- **Servicios de AI/ML**
  | Servicio | Función |
  |----------|---------|
  | Amazon SageMaker | ML completo |
  | Amazon Rekognition | Análisis de imágenes/video |
  | Amazon Lex | Chatbots |
  | Amazon Polly | Text-to-speech |
  | Amazon Transcribe | Speech-to-text |
  | Amazon Translate | Traducción |
  | Amazon Comprehend | NLP |
  | Amazon Textract | OCR |
  | Amazon Kendra | Búsqueda inteligente |

- **Servicios de Analytics**
  | Servicio | Función |
  |----------|---------|
  | Amazon Athena | Queries SQL sobre S3 |
  | Amazon Kinesis | Streaming data |
  | AWS Glue | ETL serverless |
  | Amazon QuickSight | BI y visualización |
  | Amazon EMR | Big Data (Hadoop/Spark) |
  | Amazon Redshift | Data Warehouse |
  | Amazon OpenSearch | Búsqueda y logs |

- **Otros Servicios Importantes**
  - **Integración**: EventBridge, SNS, SQS, Step Functions
  - **Developer Tools**: CodePipeline, CodeBuild, CodeDeploy, Cloud9, X-Ray
  - **Management**: CloudFormation, Systems Manager, Organizations, Control Tower

##### Dominio 4: Billing, Pricing, and Support (12% del examen)
- **Modelos de Precios de EC2**
  | Modelo | Descripción | Ahorro |
  |--------|-------------|--------|
  | On-Demand | Pago por hora/segundo | Base |
  | Reserved | Compromiso 1-3 años | Hasta 72% |
  | Spot | Capacidad excedente | Hasta 90% |
  | Savings Plans | Compromiso flexible | Hasta 72% |
  | Dedicated Hosts | Servidor físico dedicado | Licencias |

- **Herramientas de Costos**
  - AWS Cost Explorer
  - AWS Budgets
  - AWS Pricing Calculator
  - AWS Cost and Usage Report
  - AWS Billing Conductor
  - Cost Allocation Tags
  - AWS Organizations (consolidated billing)

- **Planes de Soporte**
  | Plan | Precio | TAM | Respuesta |
  |------|--------|-----|-----------|
  | Basic | Gratis | ❌ | - |
  | Developer | $29/mes | ❌ | 12h (general) |
  | Business | $100/mes | ❌ | 1h (producción) |
  | Enterprise On-Ramp | $5,500/mes | Pool | 30min (crítico) |
  | Enterprise | $15,000/mes | ✅ Dedicado | 15min (crítico) |

- **Recursos de Soporte**
  - AWS Trusted Advisor
  - AWS Health Dashboard
  - AWS Knowledge Center
  - AWS re:Post
  - AWS IQ
  - AWS Managed Services
  - AWS Professional Services

### 3. 🎯 **Módulo Simulador de Examen**

#### Características del Simulador

##### Modos de Práctica
1. **Modo Estudio**: 
   - Muestra respuesta correcta inmediatamente
   - Explicación detallada de por qué cada opción es correcta/incorrecta
   - Enlaces a documentación relevante

2. **Modo Examen**:
   - Configuración según la certificación (ej: 65 preguntas/90 min para CLF-C02)
   - Sin feedback hasta finalizar
   - Puntuación según estándares del examen real

3. **Modo por Dominio/Tema**:
   - Practica un dominio o tema específico
   - Estadísticas por área

##### Formato de Preguntas
- **Multiple Choice**: 1 respuesta correcta de 4 opciones
- **Multiple Response**: 2+ respuestas correctas de 5+ opciones

##### Feedback Enriquecido (Lo que hace especial al simulador)
Cada pregunta incluye:
```
✅ Respuesta Correcta: [Opción]
📝 Explicación: Por qué esta es la respuesta correcta

❌ Por qué las otras opciones NO son correctas:
- Opción A: [Explicación de por qué no aplica]
- Opción B: [Explicación de por qué no aplica]  
- Opción C: [Explicación de por qué no aplica]

💡 Concepto Clave: [Resumen del servicio/concepto]
🔗 Más información: [Link a documentación oficial]
🏷️ Dominio/Tema: [Categoría del examen]
```

##### Ejemplo de Pregunta con Feedback Completo
```
Pregunta: ¿Cuál servicio simplificaría la migración de una base de datos a la nube?

A) AWS Storage Gateway
B) AWS Database Migration Service (AWS DMS)
C) Amazon EC2
D) Amazon AppStream 2.0

✅ Respuesta Correcta: B) AWS Database Migration Service (AWS DMS)

📝 Explicación: 
AWS DMS ayuda a migrar bases de datos de forma rápida y segura. 
La base de datos de origen permanece completamente operativa durante la 
migración, minimizando el tiempo de inactividad. Soporta migraciones 
homogéneas (Oracle a Oracle) y heterogéneas (Oracle a Aurora).

❌ Por qué las otras opciones NO son correctas:

🔸 A) AWS Storage Gateway: 
   Este servicio conecta almacenamiento on-premises con la nube.
   Se usa para backups, archiving y disaster recovery de ARCHIVOS, 
   no para migrar bases de datos.

🔸 C) Amazon EC2: 
   Son servidores virtuales donde PODRÍAS instalar una base de datos,
   pero no es un servicio de MIGRACIÓN. Tendrías que hacer todo manualmente.

🔸 D) Amazon AppStream 2.0: 
   Es un servicio de streaming de aplicaciones de escritorio.
   No tiene ninguna relación con bases de datos o migraciones.

💡 Concepto Clave: DMS = Database Migration Service
🏷️ Dominio: 3 - Cloud Technology and Services

⚠️ Nota: Verifica siempre esta información con la documentación oficial.
```

##### Base de Preguntas por Certificación
Cada certificación tendrá su banco de preguntas proporcional a sus dominios.

**Ejemplo AWS Cloud Practitioner:**
- Mínimo 200 preguntas iniciales
- Organizadas por dominio según los porcentajes del examen:
  - Dominio 1 (24%): ~48 preguntas
  - Dominio 2 (30%): ~60 preguntas
  - Dominio 3 (34%): ~68 preguntas
  - Dominio 4 (12%): ~24 preguntas

##### Estadísticas y Progreso
- Gráfico de rendimiento por dominio
- Historial de exámenes
- Preguntas más falladas
- Tiempo promedio por pregunta
- Predicción de probabilidad de aprobar

### 4. 📊 **Módulo de Progreso**
- Dashboard con estadísticas por certificación
- Gráficos de evolución temporal
- Áreas fuertes y débiles
- Recomendaciones personalizadas
- Streak de estudio diario
- Sistema de badges/logros

### 5. 📖 **Módulo de Recursos**
- Links a documentación oficial (por certificación)
- Whitepapers y guías recomendadas
- Videos y cursos sugeridos
- Cheat sheets descargables
- Glosario de términos
- FAQs del examen
- **Siempre con links a recursos oficiales**

### 6. ⚙️ **Módulo de Configuración**
- Preferencias de tema (oscuro/claro)
- Idioma
- Certificación activa
- Notificaciones de estudio
- Exportar progreso
- Reset de estadísticas

---

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Gráficos**: Recharts
- **Estado**: React Context (simple, sin dependencias extra)

### Datos y Contenido
- **Datos estáticos**: Archivos `.ts` con toda la información hardcodeada
- **Estructura modular**: Cada certificación tiene su carpeta con sus datos
- **TypeScript**: Tipado fuerte para evitar errores en los datos

### Persistencia (100% Local)
- **LocalStorage**: Progreso, configuraciones, historial de exámenes
- **Sin backend**: No hay servidor, API, ni base de datos
- **Exportable**: Opción de exportar/importar progreso como JSON

### Optimización de Rendimiento
- **Lazy Loading**: Componentes y datos cargados bajo demanda
- **Dynamic Imports**: `next/dynamic` para cargar módulos pesados
- **Code Splitting**: Cada certificación es un chunk separado
- **Prefetch**: Precarga inteligente de rutas probables

### Futuras Mejoras (v2 - Opcional)
- Backend con autenticación (si la comunidad lo pide)
- Sincronización entre dispositivos
- Modo competitivo/rankings
- API para contribuciones de la comunidad

---

## 📂 Estructura del Proyecto

```
aprobaya/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Landing/Home
│   ├── globals.css
│   ├── dashboard/
│   │   └── page.tsx
│   ├── certifications/
│   │   └── [certId]/
│   │       ├── page.tsx            # Overview de la certificación
│   │       ├── theory/
│   │       │   ├── page.tsx        # Temas de teoría
│   │       │   └── [topicId]/
│   │       │       └── page.tsx    # Detalle del tema
│   │       ├── simulator/
│   │       │   ├── page.tsx        # Config del examen
│   │       │   ├── exam/
│   │       │   │   └── page.tsx    # Examen activo
│   │       │   └── results/
│   │       │       └── page.tsx    # Resultados
│   │       └── resources/
│   │           └── page.tsx
│   ├── progress/
│   │   └── page.tsx
│   └── settings/
│       └── page.tsx
├── components/
│   ├── ui/                         # shadcn components
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   └── DisclaimerBanner.tsx    # Banner de disclaimer
│   ├── certifications/
│   │   ├── CertificationCard.tsx
│   │   └── CertificationBadge.tsx
│   ├── theory/
│   │   ├── DomainCard.tsx
│   │   ├── ServiceCard.tsx
│   │   └── ConceptAccordion.tsx
│   ├── simulator/
│   │   ├── QuestionCard.tsx
│   │   ├── AnswerOption.tsx
│   │   ├── ExplanationPanel.tsx
│   │   ├── Timer.tsx
│   │   └── ProgressBar.tsx
│   ├── dashboard/
│   │   ├── StatsCard.tsx
│   │   ├── ProgressChart.tsx
│   │   └── RecentActivity.tsx
│   └── common/
│       ├── Badge.tsx
│       ├── Confetti.tsx
│       ├── Disclaimer.tsx
│       └── FloatingParticles.tsx
├── data/
│   ├── certifications/
│   │   ├── index.ts                # Lista de certificaciones (lazy loaded)
│   │   ├── aws-clf-c02/
│   │   │   ├── info.ts             # Metadata de la cert
│   │   │   ├── domains.ts          # Dominios/temas (hardcoded)
│   │   │   ├── questions/          # Preguntas divididas por dominio
│   │   │   │   ├── domain1.ts      # Cloud Concepts (~48 preguntas)
│   │   │   │   ├── domain2.ts      # Security (~60 preguntas)
│   │   │   │   ├── domain3.ts      # Technology (~68 preguntas)
│   │   │   │   └── domain4.ts      # Billing (~24 preguntas)
│   │   │   └── services.ts         # Servicios AWS (hardcoded)
│   │   ├── azure-az900/
│   │   │   └── ...                 # Misma estructura
│   │   └── ...
├── lib/
│   ├── utils.ts
│   ├── storage.ts                  # LocalStorage helpers (guardar/cargar progreso)
│   ├── scoring.ts                  # Lógica de puntuación
│   └── lazy-loader.ts              # Utilidades para carga dinámica de datos
├── hooks/
│   ├── useProgress.ts
│   ├── useTimer.ts
│   ├── useExam.ts
│   └── useCertification.ts
├── types/
│   └── index.ts
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── certifications/
│   │   └── badges/
│   └── ...
└── ...config files
```

---

## 🎮 Gamificación

### Sistema de Logros (Badges)
| Badge | Requisito | Icono |
|-------|-----------|-------|
| 🌱 Principiante | Completar primer módulo de teoría | 🌱 |
| 📚 Estudioso | Leer todos los temas de una certificación | 📚 |
| 🎯 Primera Victoria | Aprobar primer simulacro | 🎯 |
| 🔥 En Racha | 7 días seguidos estudiando | 🔥 |
| 💯 Perfeccionista | 100% en un dominio | 💯 |
| 🏆 Experto | Aprobar 5 simulacros seguidos | 🏆 |
| ⚡ Speedster | Completar examen en menos de la mitad del tiempo | ⚡ |
| 🧠 Memorioso | 0 errores en un examen | 🧠 |
| 🌐 Multicert | Estudiar 3+ certificaciones diferentes | 🌐 |
| 🤝 Contribuidor | Reportar errores o sugerir mejoras | 🤝 |

### Streak System
- Contador de días consecutivos
- Recordatorios de estudio
- Bonus por mantener racha

---

## 📅 Roadmap de Desarrollo

### Fase 1: Fundamentos (Semana 1)
- [ ] Setup del proyecto Next.js
- [ ] Configuración de Tailwind + shadcn/ui
- [ ] Layout base (Navbar, Sidebar, Footer con disclaimer)
- [ ] Componente de Disclaimer reutilizable
- [ ] Página Home/Landing
- [ ] Sistema de navegación
- [ ] Selector de certificaciones

### Fase 2: Primera Certificación - AWS CLF-C02 (Semana 2-3)
- [ ] Estructura de datos para certificaciones
- [ ] Módulo de Teoría completo
- [ ] Componentes de visualización
- [ ] Páginas de cada dominio
- [ ] Cards de servicios con detalles
- [ ] Animaciones y transiciones

### Fase 3: Simulador (Semana 4-5)
- [ ] Estructura de preguntas
- [ ] Banco de 200+ preguntas para CLF-C02
- [ ] Componente de pregunta
- [ ] Sistema de respuestas
- [ ] Panel de explicaciones detalladas
- [ ] Timer y navegación
- [ ] Resultados y estadísticas

### Fase 4: Progreso y Gamificación (Semana 6)
- [ ] LocalStorage para persistencia
- [ ] Dashboard de progreso
- [ ] Sistema de badges
- [ ] Gráficos y estadísticas
- [ ] Sistema de streaks

### Fase 5: Pulido y Lanzamiento (Semana 7)
- [ ] Modo oscuro/claro
- [ ] Animaciones avanzadas
- [ ] Optimización de rendimiento
- [ ] Testing
- [ ] Documentación
- [ ] Despliegue

### Fase 6: Expansión (Futuro)
- [ ] Agregar más certificaciones (Azure, GCP, Docker, K8s)
- [ ] Sistema de contribuciones de la comunidad
- [ ] Backend y autenticación
- [ ] Sincronización multi-dispositivo

---

## 🎨 Mockups de Diseño

### Home Page
```
┌─────────────────────────────────────────────────────────────┐
│  🎓 AprobaYa                                  [☀️] [👤]    │
├─────────────────────────────────────────────────────────────┤
│  ⚠️ Proyecto comunitario - No afiliado con ninguna empresa │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│    ╔═══════════════════════════════════════════════════╗   │
│    ║  🎓 Prepárate para tus Certificaciones            ║   │
│    ║                                                    ║   │
│    ║  La forma más cute y efectiva de aprobar tus      ║   │
│    ║  exámenes de software ☁️✨                         ║   │
│    ║                                                    ║   │
│    ║  [🚀 Comenzar Ahora]   [📚 Ver Certificaciones]   ║   │
│    ╚═══════════════════════════════════════════════════╝   │
│                                                             │
│   Certificaciones Disponibles:                              │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│   │ ☁️ AWS   │  │ 🔷 Azure │  │ 🐳Docker │  │ ☸️ K8s   │   │
│   │ Cloud    │  │ AZ-900   │  │ DCA      │  │ CKA      │   │
│   │ Pract.   │  │ (Pronto) │  │ (Pronto) │  │ (Pronto) │   │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                             │
│   📈 Tu Progreso General                                    │
│   ████████░░░░░░░░ 45% completado                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Simulador - Pregunta
```
┌─────────────────────────────────────────────────────────────┐
│  ← Volver   Pregunta 15/65              ⏱️ 45:32   [Pausar]│
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ☁️ AWS Cloud Practitioner                           │   │
│  │ 🏷️ Dominio 2: Security & Compliance                │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ❓ ¿Cuál es la responsabilidad del CLIENTE según el      │
│     modelo de responsabilidad compartida?                   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ○ A) Mantener el hardware físico                    │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ● B) Configurar security groups                     │ ✓ │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ○ C) Parchear la infraestructura de red            │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ○ D) Gestionar las Availability Zones              │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  [← Anterior]                              [Siguiente →]   │
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   │
│  15/65                                                      │
└─────────────────────────────────────────────────────────────┘
```

### Feedback después de responder (Modo Estudio)
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ✅ ¡Correcto! +10 puntos                                  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 📝 EXPLICACIÓN                                      │   │
│  │                                                      │   │
│  │ Los Security Groups son configurados por el         │   │
│  │ CLIENTE. Son firewalls virtuales que controlan      │   │
│  │ el tráfico de entrada y salida de las instancias.   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ❌ POR QUÉ LAS OTRAS NO SON CORRECTAS               │   │
│  │                                                      │   │
│  │ 🔸 A) Hardware físico → El proveedor lo mantiene    │   │
│  │ 🔸 C) Infraestructura de red → El proveedor parchea │   │
│  │ 🔸 D) Availability Zones → El proveedor gestiona    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  💡 Tip: Recuerda "Security OF the cloud" (Proveedor) vs  │
│          "Security IN the cloud" (Cliente)                  │
│                                                             │
│  ⚠️ Contenido educativo - Verifica siempre con docs       │
│     oficiales antes del examen                              │
│                                                             │
│  [Continuar →]                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## ✅ Criterios de Éxito

1. **Precisión**: Información basada en guías oficiales de cada examen
2. **UX**: Navegación intuitiva, tiempo de carga <2s
3. **Completitud**: 200+ preguntas por certificación con explicaciones
4. **Engagement**: Sistema de gamificación funcional
5. **Accesibilidad**: Responsive y accesible
6. **Estética**: Diseño moderno, cute y profesional
7. **Transparencia**: Disclaimer visible en toda la aplicación

---

## 🤝 Contribuciones - ¡Proyecto 100% Open Source!

> **AprobaYa es de la comunidad, para la comunidad.**
> 
> Cualquier persona puede contribuir, mejorar y ayudar a que más gente apruebe sus certificaciones.

### Formas de Contribuir

| Tipo | Descripción | Dificultad |
|------|-------------|------------|
| 🐛 **Bug Reports** | Reportar errores en preguntas o contenido | Fácil |
| 📝 **Nuevas Preguntas** | Agregar preguntas originales con explicaciones | Media |
| 🌐 **Nueva Certificación** | Agregar una certificación completa | Avanzada |
| 🎨 **Mejoras de UI** | Diseño, animaciones, accesibilidad | Media |
| 🌍 **Traducciones** | Traducir contenido a otros idiomas | Media |
| ✅ **Verificación** | Revisar precisión del contenido existente | Fácil |
| 📖 **Documentación** | Mejorar docs y guías | Fácil |
| ⭐ **Dar una estrella** | Apoyar el proyecto en GitHub | ¡Muy fácil! |

### Guías para Contribuir

#### 1. Código de Conducta
- Sé respetuoso y constructivo
- Acepta feedback con mente abierta
- Ayuda a otros contribuidores

#### 2. Para Agregar Preguntas
```typescript
// Las preguntas deben seguir este formato:
{
  id: 'cert-xxx',           // ID único
  question: '...',          // Pregunta clara
  options: [...],           // 4-5 opciones
  correctAnswers: ['x'],    // Respuesta(s) correcta(s)
  explanation: {
    correct: '...',         // Por qué es correcta
    incorrect: {...}        // Por qué cada incorrecta NO es válida
  },
  keyTip: '...',            // Tip memorable
  officialDoc: '...'        // Link a documentación oficial
}
```

#### 3. Para Agregar una Certificación
1. Crear carpeta en `data/certifications/[cert-id]/`
2. Agregar `info.ts` con metadata
3. Agregar `domains.ts` con los dominios/temas
4. Agregar carpeta `questions/` con preguntas por dominio
5. Agregar `services.ts` si aplica
6. Crear PR con descripción detallada

#### 4. Reglas de Contenido
- ✅ Todo contenido debe basarse en documentación oficial
- ✅ Citar fuentes cuando sea posible
- ✅ Las preguntas deben ser ORIGINALES
- ❌ NO copiar preguntas de brain dumps o exámenes reales
- ❌ NO contenido con copyright
- ✅ Mantener tono educativo y no comercial

### Proceso de Contribución

```bash
# 1. Fork del repositorio
# 2. Clonar tu fork
git clone https://github.com/TU_USUARIO/aprobaya.git

# 3. Crear rama para tu feature
git checkout -b feature/nueva-pregunta-aws

# 4. Hacer cambios y commit
git add .
git commit -m "feat: agregar 10 preguntas de EC2"

# 5. Push y crear Pull Request
git push origin feature/nueva-pregunta-aws
```

### Reconocimiento a Contribuidores

Todos los contribuidores serán reconocidos en:
- README del proyecto
- Página de "Contribuidores" en la app
- Badge especial 🤝 si contribuyen desde la app

---

## 📚 Referencias Oficiales

### Para AWS Cloud Practitioner
- [AWS CLF-C02 Exam Guide](https://aws.amazon.com/certification/certified-cloud-practitioner/)
- [AWS Documentation](https://docs.aws.amazon.com/)
- [AWS Skill Builder](https://skillbuilder.aws/)

### Para Otras Certificaciones (a agregar)
- [Microsoft Learn](https://learn.microsoft.com/)
- [Google Cloud Training](https://cloud.google.com/training)
- [Docker Documentation](https://docs.docker.com/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)

---

## ⚖️ Licencia MIT

```
MIT License

Copyright (c) 2025 AprobaYa Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### ¿Qué significa esto?

| Puedes ✅ | No puedes ❌ |
|-----------|-------------|
| Usar comercialmente | Responsabilizar a los autores |
| Modificar libremente | Usar sin atribución |
| Distribuir copias | |
| Uso privado | |
| Sublicenciar | |

---

> ## 📢 Recordatorio Final
> 
> **AprobaYa es una herramienta de estudio comunitaria.**
> 
> - Para preparación oficial, consulta siempre los recursos oficiales de cada certificación.
> - No copies preguntas directamente de exámenes reales.
> - Usa esta herramienta como complemento, no como única fuente de estudio.
> - ¡Buena suerte en tus certificaciones! 🍀

---

## 💾 Arquitectura de Datos (Sin Base de Datos)

### ¿Por qué sin base de datos?

1. **Simplicidad**: Menos complejidad = menos bugs
2. **Velocidad**: Los datos están en el bundle, no hay latencia de red
3. **Costo cero**: Sin servidor = sin costos de hosting de DB
4. **Offline**: Funciona sin conexión a internet
5. **Contribuciones fáciles**: Los datos son archivos `.ts` que cualquiera puede editar

### Ejemplo de estructura de datos (TypeScript)

```typescript
// data/certifications/aws-clf-c02/questions/domain1.ts

import { Question } from '@/types';

export const domain1Questions: Question[] = [
  {
    id: 'clf-c02-001',
    domain: 1,
    domainName: 'Cloud Concepts',
    type: 'single', // single | multiple
    question: '¿Por qué AWS es más económico que los data centers tradicionales para aplicaciones con cargas de trabajo variables?',
    options: [
      { id: 'a', text: 'Los costos de Amazon EC2 se facturan mensualmente.' },
      { id: 'b', text: 'Los usuarios conservan acceso administrativo completo a sus instancias.' },
      { id: 'c', text: 'Las instancias de Amazon EC2 se pueden lanzar bajo demanda cuando se necesitan.' },
      { id: 'd', text: 'Los usuarios pueden ejecutar suficientes instancias permanentemente para manejar cargas pico.' },
    ],
    correctAnswers: ['c'],
    explanation: {
      correct: 'La capacidad de lanzar instancias bajo demanda cuando se necesitan permite a los usuarios lanzar y terminar instancias en respuesta a una carga de trabajo variable. Esto es más económico que comprar suficientes servidores on-premises para manejar la carga pico.',
      incorrect: {
        a: 'La facturación mensual no representa una ventaja económica. De hecho, EC2 cobra por hora o segundo, lo cual ES la ventaja.',
        b: 'El acceso administrativo no tiene relación con el ahorro de costos.',
        d: 'Ejecutar instancias permanentemente para cargas pico es exactamente lo OPUESTO a la ventaja de la nube. Eso sería desperdiciar recursos.',
      },
    },
    keyTip: 'On-Demand = Paga solo lo que usas = Ahorro para cargas variables',
    officialDoc: 'https://aws.amazon.com/ec2/pricing/',
  },
  // ... más preguntas
];
```

### Estructura de LocalStorage

```typescript
// Guardado automáticamente en localStorage
interface UserProgress {
  version: '1.0';
  lastUpdated: string; // ISO date
  
  // Por certificación
  certifications: {
    [certId: string]: {
      // Teoría
      theoryProgress: {
        [domainId: string]: {
          completed: boolean;
          lastVisited: string;
        };
      };
      
      // Exámenes
      examHistory: {
        date: string;
        mode: 'study' | 'exam' | 'domain';
        score: number;
        totalQuestions: number;
        timeSpent: number; // segundos
        domainScores: { [domain: string]: number };
      }[];
      
      // Preguntas
      questionStats: {
        [questionId: string]: {
          attempts: number;
          correct: number;
          lastAttempt: string;
        };
      };
    };
  };
  
  // Global
  settings: {
    theme: 'light' | 'dark' | 'system';
    language: 'es' | 'en';
  };
  
  // Gamificación
  achievements: string[]; // IDs de badges desbloqueados
  streak: {
    current: number;
    lastStudyDate: string;
    longest: number;
  };
}
```

### Lazy Loading de Datos

```typescript
// lib/lazy-loader.ts

// Las preguntas se cargan solo cuando se necesitan
export async function loadQuestions(certId: string, domain?: number) {
  switch (certId) {
    case 'aws-clf-c02':
      if (domain) {
        // Cargar solo un dominio
        const module = await import(`@/data/certifications/aws-clf-c02/questions/domain${domain}`);
        return module.default;
      } else {
        // Cargar todos (para examen completo)
        const [d1, d2, d3, d4] = await Promise.all([
          import('@/data/certifications/aws-clf-c02/questions/domain1'),
          import('@/data/certifications/aws-clf-c02/questions/domain2'),
          import('@/data/certifications/aws-clf-c02/questions/domain3'),
          import('@/data/certifications/aws-clf-c02/questions/domain4'),
        ]);
        return [...d1.default, ...d2.default, ...d3.default, ...d4.default];
      }
    // ... más certificaciones
  }
}
```

---

*Plan creado: Diciembre 2025*
*Versión: 1.0*
*Proyecto: AprobaYa - Por la comunidad, para la comunidad*
*Repositorio: https://github.com/sespinosav/aprobaya*
