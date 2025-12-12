import { Article } from "@/types";

export const amazonCloudfront: Article = {
  id: "d3-art-07",
  slug: "amazon-cloudfront",
  title: "Amazon CloudFront: CDN Global de AWS",
  shortDescription:
    "Comprende cómo CloudFront distribuye contenido globalmente con baja latencia usando Edge Locations.",
  domainId: "domain3",
  content: {
    introduction:
      "Amazon CloudFront es un servicio de Content Delivery Network (CDN) que distribuye datos, videos, aplicaciones y APIs a usuarios en todo el mundo con baja latencia y altas velocidades de transferencia.",
    sections: [
      {
        title: "¿Qué es un CDN?",
        content: `Un **Content Delivery Network (CDN)** es una red de servidores distribuidos geográficamente que entregan contenido a usuarios desde la ubicación más cercana.

**Problema que resuelve:**
- Usuario en Japón accede a servidor en Virginia
- Alta latencia por la distancia
- Experiencia de usuario degradada

**Solución con CDN:**
- Contenido cacheado en Edge Location en Tokio
- Usuario recibe contenido desde ubicación cercana
- Latencia reducida significativamente

**CloudFront en números:**
- 400+ Edge Locations globalmente
- 13 Regional Edge Caches
- Presencia en 90+ ciudades en 40+ países`,
      },
      {
        title: "Cómo Funciona CloudFront",
        content: `**Componentes principales:**

**Origin (Origen):**
- Fuente original del contenido
- S3 bucket, EC2, ALB, o cualquier servidor HTTP
- Custom origins soportados

**Distribution:**
- Configuración de CloudFront
- Define origins, comportamientos, cache

**Edge Locations:**
- Puntos de presencia globales
- Cachean contenido cerca de usuarios

**Flujo de una solicitud:**
1. Usuario solicita contenido (imagen, video, API)
2. DNS dirige a Edge Location más cercana
3. Si contenido está en caché → se devuelve inmediatamente
4. Si no está en caché → se obtiene del origin, se cachea, y se devuelve

**Cache Hit vs Cache Miss:**
- **Hit**: Contenido servido desde Edge (rápido)
- **Miss**: Contenido obtenido del origin (primera vez)`,
      },
      {
        title: "Orígenes Soportados",
        content: `**Amazon S3:**
- Hosting de sitios web estáticos
- Distribución de archivos
- Con Origin Access Control (OAC) para seguridad

**Amazon EC2 / ALB:**
- Aplicaciones dinámicas
- APIs
- Debe ser accesible públicamente

**Custom Origins:**
- Cualquier servidor HTTP/HTTPS
- On-premises servers
- Otros proveedores de nube

**Múltiples orígenes:**
- Una distribución puede tener varios origins
- Behaviors definen qué origin usar según el path

**Ejemplo:**
\`\`\`
/static/*  → S3 Bucket (imágenes, CSS, JS)
/api/*     → ALB (API dinámica)
/*         → EC2 (aplicación principal)
\`\`\``,
      },
      {
        title: "Configuración de Caché",
        content: `**TTL (Time-To-Live):**
- Cuánto tiempo se mantiene en caché
- Configurable por path o tipo de contenido
- Balance entre frescura y rendimiento

**Cache Key:**
- Qué define si un objeto es único en caché
- Por defecto: URL completa
- Puede incluir: headers, query strings, cookies

**Invalidación de caché:**
- Forzar que se obtenga contenido nuevo del origin
- Útil para deployments
- Tiene costo por path invalidado

**Cache Policies:**
- Políticas predefinidas o personalizadas
- Controlan comportamiento de caché
- Se pueden reutilizar entre distributions

**Mejores prácticas:**
- TTL largo para contenido estático
- TTL corto o sin caché para contenido dinámico
- Usar versionado en URLs (app.v2.js) vs invalidación`,
        note: "Invalidar caché tiene costo. Es mejor usar versionado de archivos cuando sea posible.",
      },
      {
        title: "Seguridad en CloudFront",
        content: `**HTTPS/SSL:**
- Certificados SSL/TLS gratuitos con ACM
- Forzar HTTPS para todas las conexiones
- Comunicación segura edge-to-origin

**Origin Access Control (OAC):**
- Restringe acceso directo al S3 bucket
- Solo CloudFront puede acceder al origin
- Reemplaza al antiguo Origin Access Identity (OAI)

**AWS WAF:**
- Integración con Web Application Firewall
- Protección contra ataques web
- Reglas personalizables

**Geo Restriction:**
- Permitir o bloquear por país
- Útil para restricciones de licencias
- Basado en IP geográfica

**Signed URLs y Signed Cookies:**
- Contenido privado con acceso controlado
- Expiran después de cierto tiempo
- Para contenido premium o restringido

**Field-Level Encryption:**
- Cifrado adicional para datos sensibles
- Se mantiene cifrado hasta el origin`,
      },
      {
        title: "Casos de Uso y Precios",
        content: `**Casos de uso:**
- **Sitios web estáticos**: HTML, CSS, JS, imágenes
- **Streaming de video**: VOD y live streaming
- **APIs**: Reducir latencia de APIs globales
- **Software distribution**: Actualizaciones, parches
- **Gaming**: Assets de juegos

**Modelo de precios:**
- Pago por datos transferidos out (por GB)
- Pago por solicitudes HTTP/HTTPS
- Sin costos iniciales ni compromisos

**Clases de precios:**
- **Price Class All**: Todas las Edge Locations
- **Price Class 200**: Mayoría (excluye las más caras)
- **Price Class 100**: Solo regiones menos costosas

**Free Tier:**
- 1 TB de transferencia de datos out/mes
- 10 millones de solicitudes HTTP/HTTPS
- 2 millones de invocaciones CloudFront Functions
- Primer año

**Costos adicionales:**
- Invalidaciones (primeras 1,000/mes gratis)
- Solicitudes a origin
- Lambda@Edge invocaciones`,
      },
    ],
  },
  keyTakeaways: [
    "CloudFront es un CDN que cachea contenido en 400+ Edge Locations globales",
    "Orígenes pueden ser S3, EC2, ALB o cualquier servidor HTTP",
    "Reduce latencia sirviendo contenido desde la ubicación más cercana al usuario",
    "Incluye seguridad: HTTPS, WAF, geo-restriction, signed URLs",
    "Free tier incluye 1 TB de transferencia y 10M solicitudes mensuales",
  ],
  relatedQuestions: ["q57", "q64", "q65"],
  tags: ["CloudFront", "CDN", "edge locations", "caché", "distribución"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
