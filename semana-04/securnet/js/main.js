// main.js - Script principal para la landing page de SecurNet

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto de cambio de header al hacer scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(13, 13, 13, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.background = 'rgba(13, 13, 13, 0.9)';
            header.style.boxShadow = 'none';
        }
    });

    // Animación de elementos al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .audit-text, .audit-form, .about-text, .about-image, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar al cargar la página

    // Validación de formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === '' || email === '' || message === '') {
                alert('Por favor, completa todos los campos requeridos.');
                return;
            }
            
            // Aquí iría el código para enviar el formulario
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }

    // Validación del formulario de auditoría
    const auditForm = document.getElementById('auditForm');
    if (auditForm) {
        auditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('service').value;
            
            if (name === '' || email === '' || service === '') {
                alert('Por favor, completa todos los campos requeridos.');
                return;
            }
            
            // Validación básica de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }
            
            // Aquí iría el código para enviar el formulario
            alert('¡Gracias por tu solicitud! Nos pondremos en contacto contigo para programar tu auditoría.');
            auditForm.reset();
        });
    }

    // Contador animado en la sección de estadísticas
    const stats = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats');
    let animated = false;

    const animateStats = () => {
        if (!statsSection) return;
        
        const statsPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (statsPosition < screenPosition && !animated) {
            stats.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target') || stat.textContent);
                const increment = target / 100;
                let current = 0;
                
                const updateNumber = () => {
                    if (current < target) {
                        current += increment;
                        stat.textContent = current.toFixed(current % 1 !== 0 ? 1 : 0);
                        requestAnimationFrame(updateNumber);
                    } else {
                        stat.textContent = target;
                    }
                };
                
                updateNumber();
            });
            
            animated = true;
        }
    };

    window.addEventListener('scroll', animateStats);
    animateStats(); // Ejecutar al cargar la página si la sección está visible
});
