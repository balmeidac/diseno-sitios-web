// Variables globales
let cart = [];
window.cart = cart; // Hacer accesible globalmente

// Clase Producto
class Product {
    constructor(id, name, price, image, description = '') {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.quantity = 1;
    }
}

// Inicialización del carrito desde localStorage
function initCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        // Reconstruir los objetos Product
        cart = cart.map(item => {
            const product = new Product(
                item.id,
                item.name,
                item.price,
                item.image,
                item.description
            );
            product.quantity = item.quantity;
            return product;
        });
    }
    updateCartCount();
    return cart;
}

// Guardar carrito en localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Actualizar contador del carrito
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Mostrar modal de detalles del producto
function showProductDetails(product) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="product-detail">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h2>${product.name}</h2>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <p class="description">${product.description || 'No hay descripción disponible.'}</p>
                    <div class="quantity-selector">
                        <button class="btn-quantity" data-action="decrease">-</button>
                        <span class="quantity">1</span>
                        <button class="btn-quantity" data-action="increase">+</button>
                    </div>
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Cerrar modal
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    };

    // Manejar clic fuera del modal
    modal.onclick = (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        }
    };

    // Manejar cambio de cantidad
    const quantityElement = modal.querySelector('.quantity');
    let quantity = 1;

    modal.querySelectorAll('.btn-quantity').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.getAttribute('data-action');
            if (action === 'increase') {
                quantity++;
            } else if (action === 'decrease' && quantity > 1) {
                quantity--;
            }
            quantityElement.textContent = quantity;
        });
    });

    // Agregar al carrito
    const addToCartBtn = modal.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', () => {
        addToCart(product, quantity);
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
        showNotification('Producto agregado al carrito');
    });
}

// Agregar producto al carrito
function addToCart(product, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        const newItem = { ...product, quantity };
        cart.push(newItem);
    }
    
    saveCart();
    updateCartUI();
}

// Actualizar la interfaz del carrito
function updateCartUI() {
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

// Renderizar el carrito
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return; // Si no existe el elemento, salir
    
    const cartSummary = document.getElementById('cart-summary');
    const emptyCart = cartItems.querySelector('.empty-cart');
    
    if (cart.length === 0) {
        if (cartSummary) cartSummary.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'flex';
        return;
    }
    
    // Mostrar resumen
    if (cartSummary) cartSummary.style.display = 'block';
    if (emptyCart) emptyCart.style.display = 'none';
    
    // Limpiar items actuales (excepto el mensaje de carrito vacío)
    while (cartItems.firstChild) {
        if (cartItems.lastChild.classList && cartItems.lastChild.classList.contains('empty-cart')) {
            break;
        }
        cartItems.removeChild(cartItems.lastChild);
    }
    
    // Renderizar cada producto
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="product-image">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.name}</h3>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="quantity-selector">
                <button class="btn-quantity" data-action="decrease" data-index="${index}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="btn-quantity" data-action="increase" data-index="${index}">+</button>
            </div>
            <div class="item-total">
                $${itemTotal.toFixed(2)}
            </div>
            <button class="remove-item" data-index="${index}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItems.insertBefore(itemElement, emptyCart);
    });
    
    // Actualizar resumen
    if (document.getElementById('subtotal')) {
        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        const shipping = subtotal > 0 ? 5.99 : 0;
        document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
        document.getElementById('total').textContent = `$${(subtotal + shipping).toFixed(2)}`;
    }
    
    // Agregar event listeners a los botones de cantidad
    document.querySelectorAll('.btn-quantity').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.getAttribute('data-action');
            const index = parseInt(e.target.getAttribute('data-index'));
            
            if (action === 'increase') {
                cart[index].quantity++;
            } else if (action === 'decrease' && cart[index].quantity > 1) {
                cart[index].quantity--;
            }
            
            saveCart();
            renderCart();
            updateCartCount();
        });
    });
    
    // Agregar event listeners a los botones de eliminar
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.closest('.remove-item').getAttribute('data-index'));
            cart.splice(index, 1);
            saveCart();
            renderCart();
            updateCartCount();
            showNotification('Producto eliminado del carrito');
        });
    });
}

// Mostrar notificación
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initCart();
    renderCart(); // Asegurar que el carrito se renderice al cargar la página
    
    // Inicializar botones de productos
    document.querySelectorAll('.btn-details').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = button.getAttribute('data-id');
            const product = getProductById(productId);
            if (product) {
                showProductDetails(product);
            }
        });
    });
    
    // Inicializar botones de agregar al carrito directo
    document.addEventListener('click', (e) => {
        const addToCartBtn = e.target.closest('.btn-add-to-cart');
        if (addToCartBtn) {
            e.preventDefault();
            const productId = addToCartBtn.getAttribute('data-id');
            const product = getProductById(productId);
            if (product) {
                addToCart(product);
                showNotification('Producto agregado al carrito');
            }
        }
    });
    
    // Evento para el botón de pago en la página del carrito
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            alert('¡Gracias por tu compra! Redirigiendo al proceso de pago...');
            // Aquí iría la lógica de pago
        });
    }
});

// Obtener producto por ID (simulado - en un caso real, esto vendría de una API)
function getProductById(id) {
    // Esto es un ejemplo. En una aplicación real, esto vendría de una base de datos o API
    const products = [
        {
            id: '1',
            name: 'Zapatillas Deportivas',
            price: 89.99,
            image: 'img/products/prod1.jpg',
            description: 'Zapatillas deportivas ideales para correr y hacer ejercicio. Material transpirable y suela antideslizante.'
        },
        // Agrega más productos según sea necesario
    ];
    
    return products.find(product => product.id === id);
}
