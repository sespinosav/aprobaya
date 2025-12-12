let questions = [{
    question: "1. ¿Qué servicio de AWS ayudará a una empresa a identificar al usuario que eliminó una instancia de Amazon EC2 ayer?",
    options: ["A. Amazon CloudWatch", "B. AWS Trusted Advisor", "C. AWS CloudTrail", "D. Amazon Inspector"],
    correctAnswer: "C. AWS CloudTrail",
    explanation: "AWS CloudTrail es un servicio que permite rastrear la actividad del usuario y el uso de API en su cuenta de AWS, esencial para identificar acciones específicas como eliminar una instancia EC2.",
    multiSelect: false
},
{
    question: "2. Una empresa necesita una red de entrega de contenido que proporcione datos seguros, video, aplicación y entrega de API a usuarios globalmente con baja latencia y altas velocidades de transferencia. ¿Qué servicio de AWS cumple estos requisitos?",
    options: ["A. Amazon CloudFront", "B. Elastic Load Balancing", "C. Amazon S3", "D. Amazon Elastic Transcoder"],
    correctAnswer: "A. Amazon CloudFront",
    explanation: "Amazon CloudFront es una red de entrega de contenido (CDN) que se integra con otros servicios de AWS para entregar contenido con baja latencia y altas velocidades de transferencia globalmente.",
    multiSelect: false
},
{
    question: "3. Amazon Elastic File System (Amazon EFS) y Amazon FSx ofrecen ¿qué tipo de almacenamiento?",
    options: ["A. Almacenamiento de archivos", "B. Almacenamiento de objetos", "C. Almacenamiento de bloques", "D. Almacenamiento de instancia"],
    correctAnswer: "A. Almacenamiento de archivos",
    explanation: "Tanto Amazon EFS como Amazon FSx ofrecen soluciones de almacenamiento de archivos, permitiendo acceso simultáneo a archivos y carpetas a través de una red.",
    multiSelect: false
},
{
    question: "4. Una empresa minorista está migrando su infraestructura de TI desde un centro de datos local a la nube de AWS. ¿Qué costos eliminará la empresa con esta migración? (Seleccione DOS.)",
    options: ["A. Costo de operaciones del centro de datos", "B. Costo de licencias de aplicaciones", "C. Costo de campañas de marketing", "D. Costo de hardware de servidores físicos", "E. Costo de gestión de red"],
    correctAnswer: ["A. Costo de operaciones del centro de datos", "D. Costo de hardware de servidores físicos"],
    explanation: "Al migrar a la nube de AWS, la empresa puede eliminar los costos asociados con las operaciones del centro de datos y el hardware de servidores físicos.",
    multiSelect: true
},
{
    question: "5. ¿Cuál de los siguientes actúa como un firewall a nivel de instancia para controlar el acceso entrante y saliente?",
    options: ["A. Lista de control de acceso de red", "B. Grupos de seguridad", "C. AWS Trusted Advisor", "D. Puertas de enlace privadas virtuales"],
    correctAnswer: "B. Grupos de seguridad",
    explanation: "Los grupos de seguridad actúan como firewalls a nivel de instancia, permitiéndole controlar el acceso entrante y saliente para instancias de Amazon EC2.",
    multiSelect: false
},
{
    question: "6. Una zona de disponibilidad consiste en:",
    options: ["A. Uno o más centros de datos en una sola ubicación", "B. Dos o más centros de datos en múltiples ubicaciones", "C. Uno o más hosts físicos en un solo centro de datos", "D. Dos o más hosts físicos en múltiples centros de datos"],
    correctAnswer: "A. Uno o más centros de datos en una sola ubicación",
    explanation: "Una zona de disponibilidad en AWS consiste en uno o más centros de datos aislados dentro de una región, cada uno con energía, refrigeración y seguridad física independientes.",
    multiSelect: false
},
{
    question: "7. ¿Cuáles de los siguientes son principios de diseño de la nube de AWS? (Seleccione DOS.)",
    options: ["A. Pagar por recursos de computación por adelantado", "B. Tomar decisiones basadas en datos para determinar el diseño arquitectónico de la nube", "C. Enfatizar procesos manuales para habilitar cambios frecuentes", "D. Probar sistemas a escala de producción", "E. Refinar procedimientos operativos con poca frecuencia"],
    correctAnswer: ["B. Tomar decisiones basadas en datos para determinar el diseño arquitectónico de la nube", "D. Probar sistemas a escala de producción"],
    explanation: "Tomar decisiones basadas en datos y probar sistemas a escala de producción son principios de diseño de la nube de AWS que ayudan a construir sistemas seguros, eficientes y operacionalmente sólidos.",
    multiSelect: true
},
{
    question: "8. ¿Qué herramienta o servicio de AWS proporciona recomendaciones para ayudar a los usuarios a obtener instancias de Amazon EC2 del tamaño correcto según los datos de uso histórico de la carga de trabajo?",
    options: [
        "A. Calculadora de precios de AWS",
        "B. AWS Compute Optimizer",
        "C. AWS App Runner",
        "D. AWS Systems Manager"
    ],
    correctAnswer: "B. AWS Compute Optimizer",
    explanation: "AWS Compute Optimizer proporciona recomendaciones para ayudar a los usuarios a obtener instancias de Amazon EC2 del tamaño correcto según los datos de uso histórico de la carga de trabajo.",
    multiSelect: false
},
{
    question: "9. ¿Qué tareas son responsabilidades de AWS según el Modelo de Responsabilidad Compartida de AWS? (Seleccione DOS.)",
    options: [
        "A. Parchear dispositivos de red de AWS",
        "B. Definir políticas de contraseñas de usuario",
        "C. Proporcionar seguridad física para recursos de computación",
        "D. Configurar grupos de seguridad",
        "E. Parchear el sistema operativo de una instancia de Amazon EC2"
    ],
    correctAnswer: ["A. Parchear dispositivos de red de AWS", "C. Proporcionar seguridad física para recursos de computación"],
    explanation: "Parchear dispositivos de red de AWS y proporcionar seguridad física para recursos de computación son tareas que son responsabilidades de AWS.",
    multiSelect: true
},
{
    question: "10. Un equipo de TI está administrando clústeres de servidores de base de datos MySQL. El equipo debe parchear la base de datos y tomar instantáneas de respaldo de los datos en los clústeres. La empresa quiere mover esta carga de trabajo a AWS para que estas tareas se completen automáticamente. ¿Qué debe hacer la empresa para cumplir estos requisitos?",
    options: [
        "A. Implementar clústeres de servidores de base de datos MySQL en instancias de Amazon EC2",
        "B. Usar Amazon RDS con una base de datos MySQL",
        "C. Usar una plantilla de AWS CloudFormation para implementar servidores de base de datos MySQL en instancias de Amazon EC2",
        "D. Migrar todos los datos de base de datos MySQL a Amazon S3"
    ],
    correctAnswer: "B. Usar Amazon RDS con una base de datos MySQL",
    explanation: "Usar Amazon RDS con una base de datos MySQL permite automatizar tareas como parcheo y respaldos.",
    multiSelect: false
},
{
    question: "11. Una empresa tiene una carga de trabajo que requiere que los datos sean recopilados, analizados y almacenados en las instalaciones. La empresa quiere extender el uso de servicios de AWS para funcionar en las instalaciones con acceso a la red de la empresa y a la VPC de la empresa. ¿Qué servicio de AWS cumple este requisito?",
    options: [
        "A. AWS Outposts",
        "B. AWS Storage Gateway",
        "C. AWS Direct Connect",
        "D. AWS Snowball"
    ],
    correctAnswer: "A. AWS Outposts",
    explanation: "AWS Outposts permite ejecutar servicios de AWS en las instalaciones, extendiendo AWS a entornos físicos mientras mantiene una experiencia de nube consistente.",
    multiSelect: false
},
{
    question: "12. Una empresa está construyendo una arquitectura sin servidor que conecta datos de aplicaciones de múltiples fuentes de datos. La empresa necesita una solución que no requiera código adicional. ¿Qué servicio de AWS cumple estos requisitos?",
    options: [
        "A. AWS Lambda",
        "B. Amazon Simple Queue Service (Amazon SQS)",
        "C. Amazon CloudWatch",
        "D. Amazon EventBridge"
    ],
    correctAnswer: "D. Amazon EventBridge",
    explanation: "Amazon EventBridge es una solución sin servidor que facilita la conexión de datos de aplicaciones de múltiples fuentes sin requerir código adicional.",
    multiSelect: false
},
{
    question: "13. Una empresa implementa su aplicación en instancias de Amazon EC2. La aplicación ocasionalmente experimenta aumentos repentinos en la demanda. La empresa quiere asegurarse de que su aplicación pueda responder a cambios en la demanda con el menor costo posible. ¿Qué servicio o herramienta de AWS cumplirá estos requisitos?",
    options: [
        "A. AWS Auto Scaling",
        "B. AWS Compute Optimizer",
        "C. AWS Cost Explorer",
        "D. Marco de Buena Arquitectura de AWS"
    ],
    correctAnswer: "A. AWS Auto Scaling",
    explanation: "AWS Auto Scaling ayuda a asegurar que la aplicación pueda satisfacer aumentos repentinos en la demanda de manera rentable.",
    multiSelect: false
},
{
    question: "14. ¿Cuáles de las siguientes son ventajas de la nube de AWS? (Seleccione DOS.)",
    options: [
        "A. Cambiar gasto variable por gasto de capital",
        "B. Economías masivas de escala",
        "C. Lanzar globalmente en minutos",
        "D. Enfocarse en administrar infraestructura de hardware",
        "E. Sobreaprovisionamiento para asegurar capacidad"
    ],
    correctAnswer: ["B. Economías masivas de escala", "C. Lanzar globalmente en minutos"],
    explanation: "La nube de AWS proporciona economías masivas de escala y la capacidad de lanzar recursos globalmente en minutos.",
    multiSelect: true
},
{
    question: "15. ¿Qué tareas son responsabilidades del cliente según el Modelo de Responsabilidad Compartida de AWS? (Seleccione DOS.)",
    options: [
        "A. Determinar dependencias de aplicaciones en sistemas operativos",
        "B. Proporcionar acceso de usuario con AWS Identity and Access Management (IAM)",
        "C. Asegurar la seguridad física del centro de datos en una zona de disponibilidad",
        "D. Parchear el hipervisor",
        "E. Asegurar la disponibilidad de red a través de zonas de disponibilidad"
    ],
    correctAnswer: ["A. Determinar dependencias de aplicaciones en sistemas operativos", "B. Proporcionar acceso de usuario con AWS Identity and Access Management (IAM)"],
    explanation: "Determinar dependencias de aplicaciones y proporcionar acceso de usuario usando AWS IAM son responsabilidades del cliente según el Modelo de Responsabilidad Compartida de AWS.",
    multiSelect: true
},
{
    question: "16. ¿Cuál de los siguientes promueve las mejores prácticas arquitectónicas de la nube de AWS para diseñar y operar sistemas confiables, seguros, eficientes y rentables?",
    options: [
        "A. Marco de aplicaciones sin servidor de AWS",
        "B. Soporte empresarial de AWS",
        "C. Principio de menor privilegio",
        "D. Marco de Buena Arquitectura de AWS"
    ],
    correctAnswer: "D. Marco de Buena Arquitectura de AWS",
    explanation: "El Marco de Buena Arquitectura de AWS promueve las mejores prácticas arquitectónicas de la nube de AWS para ayudar a diseñar y operar sistemas que son confiables, seguros, eficientes y rentables.",
    multiSelect: false
},
{
    question: "17. Usar Amazon Elastic Container Service (Amazon ECS) para dividir una arquitectura monolítica en microservicios es un ejemplo de:",
    options: [
        "A. Una arquitectura de acoplamiento débil",
        "B. Una arquitectura de acoplamiento fuerte",
        "C. Una arquitectura sin estado",
        "D. Una arquitectura con estado"
    ],
    correctAnswer: "A. Una arquitectura de acoplamiento débil",
    explanation: "Usar Amazon ECS para dividir una arquitectura monolítica en microservicios es un ejemplo de una arquitectura de acoplamiento débil, donde los componentes son independientes y se comunican a través de interfaces bien definidas.",
    multiSelect: false
},
{
    question: "18. Una empresa transfiere su infraestructura de las instalaciones a la nube de AWS. Ahora, la empresa puede aprovisionar instancias adicionales de Amazon EC2 cuando sea necesario. Con esta capacidad, la empresa puede lanzar nuevas campañas de marketing en 3 días en lugar de 3 semanas. ¿Qué beneficio de la nube de AWS demuestra este escenario?",
    options: [
        "A. Ahorro de costos",
        "B. Resiliencia operacional mejorada",
        "C. Aumento de agilidad empresarial",
        "D. Seguridad mejorada"
    ],
    correctAnswer: "C. Aumento de agilidad empresarial",
    explanation: "Este escenario demuestra el aumento de agilidad empresarial como un beneficio de la nube de AWS, permitiendo a la empresa responder rápidamente a las necesidades del mercado y lanzar campañas de marketing significativamente más rápido.",
    multiSelect: false
},
{
    question: "19. Una empresa está usando un servicio de terceros para respaldar 10 TB de datos en una biblioteca de cintas. El servidor de respaldo local se está quedando sin espacio. La empresa quiere usar servicios de AWS para los respaldos sin cambiar sus flujos de trabajo de respaldo existentes. ¿Qué servicio de AWS debe usar la empresa para cumplir estos requisitos?",
    options: [
        "A. Amazon Elastic Block Store (Amazon EBS)",
        "B. AWS Storage Gateway",
        "C. Amazon Elastic Container Service (Amazon ECS)",
        "D. AWS Lambda"
    ],
    correctAnswer: "B. AWS Storage Gateway",
    explanation: "La empresa debe usar AWS Storage Gateway, específicamente la opción Tape Gateway, para integrar sus flujos de trabajo de respaldo existentes con AWS sin necesidad de cambios significativos, permitiendo un respaldo eficiente a la nube.",
    multiSelect: false
},
{
    question: "20. Una empresa necesita monitorear continuamente su entorno para analizar la actividad de red y cuenta e identificar posibles amenazas de seguridad. ¿Qué servicio de AWS debe usar la empresa para satisfacer estas necesidades?",
    options: [
        "A. AWS Artifact",
        "B. Amazon Macie",
        "C. AWS Identity and Access Management (IAM)",
        "D. Amazon GuardDuty"
    ],
    correctAnswer: "D. Amazon GuardDuty",
    explanation: "Amazon GuardDuty es un servicio que proporciona detección de amenazas y monitoreo continuo para el entorno de AWS, analizando la actividad de red y cuenta para identificar comportamientos anómalos o no autorizados.",
    multiSelect: false
},
{
    question: "21. Un ingeniero de nube quiere conocer el porcentaje de unidades de computación asignadas que están en uso para una instancia específica de Amazon EC2. ¿Qué servicio de AWS puede proporcionar esta información?",
    options: [
        "A. AWS CloudTrail",
        "B. AWS Config",
        "C. Amazon CloudWatch",
        "D. AWS Artifact"
    ],
    correctAnswer: "C. Amazon CloudWatch",
    explanation: "Amazon CloudWatch puede proporcionar métricas detalladas sobre la utilización de instancias de Amazon EC2, incluido el porcentaje de unidades de computación asignadas en uso, permitiendo a los usuarios monitorear y optimizar el rendimiento.",
    multiSelect: false
},
{
    question: "22. ¿Qué servicio o característica de AWS se utiliza para solucionar problemas de conectividad de red entre instancias de Amazon EC2?",
    options: [
        "A. AWS Certificate Manager (ACM)",
        "B. Internet Gateway",
        "C. VPC Flow Logs",
        "D. AWS CloudHSM"
    ],
    correctAnswer: "C. VPC Flow Logs",
    explanation: "VPC Flow Logs permite a los usuarios capturar información sobre el tráfico IP que fluye hacia y desde las interfaces de red en su VPC, ayudando a solucionar problemas de conectividad de red entre instancias de Amazon EC2.",
    multiSelect: false
},
{
    question: "23. ¿Qué servicio de AWS proporciona almacenamiento de objetos altamente duradero?",
    options: [
        "A. Amazon S3",
        "B. Amazon Elastic File System (Amazon EFS)",
        "C. Amazon Elastic Block Store (Amazon EBS)",
        "D. Amazon FSx"
    ],
    correctAnswer: "A. Amazon S3",
    explanation: "Amazon S3 proporciona almacenamiento de objetos altamente duradero, diseñado para almacenar y recuperar cualquier cantidad de datos desde cualquier lugar, ofreciendo escalabilidad, seguridad, durabilidad y alta disponibilidad.",
    multiSelect: false
},
{
    question: "24. ¿Qué servicio o característica de AWS brinda a los usuarios la capacidad de aprovisionar una conexión de red privada dedicada desde su red interna a AWS?",
    options: [
        "A. AWS CloudHSM",
        "B. AWS Direct Connect",
        "C. AWS VPN",
        "D. Amazon Connect"
    ],
    correctAnswer: "B. AWS Direct Connect",
    explanation: "AWS Direct Connect permite a los usuarios establecer una conexión de red privada dedicada desde su red interna a AWS, lo que puede reducir los costos de red, aumentar el ancho de banda y proporcionar una conexión más consistente que las conexiones basadas en Internet.",
    multiSelect: false
},
{
    question: "25. Una empresa está usando un servicio de terceros para respaldar 10 TB de datos en una biblioteca de cintas. El servidor de respaldo local se está quedando sin espacio. La empresa quiere usar servicios de AWS para los respaldos sin cambiar sus flujos de trabajo de respaldo existentes. ¿Qué servicio de AWS debe usar la empresa para cumplir estos requisitos?",
    options: [
        "A. Amazon Elastic Block Store (Amazon EBS)",
        "B. AWS Storage Gateway",
        "C. Amazon Elastic Container Service (Amazon ECS)",
        "D. AWS Lambda"
    ],
    correctAnswer: "B. AWS Storage Gateway",
    explanation: "La empresa debe usar AWS Storage Gateway, específicamente la opción Tape Gateway, para integrar sus flujos de trabajo de respaldo existentes con AWS sin necesidad de cambios significativos, permitiendo un respaldo eficiente a la nube.",
    multiSelect: false
},
{
    question: "26. Una empresa necesita monitorear continuamente su entorno para analizar la actividad de red y cuenta e identificar posibles amenazas de seguridad. ¿Qué servicio de AWS debe usar la empresa para satisfacer estas necesidades?",
    options: [
        "A. AWS Artifact",
        "B. Amazon Macie",
        "C. AWS Identity and Access Management (IAM)",
        "D. Amazon GuardDuty"
    ],
    correctAnswer: "D. Amazon GuardDuty",
    explanation: "Amazon GuardDuty es un servicio que proporciona detección de amenazas y monitoreo continuo para el entorno de AWS, analizando la actividad de red y cuenta para identificar comportamientos anómalos o no autorizados.",
    multiSelect: false
},
{
    question: "27. Un ingeniero de nube quiere conocer el porcentaje de unidades de computación asignadas que están en uso para una instancia específica de Amazon EC2. ¿Qué servicio de AWS puede proporcionar esta información?",
    options: [
        "A. AWS CloudTrail",
        "B. AWS Config",
        "C. Amazon CloudWatch",
        "D. AWS Artifact"
    ],
    correctAnswer: "C. Amazon CloudWatch",
    explanation: "Amazon CloudWatch puede proporcionar métricas detalladas sobre la utilización de instancias de Amazon EC2, incluido el porcentaje de unidades de computación asignadas en uso, permitiendo a los usuarios monitorear y optimizar el rendimiento.",
    multiSelect: false
},
{
    question: "28. ¿Qué servicio o característica de AWS se utiliza para solucionar problemas de conectividad de red entre instancias de Amazon EC2?",
    options: [
        "A. AWS Certificate Manager (ACM)",
        "B. Internet Gateway",
        "C. VPC Flow Logs",
        "D. AWS CloudHSM"
    ],
    correctAnswer: "C. VPC Flow Logs",
    explanation: "VPC Flow Logs permite a los usuarios capturar información sobre el tráfico IP que fluye hacia y desde las interfaces de red en su VPC, ayudando a solucionar problemas de conectividad de red entre instancias de Amazon EC2.",
    multiSelect: false
},
{
    question: "29. ¿Qué servicio de AWS proporciona almacenamiento de objetos altamente duradero?",
    options: [
        "A. Amazon S3",
        "B. Amazon Elastic File System (Amazon EFS)",
        "C. Amazon Elastic Block Store (Amazon EBS)",
        "D. Amazon FSx"
    ],
    correctAnswer: "A. Amazon S3",
    explanation: "Amazon S3 proporciona almacenamiento de objetos altamente duradero, diseñado para almacenar y recuperar cualquier cantidad de datos desde cualquier lugar, ofreciendo escalabilidad, seguridad, durabilidad y alta disponibilidad.",
    multiSelect: false
},
{
    question: "30. Una empresa quiere que sus instancias de Amazon EC2 operen en un entorno altamente disponible, incluso en caso de un desastre natural en un área geográfica específica. ¿Qué solución logra este objetivo?",
    options: [
        "A. Usar instancias EC2 en una sola zona de disponibilidad",
        "B. Usar instancias EC2 en múltiples regiones de AWS",
        "C. Usar instancias EC2 en múltiples ubicaciones de borde",
        "D. Usar Amazon CloudFront con las instancias EC2 configuradas como origen"
    ],
    correctAnswer: "B. Usar instancias EC2 en múltiples regiones de AWS",
    explanation: "Operar instancias de Amazon EC2 en múltiples regiones de AWS puede asegurar alta disponibilidad y continuidad del servicio incluso en caso de una falla o desastre natural en un área geográfica específica.",
    multiSelect: false
},
{
    question: "31. ¿Qué servicio de AWS debe usar un ingeniero de nube para visualizar llamadas de API a servicios de AWS?",
    options: [
        "A. Amazon CloudWatch",
        "B. AWS CloudTrail",
        "C. AWS Config",
        "D. AWS Artifact"
    ],
    correctAnswer: "B. AWS CloudTrail",
    explanation: "AWS CloudTrail es el servicio que permite a los usuarios registrar, monitorear y retener eventos relacionados con llamadas de API en su cuenta de AWS, proporcionando visibilidad sobre la actividad del usuario y las operaciones realizadas dentro de su cuenta de AWS.",
    multiSelect: false
},
{
    question: "32. Una empresa necesita configurar reglas para identificar amenazas y proteger aplicaciones del acceso malicioso en la red. ¿Qué servicio de AWS debe usar la empresa para cumplir estos requisitos?",
    options: [
        "A. AWS Identity and Access Management (IAM)",
        "B. Amazon QuickSight",
        "C. AWS WAF",
        "D. Amazon Detective"
    ],
    correctAnswer: "C. AWS WAF",
    explanation: "AWS WAF es el servicio que permite a los usuarios crear reglas personalizadas para bloquear patrones de tráfico malicioso y proteger sus aplicaciones de amenazas web comunes.",
    multiSelect: false
},
{
    question: "33. Una empresa quiere migrar su almacén de datos relacional local a AWS. La información en el almacén de datos se usa para alimentar paneles de análisis. ¿Qué servicio de AWS debe usar la empresa para el almacén de datos?",
    options: [
        "A. Amazon ElastiCache",
        "B. Amazon Aurora",
        "C. Amazon RDS",
        "D. Amazon Redshift"
    ],
    correctAnswer: "D. Amazon Redshift",
    explanation: "Amazon Redshift es el servicio de almacenamiento de datos de AWS, específicamente diseñado para análisis de grandes volúmenes de datos e ideal para alimentar paneles de análisis con grandes conjuntos de datos.",
    multiSelect: false
},
{
    question: "34. Una empresa quiere alojar sus bases de datos relacionales en AWS. Las bases de datos tienen esquemas predefinidos que la empresa necesita replicar en AWS. ¿Qué servicios de AWS podría usar la empresa para las bases de datos? (Seleccione DOS.)",
    options: [
        "A. Amazon Aurora",
        "B. Amazon RDS",
        "C. Amazon DocumentDB (con compatibilidad con MongoDB)",
        "D. Amazon Neptune",
        "E. Amazon DynamoDB"
    ],
    correctAnswer: ["A. Amazon Aurora", "B. Amazon RDS"],
    explanation: "Amazon Aurora y Amazon RDS son servicios de AWS que ofrecen soluciones para alojar bases de datos relacionales con esquemas predefinidos, proporcionando la capacidad de replicar, escalar y administrar estas bases de datos de manera eficiente.",
    multiSelect: true
},
{
    question: "35. Una empresa minorista está construyendo una nueva aplicación móvil. La empresa está evaluando si construir la aplicación en un centro de datos local o en la nube de AWS. ¿Qué servicio debe considerar la empresa?",
    options: [
        "A. Amazon FSx para Windows File Server",
        "B. Escritorio virtual Windows de Amazon WorkSpaces",
        "C. AWS Directory Service para Microsoft Active Directory",
        "D. Amazon RDS para Microsoft SQL Server"
    ],
    correctAnswer: "C. AWS Directory Service para Microsoft Active Directory",
    explanation: "AWS Directory Service para Microsoft Active Directory permite a la empresa utilizar un servicio administrado para Active Directory en AWS, facilitando la integración y gestión de usuarios y recursos de seguridad para la nueva aplicación móvil.",
    multiSelect: false
},
{
    question: "36. ¿Qué principios de diseño respaldan el pilar de confiabilidad del Marco de Buena Arquitectura de AWS? (Seleccione DOS.)",
    options: [
        "A. Realizar operaciones como código",
        "B. Habilitar trazabilidad",
        "C. Escalar automáticamente para satisfacer la demanda",
        "D. Implementar recursos globalmente para mejorar el tiempo de respuesta",
        "E. Recuperarse automáticamente de fallas"
    ],
    correctAnswer: ["C. Escalar automáticamente para satisfacer la demanda", "E. Recuperarse automáticamente de fallas"],
    explanation: "Los principios de escalar automáticamente para satisfacer la demanda y recuperarse automáticamente de fallas respaldan el pilar de confiabilidad del Marco de Buena Arquitectura de AWS, asegurando que los sistemas puedan manejar cambios en la demanda y recuperarse de interrupciones.",
    multiSelect: true
},
{
    question: "37. Un ingeniero de nube quiere conocer el porcentaje de unidades de computación asignadas que están en uso para una instancia específica de Amazon EC2. ¿Qué servicio de AWS puede proporcionar esta información?",
    options: [
        "A. AWS CloudTrail",
        "B. AWS Config",
        "C. Amazon CloudWatch",
        "D. AWS Artifact"
    ],
    correctAnswer: "C. Amazon CloudWatch",
    explanation: "Amazon CloudWatch puede proporcionar esta información a través de métricas que detallan la utilización de instancias de Amazon EC2, permitiendo a los usuarios ver y optimizar el uso de recursos.",
    multiSelect: false
},
{
    question: "38. ¿Qué servicio o característica de AWS se utiliza para solucionar problemas de conectividad de red entre instancias de Amazon EC2?",
    options: [
        "A. AWS Certificate Manager (ACM)",
        "B. Internet Gateway",
        "C. VPC Flow Logs",
        "D. AWS CloudHSM"
    ],
    correctAnswer: "C. VPC Flow Logs",
    explanation: "VPC Flow Logs es una característica que permite a los usuarios capturar información sobre el tráfico de red hacia y desde sus VPC, ayudando en la solución de problemas de conectividad.",
    multiSelect: false
},
{
    question: "39. ¿Qué servicio de AWS proporciona almacenamiento de objetos altamente duradero?",
    options: [
        "A. Amazon S3",
        "B. Amazon Elastic File System (Amazon EFS)",
        "C. Amazon Elastic Block Store (Amazon EBS)",
        "D. Amazon FSx"
    ],
    correctAnswer: "A. Amazon S3",
    explanation: "Amazon S3 proporciona almacenamiento de objetos altamente duradero, ideal para una amplia variedad de casos de uso de almacenamiento en la nube.",
    multiSelect: false
},
{
    question: "40. ¿Qué servicio o característica de AWS brinda a los usuarios la capacidad de aprovisionar una conexión de red privada dedicada desde su red interna a AWS?",
    options: [
        "A. AWS CloudHSM",
        "B. AWS Direct Connect",
        "C. AWS VPN",
        "D. Amazon Connect"
    ],
    correctAnswer: "B. AWS Direct Connect",
    explanation: "AWS Direct Connect permite a los usuarios establecer una conexión de red privada dedicada desde sus redes internas a AWS, proporcionando una experiencia de red más consistente con mayor ancho de banda.",
    multiSelect: false
},
{
    question: "41. Una empresa quiere que sus instancias de Amazon EC2 operen en un entorno altamente disponible, incluso en caso de un desastre natural en un área geográfica específica. ¿Qué solución logra este objetivo?",
    options: [
        "A. Usar instancias EC2 en una sola zona de disponibilidad",
        "B. Usar instancias EC2 en múltiples regiones de AWS",
        "C. Usar instancias EC2 en múltiples ubicaciones de borde",
        "D. Usar Amazon CloudFront con las instancias EC2 configuradas como origen"
    ],
    correctAnswer: "B. Usar instancias EC2 en múltiples regiones de AWS",
    explanation: "Usar instancias EC2 en múltiples regiones de AWS puede ayudar a asegurar la alta disponibilidad de la aplicación, incluso en caso de desastres naturales que afecten un área geográfica específica.",
    multiSelect: false
},
{
    question: "42. ¿Cuál es el método recomendado para asegurar datos sensibles en tránsito en AWS?",
    options: [
        "A. Usar AWS Shield",
        "B. Usar SSL/TLS",
        "C. Usar AWS WAF",
        "D. Usar políticas de seguridad de IAM"
    ],
    correctAnswer: "B. Usar SSL/TLS",
    explanation: "El método recomendado para asegurar datos sensibles en tránsito en AWS es usar SSL/TLS (Secure Socket Layer/Transport Layer Security), que cifra los datos en tránsito y asegura una comunicación segura.",
    multiSelect: false
},
{
    question: "43. ¿Qué automatiza Amazon RDS que beneficia a los administradores de bases de datos?",
    options: [
        "A. Escribir consultas SQL",
        "B. Diseño de esquemas de base de datos",
        "C. Respaldar y recuperar instancias de base de datos",
        "D. Generar informes empresariales"
    ],
    correctAnswer: "C. Respaldar y recuperar instancias de base de datos",
    explanation: "Amazon RDS automatiza tareas de administración de bases de datos como respaldos, parcheo y recuperación, lo que beneficia a los administradores de bases de datos al reducir la carga de trabajo manual.",
    multiSelect: false
},
{
    question: "44. ¿Qué servicio de AWS es mejor para distribuir tráfico entre múltiples instancias de Amazon EC2?",
    options: [
        "A. Amazon EC2 Auto Scaling",
        "B. AWS Direct Connect",
        "C. Amazon Route 53",
        "D. Elastic Load Balancer"
    ],
    correctAnswer: "D. Elastic Load Balancer",
    explanation: "Elastic Load Balancer (ELB) es el servicio de AWS diseñado para distribuir automáticamente el tráfico entrante entre múltiples instancias de Amazon EC2, asegurando alta disponibilidad y escalabilidad de la aplicación.",
    multiSelect: false
},
{
    question: "45. ¿Cuál es el propósito de AWS CloudFormation?",
    options: [
        "A. Monitorear el rendimiento de aplicaciones",
        "B. Administrar la seguridad de red",
        "C. Aprovisionar y administrar recursos de AWS",
        "D. Automatizar la implementación de aplicaciones"
    ],
    correctAnswer: "C. Aprovisionar y administrar recursos de AWS",
    explanation: "AWS CloudFormation permite a los usuarios aprovisionar y administrar recursos de AWS, usando 'plantillas' para crear y administrar una colección de recursos relacionados, automatizando su infraestructura como código.",
    multiSelect: false
},
{
    question: "46. ¿Cómo se calculan los costos en Amazon S3?",
    options: [
        "A. Basado en el número de solicitudes GET",
        "B. Basado en el número de objetos almacenados",
        "C. Basado en el tamaño total de datos almacenados y transferencia de datos",
        "D. Basado en la duración del almacenamiento de datos"
    ],
    correctAnswer: "C. Basado en el tamaño total de datos almacenados y transferencia de datos",
    explanation: "Los costos en Amazon S3 se calculan en función del tamaño total de los datos almacenados y la transferencia de datos, incluido el almacenamiento de objetos, solicitudes y transferencias de datos.",
    multiSelect: false
},
{
    question: "47. ¿Qué servicio de AWS ayuda a detectar fallas de seguridad en aplicaciones?",
    options: [
        "A. AWS Inspector",
        "B. AWS Shield",
        "C. Amazon GuardDuty",
        "D. AWS WAF"
    ],
    correctAnswer: "A. AWS Inspector",
    explanation: "AWS Inspector es un servicio automatizado de evaluación de seguridad que ayuda a mejorar la seguridad y el cumplimiento de las aplicaciones al detectar vulnerabilidades de seguridad y fallas.",
    multiSelect: false
},
{
    question: "48. ¿Qué característica describe a Amazon DynamoDB?",
    options: [
        "A. Base de datos relacional",
        "B. Base de datos de documentos",
        "C. Base de datos NoSQL",
        "D. Almacén de datos"
    ],
    correctAnswer: "C. Base de datos NoSQL",
    explanation: "Amazon DynamoDB es un servicio de base de datos NoSQL rápido y flexible, diseñado para aplicaciones a escala de Internet, proporcionando alto rendimiento, escalabilidad y confiabilidad.",
    multiSelect: false
},
{
    question: "49. ¿Qué permite AWS Lambda a los desarrolladores hacer?",
    options: [
        "A. Administrar instancias EC2",
        "B. Ejecutar código en respuesta a desencadenadores",
        "C. Asignar automáticamente IPs elásticas",
        "D. Monitorear aplicaciones en tiempo real"
    ],
    correctAnswer: "B. Ejecutar código en respuesta a desencadenadores",
    explanation: "AWS Lambda permite a los desarrolladores ejecutar código en respuesta a desencadenadores como cambios de datos o solicitudes de usuario, sin aprovisionar o administrar servidores.",
    multiSelect: false
},
{
    question: "50. ¿Cuál es el propósito principal de Amazon S3?",
    options: [
        "A. Ejecutar funciones sin servidor",
        "B. Almacenamiento de objetos escalable",
        "C. Alojar aplicaciones web",
        "D. Procesamiento de datos a gran escala"
    ],
    correctAnswer: "B. Almacenamiento de objetos escalable",
    explanation: "El propósito principal de Amazon S3 es proporcionar almacenamiento de objetos escalable, con durabilidad y disponibilidad de datos para una amplia gama de casos de uso.",
    multiSelect: false
},
{
    question: "51. ¿Qué es AWS Direct Connect?",
    options: [
        "A. Un servicio para conectar redes locales a AWS",
        "B. Una herramienta para transferir archivos grandes",
        "C. Un servicio de mensajería instantánea",
        "D. Un sistema de gestión de bases de datos"
    ],
    correctAnswer: "A. Un servicio para conectar redes locales a AWS",
    explanation: "AWS Direct Connect es un servicio que proporciona una conexión de red dedicada desde su infraestructura local a AWS, reduciendo los costos de red, aumentando el ancho de banda y proporcionando una experiencia de red más consistente.",
    multiSelect: false
},
{
    question: "52. ¿Qué servicio de AWS debe usar un ingeniero de nube para visualizar llamadas de API a servicios de AWS?",
    options: [
        "A. Amazon CloudWatch",
        "B. AWS CloudTrail",
        "C. AWS Config",
        "D. AWS Artifact"
    ],
    correctAnswer: "B. AWS CloudTrail",
    explanation: "AWS CloudTrail es un servicio que proporciona un historial de llamadas de API de AWS para su cuenta de AWS, permitiendo a los usuarios auditar y revisar la actividad de la cuenta.",
    multiSelect: false
},
{
    question: "53. ¿Cómo puede un usuario de AWS realizar evaluaciones de seguridad en instancias de Amazon EC2, puertas de enlace NAT y balanceadores de carga elásticos de manera aprobada por AWS?",
    options: [
        "A. Inundar un objetivo con solicitudes",
        "B. Usar Amazon Inspector",
        "C. Realizar pruebas de penetración",
        "D. Usar el Panel de estado del servicio de AWS"
    ],
    correctAnswer: "B. Usar Amazon Inspector",
    explanation: "Amazon Inspector es un servicio automatizado de evaluación de seguridad que ayuda a mejorar la seguridad y el cumplimiento de las aplicaciones implementadas en AWS. Después de realizar una evaluación, Amazon Inspector produce una lista detallada de hallazgos de seguridad priorizados por nivel de gravedad.",
    multiSelect: false
},
{
    question: "54. ¿Qué factores impactan los costos en la nube de AWS? (Seleccione DOS.)",
    options: [
        "A. Número de funciones de AWS Lambda no utilizadas",
        "B. Número de buckets de Amazon S3 configurados",
        "C. Transferencia de datos de entrada sin aceleración",
        "D. Transferencia de datos de salida sin aceleración",
        "E. Recursos de computación que están actualmente en uso"
    ],
    correctAnswer: ["D. Transferencia de datos de salida sin aceleración", "E. Recursos de computación que están actualmente en uso"],
    explanation: "La transferencia de datos de salida sin aceleración y los recursos de computación que están actualmente en uso son factores que impactan los costos en la nube de AWS.",
    multiSelect: true
},
{
    question: "55. ¿Cuál es un principio de eficiencia de costos relacionado con la nube de AWS?",
    options: [
        "A. Dimensionar adecuadamente los servicios según las necesidades de capacidad",
        "B. Usar el Panel de facturación para acceder a información mensual de la cuenta",
        "C. Usar AWS Organizations para combinar los gastos de múltiples cuentas en una sola factura",
        "D. Etiquetar todos los recursos de AWS"
    ],
    correctAnswer: "A. Dimensionar adecuadamente los servicios según las necesidades de capacidad",
    explanation: "Uno de los principios de eficiencia de costos relacionados con la nube de AWS es dimensionar adecuadamente los servicios según las necesidades de capacidad. Esto significa elegir el tipo y tamaño más apropiados de recursos de AWS para cumplir con los requisitos de rendimiento y escalabilidad de las aplicaciones, evitando el sobreaprovisio namiento o el subaprovisionamiento.",
    multiSelect: false
},
{
    question: "56. Una empresa está configurando su entorno en la nube de AWS. Los administradores de la empresa necesitan agrupar usuarios y aplicar permisos al grupo. ¿Qué servicio o característica de AWS puede usar la empresa para cumplir estos requisitos?",
    options: [
        "A. AWS Organizations",
        "B. Grupos de recursos",
        "C. Etiquetado de recursos",
        "D. AWS Identity and Access Management (IAM)"
    ],
    correctAnswer: "D. AWS Identity and Access Management (IAM)",
    explanation: "El servicio o característica de AWS que la empresa puede usar para agrupar usuarios y aplicar permisos al grupo es AWS Identity and Access Management (IAM). IAM permite crear y administrar usuarios y grupos y asignar políticas que definen permisos para los usuarios en los grupos.",
    multiSelect: false
},
{
    question: "57. Una empresa quiere asegurarse de que dos instancias de Amazon EC2 estén en centros de datos separados con latencia de comunicación mínima entre los centros. ¿Cómo puede la empresa cumplir este requisito?",
    options: [
        "A. Colocar las instancias EC2 en dos regiones de AWS separadas conectadas con una conexión de emparejamiento de VPC",
        "B. Colocar las instancias EC2 en dos zonas de disponibilidad separadas dentro de la misma región de AWS",
        "C. Colocar una instancia EC2 en las instalaciones y la otra en una región de AWS. Luego conectarlas usando una conexión AWS VPN",
        "D. Colocar ambas instancias EC2 en un grupo de ubicación para ancho de banda dedicado"
    ],
    correctAnswer: "B. Colocar las instancias EC2 en dos zonas de disponibilidad separadas dentro de la misma región de AWS",
    explanation: "Colocar las instancias EC2 en dos zonas de disponibilidad separadas dentro de la misma región de AWS es la mejor manera de cumplir el requisito. Las zonas de disponibilidad son ubicaciones aisladas dentro de una región de AWS que tienen energía, refrigeración y seguridad física independientes, y están conectadas entre sí con redes de alto ancho de banda y baja latencia.",
    multiSelect: false
},
{
    question: "58. Un ingeniero de seguridad quiere una solución de AWS de un solo inquilino para crear, controlar y administrar sus propias claves criptográficas para cumplir con los requisitos regulatorios de seguridad de datos. ¿Qué servicio de AWS debe usar el ingeniero?",
    options: [
        "A. AWS Key Management Service (AWS KMS)",
        "B. AWS Certificate Manager (ACM)",
        "C. AWS CloudHSM",
        "D. AWS Systems Manager"
    ],
    correctAnswer: "C. AWS CloudHSM",
    explanation: "El servicio de AWS que el ingeniero debe usar es AWS CloudHSM. AWS CloudHSM proporciona módulos de seguridad de hardware (HSM) dedicados que permiten a los clientes crear, controlar y administrar sus propias claves criptográficas en la nube de AWS.",
    multiSelect: false
},
{
    question: "59. Una empresa está diseñando una solución de gestión de acceso e identidad para una aplicación. La empresa quiere que los usuarios puedan usar sus cuentas de redes sociales, correo electrónico o compras en línea para acceder a la aplicación. ¿Qué servicio de AWS proporciona esta funcionalidad?",
    options: [
        "A. AWS IAM Identity Center (AWS Single Sign-On)",
        "B. AWS Config",
        "C. Amazon Cognito",
        "D. AWS Identity and Access Management (IAM)"
    ],
    correctAnswer: "C. Amazon Cognito",
    explanation: "La respuesta correcta es C porque Amazon Cognito proporciona identidad de usuario y autenticación para aplicaciones web y móviles. Amazon Cognito permite a los usuarios iniciar sesión con sus cuentas de redes sociales, correo electrónico o compras en línea.",
    multiSelect: false
},
{
    question: "60. ¿Cuál es el beneficio de migrar a la nube de AWS en términos de mejorar el tiempo de comercialización?",
    options: [
        "A. Velocidad de implementación reducida",
        "B. Mayor seguridad de aplicaciones",
        "C. Mayor agilidad empresarial",
        "D. Mayor capacidad de respaldo"
    ],
    correctAnswer: "C. Mayor agilidad empresarial",
    explanation: "Mayor agilidad empresarial es un beneficio de migrar a la nube de AWS en términos de mejorar el tiempo de comercialización.",
    multiSelect: false
},
{
    question: "61. ¿Qué beneficio está incluido en el plan AWS Enterprise Support?",
    options: [
        "A. Soporte de AWS Partner Network (APN) sin costo adicional",
        "B. Soporte designado de un administrador de cuenta técnica (TAM) de AWS",
        "C. Soporte en sitio de ingenieros de AWS",
        "D. Cumplimiento administrado de AWS como código con AWS Config"
    ],
    correctAnswer: "B. Soporte designado de un administrador de cuenta técnica (TAM) de AWS",
    explanation: "El plan AWS Enterprise Support es el nivel más alto de soporte que proporciona a los clientes un servicio tipo conserje donde el enfoque principal es ayudarlos a lograr sus resultados y encontrar éxito en la nube.",
    multiSelect: false
},
{
    question: "62. Una empresa quiere rastrear los costos del servicio de su cuenta de AWS. La empresa también quiere recibir notificaciones cuando los costos previstos alcancen un nivel específico. ¿Qué servicio o herramienta de AWS proporciona esta funcionalidad?",
    options: [
        "A. AWS Budgets",
        "B. AWS Cost Explorer",
        "C. Planes de ahorro",
        "D. AWS Billing Conductor"
    ],
    correctAnswer: "A. AWS Budgets",
    explanation: "AWS Budgets le permite establecer presupuestos personalizados que le alertan cuando sus costos o uso exceden (o se prevé que excedan) su monto presupuestado.",
    multiSelect: false
},
{
    question: "63. ¿Qué pilar del Marco de Buena Arquitectura de AWS se centra en el retorno de inversión de migrar a la nube de AWS?",
    options: [
        "A. Sostenibilidad",
        "B. Optimización de costos",
        "C. Excelencia operativa",
        "D. Confiabilidad"
    ],
    correctAnswer: "B. Optimización de costos",
    explanation: "La optimización de costos es el pilar del Marco de Buena Arquitectura de AWS que se centra en el retorno de inversión de migrar a la nube de AWS.",
    multiSelect: false
},
{
    question: "64. ¿Qué pilar del Marco de Buena Arquitectura de AWS se centra en la capacidad de ejecutar cargas de trabajo de manera efectiva, obtener información sobre las operaciones y mejorar continuamente los procesos y procedimientos de soporte?",
    options: [
        "A. Optimización de costos",
        "B. Confiabilidad",
        "C. Excelencia operativa",
        "D. Eficiencia del rendimiento"
    ],
    correctAnswer: "C. Excelencia operativa",
    explanation: "El pilar de Excelencia operativa del Marco de Buena Arquitectura de AWS se centra en la capacidad de ejecutar cargas de trabajo de manera efectiva, obtener información sobre las operaciones y mejorar continuamente los procesos y procedimientos de soporte.",
    multiSelect: false
},
{
    question: "65. ¿Cuál de las siguientes es una característica del usuario raíz de la cuenta de AWS?",
    options: [
        "A. El usuario raíz es el único usuario que puede configurarse con autenticación multifactor (MFA).",
        "B. El usuario raíz es el único usuario que puede acceder a la Consola de administración de AWS.",
        "C. El usuario raíz es la primera identidad de inicio de sesión disponible cuando se crea una cuenta de AWS.",
        "D. El usuario raíz tiene una contraseña que no se puede cambiar."
    ],
    correctAnswer: "C. El usuario raíz es la primera identidad de inicio de sesión disponible cuando se crea una cuenta de AWS.",
    explanation: "El usuario raíz de la cuenta de AWS es la primera identidad de inicio de sesión disponible cuando se crea una cuenta de AWS. Tiene acceso completo a todos los servicios y recursos de AWS en la cuenta.",
    multiSelect: false
},
{
    question: "66. ¿Qué opciones pone AWS a disposición de los clientes que quieren aprender sobre seguridad en la nube en un entorno dirigido por instructores? (Seleccione DOS.)",
    options: [
        "A. AWS Trusted Advisor",
        "B. Charlas técnicas en línea de AWS",
        "C. Blog de AWS",
        "D. Foros de AWS",
        "E. Capacitación en aula de AWS"
    ],
    correctAnswer: ["B. Charlas técnicas en línea de AWS", "E. Capacitación en aula de AWS"],
    explanation: "Las opciones correctas son B y E porque las Charlas técnicas en línea de AWS y la Capacitación en aula de AWS son opciones que AWS pone a disposición de los clientes que quieren aprender sobre seguridad en la nube en un entorno dirigido por instructores.",
    multiSelect: true
},
{
    question: "67. ¿Qué servicio de AWS usa una combinación de publicadores y suscriptores?",
    options: [
        "A. AWS Lambda",
        "B. Amazon Simple Notification Service (Amazon SNS)",
        "C. Amazon CloudWatch",
        "D. AWS CloudFormation"
    ],
    correctAnswer: "B. Amazon Simple Notification Service (Amazon SNS)",
    explanation: "Amazon Simple Notification Service (Amazon SNS) es un servicio que ofrece mensajería pub/sub completamente administrada. La mensajería pub/sub es un patrón que usa una combinación de publicadores y suscriptores.",
    multiSelect: false
},
{
    question: "68. ¿Cuáles de las siguientes son ventajas que recibe una empresa al mover una carga de trabajo de producción local a AWS? (Seleccione DOS.)",
    options: [
        "A. AWS capacita al personal de la empresa en el uso de todos los servicios de AWS.",
        "B. AWS administra toda la seguridad de la nube.",
        "C. AWS proporciona soporte gratuito de administradores de cuenta técnica (TAM).",
        "D. AWS proporciona alta disponibilidad.",
        "E. AWS proporciona economías de escala."
    ],
    correctAnswer: ["D. AWS proporciona alta disponibilidad.", "E. AWS proporciona economías de escala."],
    explanation: "Las respuestas correctas son D y E porque AWS proporciona alta disponibilidad y AWS proporciona economías de escala, que son ventajas que recibe una empresa al mover una carga de trabajo de producción local a AWS. La alta disponibilidad significa que AWS tiene una infraestructura global que permite a los clientes implementar sus aplicaciones y datos en múltiples regiones y zonas de disponibilidad. Las economías de escala significan que AWS puede lograr costos variables más bajos que los que los clientes pueden lograr por su cuenta.",
    multiSelect: true
},
{
    question: "69. ¿Cuál de los siguientes representa un concepto de nube que esta arquitectura representa al implementar una aplicación en múltiples regiones de AWS y configurar conmutación por error automática entre esas regiones?",
    options: [
        "A. Seguridad",
        "B. Confiabilidad",
        "C. Escalabilidad",
        "D. Optimización de costos"
    ],
    correctAnswer: "B. Confiabilidad",
    explanation: "La confiabilidad es el concepto de nube que esta arquitectura representa. La confiabilidad es la capacidad de un sistema para recuperarse de interrupciones de infraestructura o servicio, adquirir dinámicamente recursos informáticos para satisfacer la demanda y mitigar interrupciones como configuraciones incorrectas o problemas de red transitorios. Implementar una aplicación en múltiples regiones de AWS y configurar conmutación por error automática entre esas regiones aumenta la confiabilidad de la aplicación al reducir el impacto de fallas regionales y aumentar la disponibilidad de la aplicación.",
    multiSelect: false
},
{
    question: "70. ¿Cuál de los siguientes es un beneficio de desacoplar una arquitectura de nube de AWS?",
    options: [
        "A. Latencia reducida",
        "B. Capacidad de actualizar componentes independientemente",
        "C. Costos disminuidos",
        "D. Menos componentes que administrar"
    ],
    correctAnswer: "B. Capacidad de actualizar componentes independientemente",
    explanation: "Un beneficio de desacoplar una arquitectura de nube de AWS es la capacidad de actualizar componentes independientemente. El desacoplamiento es una forma de diseñar sistemas para reducir interdependencias y minimizar el impacto de los cambios. El desacoplamiento permite que los componentes interactúen entre sí a través de interfaces bien definidas, en lugar de referencias directas. Esto reduce el riesgo de que fallas y errores se propaguen por todo el sistema y permite mayor escalabilidad, disponibilidad y mantenibilidad. Al desacoplar una arquitectura de nube de AWS, el usuario puede actualizar o modificar un componente sin afectar a los otros componentes.",
    multiSelect: false
},
{
    question: "71. Una empresa está lanzando una nueva aplicación en la nube de AWS. La aplicación se ejecutará en una instancia de Amazon EC2. Se necesitarán más instancias EC2 cuando aumente la carga de trabajo. ¿Qué servicio o herramienta de AWS puede usar la empresa para lanzar el número de instancias EC2 requeridas para manejar la carga de trabajo?",
    options: [
        "A. Elastic Load Balancing",
        "B. Amazon EC2 Auto Scaling",
        "C. AWS App2Container (A2C)",
        "D. AWS Systems Manager"
    ],
    correctAnswer: "B. Amazon EC2 Auto Scaling",
    explanation: "Amazon EC2 Auto Scaling es el servicio o herramienta de AWS que puede ayudar a la empresa a lanzar el número de instancias EC2 requeridas para manejar la carga de trabajo. Amazon EC2 Auto Scaling ajusta automáticamente la capacidad de las instancias EC2 según la demanda y las políticas de escalado predefinidas. Amazon EC2 Auto Scaling también ayuda a mejorar la disponibilidad y reducir los costos escalando hacia adentro y hacia afuera según sea necesario.",
    multiSelect: false
},
{
    question: "72. ¿Cuáles de los siguientes servicios o características de AWS permiten la notación de bloque CIDR al proporcionar un rango de direcciones IP? (Seleccione DOS.)",
    options: [
        "A. Grupos de seguridad",
        "B. Amazon Machine Image (AMI)",
        "C. Lista de control de acceso de red (ACL de red)",
        "D. AWS Budgets",
        "E. Amazon Elastic Block Store (Amazon EBS)"
    ],
    correctAnswer: ["A. Grupos de seguridad", "C. Lista de control de acceso de red (ACL de red)"],
    explanation: "Las respuestas correctas son A y C porque los grupos de seguridad y las listas de control de acceso de red (ACL de red) son servicios o características de AWS que permiten la notación de bloque CIDR al proporcionar un rango de direcciones IP. Los grupos de seguridad actúan como un firewall virtual para las instancias de Amazon EC2 asociadas, controlando el tráfico entrante y saliente a nivel de instancia. Las ACL de red actúan como un firewall para las subredes asociadas, controlando el tráfico entrante y saliente a nivel de subred. Tanto los grupos de seguridad como las ACL de red usan notación de bloque CIDR para especificar los rangos de direcciones IP que están permitidos o denegados.",
    multiSelect: true
},
{
    question: "73. ¿Cuál de los siguientes servicios de AWS proporciona la capacidad de alojar una base de datos NoSQL en la nube de AWS?",
    options: [
        "A. Amazon Aurora",
        "B. Amazon DynamoDB",
        "C. Amazon RDS",
        "D. Amazon Redshift"
    ],
    correctAnswer: "B. Amazon DynamoDB",
    explanation: "Amazon DynamoDB es un servicio de base de datos NoSQL completamente administrado que proporciona un rendimiento rápido y predecible con escalabilidad sin problemas. Admite modelos de datos de clave-valor y documentos, y le permite crear tablas que pueden almacenar y recuperar cualquier cantidad de datos y atender cualquier nivel de tráfico de solicitudes. También puede usar DynamoDB Streams para capturar cambios en elementos de datos en tablas de DynamoDB.",
    multiSelect: false
},
{
    question: "74. ¿Qué servicio de AWS puede usar un usuario para identificar cualquier grupo de seguridad que permita tráfico SSH entrante sin restricciones?",
    options: [
        "A. Amazon Cognito",
        "B. AWS Shield",
        "C. Amazon Macie",
        "D. AWS Trusted Advisor"
    ],
    correctAnswer: "D. AWS Trusted Advisor",
    explanation: "La respuesta correcta para la pregunta es D porque AWS Trusted Advisor es un servicio de AWS que se puede usar para realizar la tarea de identificar cualquier grupo de seguridad que permita tráfico SSH entrante sin restricciones. AWS Trusted Advisor inspecciona el entorno de AWS del cliente e identifica formas de optimizar su infraestructura de AWS, mejorar la seguridad y el rendimiento, reducir los costos y monitorear las cuotas de servicio. Una de las verificaciones que realiza Trusted Advisor es la verificación de Grupos de seguridad - Puertos específicos sin restricciones, que marca los grupos de seguridad que permiten acceso sin restricciones a puertos específicos como el puerto 22 para SSH. Los clientes pueden usar esta verificación para revisar y modificar las reglas del grupo de seguridad para restringir el acceso SSH solo a fuentes autorizadas.",
    multiSelect: false
},
{
    question: "75. Una empresa quiere usar la nube de AWS para administrar el acceso y los permisos para sus aplicaciones de Software como servicio (SaaS) de terceros. La empresa quiere usar un portal donde los usuarios finales puedan acceder a las cuentas de AWS y aplicaciones asignadas en la nube.",
    options: [
        "A. Amazon Cognito",
        "B. AWS IAM Identity Center (AWS Single Sign-On)",
        "C. AWS Identity and Access Management (IAM)",
        "D. AWS Directory Service para Microsoft Active Directory"
    ],
    correctAnswer: "B. AWS IAM Identity Center (AWS Single Sign-On)",
    explanation: "AWS IAM Identity Center (AWS Single Sign-On) es el servicio de AWS que la empresa debe usar para cumplir con los requisitos de administrar el acceso y los permisos para sus aplicaciones SaaS de terceros. AWS Single Sign-On es un servicio basado en la nube que facilita la administración centralizada del acceso de inicio de sesión único (SSO) a múltiples cuentas de AWS y aplicaciones empresariales. Puede usar AWS Single Sign-On para permitir que sus usuarios inicien sesión en un portal de usuario con sus credenciales corporativas y accedan a todas sus cuentas de AWS y aplicaciones asignadas desde un solo lugar.",
    multiSelect: false
},
{
    question: "76. ¿Qué servicio de AWS es un servicio web DNS altamente disponible y escalable?",
    options: [
        "A. Amazon VPC",
        "B. Amazon CloudFront",
        "C. Amazon Route 53",
        "D. Amazon Connect"
    ],
    correctAnswer: "C. Amazon Route 53",
    explanation: "Amazon Route 53 es un servicio web DNS altamente disponible y escalable. Está diseñado para brindar a desarrolladores y empresas una forma extremadamente confiable y rentable de enrutar a los usuarios finales a aplicaciones de Internet traduciendo nombres a las direcciones IP numéricas que las computadoras usan para conectarse entre sí. Amazon Route 53 también ofrece otras características como verificaciones de salud, administración de tráfico, registro de nombres de dominio y DNSSEC.",
    multiSelect: false
},
{
    question: "77. ¿Cuál es la cantidad total de almacenamiento que ofrece Amazon S3?",
    options: [
        "A. 100MB",
        "B. 5 GB",
        "C. 5 TB",
        "D. Ilimitado"
    ],
    correctAnswer: "D. Ilimitado",
    explanation: "Amazon S3 ofrece almacenamiento ilimitado para cualquier cantidad de datos. Puede almacenar tantos objetos como desee, y cada objeto puede tener hasta 5 terabytes de tamaño. Solo paga por el espacio de almacenamiento que realmente usa, y no hay compromisos mínimos ni tarifas iniciales. Amazon S3 también proporciona alta durabilidad, disponibilidad, escalabilidad y seguridad para sus datos.",
    multiSelect: false
},
{
    question: "78. Una gran empresa tiene una carga de trabajo que requiere que el hardware permanezca en las instalaciones. La empresa quiere usar el mismo plano de control y servicios de administración de AWS que actualmente usa en la nube.",
    options: [
        "A. AWS Device Farm",
        "B. AWS Fargate",
        "C. AWS Outposts",
        "D. AWS Ground Station"
    ],
    correctAnswer: "C. AWS Outposts",
    explanation: "La respuesta correcta es C porque AWS Outposts es un servicio de AWS que permite a la empresa cumplir con los requisitos. AWS Outposts es un servicio completamente administrado que extiende la infraestructura, servicios, API y herramientas de AWS a prácticamente cualquier centro de datos, espacio de colocación o instalación local. AWS Outposts permite a los clientes ejecutar sus cargas de trabajo en el mismo hardware y software que AWS usa en su nube, manteniendo acceso y control local. Las otras opciones son incorrectas porque no son servicios de AWS que permitan a la empresa cumplir con los requisitos. AWS Device Farm es un servicio de AWS que permite a los clientes probar sus aplicaciones móviles y web en dispositivos reales en la nube de AWS. AWS Fargate es un servicio de AWS que permite a los clientes ejecutar contenedores sin tener que administrar servidores o clústeres. AWS Ground Station es un servicio de AWS que permite a los clientes comunicarse con satélites y descargar datos desde la órbita.",
    multiSelect: false
},
{
    question: "79. ¿Cuáles son las responsabilidades de una empresa que está usando AWS Lambda? (Seleccione DOS.)",
    options: [
        "A. Seguridad en el código",
        "B. Selección de recursos de CPU",
        "C. Parcheo del sistema operativo",
        "D. Escritura y actualización de código",
        "E. Seguridad de la infraestructura subyacente"
    ],
    correctAnswer: ["A. Seguridad en el código", "D. Escritura y actualización de código"],
    explanation: "Las responsabilidades de una empresa que está usando AWS Lambda son la seguridad en el código y la escritura y actualización de código. AWS Lambda es un servicio de computación sin servidor que le permite ejecutar código sin aprovisionar ni administrar servidores, escalado o parcheo. AWS Lambda se encarga de la seguridad de la infraestructura subyacente, como el sistema operativo, la red y el firewall. Sin embargo, la empresa sigue siendo responsable de la seguridad del código en sí, como cifrar datos sensibles, validar entradas y manejar errores. La empresa también es responsable de escribir y actualizar el código que define la función Lambda y elegir el entorno de ejecución, como Node.js, Python o Java. AWS Lambda no requiere selección de recursos de CPU, ya que los asigna automáticamente según la configuración de memoria.",
    multiSelect: true
},
{
    question: "80. ¿Cuáles de las siguientes son responsabilidades del cliente según el Modelo de Responsabilidad Compartida de AWS? (Seleccione DOS.)",
    options: [
        "A. Seguridad física de las instalaciones de AWS",
        "B. Configuración de grupos de seguridad",
        "C. Cifrado de datos del cliente en AWS",
        "D. Gestión de la infraestructura de AWS Lambda",
        "E. Gestión del ancho de banda de red de cada región de AWS"
    ],
    correctAnswer: ["B. Configuración de grupos de seguridad", "C. Cifrado de datos del cliente en AWS"],
    explanation: "El Modelo de Responsabilidad Compartida de AWS describe cómo AWS y el cliente comparten la responsabilidad de la seguridad y el cumplimiento del entorno de AWS. AWS es responsable de la seguridad de la nube, que incluye la seguridad física de las instalaciones de AWS, infraestructura, hardware, software y redes que ejecutan los servicios de AWS. El cliente es responsable de la seguridad en la nube, que incluye la configuración de grupos de seguridad, el cifrado de datos del cliente en AWS, la gestión de la infraestructura de AWS Lambda y la gestión del ancho de banda de red de cada región de AWS.",
    multiSelect: true
},
{
    question: "81. ¿Qué servicio de AWS debe usar un profesional de la nube para recibir orientación en tiempo real para el aprovisionamiento de recursos, basada en las mejores prácticas de AWS relacionadas con seguridad, optimización de costos y límites de servicio?",
    options: [
        "A. AWS Trusted Advisor",
        "B. AWS Config",
        "C. AWS Security Hub",
        "D. AWS Systems Manager"
    ],
    correctAnswer: "A. AWS Trusted Advisor",
    explanation: "AWS Trusted Advisor es el servicio de AWS que proporciona orientación en tiempo real para el aprovisionamiento de recursos, basado en las mejores prácticas de AWS relacionadas con seguridad, optimización de costos y límites de servicio. AWS Trusted Advisor inspecciona su entorno de AWS y proporciona recomendaciones para mejorar el rendimiento, la seguridad y la confiabilidad, reducir los costos y seguir las mejores prácticas. AWS Trusted Advisor también le alerta cuando se está acercando o excediendo los límites de servicio y le ayuda a solicitar aumentos de límite.",
    multiSelect: false
},
{
    question: "82. Una empresa está ejecutando aplicaciones en instancias de Amazon EC2 en la misma cuenta de AWS para varios proyectos diferentes. La empresa quiere rastrear los costos de infraestructura para cada uno de los proyectos por separado. La empresa debe realizar este seguimiento con el menor impacto posible en la infraestructura existente y sin costo adicional.",
    options: [
        "A. Usar un tipo de instancia de Amazon EC2 diferente para cada proyecto.",
        "B. Publicar métricas personalizadas de Amazon CloudWatch específicas del proyecto para cada aplicación.",
        "C. Implementar instancias EC2 para cada proyecto en una cuenta de AWS separada.",
        "D. Usar etiquetas de asignación de costos con valores específicos para cada proyecto."
    ],
    correctAnswer: "D. Usar etiquetas de asignación de costos con valores específicos para cada proyecto.",
    explanation: "La respuesta correcta es D porque las etiquetas de asignación de costos son una forma de rastrear los costos de infraestructura para cada uno de los proyectos por separado. Las etiquetas de asignación de costos son pares clave-valor que se pueden adjuntar a recursos de AWS, como instancias EC2, y se usan para categorizarlos y agruparlos con fines de facturación. Las otras opciones son incorrectas porque no cumplen con los requisitos de la pregunta. Usar un tipo de instancia de Amazon EC2 diferente para cada proyecto no ayuda a rastrear los costos de cada proyecto y puede afectar el rendimiento y la compatibilidad de las aplicaciones. Publicar métricas personalizadas de Amazon CloudWatch específicas del proyecto para cada aplicación no ayuda a rastrear los costos de cada proyecto y puede incurrir en costos adicionales por usar CloudWatch. Implementar instancias EC2 para cada proyecto en una cuenta de AWS separada ayuda a rastrear los costos de cada proyecto pero impacta la infraestructura existente e incurre en costos adicionales por usar múltiples cuentas.",
    multiSelect: false
},
{
    question: "83. ¿Qué servicio o característica de AWS captura información sobre el tráfico de red entrante y saliente desde una instancia de Amazon EC2?",
    options: [
        "A. VPC Reachability Analyzer",
        "B. Amazon Athena",
        "C. VPC Flow Logs",
        "D. AWS X-Ray"
    ],
    correctAnswer: "C. VPC Flow Logs",
    explanation: "La respuesta correcta es C porque VPC Flow Logs es un servicio o característica de AWS que captura información sobre el tráfico de red entrante y saliente desde una instancia de Amazon EC2. VPC Flow Logs es una característica que permite a los clientes capturar información sobre el tráfico IP que va hacia y desde las interfaces de red en sus VPC. VPC Flow Logs puede ayudar a los clientes a monitorear y solucionar problemas de conectividad, como el tráfico que no llega a una instancia o el tráfico que está siendo rechazado por un grupo de seguridad. Las otras opciones son incorrectas porque no son servicios o características de AWS que capturen información sobre el tráfico de red entrante y saliente desde una instancia de Amazon EC2. VPC Reachability Analyzer es un servicio o característica de AWS que permite a los clientes realizar pruebas de conectividad entre recursos en sus VPC e identificar problemas de configuración que impiden la conectividad. Amazon Athena es un servicio de AWS que permite a los clientes consultar datos almacenados en Amazon S3 usando SQL estándar. AWS X-Ray es un servicio de AWS que permite a los clientes analizar y depurar aplicaciones distribuidas, como las construidas usando una arquitectura de microservicios.",
    multiSelect: false
},
{
    question: "84. ¿Cuáles de las siguientes son responsabilidades del cliente según el Modelo de Responsabilidad Compartida de AWS? (Seleccione DOS.)",
    options: [
        "A. Seguridad física de las instalaciones de AWS",
        "B. Configuración de grupos de seguridad",
        "C. Cifrado de datos del cliente en AWS",
        "D. Gestión de la infraestructura de AWS Lambda",
        "E. Gestión del ancho de banda de red de cada región de AWS"
    ],
    correctAnswer: ["B. Configuración de grupos de seguridad", "C. Cifrado de datos del cliente en AWS"],
    explanation: "El Modelo de Responsabilidad Compartida de AWS describe cómo AWS y el cliente comparten la responsabilidad de la seguridad y el cumplimiento del entorno de AWS. AWS es responsable de la seguridad de la nube, que incluye la seguridad física de las instalaciones de AWS, infraestructura, hardware, software y redes que ejecutan los servicios de AWS. El cliente es responsable de la seguridad en la nube, que incluye la configuración de grupos de seguridad, el cifrado de datos del cliente en AWS, la gestión de la infraestructura de AWS Lambda y la gestión del ancho de banda de red de cada región de AWS.",
    multiSelect: true
},
{
    question: "85. ¿Qué servicio de AWS debe usar un profesional de la nube para recibir orientación en tiempo real para el aprovisionamiento de recursos, basada en las mejores prácticas de AWS relacionadas con seguridad, optimización de costos y límites de servicio?",
    options: [
        "A. AWS Trusted Advisor",
        "B. AWS Config",
        "C. AWS Security Hub",
        "D. AWS Systems Manager"
    ],
    correctAnswer: "A. AWS Trusted Advisor",
    explanation: "AWS Trusted Advisor es el servicio de AWS que proporciona orientación en tiempo real para el aprovisionamiento de recursos, basado en las mejores prácticas de AWS relacionadas con seguridad, optimización de costos y límites de servicio. AWS Trusted Advisor inspecciona su entorno de AWS y proporciona recomendaciones para mejorar el rendimiento, la seguridad y la confiabilidad, reducir los costos y seguir las mejores prácticas. AWS Trusted Advisor también le alerta cuando se está acercando o excediendo los límites de servicio y le ayuda a solicitar aumentos de límite.",
    multiSelect: false
},
{
    question: "86. Una empresa está ejecutando aplicaciones en instancias de Amazon EC2 en la misma cuenta de AWS para varios proyectos diferentes. La empresa quiere rastrear los costos de infraestructura para cada uno de los proyectos por separado. La empresa debe realizar este seguimiento con el menor impacto posible en la infraestructura existente y sin costo adicional.",
    options: [
        "A. Usar un tipo de instancia de Amazon EC2 diferente para cada proyecto.",
        "B. Publicar métricas personalizadas de Amazon CloudWatch específicas del proyecto para cada aplicación.",
        "C. Implementar instancias EC2 para cada proyecto en una cuenta de AWS separada.",
        "D. Usar etiquetas de asignación de costos con valores específicos para cada proyecto."
    ],
    correctAnswer: "D. Usar etiquetas de asignación de costos con valores específicos para cada proyecto.",
    explanation: "La respuesta correcta es D porque las etiquetas de asignación de costos son una forma de rastrear los costos de infraestructura para cada uno de los proyectos por separado. Las etiquetas de asignación de costos son pares clave-valor que se pueden adjuntar a recursos de AWS, como instancias EC2, y se usan para categorizarlos y agruparlos con fines de facturación. Las otras opciones son incorrectas porque no cumplen con los requisitos de la pregunta. Usar un tipo de instancia de Amazon EC2 diferente para cada proyecto no ayuda a rastrear los costos de cada proyecto y puede afectar el rendimiento y la compatibilidad de las aplicaciones. Publicar métricas personalizadas de Amazon CloudWatch específicas del proyecto para cada aplicación no ayuda a rastrear los costos de cada proyecto y puede incurrir en costos adicionales por usar CloudWatch. Implementar instancias EC2 para cada proyecto en una cuenta de AWS separada ayuda a rastrear los costos de cada proyecto pero impacta la infraestructura existente e incurre en costos adicionales por usar múltiples cuentas.",
    multiSelect: false
},
{
    question: "87. ¿Qué servicio o característica de AWS captura información sobre el tráfico de red entrante y saliente desde una instancia de Amazon EC2?",
    options: [
        "A. VPC Reachability Analyzer",
        "B. Amazon Athena",
        "C. VPC Flow Logs",
        "D. AWS X-Ray"
    ],
    correctAnswer: "C. VPC Flow Logs",
    explanation: "La respuesta correcta es C porque VPC Flow Logs es un servicio o característica de AWS que captura información sobre el tráfico de red entrante y saliente desde una instancia de Amazon EC2. VPC Flow Logs es una característica que permite a los clientes capturar información sobre el tráfico IP que va hacia y desde las interfaces de red en sus VPC. VPC Flow Logs puede ayudar a los clientes a monitorear y solucionar problemas de conectividad, como el tráfico que no llega a una instancia o el tráfico que está siendo rechazado por un grupo de seguridad. Las otras opciones son incorrectas porque no son servicios o características de AWS que capturen información sobre el tráfico de red entrante y saliente desde una instancia de Amazon EC2. VPC Reachability Analyzer es un servicio o característica de AWS que permite a los clientes realizar pruebas de conectividad entre recursos en sus VPC e identificar problemas de configuración que impiden la conectividad. Amazon Athena es un servicio de AWS que permite a los clientes consultar datos almacenados en Amazon S3 usando SQL estándar. AWS X-Ray es un servicio de AWS que permite a los clientes analizar y depurar aplicaciones distribuidas, como las construidas usando una arquitectura de microservicios.",
    multiSelect: false
},
{
    question: "88. Una empresa está migrando una aplicación que incluye una base de datos Oracle a AWS. La empresa no puede reescribir la aplicación.",
    options: [
        "A. Amazon Athena",
        "B. Amazon DynamoDB",
        "C. Amazon RDS",
        "D. Amazon DocumentDB (con compatibilidad con MongoDB)"
    ],
    correctAnswer: "C. Amazon RDS",
    explanation: "Amazon Relational Database Service (Amazon RDS) es un servicio que proporciona motores de bases de datos relacionales administrados. Amazon RDS admite múltiples motores de base de datos, incluidos Oracle, MySQL, PostgreSQL, MariaDB, SQL Server y Amazon Aurora. Amazon RDS se puede usar para migrar una aplicación que incluye una base de datos Oracle a AWS sin reescribir la aplicación, siempre que la aplicación sea compatible con la versión y edición de Oracle compatible con Amazon RDS. Amazon RDS también puede proporcionar beneficios como alta disponibilidad, escalabilidad, seguridad, respaldo y restauración, y optimización del rendimiento.",
    multiSelect: false
},
{
    question: "89. ¿Qué característica o recurso de AWS es una plantilla de instancia de Amazon EC2 implementable que está preempaquetada con software y requisitos de seguridad?",
    options: [
        "A. Volumen de Amazon Elastic Block Store (Amazon EBS)",
        "B. Plantilla de AWS CloudFormation",
        "C. Instantánea de Amazon Elastic Block Store (Amazon EBS)",
        "D. Amazon Machine Image (AMI)"
    ],
    correctAnswer: "D. Amazon Machine Image (AMI)",
    explanation: "Una Amazon Machine Image (AMI) es una plantilla de instancia de Amazon EC2 implementable que está preempaquetada con software y requisitos de seguridad. Proporciona la información necesaria para lanzar una instancia, que es un servidor virtual en la nube. Puede usar una AMI para lanzar tantas instancias como necesite. También puede crear sus propias AMI personalizadas o usar AMI compartidas de otros usuarios de AWS.",
    multiSelect: false
},
{
    question: "90. ¿Qué servicio o herramienta de AWS se puede usar para consolidar los pagos de una empresa con múltiples cuentas de AWS?",
    options: [
        "A. Informe de costos y uso de AWS",
        "B. AWS Organizations",
        "C. Cost Explorer",
        "D. AWS Budgets"
    ],
    correctAnswer: "B. AWS Organizations",
    explanation: "AWS Organizations es un servicio de administración de cuentas que le permite consolidar múltiples cuentas de AWS en una organización que usted crea y administra centralmente. AWS Organizations incluye características de facturación consolidada y administración de cuentas que le permiten satisfacer mejor las necesidades presupuestarias, de seguridad y de cumplimiento de su negocio.",
    multiSelect: false
},
{
    question: "91. ¿Qué servicios y características de AWS se proporcionan a todos los clientes sin costo adicional? (Seleccione DOS.)",
    options: [
        "A. Amazon Aurora",
        "B. VPC",
        "C. Amazon SageMaker",
        "D. AWS Identity and Access Management (IAM)",
        "E. Amazon Polly"
    ],
    correctAnswer: ["B. VPC", "D. AWS Identity and Access Management (IAM)"],
    explanation: "Los servicios y características de AWS que se proporcionan a todos los clientes sin costo adicional son VPC y AWS Identity and Access Management (IAM). VPC es un servicio que le permite lanzar recursos de AWS en una red virtual aislada lógicamente que usted define. Puede crear y usar una VPC sin costo adicional y solo paga por los recursos que lanza dentro de la VPC, como instancias EC2 o volúmenes EBS. IAM es un servicio que le permite administrar el acceso y los permisos a los recursos de AWS. Puede crear y usar usuarios, grupos, roles y políticas de IAM sin costo adicional y solo paga por los recursos de AWS a los que acceden las entidades de IAM. Amazon Aurora, Amazon SageMaker y Amazon Polly no son servicios gratuitos y cobran según el uso y los recursos elegidos.",
    multiSelect: true
},
{
    question: "92. ¿Cuál de las siguientes describe una región de AWS?",
    options: [
        "A. Una ubicación específica dentro de un área geográfica que proporciona alta disponibilidad",
        "B. Una colección de centros de datos que abarcan múltiples países",
        "C. Una vista global del entorno de computación en la nube de un usuario",
        "D. Una colección de bases de datos a las que solo se puede acceder desde un área geográfica específica"
    ],
    correctAnswer: "A. Una ubicación específica dentro de un área geográfica que proporciona alta disponibilidad",
    explanation: "Una región de AWS es una ubicación específica dentro de un área geográfica que proporciona alta disponibilidad. Una región de AWS consta de dos o más zonas de disponibilidad, que son ubicaciones aisladas dentro de la misma región. Cada zona de disponibilidad tiene energía, refrigeración y seguridad física independientes, y está conectada a las otras zonas de disponibilidad en la misma región a través de una red de baja latencia, alto rendimiento y altamente redundante. Los servicios de AWS están disponibles en múltiples regiones en todo el mundo, lo que permite al usuario elegir dónde ejecutar sus aplicaciones y almacenar sus datos.",
    multiSelect: false
},
{
    question: "93. ¿Qué pilar del Marco de Buena Arquitectura de AWS incluye un principio de diseño sobre medir la eficiencia general de las cargas de trabajo en términos de valor empresarial?",
    options: [
        "A. Excelencia operativa",
        "B. Seguridad",
        "C. Confiabilidad",
        "D. Optimización de costos"
    ],
    correctAnswer: "A. Excelencia operativa",
    explanation: "El pilar de Excelencia operativa del Marco de Buena Arquitectura de AWS incluye un principio de diseño sobre medir la eficiencia general de las cargas de trabajo en términos de valor empresarial. Este principio establece que debe monitorear y medir indicadores clave de rendimiento (KPI) y establecer objetivos y límites que se alineen con sus objetivos comerciales. También debe usar ciclos de retroalimentación para mejorar continuamente sus procesos y procedimientos.",
    multiSelect: false
},
{
    question: "94. Una empresa ha estado almacenando informes mensuales en un bucket de Amazon S3. La empresa exporta los datos del informe a archivos de valores separados por comas (.csv). Un desarrollador quiere escribir una consulta simple que pueda leer todos esos archivos y generar un informe resumido.",
    options: [
        "A. Amazon S3 Select",
        "B. Amazon Athena",
        "C. Amazon Redshift",
        "D. Amazon EC2"
    ],
    correctAnswer: "B. Amazon Athena",
    explanation: "Amazon Athena es el servicio de AWS que el desarrollador debe usar para escribir una consulta simple que pueda leer todos los archivos .csv almacenados en un bucket de Amazon S3 y generar un informe resumido. Amazon Athena es un servicio de consulta interactiva que permite a los usuarios analizar datos en Amazon S3 usando SQL estándar. Amazon Athena no requiere configuración ni administración de servidores, y los usuarios solo pagan por las consultas que ejecutan. Amazon Athena puede manejar múltiples formatos de datos, incluidos .csv, y puede integrarse con otros servicios de AWS, como Amazon QuickSight, para la visualización de datos.",
    multiSelect: false
},
{
    question: "95. Al diseñar cargas de trabajo de AWS para ser operativas incluso cuando hay fallas de componentes, ¿cuál es una práctica recomendada de AWS?",
    options: [
        "A. Realizar pruebas trimestrales de recuperación ante desastres.",
        "B. Colocar el componente principal en la región us-east-1.",
        "C. Diseñar para conmutación automática por error a recursos saludables.",
        "D. Diseñar cargas de trabajo para que se ajusten a una sola instancia de Amazon EC2."
    ],
    correctAnswer: "C. Diseñar para conmutación automática por error a recursos saludables.",
    explanation: "Diseñar para conmutación automática por error a recursos saludables es una práctica recomendada de AWS al diseñar cargas de trabajo de AWS para ser operativas incluso cuando hay fallas de componentes. Esto significa que debe arquitecturar su sistema para manejar la pérdida de uno o más componentes sin afectar la disponibilidad o el rendimiento de su aplicación. Puede usar múltiples servicios y características de AWS para lograr esto, como Auto Scaling, Elastic Load Balancing, Amazon Route 53, AWS CloudFormation y AWS CloudWatch.",
    multiSelect: false
},
{
    question: "96. Una empresa quiere proteger su información, sistemas y activos en la nube de AWS mientras realiza tareas de evaluación y mitigación de riesgos.",
    options: [
        "A. Confiabilidad",
        "B. Seguridad",
        "C. Excelencia operativa",
        "D. Eficiencia del rendimiento"
    ],
    correctAnswer: "B. Seguridad",
    explanation: "El pilar del Marco de Buena Arquitectura de AWS que es respaldado por los objetivos de proteger información, sistemas y activos en la nube de AWS mientras se realizan tareas de evaluación y mitigación de riesgos es la seguridad. La seguridad es la capacidad de proteger información, sistemas y activos mientras se entrega valor empresarial a través de evaluaciones de riesgos y estrategias de mitigación. El pilar de seguridad cubre temas como gestión de identidad y acceso, protección de datos, protección de infraestructura, controles de detección, respuesta a incidentes y cumplimiento.",
    multiSelect: false
},
{
    question: "97. Una empresa tiene una aplicación que usa servicios de AWS. Durante eventos de escalado, la empresa quiere mantener el uso de la aplicación dentro de las cuotas de servicio de AWS.",
    options: [
        "A. Consola de Service Quotas",
        "B. AWS Trusted Advisor",
        "C. AWS Systems Manager",
        "D. AWS Shield",
        "E. AWS Cost Explorer"
    ],
    correctAnswer: ["A. Consola de Service Quotas", "B. AWS Trusted Advisor"],
    explanation: "Las respuestas correctas son A y B porque la Consola de Service Quotas y AWS Trusted Advisor son servicios o herramientas de AWS que pueden informar las cuotas para que la empresa pueda mejorar la confiabilidad de la aplicación. La Consola de Service Quotas es una herramienta de AWS que permite a los usuarios ver y administrar sus cuotas para servicios de AWS desde una ubicación central. Los usuarios pueden usar la Consola de Service Quotas para solicitar aumentos de cuota, rastrear el uso de cuotas y establecer alarmas para acercarse a los límites de cuota. AWS Trusted Advisor es un servicio de AWS que proporciona orientación en tiempo real para ayudar a los usuarios a seguir las mejores prácticas de AWS para seguridad, rendimiento, optimización de costos y tolerancia a fallas. Una de las categorías de verificaciones que realiza AWS Trusted Advisor son las verificaciones de límites de servicio, que monitorean el uso de cada servicio de AWS y alertan a los usuarios cuando están cerca de alcanzar el límite predeterminado. Las otras opciones son incorrectas porque no son servicios o herramientas de AWS que puedan informar las cuotas para que la empresa pueda mejorar la confiabilidad de la aplicación. AWS Systems Manager es un servicio de AWS que permite a los usuarios automatizar tareas operativas, administrar configuración y cumplimiento, y monitorear el estado y rendimiento del sistema. AWS Shield es un servicio de AWS que protege a los usuarios contra ataques de denegación de servicio distribuido (DDoS). AWS Cost Explorer es una herramienta de AWS que permite a los usuarios visualizar, comprender y administrar sus costos y uso de AWS.",
    multiSelect: true
},
{
    question: "98. ¿Qué servicio de AWS es una base de datos de clave-valor que entrega latencia de un solo dígito de milisegundos a cualquier escala?",
    options: [
        "A. Amazon DynamoDB",
        "B. Amazon Aurora",
        "C. Amazon DocumentDB (con compatibilidad con MongoDB)",
        "D. Amazon Neptune"
    ],
    correctAnswer: "A. Amazon DynamoDB",
    explanation: "La respuesta correcta es A porque Amazon DynamoDB es una base de datos de clave-valor que entrega latencia de un solo dígito de milisegundos a cualquier escala. Amazon DynamoDB es un servicio de base de datos NoSQL completamente administrado, sin servidor y escalable que admite modelos de datos de clave-valor y documentos. Las otras opciones son incorrectas porque no son bases de datos de clave-valor. Amazon Aurora es una base de datos relacional que es compatible con MySQL y PostgreSQL. Amazon DocumentDB (con compatibilidad con MongoDB) es una base de datos de documentos que es compatible con MongoDB. Amazon Neptune es una base de datos de grafos que admite modelos de grafos de propiedades y RDF.",
    multiSelect: false
},
{
    question: "99. ¿Qué característica de la nube de AWS permite a los usuarios tener la capacidad de pagar según las necesidades actuales, en lugar de las necesidades proyectadas?",
    options: [
        "A. AWS Budgets",
        "B. Precios de pago por uso",
        "C. Descuentos por volumen",
        "D. Planes de ahorro"
    ],
    correctAnswer: "B. Precios de pago por uso",
    explanation: "Los precios de pago por uso son la característica de la nube de AWS que permite a los usuarios tener la capacidad de pagar según las necesidades actuales, en lugar de las necesidades proyectadas. Pago por uso significa que los usuarios solo pagan por los servicios y recursos de AWS que usan, sin compromisos iniciales ni contratos a largo plazo. Esto permite a los usuarios escalar hacia arriba o hacia abajo según sus requisitos comerciales cambiantes y evitar pagar por capacidad inactiva o no utilizada. El pago por uso también permite a los usuarios beneficiarse de las economías de escala de AWS y reducir los costos a medida que crecen sus negocios.",
    multiSelect: false
},
{
    question: "100. ¿Qué servicio o herramienta de AWS ayuda a administrar centralmente la facturación y habilitar el acceso controlado a recursos en cuentas de AWS?",
    options: [
        "A. AWS Identity and Access Management (IAM)",
        "B. AWS Organizations",
        "C. AWS Cost Explorer",
        "D. AWS Budgets"
    ],
    correctAnswer: "B. AWS Organizations",
    explanation: "AWS Organizations ayuda a administrar centralmente la facturación y habilitar el acceso controlado a recursos en cuentas de AWS. AWS Organizations es un servicio que le permite consolidar múltiples cuentas de AWS en una organización que usted crea y administra centralmente. AWS Organizations le permite crear grupos de cuentas y aplicar políticas a ellos, como políticas de control de servicio (SCP) que especifican los servicios y acciones a los que los usuarios y roles pueden acceder en todas las cuentas. AWS Organizations también le permite usar facturación consolidada, que combina el uso y los cargos en todas las cuentas de su organización en una sola factura.",
    multiSelect: false
},
{
    question: "101. ¿Cuáles de los siguientes son componentes de una conexión VPN de sitio a sitio de AWS? (Seleccione DOS.)",
    options: [
        "A. AWS Storage Gateway",
        "B. Puerta de enlace privada virtual",
        "C. Puerta de enlace NAT",
        "D. Puerta de enlace del cliente",
        "E. Internet Gateway"
    ],
    correctAnswer: ["B. Puerta de enlace privada virtual", "D. Puerta de enlace del cliente"],
    explanation: "Las respuestas correctas son B y D porque una puerta de enlace privada virtual y una puerta de enlace del cliente son componentes de una conexión VPN de sitio a sitio de AWS. Una puerta de enlace privada virtual es el lado de AWS de la conexión VPN que se conecta a la VPC del cliente. Una puerta de enlace del cliente es el lado del cliente de la conexión VPN que reside en la red del cliente. Las otras opciones son incorrectas porque no son componentes de una conexión VPN de sitio a sitio de AWS. AWS Storage Gateway es un servicio que conecta aplicaciones de software locales con almacenamiento basado en la nube. La puerta de enlace NAT es un servicio que permite a las instancias en una subred privada conectarse a Internet u otros servicios de AWS, pero impide que Internet inicie una conexión con esas instancias. Internet Gateway es un servicio que permite la comunicación entre instancias en una VPC e Internet.",
    multiSelect: true
},
{
    question: "102. ¿Qué tarea es responsabilidad del cliente según el Modelo de Responsabilidad Compartida de AWS?",
    options: [
        "A. Administrar sistemas operativos invitados",
        "B. Mantener la configuración de dispositivos de infraestructura",
        "C. Administrar sistemas operativos host y virtualización",
        "D. Mantener el software que alimenta las zonas de disponibilidad"
    ],
    correctAnswer: "A. Administrar sistemas operativos invitados",
    explanation: "Administrar sistemas operativos invitados es una responsabilidad del cliente, según el Modelo de Responsabilidad Compartida de AWS. El Modelo de Responsabilidad Compartida de AWS define las diferentes responsabilidades de seguridad y cumplimiento de AWS y el cliente. AWS es responsable de la seguridad de la nube, que incluye la infraestructura física, hardware, software e instalaciones que ejecutan la nube de AWS. El cliente es responsable de la seguridad en la nube, que incluye configurar y administrar sistemas operativos invitados, aplicaciones, datos y protección del tráfico de red.",
    multiSelect: false
},
{
    question: "103. Una empresa necesita migrar todos sus equipos de desarrollo a un entorno de desarrollo integrado (IDE) basado en la nube.",
    options: [
        "A. AWS CodeBuild",
        "B. AWS Cloud9",
        "C. AWS OpsWorks",
        "D. Kit de desarrollo en la nube de AWS (AWS CDK)"
    ],
    correctAnswer: "B. AWS Cloud9",
    explanation: "La respuesta correcta es B porque AWS Cloud9 es un servicio de AWS que permite a los usuarios ejecutar sus cargas de trabajo personalizadas y no de producción existentes en la nube de AWS de forma rápida y rentable. AWS Cloud9 es un entorno de desarrollo integrado (IDE) basado en la nube que permite a los usuarios escribir, ejecutar y depurar código desde un navegador web. AWS Cloud9 admite múltiples lenguajes de programación, como Python, Java, Node.js y más. AWS Cloud9 también proporciona a los usuarios un terminal que puede acceder a servicios y recursos de AWS, como instancias de Amazon EC2, funciones de AWS Lambda y pilas de AWS CloudFormation. Las otras opciones son incorrectas porque no son servicios de AWS que permitan a los usuarios ejecutar sus cargas de trabajo personalizadas y no de producción existentes en la nube de AWS de forma rápida y rentable. AWS CodeBuild es un servicio de AWS que permite a los usuarios compilar, probar y empaquetar su código para implementación. AWS OpsWorks es un servicio de AWS que permite a los usuarios configurar y administrar sus aplicaciones usando Chef o Puppet. El Kit de desarrollo en la nube de AWS (AWS CDK) es un servicio de AWS que permite a los usuarios definir y aprovisionar su infraestructura en la nube usando lenguajes de programación familiares, como TypeScript, Python, Java y C#.",
    multiSelect: false
},
{
    question: "104. ¿Cuál de los siguientes es un principio de diseño recomendado del Marco de Buena Arquitectura de AWS?",
    options: [
        "A. Reducir el tiempo de inactividad haciendo cambios en la infraestructura con poca frecuencia y en grandes incrementos.",
        "B. Dedicar tiempo a configurar la infraestructura manualmente.",
        "C. Aprender a mejorar a partir de fallas operativas.",
        "D. Usar diseño de aplicación monolítica para centralización."
    ],
    correctAnswer: "C. Aprender a mejorar a partir de fallas operativas.",
    explanation: "La respuesta correcta es C porque aprender a mejorar a partir de fallas operativas es un principio de diseño recomendado del Marco de Buena Arquitectura de AWS. El Marco de Buena Arquitectura de AWS es un conjunto de mejores prácticas y directrices para diseñar y operar sistemas confiables, seguros, eficientes y rentables en la nube. El Marco de Buena Arquitectura de AWS consta de cinco pilares: excelencia operativa, seguridad, confiabilidad, eficiencia del rendimiento y optimización de costos. Cada pilar tiene un conjunto de principios de diseño que describen las características de un sistema bien arquitecturado. Aprender a mejorar a partir de fallas operativas es un principio de diseño del pilar de excelencia operativa, que se centra en ejecutar y monitorear sistemas para entregar valor empresarial y mejorar continuamente procesos y procedimientos. Las otras opciones son incorrectas porque no son principios de diseño recomendados del Marco de Buena Arquitectura de AWS. Reducir el tiempo de inactividad haciendo cambios en la infraestructura con poca frecuencia y en grandes incrementos no es un principio de diseño del Marco de Buena Arquitectura de AWS, sino una fuente de riesgo e ineficiencia. Un sistema bien arquitecturado debe implementar cambios con frecuencia y en pequeños incrementos para minimizar el impacto y el alcance de las fallas. Dedicar tiempo a configurar la infraestructura manualmente no es un principio de diseño del Marco de Buena Arquitectura de AWS, sino una fuente de error humano e inconsistencia. Un sistema bien arquitecturado debe automatizar tareas manuales para mejorar la velocidad y precisión de las operaciones. Usar diseño de aplicación monolítica para centralización no es un principio de diseño del Marco de Buena Arquitectura de AWS, sino una fuente de complejidad y rigidez. Un sistema bien arquitecturado debe usar componentes distribuidos y débilmente acoplados para habilitar escalabilidad y resiliencia.",
    multiSelect: false
},
{
    question: "105. ¿Qué servicio de base de datos de AWS proporciona almacén de datos en memoria?",
    options: [
        "A. Amazon DynamoDB",
        "B. Amazon ElastiCache",
        "C. Amazon RDS",
        "D. Amazon Timestream"
    ],
    correctAnswer: "B. Amazon ElastiCache",
    explanation: "La respuesta correcta es B porque Amazon ElastiCache es un servicio que proporciona almacén de datos en memoria.",
    multiSelect: false
},
{
    question: "106. ¿Qué servicio de AWS se debe usar para almacenar credenciales de base de datos con la máxima seguridad?",
    options: [
        "A. AWS Identity and Access Management (IAM)",
        "B. AWS Secrets Manager",
        "C. Amazon S3",
        "D. AWS Key Management Service (AWS KMS)"
    ],
    correctAnswer: "B. AWS Secrets Manager",
    explanation: "AWS Secrets Manager se debe usar para almacenar credenciales de base de datos con la máxima seguridad. Almacena, cifra, rota y recupera secretos de forma segura, como credenciales, contraseñas y claves API.",
    multiSelect: false
},
{
    question: "107. Una empresa tiene un sitio web de compras en línea y quiere almacenar datos de tarjetas de crédito de clientes. La empresa debe cumplir con los estándares de la Industria de Tarjetas de Pago (PCI).",
    options: [
        "A. Amazon Cloud Directory",
        "B. AWS Artifact",
        "C. AWS Trusted Advisor",
        "D. Amazon Inspector"
    ],
    correctAnswer: "B. AWS Artifact",
    explanation: "AWS Artifact proporciona acceso bajo demanda a documentación de seguridad y cumplimiento de AWS, como informes de auditoría, certificaciones de seguridad y acuerdos, permitiendo a los clientes descargar, revisar y aceptar los documentos relevantes para su uso de servicios de AWS.",
    multiSelect: false
},
{
    question: "108. Una empresa quiere administrar centralmente las políticas de seguridad y los servicios de facturación en un entorno AWS de múltiples cuentas. ¿Qué servicio de AWS debe usar la empresa para cumplir estos requisitos?",
    options: [
        "A. AWS Identity and Access Management (IAM)",
        "B. AWS Organizations",
        "C. AWS Resource Access Manager (AWS RAM)",
        "D. AWS Config"
    ],
    correctAnswer: "B. AWS Organizations",
    explanation: "AWS Organizations le ayuda a gobernar centralmente su entorno a medida que crece y escala sus recursos de AWS. Puede crear grupos de cuentas y aplicar políticas a ellos, así como consolidar la facturación de múltiples cuentas.",
    multiSelect: false
},
{
    question: "109. Una empresa está alojando una aplicación web en un contenedor Docker en Amazon EC2. AWS es responsable de ¿cuál de las siguientes tareas?",
    options: [
        "A. Escalar la aplicación web y los servicios desarrollados con Docker",
        "B. Aprovisionar o programar contenedores para ejecutarse en clústeres y mantener su disponibilidad",
        "C. Realizar mantenimiento de hardware en instalaciones de AWS que ejecutan la nube de AWS",
        "D. Administrar el sistema operativo invitado, incluidas actualizaciones y parches de seguridad"
    ],
    correctAnswer: "C. Realizar mantenimiento de hardware en instalaciones de AWS que ejecutan la nube de AWS",
    explanation: "Es parte del modelo de responsabilidad compartida, donde AWS es responsable de la seguridad de la nube y el cliente es responsable de la seguridad en la nube. AWS también es responsable de la infraestructura global que ejecuta todos los servicios ofrecidos en la nube de AWS.",
    multiSelect: false
},
{
    question: "110. Cuando un usuario quiere usar sus propias licencias de software por socket, por núcleo o por VM para un servidor Microsoft Windows que se ejecuta en AWS, ¿qué tipo de instancia de Amazon EC2 se requiere?",
    options: [
        "A. Instancias spot",
        "B. Instancias dedicadas",
        "C. Hosts dedicados",
        "D. Instancias reservadas"
    ],
    correctAnswer: "C. Hosts dedicados",
    explanation: "Los hosts dedicados son instancias de Amazon EC2 requeridas cuando un usuario quiere usar sus propias licencias de software por socket, por núcleo o por VM para un servidor Microsoft Windows que se ejecuta en AWS. Son servidores físicos dedicados a un solo cliente y permiten a los clientes usar sus licencias de software vinculadas al servidor existentes.",
    multiSelect: false
},
{
    question: "111. ¿Qué servicio o característica de AWS proporciona protección contra ataques HTTP para usuarios que ejecutan aplicaciones web de cara al público?",
    options: [
        "A. Grupos de seguridad",
        "B. ACL de red",
        "C. AWS Shield Standard",
        "D. AWS WAF"
    ],
    correctAnswer: "D. AWS WAF",
    explanation: "AWS WAF es un firewall de aplicaciones web que ayuda a los usuarios a proteger sus aplicaciones web de exploits comunes, como inyección SQL, scripting entre sitios y ataques de bots. Los usuarios pueden crear reglas personalizadas para definir el tráfico web que desean permitir, bloquear o contar.",
    multiSelect: false
},
{
    question: "112. Una empresa quiere implementar y administrar una aplicación basada en Docker en AWS.",
    options: [
        "A. Un orquestador Docker de código abierto en instancias de Amazon EC2",
        "B. AWS AppSync",
        "C. Amazon Elastic Container Registry (Amazon ECR)",
        "D. Amazon Elastic Container Service (Amazon ECS)"
    ],
    correctAnswer: "D. Amazon Elastic Container Service (Amazon ECS)",
    explanation: "Amazon ECS es un servicio de orquestación de contenedores completamente administrado que facilita ejecutar, escalar y asegurar aplicaciones de contenedores Docker en AWS. Elimina la necesidad de instalar, operar y escalar su propia infraestructura de administración de clústeres.",
    multiSelect: false
},
{
    question: "113. Un ingeniero de nube necesita descargar documentos de seguridad y cumplimiento de AWS para una auditoría futura.",
    options: [
        "A. AWS Trusted Advisor",
        "B. AWS Artifact",
        "C. Herramienta de AWS Well-Architected",
        "D. AWS Systems Manager"
    ],
    correctAnswer: "B. AWS Artifact",
    explanation: "AWS Artifact es un portal de autoservicio que permite a los usuarios acceder y descargar informes de cumplimiento y acuerdos de AWS. Estos documentos proporcionan evidencia del cumplimiento de AWS con estándares de seguridad globales, regionales y específicos de la industria y regulaciones.",
    multiSelect: false
},
{
    question: "114. La aplicación de una empresa almacena datos en un bucket de Amazon S3. La empresa tiene una función de AWS Lambda que procesa datos en el bucket S3. La empresa necesita invocar la función una vez al día a una hora específica.",
    options: [
        "A. AWS Managed Services (AMS)",
        "B. AWS CodeStar",
        "C. Amazon EventBridge",
        "D. AWS Step Functions"
    ],
    correctAnswer: "C. Amazon EventBridge",
    explanation: "Amazon EventBridge le permite crear reglas programadas que activan sus objetivos en un momento o intervalo específico, como una vez al día. AMS proporciona administración operativa, AWS CodeStar administra proyectos de desarrollo de software y AWS Step Functions coordina flujos de trabajo sin servidor.",
    multiSelect: false
},
{
    question: "115. Una empresa quiere establecer una capa de seguridad en su VPC que actuará como un firewall para controlar el tráfico de subred.",
    options: [
        "A. Tablas de enrutamiento",
        "B. Listas de control de acceso de red (ACL de red)",
        "C. Grupos de seguridad",
        "D. Amazon GuardDuty"
    ],
    correctAnswer: "C. Grupos de seguridad",
    explanation: "Los grupos de seguridad son firewalls con estado que controlan el tráfico entrante y saliente a nivel de instancia. Puede asociarlos con cada instancia en una VPC y especificar reglas para permitir o denegar el tráfico. Las tablas de enrutamiento dirigen el tráfico, las ACL de red son firewalls sin estado a nivel de subred y Amazon GuardDuty es un servicio de detección de amenazas.",
    multiSelect: false
},
{
    question: "116. Una empresa está migrando un servidor de base de datos relacional local a la nube de AWS y quiere minimizar la sobrecarga administrativa de las tareas de mantenimiento de la base de datos.",
    options: [
        "A. Amazon DynamoDB",
        "B. Amazon EC2",
        "C. Amazon Redshift",
        "D. Amazon RDS"
    ],
    correctAnswer: "D. Amazon RDS",
    explanation: "Amazon RDS es un servicio de base de datos relacional completamente administrado que maneja tareas rutinarias de base de datos como aprovisionamiento, parcheo, respaldo, recuperación, detección de fallas y reparación. Admite múltiples motores de base de datos, incluidos MySQL, PostgreSQL, Oracle, SQL Server y Amazon Aurora.",
    multiSelect: false
},
{
    question: "117. Un profesional de la nube está analizando el rendimiento y uso de instancias de Amazon EC2 para entregar recomendaciones de posibles ahorros de costos.",
    options: [
        "A. Auto Scaling",
        "B. Dimensionamiento correcto",
        "C. Balanceo de carga",
        "D. Alta disponibilidad"
    ],
    correctAnswer: "B. Dimensionamiento correcto",
    explanation: "El dimensionamiento correcto es el proceso de optimizar el rendimiento y costo de sus recursos de AWS seleccionando el tipo, tamaño y configuración de instancia más apropiados según los requisitos de carga de trabajo y patrones de uso. Esto puede ayudar a reducir el sobreaprovisionamiento o la subutilización de recursos.",
    multiSelect: false
},
{
    question: "118. Una empresa recientemente migró a la nube de AWS y necesita determinar si sus instancias de Amazon EC2 recién importadas tienen el tamaño y tipo adecuados.",
    options: [
        "A. AWS Auto Scaling",
        "B. AWS Control Tower",
        "C. AWS Trusted Advisor",
        "D. AWS Compute Optimizer",
        "E. Amazon Forecast"
    ],
    correctAnswer: ["C. AWS Trusted Advisor", "D. AWS Compute Optimizer"],
    explanation: "AWS Trusted Advisor proporciona recomendaciones de mejores prácticas y puede ayudar a identificar instancias EC2 subutilizadas o inactivas, sugiriendo formas de reducir costos y mejorar el rendimiento. AWS Compute Optimizer analiza la configuración y las métricas de utilización de instancias EC2 y entrega recomendaciones para tipos, tamaños y configuraciones de instancia óptimos.",
    multiSelect: true
},
{
    question: "119. ¿Qué plan de soporte de AWS asigna un agente concierge de AWS a la cuenta de una empresa?",
    options: [
        "A. Soporte básico de AWS",
        "B. Soporte para desarrolladores de AWS",
        "C. Soporte empresarial de AWS",
        "D. Soporte empresarial de AWS"
    ],
    correctAnswer: "D. Soporte empresarial de AWS",
    explanation: "El Soporte empresarial de AWS es el nivel más alto de soporte ofrecido por AWS y proporciona la asistencia más completa y personalizada. Un agente concierge de AWS es un administrador de cuenta técnica dedicado que actúa como un único punto de contacto para la empresa, ayudando a optimizar el entorno de AWS, resolver problemas y acceder a expertos de AWS.",
    multiSelect: false
},
{
    question: "120. ¿Cuál es una ventaja de la computación en la nube de AWS que minimiza los costos variables?",
    options: [
        "A. Alta disponibilidad",
        "B. Economías de escala",
        "C. Alcance global",
        "D. Agilidad"
    ],
    correctAnswer: "B. Economías de escala",
    explanation: "AWS puede lograr costos variables más bajos por unidad de computación al distribuir los costos fijos de construcción y mantenimiento de centros de datos entre un gran número de clientes. Como resultado, AWS puede ofrecer precios más bajos y predecibles a sus clientes, quienes solo pagan por los recursos que consumen.",
    multiSelect: false
},
{
    question: "121. ¿Cuál de los siguientes es una propuesta de valor de AWS que describe la capacidad de un usuario de escalar la infraestructura según la demanda?",
    options: [
        "A. Velocidad de innovación",
        "B. Elasticidad de recursos",
        "C. Arquitectura desacoplada",
        "D. Implementación global"
    ],
    correctAnswer: "B. Elasticidad de recursos",
    explanation: "La elasticidad de recursos significa que el usuario puede aprovisionar o desaprovisionar recursos de forma rápida y fácil, sin ningún compromiso inicial o contrato a largo plazo. Esto puede ayudar a optimizar el costo y rendimiento de la aplicación y responder a las necesidades comerciales cambiantes y expectativas de los clientes.",
    multiSelect: false
},
{
    question: "122. ¿Cuál de los siguientes está disponible para una empresa que tiene un plan de Soporte empresarial de AWS?",
    options: [
        "A. Soporte concierge de AWS",
        "B. Equipo de respuesta a DDoS de AWS (DRT)",
        "C. Administrador de cuenta técnica (TAM) de AWS",
        "D. API de AWS Health"
    ],
    correctAnswer: "D. API de AWS Health",
    explanation: "La API de AWS Health proporciona acceso programático a la información de AWS Health que se presenta en el Panel de estado personal de AWS. Puede ayudar a los usuarios a obtener información oportuna y personalizada sobre eventos que pueden afectar la disponibilidad y el rendimiento de sus recursos de AWS.",
    multiSelect: false
},
{
    question: "123. Una empresa tiene una aplicación con requisitos de hardware robustos. La aplicación debe ser accedida por estudiantes que están usando laptops livianas y de bajo costo.",
    options: [
        "A. Amazon AppStream 2.0",
        "B. AWS AppSync",
        "C. Amazon WorkLink",
        "D. AWS Elastic Beanstalk"
    ],
    correctAnswer: "A. Amazon AppStream 2.0",
    explanation: "Amazon AppStream 2.0 es un servicio de transmisión de aplicaciones completamente administrado y seguro que permite a los clientes transmitir aplicaciones de escritorio desde AWS a cualquier dispositivo con un navegador web. Maneja el aprovisionamiento, escalado, parcheo y mantenimiento de la infraestructura backend, entregando alto rendimiento y experiencia de usuario receptiva.",
    multiSelect: false
},
{
    question: "124. ¿Qué es una zona de disponibilidad?",
    options: [
        "A. Una ubicación donde los usuarios pueden implementar servicios de AWS seleccionados donde actualmente no hay región de AWS",
        "B. Uno o más centros de datos discretos con energía, redes y conectividad redundantes",
        "C. Uno o más clústeres de servidores en los que se pueden implementar nuevas cargas de trabajo",
        "D. Una red de entrega de contenido (CDN) rápida que entrega datos, videos, aplicaciones y API de forma segura a usuarios globalmente"
    ],
    correctAnswer: "B. Uno o más centros de datos discretos con energía, redes y conectividad redundantes",
    explanation: "Las zonas de disponibilidad son ubicaciones físicamente separadas dentro de una región de AWS que están diseñadas para estar aisladas de fallas y conectadas por redes de baja latencia, alto rendimiento y altamente redundantes. Cada zona de disponibilidad contiene uno o más centros de datos que albergan los servidores y dispositivos de almacenamiento que ejecutan los servicios de AWS.",
    multiSelect: false
},
{
    question: "125. ¿Cuáles de los siguientes son principios de diseño para la confiabilidad en la nube de AWS? (Seleccione DOS)",
    options: [
        "A. Construir arquitecturas con recursos estrechamente acoplados.",
        "B. Usar AWS Trusted Advisor para cumplir con las mejores prácticas de seguridad.",
        "C. Usar automatización para recuperarse de fallas inmediatamente.",
        "D. Dimensionar adecuadamente las instancias de Amazon EC2 para garantizar un rendimiento óptimo.",
        "E. Simular fallas para probar procesos de recuperación."
    ],
    correctAnswer: ["C. Usar automatización para recuperarse de fallas inmediatamente.", "E. Simular fallas para probar procesos de recuperación."],
    explanation: "Al usar automatización, los sistemas pueden detectar y remediar fallas sin intervención humana, reduciendo el impacto y la duración de las fallas y mejorando la disponibilidad del sistema. Probar regularmente los procedimientos de recuperación usando escenarios simulados puede ayudar a identificar brechas y mejorar el proceso de recuperación.",
    multiSelect: true
},
{
    question: "126. ¿Quién es responsable de desmantelar los dispositivos de almacenamiento subyacentes que llegan al final de su vida útil y se usan para alojar datos en AWS?",
    options: [
        "A. Cliente",
        "B. AWS",
        "C. Creador de cuenta",
        "D. Equipo de auditoría"
    ],
    correctAnswer: "B. AWS",
    explanation: "AWS es responsable de desmantelar los dispositivos de almacenamiento subyacentes que llegan al final de su vida útil, usando métodos detallados en DoD 5220.22-M o NIST 800-88.",
    multiSelect: false
},
{
    question: "127. ¿Qué servicio de AWS requiere que el cliente actualice el sistema operativo invitado?",
    options: [
        "A. AWS Lambda",
        "B. Amazon OpenSearch Service",
        "C. Amazon EC2",
        "D. Amazon ElastiCache"
    ],
    correctAnswer: "C. Amazon EC2",
    explanation: "Los clientes son responsables de actualizar y parchear el sistema operativo invitado en instancias de Amazon EC2.",
    multiSelect: false
},
{
    question: "128. ¿Qué perspectiva incluye capacidades fundamentales del Marco de Adopción de la Nube de AWS?",
    options: [
        "A. Sostenibilidad",
        "B. Operaciones",
        "C. Eficiencia del rendimiento",
        "D. Confiabilidad"
    ],
    correctAnswer: "B. Operaciones",
    explanation: "Operaciones es una capacidad fundamental en el Marco de Adopción de la Nube de AWS, enfocándose en procesos de soporte y mantenimiento.",
    multiSelect: false
},
{
    question: "129. ¿Qué principio de diseño de la nube de AWS se sigue al usar AWS CloudTrail?",
    options: [
        "A. Recuperarse automáticamente",
        "B. Realizar operaciones como código",
        "C. Medir la eficiencia",
        "D. Asegurar la trazabilidad"
    ],
    correctAnswer: "D. Asegurar la trazabilidad",
    explanation: "Usar AWS CloudTrail se alinea con el principio de diseño de asegurar la trazabilidad al registrar llamadas de API y eventos.",
    multiSelect: false
},
{
    question: "130. ¿Qué servicio de AWS ofrece una CDN global para entrega segura de contenido con alta velocidad y baja latencia?",
    options: [
        "A. Amazon EC2",
        "B. Amazon CloudFront",
        "C. Amazon CloudWatch",
        "D. AWS CloudFormation"
    ],
    correctAnswer: "B. Amazon CloudFront",
    explanation: "Amazon CloudFront es un servicio de CDN global para entrega segura y rápida de contenido.",
    multiSelect: false
},
{
    question: "131. Para una carga de trabajo de producción estable de un año, ¿cuál es la opción de compra de instancia de AWS más rentable?",
    options: [
        "A. Hosts dedicados",
        "B. Instancias reservadas",
        "C. Instancias bajo demanda",
        "D. Instancias spot"
    ],
    correctAnswer: "B. Instancias reservadas",
    explanation: "Las instancias reservadas ofrecen descuentos significativos y son adecuadas para cargas de trabajo estables a largo plazo.",
    multiSelect: false
},
{
    question: "132. Para acceder a un informe sobre el impacto ambiental del uso de AWS, ¿qué servicio o característica debe usar una empresa?",
    options: [
        "A. AWS Organizations",
        "B. Política de IAM",
        "C. Consola de facturación de AWS",
        "D. Amazon SNS"
    ],
    correctAnswer: "C. Consola de facturación de AWS",
    explanation: "La Consola de facturación de AWS proporciona informes sobre el impacto ambiental estimado del uso de AWS.",
    multiSelect: false
},
{
    question: "133. ¿Cuáles opciones son perspectivas que incluyen capacidades fundamentales del Marco de Adopción de la Nube de AWS? (Seleccione DOS.)",
    options: [
        "A. Sostenibilidad",
        "B. Seguridad",
        "C. Operaciones",
        "D. Eficiencia del rendimiento",
        "E. Confiabilidad"
    ],
    correctAnswer: [
        "C. Operaciones",
        "D. Eficiencia del rendimiento"
    ],
    explanation: "Operaciones y Eficiencia del rendimiento son capacidades fundamentales en el Marco de Adopción de la Nube de AWS.",
    multiSelect: true
},
{
    question: "134. Para optimizar los costos de computación a largo plazo de funciones de AWS Lambda e instancias de Amazon EC2, ¿qué opción de compra de AWS se debe elegir?",
    options: [
        "A. Hosts dedicados",
        "B. Planes de ahorro de computación",
        "C. Instancias reservadas",
        "D. Instancias spot"
    ],
    correctAnswer: "B. Planes de ahorro de computación",
    explanation: "Los Planes de ahorro de computación ofrecen hasta 66% de descuento y son adecuados para optimización de costos de computación a largo plazo.",
    multiSelect: false
},
{
    question: "135. Para un almacén de datos en memoria compatible con la nube, ¿qué servicio de AWS se debe usar?",
    options: [
        "A. Amazon DynamoDB",
        "B. Amazon ElastiCache",
        "C. Amazon EBS",
        "D. Amazon Redshift"
    ],
    correctAnswer: "B. Amazon ElastiCache",
    explanation: "Amazon ElastiCache ofrece soluciones de almacén de datos en memoria escalables, compatibles con motores de código abierto.",
    multiSelect: false
},
{
    question: "136. ¿Qué servicio o herramienta de AWS proporciona acceso bajo demanda a informes de seguridad y cumplimiento de AWS?",
    options: [
        "A. AWS Artifact",
        "B. AWS Trusted Advisor",
        "C. Amazon Inspector",
        "D. Consola de facturación de AWS"
    ],
    correctAnswer: "A. AWS Artifact",
    explanation: "AWS Artifact proporciona acceso bajo demanda a informes de seguridad y cumplimiento de AWS y acuerdos.",
    multiSelect: false
},
{
    question: "137. ¿Qué plan de soporte de AWS incluye servicio de conserjería, un administrador de cuenta técnica (TAM) designado y soporte técnico 24/7?",
    options: [
        "A. Soporte básico de AWS",
        "B. Soporte empresarial de AWS",
        "C. Soporte empresarial de AWS",
        "D. Soporte para desarrolladores de AWS"
    ],
    correctAnswer: "B. Soporte empresarial de AWS",
    explanation: "El Soporte empresarial de AWS ofrece servicio de conserjería, un TAM designado y soporte técnico 24/7.",
    multiSelect: false
},
{
    question: "138. Para entregar archivos estáticos de forma segura globalmente, ¿qué solución de AWS se debe usar?",
    options: [
        "A. Amazon Kinesis Data Streams",
        "B. Amazon CloudFront con Amazon S3",
        "C. Instancias de Amazon EC2 con un Application Load Balancer",
        "D. Amazon EFS"
    ],
    correctAnswer: "B. Amazon CloudFront con Amazon S3",
    explanation: "Amazon CloudFront con Amazon S3 proporciona una forma segura y rápida de entregar archivos estáticos globalmente.",
    multiSelect: false
},
{
    question: "139. ¿Qué principio de diseño está incluido en el pilar de excelencia operativa del Marco de Buena Arquitectura de AWS?",
    options: [
        "A. Crear documentación anotada",
        "B. Anticipar fallas",
        "C. Asegurar eficiencia del rendimiento",
        "D. Optimizar costos"
    ],
    correctAnswer: "A. Crear documentación anotada",
    explanation: "Crear documentación anotada apoya la excelencia operativa al mejorar la comprensión y gestión de cargas de trabajo.",
    multiSelect: false
},
{
    question: "140. Para migrar Microsoft SQL Server de local a la nube de AWS con sobrecarga de gestión reducida, ¿qué servicio de AWS se debe usar?",
    options: [
        "A. Amazon Elastic Container Service",
        "B. Amazon SageMaker",
        "C. Amazon RDS",
        "D. Amazon Athena"
    ],
    correctAnswer: "C. Amazon RDS",
    explanation: "Amazon RDS admite múltiples motores de base de datos, incluido Microsoft SQL Server, reduciendo la sobrecarga de gestión.",
    multiSelect: false
},
{
    question: "141. En el Modelo de Responsabilidad Compartida de AWS, ¿a qué se refiere 'seguridad de la nube'?",
    options: [
        "A. Disponibilidad de servicios de AWS",
        "B. Seguridad de la infraestructura de la nube",
        "C. Políticas de contraseñas para usuarios de IAM",
        "D. Seguridad de entornos de clientes"
    ],
    correctAnswer: "B. Seguridad de la infraestructura de la nube",
    explanation: "'Seguridad de la nube' se refiere a la responsabilidad de AWS de proteger la infraestructura que ejecuta los servicios de AWS.",
    multiSelect: false
},
{
    question: "142. Para una aplicación de compras que requiere un servicio de base de datos administrada para almacenamiento de datos, ¿qué servicio de AWS se debe usar?",
    options: [
        "A. Amazon RDS",
        "B. Amazon Redshift",
        "C. Amazon ElastiCache",
        "D. Amazon Neptune"
    ],
    correctAnswer: "A. Amazon RDS",
    explanation: "Amazon RDS es adecuado para aplicaciones que requieren servicios de base de datos relacional administrados.",
    multiSelect: false
},
{
    question: "143. ¿Qué servicio o herramienta de AWS ayuda a las empresas a medir el impacto ambiental de su uso de AWS?",
    options: [
        "A. Herramienta de huella de carbono del cliente de AWS",
        "B. AWS Compute Optimizer",
        "C. Pilar de sostenibilidad",
        "D. OS-Climate"
    ],
    correctAnswer: "A. Herramienta de huella de carbono del cliente de AWS",
    explanation: "La Herramienta de huella de carbono del cliente de AWS proporciona información sobre el impacto ambiental del uso de AWS.",
    multiSelect: false
},
{
    question: "144. Para implementar aplicaciones de monitoreo lo más cerca posible de máquinas de fábrica con la menor latencia, ¿qué solución de AWS se debe usar?",
    options: [
        "A. AWS Outposts",
        "B. Amazon EC2",
        "C. AWS App Runner",
        "D. AWS Batch"
    ],
    correctAnswer: "A. AWS Outposts",
    explanation: "AWS Outposts permite implementar servicios de AWS más cerca de instalaciones locales, reduciendo la latencia.",
    multiSelect: false
},
{
    question: "145. Para mejorar el impacto de sostenibilidad, ¿qué prácticas recomendadas debe implementar una empresa? (Seleccione DOS.)",
    options: [
        "A. Escalar la infraestructura con la carga del usuario",
        "B. Maximizar la distancia entre cargas de trabajo y ubicaciones de usuarios",
        "C. Eliminar activos no utilizados",
        "D. Escalar recursos con capacidad excesiva",
        "E. Escalar la infraestructura según el recuento de usuarios"
    ],
    correctAnswer: [
        "A. Escalar la infraestructura con la carga del usuario",
        "C. Eliminar activos no utilizados"
    ],
    explanation: "Escalar la infraestructura con la carga del usuario y eliminar activos no utilizados ayudan a reducir el desperdicio y mejorar la sostenibilidad.",
    multiSelect: true
},
{
    question: "146. En el Modelo de Responsabilidad Compartida de AWS, ¿cuáles tareas son responsabilidad de AWS? (Seleccione DOS.)",
    options: [
        "A. Configurar IAM",
        "B. Configurar grupos de seguridad de instancias EC2",
        "C. Asegurar el acceso a instalaciones de AWS",
        "D. Aplicar parches a aplicaciones en instancias EC2",
        "E. Mantener la infraestructura"
    ],
    correctAnswer: [
        "C. Asegurar el acceso a instalaciones de AWS",
        "E. Mantener la infraestructura"
    ],
    explanation: "AWS es responsable de asegurar el acceso físico a las instalaciones y mantener la infraestructura en el Modelo de Responsabilidad Compartida.",
    multiSelect: true
},
{
    question: "147. ¿En qué categorías proporciona AWS Trusted Advisor acciones recomendadas? (Seleccione DOS.)",
    options: [
        "A. Parches del sistema operativo",
        "B. Optimización de costos",
        "C. Tareas repetitivas",
        "D. Cuotas de servicio",
        "E. Registros de actividad de cuenta"
    ],
    correctAnswer: [
        "B. Optimización de costos",
        "D. Cuotas de servicio"
    ],
    explanation: "AWS Trusted Advisor es un servicio que proporciona orientación en tiempo real para ayudarle a aprovisionar sus recursos siguiendo las mejores prácticas de AWS. Trusted Advisor proporciona acciones recomendadas en cinco categorías: optimización de costos, rendimiento, seguridad, tolerancia a fallas y cuotas de servicio.",
    multiSelect: true
},
{
    question: "148. ¿Qué servicio de AWS es siempre gratuito para los usuarios?",
    options: [
        "A. Amazon S3",
        "B. Amazon Aurora",
        "C. Amazon EC2",
        "D. AWS Identity and Access Management (IAM)"
    ],
    correctAnswer: "D. AWS Identity and Access Management (IAM)",
    explanation: "AWS Identity and Access Management (IAM) es un servicio que permite a los usuarios administrar el acceso a servicios y recursos de AWS. IAM es siempre gratuito para los usuarios.",
    multiSelect: false
},
{
    question: "149. Una empresa quiere mejorar el rendimiento global de su servicio de comercio electrónico basado en web. ¿Qué debe hacer la empresa para cumplir este requisito?",
    options: [
        "A. Cambiar la clase de almacenamiento de S3 a S3 Intelligent-Tiering.",
        "B. Implementar una distribución de Amazon CloudFront para almacenar en caché el contenido del servidor web.",
        "C. Usar Amazon API Gateway para el servicio web.",
        "D. Migrar los servidores de comercio electrónico del sitio web a Amazon EC2 con redes mejoradas."
    ],
    correctAnswer: "B. Implementar una distribución de Amazon CloudFront para almacenar en caché el contenido del servidor web.",
    explanation: "Amazon CloudFront es un servicio de red de entrega de contenido (CDN) que entrega datos, videos, aplicaciones y APIs de forma segura a clientes globalmente con baja latencia y altas velocidades de transferencia.",
    multiSelect: false
},
{
    question: "150. ¿Qué servicios o herramientas de AWS están diseñados para proteger una carga de trabajo de inyección SQL, scripting entre sitios y ataques DDoS? (Seleccione DOS.)",
    options: [
        "A. Punto de conexión de VPC",
        "B. AWS Shield Standard",
        "C. AWS Config",
        "D. AWS WAF"
    ],
    correctAnswer: [
        "B. AWS Shield Standard",
        "D. AWS WAF"
    ],
    explanation: "AWS Shield Standard y AWS WAF son servicios diseñados para proteger cargas de trabajo contra inyección SQL, scripting entre sitios y ataques DDoS.",
    multiSelect: true
},
{ question: "151. A company is building an application that will receive millions of database queries per second. Which AWS service will meet this need?", options: ["A. Amazon DynamoDB", "B. AWS Cloud9", "C. Amazon ElastiCache for Memcached", "D. Amazon Neptune"], correctAnswer: "A. Amazon DynamoDB", explanation: "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.", multiSelect: false },
{
    question: "152. A company is using Amazon RDS and wants to increase the resiliency of their business-critical application. How can the company increase the resiliency of this application?",
    options: [
        "A. Implement a copy of the application in another AWS account.",
        "B. Use multiple VPCs for the application.",
        "C. Use multiple subnets for the application.",
        "D. Use multiple Availability Zones."
    ],
    correctAnswer: "D. Use multiple Availability Zones.",
    explanation: "Using multiple Availability Zones is the best way to increase the resiliency of the application, maintaining high availability even in the case of failures.",
    multiSelect: false
},
{
    question: "153. A developer needs to maintain a development environment infrastructure and a production environment in a repeatable manner. Which AWS service should the developer use to meet these requirements?",
    options: [
        "A. AWS Ground Station",
        "B. AWS Shield",
        "C. AWS IoT Device Defender",
        "D. AWS CloudFormation"
    ],
    correctAnswer: "D. AWS CloudFormation",
    explanation: "AWS CloudFormation allows you to model and provision AWS and third-party resources in a predictable and repeatable manner, ideal for maintaining multiple environments.",
    multiSelect: false

},
{
    question: "154. Which actions are examples of a company's effort to right-size their AWS resources to control cloud costs? (Select TWO.)",
    options: [
        "A. Switching from Amazon RDS to Amazon DynamoDB.",
        "B. Selecting Amazon EC2 instance types based on previous utilization patterns.",
        "C. Using Amazon S3 lifecycle policies to move infrequently accessed objects to lower-cost storage tiers.",
        "D. Using Multi-AZ deployments for Amazon RDS.",
        "E. Replacing existing Amazon EC2 instances with AWS Elastic Beanstalk."
    ],
    correctAnswer: [
        "B. Selecting Amazon EC2 instance types based on previous utilization patterns.",
        "C. Using Amazon S3 lifecycle policies to move infrequently accessed objects to lower-cost storage tiers."
    ],
    explanation: "Selecting EC2 instance types based on past utilization and using S3 lifecycle policies to reduce costs are cost optimization strategies.",
    multiSelect: true
},
{
    question: "155. A company suspects their AWS resources are being used for illegal activities. Which AWS group or team should the company notify?",
    options: [
        "A. AWS Abuse Team",
        "B. AWS Support Team",
        "C. AWS Technical Account Managers",
        "D. AWS Professional Services Team"
    ],
    correctAnswer: "A. AWS Abuse Team",
    explanation: "In case of suspected illegal activities, the company should notify the AWS Abuse Team.",
    multiSelect: false

},
{
    question: "156. A company has an Amazon S3 bucket containing images of scanned financial invoices. The company is building an AI-based application on AWS to identify and read the total balance values on the invoices. Which AWS service will meet these requirements?",
    options: [
        "A. Amazon Forecast",
        "B. Amazon Textract",
        "C. Amazon Rekognition",
        "D. Amazon Lex"

    ],
    correctAnswer: "B. Amazon Textract",
    explanation: "Amazon Textract is capable of extracting text and data from scanned documents, ideal for reading values on invoices.",
    multiSelect: false
},
{
    question: "157. Which benefit of the AWS cloud helps companies to achieve lower usage costs due to the aggregate usage of all AWS users?",
    options: [
        "A. No need to guess capacity",
        "B. Ability to go global in minutes",
        "C. Economies of scale",
        "D. Increased speed and agility"
    ],
    correctAnswer: "C. Economies of scale",
    explanation: "Economies of scale allow AWS to offer lower costs as a result of the aggregate usage of all AWS users.",
    multiSelect: false
},
{
    question: "158. (BONUS QUESTION SAA-03) A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents on an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that each time they refreshed the website, they could see a subset of their documents or the other, but never all documents at the same time. What should the solutions architect propose to ensure users see all their documents at once?",
    options: [
        "A. Copy the data so both EBS volumes contain all documents",
        "B. Configure the Application Load Balancer to route a user to the server with the documents",
        "C. Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS",
        "D. Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server"
    ],
    correctAnswer: "C. Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS",
    explanation: "The ideal solution involves using Amazon EFS, which is a storage system that can be accessed simultaneously by multiple EC2 instances from different Availability Zones, ensuring that all users see all their documents regardless of the instance they are routed to by the Application Load Balancer.",
    multiSelect: false
},
{
    question: "159. A company is running workloads for multiple departments within a single VPC. The company needs to be able to bill each department for their resource usage. Which action should the company take to accomplish this goal with the LEAST operational overhead?",
    options: [
        "A. Add a department tag to each resource and configure cost allocation tags.",
        "B. Move each department's resources to their own VPC.",
        "C. Move each department's resources to their own AWS account.",
        "D. Use AWS Organizations to get a billing report for each department."
    ],
    correctAnswer: [
        "A. Add a department tag to each resource and configure cost allocation tags."
    ],
    explanation: "Adding a department tag to each resource and configuring cost allocation tags is an action that can help you achieve the goal of billing each department for their resource usage with the least operational overhead.",
    multiSelect: false
},
{
    question: "160. A company needs a repository that stores source code. The company needs a way to update running software when the code changes. Which combination of AWS services meets these requirements? (Select TWO.)",
    options: [
        "A. AWS CodeCommit",
        "B. AWS CodeDeploy",
        "C. Amazon DynamoDB",
        "D. Amazon S3",
        "E. Amazon Elastic Container Service (Amazon ECS)"

    ],
    correctAnswer: [
        "A. AWS CodeCommit",
        "B. AWS CodeDeploy"
    ],
    explanation: "AWS CodeCommit and AWS CodeDeploy are correct because AWS CodeCommit is a service that provides a fully managed source control service that hosts secure Git repositories, and AWS CodeDeploy is a service that automates code deployments to any instance, including Amazon EC2 instances and on-premises servers.",
    multiSelect: true
},
{
    question: "161. A company has an application workload that is designed to be stateless and can withstand occasional interruptions. The application performs massively parallel computations. Which Amazon EC2 instance pricing model should the company choose to reduce costs?",
    options: [
        "A. On-Demand Instances",
        "B. Spot Instances",
        "C. Reserved Instances",
        "D. Dedicated Instances"
    ],
    correctAnswer: "B. Spot Instances",
    explanation: "Spot Instances allow you to take advantage of unused EC2 capacity in the AWS cloud available at up to a 90% discount compared to On-Demand prices.",
    multiSelect: false
},
{
    question: "162. A manufacturing company has a mission-critical application that runs in a remote location with a slow internet connection. The company wants to migrate the workload to AWS. The application is latency-sensitive and prone to connectivity disruptions. Which AWS service or feature should the company use to meet these requirements?",
    options: [
        "A. Availability Zones",
        "B. AWS Local Zones",
        "C. AWS Wavelength",
        "D. AWS Outposts"
    ],
    correctAnswer: "D. AWS Outposts",
    explanation: "AWS Outposts is a service that offers fully managed and configurable compute and storage racks, allowing you to run workloads on-premises and connect to AWS services in the cloud.",
    multiSelect: false
},
{
    question: "163. Which AWS service is designed to help users orchestrate a workflow process for a set of AWS Lambda functions?",
    options: [
        "A. Amazon DynamoDB",
        "B. AWS CodePipeline",
        "C. AWS Batch",
        "D. AWS Step Functions"
    ],
    correctAnswer: "D. AWS Step Functions",
    explanation: "AWS Step Functions is a service that allows you to coordinate multiple AWS services into serverless workflows that can be triggered by events.",
    multiSelect: false
},
{
    question: "165. A company provides a software as a service (SaaS) application. The company has a new customer that is based in a different country. The new customer's data needs to be hosted in that country. Which AWS service or infrastructure component should the company use to meet this requirement?",
    options: [
        "A. AWS Shield",
        "B. Amazon S3 Object Lock",
        "C. AWS Regions",
        "D. Placement groups"
    ],
    correctAnswer: "C. AWS Regions",
    explanation: "AWS Regions are geographic areas around the world where AWS has clusters of data centers. By hosting the customer's data in a specific AWS Region, the company can meet the requirement of hosting the data in the customer's country.",
    multiSelect: false
},
{
    question: "166. A company needs to host a web server on Amazon EC2 instances for at least 1 year. The web server cannot tolerate interruptions. Which EC2 instance purchase option will meet these requirements in the MOST cost-effective way?",
    options: [
        "A. On-Demand Instances",
        "B. Reserved Instances with Partial Upfront payment",
        "C. Spot Instances",
        "D. Reserved Instances with No Upfront payment"
    ],
    correctAnswer: [
        "B. Reserved Instances with Partial Upfront payment"
    ],
    explanation: "Reserved Instances with Partial Upfront payment are the most cost-effective option for predictable workloads that require continuous operation.",
    multiSelect: false
},
{
    question: "167. Which group shares responsibility with AWS for the security and compliance of AWS accounts and resources?",
    options: [
        "A. Outsourced vendors",
        "B. Customers",
        "C. Reseller partners",
        "D. Internet providers"
    ],
    correctAnswer: [
        "B. Customers"
    ],
    explanation: "In the AWS Shared Responsibility Model, customers are responsible for security 'in the cloud', which includes access control and data management.",
    multiSelect: false
},
{
    question: "168. A company has set up a VPC in its AWS account and created a subnet in the VPC. The company wants to make the subnet public. Which AWS resources should the company use to meet this requirement? (Select TWO.)",
    options: [
        "A. Amazon VPC internet gateway",
        "B. Amazon VPC NAT gateway",
        "C. Amazon VPC route tables",
        "D. Amazon VPC network ACLs",
        "E. Amazon EC2 security groups"
    ],
    correctAnswer: [
        "A. Amazon VPC internet gateway",
        "C. Amazon VPC route tables"
    ],
    explanation: "To make a subnet public, the company needs to use an Amazon VPC internet gateway and configure appropriate route tables.",
    multiSelect: true
},
{
    question: "169. Which AWS tool or service should a company use to forecast AWS spending?",
    options: [
        "A. Amazon DevPay",
        "B. AWS Organizations",
        "C. AWS Trusted Advisor",
        "D. Cost Explorer"
    ],
    correctAnswer: [
        "D. Cost Explorer"
    ],
    explanation: "Cost Explorer is a tool that allows users to analyze and forecast AWS spending, helping to plan future budgets.",
    multiSelect: false
},
{
    question: "170. Which of the following is a customer responsibility, according to the AWS Shared Responsibility Model?",
    options: [
        "A. Identity and access management",
        "B. Hard drive disposal",
        "C. Data center hardware security",
        "D. Availability Zone security"
    ],
    correctAnswer: [
        "A. Identity and access management"
    ],
    explanation: "In the AWS Shared Responsibility Model, identity and access management is a customer responsibility.",
    multiSelect: false
},
{
    question: "171. Which capabilities are in the platform perspective of the AWS Cloud Adoption Framework (AWS CAF)? (Select TWO.)",
    options: [
        "A. Performance and capacity management",
        "B. Data engineering",
        "C. Continuous integration and continuous delivery (CI/CD)",
        "D. Infrastructure protection",
        "E. Change and release management"
    ],
    correctAnswer: ["B. Data engineering", "C. Continuous integration and continuous delivery (CI/CD)"],
    explanation: "These are two of the seven capabilities that are in the platform perspective of the AWS Cloud Adoption Framework (AWS CAF). The platform perspective helps you build a scalable and enterprise-grade hybrid cloud platform, modernize existing workloads, and implement new cloud-native solutions.",
    multiSelect: true
},
{
    question: "172. A company wants to query their server logs for insights on their customers' experiences. Which AWS service will store this data MOST cost-effectively?",
    options: [
        "A. Amazon Aurora",
        "B. Amazon Elastic File System (Amazon EFS)",
        "C. Amazon Elastic Block Store (Amazon EBS)",
        "D. Amazon S3"
    ],
    correctAnswer: "D. Amazon S3",
    explanation: "Amazon S3 is an AWS service that provides scalable, durable, and cost-effective object storage in the cloud. Amazon S3 can store any amount and type of data, such as server logs, and offers multiple storage classes with different performance and price characteristics.",
    multiSelect: false
},
{
    question: "173. A company wants to generate a list of IAM users. The company also wants to view the status of various credentials associated with the users, such as passwords, access keys, and multi-factor authentication (MFA) devices. Which AWS service or feature will meet these requirements?",
    options: [
        "A. IAM credential report",
        "B. AWS IAM Identity Center (AWS Single Sign-On)",
        "C. AWS Identity and Access Management Access Analyzer",
        "D. AWS Cost and Usage Report"
    ],
    correctAnswer: "A. IAM credential report",
    explanation: "An IAM credential report is a feature of AWS Identity and Access Management (IAM) that allows you to view and download a report that lists all the IAM users in your account and the status of their various credentials, such as passwords, access keys, and MFA devices.",
    multiSelect: false
},
{
    question: "174. Which AWS service provides a single place to track the progress of application migrations?",
    options: [
        "A. AWS Application Discovery Service",
        "B. AWS Application Migration Service",
        "C. AWS Service Catalog",
        "D. AWS Migration Hub"
    ],
    correctAnswer: "D. AWS Migration Hub",
    explanation: "AWS Migration Hub is a service that provides a single place to track the progress of application migrations across multiple AWS and partner solutions. It allows you to choose the AWS and partner migration tools that best fit your needs, while providing visibility into the status of migrations across your application portfolio.",
    multiSelect: false
},
{
    question: "175. A company runs an on-premises MySQL database. The company wants to run a copy of this database in the AWS cloud. Which AWS service would support this workload?",
    options: [
        "A. Amazon RDS",
        "B. Amazon Neptune",
        "C. Amazon ElastiCache for Redis",
        "D. Amazon Quantum Ledger Database (Amazon QLDB)"
    ],
    correctAnswer: "A. Amazon RDS",
    explanation: "Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching, and backups. Amazon RDS supports six popular database engines: Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database, and SQL Server.",
    multiSelect: false
},
{
    question: "176. A company needs to implement identity management for a fleet of mobile applications running in the AWS cloud. Which AWS service will meet this requirement?",
    options: [
        "A. Amazon Cognito",
        "B. AWS Security Hub",
        "C. AWS Shield",
        "D. AWS WAF"
    ],
    correctAnswer: "A. Amazon Cognito",
    explanation: "Amazon Cognito is a service that provides user identity and authentication for mobile and web applications, allowing users to sign up, sign in, and access AWS resources with different identity providers.",
    multiSelect: false
},
{
    question: "177. A company needs an automated vulnerability management service that continuously scans AWS workloads for software vulnerabilities. Which AWS service will meet these requirements?",
    options: [
        "A. Amazon GuardDuty",
        "B. Amazon Inspector",
        "C. AWS Security Hub",
        "D. AWS Shield"
    ],
    correctAnswer: "B. Amazon Inspector",
    explanation: "Amazon Inspector is an automated vulnerability management service that continuously scans AWS workloads for software vulnerabilities and unintended network exposure. Amazon Inspector automatically discovers workloads such as Amazon EC2 instances, containers, and Lambda functions, and scans them for software vulnerabilities and unintended network exposure.",
    multiSelect: false
},
{
    question: "178. Which tasks are customer responsibilities, according to the AWS Shared Responsibility Model? (Select TWO.)",
    options: [
        "A. Configure the AWS-provided security group firewall.",
        "B. Classify the company's assets on the AWS cloud.",
        "C. Determine which Availability Zones to use for Amazon S3 buckets.",
        "D. Patch or update Amazon DynamoDB.",
        "E. Select Amazon EC2 instances to run AWS Lambda.",
        "F. AWS Config"
    ],
    correctAnswer: ["A. Configure the AWS-provided security group firewall.", "B. Classify the company's assets on the AWS cloud."],
    explanation: "According to the AWS Shared Responsibility Model, the customer is responsible for security in the cloud, which includes the tasks of configuring the AWS-provided security group firewall and classifying the company's assets on the AWS cloud.",
    multiSelect: true
},
{
    question: "179. A company wants to monitor the performance of their workload. The company wants to ensure that cloud services are delivered at a level that meets their business needs. Which perspective of the AWS Cloud Adoption Framework (AWS CAF) will meet these requirements?",
    options: [
        "A. Business",
        "B. Governance",
        "C. Platform",
        "D. Operations"
    ],
    correctAnswer: "D. Operations",
    explanation: "The Operations perspective helps you monitor and manage your cloud workloads to ensure that they are delivered at a level that meets your business needs. Common stakeholders include the chief operating officer (COO), cloud director, cloud operations manager, and cloud operations engineers.",
    multiSelect: false
},
{
    question: "180. A company needs a managed machine learning (ML) service that can recommend products based on a customer's previous behaviors. Which AWS service meets this requirement?",
    options: [
        "A. Amazon Personalize",
        "B. Amazon SageMaker",
        "C. Amazon Pinpoint",
        "D. Amazon Comprehend"
    ],
    correctAnswer: "A. Amazon Personalize",
    explanation: "Amazon Personalize is a fully managed service that allows developers to create customized recommendations for customers using their own data. Amazon Personalize can process and examine data, identify what is meaningful, select the right algorithms, and train and optimize a personalized recommendation model automatically.",
    multiSelect: false
},
{
    question: "181. What is the purpose of having an Internet gateway within a VPC?",
    options: [
        "A. Create a VPN connection to the VPC",
        "B. Allow communication between the VPC and the Internet",
        "C. Enforce bandwidth restrictions on Internet traffic",
        "D. Load balance Internet traffic across Amazon EC2 instances"
    ],
    correctAnswer: "B. Allow communication between the VPC and the Internet",
    explanation: "An Internet gateway is a service that allows Internet traffic to come into a VPC. Otherwise, a VPC is completely segmented and the only way to access it is potentially through a VPN connection rather than an Internet connection. An Internet gateway is a logical connection between an AWS VPC and the Internet. It supports IPv4 and IPv6 traffic and does not cause availability risks or bandwidth constraints on network traffic.",
    multiSelect: false
},
{
    question: "182. A company is building a mobile application to provide purchase recommendations to its customers. The company wants to use a graph database as part of the purchase recommendation engine. Which AWS database service should the company choose?",
    options: [
        "A. Amazon DynamoDB",
        "B. Amazon Aurora",
        "C. Amazon Neptune",
        "D. Amazon DocumentDB (with MongoDB compatibility)"
    ],
    correctAnswer: "C. Amazon Neptune",
    explanation: "Amazon Neptune is a service that provides a fully managed graph database that supports both property graphs and RDF graphs. It can be used to build applications that work with highly connected datasets, such as purchase recommendations, social networks, fraud detection, and knowledge graphs.",
    multiSelect: false
},
{
    question: "183. A company has teams with different job functions and responsibilities. The company's employees frequently change teams. The company needs to manage the employees' permissions to be appropriate for the job responsibilities. Which IAM feature should the company use to meet this requirement with the LEAST operational overhead?",
    options: [
        "A. IAM user groups",
        "B. IAM roles",
        "C. IAM instance profiles",
        "D. IAM policies for individual users"
    ],
    correctAnswer: "B. IAM roles",
    explanation: "IAM roles are a way to grant temporary permissions to entities that need to access AWS resources, such as users, applications, or services. IAM roles allow customers to assign permissions to entities without having to create or manage IAM users or credentials for them.",
    multiSelect: false
},
{
    question: "184. A company wants to design a reliable web application hosted on Amazon EC2. Which approach will achieve this goal?",
    options: [
        "A. Launch large EC2 instances in the same Availability Zone.",
        "B. Spread EC2 instances across more than one security group.",
        "C. Spread EC2 instances across more than one Availability Zone.",
        "D. Use an Amazon Machine Image (AMI) from the AWS Marketplace."
    ],
    correctAnswer: "C. Spread EC2 instances across more than one Availability Zone.",
    explanation: "The approach that will achieve the goal of designing a reliable web application hosted on Amazon EC2 is to spread the EC2 instances across more than one Availability Zone. An Availability Zone is a physically isolated location within an AWS Region that has its own power, cooling, and network connectivity. By spreading EC2 instances across multiple Availability Zones, users can increase the fault tolerance and availability of their web applications, while reducing latency for end-users.",
    multiSelect: false
},
{
    question: "185. What is the customer's responsibility when using AWS Lambda according to the AWS Shared Responsibility Model?",
    options: [
        "A. Manage the code within the Lambda function",
        "B. Confirm that hardware is functioning in the data center",
        "C. Apply patches to the operating system",
        "D. Turn off Lambda functions when no longer in use"
    ],
    correctAnswer: "A. Manage the code within the Lambda function",
    explanation: "According to the AWS Shared Responsibility Model, AWS is responsible for the security of the cloud, while customers are responsible for security in the cloud. This means that AWS is responsible for the physical servers, network, and operating system that run the Lambda functions, while customers are responsible for the security of their code and AWS IAM for the Lambda service and within their function.",
    multiSelect: false
},
{
    question: "186. A development team wants to deploy multiple test environments for an application quickly and in a repeatable way. Which AWS service should the team use?",
    options: [
        "A. Amazon EC2",
        "B. AWS CloudFormation",
        "C. Amazon QuickSight",
        "D. Amazon Elastic Container Service (Amazon ECS)"
    ],
    correctAnswer: "B. AWS CloudFormation",
    explanation: "AWS CloudFormation is a service that allows you to model and provision your AWS resources using templates. You can define your infrastructure as code and automate the creation and updating of your resources. AWS CloudFormation also supports nested stacks, change sets, and rollback features to help you manage complex and dynamic environments.",
    multiSelect: false
},
{
    question: "187. A developer wants to quickly deploy an application on AWS without manually creating the necessary resources. Which AWS service will meet these requirements?",
    options: [
        "A. Amazon EC2",
        "B. AWS Elastic Beanstalk",
        "C. AWS CodeBuild",
        "D. Amazon Personalize"
    ],
    correctAnswer: "B. AWS Elastic Beanstalk",
    explanation: "AWS Elastic Beanstalk is a service that allows you to deploy and manage applications on AWS without creating and configuring the necessary resources manually, such as EC2 instances, load balancers, security groups, databases, and more. AWS Elastic Beanstalk automatically handles the provisioning, scaling, load balancing, health monitoring, and updating of your application while giving you full control over the underlying AWS resources if needed.",
    multiSelect: false
},
{
    question: "188. Which AWS services can a company use to achieve a loosely coupled architecture? (Select TWO.)",
    options: [
        "A. Amazon Workspaces",
        "B. Amazon Simple Queue Service (Amazon SQS)",
        "C. Amazon Connect",
        "D. AWS Trusted Advisor",
        "E. AWS Step Functions"
    ],
    correctAnswer: ["B. Amazon Simple Queue Service (Amazon SQS)", "E. AWS Step Functions"],
    explanation: "Amazon Simple Queue Service (Amazon SQS) and AWS Step Functions are AWS services that can be used to achieve a loosely coupled architecture. Amazon SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. AWS Step Functions allows you to coordinate multiple AWS services into serverless workflows so you can build and update apps quickly.",
    multiSelect: true
},
{
    question: "189. A company needs to control incoming and outgoing traffic to an Amazon EC2 instance. Which AWS service or feature can the company associate with the EC2 instance to meet this requirement?",
    options: [
        "A. Network ACL",
        "B. Security group",
        "C. AWS WAF",
        "D. VPC route tables"
    ],
    correctAnswer: "B. Security group",
    explanation: "A security group is a virtual firewall that can be associated with an Amazon EC2 instance to control incoming and outgoing traffic to and from the instance. You can specify which protocols, ports, and source or destination IP ranges are allowed or denied by the security group.",
    multiSelect: false
},
{
    question: "190. A company has 5 TB of data stored in Amazon S3. The company plans to occasionally run queries on the data for analysis. Which AWS service should the company use to run these queries in the MOST cost-effective way?",
    options: [
        "A. Amazon Redshift",
        "B. Amazon Athena",
        "C. Amazon Kinesis",
        "D. Amazon RDS"
    ],
    correctAnswer: "B. Amazon Athena",
    explanation: "Amazon Athena is a serverless interactive query service that allows users to run SQL queries on data stored in Amazon S3. It is ideal for ad-hoc queries on large datasets, as it does not require provisioning, configuring, or managing servers. Users only pay for the queries they run, based on the amount of data scanned.",
    multiSelect: false
},
{
    question: "191. A company wants to migrate its database to an AWS managed service that is compatible with PostgreSQL. Which AWS services will meet these requirements? (Select TWO)",
    options: [
        "A. Amazon Athena",
        "B. Amazon RDS",
        "C. Amazon EC2",
        "D. Amazon DynamoDB",
        "E. Amazon Aurora"
    ],
    correctAnswer: ["B. Amazon RDS", "E. Amazon Aurora"],
    explanation: "Amazon RDS and Amazon Aurora are AWS managed services that support the PostgreSQL database engine. Amazon RDS makes it easy to set up, operate, and scale PostgreSQL deployments in the cloud, while Amazon Aurora is a cloud-native database engine compatible with PostgreSQL and offers higher performance and availability.",
    multiSelect: true
},
{
    question: "192. A company's application has high customer usage at certain times of the day. The company wants to reduce the number of running Amazon EC2 instances when application usage is low. Which AWS service or instance purchase option should the company use to meet this requirement?",
    options: [
        "A. EC2 Instance Savings Plans",
        "B. Spot Instances",
        "C. Reserved Instances",
        "D. Amazon EC2 Auto Scaling"
    ],
    correctAnswer: "D. Amazon EC2 Auto Scaling",
    explanation: "Amazon EC2 Auto Scaling is an AWS service that can help users reduce the number of running Amazon EC2 instances when application usage is low. Amazon EC2 Auto Scaling allows users to create scaling policies that automatically adjust the number of EC2 instances based on demand or on a schedule.",
    multiSelect: false
},
{
    question: "193. A company is running an on-premises monolithic application that does not scale and is difficult to maintain. The company has a plan to migrate the application to AWS and break it into microservices. Which AWS Well-Architected Framework best practice is the company following with this plan?",
    options: [
        "A. Integrate functional testing as part of deployment into AWS.",
        "B. Use automation to make changes.",
        "C. Deploy the application in multiple locations.",
        "D. Implement loosely coupled dependencies."
    ],
    correctAnswer: "D. Implement loosely coupled dependencies.",
    explanation: "The company is following the best practice of implementing loosely coupled dependencies by migrating the application to AWS and breaking it into microservices. Loosely coupled dependencies are a design principle of the AWS Well-Architected Framework that helps reduce interdependencies between components and improve system scalability, reliability, and performance.",
    multiSelect: false
},
{
    question: "194. Which AWS service or feature allows users to encrypt data at rest in Amazon S3?",
    options: [
        "A. IAM policies",
        "B. Server-side encryption",
        "C. Amazon GuardDuty",
        "D. Client-side encryption"
    ],
    correctAnswer: "B. Server-side encryption",
    explanation: "Server-side encryption is an encryption option that Amazon S3 provides to encrypt data at rest in Amazon S3. With server-side encryption, Amazon S3 encrypts an object before saving it to disk in its data centers and decrypts it when you download the objects.",
    multiSelect: false
},

{
    question: "195. An IT engineer needs to access AWS services from an on-premises application. What credentials or keys does the application need for authentication?",
    options: [
        "A. AWS account username and password",
        "B. IAM access key and secret",
        "C. Amazon EC2 key pairs",
        "D. AWS Key Management Service (AWS KMS) keys"
    ],
    correctAnswer: "B. IAM access key and secret",
    explanation: "IAM access keys are long-term credentials that consist of an access key ID and a secret access key. You use access keys to sign programmatic requests that you make to AWS. If you need to access AWS services from an on-premises application, you can use IAM access keys to authenticate your requests.",
    multiSelect: false
},
{
    question: "196. A company wants to migrate its high-performance computing (HPC) application to Amazon EC2 instances. The application has multiple components and must have fault tolerance and automatic failover capabilities. Which AWS infrastructure solution will meet these requirements with the LEAST latency between components?",
    options: [
        "A. Multiple AWS Regions",
        "B. Multiple edge locations",
        "C. Multiple Availability Zones",
        "D. Regional edge caches"
    ],
    correctAnswer: "C. Multiple Availability Zones",
    explanation: "Using EC2 instances in multiple Availability Zones is an AWS infrastructure solution that meets the requirements of migrating a high-performance computing (HPC) application to AWS with fault tolerance and failover capabilities, and with the least latency between components.",
    multiSelect: false
},
{
    question: "197. Elasticity in the AWS cloud refers to which of the following? (Select TWO.)",
    options: [
        "A. How quickly an Amazon EC2 instance can be restarted",
        "B. The ability to scale resources as demand changes",
        "C. The maximum amount of RAM an Amazon EC2 instance can use",
        "D. The pay-for-what-you-use billing model",
        "E. How easily resources can be obtained when needed"
    ],
    correctAnswer: ["B. The ability to scale resources as demand changes", "E. How easily resources can be obtained when needed"],
    explanation: "Elasticity in the AWS cloud refers to the ability to acquire resources as you need them and release resources when you no longer need them. In the cloud, you want to do this automatically. This means that you can scale resources as demand changes and can easily obtain resources when they are needed.",
    multiSelect: true
},
{
    question: "198. Which AWS services or features allow users to create a network connection between two VPCs? (Select TWO.)",
    options: [
        "A. VPC endpoints",
        "B. Amazon Route 53",
        "C. VPC peering",
        "D. AWS Direct Connect",
        "E. AWS Transit Gateway"
    ],
    correctAnswer: ["C. VPC peering", "E. AWS Transit Gateway"],
    explanation: "VPC peering and AWS Transit Gateway are two AWS services or features that allow users to create a network connection between two VPCs.",
    multiSelect: true
},
{
    question: "199. A company has a physical tape library for storing data backups. The tape library is running out of space. The company needs to extend the tape library capacity to the AWS cloud. Which AWS service should the company use to meet this requirement?",
    options: [
        "A. Amazon Elastic File System (Amazon EFS)",
        "B. Amazon Elastic Block Store (Amazon EBS)",
        "C. Amazon S3",
        "D. AWS Storage Gateway"
    ],
    correctAnswer: "D. AWS Storage Gateway",
    explanation: "AWS Storage Gateway is a hybrid cloud storage service that provides on-premises access to virtually unlimited cloud storage. You can use AWS Storage Gateway to simplify storage management and reduce costs for hybrid cloud storage use cases. One of these use cases is tape-based backup, which allows you to store data backups on virtual tapes in the AWS cloud.",
    multiSelect: false
},
{
    question: "200. Which AWS service provides encryption at rest for Amazon RDS and for Amazon Elastic Block Store (Amazon EBS) volumes?",
    options: [
        "A. AWS Lambda",
        "B. AWS Key Management Service (AWS KMS)",
        "C. AWS WAF",
        "D. Amazon Rekognition"
    ],
    correctAnswer: "B. AWS Key Management Service (AWS KMS)",
    explanation: "AWS Key Management Service (AWS KMS) is a managed service that makes it easy for you to create and control the encryption keys used to encrypt your data. AWS KMS provides centralized control over the encryption keys used to protect your data. You can use AWS KMS to encrypt data in Amazon RDS and Amazon EBS volumes.",
    multiSelect: false
}
]; 