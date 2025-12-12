import { Article } from "@/types";

export const cloudformationIac: Article = {
  id: "d3-art-09",
  slug: "cloudformation-iac",
  title: "AWS CloudFormation: Infraestructura como Código",
  shortDescription:
    "Gestiona tu infraestructura AWS de forma declarativa con templates y stacks de CloudFormation.",
  domainId: "domain3",
  content: {
    introduction:
      "AWS CloudFormation te permite modelar y aprovisionar recursos de AWS y de terceros de manera programática usando plantillas. Es el servicio principal de Infraestructura como Código (IaC) de AWS.",
    sections: [
      {
        title: "¿Qué es Infraestructura como Código?",
        content: `**Infraestructura como Código (IaC)** es la práctica de gestionar infraestructura mediante archivos de definición en lugar de configuración manual.

**Beneficios:**
- **Reproducibilidad**: Crear entornos idénticos fácilmente
- **Versionado**: Usar Git para controlar cambios
- **Documentación**: El código ES la documentación
- **Automatización**: Despliegues consistentes y rápidos
- **Revisión**: Code reviews para cambios de infraestructura

**Sin IaC:**
1. Ir a la consola AWS
2. Hacer clic en crear EC2
3. Configurar manualmente cada opción
4. Repetir para cada recurso...
5. ¿Cómo lo recreo? 🤔

**Con IaC:**
1. Escribir template
2. Ejecutar: \`aws cloudformation deploy\`
3. ¡Infraestructura creada! ✅`,
      },
      {
        title: "Conceptos de CloudFormation",
        content: `**Template (Plantilla):**
- Archivo JSON o YAML
- Define los recursos a crear
- Es el "plano" de tu infraestructura

**Stack:**
- Conjunto de recursos creados desde un template
- Se gestiona como una unidad
- Crear, actualizar, eliminar stack = afecta todos sus recursos

**Resources:**
- Componentes de AWS a crear
- EC2, S3, VPC, Lambda, etc.
- 800+ tipos de recursos soportados

**Parameters:**
- Inputs personalizables
- Valores diferentes por ambiente (dev, prod)

**Outputs:**
- Valores exportados del stack
- IDs, URLs, ARNs para usar en otros stacks

**Mappings:**
- Valores fijos basados en condiciones
- AMI IDs por región, por ejemplo`,
        code: `# Ejemplo básico de template
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Simple S3 Bucket'

Parameters:
  BucketName:
    Type: String
    Description: Nombre del bucket

Resources:
  MyS3Bucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Ref BucketName
      
Outputs:
  BucketArn:
    Value: !GetAtt MyS3Bucket.Arn`,
      },
      {
        title: "Cómo Funciona CloudFormation",
        content: `**Flujo de trabajo:**

1. **Escribir template**: Define recursos en YAML/JSON
2. **Crear stack**: Subir template a CloudFormation
3. **CloudFormation procesa**: Analiza dependencias
4. **Creación de recursos**: En orden correcto
5. **Stack activo**: Recursos listos para usar

**Actualizaciones:**
- Modificar template y actualizar stack
- CloudFormation calcula los cambios (Change Set)
- Aplica solo lo necesario

**Eliminación:**
- Eliminar stack = eliminar todos sus recursos
- Orden inverso de creación
- Limpieza completa garantizada

**Detección de drift:**
- CloudFormation detecta cambios manuales
- Compara estado actual vs template
- Ayuda a mantener consistencia`,
      },
      {
        title: "Funciones Intrínsecas",
        content: `CloudFormation incluye funciones para hacer templates dinámicos:

**!Ref**
- Referencia a un parámetro o recurso
\`\`\`yaml
BucketName: !Ref MyParameter
\`\`\`

**!GetAtt**
- Obtiene atributo de un recurso
\`\`\`yaml
BucketArn: !GetAtt MyBucket.Arn
\`\`\`

**!Sub**
- Sustitución de variables en strings
\`\`\`yaml
Name: !Sub '\${AWS::StackName}-bucket'
\`\`\`

**!Join**
- Une strings con un delimitador
\`\`\`yaml
Value: !Join ['-', [prefix, !Ref Env, suffix]]
\`\`\`

**!If**
- Condicionales
\`\`\`yaml
InstanceType: !If [IsProd, t3.large, t3.micro]
\`\`\`

**!ImportValue**
- Importa outputs de otros stacks
\`\`\`yaml
VpcId: !ImportValue NetworkStack-VpcId
\`\`\``,
      },
      {
        title: "Mejores Prácticas",
        content: `**Organización:**
- Un stack por servicio/aplicación
- Stacks anidados para componentes reutilizables
- Separar networking, compute, database

**Seguridad:**
- Usar parámetros NoEcho para secretos
- Mejor aún: integrar con Secrets Manager
- IAM roles específicos para CloudFormation

**Control de cambios:**
- Siempre revisar Change Sets antes de aplicar
- Usar rollback automático en caso de falla
- Habilitar termination protection en producción

**Mantenibilidad:**
- Usar YAML sobre JSON (más legible)
- Comentar secciones complejas
- Nombres descriptivos para recursos
- Versionado en Git

**Validación:**
\`\`\`bash
# Validar template antes de deploy
aws cloudformation validate-template \\
  --template-body file://template.yaml
\`\`\``,
        note: "Usa Change Sets para ver qué cambiará antes de aplicar actualizaciones en producción.",
      },
      {
        title: "CloudFormation vs Otras Herramientas",
        content: `**CloudFormation vs Terraform:**
| Aspecto | CloudFormation | Terraform |
|---------|---------------|-----------|
| Proveedor | Solo AWS | Multi-cloud |
| Lenguaje | YAML/JSON | HCL |
| Estado | Gestionado por AWS | Archivo local/remoto |
| Costo | Gratis | Open source (Enterprise pago) |
| Módulos | StackSets, Nested | Modules |

**CloudFormation vs CDK:**
- **CDK (Cloud Development Kit)**: Escribir infraestructura en código real (TypeScript, Python, Java)
- CDK genera templates de CloudFormation
- Mejor para desarrolladores que prefieren lenguajes de programación

**CloudFormation vs SAM:**
- **SAM (Serverless Application Model)**: Extensión de CloudFormation
- Simplifica definición de Lambda, API Gateway, DynamoDB
- Transforma a CloudFormation estándar

**Cuándo usar CloudFormation:**
- Todo-AWS es tu estrategia
- Quieres integración nativa completa
- Equipos familiarizados con YAML/JSON`,
      },
    ],
  },
  keyTakeaways: [
    "CloudFormation es IaC nativo de AWS usando templates YAML/JSON",
    "Stacks agrupan recursos que se gestionan como una unidad",
    "Los templates definen recursos, parámetros, outputs y mappings",
    "Change Sets muestran qué cambiará antes de aplicar actualizaciones",
    "Eliminar un stack elimina automáticamente todos sus recursos",
  ],
  relatedQuestions: ["q66", "q67"],
  tags: ["CloudFormation", "IaC", "templates", "stacks", "automatización"],
  readingTime: 11,
  lastUpdated: "2025-12-11",
};
