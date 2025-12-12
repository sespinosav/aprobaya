import { Article } from "@/types";

export const serviceCatalog: Article = {
  id: "d1-art-10",
  slug: "service-catalog",
  title: "AWS Service Catalog",
  shortDescription:
    "Gestiona catálogos de productos IT aprobados para cumplimiento y gobernanza.",
  certificationId: "aws-clf-c02",
  domainId: "cloud-concepts",
  content: [
    {
      title: "¿Qué es AWS Service Catalog?",
      content: `**AWS Service Catalog** permite a las organizaciones crear y gestionar catálogos de productos de TI aprobados para usar en AWS.

### El problema que resuelve:

Sin Service Catalog:
- Desarrolladores pueden lanzar cualquier configuración
- Difícil mantener estándares y compliance
- Recursos mal configurados o inseguros
- Costos inesperados

Con Service Catalog:
- Solo se pueden lanzar productos pre-aprobados
- Configuraciones estandarizadas y seguras
- Gobernanza centralizada
- Autoservicio controlado`,
    },
    {
      title: "Conceptos Clave",
      content: `### Productos
Un recurso o conjunto de recursos AWS empaquetados para desplegar. Se definen usando plantillas de CloudFormation.

**Ejemplos de productos:**
- "Instancia EC2 segura para desarrollo"
- "Cluster EKS estándar"
- "Base de datos RDS con backup configurado"

### Portfolios
Colección de productos que se asignan a usuarios o grupos específicos.

**Ejemplos de portfolios:**
- Portfolio de Desarrollo
- Portfolio de Producción
- Portfolio de Data Science

### Constraints (Restricciones)
Reglas que limitan cómo los usuarios pueden desplegar productos.

**Tipos de constraints:**
- **Launch:** Qué rol IAM usar para lanzar
- **Template:** Parámetros fijos o limitados
- **Notification:** Alertas SNS al lanzar
- **Tag Update:** Si usuarios pueden modificar tags

### Provisioned Products
Instancias desplegadas de un producto. Los usuarios pueden ver y gestionar sus productos desplegados.`,
    },
    {
      title: "Cómo Funciona",
      content: `### Flujo típico:

\`\`\`
1. Admin crea producto (CloudFormation template)
         ↓
2. Admin agrega producto a portfolio
         ↓
3. Admin asigna portfolio a usuarios/grupos IAM
         ↓
4. Usuario ve catálogo de productos disponibles
         ↓
5. Usuario lanza producto (autoservicio)
         ↓
6. CloudFormation despliega recursos según template
         ↓
7. Usuario gestiona su provisioned product
\`\`\`

### Ejemplo práctico:

**El equipo de plataforma crea:**
- Producto: "Web Server Tier"
- Template con: EC2 + ALB + Security Groups + CloudWatch alarms
- Parámetros: Solo pueden elegir tamaño (small/medium/large)
- Constraint: Solo pueden desplegarse en VPC aprobada

**El desarrollador:**
1. Abre Service Catalog
2. Ve "Web Server Tier" disponible
3. Selecciona tamaño "medium"
4. Clic en "Launch"
5. Recibe su stack completo en minutos

El desarrollador no necesita saber CloudFormation ni configurar security groups - todo está pre-configurado correctamente.`,
    },
    {
      title: "Beneficios",
      content: `### Para Administradores:

**Gobernanza:**
- Control centralizado de qué se puede desplegar
- Configuraciones aprobadas y auditadas
- Cumplimiento normativo (HIPAA, PCI, etc.)

**Estandarización:**
- Templates consistentes en toda la organización
- Mejores prácticas incorporadas
- Actualizaciones centralizadas

**Auditoría:**
- Registro de quién desplegó qué y cuándo
- Integración con CloudTrail
- Reportes de uso

### Para Usuarios Finales:

**Autoservicio:**
- Desplegar recursos sin tickets ni esperas
- Sin necesidad de conocer CloudFormation
- Interfaz simple de catálogo

**Velocidad:**
- De solicitud a recurso funcionando en minutos
- Configuración automática
- Menos errores humanos

**Simplicidad:**
- Solo opciones relevantes
- Parámetros pre-validados
- Menos decisiones que tomar`,
    },
    {
      title: "Casos de Uso",
      content: `### 1. Entornos de Desarrollo Estandarizados
Ofrecer a desarrolladores entornos pre-configurados con todas las herramientas y configuraciones de seguridad necesarias.

### 2. Cumplimiento Regulatorio
Asegurar que todos los recursos cumplan con estándares de seguridad y compliance antes de desplegarse.

### 3. Migración Empresarial
Durante migraciones a AWS, proporcionar configuraciones aprobadas que siguen las políticas de la empresa.

### 4. Multi-Cuenta con AWS Organizations
Compartir portfolios entre cuentas para mantener estándares consistentes en toda la organización.

### 5. DevOps Controlado
Permitir que equipos de desarrollo desplieguen rápidamente mientras mantienen control de gobernanza.`,
    },
    {
      title: "Integración con Otros Servicios",
      content: `### AWS Organizations
- Compartir portfolios entre cuentas
- Gobernanza centralizada para toda la organización

### AWS CloudFormation
- Los productos se definen como templates de CloudFormation
- Aprovecha toda la capacidad de IaC

### AWS IAM
- Control de acceso a portfolios y productos
- Roles de lanzamiento para permisos controlados

### AWS Config
- Verificar que recursos desplegados cumplan reglas
- Detectar drift de configuraciones

### AWS CloudTrail
- Auditoría de acciones en Service Catalog
- Compliance y forensics

### AWS Budgets
- Alertas de costos por productos desplegados
- Control de gastos por portfolio`,
    },
    {
      title: "Service Catalog en el Examen",
      content: `### Puntos clave para el CLF-C02:

1. **Propósito principal:**
   - Catálogo de productos IT aprobados
   - Gobernanza y compliance
   - Autoservicio controlado

2. **Componentes:**
   - Productos (CloudFormation templates)
   - Portfolios (colecciones de productos)
   - Constraints (restricciones)

3. **Beneficios:**
   - Estandarización
   - Autoservicio
   - Cumplimiento normativo
   - Menos errores de configuración

### Preguntas típicas:

*"¿Qué servicio permite a una empresa ofrecer productos IT pre-aprobados a sus desarrolladores?"*
→ AWS Service Catalog

*"¿Cómo puede una organización asegurar que los desarrolladores solo desplieguen configuraciones aprobadas?"*
→ AWS Service Catalog con productos estandarizados

*"¿Qué servicio permite autoservicio mientras mantiene gobernanza?"*
→ AWS Service Catalog`,
    },
  ],
  keyPoints: [
    "Service Catalog: Catálogo de productos IT pre-aprobados",
    "Productos: Definidos con CloudFormation templates",
    "Portfolios: Colecciones de productos asignadas a usuarios",
    "Constraints: Restricciones en cómo se despliegan productos",
    "Permite autoservicio manteniendo gobernanza y compliance",
    "Integra con Organizations para compartir entre cuentas",
    "Los usuarios no necesitan saber CloudFormation",
  ],
  tags: [
    "Service Catalog",
    "gobernanza",
    "compliance",
    "catálogo",
    "autoservicio",
    "CloudFormation",
    "portfolios",
  ],
  relatedServices: ["service-catalog", "cloudformation", "organizations"],
  readingTime: 8,
  lastUpdated: "2025-12-11",
};
