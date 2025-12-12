import { Article } from "@/types";

export const modeloResponsabilidadCompartida: Article = {
  id: "d1-art-08",
  slug: "modelo-responsabilidad-compartida",
  title: "Modelo de Responsabilidad Compartida",
  shortDescription:
    "Comprende qué protege AWS y qué debes proteger tú en la nube.",
  certificationId: "aws-clf-c02",
  domainId: "cloud-concepts",
  content: [
    {
      title: "¿Qué es el Modelo de Responsabilidad Compartida?",
      content: `El **Modelo de Responsabilidad Compartida** define claramente qué aspectos de la seguridad son responsabilidad de AWS y cuáles son responsabilidad del cliente.

### La regla simple:

> **AWS es responsable de la seguridad "DE" la nube**
> 
> **El cliente es responsable de la seguridad "EN" la nube**

Este concepto es **fundamental** para el examen CLF-C02. Espera múltiples preguntas al respecto.`,
    },
    {
      title: "Responsabilidades de AWS",
      content: `### AWS protege la infraestructura subyacente:

**Hardware físico:**
- Servidores, storage, equipos de red
- Destrucción segura de discos al final de su vida útil

**Infraestructura de data centers:**
- Seguridad física (guardias, biometría, videovigilancia)
- Control de acceso a instalaciones
- Detección de incendios y supresión
- Energía redundante y refrigeración

**Infraestructura de red:**
- Redes físicas entre regiones y AZs
- Protección DDoS a nivel de infraestructura
- Aislamiento de red entre clientes

**Software de virtualización:**
- Hypervisor que ejecuta las instancias EC2
- Aislamiento entre máquinas virtuales

**Servicios gestionados:**
- Patching del sistema operativo en RDS, Lambda, etc.
- Actualizaciones de seguridad de la plataforma

### AWS mantiene certificaciones:
- SOC 1, 2, 3
- ISO 27001, 27017, 27018
- PCI DSS Level 1
- HIPAA eligible
- FedRAMP
- Y muchas más...

Puedes acceder a estos reportes a través de **AWS Artifact**.`,
    },
    {
      title: "Responsabilidades del Cliente",
      content: `### El cliente protege todo lo que pone en la nube:

**Datos del cliente:**
- Clasificación de datos sensibles
- Cifrado de datos en reposo y en tránsito
- Backups y recuperación

**Gestión de identidades y accesos:**
- Configuración de IAM (usuarios, roles, políticas)
- MFA para cuentas privilegiadas
- Rotación de credenciales y access keys
- Principio de privilegio mínimo

**Configuración del sistema operativo:**
- Patching de instancias EC2
- Hardening del OS
- Antivirus/antimalware

**Configuración de red:**
- Security Groups y NACLs
- Configuración de VPC
- Tablas de enrutamiento

**Configuración de aplicaciones:**
- Código seguro
- Gestión de secretos
- Actualizaciones de dependencias

**Configuración de servicios AWS:**
- Configuración de S3 buckets (no dejar públicos accidentalmente)
- Cifrado habilitado donde corresponda
- Logging y monitoreo habilitados`,
    },
    {
      title: "Responsabilidad según el Tipo de Servicio",
      content: `La línea divisoria cambia según el tipo de servicio que uses:

### IaaS (Infrastructure as a Service) - Ejemplo: EC2

| Responsabilidad | AWS | Cliente |
|-----------------|-----|---------|
| Hardware físico | ✅ | |
| Virtualización | ✅ | |
| Sistema operativo | | ✅ |
| Patching OS | | ✅ |
| Firewall (Security Groups) | | ✅ |
| Datos | | ✅ |

### PaaS (Platform as a Service) - Ejemplo: RDS, Elastic Beanstalk

| Responsabilidad | AWS | Cliente |
|-----------------|-----|---------|
| Hardware físico | ✅ | |
| Sistema operativo | ✅ | |
| Patching OS | ✅ | |
| Motor de BD | ✅ | |
| Backups de BD | | ✅ (configurar) |
| Datos | | ✅ |

### SaaS (Software as a Service) - Ejemplo: Amazon Chime, WorkMail

| Responsabilidad | AWS | Cliente |
|-----------------|-----|---------|
| Todo excepto datos | ✅ | |
| Datos | | ✅ |
| Gestión de usuarios | | ✅ |

### Serverless - Ejemplo: Lambda, DynamoDB, S3

| Responsabilidad | AWS | Cliente |
|-----------------|-----|---------|
| Infraestructura completa | ✅ | |
| Runtime/Plataforma | ✅ | |
| Código de la función | | ✅ |
| Datos | | ✅ |
| Permisos IAM | | ✅ |`,
    },
    {
      title: "Ejemplos Prácticos",
      content: `### Escenario 1: Instancia EC2 comprometida por malware

**¿De quién es la responsabilidad?** → **Del cliente**

AWS protege el hypervisor y el hardware, pero el cliente es responsable de:
- Instalar y actualizar antivirus
- Parchear el sistema operativo
- Configurar Security Groups adecuadamente

---

### Escenario 2: Data center de AWS se inunda

**¿De quién es la responsabilidad?** → **De AWS**

AWS es responsable de:
- Ubicación segura de data centers
- Redundancia en múltiples AZs
- Recuperación de infraestructura

---

### Escenario 3: S3 bucket expuesto públicamente con datos sensibles

**¿De quién es la responsabilidad?** → **Del cliente**

AWS proporciona las herramientas (políticas, ACLs, Block Public Access), pero el cliente es responsable de configurarlas correctamente.

---

### Escenario 4: Vulnerabilidad en el hypervisor de EC2

**¿De quién es la responsabilidad?** → **De AWS**

El hypervisor es parte de la infraestructura que AWS gestiona y parchea.`,
    },
    {
      title: "Controles Compartidos",
      content: `Algunos controles son responsabilidad de ambos en diferentes capas:

### Patch Management
- **AWS:** Parchea infraestructura y servicios gestionados (RDS, Lambda)
- **Cliente:** Parchea instancias EC2 y contenedores

### Configuration Management
- **AWS:** Configura infraestructura de acuerdo a mejores prácticas
- **Cliente:** Configura sus propios servicios y aplicaciones

### Awareness & Training
- **AWS:** Entrena a sus empleados
- **Cliente:** Entrena a sus empleados sobre uso seguro de AWS

### Disaster Recovery
- **AWS:** Mantiene múltiples AZs y regiones disponibles
- **Cliente:** Diseña arquitecturas multi-AZ y hace backups`,
    },
    {
      title: "Mejores Prácticas para el Cliente",
      content: `### 1. Identity & Access Management
- Activar MFA en cuenta root y usuarios privilegiados
- No usar la cuenta root para tareas diarias
- Aplicar principio de privilegio mínimo
- Usar roles en lugar de access keys cuando sea posible

### 2. Protección de Datos
- Habilitar cifrado en S3, EBS, RDS
- Usar AWS KMS para gestionar claves
- Clasificar datos sensibles
- Implementar políticas de retención

### 3. Configuración de Red
- Usar VPCs privadas
- Limitar Security Groups al mínimo necesario
- Usar VPC Flow Logs para auditoría
- Implementar WAF para aplicaciones web

### 4. Detección y Respuesta
- Habilitar CloudTrail en todas las regiones
- Configurar GuardDuty para detección de amenazas
- Usar Config Rules para compliance
- Crear alertas en CloudWatch

### 5. Cumplimiento
- Usar AWS Artifact para reportes de compliance
- Implementar AWS Config para evaluar configuraciones
- Documentar controles de seguridad`,
    },
    {
      title: "Preguntas Típicas del Examen",
      content: `### Ejemplos de preguntas:

**Pregunta 1:**
*"¿Quién es responsable de la seguridad física de los data centers de AWS?"*
→ **AWS** (seguridad DE la nube)

**Pregunta 2:**
*"¿Quién es responsable de configurar Security Groups en instancias EC2?"*
→ **El cliente** (seguridad EN la nube)

**Pregunta 3:**
*"¿Quién es responsable de parchear el sistema operativo de una instancia RDS?"*
→ **AWS** (RDS es servicio gestionado)

**Pregunta 4:**
*"¿Quién es responsable de parchear el sistema operativo de una instancia EC2?"*
→ **El cliente** (EC2 es IaaS)

**Pregunta 5:**
*"¿Quién es responsable de cifrar los datos almacenados en S3?"*
→ **El cliente** (aunque AWS proporciona las herramientas)

### Consejo para el examen:
Si la pregunta es sobre **infraestructura física, hardware, o servicios gestionados** → AWS
Si la pregunta es sobre **datos, configuración, accesos, o sistemas propios** → Cliente`,
    },
  ],
  keyPoints: [
    "AWS: Seguridad DE la nube (infraestructura, hardware, data centers)",
    "Cliente: Seguridad EN la nube (datos, configuración, accesos)",
    "EC2: Cliente parchea el OS. RDS: AWS parchea el OS",
    "El cliente siempre es responsable de sus datos",
    "Security Groups y configuración de red: responsabilidad del cliente",
    "Cifrado: Cliente decide si habilitarlo (AWS provee herramientas)",
    "Servicios más gestionados = menos responsabilidad operativa del cliente",
  ],
  tags: [
    "responsabilidad compartida",
    "seguridad",
    "compliance",
    "shared responsibility",
    "AWS",
    "cliente",
    "IAM",
    "cifrado",
  ],
  relatedServices: ["iam", "cloudtrail", "config", "guardduty", "artifact"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
