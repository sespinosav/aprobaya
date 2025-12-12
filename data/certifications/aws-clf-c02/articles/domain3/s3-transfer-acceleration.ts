import { Article } from "@/types";

export const s3TransferAcceleration: Article = {
  id: "d3-art-04",
  slug: "s3-transfer-acceleration",
  title: "S3 Transfer Acceleration",
  shortDescription:
    "Acelera las transferencias de archivos a S3 usando la red global de AWS y Edge Locations.",
  domainId: "domain3",
  content: {
    introduction:
      "S3 Transfer Acceleration permite transferir archivos de manera rápida, fácil y segura a buckets de S3 sobre largas distancias, aprovechando las Edge Locations de Amazon CloudFront.",
    sections: [
      {
        title: "¿Qué es Transfer Acceleration?",
        content: `Transfer Acceleration **acelera las subidas a S3** utilizando la infraestructura global de AWS.

**Cómo funciona:**
1. Los datos se suben a la **Edge Location más cercana** al cliente
2. AWS enruta los datos por su **red backbone optimizada**
3. Los datos llegan al bucket S3 en la región de destino

**Beneficio principal:**
- Acelera transferencias cuando hay **distancia geográfica significativa** entre el cliente y el bucket S3
- Puede mejorar velocidad entre 50% y 500%

**Ejemplo:**
Un usuario en Australia subiendo archivos a un bucket en us-east-1:
- Sin Transfer Acceleration: Internet público, latencia alta
- Con Transfer Acceleration: Edge Location en Sydney → Red AWS → us-east-1`,
      },
      {
        title: "Cuándo Usar Transfer Acceleration",
        content: `**Casos de uso ideales:**
- Usuarios globales subiendo a un bucket centralizado
- Transferencias regulares de archivos grandes (GB+) a larga distancia
- Aplicaciones con requisitos de velocidad de carga

**Ejemplos específicos:**
- Periodistas en campo subiendo videos HD
- Estudios de producción transferiendo medios
- Backups internacionales de empresas
- Aplicaciones colaborativas globales

**No es necesario cuando:**
- Los usuarios están cerca del bucket (misma región)
- Las transferencias son pequeñas y ocasionales
- El costo adicional no justifica la mejora`,
        note: "AWS ofrece una herramienta de comparación de velocidad para determinar si Transfer Acceleration beneficiará tus transferencias específicas.",
      },
      {
        title: "Configuración y Uso",
        content: `**Habilitar Transfer Acceleration:**
1. Ir a las propiedades del bucket en S3
2. Activar "Transfer Acceleration"
3. Usar el endpoint especial de acceleration

**Endpoints:**
- Normal: \`bucket-name.s3.region.amazonaws.com\`
- Acceleration: \`bucket-name.s3-accelerate.amazonaws.com\`

**Requisitos del bucket:**
- El nombre del bucket debe ser compatible con DNS
- No puede contener puntos
- Transfer Acceleration debe estar habilitado

**SDK y CLI:**
\`\`\`bash
# AWS CLI con acceleration
aws s3 cp archivo.zip s3://mi-bucket/ --region us-east-1 \\
  --endpoint-url https://s3-accelerate.amazonaws.com
\`\`\``,
        code: `// JavaScript SDK v3
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({ 
  region: "us-east-1",
  useAccelerateEndpoint: true 
});`,
      },
      {
        title: "Costos de Transfer Acceleration",
        content: `**Modelo de precios:**
- Se cobra **adicionalmente** al costo normal de transferencia de datos
- Solo se cobra cuando la acceleration **realmente acelera** la transferencia
- Si no hay mejora, AWS no cobra el cargo adicional

**Tarifas aproximadas (varían por región):**
- $0.04 por GB acelerado (dentro de EE.UU.)
- $0.08 por GB acelerado (otras regiones)

**Herramienta de comparación:**
AWS proporciona una herramienta para probar:
\`https://s3-accelerate-speedtest.s3-accelerate.amazonaws.com\`

**Consideraciones de costo:**
- Evaluar si la mejora de velocidad justifica el costo
- Útil para transferencias críticas de tiempo
- Puede ser más económico que soluciones de terceros`,
      },
      {
        title: "Otras Opciones de Transferencia Rápida",
        content: `**Alternativas y complementos:**

**AWS DataSync:**
- Transferencia automatizada y acelerada
- Entre on-premises y AWS
- Incluye verificación de integridad

**AWS Snow Family:**
- Para petabytes de datos
- Dispositivos físicos
- Cuando la red no es viable

**Multipart Upload:**
- Para archivos grandes (> 100 MB recomendado)
- Paralleliza la subida
- Mejora rendimiento y resiliencia
- Combinable con Transfer Acceleration

**Direct Connect:**
- Conexión dedicada a AWS
- Latencia consistente
- Para transferencias continuas de alto volumen

**Comparación:**
| Método | Mejor para |
|--------|-----------|
| Transfer Acceleration | Subidas rápidas sobre internet |
| DataSync | Sincronización continua |
| Snow Family | Migración masiva offline |
| Direct Connect | Conexión dedicada permanente |`,
      },
    ],
  },
  keyTakeaways: [
    "Transfer Acceleration usa Edge Locations para acelerar subidas a S3",
    "Ideal para usuarios geográficamente distantes del bucket",
    "Se cobra solo cuando hay mejora real en velocidad",
    "Combinar con Multipart Upload para archivos grandes",
    "Usar el endpoint s3-accelerate.amazonaws.com",
  ],
  relatedQuestions: ["q47", "q50"],
  tags: ["S3", "transfer acceleration", "edge locations", "rendimiento", "transferencias"],
  readingTime: 8,
  lastUpdated: "2025-12-11",
};
