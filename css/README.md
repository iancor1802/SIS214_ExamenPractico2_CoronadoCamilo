# Arquitectura de Hojas de Estilo CSS3 - Curriculum Vitae & Portafolio Web

Este directorio almacena la arquitectura **CSS3 modular y adaptable** desarrollada para la plataforma web profesional de **Ian Camilo Coronado Guachalla**, optimizada mediante la unificación de selectores y la eliminación estricta de redundancias para un rendimiento óptimo.

---

## 📂 Archivos y Módulos Implementados

| Archivo | Descripción / Responsabilidad Técnica |
| :--- | :--- |
| **`variables.css`** | **Tokens de diseño**: Custom Properties (`:root` y `[data-theme="light"]`) con la paleta de colores verde/turquesa (`var(--color-green2)`: `#44E0B1`), fondos oscuros y claros (`var(--color-card)`), sombras de cabecera (`var(--shadow-header)`), border-radius y variables de espaciado (`var(--space-md2)`). |
| **`base.css`** | **Reset & Tipografía Global**: Resets modernos con selectores universales, `box-sizing: border-box`, estilos de lectura fluida para etiquetas semánticas (`<mark>`, `<abbr>`, `<blockquote>`, `<cite>`, `<time>`, `<address>`), scrollbar personalizada y tipografía adaptativa mediante `clamp()`. |
| **`layout.css`** | **Estructura Responsiva (Mobile-First)**: Maquetación adaptativa mediante tres breakpoints progresivos (*Móvil*, *Tablet* de 768px a 1024px, y *Escritorio* de >1025px), diseño de la barra superior fija (`sticky`) con `backdrop-filter`, retículas flexibles y barras laterales flotantes (*sticky sidebar*). |
| **`components.css`** | **Componentes UI Estandarizados & Interactivos**: <br> • **Tarjetas y Retículas**: Estilos unificados y limpios para tarjetas de proyectos (`.project-card`), cursos (`.course-card`) y acordeones de habilidades técnicas (`.skills-accordion`) con efectos de elevación (*hover* y `.card-highlight`).<br> • **Tablas Avanzadas (`.styled-table`)**: Tablas responsivas con filas alternadas, efectos de resaltado y barras de progreso personalizadas (`<progress>`).<br> • **Multimedia y Perfil**: Contenedores responsivos para imágenes (`.responsive-img`), vídeos (`.responsive-video`), reproductores de audio (`.styled-audio`) y diseño de la sección de perfil profesional con avatar circular.<br> • **Formularios, Validación y Buscador**: Estilos centralizados y unificados para campos de entrada, áreas de texto, selectores y barra de búsqueda predictiva con clases dinámicas de validación en tiempo real (`.is-valid`, `.is-invalid`), además de banners de éxito y menú hamburguesa accesible con transformación en cruz (*X*).<br> • **Modales de Diálogo**: Ventana flotante nativa (`<dialog>`) con halo resplandeciente turquesa y fondo difuminado (`backdrop-filter`). |
| **`animations.css`** | **Keyframes & Transiciones Limpias**: Animaciones `@keyframes` personalizadas unificadas: <br> • `fadeIn`: Aparición suave y fluida con curvas de Bézier personalizadas.<br> • `fadeInDown` / `.animate-header`: Entrada desplazada para el encabezado principal.<br> • `modalPop`: Apertura elástica y escalada para diálogos.<br> • `pulseGlow` / `.badge-pulse`: Pulso de resplandor turquesa para estados activos.<br> • `themeShimmer` y `cardGlow`: Efectos de resplandor y destello para elementos destacados. |
| **`styles.css`** | **Punto de Entrada Unificado**: Archivo maestro que importa de forma ordenada la totalidad de las hojas de estilo modulares mediante sentencias `@import`. |

---

## 🎨 Paleta de Colores & Tokens Principales

- **Color de Acento Turquesa**: `#44E0B1` (`var(--color-green2)`)
- **Fondo de Tarjetas/Superficie**: `var(--color-card)`
- **Resplandor de Pulso / Halo**: `rgba(68, 224, 177, 0.2)` a `0.3`
- **Modo Oscuro / Claro**: Gestionado dinámicamente mediante el atributo `data-theme` en el elemento raíz `<html>` con persistencia mediante `localStorage` y serialización JSON.