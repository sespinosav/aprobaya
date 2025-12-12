import { Article } from "@/types";

export const amazonSagemaker: Article = {
  id: "d3-art-18",
  slug: "amazon-sagemaker",
  title: "Amazon SageMaker: Machine Learning en AWS",
  shortDescription:
    "Construye, entrena y despliega modelos de Machine Learning a escala con SageMaker.",
  domainId: "domain3",
  content: {
    introduction:
      "Amazon SageMaker es un servicio completamente administrado que permite a los desarrolladores y científicos de datos construir, entrenar y desplegar modelos de machine learning de manera rápida. Elimina el trabajo pesado de cada paso del proceso de ML.",
    sections: [
      {
        title: "¿Qué es Amazon SageMaker?",
        content: `SageMaker es una **plataforma end-to-end para Machine Learning** en AWS.

**El problema que resuelve:**
El ciclo de ML tradicional es complejo:
1. Preparar y limpiar datos
2. Elegir algoritmos
3. Configurar infraestructura para training
4. Entrenar y optimizar
5. Desplegar modelo
6. Monitorear y actualizar

**SageMaker simplifica todo esto:**
- Notebooks administrados (Jupyter)
- Algoritmos integrados y personalizados
- Training distribuido automático
- Deploy con un click
- Monitoreo de modelo

**Usuarios típicos:**
- Data Scientists
- ML Engineers
- Desarrolladores que integran ML`,
      },
      {
        title: "Componentes Principales",
        content: `**SageMaker Studio:**
- IDE completo para ML basado en web
- Notebooks, experimentos, pipelines
- Visual interface

**SageMaker Notebooks:**
- Jupyter notebooks administrados
- GPU disponible si se necesita
- Acceso a librerías ML (TensorFlow, PyTorch, etc.)

**Training:**
- Instancias optimizadas para training
- Training distribuido
- Spot instances para ahorro
- Algoritmos integrados o custom

**Inference/Hosting:**
- Real-time endpoints
- Serverless inference
- Batch transform
- Auto-scaling

**MLOps:**
- SageMaker Pipelines (CI/CD para ML)
- Model Registry
- Model Monitor
- Feature Store`,
      },
      {
        title: "Ciclo de Vida de ML en SageMaker",
        content: `**1. Preparación de Datos:**
\`\`\`
S3 (raw data)
     │
     ▼
SageMaker Processing
     │
     ▼
S3 (processed data)
\`\`\`

**2. Entrenamiento:**
\`\`\`
S3 (training data)
     │
     ▼
Training Job
├── Algoritmo (built-in o custom)
├── Hiperparámetros
└── Instancia(s) de training
     │
     ▼
S3 (model artifacts)
\`\`\`

**3. Despliegue:**
\`\`\`
S3 (model)
     │
     ▼
Create Endpoint Configuration
     │
     ▼
Create Endpoint
     │
     ▼
Predictions (real-time o batch)
\`\`\`

**Hiperparameter Tuning:**
- Prueba automática de combinaciones
- Encuentra mejores hiperparámetros
- Reduce tiempo de experimentación`,
      },
      {
        title: "Algoritmos y Frameworks",
        content: `**Algoritmos Integrados:**
- **XGBoost**: Clasificación y regresión
- **Linear Learner**: Regresión lineal
- **K-Means**: Clustering
- **Random Cut Forest**: Detección de anomalías
- **Image Classification**: Clasificación de imágenes
- **Seq2Seq**: Traducción, text summarization
- **BlazingText**: Clasificación de texto, word2vec

**Frameworks soportados:**
- TensorFlow
- PyTorch
- MXNet
- Scikit-learn
- Hugging Face
- Custom containers

**Bring Your Own:**
- Docker container con tu código
- Flexibilidad completa
- Integración con cualquier framework

**SageMaker JumpStart:**
- Modelos pre-entrenados listos para usar
- Fine-tuning con tus datos
- Ejemplo: Stable Diffusion, LLMs`,
        note: "JumpStart permite desplegar modelos de Hugging Face y otros con un click.",
      },
      {
        title: "SageMaker Canvas y AutoML",
        content: `**SageMaker Canvas:**
- ML sin escribir código
- Interfaz visual drag-and-drop
- Para analistas de negocio sin conocimiento de ML

**Flujo en Canvas:**
1. Importar datos (CSV, desde S3)
2. Seleccionar columna a predecir
3. Canvas entrena múltiples modelos automáticamente
4. Revisar métricas de precisión
5. Hacer predicciones

**Tipos de problemas soportados:**
- Predicción numérica (regresión)
- Clasificación (2 o más categorías)
- Series temporales (forecasting)

**SageMaker Autopilot:**
- AutoML para data scientists
- Genera notebooks explorables
- Transparencia en el proceso
- Más control que Canvas

**Ejemplo Canvas:**
\`\`\`
Dataset: Datos de clientes
Predecir: "churn" (sí/no)

Canvas:
1. Analiza datos
2. Prueba múltiples algoritmos
3. Selecciona el mejor
4. Listo para predicciones
\`\`\``,
      },
      {
        title: "Precios y Opciones",
        content: `**Modelo de precios:**
- Pago por uso (instancias, almacenamiento)
- Sin costos iniciales

**Componentes con costo:**
- **Notebooks**: Por hora de instancia
- **Training**: Por hora de instancia de training
- **Inference**: Por hora de endpoint activo
- **Storage**: Por GB en S3

**Optimización de costos:**
- Spot instances para training (hasta 90% ahorro)
- Serverless inference para baja latencia variable
- Multi-model endpoints
- Apagar notebooks cuando no se usan

**Precios aproximados:**
| Componente | Ejemplo | Precio/hora |
|------------|---------|-------------|
| Notebook | ml.t3.medium | $0.05 |
| Training | ml.m5.xlarge | $0.23 |
| Training GPU | ml.p3.2xlarge | $3.82 |
| Inference | ml.m5.large | $0.12 |

**SageMaker Studio Lab (gratis):**
- Jupyter notebooks gratis
- 12 horas de GPU/mes
- 16 horas de CPU/mes
- Sin cuenta AWS necesaria
- Ideal para aprender`,
        note: "SageMaker Studio Lab es completamente gratis y excelente para aprender ML sin costos.",
      },
    ],
  },
  keyTakeaways: [
    "SageMaker es plataforma end-to-end para ML: build, train, deploy",
    "Incluye algoritmos integrados y soporta TensorFlow, PyTorch, etc.",
    "SageMaker Canvas permite ML sin código para analistas de negocio",
    "JumpStart ofrece modelos pre-entrenados listos para usar",
    "Spot instances pueden reducir costos de training hasta 90%",
  ],
  relatedQuestions: ["q78"],
  tags: ["SageMaker", "machine learning", "IA", "training", "inferencia"],
  readingTime: 12,
  lastUpdated: "2025-12-11",
};
