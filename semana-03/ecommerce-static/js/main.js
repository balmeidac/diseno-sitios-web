/* ========================================
   MAIN.JS - Lógica del Ecommerce Estático
   ======================================== */

// Datos de productos
const products = [
    {
        id: 1,
        name: "Producto Premium 1",
        price: 99.99,
        description: "Descripción del producto premium 1",
        image: "img/products/prod1.jpg"
    },
    {
        id: 2,
        name: "Producto Premium 2",
        price: 149.99,
        description: "Descripción del producto premium 2",
        image: "img/products/prod2.jpg"
    },
    {
        id: 3,
        name: "Producto Premium 3",
        price: 199.99,
        description: "Descripción del producto premium 3",
        image: "img/products/prod3.jpg"
    }
];

// Carrito de compras
let cart = JSON.parse(localStorage.getItem('cart')) || [];

/* ========================================
   FUNCIONES DE CARRITO
   ======================================== */

/**
 * Agrega un producto al carrito
 * @param {number} productId - ID del producto
 * @param {number} quantity - Cantidad a agregar (default: 1)
 */
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        console.error(`Producto con ID ${productId} no encontrado`);
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        });
    }

    saveCart();
    updateCartDisplay();
    showNotification(`"${product.name}" agregado al carrito`, 'success');
}

/**
 * Elimina un producto del carrito
 * @param {number} productId - ID del producto a eliminar
 */
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
    showNotification('Producto removido del carrito', 'info');
}

/**
 * Actualiza la cantidad de un producto en el carrito
 * @param {number} productId - ID del producto
 * @param {number} newQuantity - Nueva cantidad
 */
function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartDisplay();
    }
}

/**
 * Vacía el carrito completamente
 */
function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
    showNotification('Carrito vaciado', 'info');
}

/**
 * Guarda el carrito en localStorage
 */
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

/**
 * Actualiza la visualización del carrito en la UI
 */
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

/**
 * Calcula el total del carrito
 * @returns {number} Total con impuestos y envío
 */
function calculateTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1; // 10% de impuestos
    const shipping = subtotal > 100 ? 0 : 10; // Envío gratis si > $100
    return subtotal + tax + shipping;
}

/**
 * Obtiene el desglose del total
 * @returns {object} Objeto con subtotal, tax y shipping
 */
function getTotalBreakdown() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const shipping = subtotal > 100 ? 0 : 10;
    return {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        shipping: shipping.toFixed(2),
        total: (subtotal + tax + shipping).toFixed(2)
    };
}

/* ========================================
   FUNCIONES DE UI
   ======================================== */

/**
 * Muestra una notificación temporal
 * @param {string} message - Mensaje a mostrar
 * @param {string} type - Tipo: 'success', 'error', 'info'
 * @param {number} duration - Duración en ms (default: 3000)
 */
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Mostrar la notificación con animación
    setTimeout(() => {
        notification.classList.add('notification--visible');
    }, 10);

    // Ocultar después del tiempo especificado
    setTimeout(() => {
        notification.classList.remove('notification--visible');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, duration);
}

/* ========================================
   FUNCIONES DE VALIDACIÓN
   ======================================== */

/**
 * Valida que un email sea válido
 * @param {string} email - Email a validar
 * @returns {boolean} True si es válido
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Valida que un formulario tenga campos requeridos
 * @param {HTMLFormElement} form - Elemento del formulario
 * @returns {boolean} True si todos los campos requeridos tienen valor
 */
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });

    return isValid;
}

/* ========================================
   INICIALIZACIÓN
   ======================================== */

// Ejecutar al cargar el documento
document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();

    // Event delegation para botones de agregar al carrito
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-add-to-cart')) {
            const productId = parseInt(e.target.dataset.productId);
            const quantity = parseInt(e.target.dataset.quantity) || 1;
            addToCart(productId, quantity);
        }
    });

    // Event delegation para botones de eliminar del carrito
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-remove-from-cart')) {
            const productId = parseInt(e.target.dataset.productId);
            removeFromCart(productId);
        }
    });

    // Validación de formularios al enviar
    const forms = document.querySelectorAll('form[data-validate]');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
                showNotification('Por favor completa todos los campos requeridos', 'error');
            }
        });
    });

    console.log('TiendaMax inicializado correctamente');
});

/* ========================================
   EXPORTAR FUNCIONES (para uso en módulos)
   ======================================== */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        calculateTotal,
        getTotalBreakdown,
        validateEmail,
        validateForm,
        showNotification
    };
}
