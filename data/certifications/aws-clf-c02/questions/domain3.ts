import { Question } from "@/types";

// Dominio 3: Tecnología y servicios en la nube (34%)
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
];

export default domain3Questions;
