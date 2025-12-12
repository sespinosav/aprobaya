import { Article } from "@/types";

export const principioPrivilegioMinimo: Article = {
  id: "d2-art-07",
  slug: "principio-privilegio-minimo",
  title: "Principio de Privilegio Mínimo",
  shortDescription:
    "Aprende a aplicar el principio de seguridad más importante en la gestión de accesos.",
  certificationId: "aws-clf-c02",
  domainId: "security-compliance",
  content: [
    {
      title: "¿Qué es el Principio de Privilegio Mínimo?",
      content: `El **Principio de Privilegio Mínimo** (Principle of Least Privilege - PoLP) establece que:

> Un usuario, aplicación o sistema debe tener **solo los permisos mínimos necesarios** para realizar sus tareas específicas, nada más.

### ¿Por qué es importante?

**Reduce la superficie de ataque:**
- Si un usuario es comprometido, el daño es limitado
- Menos permisos = menos riesgo

**Limita errores accidentales:**
- Un desarrollador no puede borrar producción si no tiene acceso
- Reduce el "factor humano"

**Mejora la auditoría:**
- Permisos específicos = acciones rastreables
- Más fácil detectar anomalías`,
    },
    {
      title: "Implementación en AWS IAM",
      content: `### Estrategia: Empezar sin permisos y agregar

En lugar de dar "AdministratorAccess" y quitar lo que sobra:

\`\`\`
❌ Incorrecto:
1. Dar todos los permisos
2. Quitar los que "no necesita"
3. (Nunca se hace el paso 2)

✅ Correcto:
1. Empezar sin permisos
2. Usuario solicita acceso específico
3. Otorgar solo lo solicitado
4. Revisar periódicamente
\`\`\`

### Ejemplo: Desarrollador que necesita acceso a S3

**Malo - Demasiado permisivo:**
\`\`\`json
{
  "Effect": "Allow",
  "Action": "s3:*",
  "Resource": "*"
}
\`\`\`

**Mejor - Específico:**
\`\`\`json
{
  "Effect": "Allow",
  "Action": [
    "s3:GetObject",
    "s3:PutObject"
  ],
  "Resource": "arn:aws:s3:::my-app-bucket/*"
}
\`\`\``,
    },
    {
      title: "Herramientas de AWS para PoLP",
      content: `### IAM Access Analyzer

**Función:** Identifica recursos compartidos externamente y analiza políticas.

**Uso para PoLP:**
- Genera políticas basadas en actividad real
- Identifica permisos no utilizados
- Sugiere políticas más restrictivas

### IAM Access Advisor

**Función:** Muestra cuándo se usó cada servicio por última vez.

**Uso para PoLP:**
- Si un servicio no se usa en 90 días, considera remover el permiso
- Identificar permisos "por si acaso" que nunca se usan

### AWS CloudTrail

**Función:** Registra todas las llamadas API.

**Uso para PoLP:**
- Auditar qué acciones realiza cada usuario
- Identificar acciones intentadas pero denegadas
- Base para crear políticas precisas

### IAM Policy Simulator

**Función:** Probar políticas antes de aplicarlas.

**Uso para PoLP:**
- Verificar que la política solo permite lo necesario
- Probar escenarios específicos`,
    },
    {
      title: "Patrones de Implementación",
      content: `### 1. Políticas basadas en roles funcionales

Crea grupos IAM por función laboral:

| Grupo | Permisos típicos |
|-------|------------------|
| Developers | EC2 read, S3 dev bucket, CloudWatch |
| DataScientists | SageMaker, S3 data bucket, Athena |
| DBAdmins | RDS full, Secrets Manager |
| SecurityAuditors | ReadOnly en servicios de seguridad |
| BillingAdmins | Billing, Cost Explorer, Budgets |

### 2. Separación de ambientes

\`\`\`
✅ Developers → Solo ambiente de desarrollo
✅ QA → Desarrollo + Staging
✅ SRE → Desarrollo + Staging + Producción (con restricciones)
✅ Producción → Permisos muy limitados, requiere aprobación
\`\`\`

### 3. Permisos temporales

Usa roles con duración limitada para tareas especiales:

- Acceso de emergencia (break-glass) con duración corta
- Roles asumibles que expiran
- Sesiones con duración máxima configurada

### 4. Condiciones en políticas

Agrega condiciones para mayor control:

\`\`\`json
{
  "Condition": {
    "IpAddress": {
      "aws:SourceIp": "192.168.1.0/24"
    },
    "Bool": {
      "aws:MultiFactorAuthPresent": "true"
    }
  }
}
\`\`\``,
    },
    {
      title: "Antipatrones a Evitar",
      content: `### ❌ Antipatrón 1: AdministratorAccess para todos

**Problema:** Cualquier error o compromiso afecta todo.

**Solución:** Crear políticas específicas por rol.

### ❌ Antipatrón 2: Copiar políticas de Stack Overflow

**Problema:** Políticas demasiado permisivas como ejemplo.

**Solución:** Entender y ajustar cada política a tu caso.

### ❌ Antipatrón 3: "Resource": "*" siempre

**Problema:** Acceso a todos los recursos del servicio.

**Solución:** Especificar ARNs de recursos específicos.

### ❌ Antipatrón 4: Nunca revisar permisos

**Problema:** Los permisos se acumulan con el tiempo.

**Solución:** Revisiones periódicas con Access Advisor.

### ❌ Antipatrón 5: Access Keys para todo

**Problema:** Credenciales de larga duración expuestas.

**Solución:** Usar roles siempre que sea posible.`,
    },
    {
      title: "PoLP para Servicios AWS",
      content: `### IAM Roles para Servicios

**Lambda:**
\`\`\`
❌ Lambda con AmazonDynamoDBFullAccess
✅ Lambda con permiso solo a la tabla específica que usa
\`\`\`

**EC2:**
\`\`\`
❌ EC2 con acceso a todos los buckets S3
✅ EC2 con Instance Profile que accede solo a su bucket
\`\`\`

### Resource-based Policies

Para S3, Lambda, SNS, SQS, etc., también puedes limitar quién puede acceder al recurso:

**S3 Bucket Policy:**
\`\`\`json
{
  "Effect": "Allow",
  "Principal": {
    "AWS": "arn:aws:iam::123456789012:role/MyLambdaRole"
  },
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::my-bucket/*"
}
\`\`\`

### VPC Endpoints con Policies

Los VPC Endpoints pueden tener políticas que restringen qué recursos son accesibles:

\`\`\`json
{
  "Statement": [{
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::approved-bucket/*"
  }]
}
\`\`\``,
    },
    {
      title: "PoLP en el Examen CLF-C02",
      content: `### Puntos clave:

1. **Definición:** Solo permisos mínimos necesarios
2. **Empezar sin permisos** y agregar según necesidad
3. **Access Advisor:** Ver qué permisos se usan realmente
4. **Access Analyzer:** Generar políticas basadas en actividad
5. **Especificar recursos:** Evitar "Resource": "*"
6. **Roles > Access Keys:** Credenciales temporales son más seguras
7. **Revisiones periódicas:** Remover permisos no usados

### Preguntas típicas:

*"¿Cuál es la mejor práctica para asignar permisos IAM?"*
→ Principio de privilegio mínimo: solo los permisos necesarios

*"¿Cómo saber qué permisos realmente usa un usuario?"*
→ IAM Access Advisor

*"¿Qué herramienta genera políticas basadas en actividad?"*
→ IAM Access Analyzer

*"¿Por qué es preferible usar roles en lugar de access keys?"*
→ Las credenciales de roles son temporales (principio de mínimo privilegio en tiempo)

*"¿Qué debe hacer una empresa si un usuario no ha usado un permiso en 6 meses?"*
→ Considerar remover ese permiso (revisión con Access Advisor)`,
    },
  ],
  keyPoints: [
    "PoLP: Solo los permisos mínimos necesarios",
    "Empezar sin permisos y agregar según necesidad",
    "Access Advisor: Ver qué servicios usa cada identidad",
    "Access Analyzer: Generar políticas basadas en actividad real",
    "Especificar recursos concretos en las políticas",
    "Roles con credenciales temporales > Access Keys permanentes",
    "Revisar y remover permisos no usados periódicamente",
  ],
  tags: [
    "privilegio mínimo",
    "IAM",
    "seguridad",
    "mejores prácticas",
    "Access Advisor",
    "Access Analyzer",
    "políticas",
  ],
  relatedServices: ["iam"],
  readingTime: 10,
  lastUpdated: "2025-12-11",
};
