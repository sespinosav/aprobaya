import { Article } from "@/types";

export const awsArtifactCumplimiento: Article = {
  id: "d2-art-05",
  slug: "aws-artifact-cumplimiento",
  title: "AWS Artifact y Cumplimiento",
  shortDescription:
    "Accede a reportes de compliance y acuerdos de AWS para tu organización.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "¿Qué es AWS Artifact?",
      content: `**AWS Artifact** es un portal de autoservicio para acceder a reportes de seguridad y compliance de AWS, así como para gestionar acuerdos legales.

### Dos componentes principales:

1. **Artifact Reports:** Documentos de auditoría de terceros
2. **Artifact Agreements:** Acuerdos legales con AWS

### ¿Por qué es importante?
Cuando tu organización necesita demostrar que usa una plataforma que cumple con estándares de seguridad y regulaciones, AWS Artifact proporciona la evidencia necesaria.`,
    },
    {
      title: "Artifact Reports",
      content: `### Reportes de Compliance Disponibles

AWS Artifact proporciona acceso a reportes de auditorías realizadas por terceros independientes:

| Reporte | Descripción |
|---------|-------------|
| **SOC 1** | Controles relevantes para auditoría financiera |
| **SOC 2** | Seguridad, disponibilidad, integridad, confidencialidad |
| **SOC 3** | Versión pública de SOC 2 |
| **PCI DSS** | Estándar de seguridad de datos de tarjetas de pago |
| **ISO 27001** | Sistema de gestión de seguridad de información |
| **ISO 27017** | Controles de seguridad para cloud |
| **ISO 27018** | Protección de datos personales en cloud |
| **FedRAMP** | Marco de seguridad del gobierno de EE.UU. |
| **HIPAA** | Elegibilidad para datos de salud |

### Cómo acceder:
1. Ir a AWS Artifact en la consola
2. Seleccionar "Reports"
3. Buscar el reporte deseado
4. Aceptar NDA (Non-Disclosure Agreement)
5. Descargar el documento

### Uso típico:
- Auditor interno solicita evidencia de controles SOC 2
- Equipo legal necesita certificación ISO para un contrato
- Compliance officer verifica cumplimiento con HIPAA`,
    },
    {
      title: "Artifact Agreements",
      content: `### Acuerdos Legales Disponibles

AWS Artifact permite revisar y aceptar acuerdos con AWS:

| Acuerdo | Propósito |
|---------|-----------|
| **BAA** | Business Associate Agreement para HIPAA |
| **GDPR DPA** | Data Processing Agreement para GDPR |
| **NDA** | Para acceder a ciertos reportes |

### Business Associate Agreement (BAA)

Requerido para manejar **PHI (Protected Health Information)** bajo HIPAA.

**Proceso:**
1. Ir a Artifact Agreements
2. Revisar el BAA de AWS
3. Aceptar para tu cuenta u organización
4. El BAA queda vigente automáticamente

**Importante:** El BAA solo aplica a servicios elegibles para HIPAA. No todos los servicios AWS están cubiertos.

### Acuerdos a nivel de Organización

Con AWS Organizations, puedes aceptar acuerdos para **todas las cuentas** de la organización desde la cuenta de gestión.`,
    },
    {
      title: "Programas de Compliance de AWS",
      content: `### Compliance como Responsabilidad Compartida

AWS mantiene certificaciones y cumple regulaciones, pero la responsabilidad es compartida:

| AWS es responsable de | Cliente es responsable de |
|----------------------|---------------------------|
| Certificaciones de infraestructura | Configurar servicios correctamente |
| Auditorías de data centers | Proteger sus datos |
| Cumplimiento de la plataforma | Cumplimiento de sus aplicaciones |

### Principales Programas:

**Para Finanzas:**
- SOC 1, SOC 2, SOC 3
- PCI DSS (si procesas tarjetas)

**Para Salud:**
- HIPAA (con BAA firmado)
- HITRUST

**Para Gobierno:**
- FedRAMP
- GovCloud

**Estándares Globales:**
- ISO 27001, 27017, 27018
- CSA STAR
- GDPR (Europa)

**Por Industria:**
- GLBA (servicios financieros)
- FERPA (educación)
- CJIS (justicia criminal)`,
    },
    {
      title: "AWS Compliance Center",
      content: `### Recursos adicionales de Compliance

**AWS Compliance Center** (público) proporciona:
- Lista de todos los programas de compliance
- Servicios cubiertos por cada programa
- Recursos y whitepapers
- Preguntas frecuentes

**URL:** https://aws.amazon.com/compliance/

### AWS Compliance Programs por Servicio

Cada servicio AWS tiene una página que lista qué programas de compliance incluye:

**Ejemplo - Amazon S3:**
- SOC ✅
- PCI ✅
- ISO ✅
- HIPAA Eligible ✅
- FedRAMP ✅

### Servicios HIPAA Eligible

No todos los servicios son elegibles para HIPAA. Ejemplos de servicios elegibles:
- Amazon S3
- Amazon EC2
- Amazon RDS
- AWS Lambda
- Amazon DynamoDB

Revisa la lista actualizada en AWS Compliance.`,
    },
    {
      title: "Ejemplo de Uso: Auditoría",
      content: `### Escenario: Tu empresa procesa pagos

Tu auditor de PCI DSS solicita evidencia de que AWS cumple con PCI.

**Proceso:**

1. **Accede a AWS Artifact**
   - Consola AWS → Artifact

2. **Busca el reporte PCI DSS**
   - Sección Reports
   - Filtrar por "PCI"

3. **Acepta el NDA**
   - Requerido para descargar

4. **Descarga el Attestation of Compliance (AOC)**
   - Documento oficial que certifica cumplimiento

5. **Entrega al auditor**
   - El auditor puede verificar que AWS (la infraestructura) cumple
   - Tú demuestras cumplimiento de tu aplicación/configuración

### Tu responsabilidad adicional:
- Configurar security groups correctamente
- Cifrar datos de tarjetas
- Implementar controles de acceso
- Mantener logs de auditoría`,
    },
    {
      title: "En el Examen CLF-C02",
      content: `### Puntos clave:

1. **Artifact Reports:** Acceso a certificaciones y auditorías de AWS
2. **Artifact Agreements:** Acuerdos legales como BAA para HIPAA
3. **Responsabilidad compartida:** AWS certifica la plataforma, tú certificas tu uso
4. **SOC, ISO, PCI:** Disponibles en Artifact
5. **BAA requerido para HIPAA:** Se firma a través de Artifact
6. **NDA necesario:** Para acceder a algunos reportes

### Preguntas típicas:

*"¿Dónde puede una empresa obtener el reporte SOC 2 de AWS?"*
→ AWS Artifact

*"¿Qué debe hacer una empresa para cumplir HIPAA en AWS?"*
→ Firmar BAA a través de AWS Artifact (y configurar correctamente)

*"¿Qué servicio proporciona acceso a certificaciones de compliance de AWS?"*
→ AWS Artifact

*"¿Quién es responsable de que una aplicación cumpla con PCI DSS?"*
→ El cliente (responsabilidad compartida). AWS Artifact proporciona evidencia de que AWS cumple, pero el cliente debe configurar correctamente.`,
    },
  ],
  keyPoints: [
    "Artifact Reports: Acceso a SOC, ISO, PCI, FedRAMP y más",
    "Artifact Agreements: Firmar BAA (HIPAA), DPA (GDPR)",
    "Requiere aceptar NDA para descargar algunos reportes",
    "BAA es obligatorio para manejar PHI bajo HIPAA",
    "Responsabilidad compartida: AWS cumple plataforma, tú cumples aplicación",
    "Disponible en la consola AWS sin costo adicional",
    "Organizations: Acuerdos aplicables a todas las cuentas",
  ],
  tags: [
    "Artifact",
    "compliance",
    "SOC",
    "PCI",
    "HIPAA",
    "ISO",
    "auditoría",
    "BAA",
    "regulaciones",
  ],
  relatedServices: ["artifact"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
