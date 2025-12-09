# TiendaMax - Ecommerce Estático

Sitio web de tienda en línea educativo desarrollado con HTML5, CSS3 y JavaScript Vanilla.

## 📁 Estructura del Proyecto

```
ecommerce-static/
├── index.html              # Página de inicio
├── products.html           # Catálogo de productos
├── about.html             # Acerca de nosotros
├── contact.html           # Formulario de contacto
├── cart.html              # Carrito de compras
├── 404.html               # Página de error
│
├── css/
│   └── styles.css         # Estilos principales (responsive)
│
├── js/
│   ├── main.js            # Lógica de carrito y validación
│   └── cart.js            # Funciones específicas del carrito
│
├── img/
│   ├── logo.png           # Logo de TiendaMax
│   ├── banner.jpg         # Imagen del hero banner
│   └── products/
│       ├── prod1.jpg      # Imagen producto 1
│       ├── prod2.jpg      # Imagen producto 2
│       └── prod3.jpg      # Imagen producto 3
│
└── pages/
    ├── terms.html         # Términos de servicio
    ├── privacy.html       # Política de privacidad
    └── help.html          # Centro de ayuda/FAQ
```

## 🚀 Cómo Usar

### Servir Localmente

No se requiere build step. Solo necesitas un servidor HTTP simple:

**Opción 1: Python**
```bash
cd ecommerce-static
python -m http.server 8000
```

**Opción 2: Node.js**
```bash
cd ecommerce-static
npx http-server
```

Luego visita: `http://localhost:8000`

### Características

✅ **Responsivo** - Funciona en desktop, tablet y móvil
✅ **Carrito Persistente** - Datos guardados en localStorage
✅ **Validación de Formularios** - Cliente-side
✅ **Diseño Moderno** - CSS Grid y Flexbox
✅ **Accesible** - HTML semántico y WCAG 2.1

## 📝 Secciones Principales

### Página de Inicio (index.html)
- Hero banner con call-to-action
- Introducción a la tienda
- Características principales

### Catálogo de Productos (products.html)
- Grid responsive de productos
- Botones "Agregar al Carrito"
- Información de precio

### Carrito (cart.html)
- Tabla de items
- Actualizar cantidades
- Cálculo de totales (subtotal, impuestos, envío)
- Simulación de pago

### Páginas de Información
- **about.html** - Historia y valores
- **contact.html** - Formulario de contacto
- **pages/terms.html** - Términos de servicio
- **pages/privacy.html** - Política de privacidad
- **pages/help.html** - FAQ

## 🛠️ Funciones JavaScript Principales

### main.js
```javascript
addToCart(productId, quantity)     // Agregar al carrito
removeFromCart(productId)           // Eliminar del carrito
updateCartQuantity(productId, qty)  // Actualizar cantidad
calculateTotal()                    // Calcular total
getTotalBreakdown()                 // Desglose de totales
validateForm(form)                  // Validar formulario
```

### cart.js
```javascript
renderCartItems()       // Renderizar tabla de items
updateCartSummary()     // Actualizar resumen
handleCheckout()        // Procesar pago simulado
```

## 💾 Almacenamiento

Los datos del carrito se guardan en `localStorage`:
- Key: `'cart'`
- Formato: JSON array de items
- Persiste entre páginas y sesiones

## 🎨 Personalización

### Cambiar Colores
Editar variables CSS en `css/styles.css`:
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
}
```

### Agregar Productos
1. Abrir `js/main.js`
2. Editar array `products[]`:
```javascript
{
  id: 4,
  name: "Nuevo Producto",
  price: 129.99,
  description: "Descripción",
  image: "img/products/prod4.jpg"
}
```

### Cambiar Impuestos/Envío
En `calculateTotal()` y `getTotalBreakdown()`:
```javascript
const tax = subtotal * 0.1;        // Cambiar 0.1 para otro porcentaje
const shipping = subtotal > 100 ? 0 : 10;  // Cambiar límite y monto
```

## 📱 Breakpoints Responsivos

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px
- **Móvil pequeño:** < 480px

## ✅ Checklist para Entrega

- [ ] Reemplazar placeholders con imágenes reales
- [ ] Personalizar contenido de productos
- [ ] Ajustar colores según branding
- [ ] Probar en diferentes navegadores
- [ ] Verificar responsive en DevTools
- [ ] Hacer pruebas del carrito
- [ ] Validar formularios

## 🔗 Enlaces Útiles

- [HTML5 Reference](https://developer.mozilla.org/es/docs/Web/HTML)
- [CSS3 Guide](https://developer.mozilla.org/es/docs/Web/CSS)
- [JavaScript Basics](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)
- [Web Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)

## 📄 Licencia

Proyecto educativo - Libre para uso académico

---

**Desarrollado con:** HTML5 | CSS3 | JavaScript Vanilla  
**Última actualización:** Diciembre 2025
