import { Article } from "@/types";

export const infraestructuraGlobalAws: Article = {
  id: "d3-art-01",
  slug: "infraestructura-global-aws",
  title: "Infraestructura Global de AWS",
  shortDescription:
    "Comprende las Regiones, Zonas de Disponibilidad, Edge Locations y cómo AWS distribuye su infraestructura globalmente.",
  domainId: "domain3",
  content: {
    introduction:
      "AWS opera la infraestructura de nube más grande del mundo, con presencia en múltiples continentes. Entender cómo se organiza esta infraestructura es fundamental para diseñar arquitecturas resilientes y de alto rendimiento.",
    sections: [
      {
        title: "Regiones AWS",
        content: `Una **Región de AWS** es una ubicación geográfica que contiene múltiples centros de datos aislados.

Características de las Regiones:
- **Aislamiento físico completo** entre regiones
- **Independencia** de fallas (una región no afecta a otra)
- **Cumplimiento regulatorio** (datos permanecen en la región seleccionada)
- **Latencia optimizada** al elegir región cercana a usuarios

**Criterios para elegir una Región:**
1. **Cumplimiento legal**: Regulaciones de residencia de datos
2. **Latencia**: Proximidad a usuarios finales
3. **Servicios disponibles**: No todos los servicios están en todas las regiones
4. **Precios**: Varían entre regiones

Ejemplos de regiones: us-east-1 (N. Virginia), eu-west-1 (Irlanda), sa-east-1 (São Paulo).`,
      },
      {
        title: "Zonas de Disponibilidad (AZ)",
        content: `Una **Zona de Disponibilidad (AZ)** es uno o más centros de datos discretos con energía, redes y conectividad redundantes.

**Características clave:**
- Cada Región tiene **mínimo 3 AZs** (típicamente)
- Separadas físicamente por distancia significativa (kilómetros)
- Conectadas mediante **red de alta velocidad y baja latencia**
- Diseñadas para aislar fallas

**Beneficios de múltiples AZs:**
- Alta disponibilidad
- Tolerancia a fallas
- Recuperación ante desastres

**Diseño recomendado:** Distribuir recursos en al menos 2 AZs para alta disponibilidad.`,
        note: "Los nombres de AZ (como us-east-1a) se mapean diferente para cada cuenta AWS para distribuir carga.",
      },
      {
        title: "Edge Locations y CloudFront",
        content: `Las **Edge Locations** son puntos de presencia distribuidos globalmente, separados de las Regiones.

**Propósito principal:**
- Entregar contenido con **baja latencia** a usuarios finales
- Caché de contenido estático cercano a usuarios
- Más de **400+ Edge Locations** globalmente

**Servicios que usan Edge Locations:**
- **Amazon CloudFront**: CDN para distribución de contenido
- **Amazon Route 53**: DNS con resolución global
- **AWS Global Accelerator**: Optimización de rutas de red
- **AWS WAF**: Protección en el edge

Las Edge Locations están en muchas más ciudades que las Regiones AWS.`,
      },
      {
        title: "AWS Local Zones y Wavelength",
        content: `**AWS Local Zones:**
- Extensiones de Regiones cercanas a poblaciones
- Para aplicaciones que requieren latencia de un dígito de milisegundos
- Ideal para gaming, streaming, machine learning en tiempo real

**AWS Wavelength:**
- Infraestructura AWS embebida en redes 5G de telecomunicaciones
- Latencia ultra-baja para aplicaciones móviles
- Casos de uso: realidad aumentada, vehículos conectados

**AWS Outposts:**
- Infraestructura AWS instalada en tu propio centro de datos
- Para requisitos de residencia de datos o latencia local
- Experiencia híbrida consistente`,
      },
      {
        title: "Consideraciones de Arquitectura Global",
        content: `**Para Alta Disponibilidad:**
- Usar múltiples AZs dentro de una región
- Ejemplo: Auto Scaling Group distribuido en 3 AZs

**Para Recuperación ante Desastres:**
- Usar múltiples Regiones
- Estrategias: Pilot Light, Warm Standby, Active-Active

**Para Rendimiento Global:**
- Edge Locations con CloudFront
- Route 53 con routing de latencia
- Global Accelerator para optimización de red

**Resiliencia por capa:**
- Edge → Edge Locations
- Regional → Múltiples AZs
- Global → Múltiples Regiones`,
      },
    ],
  },
  keyTakeaways: [
    "Regiones son ubicaciones geográficas aisladas con múltiples AZs",
    "AZs son centros de datos separados físicamente pero conectados",
    "Edge Locations sirven contenido con baja latencia globalmente",
    "Elegir región según: cumplimiento, latencia, servicios y precios",
    "Alta disponibilidad requiere distribuir en múltiples AZs",
  ],
  relatedQuestions: ["q56", "q57", "q64", "q65"],
  tags: ["regiones", "AZ", "edge locations", "global", "infraestructura", "CloudFront"],
  readingTime: 9,
  lastUpdated: "2025-12-11",
};
