# Curriculum Vitae & Portafolio Web Profesional - Ian Camilo Coronado Guachalla

Bienvenido al repositorio oficial del **Curriculum Vitae y Portafolio Web Profesional** de **Ian Camilo Coronado Guachalla**, estudiante de Ingeniería de Sistemas en la Universidad Católica Boliviana "San Pablo" (UCB).

Este sitio web ha sido desarrollado como una plataforma web moderna, altamente interactiva y accesible, construida desde cero utilizando **HTML5 Semántico**, **CSS3 Modular con Sistema de Diseño Turquesa/Verde ("Deep Ocean & Neon Emerald")** y **JavaScript Vainilla (ES6+)**.

---

## 🌟 Características Destacadas del Sitio Web

1. **Header Interactivo y Animación de Entrada (`animate-header`)**:
   - Encabezado con animación de desplazamiento y aparición suave (*Fade In Down*).
   - Botón interactivo de cambio de tema en tiempo real.
   - Enlace directo de accesibilidad (`skip-link`) para saltar al contenido principal.

2. **Sistema de Tema Claro / Oscuro con Persistencia Local**:
   - Alternancia entre Modo Oscuro y Modo Claro guardando la preferencia del usuario mediante `localStorage` y `JSON`.

3. **Buscador Dinámico y Filtrado en Tiempo Real (ES6+ e Inmutabilidad)**:
   - Filtrado interactivo de elementos en respuesta a eventos del teclado.
   - Procesamiento mediante tuberías funcionales encadenando explícitamente métodos como `.filter()` combinados con `.map()` sobre colecciones de datos inmutables.

4. **Formulario de Contacto Interactivo y Validación en Tiempo Real**:
   - Captura e intercepción explícita del ciclo de vida del evento `submit` mediante `event.preventDefault()` para evitar recargas innecesarias.
   - Validación nativa de HTML5 con intercepciones mediante el evento `input`, mostrando mensajes visuales de éxito o error asociados a cada campo.

5. **Módulo Asíncrono e Integración REST (Fetch API & Async/Await)**:
   - Consumo asíncrono de la API REST externa de GitHub para consultar repositorios en tiempo real.
   - Encapsulamiento robusto en bloques `try...catch`.
   - Evaluación explícita de `response.ok` y gestión de códigos de estado HTTP (200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error).
   - Actualización dinámica transparente de los tres estados de la petición: **Cargando (Loading)**, **Éxito (Success)** y **Error (Error)**.

6. **Componentes UI Estandarizados & Accesibles**:
   - **Tablas Personalizadas**: Estilizadas sin bordes verticales innecesarios y con efecto *hover* suave.
   - **Acordeones Nativos (`<details>`)**: Desplegables con animaciones fluidas y diseño adaptado.
   - **Modales Flotantes (`<dialog>`)**: Ventanas emergentes nativas con fondo desenfocado (*backdrop blur*).

7. **Galería Multimedia e Interacciones**:
   - Visualización responsiva de fotografías, vídeos y reproductores de audio con efectos de elevación al pasar el cursor.

---

## 📁 Estructura del Proyecto

```text
.
├── index.html              # Perfil Profesional, Biografía y Buscador Dinámico
├── Formacion.html          # Formación Académica e Institutos
├── Experiencia.html        # Trayectoria y Experiencia Laboral
├── Habilidades.html        # Habilidades Técnicas y Competencias
├── Cursos.html             # Certificaciones y Cursos Realizados
├── Idiomas.html            # Nivel de Idiomas y Competencias Lingüísticas
├── Proyectos.html          # Proyectos Destacados y Consumo Asíncrono de GitHub API
├── Portafolio.html         # Galería Multimedia (Fotos, Vídeo, Audio)
├── Contactos.html          # Formulario de Contacto Directo con Validación Interactiva
├── README.md               # Documentación General del Proyecto
├── assets/
│   ├── audios/
│   │   └── audioproyecto.mpeg      # Audio de la presentación del proyecto en Java
│   ├── images/
│   │   ├── fotoperfil.jpg          # Fotografía utilizada en Formacion.html
│   │   ├── fotoperfil2.jpg         # Fotografía de perfil alternativa
│   │   └── imagenproyecto.jpg      # Imagen del proyecto en Java (Tienda Virtual)
│   └── videos/
│       └── videoproyecto.mp4       # Video demostrativo del proyecto en Java (Tienda Virtual)
├── css/
│   ├── styles.css          # Punto de entrada y unificación de estilos
│   ├── variables.css       # Paleta turquesa/verde, fuentes y tokens del sistema
│   ├── base.css            # Normalización CSS, tipografía y resets
│   ├── layout.css          # Estructura visual, grids y diseño responsivo
│   ├── components.css      # Tablas, formularios, estados de validación, dialogs y botones
│   └── animations.css      # Animaciones keyframes (fadeIn, header, pulse)
└── jss/
    └── main.js             # Lógica maestra: Modo oscuro, Buscador funcional, Validación de Formularios y Fetch API asíncrono
🎨 Paleta de Colores & Sistema de Diseño
Verde/Turquesa Principal (Neon Emerald): var(--color-green2) (#44E0B1)

Resplandor Hover / Focus: rgba(68, 224, 177, 0.15)

Superficies / Tarjetas: var(--color-card)

Tipografía y Textos: var(--text-color) (IBM Plex Serif, serif)

Bordes y Divisores: var(--color-border)

🚀 Instalación y Uso
Clona o descarga este repositorio en tu equipo local:

Bash
git clone [https://github.com/tu-usuario/mi-cv-web.git](https://github.com/tu-usuario/mi-cv-web.git)
Abre el archivo index.html en cualquier navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

Nota de ejecución: El proyecto no requiere compiladores, Node.js ni servidores web complejos. Funciona de forma totalmente fluida y local mediante el protocolo file:// o un servidor de desarrollo estático.