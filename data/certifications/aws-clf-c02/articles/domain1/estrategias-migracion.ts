import { Article } from "@/types";

export const estrategiasMigracion: Article = {
  id: "d1-art-12",
  slug: "estrategias-migracion",
  title: "Las 7 Estrategias de Migración (7 Rs)",
  shortDescription:
    "Conoce las 7 estrategias de migración a la nube y cuándo usar cada una.",
  certificationId: "aws-clf-c02",
  domainId: "cloud-concepts",
  content: [
    {
      title: "¿Por qué existen múltiples estrategias?",
      content: `No todas las aplicaciones son iguales, y no todas deben migrarse de la misma manera. AWS define **7 estrategias de migración**, conocidas como las **7 Rs**, que representan diferentes enfoques según las necesidades y objetivos.

### Factores que influyen en la elección:
- Complejidad de la aplicación
- Tiempo disponible para migrar
- Presupuesto
- Habilidades del equipo
- Dependencias técnicas
- Objetivos de negocio

Las estrategias están ordenadas de menor a mayor esfuerzo y transformación.`,
    },
    {
      title: "1. Retire (Retirar)",
      content: `### ¿Qué es?
Desactivar aplicaciones que ya no son necesarias.

### Cuándo usar:
- Aplicaciones obsoletas o redundantes
- Sistemas que nadie usa
- Funcionalidad duplicada
- Aplicaciones reemplazadas por otras

### Beneficios:
- Reduce costos inmediatamente
- Menos superficie de seguridad
- Menos complejidad operativa

### Ejemplo:
Durante el análisis de portfolio, descubres 3 aplicaciones legacy que solo usan 5 personas y cuyos datos ya están en un nuevo sistema.
→ **Retire** las 3 aplicaciones.

### Estadística típica:
En migraciones grandes, entre 10-20% de aplicaciones se retiran.`,
    },
    {
      title: "2. Retain (Retener)",
      content: `### ¿Qué es?
Mantener aplicaciones on-premises, al menos por ahora.

### Cuándo usar:
- Aplicaciones que no están listas para migrar
- Requisitos regulatorios que impiden moverlas
- Dependencias complejas que requieren más tiempo
- Inversión reciente en hardware
- Planificación para migrar más adelante

### No es "nunca migrar", es "no ahora":
Retener es una decisión temporal. Se debe re-evaluar periódicamente.

### Ejemplo:
Un sistema mainframe crítico tiene contratos de soporte hasta 2026 y dependencias complejas.
→ **Retain** por ahora, planificar migración futura.`,
    },
    {
      title: "3. Rehost (Rehospedar) - Lift and Shift",
      content: `### ¿Qué es?
Mover la aplicación tal cual está a la nube, sin cambios.

### También conocido como:
- "Lift and Shift"
- "Forklift migration"

### Cuándo usar:
- Migración rápida requerida
- Reducir costos de data center rápidamente
- Primera fase antes de optimizar
- Aplicaciones legacy sin desarrolladores

### Herramientas AWS:
- **AWS Application Migration Service (MGN):** Replicación automática de servidores
- **AWS Database Migration Service (DMS):** Migración de bases de datos

### Ventajas:
- Más rápido de implementar
- Menor riesgo (la app no cambia)
- No requiere re-desarrollar

### Desventajas:
- No aprovecha servicios cloud-native
- Puede ser más costoso a largo plazo
- Mismos problemas de escalabilidad

### Ejemplo:
Un ERP legacy que funciona bien pero el data center cierra en 6 meses.
→ **Rehost** a EC2, optimizar después.`,
    },
    {
      title: "4. Relocate (Reubicar) - Lift and Shift at Hypervisor Level",
      content: `### ¿Qué es?
Mover la infraestructura a la nube a nivel de hypervisor, sin reconfigurar cada VM.

### Específico para VMware:
Esta estrategia aplica principalmente a entornos VMware usando **VMware Cloud on AWS**.

### Cuándo usar:
- Gran infraestructura VMware existente
- Quieres salir del data center rápidamente
- Mantener inversión en herramientas VMware
- Híbrido entre on-premises y nube

### Beneficios:
- Migración más rápida que Rehost
- Mantiene IPs, configuraciones de red
- Mismas herramientas de gestión (vCenter)
- Sin tiempo de inactividad para muchas cargas

### Ejemplo:
Una empresa con 500 VMs en VMware quiere cerrar su data center en 3 meses.
→ **Relocate** a VMware Cloud on AWS.`,
    },
    {
      title: "5. Repurchase (Recomprar) - Drop and Shop",
      content: `### ¿Qué es?
Reemplazar la aplicación actual por un producto SaaS o diferente.

### También conocido como:
- "Drop and Shop"
- "Replace"

### Cuándo usar:
- Existe un SaaS que hace lo mismo mejor
- La aplicación actual es obsoleta
- Alto costo de mantenimiento
- Quieres dejar de gestionar infraestructura para esa función

### Ejemplos comunes:
| Aplicación actual | Reemplazar por |
|-------------------|----------------|
| CRM legacy | Salesforce |
| Email on-premises | Amazon WorkMail, Google Workspace, M365 |
| ERP customizado | SAP en AWS, Oracle Cloud |
| HRIS legacy | Workday |
| Ticketing propio | ServiceNow, Zendesk |

### Ventajas:
- Sin gestión de infraestructura
- Funcionalidades modernas
- Actualizaciones automáticas

### Desventajas:
- Migración de datos compleja
- Pérdida de customizaciones
- Dependencia del vendor
- Costo de licencias SaaS`,
    },
    {
      title: "6. Replatform (Re-plataformar) - Lift, Tinker, and Shift",
      content: `### ¿Qué es?
Mover a la nube con algunas optimizaciones, sin cambiar la arquitectura core.

### También conocido como:
- "Lift, Tinker, and Shift"

### Cuándo usar:
- Quieres beneficios de servicios gestionados
- Sin tiempo para re-arquitectura completa
- Optimizaciones claras y de bajo riesgo

### Optimizaciones típicas:
| Componente | De (on-prem) | A (AWS) |
|------------|--------------|---------|
| Base de datos | MySQL self-managed | Amazon RDS MySQL |
| Caché | Redis self-managed | ElastiCache Redis |
| Storage | NFS server | Amazon EFS |
| Load Balancer | F5 hardware | Application Load Balancer |

### Ventajas:
- Beneficios de servicios gestionados (patching, backups)
- Mejor escalabilidad
- Sin re-escribir código

### Desventajas:
- Algo más de esfuerzo que Rehost
- Requiere algo de testing

### Ejemplo:
Una aplicación Java con MySQL.
→ **Replatform:** Rehost el app server a EC2, mover MySQL a RDS.`,
    },
    {
      title: "7. Refactor (Refactorizar) - Re-architect",
      content: `### ¿Qué es?
Rediseñar la aplicación para aprovechar al máximo las capacidades cloud-native.

### También conocido como:
- "Re-architect"
- "Rebuild"

### Cuándo usar:
- La aplicación necesita escalar masivamente
- Quieres reducir costos a largo plazo
- Necesitas agilidad de desarrollo
- La aplicación es estratégica para el negocio

### Transformaciones típicas:
- Monolito → Microservicios
- Servidores → Serverless (Lambda)
- VM-based → Containers (ECS, EKS)
- Base de datos relacional → DynamoDB (si aplica)
- Polling → Event-driven (EventBridge, SQS)

### Ventajas:
- Máximos beneficios de la nube
- Mejor escalabilidad y resiliencia
- Menor costo operativo a largo plazo
- Mayor agilidad

### Desventajas:
- Mayor esfuerzo y tiempo
- Requiere habilidades cloud-native
- Mayor riesgo de proyecto

### Ejemplo:
Una aplicación de e-commerce monolítica que no escala en Black Friday.
→ **Refactor** a microservicios con Lambda, API Gateway, DynamoDB.`,
    },
    {
      title: "Comparación de Estrategias",
      content: `### Resumen de las 7 Rs:

| Estrategia | Esfuerzo | Beneficio Cloud | Cuándo usar |
|------------|----------|-----------------|-------------|
| **Retire** | Bajo | N/A | Ya no se necesita |
| **Retain** | Bajo | Ninguno | No lista para migrar |
| **Rehost** | Bajo | Bajo | Migración rápida |
| **Relocate** | Bajo | Bajo | Infraestructura VMware |
| **Repurchase** | Medio | Alto | Existe mejor SaaS |
| **Replatform** | Medio | Medio | Servicios gestionados |
| **Refactor** | Alto | Alto | Máxima optimización |

### Distribución típica en migración empresarial:
- Retire: 10-20%
- Retain: 10-20%
- Rehost/Relocate: 30-40%
- Repurchase: 5-10%
- Replatform: 20-30%
- Refactor: 5-15%`,
    },
    {
      title: "Las 7 Rs en el Examen",
      content: `### Puntos clave para el CLF-C02:

1. **Memoriza las 7 Rs:**
   - Retire, Retain, Rehost, Relocate, Repurchase, Replatform, Refactor

2. **Asociaciones clave:**
   - Rehost = Lift and Shift
   - Replatform = Lift, Tinker, and Shift
   - Repurchase = Drop and Shop (SaaS)
   - Refactor = Re-architect (microservicios, serverless)

3. **Velocidad vs Optimización:**
   - Rápido: Rehost
   - Óptimo: Refactor

### Preguntas típicas:

*"¿Qué estrategia permite migrar rápidamente sin cambiar la aplicación?"*
→ Rehost (Lift and Shift)

*"¿Qué estrategia reemplaza una aplicación por un producto SaaS?"*
→ Repurchase

*"¿Qué estrategia transforma un monolito en microservicios?"*
→ Refactor

*"¿Qué estrategia mueve a RDS sin cambiar el código de la aplicación?"*
→ Replatform

*"¿Qué servicio ayuda a realizar Rehost de servidores?"*
→ AWS Application Migration Service (MGN)`,
    },
  ],
  keyPoints: [
    "7 Rs: Retire, Retain, Rehost, Relocate, Repurchase, Replatform, Refactor",
    "Rehost (Lift and Shift): Migrar sin cambios, más rápido",
    "Replatform: Algunas optimizaciones (ej: mover DB a RDS)",
    "Refactor (Re-architect): Rediseño completo, cloud-native",
    "Repurchase: Reemplazar por SaaS (ej: Salesforce)",
    "Retire: Desactivar aplicaciones innecesarias",
    "AWS MGN ayuda con Rehost; AWS DMS con migración de bases de datos",
  ],
  tags: [
    "migración",
    "7 Rs",
    "Rehost",
    "Refactor",
    "Replatform",
    "lift and shift",
    "cloud-native",
    "MGN",
    "DMS",
  ],
  relatedServices: ["mgn", "dms", "migration-hub"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
