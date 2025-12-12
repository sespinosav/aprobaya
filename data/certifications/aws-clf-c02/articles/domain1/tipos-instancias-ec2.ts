import { Article } from "@/types";

export const tiposInstanciasEc2: Article = {
  id: "d1-art-02",
  slug: "tipos-instancias-ec2",
  title: "Tipos de Instancias EC2",
  shortDescription:
    "Comprende las diferentes familias de instancias EC2 y cómo elegir la correcta para tu carga de trabajo.",
  certificationId: "aws-clf-c02",
  domainId: "cloud-concepts",
  content: [
    {
      title: "¿Qué es Amazon EC2?",
      content: `**Amazon Elastic Compute Cloud (EC2)** es el servicio de cómputo fundamental de AWS. Proporciona servidores virtuales (llamados "instancias") que puedes configurar y escalar según tus necesidades.

Cada instancia EC2 es una máquina virtual que ejecuta un sistema operativo (Linux, Windows, macOS) y puede correr cualquier software que necesites.`,
    },
    {
      title: "Familias de Instancias EC2",
      content: `AWS organiza las instancias en familias, cada una optimizada para diferentes tipos de carga de trabajo. El nombre de cada instancia sigue un patrón: **[Familia][Generación].[Tamaño]**

Por ejemplo: **m5.xlarge** = Familia M, Generación 5, tamaño xlarge.

### Uso General (M, T, A)

**Familia T (Turbo/Burstable):**
- Instancias con capacidad de "ráfaga"
- Acumulan créditos de CPU cuando están ociosas
- Ideales para cargas variables (servidores web pequeños, desarrollo)
- **T3, T3a** son las más comunes

**Familia M (Medium/Balanced):**
- Balance equilibrado entre cómputo, memoria y red
- Ideales para aplicaciones de propósito general
- **M5, M6i, M7i** son las versiones actuales

### Optimizadas para Cómputo (C)

**Familia C (Compute):**
- Alta relación CPU/memoria
- Procesadores de alto rendimiento
- Ideales para:
  - Procesamiento por lotes
  - Servidores de juegos
  - Modelado científico
  - Machine Learning (inferencia)
- **C5, C6i, C7i** son las versiones actuales

### Optimizadas para Memoria (R, X, Z)

**Familia R (RAM):**
- Gran cantidad de memoria
- Ideales para bases de datos en memoria, cachés
- **R5, R6i** son las más usadas

**Familia X:**
- Memoria extrema (hasta 4 TB de RAM)
- Para bases de datos SAP HANA, analytics en memoria

### Optimizadas para Almacenamiento (I, D, H)

**Familia I (I/O):**
- SSD NVMe de alta velocidad
- Ideales para bases de datos NoSQL, data warehousing

**Familia D (Dense storage):**
- HDD de alta capacidad
- Para data lakes, sistemas de archivos distribuidos

### Cómputo Acelerado (P, G, Inf, Trn)

**Familia P (GPU - Processing):**
- GPUs NVIDIA para machine learning y HPC
- **P4d** para entrenamiento de modelos grandes

**Familia G (GPU - Graphics):**
- GPUs para gráficos, streaming de video, gaming
- **G5** para estaciones de trabajo virtuales

**Familia Inf (Inferencia):**
- Chips AWS Inferentia para inferencia de ML
- Costo-eficiente para desplegar modelos entrenados

**Familia Trn (Training):**
- Chips AWS Trainium para entrenamiento de ML
- Alternativa más económica a GPUs NVIDIA`,
    },
    {
      title: "Cómo Elegir el Tipo Correcto",
      content: `### Preguntas clave para decidir:

1. **¿Cuál es el cuello de botella de mi aplicación?**
   - CPU → Familia C
   - Memoria → Familia R o X
   - Almacenamiento → Familia I o D
   - GPU → Familia P o G

2. **¿Mi carga de trabajo es constante o variable?**
   - Variable/Impredecible → T3 (burstable)
   - Constante → M, C, R (según necesidad)

3. **¿Necesito GPUs?**
   - Entrenamiento ML → P4d, Trn1
   - Inferencia ML → Inf1, Inf2
   - Gráficos/Gaming → G5

### Tabla de referencia rápida

| Caso de uso | Familia recomendada |
|-------------|---------------------|
| Servidor web pequeño | T3, T3a |
| Aplicación empresarial | M5, M6i |
| Procesamiento intensivo | C5, C6i |
| Base de datos relacional | R5, R6i |
| Cache Redis/Memcached | R5 |
| Data warehouse | I3, D2 |
| Entrenamiento ML | P4d, Trn1 |
| Streaming de juegos | G5 |`,
    },
    {
      title: "Tamaños de Instancia",
      content: `Cada familia viene en múltiples tamaños. Al subir de tamaño, generalmente se duplican los recursos:

| Tamaño | vCPUs típicas | Memoria típica (M5) |
|--------|---------------|---------------------|
| nano | 1-2 | - |
| micro | 1-2 | - |
| small | 1-2 | 2 GB |
| medium | 2 | 4 GB |
| large | 2 | 8 GB |
| xlarge | 4 | 16 GB |
| 2xlarge | 8 | 32 GB |
| 4xlarge | 16 | 64 GB |
| ... | ... | ... |
| 24xlarge | 96 | 384 GB |

**Nota:** Los valores exactos varían según la familia y generación.`,
    },
    {
      title: "Opciones de Compra",
      content: `### On-Demand (Bajo demanda)
- Paga por hora o segundo (mínimo 60 segundos)
- Sin compromiso a largo plazo
- Precio más alto, máxima flexibilidad

### Reserved Instances (Instancias Reservadas)
- Compromiso de 1 o 3 años
- Hasta **72% de descuento** vs On-Demand
- Pago: Todo adelantado, parcial, o sin pago inicial

### Spot Instances
- Usa capacidad EC2 no utilizada
- Hasta **90% de descuento**
- AWS puede reclamar la instancia con 2 minutos de aviso
- Ideal para: procesamiento por lotes, CI/CD, análisis de datos

### Savings Plans
- Compromiso de uso por hora (ej: $10/hora por 1 año)
- Más flexible que Reserved Instances
- Aplica automáticamente a EC2, Lambda, Fargate

### Dedicated Hosts
- Servidor físico completo para ti
- Necesario para licencias que requieren sockets/cores físicos
- Cumplimiento regulatorio`,
    },
  ],
  keyPoints: [
    "Familia T: Instancias burstable para cargas variables",
    "Familia M: Uso general, balance entre CPU/memoria",
    "Familia C: Optimizadas para cómputo intensivo",
    "Familia R: Optimizadas para memoria",
    "Familia P/G: GPUs para ML y gráficos",
    "Spot Instances: Hasta 90% descuento con posible interrupción",
    "Reserved Instances: Hasta 72% descuento con compromiso de 1-3 años",
  ],
  tags: [
    "EC2",
    "instancias",
    "tipos de instancia",
    "T3",
    "M5",
    "C5",
    "R5",
    "spot",
    "reserved",
    "on-demand",
  ],
  relatedServices: ["ec2", "auto-scaling"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
