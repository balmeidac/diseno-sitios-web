# Copilot Instructions - Diseño de Sitios Web

## Project Overview
**Type:** Educational web design learning repository  
**Purpose:** Academic course work demonstrating progression from HTML/CSS fundamentals to responsive design  
**Structure:** Weekly folders (`semana-XX/`) containing incremental projects  
**Stack:** Pure HTML5, CSS3, Vanilla JavaScript (no build tools or frameworks)

## Repository Architecture

### Weekly Project Organization
```
semana-XX/
├── project-name/         # Self-contained static site
│   ├── index.html        # Main entry point
│   ├── css/
│   │   └── style(s).css  # Single stylesheet per project
│   ├── js/               # Optional, vanilla JS only
│   ├── img/              # Images organized by purpose
│   │   ├── products/
│   │   ├── screenshots/  # For README documentation
│   │   └── [feature]/
│   ├── pages/            # Secondary HTML pages (if any)
│   └── README.md         # Project-specific documentation
```

**Key Pattern:** Each weekly folder is independent. No shared dependencies across weeks. Projects are self-contained demonstrations of specific topics.

### Project Types by Week
- **Semana 01-02:** Foundations (HTTP, W3C standards, site mapping)
- **Semana 03-04:** Static sites with basic HTML structure
- **Semana 05-07:** HTML5 semantic elements + CSS styling + forms
- **Semana 08+:** Responsive design, Bootstrap, optimization (planned)

## Essential Development Patterns

### 1. HTML5 Semantic Structure (Semana 05+)
All pages follow this consistent pattern:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header><!-- Logo + nav --></header>
    <main>
        <section><!-- Content blocks --></section>
    </main>
    <footer><!-- Info + links --></footer>
</body>
</html>
```
- **Always** include `lang="es"` attribute
- **Always** use semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Navigation uses `<nav><ul><li><a>` structure

### 2. CSS Organization & BEM Methodology
**BEM Naming (from semana-03/ecommerce-static/):**
```css
.block { }                /* Component: .header, .product-card */
.block__element { }       /* Child: .header__logo, .nav__link */
.block--modifier { }      /* Variant: .nav__link--active */
```

**CSS Variables Pattern:**
```css
:root {
    --primary-color: #007bff;
    --dark-color: #212529;
    --shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```
Used in `semana-03/ecommerce-static/css/styles.css` - replicate this pattern in new projects.

**Mobile-First Responsive:**
```css
/* Base styles (mobile) */
.grid { grid-template-columns: 1fr; }

/* Tablet+ */
@media (min-width: 768px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
}
```

### 3. JavaScript Conventions (Vanilla Only)
**From semana-03/ecommerce-static/js/main.js:**
- Use `const` for data arrays and `let` for mutable state
- JSDoc comments for functions:
```javascript
/**
 * Agrega un producto al carrito
 * @param {number} productId - ID del producto
 * @param {number} quantity - Cantidad a agregar
 */
function addToCart(productId, quantity = 1) { }
```
- localStorage for cart persistence: `JSON.parse(localStorage.getItem('cart')) || []`
- No jQuery, no frameworks - pure DOM manipulation

### 4. Image Handling Dual Strategy
Projects use **placeholder images** during development:
```html
<!-- Development: placeholder -->
<img src="https://placehold.co/300x200?text=Product+1" alt="...">

<!-- Production: local path (commented) -->
<!-- img/products/prod1.jpg -->
```
**When delivering:** Replace placeholder URLs with actual `img/` paths.

### 5. Consistent Navigation Pattern
All multi-page projects use this structure:
```html
<nav>
    <ul class="nav__list">
        <li><a href="index.html" class="nav__link nav__link--active">Inicio</a></li>
        <li><a href="productos.html" class="nav__link">Productos</a></li>
        <li><a href="contacto.html" class="nav__link">Contacto</a></li>
    </ul>
</nav>
```
- Active page gets `nav__link--active` class
- Footer links to: `pages/terms.html`, `pages/privacy.html`, `pages/help.html`

## Development Workflows

### Local Development
No build step required. Use simple HTTP server:
```bash
cd semana-XX/project-name
python -m http.server 8000
# OR
npx http-server
```
Visit: `http://localhost:8000`

### Git Workflow (from semana-05/GITHUB-INSTRUCTIONS.md)
```bash
cd semana-XX
git add .
git commit -m "Semana XX: Brief description"
git push origin main
```

### README Structure
Each project README must include:
1. Project name/description
2. 📁 File structure tree
3. 🚀 How to run locally
4. ✨ Features/characteristics
5. 🛠️ Technologies used
6. 📱 Responsive breakpoints (if applicable)

## Critical Constraints

### What NOT to Use
- ❌ No Node.js dependencies (no `package.json`)
- ❌ No preprocessors (SASS, LESS, PostCSS)
- ❌ No frontend frameworks (React, Vue, Angular)
- ❌ No CSS frameworks until Unidad 3.4 (Bootstrap introduction)
- ❌ No build tools (Webpack, Vite, Parcel)
- ❌ No TypeScript

### What IS Allowed
- ✅ Pure HTML5, CSS3, Vanilla JavaScript
- ✅ CSS Variables, Flexbox, Grid
- ✅ Google Fonts via `@import` or `<link>`
- ✅ Font Awesome icons via CDN (used in semana-07)
- ✅ localStorage for client-side data

## File Naming Conventions
- HTML files: lowercase with hyphens (`index.html`, `contacto.html`)
- CSS files: `style.css` or `styles.css` (singular/plural varies by project)
- Folders: lowercase, no spaces (`img/products/`, `pages/`)
- Assets: descriptive names (`banner.jpg`, `logo.png`, `prod1.jpg`)

## Accessibility Guidelines (WCAG 2.1)
From semana-05 onwards:
- Use semantic HTML (`<nav role="navigation">`)
- Include `alt` attributes on all images
- `aria-label` on icon-only buttons
- `lang` attribute on `<html>`
- High contrast colors (checked in semana-05/css/style.css)

## Quick Reference: Project Examples
- **Basic HTML only:** `semana-07/html5-site/` (no CSS)
- **HTML + CSS responsive:** `semana-05/` (landing page)
- **Multi-page site:** `semana-06/mini-sitio/` (4 pages)
- **Forms + validation:** `semana-07/html-site/` (registration, contact)
- **Full ecommerce:** `semana-03/ecommerce-static/` (cart, localStorage)
- **Business sites:** `semana-04/la-cosecha/`, `semana-04/cybershield/`

## Context for New Features
When adding to existing weeks:
1. Match the complexity level of that week's learning objectives
2. Follow established naming patterns in that week's projects
3. Use same semantic HTML structure as other projects in that week
4. If adding CSS, use CSS variables and mobile-first approach
5. Document in project's README.md following existing format
