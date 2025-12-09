# Copilot Instructions - Ecommerce Estático

## Project Overview

**Type:** Static HTML/CSS/JavaScript e-commerce website (educational project)  
**Purpose:** Academic exercise demonstrating web structure, responsiveness, and client-side interactivity  
**Target:** Students learning web design fundamentals  
**Name:** TiendaMax - Tienda Online

## Architecture & Key Components

### Directory Structure
```
ecommerce-static/
├── index.html              # Homepage with hero section
├── products.html           # Product catalog grid
├── about.html             # About page with company info
├── contact.html           # Contact form with email/phone
├── cart.html              # Shopping cart with summary
├── 404.html               # Error page
├── css/
│   └── styles.css         # Main stylesheet (mobile-first)
├── js/
│   ├── main.js            # Core cart logic, product data
│   └── cart.js            # Cart page specific functions
├── img/
│   ├── logo.png           # Logo placeholder
│   ├── banner.jpg         # Hero image placeholder
│   └── products/
│       ├── prod1.jpg      # Product images (placeholders)
│       ├── prod2.jpg
│       └── prod3.jpg
└── pages/
    ├── terms.html         # Terms of service
    ├── privacy.html       # Privacy policy
    └── help.html          # FAQ/Help center
```

### Core Technologies
- **HTML5:** Semantic markup (nav, header, main, footer, article)
- **CSS3:** BEM naming, CSS variables, responsive grid (mobile-first)
- **Vanilla JavaScript:** Cart state in array + localStorage persistence
- **No build tools:** Pure static site served via HTTP

### Image Handling Strategy
**Current:** Using placeholder service (placehold.co) for demo purposes
```html
<!-- Placeholder for development -->
<img src="https://placehold.co/300x200?text=Product+1" alt="...">
<!-- Local path (commented) for production -->
<!-- Local: img/products/prod1.jpg -->
```
**On delivery:** Replace placeholder URLs with actual `img/` paths

## Essential Patterns & Conventions

### 1. Semantic HTML Structure (Every Page)
**Header pattern (consistent across all pages):**
```html
<header class="header">
  <div class="header__container">
    <div class="header__logo"><img src="..." alt="Logo TiendaMax"></div>
    <nav class="header__nav">
      <ul class="nav__list">
        <li class="nav__item"><a href="..." class="nav__link">Link</a></li>
      </ul>
    </nav>
  </div>
</header>
```
- Logo always top-left
- Navigation horizontal (responsive: wraps on mobile)
- Active page indicated by `nav__link--active` class

**Main content pattern:**
- `<main>` wraps primary content
- Sections use semantic tags (`<section>`, `<article>`)
- Product cards use `<article class="product-card">`

**Footer pattern (identical on all pages):**
- Three columns: Info, Contact, Social
- Links to pages/terms.html, pages/privacy.html, pages/help.html

### 2. CSS Organization
**Mobile-first responsive approach:**
```css
/* Base (mobile) styles first */
.products-grid {
  grid-template-columns: 1fr;
}

/* Tablet and up */
@media (min-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}
```

**CSS Variables (theme colors):**
```css
:root {
  --primary-color: #007bff;      /* Blue - buttons, links */
  --secondary-color: #6c757d;    /* Gray - text, descriptions */
  --success-color: #28a745;      /* Green - positive actions */
  --danger-color: #dc3545;       /* Red - delete, errors */
  --light-color: #f8f9fa;        /* Light bg */
  --dark-color: #212529;         /* Dark text/header */
}
```

**BEM Naming Convention:**
```css
.product-card { }                  /* Block */
.product-card__image { }           /* Element */
.product-card__title { }
.product-card--featured { }        /* Modifier */
```

**Key responsive breakpoints:**
- `max-width: 768px` - Tablet adjustments
- `max-width: 480px` - Mobile optimizations

### 3. JavaScript Patterns

**Product Data (in main.js):**
```javascript
const products = [
  { id: 1, name: "...", price: 99.99, description: "...", image: "..." },
  // ... more products
];
```

**Cart State Management:**
- Array stored in memory: `let cart = []`
- Persisted to localStorage: `localStorage.setItem('cart', JSON.stringify(cart))`
- Load on page load: `let cart = JSON.parse(localStorage.getItem('cart')) || []`

**Key Functions in main.js:**
```javascript
addToCart(productId, quantity = 1)      // Add to cart
removeFromCart(productId)                // Remove item
updateCartQuantity(productId, newQty)    // Change quantity
clearCart()                              // Empty cart
calculateTotal()                         // Returns subtotal + tax + shipping
getTotalBreakdown()                      // Returns {subtotal, tax, shipping, total}
saveCart()                               // Persist to localStorage
updateCartDisplay()                      // Update UI (cart count badge)
validateForm(form)                       // Form validation
```

**Event Delegation Pattern (main.js):**
```javascript
// Single listener on document for all "Add to Cart" buttons
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn-add-to-cart')) {
    const productId = parseInt(e.target.dataset.productId);
    addToCart(productId);
  }
});
```

**cart.js (Cart Page Specific):**
- `renderCartItems()` - Build table rows from cart array
- `updateCartSummary()` - Calculate and display totals
- `handleCheckout()` - Simulate payment process
- Initialized when page loads if `.cart-section` exists

