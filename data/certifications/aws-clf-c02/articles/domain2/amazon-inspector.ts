import { Article } from "@/types";

export const amazonInspector: Article = {
  id: "d2-art-10",
  slug: "amazon-inspector",
  title: "Amazon Inspector",
  shortDescription:
    "Escanea automáticamente vulnerabilidades en EC2, Lambda y contenedores.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "¿Qué es Amazon Inspector?",
      content: `**Amazon Inspector** es un servicio de gestión de vulnerabilidades que escanea continuamente tus cargas de trabajo en AWS en busca de vulnerabilidades de software y exposición de red no deseada.

### Evolución del servicio:
- **Inspector Classic (v1):** Requería agentes, escaneos manuales
- **Inspector (v2, actual):** Sin agentes, escaneo continuo, más servicios

### Qué escanea:
- Instancias EC2
- Imágenes de contenedores en ECR
- Funciones Lambda

### Qué detecta:
- Vulnerabilidades de software (CVEs)
- Exposición de red
- Secretos hardcodeados en código Lambda`,
    },
    {
      title: "Cómo Funciona",
      content: `### Activación simple:

1. Habilitar Inspector (un clic)
2. Inspector descubre recursos automáticamente
3. Escaneo continuo sin intervención
4. Findings aparecen en la consola

### Sin agentes:

**Para EC2:**
Inspector usa AWS Systems Manager Agent (SSM Agent) que ya está instalado en la mayoría de AMIs.

**Para ECR:**
Inspector escanea imágenes cuando se suben y re-escanea cuando se descubren nuevas vulnerabilidades.

**Para Lambda:**
Inspector analiza el código y dependencias automáticamente.

### Escaneo continuo:

Inspector no es un escaneo único. Re-evalúa cuando:
- Se descubre nueva vulnerabilidad (nuevo CVE publicado)
- Se instala nuevo software en una instancia
- Se sube nueva imagen a ECR
- Se actualiza código Lambda`,
    },
    {
      title: "Tipos de Findings",
      content: `### Vulnerabilidades de Paquetes

**Qué detecta:** Software con vulnerabilidades conocidas (CVEs).

**Ejemplo:**
\`\`\`
Vulnerabilidad: CVE-2023-12345
Paquete: openssl 1.1.1k
Severidad: Critical (9.8)
Solución: Actualizar a openssl 1.1.1m
Afecta: i-1234567890abcdef0 (EC2)
\`\`\`

### Vulnerabilidades de Red (EC2)

**Qué detecta:** Puertos expuestos a Internet que no deberían estarlo.

**Ejemplo:**
\`\`\`
Finding: Puerto 22 (SSH) accesible desde Internet
Instancia: i-1234567890abcdef0
Security Group: sg-abc123
Recomendación: Limitar acceso a IP específicas
\`\`\`

### Secretos en Código (Lambda)

**Qué detecta:** Credenciales hardcodeadas en código Lambda.

**Ejemplo:**
\`\`\`
Finding: AWS Access Key detectada en código
Función: mi-funcion-lambda
Línea: 42
Recomendación: Usar Secrets Manager o variables de entorno
\`\`\``,
    },
    {
      title: "Severidad y Priorización",
      content: `### Niveles de Severidad

| Severidad | Puntuación CVSS | Acción |
|-----------|-----------------|--------|
| **Critical** | 9.0 - 10.0 | Actuar inmediatamente |
| **High** | 7.0 - 8.9 | Prioridad alta |
| **Medium** | 4.0 - 6.9 | Planificar remediación |
| **Low** | 0.1 - 3.9 | Evaluar cuando sea posible |
| **Informational** | N/A | Informativo, no es vulnerabilidad |

### Amazon Inspector Score

Inspector calcula un **Inspector Score** que ajusta la severidad CVSS según:
- ¿El recurso tiene IP pública?
- ¿El puerto está realmente abierto?
- ¿Hay exploits conocidos?

**Ejemplo:**
- CVE con CVSS 7.5 (High)
- Pero la instancia no tiene IP pública
- Inspector Score ajustado: 5.5 (Medium)

### Dashboard de Riesgos

Inspector proporciona un dashboard que muestra:
- Cobertura de escaneo
- Findings por severidad
- Recursos más afectados
- Tendencias en el tiempo`,
    },
    {
      title: "Integración con Otros Servicios",
      content: `### AWS Security Hub

Inspector envía findings a Security Hub:
- Vista centralizada de seguridad
- Correlación con otros servicios
- Compliance dashboards

### Amazon EventBridge

Automatiza respuestas a findings:

\`\`\`
[Inspector Finding] → [EventBridge] → [Lambda] → [Slack/JIRA/etc]
\`\`\`

**Ejemplos de automatización:**
- Notificar a Slack cuando hay finding Critical
- Crear ticket en JIRA para High
- Etiquetar instancias afectadas

### Amazon ECR

Para contenedores:
- Escanea automáticamente al hacer push
- Re-escanea cuando hay nuevos CVEs
- Bloquea despliegue de imágenes vulnerables

### S3 para Exportación

Exporta findings a S3 para:
- Análisis con Athena
- Reportes personalizados
- Retención a largo plazo`,
    },
    {
      title: "Inspector vs Otros Servicios",
      content: `### Comparación de servicios de seguridad:

| Servicio | Qué hace |
|----------|----------|
| **Inspector** | Escanea vulnerabilidades en software |
| **GuardDuty** | Detecta amenazas activas y comportamiento malicioso |
| **Macie** | Descubre datos sensibles en S3 |
| **Config** | Evalúa configuraciones contra reglas |
| **Security Hub** | Centraliza findings de todos |

### Ejemplo de uso conjunto:

\`\`\`
1. Inspector: "La instancia tiene OpenSSL vulnerable"
2. GuardDuty: "La instancia se comunica con IP maliciosa"
3. Conclusión: Instancia probablemente comprometida
4. Security Hub: Muestra ambos findings correlacionados
\`\`\``,
    },
    {
      title: "Inspector en el Examen CLF-C02",
      content: `### Puntos clave:

1. **Escaneo de vulnerabilidades:** CVEs en software
2. **Recursos:** EC2, Lambda, contenedores ECR
3. **Sin agentes:** Usa SSM Agent existente para EC2
4. **Continuo:** Re-escanea cuando hay nuevas vulnerabilidades
5. **Integración:** Security Hub, EventBridge, ECR

### Diferencias importantes:

**Inspector vs GuardDuty:**
- Inspector: Vulnerabilidades en software (proactivo)
- GuardDuty: Amenazas activas (reactivo)

**Inspector vs Config:**
- Inspector: Vulnerabilidades de software
- Config: Configuraciones de recursos AWS

### Preguntas típicas:

*"¿Qué servicio escanea instancias EC2 en busca de vulnerabilidades de software?"*
→ Amazon Inspector

*"¿Cómo detectar CVEs en imágenes de contenedores?"*
→ Amazon Inspector con escaneo de ECR

*"¿Qué servicio detecta secretos hardcodeados en funciones Lambda?"*
→ Amazon Inspector

*"¿Qué servicio usa para encontrar paquetes desactualizados con vulnerabilidades conocidas?"*
→ Amazon Inspector`,
    },
  ],
  keyPoints: [
    "Inspector: Escaneo de vulnerabilidades (CVEs)",
    "Recursos: EC2, Lambda, imágenes ECR",
    "Sin agentes: Usa SSM Agent para EC2",
    "Continuo: Re-escanea cuando hay nuevos CVEs",
    "Detecta: Vulnerabilidades de software, exposición de red, secretos",
    "Inspector Score: Ajusta severidad según contexto",
    "Integra con Security Hub y EventBridge",
  ],
  tags: [
    "Inspector",
    "vulnerabilidades",
    "CVE",
    "escaneo",
    "EC2",
    "Lambda",
    "ECR",
    "seguridad",
  ],
  relatedServices: ["inspector", "security-hub", "ecr"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
