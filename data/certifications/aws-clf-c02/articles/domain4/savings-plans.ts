import { Article } from "@/types";

export const savingsPlans: Article = {
  id: "d4-art-11",
  slug: "savings-plans",
  title: "AWS Savings Plans: Compromisos de Uso Flexibles",
  shortDescription:
    "Aprende a optimizar costos con compromisos de gasto flexibles.",
  domainId: "domain4",
  content: {
    introduction:
      "AWS Savings Plans ofrecen precios reducidos a cambio de un compromiso de uso constante medido en $/hora durante 1 o 3 años. Son más flexibles que las Reserved Instances tradicionales y pueden aplicarse a múltiples servicios.",
    sections: [
      {
        title: "¿Qué son los Savings Plans?",
        content: `**Modelo de descuento basado en compromiso de gasto:**

**Concepto:**
\`\`\`
Comprometes: $X/hora durante 1 o 3 años
Recibes: Hasta 72% de descuento
Flexibilidad: Varía según el tipo
\`\`\`

**Comparación con Reserved Instances:**
\`\`\`
Reserved Instances:
- Compromiso por tipo de instancia específico
- Región o AZ específica
- Menos flexible
- Más antiguo

Savings Plans:
- Compromiso de gasto ($/hora)
- Mayor flexibilidad
- Aplica automáticamente
- Modelo más nuevo y recomendado
\`\`\`

**Tipos de Savings Plans:**
1. **Compute Savings Plans** - Máxima flexibilidad
2. **EC2 Instance Savings Plans** - Mayor descuento, menos flexible
3. **SageMaker Savings Plans** - Para machine learning`,
      },
      {
        title: "Compute Savings Plans",
        content: `**Máxima flexibilidad, buenos descuentos:**

**Cobertura:**
- Amazon EC2 (cualquier familia, tamaño, OS, tenencia)
- AWS Lambda
- AWS Fargate

**Flexibilidad:**
\`\`\`
✅ Cambiar familia de instancia (m5 → c6g)
✅ Cambiar tamaño (large → 2xlarge)
✅ Cambiar región (us-east-1 → eu-west-1)
✅ Cambiar OS (Linux → Windows)
✅ Cambiar tenencia (shared → dedicated)
✅ Usar Fargate o Lambda
\`\`\`

**Descuentos (ejemplo):**
\`\`\`
Servicio        | Descuento vs On-Demand
----------------|------------------------
EC2             | Hasta 66%
Lambda          | Hasta 17%
Fargate         | Hasta 52%
\`\`\`

**Ejemplo:**
\`\`\`
Compromiso: $10/hora por 3 años

Uso actual:
- 5x m5.xlarge = $4.80/hr
- Lambda = $2.00/hr
- Fargate = $3.20/hr
Total: $10/hr

Próximo mes (cambios):
- 3x c6g.2xlarge = $3.60/hr
- 2x t3.large = $1.80/hr
- Lambda = $2.60/hr
- Fargate = $2.00/hr
Total: $10/hr

→ El plan aplica automáticamente a ambos escenarios
\`\`\``,
        note: "Compute Savings Plans es ideal si tu uso de compute cambia frecuentemente o planeas modernizar.",
      },
      {
        title: "EC2 Instance Savings Plans",
        content: `**Mayor descuento, flexibilidad reducida:**

**Compromiso específico:**
- Familia de instancia (ej: m5)
- Región específica

**Flexibilidad dentro del compromiso:**
\`\`\`
✅ Cambiar tamaño (m5.large → m5.4xlarge)
✅ Cambiar OS (Linux → Windows)
✅ Cambiar tenencia (shared → dedicated)
❌ Cambiar familia (m5 → c5)
❌ Cambiar región
\`\`\`

**Descuentos:**
\`\`\`
Hasta 72% vs On-Demand
(~6% más que Compute Savings Plans)
\`\`\`

**Ejemplo:**
\`\`\`
Compromiso: m5 en us-east-1, $5/hora por 3 años

✅ Válido:
- m5.large, m5.xlarge, m5.2xlarge
- m5 Linux o Windows
- m5 shared o dedicated

❌ No aplica:
- m6i.xlarge (diferente familia)
- m5.xlarge en eu-west-1 (diferente región)
\`\`\`

**Cuándo elegir EC2 Instance SP:**
- Workloads estables en familia específica
- Sin planes de cambiar región
- Quieres máximo descuento
- Workloads legacy que no cambiarán`,
      },
      {
        title: "Opciones de Pago",
        content: `**Tres opciones de pago:**

**1. No Upfront:**
\`\`\`
- Sin pago inicial
- Pagas mensualmente
- Menor descuento
- Máxima flexibilidad de cash flow
\`\`\`

**2. Partial Upfront:**
\`\`\`
- 50% al inicio
- Resto mensualmente
- Descuento medio
- Balance entre ahorro y cash flow
\`\`\`

**3. All Upfront:**
\`\`\`
- 100% al inicio
- Nada mensual
- Máximo descuento
- Requiere capital disponible
\`\`\`

**Ejemplo m5.xlarge (us-east-1):**
\`\`\`
On-Demand: $0.192/hr = $1,401/año

1 año Compute SP:
- No Upfront:      $1,050/año (25% ahorro)
- Partial Upfront: $1,000/año (29% ahorro)
- All Upfront:     $975/año  (30% ahorro)

3 años Compute SP:
- No Upfront:      $780/año (44% ahorro)
- Partial Upfront: $700/año (50% ahorro)
- All Upfront:     $665/año (53% ahorro)
\`\`\`

**Término:**
- 1 año: Menor compromiso, menor descuento
- 3 años: Mayor compromiso, mayor descuento`,
      },
      {
        title: "Cómo se Aplican los Savings Plans",
        content: `**Aplicación automática:**

**Orden de aplicación:**
\`\`\`
1. Savings Plans más específicos primero
   (EC2 Instance SP antes que Compute SP)
2. Luego Savings Plans más generales
3. Finalmente On-Demand para el resto
\`\`\`

**Ejemplo de aplicación:**
\`\`\`
Tienes:
- EC2 Instance SP m5: $5/hr
- Compute SP: $10/hr

Uso este mes:
- m5 instances: $8/hr
- c5 instances: $6/hr
- Lambda: $4/hr
- Fargate: $2/hr
Total: $20/hr

Aplicación:
1. m5 ($8/hr) → EC2 Instance SP cubre $5/hr
   → $3/hr de m5 queda
   
2. Compute SP ($10/hr) cubre:
   → $3/hr m5 restante
   → $6/hr c5
   → $1/hr Lambda
   
3. On-Demand paga:
   → $3/hr Lambda restante
   → $2/hr Fargate
\`\`\`

**Recomendaciones:**
- AWS Cost Explorer sugiere planes óptimos
- Basar en uso de últimos 7, 30, 60 días
- Considerar crecimiento proyectado`,
      },
      {
        title: "Savings Plans vs Reserved Instances",
        content: `**Comparación detallada:**

| Aspecto | Reserved Instances | Savings Plans |
|---------|-------------------|---------------|
| Modelo | Reserva de capacidad | Compromiso de gasto |
| Flexibilidad | Baja-Media | Media-Alta |
| Servicios | Solo EC2 (o RDS/ES) | EC2, Lambda, Fargate |
| Descuento máx | 72% | 72% |
| Cambiar región | RI Convertibles | Compute SP sí |
| Cambiar familia | RI Convertibles | Compute SP sí |
| Marketplace | Sí, puedes vender | No |
| Recomendado | Legacy, capacidad | Nuevo, flexibilidad |

**¿Cuándo usar RIs todavía?**
- Necesitas garantía de capacidad (Zonal RIs)
- Quieres vender en Marketplace si no usas
- Ya tienes RIs y funcionan bien

**¿Cuándo usar Savings Plans?**
- Nuevo en descuentos por compromiso
- Workloads que evolucionan
- Usas Lambda y/o Fargate
- Quieres simplicidad

**Para el examen:**
- Savings Plans = Flexibilidad + Descuento
- Compute SP = Máxima flexibilidad
- EC2 Instance SP = Máximo descuento EC2
- Ambos requieren compromiso 1 o 3 años`,
        note: "AWS recomienda Savings Plans sobre Reserved Instances para nuevos compromisos.",
      },
      {
        title: "Comprar y Gestionar Savings Plans",
        content: `**Proceso de compra:**

**1. Analizar uso actual:**
\`\`\`
Cost Explorer → Savings Plans Recommendations
- Basado en uso histórico
- Muestra ahorro proyectado
- Sugiere compromiso óptimo
\`\`\`

**2. Elegir tipo:**
- Compute SP para flexibilidad
- EC2 Instance SP para máximo ahorro EC2

**3. Configurar:**
- Término: 1 o 3 años
- Pago: No/Partial/All Upfront
- Monto: $/hora de compromiso

**4. Comprar:**
- Efectivo inmediatamente
- Aplica automáticamente

**Gestión continua:**
\`\`\`
Cost Explorer → Savings Plans:
- Utilization: % del plan usado
- Coverage: % de uso cubierto
- Amortized cost: Costo efectivo

Recomendaciones:
- Comprar adicional si coverage < 70%
- Analizar si utilization < 80%
\`\`\`

**Ejemplo de recomendación:**
\`\`\`
Cost Explorer sugiere:
"Basado en los últimos 30 días:
- Compromiso recomendado: $15/hr
- Tipo: Compute Savings Plan
- Término: 3 años, All Upfront
- Ahorro estimado: $45,000/año"
\`\`\`

**Al expirar:**
- Uso vuelve a On-Demand automáticamente
- Sin penalidades
- Puedes renovar o cambiar`,
      },
    ],
  },
  keyTakeaways: [
    "Savings Plans: compromiso de $/hora por 1-3 años con hasta 72% descuento",
    "Compute Savings Plans: máxima flexibilidad (EC2, Lambda, Fargate, cualquier región)",
    "EC2 Instance Savings Plans: mayor descuento pero solo para familia+región específica",
    "All Upfront ofrece mayor descuento, No Upfront mayor flexibilidad de cash flow",
    "AWS recomienda Savings Plans sobre Reserved Instances para nuevos compromisos",
  ],
  relatedQuestions: ["q87", "q89", "q94"],
  tags: ["Savings Plans", "costos", "descuentos", "compromiso", "EC2"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
