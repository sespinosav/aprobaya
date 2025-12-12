import { Article } from "@/types";

export const elasticBeanstalk: Article = {
  id: "d3-art-13",
  slug: "elastic-beanstalk",
  title: "AWS Elastic Beanstalk: PaaS de AWS",
  shortDescription:
    "Despliega aplicaciones web fácilmente sin preocuparte por la infraestructura subyacente.",
  domainId: "domain3",
  content: {
    introduction:
      "AWS Elastic Beanstalk es un servicio PaaS (Platform as a Service) que permite desplegar y escalar aplicaciones web y servicios sin administrar la infraestructura. Tú subes el código, Beanstalk maneja el resto.",
    sections: [
      {
        title: "¿Qué es Elastic Beanstalk?",
        content: `Beanstalk es un servicio que **automatiza el despliegue** de aplicaciones web.

**Modelo PaaS:**
- **IaaS** (EC2): Tú administras todo
- **PaaS** (Beanstalk): AWS administra infraestructura, tú solo código
- **SaaS** (apps): Usuario solo usa la aplicación

**Beanstalk administra:**
- Aprovisionamiento de EC2, ELB, Auto Scaling
- Configuración de redes y seguridad
- Actualizaciones de plataforma
- Monitoreo y health checks
- Despliegue de código

**Tú controlas:**
- Tu código de aplicación
- Configuraciones de la aplicación
- Cuánta capacidad necesitas

**Importante:**
- Los recursos creados (EC2, ELB) SON tuyos
- Tienes acceso completo a ellos
- Beanstalk es una capa de gestión, no esconde nada`,
      },
      {
        title: "Plataformas Soportadas",
        content: `**Lenguajes y frameworks:**
- **Java**: Tomcat, SE
- **Node.js**: Express, etc.
- **.NET**: Windows Server con IIS
- **PHP**: Apache
- **Python**: Django, Flask
- **Ruby**: Rails, Sinatra
- **Go**
- **Docker**: Single y Multi-container

**Docker:**
- Despliega cualquier aplicación containerizada
- Docker Compose para multi-container
- ECS running mode para producción

**Plataformas administradas:**
- AWS mantiene las AMIs actualizadas
- Parches de seguridad automáticos
- Versiones de runtime actualizadas

**Custom Platforms:**
- Crear tus propias plataformas con Packer
- Para lenguajes no soportados nativamente
- Control total de la AMI`,
      },
      {
        title: "Arquitectura y Componentes",
        content: `**Application:**
- Contenedor lógico de alto nivel
- Contiene environments, versiones, configuraciones

**Environment:**
- Recursos AWS ejecutando una versión de la aplicación
- Tipos:
  - **Web Server**: Para aplicaciones HTTP
  - **Worker**: Para procesamiento de background (SQS)

**Application Version:**
- Versión específica del código
- Se almacena en S3
- Puedes tener múltiples versiones

**Environment Tier:**
\`\`\`
Web Server Tier:
     Internet
         │
    Elastic LB
         │
    Auto Scaling
    ┌────┴────┐
    │   EC2   │
    └─────────┘

Worker Tier:
    SQS Queue
         │
    Auto Scaling
    ┌────┴────┐
    │   EC2   │ (procesa mensajes)
    └─────────┘
\`\`\`

**Configuración típica Web Server:**
- Elastic Load Balancer
- Auto Scaling Group
- EC2 instances
- Security Groups
- RDS (opcional)`,
      },
      {
        title: "Estrategias de Despliegue",
        content: `**All at Once:**
- Despliega en todas las instancias simultáneamente
- Downtime durante el despliegue
- Más rápido, para desarrollo

**Rolling:**
- Despliega en lotes de instancias
- Sin downtime total (capacidad reducida)
- Balance entre velocidad y disponibilidad

**Rolling with Additional Batch:**
- Lanza instancias adicionales primero
- Mantiene capacidad completa durante despliegue
- Sin impacto en capacidad

**Immutable:**
- Lanza nuevo Auto Scaling Group
- Instancias nuevas con nueva versión
- Swap cuando están healthy
- Rollback rápido, más seguro

**Blue/Green:**
- Nuevo environment completo
- Swap de URL cuando está listo
- Cero downtime
- Rollback instantáneo

**Recomendaciones:**
| Ambiente | Estrategia |
|----------|-----------|
| Desarrollo | All at once |
| Staging | Rolling |
| Producción | Immutable o Blue/Green |`,
        note: "Immutable y Blue/Green son las más seguras para producción porque permiten rollback instantáneo.",
      },
      {
        title: "Configuración y Personalización",
        content: `**Opciones de configuración:**
- Instancias (tipo, key pair)
- Capacidad (min/max instancias)
- Load Balancer (tipo, listeners)
- Base de datos (RDS adjunta)
- Monitoreo (enhanced health)
- Notificaciones (SNS)

**Archivos de configuración (.ebextensions):**
\`\`\`yaml
# .ebextensions/01-packages.config
packages:
  yum:
    git: []
    
commands:
  01_install_something:
    command: "npm install -g something"
\`\`\`

**Saved Configurations:**
- Guardar configuraciones como templates
- Reutilizar entre environments
- Versionado de configuraciones

**Environment Variables:**
\`\`\`yaml
option_settings:
  aws:elasticbeanstalk:application:environment:
    DB_HOST: mydb.xxx.rds.amazonaws.com
    NODE_ENV: production
\`\`\`

**RDS dentro vs fuera de Beanstalk:**
- Dentro: Se elimina con el environment (dev)
- Fuera: Persiste independientemente (producción)`,
      },
      {
        title: "Cuándo Usar Beanstalk",
        content: `**Ideal para:**
- Equipos que quieren enfocarse en código
- Aplicaciones web estándar
- Startups y prototipos rápidos
- Desarrolladores sin experiencia en infraestructura

**Casos de uso:**
- Aplicaciones web tradicionales
- APIs REST
- Microservicios simples
- Aplicaciones en containers

**Beanstalk vs otras opciones:**
| Servicio | Control | Esfuerzo | Mejor para |
|----------|---------|----------|-----------|
| EC2 | Total | Alto | Control total |
| Beanstalk | Medio | Bajo | Apps web rápido |
| Lambda | Ninguno | Mínimo | Funciones cortas |
| ECS/EKS | Alto | Alto | Containers complejos |

**Limitaciones:**
- Menos control que EC2 manual
- Plataformas predefinidas
- Puede ser overkill para apps simples

**Precio:**
- Beanstalk en sí es **GRATIS**
- Solo pagas por los recursos (EC2, ELB, RDS)
- Es una capa de gestión sin costo adicional`,
      },
    ],
  },
  keyTakeaways: [
    "Elastic Beanstalk es PaaS - subes código, AWS maneja infraestructura",
    "Soporta Java, Node.js, Python, .NET, PHP, Ruby, Go y Docker",
    "Beanstalk es gratis - solo pagas por los recursos creados",
    "Estrategias de despliegue: All at once, Rolling, Immutable, Blue/Green",
    "Tienes acceso completo a los recursos subyacentes (EC2, ELB)",
  ],
  relatedQuestions: ["q71"],
  tags: ["Elastic Beanstalk", "PaaS", "despliegue", "aplicaciones web"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
