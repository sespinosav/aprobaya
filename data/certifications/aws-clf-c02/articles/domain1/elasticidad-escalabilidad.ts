import { Article } from "@/types";

export const elasticidadEscalabilidad: Article = {
  id: "d1-art-04",
  slug: "elasticidad-escalabilidad",
  title: "Elasticidad y Escalabilidad en AWS",
  shortDescription:
    "Comprende las diferencias entre elasticidad y escalabilidad, y cómo AWS permite ajustar recursos automáticamente.",
  certificationId: "aws-clf-c02",
  domainId: "cloud-concepts",
  content: [
    {
      title: "Conceptos Fundamentales",
      content: `Estos dos conceptos son frecuentemente confundidos, pero son diferentes y complementarios. Entenderlos es crucial para el examen CLF-C02.

### Escalabilidad
La **escalabilidad** es la capacidad de un sistema de manejar cargas de trabajo crecientes mediante la adición de recursos.

Hay dos tipos:
- **Escalabilidad Vertical (Scale Up/Down):** Aumentar el tamaño de un recurso individual (más CPU, más RAM)
- **Escalabilidad Horizontal (Scale Out/In):** Agregar o quitar instancias del mismo tipo

### Elasticidad
La **elasticidad** es la capacidad de un sistema de escalar recursos **automáticamente** y **en tiempo real** según la demanda, tanto hacia arriba como hacia abajo.

> **La elasticidad es escalabilidad + automatización + reversibilidad**`,
    },
    {
      title: "Escalabilidad Vertical vs Horizontal",
      content: `### Escalabilidad Vertical (Scale Up/Down)

**Qué es:** Cambiar el tamaño de una instancia individual.

**Ejemplo:** Cambiar de una instancia t3.medium a una t3.xlarge.

**Ventajas:**
- Simple de implementar
- Sin cambios en la arquitectura de la aplicación
- Menos complejidad de red

**Desventajas:**
- Tiene límites físicos (la instancia más grande disponible)
- Generalmente requiere tiempo de inactividad
- Un solo punto de fallo

**Cuándo usar:**
- Bases de datos que no soportan distribución
- Aplicaciones legacy que no escalan horizontalmente
- Cargas de trabajo con estado (stateful)

---

### Escalabilidad Horizontal (Scale Out/In)

**Qué es:** Agregar o quitar instancias del mismo tamaño.

**Ejemplo:** Pasar de 2 instancias t3.medium a 10 instancias t3.medium.

**Ventajas:**
- Sin límites teóricos de escala
- Sin tiempo de inactividad
- Alta disponibilidad inherente
- Más económico (muchas pequeñas vs una gigante)

**Desventajas:**
- Requiere que la aplicación sea stateless
- Necesita balanceador de carga
- Mayor complejidad operativa

**Cuándo usar:**
- Aplicaciones web y APIs
- Microservicios
- Cargas de trabajo sin estado (stateless)`,
    },
    {
      title: "AWS Auto Scaling",
      content: `**AWS Auto Scaling** es el servicio que proporciona elasticidad automática a tus recursos.

### Componentes de Auto Scaling para EC2:

1. **Launch Template / Launch Configuration**
   - Define QUÉ lanzar (AMI, tipo de instancia, security groups, etc.)

2. **Auto Scaling Group (ASG)**
   - Define CUÁNTAS instancias mantener
   - Configuraciones:
     - **Minimum:** Número mínimo de instancias (ej: 2)
     - **Desired:** Número deseado de instancias (ej: 4)
     - **Maximum:** Número máximo de instancias (ej: 10)

3. **Scaling Policies**
   - Define CUÁNDO escalar

### Tipos de Políticas de Escalado:

| Tipo | Descripción |
|------|-------------|
| **Target Tracking** | Mantiene una métrica en un valor objetivo (ej: CPU al 50%) |
| **Step Scaling** | Escala en pasos según umbrales (ej: +2 si CPU > 70%, +4 si CPU > 90%) |
| **Simple Scaling** | Espera un cooldown antes de evaluar de nuevo |
| **Scheduled** | Escala en horarios predefinidos (ej: más capacidad en horario laboral) |
| **Predictive** | Usa ML para predecir patrones y escalar proactivamente |

### Ejemplo de Target Tracking:
\`\`\`
Objetivo: Mantener CPU promedio al 50%
- Si CPU sube a 70% → Auto Scaling agrega instancias
- Si CPU baja a 30% → Auto Scaling termina instancias
\`\`\``,
    },
    {
      title: "Otros Servicios con Escalabilidad Automática",
      content: `Auto Scaling no es solo para EC2. Varios servicios AWS escalan automáticamente:

### Escalado Completamente Automático (sin configuración):
- **AWS Lambda** - Escala a miles de ejecuciones simultáneas
- **Amazon S3** - Almacenamiento ilimitado
- **Amazon DynamoDB (on-demand)** - Capacidad según demanda
- **AWS Fargate** - Contenedores sin gestión de servidores

### Escalado Configurable:
- **Amazon ECS** - Service Auto Scaling para tareas
- **Amazon RDS** - Read Replicas y almacenamiento auto-expandible
- **Amazon Aurora** - Auto Scaling de réplicas de lectura
- **DynamoDB (provisioned)** - Auto Scaling de capacidad

### Escalado Manual:
- **Amazon RDS** - Cambiar clase de instancia (requiere reinicio breve)
- **Amazon ElastiCache** - Agregar nodos al cluster`,
    },
    {
      title: "Elastic Load Balancing (ELB)",
      content: `Para que la escalabilidad horizontal funcione, necesitas distribuir el tráfico entre las instancias. Aquí entra **Elastic Load Balancing**.

### Tipos de Load Balancers:

| Tipo | Capa OSI | Casos de uso |
|------|----------|--------------|
| **Application LB (ALB)** | Capa 7 (HTTP/HTTPS) | Aplicaciones web, microservicios, routing basado en contenido |
| **Network LB (NLB)** | Capa 4 (TCP/UDP) | Alta performance, millones de req/seg, IPs estáticas |
| **Gateway LB (GWLB)** | Capa 3 | Appliances virtuales (firewalls, IDS/IPS) |
| **Classic LB** | Capa 4 y 7 | Legacy, no usar para nuevas aplicaciones |

### Características importantes:
- **Health Checks:** Verifican que las instancias estén sanas
- **Cross-Zone Load Balancing:** Distribuye tráfico entre AZs
- **SSL/TLS Termination:** Descarga el cifrado del servidor
- **Integración con Auto Scaling:** Registra/desregistra instancias automáticamente`,
    },
    {
      title: "Ejemplo Práctico: Arquitectura Elástica",
      content: `Veamos cómo se combinan estos conceptos en una arquitectura real:

### Escenario: E-commerce con tráfico variable

**Arquitectura:**
\`\`\`
                    [Route 53 DNS]
                          │
                    [CloudFront CDN]
                          │
                    [Application LB]
                    ┌─────┼─────┐
                    │     │     │
                [EC2]  [EC2]  [EC2]  ← Auto Scaling Group
                    │     │     │
                    └─────┼─────┘
                          │
                    [Aurora MySQL]
                    (Multi-AZ + Read Replicas)
\`\`\`

**Comportamiento:**
1. **Día normal:** 3 instancias EC2, 1 réplica de lectura Aurora
2. **Black Friday:** Auto Scaling sube a 15 instancias, Aurora agrega 3 réplicas
3. **3 AM del martes:** Auto Scaling baja a 2 instancias (mínimo)

**Beneficio:** Solo pagas por lo que usas, cuando lo usas.`,
    },
    {
      title: "Elasticidad vs Alta Disponibilidad",
      content: `Estos conceptos están relacionados pero son diferentes:

### Elasticidad
- **Objetivo:** Ajustar capacidad a la demanda
- **Beneficio principal:** Optimización de costos
- **Pregunta que responde:** "¿Cuánta capacidad necesito ahora?"

### Alta Disponibilidad (HA)
- **Objetivo:** Mantener el sistema funcionando ante fallos
- **Beneficio principal:** Continuidad del servicio
- **Pregunta que responde:** "¿Seguirá funcionando si algo falla?"

### Cómo se complementan:
- **Auto Scaling Group con min=2** en múltiples AZs proporciona AMBAS
- Si una AZ falla, las instancias en otras AZs manejan la carga
- Si la demanda aumenta, Auto Scaling agrega capacidad

> **Tip para el examen:** Si la pregunta menciona "manejar picos de demanda" → Elasticidad/Auto Scaling. Si menciona "seguir funcionando ante fallos" → Alta Disponibilidad/Multi-AZ.`,
    },
  ],
  keyPoints: [
    "Escalabilidad Vertical: Aumentar tamaño de una instancia (scale up)",
    "Escalabilidad Horizontal: Agregar más instancias (scale out)",
    "Elasticidad: Escalabilidad automática según demanda",
    "Auto Scaling Group: Define min, desired y max instancias",
    "Target Tracking: Mantiene métrica en valor objetivo automáticamente",
    "ELB distribuye tráfico entre instancias",
    "Lambda, S3, DynamoDB on-demand escalan automáticamente",
  ],
  tags: [
    "elasticidad",
    "escalabilidad",
    "Auto Scaling",
    "ELB",
    "scale up",
    "scale out",
    "horizontal",
    "vertical",
  ],
  relatedServices: ["ec2", "auto-scaling", "elb", "lambda"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
