# Dashboard de Indicadores - Knowtech c.a

Este es un dashboard empresarial moderno y minimalista desarrollado para **Knowtech c.a**. La interfaz ha sido diseñada para ofrecer una experiencia de usuario fluida, limpia y profesional, centrada en la visualización de métricas clave (KPIs) y estadísticas interactivas.

![Dashboard Preview](https://github.com/user-attachments/assets/preview-placeholder) <!-- Reemplazar con imagen real si está disponible -->

## 🚀 Tecnologías Utilizadas

El proyecto está construido con un stack moderno enfocado en el rendimiento y la mantenibilidad:

- **Framework**: [Nuxt 3 / Nuxt 4](https://nuxt.com/) (Compatibilidad v4 activada).
- **Lógica**: [Vue 3](https://vuejs.org/) con script setup y Composition API.
- **Estilos**: Vanilla CSS con variables globales y CSS Scoped para una carga ultra rápida sin dependencias pesadas.
- **Iconografía**: Sistema de iconos SVG minimalistas personalizados.
- **Enrutamiento**: Nuxt Pages con transiciones suaves basadas en el estado.

## 📋 Características Principales

### 1. Sistema de Tarjetas KPI (Indicadores Clave)
- **Donaciones**: Tarjeta resaltada en color de marca con balance dinámico.
- **Metas Alcanzadas**: Visualización de porcentaje con icono personalizado.
- **Visitantes Únicos**: Contador con badge de tendencia positiva.
- **Total Acumulado**: Resumen financiero con indicadores de navegación.

### 2. Gráficos Interactivos
- **Estadísticas Mensuales**: Gráfico de barras dual (Ingresos vs Gastos) con tooltips inteligentes ("burbujitas") al pasar el ratón.
- **Gráfico de Visitantes**: Visualización circular creativa segmentada por categorías (Individual, Corporativo, Fundación) con barras de progreso de metas.

### 3. Navegación Inteligente
- **Sidebar Colapsable**: Panel lateral minimalista que optimiza el espacio de trabajo.
- **Knowtech Branding**: Integración total de la identidad visual de la empresa.
- **Header Dinámico**: Píldoras de información para la marca, buscador, notificaciones y perfil de usuario con menús desplegables.

### 4. Detalles Estéticos (UI/UX)
- **Paleta de Colores**: Azul corporativo suave (`#3b82f6`) y contenedores de alto contraste (`#dbeafe`).
- **Bordes Redondeados**: Estilo moderno con `border-radius: 24px` en todos los componentes principales.
- **Micro-interacciones**: Transiciones suaves y efectos hover refinados en botones y elementos de lista.

## 🛠️ Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

### Requisitos Previos
- Tener instalado [Node.js](https://nodejs.org/) (versión 18.x o superior recomendada).
- Gestor de paquetes `npm` (incluido con Node.js).

### Pasos
1. **Clonar el repositorio** (o descargar los archivos):
   ```bash
   git clone <url-del-repositorio>
   cd dasboard-indicadores
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```
   *El dashboard estará disponible en `http://localhost:3000`*

## 📦 Estructura del Proyecto

- `app/`: Directorio principal del código fuente (Configuración Nuxt 4).
  - `components/`: Componentes Vue reutilizables (KPIs, Gráficos, Sidebar, Header).
  - `pages/`: Vistas de la aplicación basadas en archivos (Dashboard y sub-páginas detalladas).
  - `assets/css/`: Estilos globales y variables de diseño (`main.css`).
- `public/`: Archivos estáticos como logos e imágenes.
- `nuxt.config.ts`: Configuración del framework y compatibilidad.

## 🚢 Despliegue y Producción

Para generar una versión optimizada para producción:

```bash
# Construir para producción
npm run build

# Previsualizar la build localmente
npm run preview
```

El proyecto también incluye una configuración de **GitHub Actions** para despliegue automático y un **Dockerfile** para contenedorización.

---
*Desarrollado con ❤️ para Knowtech c.a*
