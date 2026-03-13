/**
 * CARRITO DE COMPRAS - PC GAMER STORE
 * Manejo completo del carrito con localStorage
 */

// Clase para manejar el carrito
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.init();
    }

    // Inicializar event listeners
    init() {
        this.updateCartCount();
        this.setupAddToCartButtons();
        this.setupCartPage();
        this.createNotification();
    }

    // Crear elemento de notificación
    createNotification() {
        if (!document.getElementById('cart-notification')) {
            const notification = document.createElement('div');
            notification.id = 'cart-notification';
            notification.className = 'notification';
            notification.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>Producto agregado al carrito</span>
            `;
            document.body.appendChild(notification);
        }
    }

    // Mostrar notificación
    showNotification(message = 'Producto agregado al carrito') {
        const notification = document.getElementById('cart-notification');
        if (notification) {
            notification.querySelector('span').textContent = message;
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
    }

    // Cargar carrito desde localStorage
    loadCart() {
        const saved = localStorage.getItem('pcGamerCart');
        return saved ? JSON.parse(saved) : [];
    }

    // Guardar carrito en localStorage
    saveCart() {
        localStorage.setItem('pcGamerCart', JSON.stringify(this.items));
        this.updateCartCount();
    }

    // Actualizar contador del carrito
    updateCartCount() {
        const countElements = document.querySelectorAll('#cart-count');
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        countElements.forEach(el => {
            el.textContent = totalItems;
        });
    }

    // Configurar botones "Agregar al carrito"
    setupAddToCartButtons() {
        // Buscar ambos tipos de botones: .add-to-cart-btn y .add-to-cart
        const buttons1 = document.querySelectorAll('.add-to-cart-btn');
        const buttons2 = document.querySelectorAll('.add-to-cart');
        const allButtons = [...buttons1, ...buttons2];
        
        console.log(`Encontrados ${allButtons.length} botones de agregar al carrito`);
        
        allButtons.forEach((button, index) => {
            // Evitar duplicar event listeners
            if (button.dataset.cartSetup) return;
            button.dataset.cartSetup = 'true';
            
            console.log(`Configurando botón ${index + 1}`);
            button.addEventListener('click', (e) => {
                console.log('Botón clickeado');
                e.preventDefault();
                e.stopPropagation();
                
                const card = button.closest('.product-card') || button.closest('article');
                console.log('Product card encontrado:', card);
                
                if (!card) {
                    console.error('No se encontró el product-card');
                    return;
                }
                
                // Extraer información del producto
                const product = this.extractProductInfo(card);
                console.log('Producto a agregar:', product);
                
                if (product.id && product.name && product.price) {
                    this.addItem(product);
                } else {
                    console.error('No se pudo extraer la información del producto');
                }
            });
        });
    }

    // Extraer información del producto de la estructura HTML
    extractProductInfo(card) {
        // Intentar obtener de data attributes primero
        let id = card.dataset.id ? parseInt(card.dataset.id) : null;
        let name = card.dataset.name;
        let price = card.dataset.price ? parseFloat(card.dataset.price) : null;
        
        // Si no hay data attributes, extraer de la estructura HTML
        if (!id) {
            // Generar ID único basado en el nombre del producto
            const titleEl = card.querySelector('.product-title, h3');
            if (titleEl) {
                name = titleEl.textContent.trim();
                id = this.generateId(name);
            }
        }
        
        if (!name) {
            const titleEl = card.querySelector('.product-title, h3');
            if (titleEl) name = titleEl.textContent.trim();
        }
        
        if (!price) {
            // Buscar el precio en diferentes formatos
            const priceEl = card.querySelector('.price');
            if (priceEl) {
                const priceText = priceEl.textContent.replace(/[^0-9.,]/g, '').replace(',', '');
                price = parseFloat(priceText);
            }
        }
        
        // Obtener imagen
        let image = '';
        const imgEl = card.querySelector('img');
        if (imgEl) image = imgEl.src;
        
        return { id, name, price, image, quantity: 1 };
    }

    // Generar ID único basado en string
    generateId(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash) % 10000;
    }

    // Agregar item al carrito
    addItem(product) {
        const existing = this.items.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            this.items.push(product);
        }
        this.saveCart();
        this.showNotification(`${product.name} agregado al carrito`);
    }

    // Eliminar item del carrito
    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.saveCart();
        this.renderCartPage();
    }

    // Actualizar cantidad
    updateQuantity(id, quantity) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(id);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.renderCartPage();
            }
        }
    }

    // Calcular totales
    getTotals() {
        const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.12; // 12% IVA
        const total = subtotal + tax;
        return { subtotal, tax, total };
    }

    // Configurar página del carrito
    setupCartPage() {
        if (document.querySelector('.cart-page')) {
            this.renderCartPage();
        }
    }

    // Renderizar página del carrito
    renderCartPage() {
        const cartItems = document.getElementById('cart-items');
        const cartSummary = document.getElementById('cart-summary');

        if (!cartItems) return;

        if (this.items.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h2>Tu carrito está vacío</h2>
                    <p>¡Explora nuestros productos y encuentra lo que necesitas!</p>
                    <a href="productos.html" class="btn">Ver Productos</a>
                </div>
            `;
            if (cartSummary) cartSummary.style.display = 'none';
            return;
        }

        if (cartSummary) cartSummary.style.display = 'block';

        // Renderizar items
        cartItems.innerHTML = this.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="remove-btn" onclick="cart.removeItem(${item.id})">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        `).join('');

        // Renderizar resumen
        const totals = this.getTotals();
        cartSummary.innerHTML = `
            <h2>Resumen del Pedido</h2>
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>$${totals.subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>IVA (12%):</span>
                <span>$${totals.tax.toFixed(2)}</span>
            </div>
            <div class="summary-row total">
                <span>Total:</span>
                <span>$${totals.total.toFixed(2)}</span>
            </div>
            <div class="cart-actions">
                <button class="btn-checkout" onclick="cart.checkout()">
                    <i class="fas fa-credit-card"></i> Proceder al Pago
                </button>
                <a href="productos.html" class="btn-continue">
                    <i class="fas fa-arrow-left"></i> Seguir Comprando
                </a>
                <button class="remove-btn" onclick="cart.clearCart()" style="margin-top: 1rem;">
                    <i class="fas fa-trash"></i> Vaciar Carrito
                </button>
            </div>
        `;
    }

    // Vaciar carrito
    clearCart() {
        if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
            this.items = [];
            this.saveCart();
            this.renderCartPage();
        }
    }

    // Procesar checkout
    checkout() {
        if (this.items.length === 0) {
            alert('Tu carrito está vacío');
            return;
        }
        const totals = this.getTotals();
        alert(`¡Gracias por tu compra!\n\nTotal: $${totals.total.toFixed(2)}\n\nEn un sistema real, aquí se procesaría el pago.`);
        this.items = [];
        this.saveCart();
        this.renderCartPage();
    }
}

// Inicializar carrito cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.cart = new ShoppingCart();
});

// Funciones globales para los botones onclick
function addToCart(id, name, price, image) {
    const product = { id, name, price, image, quantity: 1 };
    window.cart.addItem(product);
}

// ============================================
// FUNCIONALIDAD DE FILTROS DE PRODUCTOS
// ============================================

class ProductFilters {
    constructor() {
        console.log('Inicializando filtros...');
        this.init();
    }

    init() {
        this.setupFilterButton();
        this.setupPriceRange();
        this.setupProductBadges();
        console.log('Filtros inicializados correctamente');
    }

    // Configurar botón de aplicar filtros
    setupFilterButton() {
        const applyBtn = document.querySelector('.btn-apply-filters');
        console.log('Botón de filtros encontrado:', applyBtn);
        
        if (applyBtn) {
            applyBtn.addEventListener('click', (e) => {
                console.log('Botón Aplicar Filtros clickeado');
                e.preventDefault();
                e.stopPropagation();
                this.applyFilters();
            });
            console.log('Event listener agregado al botón');
        } else {
            console.error('No se encontró el botón .btn-apply-filters');
        }
    }

    // Configurar rango de precios
    setupPriceRange() {
        const priceRange = document.querySelector('.price-range');
        const priceInputs = document.querySelectorAll('.price-inputs input');
        
        console.log('Rango de precios:', priceRange);
        console.log('Inputs de precio:', priceInputs.length);

        if (priceRange && priceInputs.length >= 2) {
            priceRange.addEventListener('input', (e) => {
                priceInputs[1].value = e.target.value;
            });
        }
    }

    // Aplicar filtros
    applyFilters() {
        console.log('Ejecutando applyFilters...');
        
        const products = document.querySelectorAll('article.product-card, .product-card');
        console.log(`Total de productos encontrados: ${products.length}`);
        
        // Obtener TODOS los checkboxes de categorías (primer filter-group)
        const filterGroups = document.querySelectorAll('.filter-group');
        console.log(`Grupos de filtros: ${filterGroups.length}`);
        
        // Categorías - primer grupo
        const categoryGroup = filterGroups[0];
        const categoryCheckboxes = categoryGroup ? categoryGroup.querySelectorAll('input[type="checkbox"]:checked') : [];
        const selectedCategories = [];
        
        categoryCheckboxes.forEach(cb => {
            const label = cb.nextElementSibling?.textContent?.trim().toLowerCase();
            if (label) {
                selectedCategories.push(label);
                console.log('Categoría seleccionada:', label);
            }
        });

        // Precio
        const priceInputs = document.querySelectorAll('.price-inputs input');
        const minPrice = priceInputs[0] ? parseFloat(priceInputs[0].value) || 0 : 0;
        const maxPrice = priceInputs[1] ? parseFloat(priceInputs[1].value) || 5000 : 5000;
        console.log(`Rango de precio: $${minPrice} - $${maxPrice}`);

        // Marcas - tercer grupo
        const brandGroup = filterGroups[2];
        const brandCheckboxes = brandGroup ? brandGroup.querySelectorAll('input[type="checkbox"]:checked') : [];
        const selectedBrands = [];
        
        brandCheckboxes.forEach(cb => {
            const label = cb.nextElementSibling?.textContent?.trim().toLowerCase();
            if (label) {
                selectedBrands.push(label);
                console.log('Marca seleccionada:', label);
            }
        });

        console.log('Filtros a aplicar:', { 
            categorias: selectedCategories, 
            precioMin: minPrice, 
            precioMax: maxPrice, 
            marcas: selectedBrands 
        });

        let visibleCount = 0;

        products.forEach((product, index) => {
            const categoryEl = product.querySelector('.product-category');
            const titleEl = product.querySelector('.product-title') || product.querySelector('h3');
            const priceEl = product.querySelector('.price');

            const category = categoryEl ? categoryEl.textContent.trim().toLowerCase() : '';
            const title = titleEl ? titleEl.textContent.trim().toLowerCase() : '';
            const priceText = priceEl ? priceEl.textContent.replace(/[$,]/g, '') : '0';
            const price = parseFloat(priceText) || 0;

            console.log(`Producto ${index + 1}:`, { category, title: title.substring(0, 30), price });

            // Verificar categoría (si hay categorías seleccionadas)
            let categoryMatch = true;
            if (selectedCategories.length > 0) {
                categoryMatch = selectedCategories.some(cat => 
                    category.includes(cat) || 
                    title.includes(cat) ||
                    // Mapeo de categorías relacionadas
                    (cat === 'periféricos' && (category.includes('teclado') || category.includes('mouse') || category.includes('audífonos'))) ||
                    (cat === 'accesorios' && (category.includes('monitor') || category.includes('kit')))
                );
            }

            // Verificar precio
            const priceMatch = price >= minPrice && price <= maxPrice;

            // Verificar marca (busca en el título)
            let brandMatch = true;
            if (selectedBrands.length > 0) {
                brandMatch = selectedBrands.some(brand => title.includes(brand.toLowerCase()));
            }

            console.log(`Producto ${index + 1} - Match:`, { categoryMatch, priceMatch, brandMatch });

            // Mostrar u ocultar producto
            if (categoryMatch && priceMatch && brandMatch) {
                product.style.display = '';
                visibleCount++;
            } else {
                product.style.display = 'none';
            }
        });

        console.log(`Filtros aplicados. ${visibleCount} de ${products.length} productos visibles.`);
        
        // Mostrar mensaje si no hay resultados
        this.showNoResultsMessage(visibleCount);
    }

    // Mostrar mensaje cuando no hay resultados
    showNoResultsMessage(count) {
        let noResultsMsg = document.querySelector('.no-results-message');
        
        if (count === 0) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.innerHTML = `
                    <div style="text-align: center; padding: 3rem; color: #b8c1ec;">
                        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <h3>No se encontraron productos</h3>
                        <p>Intenta ajustar los filtros para ver más resultados.</p>
                    </div>
                `;
                const grid = document.querySelector('.products-grid');
                if (grid) grid.appendChild(noResultsMsg);
            }
            noResultsMsg.style.display = 'block';
        } else if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    }

    // Configurar badges clickeables (Oferta/Nuevo)
    setupProductBadges() {
        const badges = document.querySelectorAll('.product-badge');
        console.log(`Encontradas ${badges.length} badges de productos`);
        
        badges.forEach(badge => {
            // Hacer la badge clickeable
            badge.style.cursor = 'pointer';
            badge.title = 'Haz clic para ver todos los productos ' + badge.textContent;
            
            badge.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const badgeType = badge.textContent.trim().toLowerCase();
                console.log('Badge clickeada:', badgeType);
                
                // Filtrar productos por tipo de badge
                this.filterByBadge(badgeType);
            });
        });
    }

    // Filtrar productos por badge (oferta/nuevo)
    filterByBadge(badgeType) {
        const products = document.querySelectorAll('article.product-card, .product-card');
        let visibleCount = 0;
        
        // Resetear otros filtros visuales
        this.resetFilters();
        
        products.forEach(product => {
            const badge = product.querySelector('.product-badge');
            const productBadgeType = badge ? badge.textContent.trim().toLowerCase() : '';
            
            if (productBadgeType === badgeType) {
                product.style.display = '';
                visibleCount++;
                // Resaltar el producto
                product.style.boxShadow = '0 0 20px rgba(233, 69, 96, 0.5)';
                setTimeout(() => {
                    product.style.boxShadow = '';
                }, 1000);
            } else {
                product.style.display = 'none';
            }
        });
        
        console.log(`Filtrado por ${badgeType}: ${visibleCount} productos encontrados`);
        this.showNoResultsMessage(visibleCount);
        
        // Mostrar notificación
        this.showFilterNotification(badgeType, visibleCount);
    }

    // Resetear filtros visuales
    resetFilters() {
        // Desmarcar todos los checkboxes
        document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(cb => {
            cb.checked = true;
        });
        
        // Resetear precios
        const priceInputs = document.querySelectorAll('.price-inputs input');
        if (priceInputs[0]) priceInputs[0].value = 0;
        if (priceInputs[1]) priceInputs[1].value = 5000;
        
        const priceRange = document.querySelector('.price-range');
        if (priceRange) priceRange.value = 5000;
    }

    // Mostrar notificación de filtro aplicado
    showFilterNotification(badgeType, count) {
        const type = badgeType === 'oferta' ? 'en oferta' : 'nuevos';
        const message = `Mostrando ${count} productos ${type}`;
        
        // Usar la notificación del carrito si existe
        const notification = document.getElementById('cart-notification');
        if (notification) {
            notification.querySelector('span').textContent = message;
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
    }
}

// Inicializar filtros cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar filtros solo si estamos en la página de productos
    if (document.querySelector('.filters')) {
        window.productFilters = new ProductFilters();
    }
    
    // Inicializar menú móvil
    setupMobileMenu();
});

// ============================================
// FUNCIONALIDAD DEL MENÚ MÓVIL
// ============================================

function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn && nav) {
        console.log('Configurando menú móvil...');
        
        mobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            nav.classList.toggle('active');
            
            // Cambiar icono del botón
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (nav.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
            
            console.log('Menú móvil toggled:', nav.classList.contains('active'));
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
}