### 4. Form Handling
**Contact Form (contact.html):**
- Uses `<form data-validate>` to trigger client-side validation
- Required fields checked in validateForm()
- Email validation: `validateEmail()` function
- No server submission (educational scope)

## Development Workflows

### Testing Locally
**No build step required.** Start a simple HTTP server:

**PowerShell (Windows):**
```powershell
# Option 1: Python (if installed)
python -m http.server 8000

# Option 2: Node.js http-server (if installed)
npx http-server

# Then visit: http://localhost:8000
```

### Adding New Products
1. Edit `js/main.js` - add to `products[]` array:
```javascript
{
  id: 4,
  name: "New Product",
  price: 129.99,
  description: "...",
  image: "img/products/prod4.jpg"  // Create this image
}
```
2. Update product count in comments if needed
3. Products automatically appear on products.html (no template changes)

### Adding New Pages
1. Create `pages/new-page.html` (or `.html` in root if main section)
2. Copy header/footer from existing page
3. Update nav links in header to include new page
4. Link new page in footer if it's informational (like terms.html)
5. Test responsive layout: DevTools → Toggle device toolbar (Ctrl+Shift+M)

### Debugging Cart Issues
```javascript
// In browser console:
console.log(cart);                           // View current cart
localStorage.getItem('cart');                // View stored cart
localStorage.removeItem('cart');             // Clear storage (debug)
calculateTotal();                            // Test total calculation
```

## Code Style Guidelines

### HTML
- **Semantic tags:** Always prefer `<nav>`, `<header>`, `<main>`, `<footer>`, `<article>`
- **Self-closing:** `<img src="..." alt="..." />` (with trailing slash)
- **Alt text:** Every image MUST have meaningful alt attribute (accessibility + SEO)
- **Data attributes:** Use `data-product-id="123"` for JavaScript targeting
- **Indentation:** 2 spaces or 4 spaces (be consistent)

### CSS
- **Classes over IDs:** Use classes for styling (IDs only for JavaScript when needed)
- **No inline styles:** All styling in stylesheet
- **Mobile-first:** Base styles for mobile, then add media queries
- **Shorthand:** Use `margin: 10px 5px;` not individual properties
- **Comments:** Use `/* ===== SECTION NAME ===== */` for major sections

### JavaScript
- **Variable naming:** camelCase (`cartItems`, `productPrice`, `isLoaded`)
- **Function naming:** Descriptive verbs (`updateCartDisplay()`, `validateEmail()`, `renderCartItems()`)
- **Comments:** Only for non-obvious logic; code should be self-explanatory
- **Event listeners:** Use event delegation when handling multiple elements

## Integration Points

### Data Flow
1. **products.html** - Displays products from `products[]` array (main.js)
2. **Add to Cart clicks** - Triggers `addToCart()`, updates localStorage
3. **cart.html** - Reads localStorage, renders via `renderCartItems()`
4. **Checkout** - `handleCheckout()` simulates payment, clears cart
5. **Cart badge** - Updated on all pages by `updateCartDisplay()`

### Cross-Page Communication
- No API calls (local data only)
- localStorage bridges pages (shared cart state)
- No backend (form submission is client-side only)
- No authentication (single session, browser-based)

## Common Tasks & Solutions

### Task: Replace Placeholder Images
1. Create real image files (JPEG/PNG) in correct folders
2. In HTML, change src from `placehold.co/...` to `img/products/...` or `img/...`
3. Keep alt text descriptive
4. Test image loads in local browser

### Task: Add Custom Product Category
1. Add category field to products array:
```javascript
{ id: 1, name: "...", category: "electronics", price: 99.99, ... }
```
2. Filter products in cart or display:
```javascript
const electronics = products.filter(p => p.category === "electronics");
```
3. Update products.html template or create new page

### Task: Implement Tax Calculation
Already done! In `calculateTotal()`:
```javascript
const tax = subtotal * 0.1;  // 10% tax
```
Modify the `0.1` multiplier in both `calculateTotal()` and `getTotalBreakdown()`

### Task: Fix Mobile Responsiveness Issues
1. Check viewport meta tag in `<head>`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
2. Test in DevTools responsive mode (Ctrl+Shift+M)
3. Find exact breakpoint where layout breaks
4. Add/adjust media query in styles.css (typically 768px or 480px)
5. Use `grid-template-columns: 1fr;` for stacked mobile layout

## Quality Standards

- **Browser Compatibility:** Chrome, Firefox, Safari, Edge (last 2 versions)
- **Accessibility (WCAG 2.1 Level A):** Proper heading hierarchy, alt text, color contrast
- **Performance:** Lightweight CSS, minimal JavaScript, optimized images (<100KB each)
- **SEO Basics:** Title tags, meta descriptions, semantic HTML
- **Responsiveness:** Test at 320px (mobile), 768px (tablet), 1200px (desktop)

## File Dependencies
- All HTML pages require: `css/styles.css` + `js/main.js`
- `cart.html` additionally requires: `js/cart.js`
- Internal links use relative paths (e.g., `../css/styles.css` from pages/ folder)

---

**Last Updated:** December 2025  
**Project Status:** Complete static structure ready for content population  
**Next Steps:** Replace placeholder images, customize product catalog, deploy to hosting
