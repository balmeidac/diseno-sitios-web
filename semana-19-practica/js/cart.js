// ===================================
// SISTEMA DE CARRITO DE COMPRAS
// Ecommerce Responsivo - Semana 19
// ===================================

// Estado del carrito
let cart = {
    items: [],
    total: 0,
    count: 0
};

// ===================================
// INICIALIZACIÓN
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    updateCartUI();
    initializeCartButtons();
    initializeCartModal();
});

// ===================================
// FUNCIONES PRINCIPALES
// ===================================

// Añadir producto al carrito
function addToCart(productId, productName, price, image) {
    // Verificar si el producto ya existe en el carrito
    const existingItem = cart.items.find(item => item.id === productId);
    
    if (existingItem) {
        // Si existe, incrementar cantidad
        existingItem.quantity += 1;
        showNotification('Producto añadido al carrito', 'success');
    } else {
        // Si no existe, añadir nuevo item
        const newItem = {
            id: productId,
            name: productName,
            price: price,
            image: image,
            quantity: 1
        };
        
        cart.items.push(newItem);
        showNotification('Producto añadido al carrito', 'success');
    }
    
    updateCart();
}

// Eliminar producto del carrito
function removeFromCart(productId) {
    cart.items = cart.items.filter(item => item.id !== productId);
    updateCart();
    showNotification('Producto eliminado del carrito', 'info');
}

// Actualizar cantidad de un producto
function updateQuantity(productId, change) {
    const item = cart.items.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

// Vaciar carrito completo
function clearCart() {
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        cart.items = [];
        updateCart();
        showNotification('Carrito vaciado', 'info');
    }
}

// ===================================
// ACTUALIZACIÓN DE UI
// ===================================

function updateCart() {
    calculateTotals();
    updateCartUI();
    saveCartToStorage();
}

function calculateTotals() {
    cart.count = cart.items.reduce((total, item) => total + item.quantity, 0);
    cart.total = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartUI() {
    // Actualizar contador del carrito
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.count;
        
        // Animación del contador
        cartCount.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Actualizar modal del carrito si está abierto
    updateCartModal();
}

// ===================================
// MODAL DEL CARRITO
// ===================================

function initializeCartModal() {
    // Crear modal del carrito
    const modalHTML = `
        <div id="cartModal" class="cart-modal">
            <div class="cart-modal-content">
                <div class="cart-header">
                    <h3>🛒 Mi Carrito</h3>
                    <button class="close-modal" onclick="closeCartModal()">&times;</button>
                </div>
                <div class="cart-body">
                    <div id="cartItems" class="cart-items"></div>
                    <div class="cart-summary">
                        <div class="cart-total">
                            <strong>Total: $<span id="cartTotal">0.00</span></strong>
                        </div>
                        <button class="btn-checkout" onclick="proceedToCheckout()">
                            Proceder al pago
                        </button>
                        <button class="btn-clear" onclick="clearCart()">
                            Vaciar carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Event listener para cerrar modal haciendo clic fuera
    document.getElementById('cartModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeCartModal();
        }
    });
}

function openCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.style.display = 'flex';
        updateCartModal();
    }
}

function closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function updateCartModal() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    
    if (!cartItemsContainer) return;
    
    if (cart.items.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <p>🛒 Tu carrito está vacío</p>
                <button class="btn-continue" onclick="closeCartModal()">
                    Seguir comprando
                </button>
            </div>
        `;
    } else {
        const itemsHTML = cart.items.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart('${item.id}')">
                    🗑️
                </button>
            </div>
        `).join('');
        
        cartItemsContainer.innerHTML = itemsHTML;
    }
    
    if (cartTotalElement) {
        cartTotalElement.textContent = cart.total.toFixed(2);
    }
}

// ===================================
// INICIALIZACIÓN DE BOTONES
// ===================================

function initializeCartButtons() {
    // Botones de añadir al carrito
    const addButtons = document.querySelectorAll('.btn-add-cart');
    
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.closest('.product');
            const productId = product.dataset.productId || generateProductId();
            const productName = product.querySelector('.product-title').textContent;
            const priceText = product.querySelector('.price-current').textContent;
            const price = parseFloat(priceText.replace('$', ''));
            const image = product.querySelector('.product-image img').src;
            
            // Añadir ID al producto si no tiene
            if (!product.dataset.productId) {
                product.dataset.productId = productId;
            }
            
            // Añadir al carrito
            addToCart(productId, productName, price, image);
            
            // Animación del botón
            this.textContent = '✓ Añadido';
            this.style.backgroundColor = '#10b981';
            
            setTimeout(() => {
                this.textContent = 'Añadir al carrito';
                this.style.backgroundColor = '';
            }, 1500);
        });
    });
    
    // Botón del carrito en el header
    const cartButton = document.querySelector('.btn-cart');
    if (cartButton) {
        cartButton.addEventListener('click', openCartModal);
    }
}

// ===================================
// SISTEMA DE NOTIFICACIONES
// ===================================

function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos inline para la notificación
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: type === 'success' ? '#10b981' : '#3b82f6',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: '1000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        fontSize: '14px',
        fontWeight: '500'
    });
    
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===================================
// ALMACENAMIENTO LOCAL
// ===================================

function saveCartToStorage() {
    localStorage.setItem('ecommerceCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('ecommerceCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (error) {
            console.error('Error loading cart from storage:', error);
            cart = { items: [], total: 0, count: 0 };
        }
    }
}

// ===================================
// FUNCIONES DE CHECKOUT
// ===================================

function proceedToCheckout() {
    if (cart.items.length === 0) {
        showNotification('Tu carrito está vacío', 'info');
        return;
    }
    
    // Simulación de checkout
    showNotification('Procesando pago...', 'info');
    
    setTimeout(() => {
        showNotification('¡Pedido realizado con éxito! 🎉', 'success');
        cart.items = [];
        updateCart();
        closeCartModal();
    }, 2000);
}

// ===================================
// UTILIDADES
// ===================================

function generateProductId() {
    return 'product_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Formatear precio
function formatPrice(price) {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

// ===================================
// EXPORTAR FUNCIONES GLOBALES
// ===================================

window.cart = {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openCartModal,
    closeCartModal,
    getTotal: () => cart.total,
    getCount: () => cart.count,
    getItems: () => cart.items
};
