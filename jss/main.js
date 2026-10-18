// ==========================================================================
// SCRIPT PRINCIPAL UNIFICADO Y OPTIMIZADO (MAIN.JS)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. CONMUTADOR DE TEMA (DARK / LIGHT MODE) CON JSON Y PERSISTENCIA
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');

    const savedThemeJson = localStorage.getItem('theme');
    if (savedThemeJson) {
        try {
            const savedTheme = JSON.parse(savedThemeJson);
            if (savedTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
                if (themeIcon) themeIcon.textContent = '☀️';
                if (themeText) themeText.textContent = 'Modo Claro';
            } else if (savedTheme === 'light') {
                document.documentElement.setAttribute('data-theme', 'light');
                if (themeIcon) themeIcon.textContent = '🌙';
                if (themeText) themeText.textContent = 'Modo Oscuro';
            }
        } catch (e) {
            console.error('Error al parsear el tema de localStorage', e);
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', JSON.stringify('light'));
                if (themeIcon) themeIcon.textContent = '🌙';
                if (themeText) themeText.textContent = 'Modo Oscuro';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', JSON.stringify('dark'));
                if (themeIcon) themeIcon.textContent = '☀️';
                if (themeText) themeText.textContent = 'Modo Claro';
            }
        });
    }

    // ==========================================================================
    // 2. EFECTOS HOVER UNIFICADOS PARA TARJETAS Y CONTENEDORES
    // (Elimina la repetición en Perfil, Formación, Experiencia, Proyectos, Portafolio y Contacto)
    // ==========================================================================
    const interactiveCards = document.querySelectorAll('.project-card, .contact-form');
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', () => card.classList.add('card-highlight'));
        card.addEventListener('mouseleave', () => card.classList.remove('card-highlight'));
    });

    // ==========================================================================
    // 3. INTERACTIVIDAD PARA FILAS DE LA TABLA DE IDIOMAS
    // ==========================================================================
    const languageRows = document.querySelectorAll('.styled-table tbody tr');
    languageRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'scale(1.01)';
            row.style.transition = 'transform 0.2s ease, background-color 0.2s ease';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'scale(1)';
        });
    });

    // ==========================================================================
    // 4. INTERACTIVIDAD PARA TARJETAS DE CURSOS
    // ==========================================================================
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => card.style.borderColor = 'var(--color-green3)');
        card.addEventListener('mouseleave', () => card.style.borderColor = 'var(--color-green2)');
    });

    // ==========================================================================
    // 5. INTERACTIVIDAD Y ANIMACIONES PARA HABILIDADES TÉCNICAS
    // ==========================================================================
    const accordions = document.querySelectorAll('.skills-accordion');
    accordions.forEach(accordion => {
        accordion.addEventListener('toggle', () => {
            accordion.style.borderColor = accordion.open ? 'var(--color-green3)' : 'var(--color-green2)';
        });
    });

    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', () => badge.style.boxShadow = '0 0 10px rgba(68, 224, 177, 0.4)');
        badge.addEventListener('mouseleave', () => badge.style.boxShadow = 'none');
    });

    // ==========================================================================
    // 6. MENÚ HAMBURGUESA RESPONSIVO Y ACCESIBILIDAD (ARIA-EXPANDED)
    // ==========================================================================
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('primary-navigation');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
            hamburgerBtn.classList.toggle('is-active');
            navMenu.classList.toggle('is-open');
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 1024) {
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                    hamburgerBtn.classList.remove('is-active');
                    navMenu.classList.remove('is-open');
                }
            });
        });
    }

    // ==========================================================================
    // 7. BUSCADOR PREDICTIVO Y ENLACES RÁPIDOS (ES6+ & INMUTABILIDAD)
    // ==========================================================================
    const inputElement = document.getElementById('dynamic-search');

    if (inputElement) {
        const sitePages = [
            { title: "Perfil Profesional", url: "index.html", keywords: "perfil biografia inicio" },
            { title: "Formación Académica", url: "Formacion.html", keywords: "formacion educacion universidad colegio" },
            { title: "Experiencia Laboral", url: "Experiencia.html", keywords: "experiencia trabajo laboral" },
            { title: "Habilidades Técnicas", url: "Habilidades.html", keywords: "habilidades tech java python c++" },
            { title: "Cursos", url: "Cursos.html", keywords: "cursos certificados" },
            { title: "Idiomas", url: "Idiomas.html", keywords: "idiomas ingles ruso chino" },
            { title: "Proyectos Destacados", url: "Proyectos.html", keywords: "proyectos app software" },
            { title: "Portafolio Multimedia", url: "Portafolio.html", keywords: "portafolio multimedia" },
            { title: "Contactos", url: "Contactos.html", keywords: "contacto correo telefono" }
        ];

        const normalizeText = text => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results-dropdown';
        inputElement.parentNode.style.position = 'relative';
        inputElement.parentNode.appendChild(resultsContainer);

        inputElement.addEventListener('input', (e) => {
            const query = normalizeText(e.target.value);

            if (query === "") {
                resultsContainer.innerHTML = '';
                resultsContainer.style.display = 'none';
                return;
            }

            const matchedResults = sitePages
                .filter(page => normalizeText(page.title).includes(query) || normalizeText(page.keywords).includes(query))
                .map(page => `
                    <a href="${page.url}" class="search-result-item" style="display: block; padding: 10px 15px; color: var(--text-color); border-bottom: 1px solid var(--color-border); text-decoration: none;">
                        📍 Ir a: <strong>${page.title}</strong>
                    </a>
                `).join('');

            if (matchedResults) {
                resultsContainer.innerHTML = matchedResults;
                resultsContainer.style.display = 'block';
            } else {
                resultsContainer.innerHTML = `<div style="padding: 10px 15px; color: var(--text-color);">No se encontraron resultados</div>`;
                resultsContainer.style.display = 'block';
            }
        });

        document.addEventListener('click', (e) => {
            if (!inputElement.contains(e.target) && !resultsContainer.contains(e.target)) {
                resultsContainer.style.display = 'none';
            }
        });
    }

    // ==========================================================================
    // 8. FORMULARIO DE CONTACTO INTERACTIVO Y VALIDACIÓN NATIVA
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        const nameInput = document.getElementById('nombre');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('telefono');
        const subjectInput = document.getElementById('motivo');
        const messageInput = document.getElementById('mensaje');
        const confirmCheckbox = document.getElementById('confirmacion');
        const formFeedback = document.getElementById('form-feedback');

        const validateField = (input, errorElement) => {
            if (!input.validity.valid) {
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                
                if (input.validity.valueMissing) {
                    errorElement.textContent = 'Este campo es obligatorio.';
                } else if (input.validity.tooShort) {
                    errorElement.textContent = `Debe tener al menos ${input.minLength} caracteres.`;
                } else if (input.validity.typeMismatch || input.validity.patternMismatch) {
                    errorElement.textContent = 'Por favor, introduce un formato válido.';
                }
                errorElement.style.display = 'block';
                return false;
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
                errorElement.textContent = '';
                errorElement.style.display = 'none';
                return true;
            }
        };

        const validateCheckbox = (checkbox, errorElement) => {
            if (!checkbox.checked) {
                checkbox.classList.add('is-invalid');
                errorElement.textContent = 'Debes marcar esta casilla para continuar.';
                errorElement.style.display = 'block';
                return false;
            } else {
                checkbox.classList.remove('is-invalid');
                errorElement.textContent = '';
                errorElement.style.display = 'none';
                return true;
            }
        };

        if (nameInput) nameInput.addEventListener('input', () => validateField(nameInput, document.getElementById('nombre-error')));
        if (emailInput) emailInput.addEventListener('input', () => validateField(emailInput, document.getElementById('email-error')));
        if (phoneInput) phoneInput.addEventListener('input', () => validateField(phoneInput, document.getElementById('telefono-error')));
        if (subjectInput) subjectInput.addEventListener('input', () => validateField(subjectInput, document.getElementById('motivo-error')));
        if (messageInput) messageInput.addEventListener('input', () => validateField(messageInput, document.getElementById('mensaje-error')));
        if (confirmCheckbox) confirmCheckbox.addEventListener('change', () => validateCheckbox(confirmCheckbox, document.getElementById('confirmacion-error')));

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const isNameValid = validateField(nameInput, document.getElementById('nombre-error'));
            const isEmailValid = validateField(emailInput, document.getElementById('email-error'));
            const isPhoneValid = validateField(phoneInput, document.getElementById('telefono-error'));
            const isSubjectValid = validateField(subjectInput, document.getElementById('motivo-error'));
            const isMessageValid = validateField(messageInput, document.getElementById('mensaje-error'));
            const isConfirmValid = validateCheckbox(confirmCheckbox, document.getElementById('confirmacion-error'));

            if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid && isConfirmValid) {
                if (formFeedback) {
                    formFeedback.textContent = '¡Mensaje enviado con éxito! Gracias por ponerte en contacto.';
                    formFeedback.className = 'success-banner';
                    formFeedback.style.display = 'block';
                }

                contactForm.reset();
                [nameInput, emailInput, phoneInput, subjectInput, messageInput].forEach(input => {
                    input.classList.remove('is-valid');
                });
                if (confirmCheckbox) confirmCheckbox.classList.remove('is-valid');

                setTimeout(() => {
                    if (formFeedback) formFeedback.style.display = 'none';
                }, 5000);
            } else {
                if (formFeedback) {
                    formFeedback.textContent = 'Por favor, corrige los errores en el formulario antes de enviar.';
                    formFeedback.style.color = '#ff6b6b';
                    formFeedback.style.display = 'block';
                }
            }
        });
    }

    // ==========================================================================
    // 9. MÓDULO ASÍNCRONO E INTEGRACIÓN REST (GITHUB API, ASYNC/AWAIT & TRY...CATCH)
    // ==========================================================================
    const loadingState = document.getElementById('api-loading');
    const errorState = document.getElementById('api-error');
    const errorMessage = document.getElementById('error-message');
    const successState = document.getElementById('api-success');
    const reposList = document.getElementById('repos-list');

    if (loadingState && successState && errorState && reposList) {
        const fetchGitHubRepos = async () => {
            loadingState.style.display = 'block';
            errorState.style.display = 'none';
            successState.style.display = 'none';

            try {
                const response = await fetch('https://api.github.com/users/octocat/repos?per_page=4');

                if (!response.ok) {
                    let detalleHttpError = `Error HTTP: ${response.status} - ${response.statusText}`;
                    switch (response.status) {
                        case 400: detalleHttpError = '400 Bad Request: La solicitud enviada es incorrecta.'; break;
                        case 404: detalleHttpError = '404 Not Found: El recurso o perfil de la API no fue encontrado.'; break;
                        case 500: detalleHttpError = '500 Internal Server Error: Error interno en el servidor remoto.'; break;
                        default: detalleHttpError = `Error de red o estado no contemplado (${response.status}).`;
                    }
                    throw new Error(detalleHttpError);
                }

                const repositories = await response.json();
                reposList.innerHTML = '';

                repositories.map(repo => {
                    const cardItem = document.createElement('li');
                    cardItem.style.cssText = 'padding: 1.25rem; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--color-border); border-radius: var(--radius-sm); display: flex; flex-direction: column; justify-content: space-between; gap: 0.75rem;';
                    
                    cardItem.innerHTML = `
                        <div>
                            <span style="font-size: 0.8rem; padding: 0.2rem 0.5rem; background: rgba(68,224,177,0.1); color: var(--color-green2); border-radius: 4px; font-weight: 600;">${repo.language || 'Código Fuente'}</span>
                            <h4 style="margin: 0.5rem 0 0.25rem 0; font-size: 1.05rem;">
                                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" style="color: var(--color-green2); text-decoration: none;">
                                    📁 ${repo.name}
                                </a>
                            </h4>
                            <p style="margin: 0; font-size: 0.88rem; opacity: 0.85; line-height: 1.4;">
                                ${repo.description ? repo.description : 'Sin descripción detallada para este repositorio.'}
                            </p>
                        </div>
                    `;
                    reposList.appendChild(cardItem);
                });

                loadingState.style.display = 'none';
                successState.style.display = 'block';

            } catch (error) {
                console.error('Captura de error asíncrono:', error);
                loadingState.style.display = 'none';
                errorMessage.textContent = `❌ ${error.message}`;
                errorState.style.display = 'block';
            }
        };

        fetchGitHubRepos();
    }

});