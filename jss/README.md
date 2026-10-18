# Directorio JavaScript (jss) - Portafolio Web Profesional

Este directorio contiene la lógica frontend en **JavaScript Vainilla (ES6+)** para dar soporte a la interactividad avanzada, accesibilidad web, conmutación de temas con persistencia local, filtrado predictivo, validación interactiva de formularios y consumo asíncrono de APIs REST en el sitio del **Curriculum Vitae y Portafolio Web** de **Ian Camilo Coronado Guachalla**.

---

## 📄 Archivos Implementados

### `jss/main.js` (Script Principal)
Script de integración general incluido en las páginas del proyecto. Controla la lógica de conmutación de temas, animaciones de componentes, menú hamburguesa responsivo, buscador predictivo, validación de formularios y consumo asíncrono de datos:

- **1. Conmutador de Tema (Dark / Light Mode) con JSON y Persistencia**:
  - **Restauración de Estado (`localStorage` y `JSON.parse`)**: Al cargar la página, recupera el valor guardado de la clave `'theme'` y lo deserializa de forma segura mediante un bloque `try...catch`. Aplica el atributo `data-theme="dark"` o `data-theme="light"` sobre el elemento raíz `<html>` y actualiza los iconos (`🌙` / `☀️`) y etiquetas de texto correspondientes.
  - **Manejador de Eventos (`addEventListener`)**: Escucha clics sobre el botón `#theme-toggle`, invierte el tema activo, actualiza el DOM en tiempo real y serializa la nueva preferencia mediante `JSON.stringify()` para garantizar la persistencia entre sesiones y recargas de página.

- **2. Interactividad UI para Tarjetas, Tablas y Componentes**:
  - **Efectos de Realce (`mouseenter` / `mouseleave`)**: Añade y remueve de forma dinámica clases de realce (`card-highlight`) y efectos visuales de elevación, escala (`scale(1.01)`) en filas de tablas, y cambios dinámicos en los bordes de tarjetas de proyectos, cursos, experiencia y formación.
  - **Acordeones de Habilidades**: Detecta eventos de apertura y cierre (`toggle`) en elementos `<details>` para actualizar dinámicamente los estilos de borde y sombras luminosas en las insignias (`badges`).

- **3. Menú Hamburguesa Responsivo y Accesibilidad (ARIA)**:
  - **Gestión de Accesibilidad**: Modifica dinámicamente el atributo de estado `aria-expanded` entre `true` y `false` en el botón `#hamburger-btn`.
  - **Control de Visibilidad**: Alterna las clases `is-active` e `is-open` para desplegar el menú de navegación y asegura su cierre automático al hacer clic en cualquier enlace en dispositivos móviles o tablets.

- **4. Buscador Predictivo y Enlaces Rápidos (ES6+ & Inmutabilidad)**:
  - **Estructura Inmutable**: Define un arreglo de páginas con títulos y palabras clave de referencia.
  - **Normalización y Tuberías Funcionales**: Utiliza expresiones regulares combinadas con métodos avanzados de ES6 (`.filter()` y `.map()`) para procesar texto sin mutar los datos originales, eliminando acentos mediante normalización Unicode (`"NFD"`).
  - **Despliegue Dinámico**: Genera un contenedor flotante accesible en tiempo real con enlaces directos a las secciones del sitio en respuesta al evento `input`.

- **5. Formulario de Contacto Interactivo y Validación en Tiempo Real**:
  - **Intercepción del Ciclo de Vida (`submit`)**: Captura el evento de envío y aplica explícitamente `event.preventDefault()` para evitar recargas predeterminadas de la página.
  - **Validación Nativa de HTML5**: Verifica las propiedades de validez (`validity.valid`, `valueMissing`, `tooShort`, etc.) mediante eventos `input` y `change`.
  - **Retroalimentación Visual**: Muestra mensajes de error personalizados, alterna clases dinámicas de éxito (`is-valid`) o error (`is-invalid`) en los campos, y gestiona un banner temporal de confirmación tras un envío exitoso.

- **6. Módulo Asíncrono e Integración REST (Fetch API, Async/Await & Try...Catch)**:
  - **Consumo Asistido de API Externa**: Realiza peticiones asíncronas utilizando `Fetch API` y la sintaxis moderna `async/await` para consultar repositorios públicos de la API de GitHub en tiempo real.
  - **Control Robusto de Excepciones**: Encapsula la lógica de red de manera segura dentro de bloques `try...catch`.
  - **Validación Estricta de Códigos HTTP**: Evalúa la propiedad `response.ok` y maneja de manera explícita códigos de error específicos (**400 Bad Request**, **404 Not Found**, **500 Internal Server Error**), lanzando excepciones descriptivas personalizadas.
  - **Gestión Transparente de los Tres Estados**: Controla dinámicamente la interfaz para reflejar de forma fluida el ciclo completo de la petición:
    1. *Cargando (Loading)*: Muestra indicadores visuales de espera.
    2. *Éxito (Success)*: Mapea y renderiza las tarjetas de repositorios mediante tuberías funcionales.
    3. *Error (Error)*: Captura cualquier fallo de red o estado HTTP anómalo y muestra un banner de advertencia estilizado.

---

## 🛠️ Buenas Prácticas Aplicadas
- **Cero Dependencias**: Desarrollo 100% en JavaScript Vainilla moderno (ES6+), sin requerir librerías externas ni frameworks pesados.
- **Persistencia Segura**: Uso coordinado de `localStorage` y serialización JSON (`JSON.stringify()` / `JSON.parse()`) para recordar las preferencias del usuario.
- **Programación Funcional e Inmutabilidad**: Aplicación de tuberías funcionales (`.filter()`, `.map()`) en el procesamiento de colecciones de datos.
- **Robustez y Resiliencia**: Manejo estricto de errores asíncronos mediante `try...catch` y validación de estados HTTP (`response.ok`).
- **Accesibilidad y Atributos de Estado**: Manipulación directa de atributos ARIA (`aria-expanded`) y clases de control para garantizar una experiencia inclusiva y responsiva.