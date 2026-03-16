// ===================================
// SISTEMA DE CONTACTO Y FORMULARIOS
// Ecommerce Responsivo - Semana 19
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeContactForm();
    initializeMapActions();
});

// ===================================
// INICIALIZACIÓN DEL FORMULARIO
// ===================================

function initializeContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        
        // Validación en tiempo real
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearFieldError(input));
        });
    }
}

// ===================================
// MANEJO DEL ENVÍO DEL FORMULARIO
// ===================================

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('.btn-submit');
    
    // Validar todos los campos
    if (!validateForm(form)) {
        showNotification('Por favor, completa todos los campos obligatorios', 'error');
        return;
    }
    
    // Mostrar estado de carga
    setSubmitButtonLoading(submitButton, true);
    form.classList.add('sending');
    
    // Simular envío del formulario
    try {
        await simulateFormSubmission();
        
        // Éxito
        showNotification('¡Mensaje enviado con éxito! Te responderemos pronto.', 'success');
        form.classList.add('success');
        form.reset();
        clearAllFieldErrors(form);
        
        // Resetear estado después de 3 segundos
        setTimeout(() => {
            form.classList.remove('success', 'sending');
        }, 3000);
        
    } catch (error) {
        showNotification('Error al enviar el mensaje. Inténtalo nuevamente.', 'error');
        console.error('Form submission error:', error);
    } finally {
        setSubmitButtonLoading(submitButton, false);
    }
}

// ===================================
// VALIDACIÓN DE CAMPOS
// ===================================

function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const formGroup = field.closest('.form-group');
    let isValid = true;
    
    // Limpiar estado anterior
    formGroup.classList.remove('error', 'success');
    
    // Validación según tipo de campo
    switch (field.type) {
        case 'email':
            isValid = validateEmail(field.value);
            break;
        case 'tel':
            isValid = validatePhone(field.value);
            break;
        case 'select-one':
            isValid = validateSelect(field);
            break;
        default:
            isValid = validateRequired(field.value);
    }
    
    // Aplicar estado visual
    if (!isValid) {
        formGroup.classList.add('error');
    } else {
        formGroup.classList.add('success');
    }
    
    return isValid;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length > 0;
}

function validatePhone(phone) {
    // Si está vacío, es válido (es opcional)
    if (!phone.trim()) return true;
    
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 7;
}

function validateSelect(select) {
    return select.value !== '' && select.value !== null;
}

function validateRequired(value) {
    return value.trim().length > 0;
}

// ===================================
// LIMPIEZA DE ERRORES
// ===================================

function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    formGroup.classList.remove('error');
}

function clearAllFieldErrors(form) {
    const formGroups = form.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.classList.remove('error', 'success');
    });
}

// ===================================
// ESTADO DEL BOTÓN DE ENVÍO
// ===================================

function setSubmitButtonLoading(button, isLoading) {
    if (isLoading) {
        button.classList.add('loading');
        button.disabled = true;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

// ===================================
// SIMULACIÓN DE ENVÍO
// ===================================

function simulateFormSubmission() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simular 90% de éxito
            if (Math.random() > 0.1) {
                resolve();
            } else {
                reject(new Error('Error de simulación'));
            }
        }, 2000);
    });
}

// ===================================
// FUNCIONES DEL MAPA
// ===================================

function initializeMapActions() {
    // Los botones del mapa se manejan con onclick en el HTML
}

function openDirections() {
    // Coordenadas de ejemplo (Quito, Ecuador)
    const latitude = -0.1833;
    const longitude = -78.4876;
    
    // Abrir en Google Maps
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(mapsUrl, '_blank');
    
    showNotification('Abriendo Google Maps para obtener direcciones...', 'info');
}

function saveLocation() {
    // Guardar en favoritos del navegador
    const locationData = {
        name: 'Tienda Online - Matriz',
        address: 'Av. Amazonas N25-34, Quito, Ecuador',
        latitude: -0.1833,
        longitude: -78.4876
    };
    
    // Intentar guardar en localStorage
    try {
        localStorage.setItem('favoriteLocation', JSON.stringify(locationData));
        showNotification('Ubicación guardada en tus favoritos', 'success');
    } catch (error) {
        showNotification('No se pudo guardar la ubicación', 'error');
    }
}

// ===================================
// SISTEMA DE NOTIFICACIONES
// ===================================

function showNotification(message, type = 'info') {
    // Eliminar notificaciones existentes
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Crear nueva notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos inline
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: getNotificationColor(type),
        color: 'white',
        padding: '12px 20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: '2000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        fontSize: '14px',
        fontWeight: '500',
        maxWidth: '300px'
    });
    
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-eliminación
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

function getNotificationColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    return colors[type] || colors.info;
}

// ===================================
// UTILIDADES DEL FORMULARIO
// ===================================

// Formatear teléfono mientras se escribe
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Formato internacional
            if (value.length > 0 && !value.startsWith('+')) {
                value = '+' + value;
            }
            
            // Limitar longitud
            if (value.length > 15) {
                value = value.substring(0, 15);
            }
            
            e.target.value = value;
        });
    }
});

// Auto-resize del textarea
document.addEventListener('DOMContentLoaded', function() {
    const messageTextarea = document.getElementById('message');
    
    if (messageTextarea) {
        messageTextarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 300) + 'px';
        });
    }
});

// Contador de caracteres para el mensaje
document.addEventListener('DOMContentLoaded', function() {
    const messageTextarea = document.getElementById('message');
    
    if (messageTextarea) {
        const counter = document.createElement('div');
        counter.className = 'character-counter';
        counter.style.cssText = `
            text-align: right;
            font-size: 0.875rem;
            color: var(--text-light);
            margin-top: 0.5rem;
        `;
        
        messageTextarea.parentNode.appendChild(counter);
        
        messageTextarea.addEventListener('input', function() {
            const maxLength = 500;
            const currentLength = this.value.length;
            const remaining = maxLength - currentLength;
            
            counter.textContent = `${currentLength}/${maxLength} caracteres`;
            
            if (remaining < 50) {
                counter.style.color = 'var(--accent-color)';
            }
            
            if (remaining < 10) {
                counter.style.color = 'var(--danger-color)';
            }
            
            if (remaining <= 0) {
                this.value = this.value.substring(0, maxLength);
                counter.textContent = `${maxLength}/${maxLength} caracteres`;
            }
        });
    }
});

// ===================================
// ACCESIBILIDAD Y TECLADO
// ===================================

document.addEventListener('keydown', function(e) {
    // Escape para cerrar notificaciones
    if (e.key === 'Escape') {
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        });
    }
});

// Focus management para formularios
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        // Focus en el primer campo al cargar
        const firstInput = form.querySelector('input:not([type="checkbox"])');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
        
        // Navegación con Tab entre campos
        form.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                const inputs = Array.from(form.querySelectorAll('input, select, textarea, button'));
                const currentIndex = inputs.indexOf(e.target);
                const nextIndex = currentIndex + 1;
                
                if (nextIndex < inputs.length) {
                    inputs[nextIndex].focus();
                }
            }
        });
    }
});

// ===================================
// EXPORTAR FUNCIONES GLOBALES
// ===================================

window.contactForm = {
    validateField,
    validateForm,
    clearFieldError,
    showNotification
};

window.mapActions = {
    openDirections,
    saveLocation
};
