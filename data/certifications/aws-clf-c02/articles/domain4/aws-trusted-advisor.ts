import { Article } from "@/types";

export const awsTrustedAdvisor: Article = {
  id: "d4-art-05",
  slug: "aws-trusted-advisor",
  title: "AWS Trusted Advisor: Optimización Automática",
  shortDescription:
    "Obtén recomendaciones automáticas para mejorar seguridad, rendimiento, costos y más.",
  domainId: "domain4",
  content: {
    introduction:
      "AWS Trusted Advisor es un servicio que inspecciona tu entorno de AWS y proporciona recomendaciones en tiempo real para ayudarte a seguir las mejores prácticas de AWS en cinco categorías: optimización de costos, rendimiento, seguridad, tolerancia a fallas y límites de servicio.",
    sections: [
      {
        title: "¿Qué es Trusted Advisor?",
        content: `Trusted Advisor es como un **consultor automatizado** que analiza tu cuenta AWS.

**Qué hace:**
- Escanea tu configuración de AWS
- Compara contra mejores prácticas
- Genera recomendaciones accionables
- Monitorea continuamente

**Categorías de checks:**
1. **Cost Optimization**: Reducir gastos
2. **Performance**: Mejorar rendimiento
3. **Security**: Cerrar vulnerabilidades
4. **Fault Tolerance**: Aumentar resiliencia
5. **Service Limits**: Evitar límites

**Acceso:**
- Consola AWS → Trusted Advisor
- O directamente en el dashboard

**Niveles de acceso:**
- **Basic/Developer Support**: 7 checks core
- **Business/Enterprise Support**: Todos los checks (115+)`,
      },
      {
        title: "Checks Gratuitos (Core)",
        content: `Con **Basic o Developer Support** tienes acceso a 7 checks:

**Security checks (4):**
1. **S3 Bucket Permissions**: Buckets públicos
2. **Security Groups - Specific Ports**: Puertos peligrosos abiertos
3. **IAM Use**: Uso de IAM vs root
4. **MFA on Root Account**: MFA habilitado en root

**Service Limits (1):**
5. **Service Limits**: Uso vs límites de servicios

**Otros (2):**
6. **EBS Public Snapshots**: Snapshots públicos
7. **RDS Public Snapshots**: Snapshots RDS públicos

**Ejemplo de resultado:**
\`\`\`
Check: MFA on Root Account
Status: ⚠️ Yellow (Warning)
Issue: MFA no está habilitado
Action: Habilitar MFA en cuenta root
Link: [Cómo configurar MFA]
\`\`\`

**Estados:**
- 🟢 Green: OK, sigue best practice
- 🟡 Yellow: Investigación recomendada
- 🔴 Red: Acción requerida`,
      },
      {
        title: "Checks de Cost Optimization",
        content: `**Disponibles con Business/Enterprise Support:**

**Instancias infrautilizadas:**
- EC2 con bajo uso de CPU
- RDS con pocas conexiones
- Redshift con queries mínimos

**Recursos no utilizados:**
- EBS volumes sin adjuntar
- Elastic IPs sin usar
- Load Balancers idle
- RDS snapshots antiguos

**Oportunidades de ahorro:**
- Reserved Instance utilization
- Reserved Instance lease expiration
- Savings Plans coverage

**Ejemplos de checks:**
| Check | Qué detecta | Ahorro típico |
|-------|-------------|---------------|
| Low Utilization EC2 | CPU < 10% | $50-500/mes |
| Idle Load Balancers | Sin tráfico | $20-100/mes |
| Unassociated EIPs | IPs no usadas | $3.60/mes c/u |
| Underutilized EBS | IOPS bajos | Variable |

**Ahorro real ejemplo:**
\`\`\`
Cuenta mediana:
- 5 EC2 infrautilizadas: $300/mes
- 10 EBS sin adjuntar: $50/mes
- 3 EIPs sin usar: $11/mes
- RIs subutilizadas: $200/mes
Total potencial: $561/mes = $6,732/año
\`\`\``,
        note: "El costo de Business Support ($100+) típicamente se paga solo con los ahorros identificados por Trusted Advisor.",
      },
      {
        title: "Checks de Security y Fault Tolerance",
        content: `**Security Checks:**

**Acceso y permisos:**
- IAM Access Key Rotation
- IAM Password Policy
- Root Account Access Keys
- Exposed Access Keys
- CloudTrail Logging

**Redes:**
- Security Groups - Unrestricted Access
- Security Groups - Specific Ports
- VPC Security Group - Open to All

**Cifrado:**
- EBS Encryption
- S3 Bucket Encryption
- RDS Encryption

**Fault Tolerance Checks:**

**Alta disponibilidad:**
- EC2 Availability Zone Balance
- ELB Cross-Zone Load Balancing
- RDS Multi-AZ

**Backups:**
- EBS Snapshots
- RDS Backups
- DynamoDB Backups

**Redundancia:**
- Auto Scaling Group Resources
- VPN Tunnel Redundancy
- Route 53 Failover

**Ejemplo de acción:**
\`\`\`
Check: RDS Multi-AZ
Status: 🔴 Red
Finding: 3 RDS instances sin Multi-AZ

Production DBs sin HA:
- prod-users-db
- prod-orders-db
- prod-inventory-db

Acción: Habilitar Multi-AZ
Impacto: ~2x costo, pero DR garantizado
\`\`\``,
      },
      {
        title: "Automatización y API",
        content: `**Trusted Advisor API:**
- Disponible con Business/Enterprise
- Integrar en herramientas propias
- Automatizar respuestas

**AWS Support API:**
\`\`\`bash
# Listar checks disponibles
aws support describe-trusted-advisor-checks \\
  --language en

# Obtener resultados de un check
aws support describe-trusted-advisor-check-result \\
  --check-id "checkId123"

# Refrescar un check
aws support refresh-trusted-advisor-check \\
  --check-id "checkId123"
\`\`\`

**Automatización con Lambda:**
\`\`\`
CloudWatch Events (scheduled)
         │
         ▼
Lambda: Refresh TA checks
         │
         ▼
Lambda: Parse results
         │
         ▼
SNS: Notificar issues rojos
         │
         ▼
Lambda: Auto-remediation (opcional)
\`\`\`

**EventBridge Integration:**
- Eventos cuando status cambia
- Trigger acciones automáticas
- Integrar con ServiceNow, Jira, etc.

**Trusted Advisor Priority (Enterprise):**
- Priorización de recomendaciones
- Contexto de tu TAM
- Vista consolidada de toda la org`,
      },
      {
        title: "Mejores Prácticas",
        content: `**Rutina recomendada:**

**Semanal:**
- Revisar checks rojos (críticos)
- Actuar en seguridad siempre
- Evaluar costos quick-wins

**Mensual:**
- Revisar checks amarillos
- Análisis de tendencias
- Planificar mejoras mayores

**Trimestral:**
- Revisión completa con equipo
- Comparar con baseline
- Ajustar presupuesto

**Integraciones útiles:**
| Herramienta | Propósito |
|-------------|-----------|
| AWS Config | Compliance continuo |
| Security Hub | Centralizar seguridad |
| CloudWatch | Métricas y alertas |
| Systems Manager | Remediation |

**Limitaciones a considerar:**
- No reemplaza auditorías manuales
- Puede generar falsos positivos
- Algunas recomendaciones son conservadoras
- Refresh tiene cooldown (5-6 horas)

**Alternativas/Complementos:**
- **AWS Compute Optimizer**: Rightsizing más profundo
- **AWS Well-Architected Tool**: Reviews de arquitectura
- **Security Hub**: Agregación de seguridad
- **Cost Explorer**: Análisis de costos detallado`,
        note: "Trusted Advisor es un excelente punto de partida, pero no reemplaza revisiones de arquitectura regulares.",
      },
    ],
  },
  keyTakeaways: [
    "Trusted Advisor analiza tu cuenta y da recomendaciones en 5 categorías",
    "Basic/Developer tienen 7 checks core gratuitos (seguridad básica)",
    "Business/Enterprise tienen 115+ checks incluyendo cost optimization",
    "Los ahorros identificados típicamente superan el costo de Business Support",
    "API disponible para automatización e integración",
  ],
  relatedQuestions: ["q2", "q7", "q8"],
  tags: ["Trusted Advisor", "optimización", "seguridad", "costos", "best practices"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
