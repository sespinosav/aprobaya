import { Article } from "@/types";

export const amazonEfs: Article = {
  id: "d3-art-12",
  slug: "amazon-efs",
  title: "Amazon EFS: Sistema de Archivos Elástico",
  shortDescription:
    "Sistema de archivos compartido y escalable para workloads de Linux y contenedores.",
  domainId: "domain3",
  content: {
    introduction:
      "Amazon Elastic File System (EFS) es un sistema de archivos elástico, completamente administrado y escalable para usar con servicios de AWS y recursos on-premises. Escala automáticamente según agregas o eliminas archivos.",
    sections: [
      {
        title: "¿Qué es Amazon EFS?",
        content: `EFS es un **sistema de archivos NFS administrado** que puede ser montado por múltiples instancias simultáneamente.

**Características principales:**
- **Elástico**: Crece y decrece automáticamente
- **Compartido**: Múltiples EC2/contenedores acceden al mismo sistema
- **Administrado**: AWS gestiona la infraestructura
- **Compatible con NFS 4.0/4.1**

**Casos de uso:**
- Directorios home compartidos
- Almacenamiento de aplicaciones web
- Content management systems (CMS)
- Machine learning training
- Big data analytics
- Contenedores con ECS/EKS

**Almacenamiento compartido:**
\`\`\`
    EC2 (AZ-a)     EC2 (AZ-b)     ECS Tasks
         │              │              │
         └──────────────┼──────────────┘
                        │
                   Amazon EFS
                  ┌────────────┐
                  │  Sistema   │
                  │ de Archivos│
                  └────────────┘
\`\`\``,
      },
      {
        title: "EFS vs EBS vs S3",
        content: `**Amazon EFS:**
- Sistema de archivos compartido
- Protocolo NFS
- Multi-AZ por defecto
- Escala automáticamente
- Solo para Linux

**Amazon EBS:**
- Almacenamiento de bloques
- Adjunto a UNA sola EC2
- Reside en una AZ
- Tamaño fijo (pre-aprovisionado)
- Ideal para bases de datos, OS

**Amazon S3:**
- Almacenamiento de objetos
- Acceso vía API (no sistema de archivos)
- Global (no AZ específico)
- Ideal para archivos, backups, data lakes

**Tabla comparativa:**
| Característica | EFS | EBS | S3 |
|---------------|-----|-----|-----|
| Tipo | Archivos (NFS) | Bloques | Objetos |
| Acceso | Multi-instancia | Una instancia | API/HTTP |
| Escalado | Automático | Manual | Ilimitado |
| Casos de uso | Compartido | Bases de datos | Archivos, web |
| Precio | Por GB usado | Por GB aprovisionado | Por GB + requests |`,
      },
      {
        title: "Clases de Almacenamiento EFS",
        content: `**EFS Standard:**
- Alta disponibilidad (Multi-AZ)
- Para datos de acceso frecuente
- Mayor costo de almacenamiento

**EFS Standard-IA (Infrequent Access):**
- Para archivos no accedidos frecuentemente
- ~90% más barato que Standard
- Costo por recuperación de datos

**EFS One Zone:**
- Una sola AZ
- ~47% más barato que Standard
- Para datos no críticos o replicables

**EFS One Zone-IA:**
- Una sola AZ + Acceso infrecuente
- La opción más económica
- ~92% más barato que Standard

**Lifecycle Management:**
- Mueve archivos automáticamente a IA
- Configurable: 7, 14, 30, 60, 90 días sin acceso
- Reduce costos significativamente

**Ejemplo de ahorro:**
- 100 GB en Standard: $30/mes
- 100 GB en Standard-IA: $2.50/mes
- Con lifecycle: la mayoría migra a IA automáticamente`,
        note: "Siempre habilita Lifecycle Management para optimizar costos automáticamente.",
      },
      {
        title: "Modos de Rendimiento",
        content: `**General Purpose (Recomendado):**
- Para la mayoría de workloads
- Baja latencia por operación
- Hasta 35,000 IOPS
- Ideal para web serving, CMS, dev environments

**Max I/O:**
- Para workloads altamente paralelos
- Escala a mayor throughput
- Latencia ligeramente mayor
- Big data, media processing, ML

**Throughput Modes:**

**Bursting:**
- Throughput escala con tamaño del sistema
- 50 MB/s por TB almacenado
- Acumula créditos cuando no se usa
- Gratis (incluido)

**Provisioned:**
- Throughput fijo independiente del tamaño
- Para sistemas pequeños con alto throughput
- Costo adicional

**Elastic (Nuevo):**
- Escala automáticamente según demanda
- Hasta 3 GB/s para lecturas
- Ideal para workloads impredecibles

**Recomendación:**
- Empieza con General Purpose + Elastic
- Monitorea con CloudWatch
- Ajusta si necesitas más rendimiento`,
      },
      {
        title: "Configuración y Acceso",
        content: `**Mount Targets:**
- Endpoints ENI en cada AZ
- Necesitas crear uno por AZ donde accederás
- Security Groups controlan acceso

**Configuración básica:**
\`\`\`bash
# Instalar utilidades NFS
sudo yum install -y amazon-efs-utils

# Montar EFS
sudo mount -t efs fs-12345678:/ /mnt/efs

# O con TLS (recomendado)
sudo mount -t efs -o tls fs-12345678:/ /mnt/efs
\`\`\`

**Opciones de montaje persistente:**
\`\`\`bash
# Agregar a /etc/fstab
fs-12345678:/ /mnt/efs efs defaults,_netdev 0 0
\`\`\`

**Acceso desde contenedores:**
- ECS: Definir en task definition
- EKS: Usar CSI driver para EFS
- Fargate: Soportado desde 2020

**Seguridad:**
- Cifrado en tránsito con TLS
- Cifrado en reposo con KMS
- IAM para control de acceso
- Security Groups para red`,
      },
      {
        title: "Precios y Casos de Uso Detallados",
        content: `**Modelo de precios:**
- Pagas solo por lo que usas
- Sin aprovisionamiento previo
- Diferentes precios por clase

**Precios aproximados (us-east-1):**
| Clase | Precio/GB/mes |
|-------|---------------|
| Standard | $0.30 |
| Standard-IA | $0.025 |
| One Zone | $0.16 |
| One Zone-IA | $0.0133 |

**Costos adicionales:**
- Throughput provisionado: $6/MB/s/mes
- Transferencia inter-AZ: incluido

**Casos de uso detallados:**

**WordPress/Drupal:**
- Múltiples servidores web comparten wp-content
- Uploads disponibles en todos los nodos
- Escala horizontalmente

**Desarrollo colaborativo:**
- Compartir código entre desarrolladores
- Ambientes de desarrollo consistentes

**Machine Learning:**
- Datasets compartidos entre training jobs
- Múltiples instancias leen datos en paralelo

**Contenedores stateful:**
- Persistencia para aplicaciones containerizadas
- Compartir estado entre réplicas`,
      },
    ],
  },
  keyTakeaways: [
    "EFS es un sistema de archivos NFS administrado y compartido",
    "Escala automáticamente - pagas por lo que usas",
    "Múltiples EC2/contenedores pueden acceder simultáneamente",
    "Lifecycle Management mueve archivos a IA para ahorrar costos",
    "EFS es para Linux/NFS, EBS para una instancia, S3 para objetos",
  ],
  relatedQuestions: ["q70"],
  tags: ["EFS", "almacenamiento", "NFS", "compartido", "escalable"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
