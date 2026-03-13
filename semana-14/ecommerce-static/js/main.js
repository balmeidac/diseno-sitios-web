/**
 * Lógica de interacción del sitio web
 * 
 * Este archivo contiene la lógica de JavaScript para las funcionalidades interactivas
 * del sitio web de comercio electrónico.
 */

// =============================================
// 1. INICIALIZACIÓN
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de componentes cuando el DOM esté completamente cargado
    initCart();
    initImageSliders();
    initFormValidations();
    initMobileMenu();
});

// =============================================
// 2. FUNCIONALIDAD DEL CARRITO
// =============================================
function initCart() {
    // Inicialización del carrito de compras
    // - Cargar ítems del localStorage
    // - Actualizar contador del carrito
    // - Configurar eventos para añadir/eliminar productos
}

function updateCartCounter() {
    // Actualizar el contador de ítems en el ícono del carrito
}

function addToCart(productId, quantity = 1) {
    // Añadir producto al carrito
    // - Validar stock
    // - Actualizar interfaz
    // - Guardar en localStorage
}

function removeFromCart(productId) {
    // Eliminar producto del carrito
    // - Actualizar interfaz
    // - Actualizar localStorage
}

// =============================================
// 3. SLIDERS Y GALERÍAS
// =============================================
function initImageSliders() {
    // Inicialización de sliders de productos
    // - Slider principal en la página de inicio
    // - Galerías de productos
}

// =============================================
// 4. VALIDACIÓN DE FORMULARIOS
// =============================================
function initFormValidations() {
    // Configuración de validaciones para:
    // - Formulario de contacto
    // - Formulario de registro
    // - Formulario de pago
}

function validateEmail(email) {
    // Validación de formato de email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// =============================================
// 5. MENÚ MÓVIL
// =============================================
function initMobileMenu() {
    // Toggle del menú móvil en pantallas pequeñas
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// =============================================
// 6. FUNCIONES DE AYUDA (HELPERS)
// =============================================
function formatPrice(price) {
    // Formatear precios con el símbolo de moneda
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

function debounce(func, wait) {
    // Función para limitar la frecuencia de ejecución
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// =============================================
// 7. MANEJO DE EVENTOS GLOBALES
// =============================================
// Ejemplo de evento de clic en botones "Añadir al carrito"
document.addEventListener('click', function(e) {
    if (e.target.closest('.add-to-cart-btn')) {
        const productId = e.target.closest('.add-to-cart-btn').dataset.productId;
        addToCart(productId);
    }
});

// =============================================
// 8. INICIALIZACIÓN DE COMPONENTES DE TERCEROS
// =============================================
// Ejemplo de inicialización de un plugin de galería
// document.addEventListener('DOMContentLoaded', function() {
//     if (typeof lightGallery !== 'undefined') {
//         lightGallery(document.getElementById('product-gallery'));
//     }
// });
