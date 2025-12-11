# 🎓 AprobaYa

<div align="center">

![AprobaYa Logo](https://img.shields.io/badge/AprobaYa-Certification%20Prep-6366F1?style=for-the-badge)

**Plataforma de preparación de exámenes de certificación**

[![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

[Demo en vivo](https://aprobaya.vercel.app) · [Reportar Bug](https://github.com/sespinosav/aprobaya/issues) · [Solicitar Feature](https://github.com/sespinosav/aprobaya/issues)

</div>

---

## ✨ Características

- 🎨 **Interfaz moderna y animada** - Diseño atractivo con animaciones fluidas usando Framer Motion
- 📚 **Módulo de teoría completo** - Todos los servicios y conceptos explicados de forma clara
- 🎯 **Simulador de exámenes realista** - Tres modos: Estudio, Examen real y Por dominio
- 💡 **Explicaciones detalladas** - Entiende por qué cada respuesta incorrecta no es válida
- 📊 **Seguimiento de progreso** - Estadísticas, rachas de estudio y logros
- 🌙 **Modo oscuro/claro** - Tema adaptable a tus preferencias
- 💾 **Guardado local** - Tu progreso se guarda automáticamente en el navegador
- 🌐 **Open Source** - Código abierto bajo licencia CC BY-NC-SA 4.0

## 🚀 Certificaciones Disponibles

### ☁️ AWS
- **AWS Cloud Practitioner (CLF-C02)** - ✅ Disponible
- AWS Solutions Architect Associate - 🔜 Próximamente
- AWS Developer Associate - 🔜 Próximamente

### 🔵 Azure (Próximamente)
- Azure Fundamentals (AZ-900)
- Azure Administrator (AZ-104)

### 🔴 GCP (Próximamente)
- Cloud Digital Leader
- Associate Cloud Engineer

## 🛠️ Tecnologías

| Tecnología | Uso |
|------------|-----|
| [Next.js 14+](https://nextjs.org/) | Framework React con App Router |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos utilitarios |
| [Framer Motion](https://www.framer.com/motion/) | Animaciones |
| [Radix UI](https://www.radix-ui.com/) | Componentes accesibles |
| [Recharts](https://recharts.org/) | Gráficos interactivos |
| [Lucide React](https://lucide.dev/) | Iconos |

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Pasos

1. **Clona el repositorio**
```bash
git clone https://github.com/sespinosav/aprobaya.git
cd aprobaya
```

2. **Instala las dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecuta el servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. **Abre tu navegador**

Visita [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
aprobaya/
├── app/                          # App Router (Next.js 14+)
│   ├── page.tsx                  # Landing page
│   ├── layout.tsx                # Layout principal
│   ├── globals.css               # Estilos globales
│   └── certifications/
│       └── [id]/
│           ├── page.tsx          # Detalle de certificación
│           ├── theory/
│           │   └── page.tsx      # Módulo de teoría
│           ├── simulator/
│           │   └── page.tsx      # Simulador de exámenes
│           └── progress/
│               └── page.tsx      # Dashboard de progreso
├── components/
│   └── ui/                       # Componentes UI reutilizables
├── data/
│   └── certifications/
│       └── aws-clf-c02/          # Datos de AWS Cloud Practitioner
│           ├── info.ts           # Metadatos de la certificación
│           ├── domains.ts        # Dominios y temas
│           ├── services.ts       # Catálogo de servicios AWS
│           └── questions/        # Preguntas de práctica
├── lib/
│   ├── storage.ts                # Persistencia en localStorage
│   └── utils.ts                  # Funciones utilitarias
├── types/
│   └── index.ts                  # Interfaces TypeScript
└── public/                       # Archivos estáticos
```

## 🎮 Cómo usar

### 1. Módulo de Teoría
- Navega por los dominios del examen
- Estudia cada tema con puntos clave
- Explora el catálogo de servicios AWS
- Marca los temas como completados

### 2. Simulador de Exámenes

| Modo | Descripción |
|------|-------------|
| 📖 Estudio | Respuestas y explicaciones inmediatas |
| 📝 Examen | Simula el examen real con temporizador |
| 🎯 Por Dominio | Practica un dominio específico |

### 3. Seguimiento de Progreso
- Visualiza tu historial de exámenes
- Analiza tu rendimiento por dominio
- Mantén tu racha de estudio
- Desbloquea logros

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Hay varias formas de ayudar:

### Añadir preguntas
1. Ve a `data/certifications/aws-clf-c02/questions/`
2. Añade preguntas siguiendo el formato existente
3. Incluye explicaciones detalladas de por qué cada opción incorrecta no es válida

### Añadir servicios
1. Edita `data/certifications/aws-clf-c02/services.ts`
2. Sigue la estructura `AWSService`

### Añadir certificaciones
1. Crea una nueva carpeta en `data/certifications/`
2. Sigue la estructura de `aws-clf-c02`

### Pasos para contribuir

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Formato de Preguntas

```typescript
{
  id: "unique-id",
  text: "¿Cuál es el texto de la pregunta?",
  options: [
    { id: "a", text: "Opción A" },
    { id: "b", text: "Opción B" },
    { id: "c", text: "Opción C" },
    { id: "d", text: "Opción D" },
  ],
  correctAnswer: "a",
  explanation: {
    main: "Explicación principal de por qué la respuesta correcta es A",
    whyOthersWrong: {
      b: "Por qué B no es correcta",
      c: "Por qué C no es correcta",
      d: "Por qué D no es correcta",
    },
  },
  domain: "domain-id",
  difficulty: "easy" | "medium" | "hard",
  tags: ["tag1", "tag2"],
}
```

## 📊 Roadmap

- [x] Landing page
- [x] AWS CLF-C02 - Datos básicos
- [x] Módulo de teoría
- [x] Simulador de exámenes
- [x] Dashboard de progreso
- [ ] Más preguntas de práctica (65+)
- [ ] Modo oscuro
- [ ] PWA / Offline support
- [ ] Flashcards
- [ ] Azure AZ-900
- [ ] GCP Cloud Digital Leader
- [ ] API para sincronización en la nube
- [ ] Modo multijugador / competición

## 📜 Licencia

Distribuido bajo la licencia **Creative Commons BY-NC-SA 4.0**. 

- ✅ Puedes usar, modificar y compartir
- ✅ Puedes contribuir con mejoras
- ❌ NO puedes usarlo con fines comerciales
- ✅ Debes dar crédito y usar la misma licencia

Ver `LICENSE` para más información.

## 🙏 Agradecimientos

- [AWS](https://aws.amazon.com/) por la documentación oficial
- [Next.js](https://nextjs.org/) por el increíble framework
- [Vercel](https://vercel.com/) por el hosting
- Todos los contribuidores que hacen este proyecto posible

---

<div align="center">

Hecho con ❤️ para la comunidad de certificaciones cloud

[⬆ Volver arriba](#-aprobaya)

</div>
