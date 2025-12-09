/* ========================================
   CART.JS - Lógica específica de la página de carrito
   ======================================== */

/**
 * Renderiza los items del carrito en la tabla
 */
function renderCartItems() {
    const cartItemsBody = document.getElementById('cart-items-tbody');
    const emptyMessage = document.getElementById('empty-cart-message');

    if (!cartItemsBody) return;

    // Limpiar tabla
    cartItemsBody.innerHTML = '';

    if (cart.length === 0) {
        if (emptyMessage) {
            emptyMessage.style.display = 'block';
        }
        return;
    }

    if (emptyMessage) {
        emptyMessage.style.display = 'none';
    }

    // Crear filas para cada item del carrito
    cart.forEach(item => {
        const row = document.createElement('tr');
        const subtotal = (item.price * item.quantity).toFixed(2);

        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <input type="number" class="quantity-input" value="${item.quantity}" 
                       min="1" data-product-id="${item.id}" style="width: 60px;">
            </td>
            <td>$${subtotal}</td>
            <td>
                <button class="btn-remove-from-cart" data-product-id="${item.id}" 
                        style="padding: 0.5rem 1rem; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Eliminar
                </button>
            </td>
        `;

        cartItemsBody.appendChild(row);
    });

    // Agregar listeners a inputs de cantidad
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const productId = parseInt(this.dataset.productId);
            const newQuantity = parseInt(this.value);
            updateCartQuantity(productId, newQuantity);
        });
    });

    updateCartSummary();
}

/**
 * Actualiza el resumen de totales del carrito
 */
function updateCartSummary() {
    const breakdown = getTotalBreakdown();

    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');

    if (subtotalEl) subtotalEl.textContent = `$${breakdown.subtotal}`;
    if (taxEl) taxEl.textContent = `$${breakdown.tax}`;
    if (shippingEl) shippingEl.textContent = `$${breakdown.shipping}`;
    if (totalEl) totalEl.textContent = `$${breakdown.total}`;
}

/**
 * Maneja el evento del botón "Proceder al Pago"
 */
function handleCheckout() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío', 'error');
        return;
    }

    // Simular proceso de pago
    const totalAmount = calculateTotal().toFixed(2);
    showNotification(`Procesando pago de $${totalAmount}...`, 'info', 2000);

    // Simular un retraso y luego vaciar el carrito
    setTimeout(() => {
        clearCart();
        showNotification('¡Pago completado! Gracias por tu compra.', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 2000);
}

/**
 * Inicializa la página de carrito
 */
function initCartPage() {
    // Renderizar items del carrito
    renderCartItems();

    // Agregar listeners a botones de pago y limpiar
    const checkoutBtn = document.querySelector('.cart-summary__button--checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }

    const clearBtn = document.getElementById('clear-cart-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
                clearCart();
                renderCartItems();
            }
        });
    }

    console.log('Página de carrito inicializada');
}

// Ejecutar al cargar el documento si estamos en la página de carrito
if (document.querySelector('.cart-section')) {
    document.addEventListener('DOMContentLoaded', initCartPage);
}
