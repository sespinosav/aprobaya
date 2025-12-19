import { Question } from "@/types";

export const domain3Questions: Question[] = [
  {
    id: "clf-013",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué componente de la infraestructura global de AWS consta de uno o más data centers discretos con alimentación, redes y conectividad redundantes?",
    options: [
      { id: "a", text: "Región de AWS" },
      { id: "b", text: "Zona de disponibilidad (AZ)" },
      { id: "c", text: "Edge Location" },
      { id: "d", text: "Local Zone" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Una Zona de Disponibilidad (AZ) consta de uno o más data centers discretos, cada uno con alimentación redundante, redes y conectividad, ubicados en instalaciones separadas. Las AZs dentro de una región están conectadas con redes de baja latencia.",
      whyOthersWrong: {
        a: "Una Región de AWS es un área geográfica que contiene múltiples Zonas de Disponibilidad (generalmente 3 o más). Una región no es un data center individual.",
        c: "Un Edge Location es un punto de presencia de CloudFront usado para cachear contenido y reducir latencia. No es un data center completo.",
        d: "Una Local Zone es una extensión de una Región de AWS que permite ejecutar recursos más cerca de los usuarios finales, pero no es la definición de un data center estándar de AWS.",
      },
    },
    tags: ["infraestructura-global", "zonas-disponibilidad", "data-centers"],
  },
  {
    id: "clf-014",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué servicio de AWS proporciona almacenamiento de objetos con 11 nueves (99.999999999%) de durabilidad?",
    options: [
      { id: "a", text: "Amazon EBS" },
      { id: "b", text: "Amazon EFS" },
      { id: "c", text: "Amazon S3" },
      { id: "d", text: "Amazon Glacier" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Amazon S3 (Simple Storage Service) ofrece 99.999999999% (11 nueves) de durabilidad para objetos. Esto significa que si almacena 10 millones de objetos, puede esperar perder un objeto cada 10,000 años. S3 replica automáticamente los datos en múltiples dispositivos y zonas de disponibilidad.",
      whyOthersWrong: {
        a: "Amazon EBS (Elastic Block Store) proporciona almacenamiento de bloques para EC2 con alta disponibilidad, pero está diseñado para un caso de uso diferente (volúmenes de disco) y tiene características de durabilidad distintas.",
        b: "Amazon EFS (Elastic File System) proporciona almacenamiento de archivos compartido, pero la pregunta se refiere específicamente a los 11 nueves de durabilidad de S3.",
        d: "Amazon Glacier (ahora S3 Glacier) es una clase de almacenamiento de S3 para archivado a largo plazo. Aunque comparte la durabilidad de S3, la respuesta más precisa para almacenamiento de objetos con 11 nueves es S3.",
      },
    },
    tags: ["s3", "almacenamiento-objetos", "durabilidad"],
  },
  {
    id: "clf-015",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa necesita ejecutar código en respuesta a eventos (como la carga de un archivo a S3) sin aprovisionar ni gestionar servidores. ¿Qué servicio de AWS debería usar?",
    options: [
      { id: "a", text: "Amazon EC2" },
      { id: "b", text: "AWS Lambda" },
      { id: "c", text: "Amazon ECS" },
      { id: "d", text: "AWS Elastic Beanstalk" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Lambda es un servicio de cómputo serverless que ejecuta código en respuesta a eventos sin necesidad de aprovisionar o gestionar servidores. Puede configurarse para responder a eventos de S3 (como cargas de archivos), DynamoDB, API Gateway, y muchos más. Solo pagas por el tiempo de ejecución.",
      whyOthersWrong: {
        a: "Amazon EC2 requiere aprovisionar y gestionar instancias (servidores virtuales). No es serverless y no responde automáticamente a eventos.",
        c: "Amazon ECS es un servicio de orquestación de contenedores. Aunque con Fargate puede ser serverless, no está diseñado específicamente para responder a eventos como Lambda.",
        d: "AWS Elastic Beanstalk es un servicio PaaS que despliega aplicaciones web, pero aún utiliza instancias EC2 bajo el capó y no es serverless basado en eventos.",
      },
    },
    tags: ["lambda", "serverless", "eventos", "compute"],
  },
  {
    id: "clf-016",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de base de datos de AWS es una base de datos NoSQL serverless con rendimiento de milisegundos de un solo dígito a cualquier escala?",
    options: [
      { id: "a", text: "Amazon RDS" },
      { id: "b", text: "Amazon Aurora" },
      { id: "c", text: "Amazon DynamoDB" },
      { id: "d", text: "Amazon Redshift" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Amazon DynamoDB es una base de datos NoSQL serverless de clave-valor y documentos que ofrece rendimiento de milisegundos de un solo dígito a cualquier escala. Escala automáticamente para manejar billones de solicitudes por día y no requiere administración de servidores.",
      whyOthersWrong: {
        a: "Amazon RDS (Relational Database Service) es un servicio de bases de datos relacionales administrado (MySQL, PostgreSQL, etc.), no NoSQL.",
        b: "Amazon Aurora es una base de datos relacional compatible con MySQL y PostgreSQL, optimizada para la nube. No es NoSQL ni completamente serverless (aunque Aurora Serverless existe).",
        d: "Amazon Redshift es un data warehouse para análisis de datos a escala de petabytes. No es una base de datos operacional NoSQL.",
      },
    },
    tags: ["dynamodb", "nosql", "serverless", "database"],
  },
  {
    id: "clf-017",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué componente de Amazon VPC actúa como firewall virtual a nivel de instancia?",
    options: [
      { id: "a", text: "Network ACL" },
      { id: "b", text: "Security Group" },
      { id: "c", text: "Internet Gateway" },
      { id: "d", text: "Route Table" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Los Security Groups actúan como firewall virtual a nivel de instancia (ENI). Son stateful, lo que significa que si permites tráfico de entrada, el tráfico de respuesta se permite automáticamente. Controlan el tráfico entrante y saliente de las instancias.",
      whyOthersWrong: {
        a: "Network ACLs (NACLs) operan a nivel de subred, no de instancia. Son stateless, lo que significa que debes configurar reglas de entrada Y salida explícitamente.",
        c: "Internet Gateway permite la comunicación entre la VPC e Internet. No es un firewall, sino un componente de conectividad.",
        d: "Route Tables determinan hacia dónde se dirige el tráfico de red. No filtran ni bloquean tráfico, solo lo enrutan.",
      },
    },
    tags: ["vpc", "security-groups", "firewall", "red"],
  },
  {
    id: "clf-018",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa necesita distribuir contenido estático (imágenes, videos, archivos) a usuarios globales con baja latencia. ¿Qué servicio de AWS debería usar?",
    options: [
      { id: "a", text: "Amazon S3" },
      { id: "b", text: "Amazon CloudFront" },
      { id: "c", text: "AWS Global Accelerator" },
      { id: "d", text: "Amazon Route 53" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Amazon CloudFront es una red de distribución de contenido (CDN) que cachea contenido en más de 400 edge locations globalmente. Reduce la latencia entregando contenido desde la ubicación más cercana al usuario en lugar de desde el origen (como S3).",
      whyOthersWrong: {
        a: "Amazon S3 es un excelente origen para el contenido, pero sin CloudFront, los usuarios globales experimentarían mayor latencia ya que el contenido se sirve desde una sola región.",
        c: "AWS Global Accelerator mejora la disponibilidad y rendimiento de aplicaciones direccionando tráfico a través de la red global de AWS, pero no cachea contenido. Es mejor para aplicaciones dinámicas.",
        d: "Amazon Route 53 es un servicio DNS que puede ayudar con enrutamiento geográfico, pero no cachea ni distribuye contenido. Solo resuelve nombres de dominio.",
      },
    },
    tags: ["cloudfront", "cdn", "edge-locations", "distribucion-contenido"],
  },
  {
    id: "clf-019",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Cuáles de los siguientes son motores de base de datos soportados por Amazon RDS? (Seleccione TRES respuestas)",
    options: [
      { id: "a", text: "MySQL" },
      { id: "b", text: "MongoDB" },
      { id: "c", text: "PostgreSQL" },
      { id: "d", text: "DynamoDB" },
      { id: "e", text: "Oracle" },
    ],
    correctAnswers: ["a", "c", "e"],
    explanation: {
      correct:
        "Amazon RDS soporta 6 motores de bases de datos relacionales: MySQL, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server, y Amazon Aurora (compatible con MySQL y PostgreSQL). Oracle es uno de los motores soportados.",
      whyOthersWrong: {
        b: "MongoDB es una base de datos NoSQL de documentos. AWS ofrece Amazon DocumentDB como alternativa compatible con MongoDB, pero no es parte de RDS.",
        d: "DynamoDB es un servicio de base de datos NoSQL separado de AWS, no un motor de RDS. RDS es específicamente para bases de datos relacionales.",
      },
    },
    tags: ["rds", "bases-de-datos", "mysql", "postgresql", "oracle"],
  },
  {
    id: "clf-020",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué servicio de AWS proporciona infraestructura como código, permitiendo definir y aprovisionar recursos AWS mediante plantillas?",
    options: [
      { id: "a", text: "AWS CodeDeploy" },
      { id: "b", text: "AWS CloudFormation" },
      { id: "c", text: "AWS Systems Manager" },
      { id: "d", text: "AWS OpsWorks" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS CloudFormation permite modelar y aprovisionar recursos AWS usando plantillas en JSON o YAML. Es infraestructura como código: defines la arquitectura en un archivo y CloudFormation crea todos los recursos automáticamente y de forma reproducible.",
      whyOthersWrong: {
        a: "AWS CodeDeploy automatiza el despliegue de código a instancias, no la creación de infraestructura. Es parte del pipeline de CI/CD.",
        c: "AWS Systems Manager proporciona visibilidad y control operativo de la infraestructura, incluyendo parches y configuración, pero no crea infraestructura desde plantillas.",
        d: "AWS OpsWorks es un servicio de gestión de configuración que usa Chef/Puppet para automatizar la configuración de servidores, pero no es infraestructura como código en el sentido de CloudFormation.",
      },
    },
    tags: ["cloudformation", "iac", "infraestructura-codigo", "automatizacion"],
  },
  {
    id: "clf-052",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS proporciona un servicio de business intelligence basado en la nube para crear visualizaciones, dashboards y análisis interactivos?",
    options: [
      { id: "a", text: "Amazon Athena" },
      { id: "b", text: "Amazon EMR" },
      { id: "c", text: "Amazon QuickSight" },
      { id: "d", text: "Amazon Redshift" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Amazon QuickSight es un servicio de business intelligence (BI) escalable, serverless, potenciado por machine learning. Permite crear y publicar dashboards interactivos que pueden ser accedidos desde cualquier dispositivo.",
      whyOthersWrong: {
        a: "Athena es para consultas SQL sobre datos en S3, no es una herramienta de visualización BI.",
        b: "EMR es para procesamiento de big data con frameworks como Spark y Hadoop, no para visualización.",
        d: "Redshift es un data warehouse para análisis, pero no crea visualizaciones interactivas como QuickSight.",
      },
    },
    tags: ["quicksight", "bi", "visualizacion", "dashboards"],
  },
  {
    id: "clf-053",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué característica de Amazon S3 proporciona transferencia de archivos grandes más rápida utilizando ubicaciones de borde optimizadas?",
    options: [
      { id: "a", text: "S3 Multipart Upload" },
      { id: "b", text: "S3 Transfer Acceleration" },
      { id: "c", text: "S3 Intelligent-Tiering" },
      { id: "d", text: "S3 Cross-Region Replication" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "S3 Transfer Acceleration habilita transferencias rápidas, fáciles y seguras de archivos a largas distancias entre el cliente y un bucket S3. Utiliza las ubicaciones de borde de CloudFront para acelerar las transferencias.",
      whyOthersWrong: {
        a: "Multipart Upload permite subir archivos en partes, mejorando la eficiencia pero sin usar edge locations.",
        c: "Intelligent-Tiering optimiza costos moviendo datos entre tiers de acceso, no acelera transferencias.",
        d: "Cross-Region Replication copia objetos a otra región para durabilidad, no acelera las subidas iniciales.",
      },
    },
    tags: ["s3", "transfer-acceleration", "edge-locations", "rendimiento"],
  },
  {
    id: "clf-054",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué característica de Amazon RDS proporciona alta disponibilidad con failover automático a una instancia en espera en otra Zona de Disponibilidad?",
    options: [
      { id: "a", text: "Read Replicas" },
      { id: "b", text: "Multi-AZ deployments" },
      { id: "c", text: "Automated backups" },
      { id: "d", text: "Database snapshots" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Los despliegues Multi-AZ de Amazon RDS proporcionan alta disponibilidad y durabilidad para instancias de base de datos. AWS crea automáticamente una réplica primaria en una AZ y una réplica en espera síncrona en otra AZ, con failover automático.",
      whyOthersWrong: {
        a: "Read Replicas son para escalar lecturas, no para failover automático. Son réplicas asíncronas.",
        c: "Automated backups protegen contra pérdida de datos pero no proporcionan failover instantáneo.",
        d: "Database snapshots son backups manuales o programados, no proporcionan alta disponibilidad activa.",
      },
    },
    tags: ["rds", "multi-az", "alta-disponibilidad", "failover"],
  },
  {
    id: "clf-055",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS se usa para migrar bases de datos desde on-premises a AWS con mínimo tiempo de inactividad?",
    options: [
      { id: "a", text: "AWS Snowball" },
      { id: "b", text: "AWS Database Migration Service (DMS)" },
      { id: "c", text: "AWS Transfer Family" },
      { id: "d", text: "AWS DataSync" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Database Migration Service (DMS) ayuda a migrar bases de datos a AWS de manera rápida y segura. La base de datos de origen permanece completamente operativa durante la migración, minimizando el tiempo de inactividad.",
      whyOthersWrong: {
        a: "Snowball es para transferencia física de grandes volúmenes de datos, no específico para bases de datos.",
        c: "Transfer Family es para transferencias SFTP/FTPS/FTP, no para migración de bases de datos.",
        d: "DataSync es para sincronizar datos entre almacenamiento on-premises y AWS, no específico para BD.",
      },
    },
    tags: ["dms", "migracion", "base-datos", "on-premises"],
  },
  {
    id: "clf-056",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué característica de Amazon CloudFront permite restringir el acceso al contenido basándose en la ubicación geográfica de los usuarios?",
    options: [
      { id: "a", text: "Origin Access Control" },
      { id: "b", text: "Geo-restriction (Geoblocking)" },
      { id: "c", text: "Field-level encryption" },
      { id: "d", text: "Signed URLs" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "La restricción geográfica (geo-restriction o geoblocking) de CloudFront permite bloquear o permitir el acceso a tu contenido basándose en el país de origen de las solicitudes, usando listas de permitidos o bloqueados.",
      whyOthersWrong: {
        a: "Origin Access Control restringe el acceso directo al origen (como S3), no por ubicación geográfica.",
        c: "Field-level encryption cifra campos específicos de datos, no restringe por geografía.",
        d: "Signed URLs controlan el acceso temporal al contenido, no por ubicación geográfica.",
      },
    },
    tags: ["cloudfront", "geo-restriction", "geoblocking", "cdn"],
  },
  {
    id: "clf-057",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Cuál es el propósito de una subred privada en Amazon VPC?",
    options: [
      { id: "a", text: "Alojar recursos que necesitan acceso directo desde internet" },
      { id: "b", text: "Alojar recursos que NO deben ser directamente accesibles desde internet" },
      { id: "c", text: "Proporcionar más direcciones IP que una subred pública" },
      { id: "d", text: "Reducir los costos de transferencia de datos" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Una subred privada aloja recursos que no deben ser accesibles directamente desde internet. No tiene una ruta al Internet Gateway. Recursos como bases de datos y servidores de aplicaciones backend típicamente se colocan en subredes privadas por seguridad.",
      whyOthersWrong: {
        a: "Recursos que necesitan acceso directo desde internet van en subredes públicas, no privadas.",
        c: "El rango de IPs depende del bloque CIDR asignado, no del tipo de subred.",
        d: "El tipo de subred no afecta directamente los costos de transferencia de datos.",
      },
    },
    tags: ["vpc", "subred-privada", "seguridad", "red"],
  },
  {
    id: "clf-058",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué clase de almacenamiento de Amazon S3 es la más económica para datos que rara vez se acceden y que pueden tolerar tiempos de recuperación de 12-48 horas?",
    options: [
      { id: "a", text: "S3 Standard" },
      { id: "b", text: "S3 Standard-IA" },
      { id: "c", text: "S3 Glacier Flexible Retrieval" },
      { id: "d", text: "S3 Glacier Deep Archive" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "S3 Glacier Deep Archive es la clase de almacenamiento más económica de S3, diseñada para retención a largo plazo de datos que rara vez se acceden. El tiempo de recuperación estándar es de 12 horas, pudiendo extenderse hasta 48 horas.",
      whyOthersWrong: {
        a: "S3 Standard es para acceso frecuente y tiene el costo más alto.",
        b: "S3 Standard-IA es para acceso poco frecuente pero con recuperación inmediata.",
        c: "S3 Glacier Flexible Retrieval tiene recuperación de minutos a horas, pero es más caro que Deep Archive.",
      },
    },
    tags: ["s3", "glacier-deep-archive", "almacenamiento", "costos"],
  },
  {
    id: "clf-059",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué característica de Amazon EFS permite que el sistema de archivos esté disponible en múltiples Zonas de Disponibilidad dentro de una región?",
    options: [
      { id: "a", text: "EFS Infrequent Access" },
      { id: "b", text: "EFS es regional por diseño" },
      { id: "c", text: "EFS Cross-Region Replication" },
      { id: "d", text: "EFS Bursting Mode" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Amazon EFS (Elastic File System) es un sistema de archivos regional que almacena datos de forma redundante en múltiples Zonas de Disponibilidad automáticamente. Múltiples instancias EC2 en diferentes AZs pueden acceder al mismo sistema de archivos.",
      whyOthersWrong: {
        a: "Infrequent Access es una clase de almacenamiento para reducir costos, no para disponibilidad multi-AZ.",
        c: "Cross-Region Replication replica a otra región, la disponibilidad multi-AZ es inherente.",
        d: "Bursting Mode se refiere al rendimiento, no a la disponibilidad multi-AZ.",
      },
    },
    tags: ["efs", "regional", "multi-az", "almacenamiento"],
  },
  {
    id: "clf-060",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué servicio de AWS proporciona una forma sencilla de desplegar y escalar aplicaciones web y servicios sin gestionar la infraestructura subyacente?",
    options: [
      { id: "a", text: "Amazon EC2" },
      { id: "b", text: "AWS Elastic Beanstalk" },
      { id: "c", text: "AWS CloudFormation" },
      { id: "d", text: "Amazon ECS" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Elastic Beanstalk es un servicio fácil de usar para desplegar y escalar aplicaciones web. Solo subes tu código y Elastic Beanstalk gestiona automáticamente el despliegue, balanceadores de carga, auto scaling, y monitoreo.",
      whyOthersWrong: {
        a: "EC2 proporciona servidores virtuales pero requiere gestión de infraestructura.",
        c: "CloudFormation crea infraestructura desde plantillas, pero no es específico para aplicaciones web.",
        d: "ECS es para contenedores Docker y requiere más configuración que Elastic Beanstalk.",
      },
    },
    tags: ["elastic-beanstalk", "paas", "despliegue", "aplicaciones-web"],
  },
  {
    id: "clf-061",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS permite crear escritorios virtuales en la nube para acceso remoto de usuarios?",
    options: [
      { id: "a", text: "Amazon AppStream 2.0" },
      { id: "b", text: "Amazon WorkSpaces" },
      { id: "c", text: "AWS Outposts" },
      { id: "d", text: "Amazon Connect" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Amazon WorkSpaces es un servicio de Desktop-as-a-Service (DaaS) que permite provisionar escritorios virtuales Windows o Linux en la nube. Los usuarios pueden acceder a sus escritorios desde cualquier dispositivo compatible.",
      whyOthersWrong: {
        a: "AppStream 2.0 transmite aplicaciones específicas, no escritorios completos.",
        c: "Outposts extiende infraestructura AWS a tu data center, no proporciona escritorios virtuales.",
        d: "Amazon Connect es un centro de contacto en la nube, no escritorios virtuales.",
      },
    },
    tags: ["workspaces", "daas", "escritorios-virtuales", "acceso-remoto"],
  },
  {
    id: "clf-062",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS proporciona un centro de contacto omnicanal en la nube?",
    options: [
      { id: "a", text: "Amazon Chime" },
      { id: "b", text: "Amazon WorkSpaces" },
      { id: "c", text: "Amazon Connect" },
      { id: "d", text: "Amazon Pinpoint" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Amazon Connect es un servicio de centro de contacto en la nube fácil de usar que permite configurar y gestionar operaciones de soporte al cliente. Soporta voz, chat y tareas con enrutamiento basado en habilidades.",
      whyOthersWrong: {
        a: "Amazon Chime es para comunicaciones empresariales (videoconferencias), no un centro de contacto.",
        b: "WorkSpaces proporciona escritorios virtuales, no servicios de centro de contacto.",
        d: "Pinpoint es para campañas de marketing multicanal, no para centros de contacto.",
      },
    },
    tags: ["connect", "contact-center", "omnicanal", "soporte"],
  },
  {
    id: "clf-063",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS puede suscribirse a un tema (topic) y recibir notificaciones cuando se publican mensajes?",
    options: [
      { id: "a", text: "Amazon SQS" },
      { id: "b", text: "Amazon SNS" },
      { id: "c", text: "Amazon EventBridge" },
      { id: "d", text: "AWS Step Functions" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Amazon SNS (Simple Notification Service) es un servicio de mensajería pub/sub. Puedes crear topics, suscribir endpoints (email, SMS, HTTP, Lambda, SQS) y publicar mensajes que se entregan a todos los suscriptores.",
      whyOthersWrong: {
        a: "SQS es una cola de mensajes point-to-point, no un sistema de pub/sub con topics.",
        c: "EventBridge es un bus de eventos para integrar aplicaciones, no un servicio de notificaciones por suscripción.",
        d: "Step Functions orquesta workflows, no es un sistema de mensajería.",
      },
    },
    tags: ["sns", "notificaciones", "pub-sub", "topics"],
  },
  {
    id: "clf-064",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué es una Elastic Network Interface (ENI) en AWS?",
    options: [
      { id: "a", text: "Un tipo de volumen de almacenamiento" },
      { id: "b", text: "Una interfaz de red virtual que puede asociarse a una instancia EC2" },
      { id: "c", text: "Un tipo de balanceador de carga" },
      { id: "d", text: "Un servicio de DNS gestionado" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Una Elastic Network Interface (ENI) es un componente de red lógico en una VPC que representa una tarjeta de red virtual. Puede incluir una IP privada, una IP elástica (pública), direcciones MAC, y security groups.",
      whyOthersWrong: {
        a: "Los volúmenes de almacenamiento son EBS, no ENI.",
        c: "Los balanceadores de carga son ELB (ALB, NLB, CLB), no ENI.",
        d: "El servicio de DNS gestionado es Route 53, no ENI.",
      },
    },
    tags: ["eni", "red", "vpc", "ec2"],
  },
  {
    id: "clf-065",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS permite encontrar y contratar expertos certificados de AWS para proyectos bajo demanda?",
    options: [
      { id: "a", text: "AWS Support" },
      { id: "b", text: "AWS Marketplace" },
      { id: "c", text: "AWS IQ" },
      { id: "d", text: "AWS Partner Network" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "AWS IQ permite a los clientes encontrar, contratar y pagar expertos certificados por AWS para trabajo bajo demanda, como ayuda para construir aplicaciones o migrar cargas de trabajo.",
      whyOthersWrong: {
        a: "AWS Support proporciona soporte técnico, no conecta con expertos para proyectos.",
        b: "AWS Marketplace vende software de terceros, no servicios de consultoría.",
        d: "Partner Network es una red de empresas partners, AWS IQ es específicamente para contratar expertos individuales.",
      },
    },
    tags: ["aws-iq", "expertos", "consultoria", "proyectos"],
  },
  {
    id: "clf-066",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS proporciona una plataforma para desarrollar aplicaciones web y móviles con hosting, autenticación, APIs y más?",
    options: [
      { id: "a", text: "AWS Elastic Beanstalk" },
      { id: "b", text: "AWS Amplify" },
      { id: "c", text: "Amazon API Gateway" },
      { id: "d", text: "AWS AppSync" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Amplify es un conjunto de herramientas y servicios para desarrollar aplicaciones web y móviles full-stack. Incluye hosting, autenticación (Cognito), almacenamiento, APIs GraphQL, y funciones backend.",
      whyOthersWrong: {
        a: "Elastic Beanstalk despliega aplicaciones pero no proporciona el ecosistema completo como Amplify.",
        c: "API Gateway es solo para crear y gestionar APIs, no una plataforma de desarrollo completa.",
        d: "AppSync es para APIs GraphQL, no una plataforma de desarrollo integral.",
      },
    },
    tags: ["amplify", "desarrollo", "web", "movil"],
  },
  {
    id: "clf-067",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS proporciona un repositorio de artefactos de software completamente administrado?",
    options: [
      { id: "a", text: "AWS CodeCommit" },
      { id: "b", text: "AWS CodeArtifact" },
      { id: "c", text: "Amazon ECR" },
      { id: "d", text: "AWS CodePipeline" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS CodeArtifact es un servicio de repositorio de artefactos completamente administrado que facilita almacenar, publicar y compartir paquetes de software (npm, Maven, PyPI, NuGet) usados en el desarrollo.",
      whyOthersWrong: {
        a: "CodeCommit es un repositorio de código fuente Git, no de artefactos de software.",
        c: "ECR es un registro de imágenes Docker/OCI, no para artefactos como npm o Maven.",
        d: "CodePipeline es para CI/CD, no un repositorio de artefactos.",
      },
    },
    tags: ["codeartifact", "artefactos", "repositorio", "devops"],
  },
  {
    id: "clf-068",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS se utiliza para construir, entrenar y desplegar modelos de machine learning a escala?",
    options: [
      { id: "a", text: "Amazon Comprehend" },
      { id: "b", text: "Amazon Rekognition" },
      { id: "c", text: "Amazon SageMaker" },
      { id: "d", text: "Amazon Polly" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Amazon SageMaker es un servicio completamente administrado que permite a desarrolladores y científicos de datos construir, entrenar y desplegar modelos de machine learning rápidamente a cualquier escala.",
      whyOthersWrong: {
        a: "Comprehend es para procesamiento de lenguaje natural (NLP), es un servicio de ML pre-entrenado.",
        b: "Rekognition es para análisis de imágenes y video, es un servicio de ML pre-entrenado.",
        d: "Polly convierte texto en voz, es un servicio de ML pre-entrenado.",
      },
    },
    tags: ["sagemaker", "machine-learning", "ml", "entrenamiento"],
  },
  {
    id: "clf-069",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS permite crear chatbots conversacionales usando inteligencia artificial?",
    options: [
      { id: "a", text: "Amazon Polly" },
      { id: "b", text: "Amazon Lex" },
      { id: "c", text: "Amazon Transcribe" },
      { id: "d", text: "Amazon Translate" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Amazon Lex proporciona las mismas capacidades de aprendizaje profundo que impulsan a Alexa, permitiendo construir interfaces conversacionales (chatbots) para aplicaciones usando voz y texto.",
      whyOthersWrong: {
        a: "Polly convierte texto en voz (text-to-speech), no crea chatbots.",
        c: "Transcribe convierte voz a texto (speech-to-text), no crea chatbots.",
        d: "Translate traduce texto entre idiomas, no crea interfaces conversacionales.",
      },
    },
    tags: ["lex", "chatbot", "ia", "conversacional"],
  },
  {
    id: "clf-070",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS permite transmitir aplicaciones de escritorio a usuarios a través de un navegador web?",
    options: [
      { id: "a", text: "Amazon WorkSpaces" },
      { id: "b", text: "Amazon AppStream 2.0" },
      { id: "c", text: "AWS Outposts" },
      { id: "d", text: "Amazon Lightsail" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Amazon AppStream 2.0 es un servicio de streaming de aplicaciones completamente administrado. Permite transmitir aplicaciones de escritorio a usuarios en un navegador web HTML5, sin necesidad de reescribir las aplicaciones.",
      whyOthersWrong: {
        a: "WorkSpaces proporciona escritorios virtuales completos, no streaming de aplicaciones individuales.",
        c: "Outposts extiende AWS a tu data center, no es para streaming de aplicaciones.",
        d: "Lightsail es para servidores virtuales simples, no streaming de aplicaciones.",
      },
    },
    tags: ["appstream", "streaming", "aplicaciones", "navegador"],
  },
  {
    id: "clf-071",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS proporciona APIs GraphQL serverless en tiempo real?",
    options: [
      { id: "a", text: "Amazon API Gateway" },
      { id: "b", text: "AWS AppSync" },
      { id: "c", text: "AWS Amplify" },
      { id: "d", text: "Amazon EventBridge" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS AppSync es un servicio serverless que simplifica el desarrollo de aplicaciones creando APIs GraphQL flexibles para acceder, manipular y combinar datos de múltiples fuentes con sincronización en tiempo real.",
      whyOthersWrong: {
        a: "API Gateway soporta REST y WebSocket APIs, pero AppSync es específico para GraphQL.",
        c: "Amplify es una plataforma de desarrollo que puede usar AppSync, pero no es el servicio GraphQL en sí.",
        d: "EventBridge es un bus de eventos, no proporciona APIs GraphQL.",
      },
    },
    tags: ["appsync", "graphql", "serverless", "api"],
  },
  {
    id: "clf-072",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué servicio de AWS compila código fuente, ejecuta pruebas y produce paquetes de software listos para desplegar?",
    options: [
      { id: "a", text: "AWS CodeCommit" },
      { id: "b", text: "AWS CodeDeploy" },
      { id: "c", text: "AWS CodeBuild" },
      { id: "d", text: "AWS CodePipeline" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "AWS CodeBuild es un servicio de integración continua completamente administrado que compila código fuente, ejecuta pruebas y produce paquetes de software listos para desplegar.",
      whyOthersWrong: {
        a: "CodeCommit es un repositorio de código fuente Git, no compila código.",
        b: "CodeDeploy automatiza despliegues de código a servidores, no compila código.",
        d: "CodePipeline orquesta el pipeline CI/CD pero no realiza la compilación por sí mismo.",
      },
    },
    tags: ["codebuild", "ci", "compilacion", "devops"],
  },
  {
    id: "clf-073",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué servicio de AWS orquesta y automatiza los pasos de release de software como build, test y deploy?",
    options: [
      { id: "a", text: "AWS CodeBuild" },
      { id: "b", text: "AWS CodeDeploy" },
      { id: "c", text: "AWS CodePipeline" },
      { id: "d", text: "AWS CodeStar" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "AWS CodePipeline es un servicio de entrega continua completamente administrado que automatiza los pipelines de release para actualizaciones rápidas y confiables de aplicaciones e infraestructura.",
      whyOthersWrong: {
        a: "CodeBuild solo compila y prueba código, no orquesta todo el pipeline.",
        b: "CodeDeploy solo despliega código, es un paso dentro del pipeline.",
        d: "CodeStar proporciona una interfaz unificada para desarrollo pero CodePipeline es el orquestador.",
      },
    },
    tags: ["codepipeline", "cd", "devops", "automatizacion"],
  },
  {
    id: "clf-074",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué servicio de AWS proporciona servidores virtuales privados fáciles de usar con un precio mensual predecible?",
    options: [
      { id: "a", text: "Amazon EC2" },
      { id: "b", text: "Amazon Lightsail" },
      { id: "c", text: "AWS Elastic Beanstalk" },
      { id: "d", text: "Amazon ECS" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Amazon Lightsail ofrece servidores virtuales privados fáciles de usar con planes de precio mensual fijo. Es ideal para proyectos simples, sitios web, y usuarios nuevos en AWS que necesitan una opción sencilla.",
      whyOthersWrong: {
        a: "EC2 tiene muchas más opciones pero es más complejo y el pricing es por hora/segundo.",
        c: "Elastic Beanstalk despliega aplicaciones pero no es un VPS con precio mensual fijo.",
        d: "ECS es para contenedores Docker, no VPS simples.",
      },
    },
    tags: ["lightsail", "vps", "precio-fijo", "simplicidad"],
  },
  {
    id: "clf-171",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "Una empresa necesita una red de entrega de contenido que proporcione datos seguros, video, aplicaciones y entrega de API a usuarios globalmente con baja latencia y altas velocidades de transferencia. ¿Qué servicio de AWS cumple estos requisitos?",
    options: [
      { id: "a", text: "Amazon CloudFront" },
      { id: "b", text: "Elastic Load Balancing" },
      { id: "c", text: "Amazon S3" },
      { id: "d", text: "Amazon Elastic Transcoder" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "Amazon CloudFront es una red de entrega de contenido (CDN) que se integra con otros servicios de AWS para entregar contenido con baja latencia y altas velocidades de transferencia globalmente.",
      whyOthersWrong: {
        b: "ELB distribuye tráfico entre instancias pero no es un CDN global.",
        c: "S3 almacena objetos pero no optimiza la entrega global como una CDN.",
        d: "Elastic Transcoder convierte archivos multimedia, no es una CDN.",
      },
    },
    tags: ["cloudfront", "cdn", "entrega-contenido", "baja-latencia"],
  },
  {
    id: "clf-172",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "Amazon Elastic File System (Amazon EFS) y Amazon FSx ofrecen ¿qué tipo de almacenamiento?",
    options: [
      { id: "a", text: "Almacenamiento de archivos" },
      { id: "b", text: "Almacenamiento de objetos" },
      { id: "c", text: "Almacenamiento de bloques" },
      { id: "d", text: "Almacenamiento de instancia" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "Tanto Amazon EFS como Amazon FSx ofrecen soluciones de almacenamiento de archivos, permitiendo acceso simultáneo a archivos y carpetas a través de una red con protocolos como NFS o SMB.",
      whyOthersWrong: {
        b: "El almacenamiento de objetos es proporcionado por Amazon S3.",
        c: "El almacenamiento de bloques es proporcionado por Amazon EBS.",
        d: "El almacenamiento de instancia es efímero y está directamente conectado a EC2.",
      },
    },
    tags: ["efs", "fsx", "almacenamiento-archivos", "storage"],
  },
  {
    id: "clf-173",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Un equipo de TI está administrando clústeres de servidores de base de datos MySQL. El equipo debe parchear la base de datos y tomar instantáneas de respaldo de los datos. La empresa quiere mover esta carga de trabajo a AWS para que estas tareas se completen automáticamente. ¿Qué debe hacer la empresa?",
    options: [
      { id: "a", text: "Implementar clústeres de servidores de base de datos MySQL en instancias de Amazon EC2" },
      { id: "b", text: "Usar Amazon RDS con una base de datos MySQL" },
      { id: "c", text: "Usar una plantilla de AWS CloudFormation para implementar servidores de base de datos MySQL en EC2" },
      { id: "d", text: "Migrar todos los datos de base de datos MySQL a Amazon S3" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Usar Amazon RDS con una base de datos MySQL permite automatizar tareas como parcheo y respaldos. RDS es un servicio de base de datos gestionado que maneja estas tareas operativas.",
      whyOthersWrong: {
        a: "Con MySQL en EC2, el cliente sigue siendo responsable del parcheo y respaldos.",
        c: "CloudFormation ayuda con el despliegue pero no automatiza el parcheo y respaldos continuos.",
        d: "S3 es almacenamiento de objetos, no una base de datos relacional.",
      },
    },
    tags: ["rds", "mysql", "base-datos-gestionada", "automatizacion"],
  },
  {
    id: "clf-174",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa tiene una carga de trabajo que requiere que los datos sean recopilados, analizados y almacenados en las instalaciones. La empresa quiere extender el uso de servicios de AWS para funcionar en las instalaciones. ¿Qué servicio de AWS cumple este requisito?",
    options: [
      { id: "a", text: "AWS Outposts" },
      { id: "b", text: "AWS Storage Gateway" },
      { id: "c", text: "AWS Direct Connect" },
      { id: "d", text: "AWS Snowball" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "AWS Outposts permite ejecutar servicios de AWS en las instalaciones del cliente, extendiendo AWS a entornos físicos mientras mantiene una experiencia de nube consistente.",
      whyOthersWrong: {
        b: "Storage Gateway conecta almacenamiento on-premises con la nube, pero no ejecuta servicios AWS localmente.",
        c: "Direct Connect es una conexión de red dedicada, no ejecuta servicios AWS on-premises.",
        d: "Snowball es para transferencia masiva de datos, no para ejecutar servicios AWS on-premises.",
      },
    },
    tags: ["outposts", "hibrido", "on-premises", "edge"],
  },
  {
    id: "clf-175",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa está construyendo una arquitectura sin servidor que conecta datos de aplicaciones de múltiples fuentes de datos. La empresa necesita una solución que no requiera código adicional. ¿Qué servicio de AWS cumple estos requisitos?",
    options: [
      { id: "a", text: "AWS Lambda" },
      { id: "b", text: "Amazon Simple Queue Service (Amazon SQS)" },
      { id: "c", text: "Amazon CloudWatch" },
      { id: "d", text: "Amazon EventBridge" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "Amazon EventBridge es una solución sin servidor que facilita la conexión de datos de aplicaciones de múltiples fuentes sin requerir código adicional. Actúa como un bus de eventos para conectar aplicaciones usando eventos.",
      whyOthersWrong: {
        a: "Lambda requiere escribir código para las funciones.",
        b: "SQS es para colas de mensajes, requiere código para procesar mensajes.",
        c: "CloudWatch es para monitoreo, no para conectar fuentes de datos.",
      },
    },
    tags: ["eventbridge", "serverless", "eventos", "integracion"],
  },
  {
    id: "clf-176",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "Una empresa implementa su aplicación en instancias de Amazon EC2. La aplicación ocasionalmente experimenta aumentos repentinos en la demanda. La empresa quiere asegurarse de que su aplicación pueda responder a cambios en la demanda con el menor costo posible. ¿Qué servicio cumplirá estos requisitos?",
    options: [
      { id: "a", text: "AWS Auto Scaling" },
      { id: "b", text: "AWS Compute Optimizer" },
      { id: "c", text: "AWS Cost Explorer" },
      { id: "d", text: "AWS Well-Architected Framework" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "AWS Auto Scaling ayuda a asegurar que la aplicación pueda satisfacer aumentos repentinos en la demanda de manera rentable, añadiendo o quitando instancias automáticamente según la demanda.",
      whyOthersWrong: {
        b: "Compute Optimizer proporciona recomendaciones de tamaño, no escala automáticamente.",
        c: "Cost Explorer analiza costos, no escala recursos.",
        d: "El Well-Architected Framework son directrices, no un servicio de escalado.",
      },
    },
    tags: ["auto-scaling", "elasticidad", "demanda", "costos"],
  },
  {
    id: "clf-177",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa está usando un servicio de terceros para respaldar 10 TB de datos en una biblioteca de cintas. El servidor de respaldo local se está quedando sin espacio. La empresa quiere usar servicios de AWS para los respaldos sin cambiar sus flujos de trabajo existentes. ¿Qué servicio de AWS debe usar?",
    options: [
      { id: "a", text: "Amazon Elastic Block Store (Amazon EBS)" },
      { id: "b", text: "AWS Storage Gateway" },
      { id: "c", text: "Amazon Elastic Container Service (Amazon ECS)" },
      { id: "d", text: "AWS Lambda" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "La empresa debe usar AWS Storage Gateway, específicamente Tape Gateway, para integrar sus flujos de trabajo de respaldo existentes con AWS sin necesidad de cambios significativos.",
      whyOthersWrong: {
        a: "EBS es almacenamiento de bloques para EC2, no para respaldos tipo cinta.",
        c: "ECS es para contenedores, no para respaldos.",
        d: "Lambda es para ejecutar código sin servidor, no para respaldos.",
      },
    },
    tags: ["storage-gateway", "tape-gateway", "backup", "hibrido"],
  },
  {
    id: "clf-178",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa está construyendo una aplicación que recibirá millones de consultas de base de datos por segundo. ¿Qué servicio de AWS satisfará esta necesidad?",
    options: [
      { id: "a", text: "Amazon DynamoDB" },
      { id: "b", text: "AWS Cloud9" },
      { id: "c", text: "Amazon ElastiCache for Memcached" },
      { id: "d", text: "Amazon Neptune" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "Amazon DynamoDB es una base de datos NoSQL completamente gestionada que proporciona rendimiento rápido y predecible con escalabilidad perfecta, capaz de manejar millones de solicitudes por segundo.",
      whyOthersWrong: {
        b: "Cloud9 es un IDE en la nube, no una base de datos.",
        c: "ElastiCache es para caching, útil como complemento pero no es la base de datos principal.",
        d: "Neptune es una base de datos de grafos, no optimizada para millones de consultas simples por segundo.",
      },
    },
    tags: ["dynamodb", "nosql", "alto-rendimiento", "escalabilidad"],
  },
  {
    id: "clf-179",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa está usando Amazon RDS y quiere aumentar la resiliencia de su aplicación crítica de negocio. ¿Cómo puede la empresa aumentar la resiliencia de esta aplicación?",
    options: [
      { id: "a", text: "Implementar una copia de la aplicación en otra cuenta de AWS" },
      { id: "b", text: "Usar múltiples VPCs para la aplicación" },
      { id: "c", text: "Usar múltiples subredes para la aplicación" },
      { id: "d", text: "Usar múltiples Zonas de Disponibilidad" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "Usar múltiples Zonas de Disponibilidad (Multi-AZ) es la mejor manera de aumentar la resiliencia de la aplicación con RDS, manteniendo alta disponibilidad incluso en caso de fallos de una AZ.",
      whyOthersWrong: {
        a: "Múltiples cuentas añaden complejidad sin beneficio directo de resiliencia para RDS.",
        b: "Múltiples VPCs no proporcionan resiliencia de base de datos por sí solas.",
        c: "Las subredes están dentro de una AZ; se necesitan múltiples AZs para resiliencia.",
      },
    },
    tags: ["rds", "multi-az", "resiliencia", "alta-disponibilidad"],
  },
  {
    id: "clf-180",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Un desarrollador necesita mantener la infraestructura de un entorno de desarrollo y un entorno de producción de manera repetible. ¿Qué servicio de AWS debe usar el desarrollador?",
    options: [
      { id: "a", text: "AWS Ground Station" },
      { id: "b", text: "AWS Shield" },
      { id: "c", text: "AWS IoT Device Defender" },
      { id: "d", text: "AWS CloudFormation" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "AWS CloudFormation permite modelar y provisionar recursos de AWS usando plantillas, ideal para mantener múltiples entornos de manera predecible y repetible.",
      whyOthersWrong: {
        a: "Ground Station es para comunicaciones satelitales.",
        b: "Shield protege contra DDoS, no gestiona infraestructura.",
        c: "IoT Device Defender es para seguridad de dispositivos IoT.",
      },
    },
    tags: ["cloudformation", "iac", "desarrollo", "produccion"],
  },
  {
    id: "clf-181",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa tiene un bucket de Amazon S3 con imágenes de facturas financieras escaneadas. La empresa está construyendo una aplicación basada en IA en AWS para identificar y leer los valores de saldo total en las facturas. ¿Qué servicio de AWS cumplirá estos requisitos?",
    options: [
      { id: "a", text: "Amazon Forecast" },
      { id: "b", text: "Amazon Textract" },
      { id: "c", text: "Amazon Rekognition" },
      { id: "d", text: "Amazon Lex" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Amazon Textract es capaz de extraer texto y datos de documentos escaneados, ideal para leer valores en facturas. Puede identificar campos específicos como totales, fechas y datos tabulares.",
      whyOthersWrong: {
        a: "Forecast es para predicciones de series temporales, no extracción de texto.",
        c: "Rekognition analiza imágenes para objetos y caras, no texto de documentos.",
        d: "Lex es para crear chatbots conversacionales, no para extraer texto de documentos.",
      },
    },
    tags: ["textract", "ia", "ocr", "documentos"],
  },
  {
    id: "clf-182",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS está diseñado para ayudar a los usuarios a orquestar un flujo de trabajo para un conjunto de funciones de AWS Lambda?",
    options: [
      { id: "a", text: "Amazon DynamoDB" },
      { id: "b", text: "AWS CodePipeline" },
      { id: "c", text: "AWS Batch" },
      { id: "d", text: "AWS Step Functions" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "AWS Step Functions es un servicio que permite coordinar múltiples servicios de AWS en flujos de trabajo serverless que pueden ser activados por eventos, incluyendo la orquestación de funciones Lambda.",
      whyOthersWrong: {
        a: "DynamoDB es una base de datos NoSQL, no un orquestador.",
        b: "CodePipeline es para CI/CD de código, no para orquestar funciones Lambda.",
        c: "Batch es para procesamiento por lotes, no orquestación de flujos de trabajo.",
      },
    },
    tags: ["step-functions", "orquestacion", "lambda", "workflow"],
  },
  {
    id: "clf-183",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa proporciona una aplicación de software como servicio (SaaS). La empresa tiene un nuevo cliente que está basado en un país diferente. Los datos del nuevo cliente necesitan estar alojados en ese país. ¿Qué servicio o componente de infraestructura de AWS debe usar la empresa?",
    options: [
      { id: "a", text: "AWS Shield" },
      { id: "b", text: "Amazon S3 Object Lock" },
      { id: "c", text: "Regiones de AWS" },
      { id: "d", text: "Grupos de ubicación (Placement groups)" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Las Regiones de AWS son áreas geográficas alrededor del mundo donde AWS tiene clústeres de centros de datos. Al alojar los datos del cliente en una Región específica de AWS, la empresa puede cumplir el requisito de residencia de datos.",
      whyOthersWrong: {
        a: "Shield protege contra DDoS, no determina la ubicación de los datos.",
        b: "Object Lock protege objetos contra eliminación, no determina su ubicación.",
        d: "Placement groups optimizan la ubicación de instancias dentro de una AZ, no la residencia de datos por país.",
      },
    },
    tags: ["regiones", "residencia-datos", "compliance", "global"],
  },
  {
    id: "clf-184",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa manufacturera tiene una aplicación de misión crítica que se ejecuta en una ubicación remota con una conexión a Internet lenta. La aplicación es sensible a la latencia y propensa a interrupciones de conectividad. ¿Qué servicio o característica de AWS debe usar la empresa?",
    options: [
      { id: "a", text: "Zonas de Disponibilidad" },
      { id: "b", text: "AWS Local Zones" },
      { id: "c", text: "AWS Wavelength" },
      { id: "d", text: "AWS Outposts" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "AWS Outposts es un servicio que ofrece racks de cómputo y almacenamiento completamente gestionados, permitiendo ejecutar cargas de trabajo on-premises y conectarse a servicios AWS en la nube cuando la conectividad lo permita.",
      whyOthersWrong: {
        a: "Las AZs están en la nube, no resuelven problemas de conectividad on-premises.",
        b: "Local Zones extienden AWS a áreas metropolitanas, no a ubicaciones remotas sin conectividad.",
        c: "Wavelength es para edge computing en redes 5G, no para ubicaciones remotas.",
      },
    },
    tags: ["outposts", "on-premises", "latencia", "edge"],
  },
  {
    id: "clf-185",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "¿Cuál es el propósito de tener un Internet Gateway dentro de una VPC?",
    options: [
      { id: "a", text: "Crear una conexión VPN a la VPC" },
      { id: "b", text: "Permitir comunicación entre la VPC e Internet" },
      { id: "c", text: "Aplicar restricciones de ancho de banda en el tráfico de Internet" },
      { id: "d", text: "Balancear carga del tráfico de Internet entre instancias Amazon EC2" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Un Internet Gateway es un servicio que permite el tráfico de Internet hacia una VPC. Sin él, una VPC está completamente segmentada y la única forma de acceder es potencialmente a través de una conexión VPN.",
      whyOthersWrong: {
        a: "Las conexiones VPN usan Virtual Private Gateway, no Internet Gateway.",
        c: "El Internet Gateway no aplica restricciones de ancho de banda.",
        d: "El balanceo de carga lo hace un Load Balancer, no el Internet Gateway.",
      },
    },
    tags: ["vpc", "internet-gateway", "conectividad", "redes"],
  },
  {
    id: "clf-186",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa está construyendo una aplicación móvil para proporcionar recomendaciones de compra a sus clientes. La empresa quiere usar una base de datos de grafos como parte del motor de recomendaciones. ¿Qué servicio de base de datos de AWS debe elegir la empresa?",
    options: [
      { id: "a", text: "Amazon DynamoDB" },
      { id: "b", text: "Amazon Aurora" },
      { id: "c", text: "Amazon Neptune" },
      { id: "d", text: "Amazon DocumentDB (con compatibilidad MongoDB)" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Amazon Neptune es un servicio que proporciona una base de datos de grafos completamente gestionada que soporta grafos de propiedades y grafos RDF. Puede usarse para construir aplicaciones que trabajan con datasets altamente conectados, como recomendaciones de compra.",
      whyOthersWrong: {
        a: "DynamoDB es una base de datos NoSQL de documentos/clave-valor, no de grafos.",
        b: "Aurora es una base de datos relacional, no de grafos.",
        d: "DocumentDB es para documentos tipo MongoDB, no grafos.",
      },
    },
    tags: ["neptune", "base-datos-grafos", "recomendaciones"],
  },
  {
    id: "clf-187",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "multiple",
    difficulty: "medium",
    question:
      "Una empresa ha configurado una VPC en su cuenta de AWS y ha creado una subred en la VPC. La empresa quiere hacer la subred pública. ¿Qué recursos de AWS debe usar la empresa para cumplir este requisito? (Seleccione DOS)",
    options: [
      { id: "a", text: "Internet Gateway de Amazon VPC" },
      { id: "b", text: "NAT Gateway de Amazon VPC" },
      { id: "c", text: "Tablas de rutas de Amazon VPC" },
      { id: "d", text: "Network ACLs de Amazon VPC" },
      { id: "e", text: "Grupos de seguridad de Amazon EC2" },
    ],
    correctAnswers: ["a", "c"],
    explanation: {
      correct:
        "Para hacer una subred pública, la empresa necesita usar un Internet Gateway de Amazon VPC y configurar tablas de rutas apropiadas que dirijan el tráfico hacia el Internet Gateway.",
      whyOthersWrong: {
        b: "NAT Gateway permite tráfico saliente desde subredes privadas, no hace una subred pública.",
        d: "Las Network ACLs controlan el tráfico pero no hacen una subred pública.",
        e: "Los Security Groups controlan tráfico a nivel de instancia, no hacen una subred pública.",
      },
    },
    tags: ["vpc", "subred-publica", "internet-gateway", "rutas"],
  },
  {
    id: "clf-188",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa quiere diseñar una aplicación web confiable alojada en Amazon EC2. ¿Qué enfoque logrará este objetivo?",
    options: [
      { id: "a", text: "Lanzar instancias EC2 grandes en la misma Zona de Disponibilidad" },
      { id: "b", text: "Distribuir instancias EC2 en más de un grupo de seguridad" },
      { id: "c", text: "Distribuir instancias EC2 en más de una Zona de Disponibilidad" },
      { id: "d", text: "Usar una Amazon Machine Image (AMI) del AWS Marketplace" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Distribuir las instancias EC2 en múltiples Zonas de Disponibilidad aumenta la tolerancia a fallos y disponibilidad de la aplicación web, ya que si una AZ falla, las otras pueden continuar sirviendo tráfico.",
      whyOthersWrong: {
        a: "Instancias en la misma AZ no proporcionan redundancia ante fallos de esa AZ.",
        b: "Los grupos de seguridad controlan tráfico, no proporcionan redundancia.",
        d: "Usar AMI del Marketplace no afecta la confiabilidad arquitectónica.",
      },
    },
    tags: ["ec2", "alta-disponibilidad", "multi-az", "confiabilidad"],
  },
  {
    id: "clf-189",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "Un equipo de desarrollo quiere desplegar múltiples entornos de prueba para una aplicación de manera rápida y repetible. ¿Qué servicio de AWS debe usar el equipo?",
    options: [
      { id: "a", text: "Amazon EC2" },
      { id: "b", text: "AWS CloudFormation" },
      { id: "c", text: "Amazon QuickSight" },
      { id: "d", text: "Amazon Elastic Container Service (Amazon ECS)" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS CloudFormation permite modelar y provisionar recursos de AWS usando plantillas. Puedes definir tu infraestructura como código y automatizar la creación y actualización de recursos de manera repetible.",
      whyOthersWrong: {
        a: "EC2 por sí solo no proporciona automatización repetible de despliegue.",
        c: "QuickSight es para visualización de datos, no despliegue de infraestructura.",
        d: "ECS es para contenedores, no para automatizar múltiples entornos de prueba.",
      },
    },
    tags: ["cloudformation", "iac", "automatizacion", "testing"],
  },
  {
    id: "clf-190",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "Un desarrollador quiere desplegar rápidamente una aplicación en AWS sin crear manualmente los recursos necesarios. ¿Qué servicio de AWS cumplirá estos requisitos?",
    options: [
      { id: "a", text: "Amazon EC2" },
      { id: "b", text: "AWS Elastic Beanstalk" },
      { id: "c", text: "AWS CodeBuild" },
      { id: "d", text: "Amazon Personalize" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Elastic Beanstalk permite desplegar y gestionar aplicaciones en AWS sin crear y configurar manualmente los recursos necesarios como instancias EC2, balanceadores de carga, grupos de seguridad y bases de datos.",
      whyOthersWrong: {
        a: "EC2 requiere configuración manual de instancias y recursos asociados.",
        c: "CodeBuild compila código, no despliega aplicaciones automáticamente.",
        d: "Personalize es para recomendaciones ML, no para despliegue de aplicaciones.",
      },
    },
    tags: ["elastic-beanstalk", "paas", "despliegue-rapido"],
  },
  {
    id: "clf-191",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Qué servicios de AWS puede usar una empresa para lograr una arquitectura de acoplamiento débil? (Seleccione DOS)",
    options: [
      { id: "a", text: "Amazon WorkSpaces" },
      { id: "b", text: "Amazon Simple Queue Service (Amazon SQS)" },
      { id: "c", text: "Amazon Connect" },
      { id: "d", text: "AWS Trusted Advisor" },
      { id: "e", text: "AWS Step Functions" },
    ],
    correctAnswers: ["b", "e"],
    explanation: {
      correct:
        "Amazon SQS y AWS Step Functions son servicios que ayudan a lograr una arquitectura de acoplamiento débil. SQS permite desacoplar componentes mediante colas de mensajes, y Step Functions coordina múltiples servicios en flujos de trabajo serverless.",
      whyOthersWrong: {
        a: "WorkSpaces es para escritorios virtuales, no para arquitectura de aplicaciones.",
        c: "Connect es un centro de contacto en la nube, no para desacoplamiento.",
        d: "Trusted Advisor proporciona recomendaciones, no desacoplamiento de arquitectura.",
      },
    },
    tags: ["sqs", "step-functions", "acoplamiento-debil", "arquitectura"],
  },
  {
    id: "clf-192",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "Una empresa necesita controlar el tráfico entrante y saliente a una instancia de Amazon EC2. ¿Qué servicio o característica de AWS puede asociar la empresa con la instancia EC2 para cumplir este requisito?",
    options: [
      { id: "a", text: "Network ACL" },
      { id: "b", text: "Grupo de seguridad" },
      { id: "c", text: "AWS WAF" },
      { id: "d", text: "Tablas de rutas de VPC" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Un grupo de seguridad es un firewall virtual que puede asociarse con una instancia de Amazon EC2 para controlar el tráfico entrante y saliente hacia y desde la instancia.",
      whyOthersWrong: {
        a: "Network ACL controla tráfico a nivel de subred, no a nivel de instancia.",
        c: "WAF protege aplicaciones web, no controla tráfico de red general.",
        d: "Las tablas de rutas determinan cómo se enruta el tráfico, no lo filtran.",
      },
    },
    tags: ["security-groups", "ec2", "firewall", "trafico"],
  },
  {
    id: "clf-193",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa tiene 5 TB de datos almacenados en Amazon S3. La empresa planea ejecutar consultas ocasionales sobre los datos para análisis. ¿Qué servicio de AWS debe usar la empresa para ejecutar estas consultas de la manera más rentable?",
    options: [
      { id: "a", text: "Amazon Redshift" },
      { id: "b", text: "Amazon Athena" },
      { id: "c", text: "Amazon Kinesis" },
      { id: "d", text: "Amazon RDS" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Amazon Athena es un servicio de consultas interactivo serverless que permite ejecutar consultas SQL sobre datos en Amazon S3. Es ideal para consultas ad-hoc ya que no requiere aprovisionar servidores y solo pagas por los datos escaneados.",
      whyOthersWrong: {
        a: "Redshift es un data warehouse que requiere aprovisionamiento y es más costoso para consultas ocasionales.",
        c: "Kinesis es para procesamiento de streaming en tiempo real, no consultas ad-hoc.",
        d: "RDS es una base de datos relacional, no para consultar datos en S3.",
      },
    },
    tags: ["athena", "s3", "consultas-sql", "serverless"],
  },
  {
    id: "clf-194",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "multiple",
    difficulty: "medium",
    question:
      "Una empresa quiere migrar su base de datos a un servicio gestionado de AWS que sea compatible con PostgreSQL. ¿Qué servicios de AWS cumplirán estos requisitos? (Seleccione DOS)",
    options: [
      { id: "a", text: "Amazon Athena" },
      { id: "b", text: "Amazon RDS" },
      { id: "c", text: "Amazon EC2" },
      { id: "d", text: "Amazon DynamoDB" },
      { id: "e", text: "Amazon Aurora" },
    ],
    correctAnswers: ["b", "e"],
    explanation: {
      correct:
        "Amazon RDS y Amazon Aurora son servicios gestionados de AWS que soportan el motor de base de datos PostgreSQL. RDS facilita configurar y operar PostgreSQL en la nube, mientras que Aurora es un motor cloud-native compatible con PostgreSQL con mayor rendimiento.",
      whyOthersWrong: {
        a: "Athena es para consultas SQL sobre S3, no una base de datos gestionada.",
        c: "EC2 requiere gestión manual de la base de datos, no es un servicio gestionado.",
        d: "DynamoDB es NoSQL, no compatible con PostgreSQL.",
      },
    },
    tags: ["rds", "aurora", "postgresql", "base-datos-gestionada"],
  },
  {
    id: "clf-137",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Qué servicios o características de AWS permiten a los usuarios crear una conexión de red entre dos VPCs? (Seleccione DOS)",
    options: [
      { id: "a", text: "VPC endpoints" },
      { id: "b", text: "Amazon Route 53" },
      { id: "c", text: "VPC peering" },
      { id: "d", text: "AWS Direct Connect" },
      { id: "e", text: "AWS Transit Gateway" },
    ],
    correctAnswers: ["c", "e"],
    explanation: {
      correct:
        "VPC peering y AWS Transit Gateway son dos servicios o características que permiten crear una conexión de red entre dos VPCs. VPC peering es una conexión directa entre dos VPCs, mientras que Transit Gateway actúa como un hub central para conectar múltiples VPCs.",
      whyOthersWrong: {
        a: "VPC endpoints conectan VPCs a servicios de AWS, no VPCs entre sí.",
        b: "Route 53 es un servicio DNS, no para conectar VPCs.",
        d: "Direct Connect conecta on-premises a AWS, no VPCs entre sí.",
      },
    },
    tags: ["vpc-peering", "transit-gateway", "redes", "conectividad"],
  },
  {
    id: "clf-138",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa tiene una biblioteca de cintas físicas para almacenar respaldos de datos. La biblioteca de cintas se está quedando sin espacio. La empresa necesita extender la capacidad de la biblioteca de cintas a la nube de AWS. ¿Qué servicio de AWS debe usar la empresa?",
    options: [
      { id: "a", text: "Amazon Elastic File System (Amazon EFS)" },
      { id: "b", text: "Amazon Elastic Block Store (Amazon EBS)" },
      { id: "c", text: "Amazon S3" },
      { id: "d", text: "AWS Storage Gateway" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "AWS Storage Gateway es un servicio de almacenamiento híbrido en la nube que proporciona acceso on-premises a almacenamiento en la nube virtualmente ilimitado. Uno de sus casos de uso es respaldo basado en cinta, que permite almacenar respaldos en cintas virtuales en la nube de AWS.",
      whyOthersWrong: {
        a: "EFS es almacenamiento de archivos, no para extensión de bibliotecas de cintas.",
        b: "EBS es almacenamiento de bloques para EC2, no para extensión de cintas.",
        c: "S3 almacena objetos pero no proporciona la interfaz de biblioteca de cintas.",
      },
    },
    tags: ["storage-gateway", "tape-gateway", "backup", "hibrido"],
  },
  {
    id: "clf-139",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa ejecuta una base de datos MySQL on-premises. La empresa quiere ejecutar una copia de esta base de datos en la nube de AWS. ¿Qué servicio de AWS soportaría esta carga de trabajo?",
    options: [
      { id: "a", text: "Amazon RDS" },
      { id: "b", text: "Amazon Neptune" },
      { id: "c", text: "Amazon ElastiCache for Redis" },
      { id: "d", text: "Amazon Quantum Ledger Database (Amazon QLDB)" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "Amazon Relational Database Service (Amazon RDS) es un servicio web que facilita configurar, operar y escalar una base de datos relacional en la nube. RDS soporta seis motores de base de datos populares, incluyendo MySQL.",
      whyOthersWrong: {
        b: "Neptune es una base de datos de grafos, no relacional.",
        c: "ElastiCache es para caching en memoria, no una base de datos relacional.",
        d: "QLDB es una base de datos de libro mayor, no relacional.",
      },
    },
    tags: ["rds", "mysql", "migracion", "base-datos"],
  },
  {
    id: "clf-140",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa quiere migrar su aplicación de cómputo de alto rendimiento (HPC) a Amazon EC2. La aplicación tiene múltiples componentes y debe tener tolerancia a fallos y capacidades de failover automático. ¿Qué solución de infraestructura de AWS cumplirá estos requisitos con la MENOR latencia entre componentes?",
    options: [
      { id: "a", text: "Múltiples Regiones de AWS" },
      { id: "b", text: "Múltiples ubicaciones edge" },
      { id: "c", text: "Múltiples Zonas de Disponibilidad" },
      { id: "d", text: "Cachés edge regionales" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Usar instancias EC2 en múltiples Zonas de Disponibilidad proporciona tolerancia a fallos y capacidades de failover, manteniendo la menor latencia entre componentes ya que las AZs están en la misma Región y conectadas con redes de alta velocidad.",
      whyOthersWrong: {
        a: "Múltiples Regiones tendrían mayor latencia entre componentes.",
        b: "Las ubicaciones edge son para contenido, no para aplicaciones HPC.",
        d: "Los cachés edge regionales son para CDN, no para HPC.",
      },
    },
    tags: ["ec2", "hpc", "multi-az", "tolerancia-fallos"],
  },
  {
    id: "clf-141",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa necesita un servicio gestionado de machine learning (ML) que pueda recomendar productos basándose en los comportamientos previos del cliente. ¿Qué servicio de AWS cumple este requisito?",
    options: [
      { id: "a", text: "Amazon Personalize" },
      { id: "b", text: "Amazon SageMaker" },
      { id: "c", text: "Amazon Pinpoint" },
      { id: "d", text: "Amazon Comprehend" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "Amazon Personalize es un servicio completamente gestionado que permite a los desarrolladores crear recomendaciones personalizadas para clientes usando sus propios datos. Puede procesar datos, identificar lo significativo, seleccionar algoritmos y entrenar un modelo de recomendación automáticamente.",
      whyOthersWrong: {
        b: "SageMaker es una plataforma ML de propósito general, no específica para recomendaciones.",
        c: "Pinpoint es para marketing y comunicaciones, no recomendaciones de productos.",
        d: "Comprehend analiza texto para extraer insights, no hace recomendaciones de productos.",
      },
    },
    tags: ["personalize", "ml", "recomendaciones", "personalizacion"],
  },
  {
    id: "clf-195",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué característica o recurso de AWS es una plantilla de instancia de Amazon EC2 implementable que está preempaquetada con software y requisitos de seguridad?",
    options: [
      { id: "a", text: "Volumen de Amazon Elastic Block Store (Amazon EBS)" },
      { id: "b", text: "Plantilla de AWS CloudFormation" },
      { id: "c", text: "Instantánea de Amazon Elastic Block Store (Amazon EBS)" },
      { id: "d", text: "Amazon Machine Image (AMI)" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "Una Amazon Machine Image (AMI) es una plantilla de instancia de Amazon EC2 implementable que está preempaquetada con software y requisitos de seguridad. Proporciona la información necesaria para lanzar una instancia, incluyendo el sistema operativo, aplicaciones y configuraciones.",
      whyOthersWrong: {
        a: "Un volumen EBS es almacenamiento de bloques, no una plantilla de instancia.",
        b: "Una plantilla de CloudFormation define infraestructura completa, no es específica para EC2.",
        c: "Una instantánea EBS es una copia de respaldo de un volumen, no una plantilla de instancia.",
      },
    },
    tags: ["ami", "ec2", "plantilla", "imagen"],
  },
  {
    id: "clf-196",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa ha estado almacenando informes mensuales en un bucket de Amazon S3. La empresa exporta los datos del informe a archivos de valores separados por comas (.csv). Un desarrollador quiere escribir una consulta SQL simple que pueda leer todos esos archivos y generar un informe resumido. ¿Qué servicio de AWS debe usar?",
    options: [
      { id: "a", text: "Amazon S3 Select" },
      { id: "b", text: "Amazon Athena" },
      { id: "c", text: "Amazon Redshift" },
      { id: "d", text: "Amazon EC2" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Amazon Athena es un servicio de consultas interactivo que permite analizar datos en Amazon S3 usando SQL estándar. No requiere configuración ni administración de servidores, y los usuarios solo pagan por las consultas que ejecutan. Es ideal para consultar archivos CSV directamente desde S3.",
      whyOthersWrong: {
        a: "S3 Select permite filtrar datos de un solo objeto, no consultar múltiples archivos con SQL complejo.",
        c: "Redshift es un data warehouse que requiere cargar los datos, no consulta directamente S3 como Athena.",
        d: "EC2 requeriría configurar y administrar servidores para procesar los datos.",
      },
    },
    tags: ["athena", "s3", "sql", "csv", "consultas"],
  },
  {
    id: "clf-197",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de base de datos de AWS proporciona un almacén de datos en memoria para mejorar el rendimiento de aplicaciones?",
    options: [
      { id: "a", text: "Amazon DynamoDB" },
      { id: "b", text: "Amazon ElastiCache" },
      { id: "c", text: "Amazon RDS" },
      { id: "d", text: "Amazon Timestream" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Amazon ElastiCache es un servicio de almacén de datos en memoria completamente administrado que soporta Redis y Memcached. Es ideal para casos de uso que requieren tiempos de respuesta de sub-milisegundo, como caching, gestión de sesiones y tablas de clasificación.",
      whyOthersWrong: {
        a: "DynamoDB es una base de datos NoSQL persistente, aunque tiene DAX para caching.",
        c: "RDS es para bases de datos relacionales persistentes en disco.",
        d: "Timestream es para series temporales, no un almacén de datos en memoria de propósito general.",
      },
    },
    tags: ["elasticache", "cache", "en-memoria", "redis", "memcached"],
  },
  {
    id: "clf-145",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa necesita migrar todos sus equipos de desarrollo a un entorno de desarrollo integrado (IDE) basado en la nube. ¿Qué servicio de AWS debe usar?",
    options: [
      { id: "a", text: "AWS CodeBuild" },
      { id: "b", text: "AWS Cloud9" },
      { id: "c", text: "AWS OpsWorks" },
      { id: "d", text: "AWS CDK (Cloud Development Kit)" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Cloud9 es un entorno de desarrollo integrado (IDE) basado en la nube que permite escribir, ejecutar y depurar código desde un navegador web. Soporta múltiples lenguajes de programación y proporciona acceso terminal a servicios de AWS.",
      whyOthersWrong: {
        a: "CodeBuild es para compilar y probar código, no es un IDE.",
        c: "OpsWorks es para gestión de configuración con Chef o Puppet.",
        d: "CDK es un framework para definir infraestructura como código, no un IDE.",
      },
    },
    tags: ["cloud9", "ide", "desarrollo", "navegador"],
  },
  {
    id: "clf-146",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa tiene una carga de trabajo de aplicación que está diseñada para ser sin estado y puede tolerar interrupciones ocasionales. La aplicación realiza cálculos masivamente paralelos. ¿Qué modelo de precios de instancias de Amazon EC2 debería elegir la empresa para reducir costos?",
    options: [
      { id: "a", text: "Instancias bajo demanda (On-Demand)" },
      { id: "b", text: "Instancias Spot" },
      { id: "c", text: "Instancias reservadas" },
      { id: "d", text: "Instancias dedicadas" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Las instancias Spot permiten aprovechar la capacidad no utilizada de EC2 en AWS con descuentos de hasta el 90% en comparación con los precios bajo demanda. Son ideales para cargas de trabajo tolerantes a interrupciones y flexibles en cuanto al tiempo.",
      whyOthersWrong: {
        a: "Las instancias bajo demanda son más caras y no ofrecen descuentos significativos.",
        c: "Las instancias reservadas requieren compromiso a largo plazo y no son óptimas para cargas interrumpibles.",
        d: "Las instancias dedicadas son más costosas y para requisitos de cumplimiento específicos.",
      },
    },
    tags: ["ec2", "spot-instances", "costos", "compute"],
  },
  {
    id: "clf-147",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa está alojando una aplicación web en AWS usando una sola instancia de Amazon EC2 que almacena documentos subidos por usuarios en un volumen de Amazon EBS. Para mejor escalabilidad y disponibilidad, la empresa duplicó la arquitectura creando una segunda instancia EC2 y volumen EBS en otra Zona de Disponibilidad, colocando ambas detrás de un Application Load Balancer. Los usuarios reportan que ven diferentes subconjuntos de sus documentos dependiendo de qué servidor les atiende. ¿Qué solución debe proponer el arquitecto?",
    options: [
      { id: "a", text: "Copiar los datos para que ambos volúmenes EBS contengan todos los documentos" },
      { id: "b", text: "Configurar el ALB para enrutar a cada usuario al servidor con sus documentos" },
      { id: "c", text: "Copiar los datos de ambos volúmenes EBS a Amazon EFS. Modificar la aplicación para guardar nuevos documentos en Amazon EFS" },
      { id: "d", text: "Configurar el ALB para enviar la solicitud a ambos servidores y devolver cada documento del servidor correcto" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Amazon EFS (Elastic File System) es un sistema de archivos que puede ser accedido simultáneamente por múltiples instancias EC2 en diferentes Zonas de Disponibilidad. Esto asegura que todos los usuarios vean todos sus documentos independientemente de qué instancia les atienda.",
      whyOthersWrong: {
        a: "Sincronizar manualmente EBS no escala y no mantiene consistencia en tiempo real.",
        b: "Esto añade complejidad y no resuelve el problema de disponibilidad.",
        d: "No es técnicamente viable y añadiría latencia innecesaria.",
      },
    },
    tags: ["efs", "ebs", "almacenamiento-compartido", "multi-az", "escalabilidad"],
  },
  {
    id: "clf-148",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué servicio o característica de AWS permite cifrar datos en reposo en Amazon S3?",
    options: [
      { id: "a", text: "Políticas de IAM" },
      { id: "b", text: "Cifrado del lado del servidor (Server-side encryption)" },
      { id: "c", text: "Amazon GuardDuty" },
      { id: "d", text: "Cifrado del lado del cliente (Client-side encryption)" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "El cifrado del lado del servidor es una opción que Amazon S3 proporciona para cifrar datos en reposo. Con esta opción, Amazon S3 cifra un objeto antes de guardarlo en disco en sus centros de datos y lo descifra cuando se descarga.",
      whyOthersWrong: {
        a: "Las políticas de IAM controlan acceso, no cifran datos.",
        c: "GuardDuty es para detección de amenazas, no cifrado.",
        d: "El cifrado del lado del cliente se realiza antes de enviar a S3, no es una característica de S3.",
      },
    },
    tags: ["s3", "cifrado", "server-side-encryption", "seguridad"],
  },
  {
    id: "clf-149",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS proporciona cifrado en reposo para Amazon RDS y volúmenes de Amazon Elastic Block Store (Amazon EBS)?",
    options: [
      { id: "a", text: "AWS Lambda" },
      { id: "b", text: "AWS Key Management Service (AWS KMS)" },
      { id: "c", text: "AWS WAF" },
      { id: "d", text: "Amazon Rekognition" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Key Management Service (AWS KMS) es un servicio administrado que facilita crear y controlar las claves de cifrado utilizadas para proteger datos. AWS KMS proporciona control centralizado sobre las claves de cifrado usadas para proteger datos en Amazon RDS y volúmenes EBS.",
      whyOthersWrong: {
        a: "Lambda es un servicio de cómputo serverless, no de cifrado.",
        c: "WAF es un firewall de aplicaciones web, no para cifrado de datos.",
        d: "Rekognition es para análisis de imágenes y video, no cifrado.",
      },
    },
    tags: ["kms", "cifrado", "rds", "ebs", "seguridad"],
  },
  {
    id: "clf-150",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Un ingeniero de TI necesita acceder a servicios de AWS desde una aplicación on-premises. ¿Qué credenciales o claves necesita la aplicación para autenticación?",
    options: [
      { id: "a", text: "Nombre de usuario y contraseña de la cuenta AWS" },
      { id: "b", text: "Access key y secret key de IAM" },
      { id: "c", text: "Par de claves de Amazon EC2" },
      { id: "d", text: "Claves de AWS Key Management Service (AWS KMS)" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Las access keys de IAM son credenciales de largo plazo que consisten en un access key ID y un secret access key. Se usan para firmar solicitudes programáticas que se hacen a AWS desde aplicaciones on-premises u otras ubicaciones externas.",
      whyOthersWrong: {
        a: "El nombre de usuario y contraseña son para acceso a la consola, no para acceso programático.",
        c: "Los pares de claves EC2 son para conexión SSH a instancias, no para acceso a API de AWS.",
        d: "Las claves KMS son para cifrar datos, no para autenticación de API.",
      },
    },
    tags: ["iam", "access-keys", "autenticacion", "programatico"],
  },
  {
    id: "clf-151",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "multiple",
    difficulty: "medium",
    question:
      "La elasticidad en la nube de AWS se refiere a ¿cuáles de los siguientes? (Seleccione DOS)",
    options: [
      { id: "a", text: "Qué tan rápido se puede reiniciar una instancia de Amazon EC2" },
      { id: "b", text: "La capacidad de escalar recursos según la demanda cambia" },
      { id: "c", text: "La cantidad máxima de RAM que puede usar una instancia de Amazon EC2" },
      { id: "d", text: "El modelo de facturación de pago por uso" },
      { id: "e", text: "Qué tan fácilmente se pueden obtener recursos cuando se necesitan" },
    ],
    correctAnswers: ["b", "e"],
    explanation: {
      correct:
        "La elasticidad en la nube de AWS se refiere a la capacidad de adquirir recursos cuando se necesitan y liberarlos cuando ya no son necesarios. Esto significa que puedes escalar recursos según la demanda cambia y obtener recursos fácilmente cuando se requieren.",
      whyOthersWrong: {
        a: "La velocidad de reinicio no define la elasticidad.",
        c: "La cantidad máxima de RAM es una especificación de instancia, no elasticidad.",
        d: "El pago por uso es un modelo de precios, relacionado pero no es la definición de elasticidad.",
      },
    },
    tags: ["elasticidad", "escalabilidad", "cloud-computing", "recursos"],
  },
  {
    id: "clf-152",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "La aplicación de una empresa tiene alto uso de clientes en ciertos momentos del día. La empresa quiere reducir el número de instancias de Amazon EC2 en ejecución cuando el uso de la aplicación es bajo. ¿Qué servicio u opción de compra de instancias de AWS debe usar?",
    options: [
      { id: "a", text: "EC2 Instance Savings Plans" },
      { id: "b", text: "Spot Instances" },
      { id: "c", text: "Reserved Instances" },
      { id: "d", text: "Amazon EC2 Auto Scaling" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "Amazon EC2 Auto Scaling es un servicio que puede ayudar a reducir automáticamente el número de instancias EC2 en ejecución cuando el uso de la aplicación es bajo. Permite crear políticas de escalado que ajustan automáticamente el número de instancias basándose en la demanda.",
      whyOthersWrong: {
        a: "Savings Plans ofrecen descuentos pero no escalan automáticamente las instancias.",
        b: "Spot Instances ofrecen descuentos pero no escalan automáticamente según la demanda.",
        c: "Reserved Instances son para compromiso a largo plazo, no escalan automáticamente.",
      },
    },
    tags: ["auto-scaling", "ec2", "demanda", "optimizacion"],
  },
  {
    id: "clf-153",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa está ejecutando una aplicación monolítica on-premises que no escala y es difícil de mantener. La empresa planea migrar la aplicación a AWS y dividirla en microservicios. ¿Qué mejor práctica del AWS Well-Architected Framework está siguiendo la empresa con este plan?",
    options: [
      { id: "a", text: "Integrar pruebas funcionales como parte del despliegue en AWS" },
      { id: "b", text: "Usar automatización para hacer cambios" },
      { id: "c", text: "Desplegar la aplicación en múltiples ubicaciones" },
      { id: "d", text: "Implementar dependencias débilmente acopladas" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "La empresa está siguiendo la mejor práctica de implementar dependencias débilmente acopladas al migrar la aplicación a AWS y dividirla en microservicios. El acoplamiento débil es un principio de diseño del AWS Well-Architected Framework que ayuda a reducir interdependencias entre componentes y mejorar la escalabilidad, confiabilidad y rendimiento del sistema.",
      whyOthersWrong: {
        a: "Las pruebas funcionales son importantes pero no es lo que describe dividir en microservicios.",
        b: "La automatización es buena práctica pero no describe la arquitectura de microservicios.",
        c: "Múltiples ubicaciones mejoran disponibilidad pero no describe el desacoplamiento.",
      },
    },
    tags: ["well-architected", "microservicios", "acoplamiento-debil", "arquitectura"],
  },
  {
    id: "clf-154",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué herramienta o servicio de AWS proporciona recomendaciones para ayudar a los usuarios a obtener instancias de Amazon EC2 del tamaño correcto según los datos de uso histórico de la carga de trabajo?",
    options: [
      { id: "a", text: "Calculadora de precios de AWS" },
      { id: "b", text: "AWS Compute Optimizer" },
      { id: "c", text: "AWS App Runner" },
      { id: "d", text: "AWS Systems Manager" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "AWS Compute Optimizer proporciona recomendaciones para ayudar a los usuarios a obtener instancias de Amazon EC2 del tamaño correcto según los datos de uso histórico de la carga de trabajo. Usa machine learning para analizar métricas y recomendar el tipo de instancia óptimo.",
      whyOthersWrong: {
        a: "La Calculadora de precios estima costos pero no analiza uso histórico para recomendar tamaños.",
        c: "App Runner es para desplegar aplicaciones containerizadas, no para optimización de instancias.",
        d: "Systems Manager gestiona infraestructura pero no optimiza tamaños de instancia.",
      },
    },
    tags: ["compute-optimizer", "ec2", "rightsizing", "optimizacion"],
  },
  {
    id: "clf-155",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Un ingeniero de nube quiere conocer el porcentaje de unidades de computación asignadas que están en uso para una instancia específica de Amazon EC2. ¿Qué servicio de AWS puede proporcionar esta información?",
    options: [
      { id: "a", text: "AWS CloudTrail" },
      { id: "b", text: "AWS Config" },
      { id: "c", text: "Amazon CloudWatch" },
      { id: "d", text: "AWS Artifact" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Amazon CloudWatch puede proporcionar métricas detalladas sobre la utilización de instancias de Amazon EC2, incluyendo CPUUtilization que muestra el porcentaje de unidades de computación asignadas en uso.",
      whyOthersWrong: {
        a: "CloudTrail registra llamadas de API y eventos de cuenta, no métricas de rendimiento.",
        b: "AWS Config rastrea cambios de configuración de recursos, no métricas de rendimiento.",
        d: "Artifact proporciona informes de cumplimiento, no métricas de instancias.",
      },
    },
    tags: ["cloudwatch", "ec2", "metricas", "monitoreo"],
  },
  {
    id: "clf-156",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS proporciona un lugar único para rastrear el progreso de las migraciones de aplicaciones?",
    options: [
      { id: "a", text: "AWS Application Discovery Service" },
      { id: "b", text: "AWS Application Migration Service" },
      { id: "c", text: "AWS Service Catalog" },
      { id: "d", text: "AWS Migration Hub" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "AWS Migration Hub es un servicio que proporciona un lugar único para rastrear el progreso de las migraciones de aplicaciones a través de múltiples soluciones de AWS y partners. Permite elegir las herramientas de migración que mejor se adapten a tus necesidades.",
      whyOthersWrong: {
        a: "Application Discovery Service descubre información sobre servidores on-premises, no rastrea migraciones.",
        b: "Application Migration Service realiza las migraciones reales (lift-and-shift), no centraliza el rastreo.",
        c: "Service Catalog gestiona catálogos de servicios aprobados, no migraciones.",
      },
    },
    tags: ["migration-hub", "migracion", "rastreo", "aws-migration"],
  },
  {
    id: "clf-157",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa necesita implementar gestión de identidad para una flota de aplicaciones móviles que se ejecutan en la nube de AWS. ¿Qué servicio de AWS cumplirá este requisito?",
    options: [
      { id: "a", text: "Amazon Cognito" },
      { id: "b", text: "AWS Security Hub" },
      { id: "c", text: "AWS Shield" },
      { id: "d", text: "AWS WAF" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "Amazon Cognito es un servicio que proporciona identidad de usuario y autenticación para aplicaciones móviles y web, permitiendo a los usuarios registrarse, iniciar sesión y acceder a recursos de AWS con diferentes proveedores de identidad como Google, Facebook o SAML.",
      whyOthersWrong: {
        b: "Security Hub agrega alertas de seguridad, no gestiona identidad de usuarios de aplicaciones.",
        c: "Shield protege contra ataques DDoS, no gestiona identidad de usuarios.",
        d: "WAF protege aplicaciones web contra exploits, no gestiona identidad de usuarios.",
      },
    },
    tags: ["cognito", "identidad", "movil", "autenticacion"],
  },
  {
    id: "clf-158",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa quiere consultar sus logs de servidor para obtener información sobre las experiencias de sus clientes. ¿Qué servicio de AWS almacenará estos datos de la manera más rentable?",
    options: [
      { id: "a", text: "Amazon Aurora" },
      { id: "b", text: "Amazon Elastic File System (Amazon EFS)" },
      { id: "c", text: "Amazon Elastic Block Store (Amazon EBS)" },
      { id: "d", text: "Amazon S3" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "Amazon S3 es un servicio de almacenamiento de objetos escalable, duradero y rentable. Es ideal para almacenar logs de servidor que se consultarán ocasionalmente, y ofrece múltiples clases de almacenamiento con diferentes características de precio y rendimiento.",
      whyOthersWrong: {
        a: "Aurora es una base de datos relacional, más costosa que S3 para almacenar logs.",
        b: "EFS es almacenamiento de archivos compartido, más costoso que S3 para este caso de uso.",
        c: "EBS es almacenamiento de bloques para EC2, no ideal para almacenar logs masivos.",
      },
    },
    tags: ["s3", "logs", "almacenamiento", "costos"],
  },
  {
    id: "clf-159",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Qué servicio de AWS necesita un servicio de gestión de vulnerabilidades automatizado que escanee continuamente las cargas de trabajo de AWS en busca de vulnerabilidades de software?",
    options: [
      { id: "a", text: "Amazon GuardDuty" },
      { id: "b", text: "Amazon Inspector" },
      { id: "c", text: "AWS Security Hub" },
      { id: "d", text: "AWS Shield" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Amazon Inspector es un servicio de gestión de vulnerabilidades automatizado que escanea continuamente las cargas de trabajo de AWS (instancias EC2, funciones Lambda, imágenes de contenedor) en busca de vulnerabilidades de software y exposiciones de red no intencionadas.",
      whyOthersWrong: {
        a: "GuardDuty detecta amenazas y comportamientos maliciosos, no vulnerabilidades de software.",
        c: "Security Hub agrega alertas de seguridad de múltiples servicios, no escanea vulnerabilidades directamente.",
        d: "Shield protege contra ataques DDoS, no escanea vulnerabilidades de software.",
      },
    },
    tags: ["inspector", "vulnerabilidades", "seguridad", "escaneo"],
  },
  {
    id: "clf-160",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "¿Cuál es la cantidad total de almacenamiento que ofrece Amazon S3?",
    options: [
      { id: "a", text: "100 MB" },
      { id: "b", text: "5 GB" },
      { id: "c", text: "5 TB" },
      { id: "d", text: "Ilimitado" },
    ],
    correctAnswers: ["d"],
    explanation: {
      correct:
        "Amazon S3 ofrece almacenamiento ilimitado para cualquier cantidad de datos. Puedes almacenar tantos objetos como desees, y cada objeto puede tener hasta 5 TB de tamaño. Solo pagas por el espacio de almacenamiento que realmente usas.",
      whyOthersWrong: {
        a: "100 MB es un límite muy pequeño, S3 puede almacenar petabytes de datos.",
        b: "5 GB no es el límite de S3; es la cantidad en el Free Tier mensual.",
        c: "5 TB es el tamaño máximo de un solo objeto en S3, no el límite total.",
      },
    },
    tags: ["s3", "almacenamiento", "capacidad", "ilimitado"],
  },
  {
    id: "clf-161",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "easy",
    question:
      "¿Qué servicio de DNS de AWS es altamente disponible y escalable?",
    options: [
      { id: "a", text: "Amazon VPC" },
      { id: "b", text: "Amazon CloudFront" },
      { id: "c", text: "Amazon Route 53" },
      { id: "d", text: "Amazon Connect" },
    ],
    correctAnswers: ["c"],
    explanation: {
      correct:
        "Amazon Route 53 es un servicio web DNS altamente disponible y escalable. Está diseñado para proporcionar una forma confiable y rentable de enrutar usuarios finales a aplicaciones de Internet traduciendo nombres de dominio a direcciones IP.",
      whyOthersWrong: {
        a: "VPC es una red virtual aislada, no un servicio DNS.",
        b: "CloudFront es una CDN para entrega de contenido, no un servicio DNS.",
        d: "Amazon Connect es un centro de contacto en la nube, no un servicio DNS.",
      },
    },
    tags: ["route53", "dns", "disponibilidad", "escalabilidad"],
  },
  {
    id: "clf-162",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa tiene una aplicación con requisitos de hardware robustos. La aplicación debe ser accedida por estudiantes que usan laptops livianas y de bajo costo. ¿Qué servicio de AWS cumple estos requisitos?",
    options: [
      { id: "a", text: "Amazon AppStream 2.0" },
      { id: "b", text: "AWS AppSync" },
      { id: "c", text: "Amazon WorkLink" },
      { id: "d", text: "AWS Elastic Beanstalk" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "Amazon AppStream 2.0 es un servicio de streaming de aplicaciones completamente administrado que permite transmitir aplicaciones de escritorio desde AWS a cualquier dispositivo con un navegador web. Maneja el procesamiento en la nube, permitiendo que dispositivos de bajo costo accedan a aplicaciones con requisitos pesados.",
      whyOthersWrong: {
        b: "AppSync es para APIs GraphQL, no para streaming de aplicaciones.",
        c: "WorkLink (descontinuado) era para acceso móvil seguro a intranet, no streaming de aplicaciones.",
        d: "Elastic Beanstalk despliega aplicaciones web, no transmite aplicaciones de escritorio.",
      },
    },
    tags: ["appstream", "streaming", "aplicaciones", "desktop"],
  },
  {
    id: "clf-163",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Cuáles acciones son ejemplos del esfuerzo de una empresa por dimensionar correctamente (right-size) sus recursos de AWS para controlar los costos de la nube? (Seleccione DOS)",
    options: [
      { id: "a", text: "Cambiar de Amazon RDS a Amazon DynamoDB" },
      { id: "b", text: "Seleccionar tipos de instancia de Amazon EC2 basándose en patrones de utilización anteriores" },
      { id: "c", text: "Usar políticas de ciclo de vida de Amazon S3 para mover objetos de acceso infrecuente a niveles de almacenamiento de menor costo" },
      { id: "d", text: "Usar despliegues Multi-AZ para Amazon RDS" },
      { id: "e", text: "Reemplazar instancias existentes de Amazon EC2 con AWS Elastic Beanstalk" },
    ],
    correctAnswers: ["b", "c"],
    explanation: {
      correct:
        "Seleccionar tipos de instancia EC2 basándose en patrones de utilización anteriores y usar políticas de ciclo de vida de S3 para mover objetos a almacenamiento más económico son estrategias de optimización de costos (right-sizing).",
      whyOthersWrong: {
        a: "Cambiar el tipo de base de datos no es right-sizing, es un cambio arquitectónico.",
        d: "Multi-AZ mejora disponibilidad pero aumenta costos, no los reduce.",
        e: "Migrar a Elastic Beanstalk no es right-sizing de recursos existentes.",
      },
    },
    tags: ["rightsizing", "s3-lifecycle", "ec2", "costos"],
  },
  {
    id: "clf-164",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa quiere generar una lista de usuarios de IAM. La empresa también quiere ver el estado de varias credenciales asociadas con los usuarios, como contraseñas, access keys y dispositivos MFA. ¿Qué servicio o característica de AWS cumple estos requisitos?",
    options: [
      { id: "a", text: "Informe de credenciales de IAM (IAM credential report)" },
      { id: "b", text: "AWS IAM Identity Center (AWS Single Sign-On)" },
      { id: "c", text: "AWS Identity and Access Management Access Analyzer" },
      { id: "d", text: "AWS Cost and Usage Report" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "El informe de credenciales de IAM es una característica que permite ver y descargar un informe que lista todos los usuarios de IAM en tu cuenta y el estado de sus credenciales, incluyendo contraseñas, access keys y dispositivos MFA.",
      whyOthersWrong: {
        b: "IAM Identity Center gestiona acceso SSO a múltiples cuentas, no genera informes de credenciales.",
        c: "Access Analyzer identifica recursos compartidos externamente, no lista credenciales de usuarios.",
        d: "Cost and Usage Report es para análisis de costos, no credenciales.",
      },
    },
    tags: ["iam", "credential-report", "usuarios", "seguridad"],
  },
  {
    id: "clf-165",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa necesita alojar un servidor web en instancias de Amazon EC2 por al menos 1 año. El servidor web no puede tolerar interrupciones. ¿Qué opción de compra de EC2 cumplirá estos requisitos de la manera más rentable?",
    options: [
      { id: "a", text: "Instancias bajo demanda (On-Demand)" },
      { id: "b", text: "Instancias reservadas con pago parcial por adelantado" },
      { id: "c", text: "Instancias Spot" },
      { id: "d", text: "Instancias reservadas sin pago por adelantado" },
    ],
    correctAnswers: ["b"],
    explanation: {
      correct:
        "Las instancias reservadas con pago parcial por adelantado son la opción más rentable para cargas de trabajo predecibles que requieren operación continua por 1 año o más. Ofrecen descuentos significativos comparados con On-Demand.",
      whyOthersWrong: {
        a: "On-Demand son más caras y no ofrecen descuentos por compromiso a largo plazo.",
        c: "Spot Instances pueden ser interrumpidas, no son adecuadas para cargas que no toleran interrupciones.",
        d: "Sin pago por adelantado ofrece menor descuento que el pago parcial.",
      },
    },
    tags: ["ec2", "reserved-instances", "costos", "compromiso"],
  },
  {
    id: "clf-166",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "multiple",
    difficulty: "medium",
    question:
      "¿Cuáles son capacidades de la perspectiva de plataforma del Marco de Adopción de la Nube de AWS (AWS CAF)? (Seleccione DOS)",
    options: [
      { id: "a", text: "Gestión de rendimiento y capacidad" },
      { id: "b", text: "Ingeniería de datos" },
      { id: "c", text: "Integración continua y entrega continua (CI/CD)" },
      { id: "d", text: "Protección de infraestructura" },
      { id: "e", text: "Gestión de cambios y lanzamientos" },
    ],
    correctAnswers: ["b", "c"],
    explanation: {
      correct:
        "Ingeniería de datos y CI/CD son dos de las capacidades que están en la perspectiva de plataforma del AWS CAF. La perspectiva de plataforma ayuda a construir una plataforma de nube híbrida escalable y de nivel empresarial.",
      whyOthersWrong: {
        a: "La gestión de rendimiento y capacidad pertenece a la perspectiva de operaciones.",
        d: "La protección de infraestructura pertenece a la perspectiva de seguridad.",
        e: "La gestión de cambios y lanzamientos pertenece a la perspectiva de operaciones.",
      },
    },
    tags: ["caf", "plataforma", "cicd", "ingenieria-datos"],
  },
  {
    id: "clf-167",
    certificationId: "aws-clf-c02",
    domainId: "domain-3",
    type: "single",
    difficulty: "medium",
    question:
      "Una empresa sospecha que sus recursos de AWS están siendo usados para actividades ilegales. ¿A qué grupo o equipo de AWS debe notificar la empresa?",
    options: [
      { id: "a", text: "AWS Abuse Team" },
      { id: "b", text: "AWS Support Team" },
      { id: "c", text: "AWS Technical Account Managers" },
      { id: "d", text: "AWS Professional Services Team" },
    ],
    correctAnswers: ["a"],
    explanation: {
      correct:
        "En caso de actividades ilegales sospechadas involucrando recursos de AWS, la empresa debe notificar al AWS Abuse Team. Este equipo maneja casos de abuso y actividades maliciosas en la plataforma de AWS.",
      whyOthersWrong: {
        b: "Support Team ayuda con problemas técnicos, no con casos de abuso.",
        c: "TAMs asisten con optimización técnica y estratégica, no casos de abuso.",
        d: "Professional Services ayuda con implementaciones, no con casos de abuso.",
      },
    },
    tags: ["abuse-team", "seguridad", "actividades-ilegales", "reporte"],
  },
];

export default domain3Questions;
