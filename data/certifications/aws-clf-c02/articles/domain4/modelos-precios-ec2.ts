import { Article } from "@/types";

export const modelosPreciosEc2: Article = {
  id: "d4-art-01",
  slug: "modelos-precios-ec2",
  title: "Modelos de Precios de EC2",
  shortDescription:
    "Comprende On-Demand, Reserved, Spot y Savings Plans para optimizar costos de EC2.",
  domainId: "domain4",
  content: {
    introduction:
      "AWS ofrece múltiples modelos de precios para EC2 que se adaptan a diferentes patrones de uso. Elegir el modelo correcto puede reducir significativamente los costos de computación.",
    sections: [
      {
        title: "On-Demand Instances",
        content: `Las instancias **On-Demand** son el modelo más flexible y el predeterminado.

**Características:**
- Pago por hora o segundo (mínimo 60 segundos)
- Sin compromiso a largo plazo
- Sin pagos por adelantado
- Escalar hacia arriba o abajo en cualquier momento

**Cuándo usar On-Demand:**
- Workloads impredecibles
- Aplicaciones en desarrollo/testing
- Cargas que no pueden interrumpirse
- Workloads de corto plazo
- Primera vez usando un tipo de instancia

**Ventajas:**
- Máxima flexibilidad
- Sin riesgo de compromiso
- Ideal para empezar

**Desventajas:**
- Precio más alto por hora
- No hay descuentos

**Precio base:** 100% del precio listado`,
      },
      {
        title: "Reserved Instances (RI)",
        content: `Las **Reserved Instances** ofrecen descuentos significativos a cambio de un compromiso de 1 o 3 años.

**Tipos de RI:**

**Standard RI:**
- Mayor descuento (hasta 72%)
- Poco flexible para cambios
- Puedes vender en el Marketplace

**Convertible RI:**
- Descuento moderado (hasta 54%)
- Puedes cambiar familia, OS, tenancy
- No se pueden vender

**Opciones de pago:**
| Pago | Descuento | Cash flow |
|------|-----------|-----------|
| All Upfront | Mayor | Pago inmediato |
| Partial Upfront | Medio | Parte ahora, parte mensual |
| No Upfront | Menor | Todo mensual |

**Plazo:**
- 1 año: Menos descuento, menos compromiso
- 3 años: Máximo descuento, más compromiso

**Scope:**
- **Regional**: Aplica a cualquier AZ de la región
- **Zonal**: Específico para una AZ, reserva capacidad

**Ejemplo:**
- t3.large On-Demand: $0.0832/hora
- t3.large RI 1 año All Upfront: ~$0.052/hora (37% descuento)
- t3.large RI 3 años All Upfront: ~$0.033/hora (60% descuento)`,
        note: "Regional RIs son más flexibles. Zonal RIs garantizan capacidad en esa AZ específica.",
      },
      {
        title: "Spot Instances",
        content: `Las **Spot Instances** ofrecen capacidad no utilizada de AWS a precios muy reducidos.

**Características:**
- Hasta **90% de descuento** vs On-Demand
- AWS puede reclamar la instancia con 2 minutos de aviso
- El precio fluctúa según oferta/demanda
- Tú defines un precio máximo

**Cuándo usar Spot:**
- Workloads tolerantes a fallas
- Procesamiento batch
- Análisis de datos
- CI/CD pipelines
- Rendering de video
- Training de ML

**Cuándo NO usar Spot:**
- Bases de datos de producción
- Aplicaciones críticas 24/7
- Workloads stateful sin persistencia externa

**Estrategias Spot:**
- **Spot Fleet**: Combinar múltiples tipos de instancia
- **Spot con Auto Scaling**: Reemplazar instancias terminadas
- **Hibridar**: Base On-Demand + Spot para picos

**Interruption handling:**
\`\`\`
AWS notifica → 2 min warning → Instancia termina
\`\`\`

**Ejemplo de ahorro:**
- m5.xlarge On-Demand: $0.192/hora
- m5.xlarge Spot: ~$0.058/hora (70% ahorro)`,
      },
      {
        title: "Savings Plans",
        content: `**Savings Plans** son el modelo más nuevo, ofreciendo flexibilidad con descuentos similares a Reserved Instances.

**Tipos de Savings Plans:**

**Compute Savings Plans:**
- Descuento aplica a EC2, Lambda, Fargate
- Cualquier familia, tamaño, región
- Máxima flexibilidad
- Descuento hasta 66%

**EC2 Instance Savings Plans:**
- Aplica solo a EC2
- Comprometido a una familia en una región
- Flexible en tamaño, OS, tenancy
- Descuento hasta 72%

**Cómo funciona:**
- Te comprometes a un gasto por hora (ej: $10/hora)
- Obtienes descuento en ese monto comprometido
- Uso adicional se cobra On-Demand

**Ejemplo:**
\`\`\`
Compromiso: $10/hora por 1 año
Uso real: $15/hora

Facturación:
- $10/hora con descuento de Savings Plan
- $5/hora a precio On-Demand
\`\`\`

**Savings Plans vs Reserved Instances:**
| Aspecto | Savings Plans | Reserved |
|---------|--------------|----------|
| Compromiso | $/hora | Instancia específica |
| Flexibilidad | Alta | Baja (Standard) |
| Servicios | EC2, Lambda, Fargate | Solo EC2 |
| Recommendation | Cost Explorer | Cost Explorer |`,
        note: "AWS Cost Explorer genera recomendaciones de Savings Plans basadas en tu uso histórico.",
      },
      {
        title: "Dedicated Hosts & Dedicated Instances",
        content: `Para requisitos de compliance o licencias, AWS ofrece opciones dedicadas.

**Dedicated Hosts:**
- Servidor físico dedicado exclusivamente para ti
- Visibilidad de sockets, cores, host ID
- Necesario para licencias BYOL (traer tu licencia)
- Más caro, más control

**Dedicated Instances:**
- Instancias en hardware dedicado
- Sin visibilidad del servidor físico
- No sirve para BYOL que requiere socket/core info
- Menos control, menos costoso que Host

**Comparación:**
| Característica | Dedicated Host | Dedicated Instance |
|---------------|----------------|-------------------|
| Hardware dedicado | ✓ | ✓ |
| Aislamiento físico | ✓ | ✓ |
| Visibilidad de cores/sockets | ✓ | ✗ |
| BYOL (socket-based) | ✓ | ✗ |
| Placement control | ✓ | ✗ |
| Precio | Más alto | Alto |

**Cuándo usar:**
- **Dedicated Hosts**: Licencias Oracle/SQL Server BYOL, compliance estricto
- **Dedicated Instances**: Aislamiento requerido sin necesidad de BYOL

**Precios:**
- On-Demand por host (ej: $5/hora)
- Reserved Hosts con descuento
- Savings Plans aplican a Dedicated Instances`,
      },
      {
        title: "Comparación y Recomendaciones",
        content: `**Resumen de descuentos:**
| Modelo | Descuento | Compromiso | Interrupción |
|--------|-----------|------------|--------------|
| On-Demand | 0% | Ninguno | No |
| Reserved (1yr) | ~40% | 1 año | No |
| Reserved (3yr) | ~60% | 3 años | No |
| Savings Plans | ~40-66% | 1-3 años | No |
| Spot | ~60-90% | Ninguno | Sí |

**Estrategia recomendada:**

**Baseline predecible:**
- Usar Reserved Instances o Savings Plans
- Para workloads que corren 24/7

**Variabilidad:**
- On-Demand para picos inesperados
- Spot para workloads tolerantes a fallas

**Arquitectura híbrida:**
\`\`\`
       100%
        │
        ├──── Spot (escalado extra)
        │
        ├──── On-Demand (picos predecibles)
        │
        └──── Reserved/Savings (baseline 24/7)
        0%
\`\`\`

**Herramientas AWS:**
- **Cost Explorer**: Analiza uso y genera recomendaciones
- **AWS Compute Optimizer**: Sugiere tipos de instancia
- **Savings Plans Recommendations**: Calcula compromiso óptimo`,
      },
    ],
  },
  keyTakeaways: [
    "On-Demand: Máxima flexibilidad, sin descuento, pago por uso",
    "Reserved Instances: 1-3 años de compromiso, hasta 72% descuento",
    "Spot: Hasta 90% descuento pero pueden ser interrumpidas",
    "Savings Plans: Compromiso $/hora, flexible entre servicios",
    "Combinar modelos es la estrategia más costo-efectiva",
  ],
  relatedQuestions: ["q85", "q86", "q87"],
  tags: ["EC2", "precios", "On-Demand", "Reserved", "Spot", "Savings Plans"],
  readingTime: 13,
  lastUpdated: "2025-12-11",
};
