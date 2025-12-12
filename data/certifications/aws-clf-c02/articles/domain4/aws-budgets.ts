import { Article } from "@/types";

export const awsBudgets: Article = {
  id: "d4-art-02",
  slug: "aws-budgets",
  title: "AWS Budgets: Control de Gastos",
  shortDescription:
    "Configura presupuestos y alertas para mantener tus costos de AWS bajo control.",
  domainId: "domain4",
  content: {
    introduction:
      "AWS Budgets permite establecer presupuestos personalizados para rastrear costos y uso de AWS. Puedes configurar alertas que te notifican cuando excedes o te aproximas a tus umbrales definidos.",
    sections: [
      {
        title: "¿Qué es AWS Budgets?",
        content: `AWS Budgets es una herramienta para **planificar y controlar gastos** en AWS.

**Funcionalidades principales:**
- Crear presupuestos de costos, uso o reservas
- Alertas por email o SNS
- Acciones automáticas cuando se exceden umbrales
- Dashboards visuales

**Tipos de presupuestos:**

**Cost Budget:**
- Límite de gasto en dólares
- Mensual, trimestral, anual
- Por servicio, cuenta, tag

**Usage Budget:**
- Límite de uso (horas EC2, GB S3, etc.)
- Unidades específicas por servicio

**Reservation Budget:**
- Monitorea utilización de RIs
- Alerta si RIs están subutilizadas

**Savings Plans Budget:**
- Monitorea cobertura de Savings Plans
- Utilización de compromisos`,
      },
      {
        title: "Configurar un Budget",
        content: `**Pasos para crear un budget:**

1. **Ir a AWS Budgets** (Billing Dashboard → Budgets)

2. **Elegir tipo de budget:**
   - Cost budget (más común)
   - Usage budget
   - Reservation/Savings Plans

3. **Definir el monto:**
   - Fixed: Mismo monto cada período
   - Planned: Diferente monto por mes
   - Auto-adjusting: Basado en historial

4. **Establecer período:**
   - Monthly (más común)
   - Quarterly
   - Annually

5. **Filtros (opcional):**
   - Por servicio (solo EC2, solo S3)
   - Por cuenta (AWS Organizations)
   - Por tag (equipo, proyecto)
   - Por región

6. **Configurar alertas:**
   - Al 50%, 80%, 100% del budget
   - Actual o forecasted (proyectado)

**Ejemplo de configuración:**
\`\`\`
Budget: $1,000/mes para producción

Alertas:
- 50% ($500): Notificar a equipo finanzas
- 80% ($800): Notificar a tech leads
- 100% ($1,000): Acción automática (opcional)
\`\`\``,
      },
      {
        title: "Alertas y Notificaciones",
        content: `**Tipos de alertas:**

**Actual:**
- Cuando el gasto ACTUAL alcanza el umbral
- "Ya gastaste $800 de $1,000"

**Forecasted:**
- Cuando el gasto PROYECTADO alcanzará el umbral
- "Proyección: gastarás $1,200 este mes"
- Más proactivo, permite reaccionar antes

**Configurar notificaciones:**

**Email:**
- Hasta 10 emails por alerta
- Incluye resumen del budget

**Amazon SNS:**
- Para integraciones (Slack, PagerDuty)
- Automación con Lambda

**AWS Chatbot:**
- Notificaciones directas a Slack/Teams

**Ejemplo de flujo:**
\`\`\`
Budget 80% forecasted
         │
         ▼
    SNS Topic
         │
    ┌────┼────┐
    │    │    │
    ▼    ▼    ▼
 Email Lambda Slack
            │
            ▼
       Escalar Auto
       Scaling mínimo
\`\`\``,
      },
      {
        title: "Budget Actions",
        content: `**Budget Actions** permiten **acciones automáticas** cuando se excede un umbral.

**Acciones disponibles:**
- Aplicar una IAM policy
- Aplicar una SCP (Organizations)
- Detener instancias EC2
- Ejecutar Lambda (vía SNS)

**Ejemplo: Limitar creación de recursos:**
\`\`\`
Cuando: Budget supera 100%
Acción: Aplicar IAM policy que deniega:
        - ec2:RunInstances
        - rds:CreateDBInstance

Resultado: Equipo no puede crear más recursos
\`\`\`

**Ejemplo: Detener instancias de desarrollo:**
\`\`\`
Cuando: Budget supera 80%
Acción: Lambda via SNS que:
        - Detiene instancias con tag: Environment=dev

Resultado: Reduce costos, mantiene producción
\`\`\`

**Modos de acción:**
- **IAM-based**: Restringir creación de recursos
- **SCP-based**: Políticas a nivel organización
- **EC2/RDS**: Detener instancias específicas

**Consideraciones:**
- Las acciones son reversibles
- Requiere configurar IAM roles apropiados
- Probar en ambiente de desarrollo primero`,
        note: "Budget Actions son muy poderosas pero pueden interrumpir servicios. Usar con precaución.",
      },
      {
        title: "Mejores Prácticas",
        content: `**Estrategia de budgets:**

**Por cuenta:**
- Budget total para la cuenta AWS
- Visibilidad de gasto general

**Por servicio:**
- Budgets separados para servicios costosos
- EC2, RDS, S3 típicamente

**Por equipo/proyecto:**
- Usar tags para agrupar recursos
- Cada equipo tiene su budget

**Por ambiente:**
- Desarrollo vs Staging vs Producción
- Límites más estrictos en desarrollo

**Configuración recomendada:**
\`\`\`
Cuenta principal: $10,000/mes
├── EC2: $5,000
├── RDS: $2,000
├── Data Transfer: $1,500
└── Otros: $1,500

Alertas en:
- 50%: Informativo
- 80%: Revisar y ajustar
- 100%: Escalar a management
- 120%: Acción automática
\`\`\`

**Tips adicionales:**
- Revisar budgets mensualmente
- Ajustar basado en tendencias
- Usar forecasted para alertas tempranas
- Combinar con Cost Explorer para análisis`,
      },
      {
        title: "Precios de AWS Budgets",
        content: `**Modelo de precios:**

**Budgets gratis:**
- 2 budgets gratuitos por cuenta
- Para la mayoría de pequeños usuarios es suficiente

**Budgets adicionales:**
- $0.02/día por budget después de los 2 gratis
- ~$0.62/mes por budget adicional

**Budgets Reports:**
- $0.01 por reporte entregado
- Para reportes programados

**Budget Actions:**
- Sin costo adicional
- Solo pagas por el budget

**Ejemplo de costo:**
\`\`\`
5 budgets:
- 2 gratis
- 3 pagos: 3 × $0.62 = $1.86/mes

Con reportes semanales (4/mes):
- 4 × $0.01 = $0.04/mes

Total: ~$1.90/mes
\`\`\`

**Comparación con otras herramientas:**
| Herramienta | Propósito | Costo |
|-------------|-----------|-------|
| Budgets | Alertas y límites | ~Gratis |
| Cost Explorer | Análisis detallado | Gratis |
| Cost & Usage Report | Datos raw | S3 storage |

**Recomendación:**
- AWS Budgets es esencialmente gratis para uso básico
- ROI alto: alerta de $1.86/mes puede ahorrar miles`,
      },
    ],
  },
  keyTakeaways: [
    "AWS Budgets permite establecer límites de gasto y recibir alertas",
    "Tipos: Cost, Usage, Reservation y Savings Plans budgets",
    "Alertas pueden ser Actual (ya ocurrió) o Forecasted (proyectado)",
    "Budget Actions ejecutan acciones automáticas al exceder umbrales",
    "2 budgets gratis por cuenta, $0.02/día por adicionales",
  ],
  relatedQuestions: ["q88"],
  tags: ["Budgets", "costos", "alertas", "control de gastos", "billing"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
