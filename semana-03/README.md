# Semana 03 - Estructura de Sitios Web

Material educativo sobre estructura de sitios web, mapas de navegación, jerarquía de archivos y planificación de contenido.

## 📋 Descripción del Proyecto

Esta semana se centra en los fundamentos estructurales del desarrollo web: organización de sitios web, mapas de navegación, jerarquía de archivos y planificación de contenido. Incluye un proyecto práctico de e-commerce que aplica todos los conceptos aprendidos.

## 🎯 Objetivos de Aprendizaje

- Comprender la estructura básica de un sitio web
- Aprender a diseñar mapas de navegación eficientes
- Organizar archivos y carpetas de manera óptima
- Planificar contenido web efectivo
- Definir propósito y audiencia de un sitio web
- Aplicar conceptos en un proyecto e-commerce real

## 📁 Estructura del Proyecto

```
semana-03/
├── index.html              # Página principal del material educativo
├── README.md               # Este archivo de documentación
└── ecommerce-static/       # Proyecto e-commerce completo
    ├── index.html          # Página de inicio del e-commerce
    ├── products.html       # Catálogo de productos
    ├── about.html          # Acerca de nosotros
    ├── contact.html        # Formulario de contacto
    ├── cart.html           # Carrito de compras
    ├── 404.html            # Página de error
    ├── css/
    │   └── styles.css      # Estilos principales responsivos
    ├── js/
    │   ├── main.js         # Lógica principal y carrito
    │   └── cart.js         # Funciones específicas del carrito
    ├── img/                # Imágenes del sitio
    └── pages/              # Páginas adicionales
        ├── terms.html      # Términos de servicio
        ├── privacy.html    # Política de privacidad
        └── help.html       # Centro de ayuda/FAQ
```

## 📚 Contenido Teórico

### 1. Estructura de un Sitio Web
- **Componentes principales**: Header, Main Content, Sidebar, Footer
- **Elementos del Header**: Logotipo, menú de navegación, menú de cortesía
- **Contenido Principal**: Breadcrumbs, hero image, contenido específico
- **Elementos Flotantes**: Popups, barra promocional, barra de notificación

### 2. Mapa de Navegación
- **Definición**: Representación visual de la estructura del sitio
- **Importancia**: Arquitectura de información, experiencia de usuario
- **Tipos de estructuras**:
  - Jerárquica (árbol)
  - Lineal (secuencial)
  - Lineal con jerarquía
  - En red (libre)

### 3. Jerarquía de Archivos y Carpetas
- **Organización de archivos**: HTML principal, recursos en subcarpetas
- **Estructura recomendada**: CSS, JS, img, fonts, videos, audio
- **Principios**: Nomenclatura clara, estructura escalable
- **Sistema de archivos**: Árbol jerárquico de directorios

### 4. Planificación de Contenido
- **Definición**: Planificar, crear y organizar elementos web
- **Elementos clave**:
  - Arquitectura de la información
  - Diseño visual
  - Optimización para dispositivos
  - Posicionamiento SEO
  - Usabilidad y accesibilidad

### 5. Propósito y Audiencia
- **Propósito del sitio**: Comerciales, informativos, de servicio
- **Audiencia objetivo**: Demografía, intereses, comportamiento, necesidades
- **Factores a considerar**: Edad, género, ubicación, dispositivos utilizados

## 🛠️ Proyecto E-commerce

### Características Principales
- ✅ **Diseño Responsivo**: Funciona en desktop, tablet y móvil
- ✅ **HTML Semántico**: Estructura accesible y optimizada para SEO
- ✅ **CSS Moderno**: Variables CSS, Flexbox, Grid
- ✅ **Carrito Funcional**: Agregar, eliminar, actualizar productos
- ✅ **Persistencia**: Datos guardados en localStorage
- ✅ **Validación**: Formularios con validación cliente-side
- ✅ **Accesibilidad**: Cumplimiento WCAG 2.1 nivel AA

### Páginas del Sitio
- **Página Principal**: Hero banner, introducción, características
- **Catálogo**: Grid de productos con filtros y búsqueda
- **Carrito**: Tabla de items, cálculo de totales, checkout
- **Contacto**: Formulario de contacto e información
- **Acerca de**: Historia y valores de la empresa
- **Páginas legales**: Términos, privacidad, ayuda

### Tecnologías Implementadas
- **HTML5**: Estructura semántica completa
- **CSS3**: Variables, Flexbox, Grid, animaciones
- **JavaScript Vanilla**: Carrito, validación, interactividad
- **LocalStorage**: Persistencia del carrito
- **Responsive Design**: Adaptación a todos los dispositivos

## 📝 Ejercicios Resueltos

### Ejercicio 1.3.1: Análisis de Estructura Web
- **Objetivo**: Analizar jerarquía de archivos de tienda de ropa
- **Contenido**: Función de index.html, enlaces relativos, organización correcta
- **Resultado**: Comprensión de estructura de archivos y buenas prácticas

### Ejercicio 1.3.2: Mapa de Navegación
- **Objetivo**: Diseñar mapa para sitio educativo de programación
- **Contenido**: Estructura jerárquica con módulos y recursos
- **Resultado**: Arquitectura de información clara y navegable

### Ejercicio 1.3.3: Planificación de Contenido
- **Objetivo**: Planificar sitio personal para diseñadora gráfica
- **Contenido**: Tabla de objetivos y contenido por página
- **Resultado**: Plan completo con recomendaciones adicionales

## 🚀 Cómo Usar

### Material Educativo
1. **Abrir** `index.html` en un navegador web
2. **Navegar** por las secciones teóricas
3. **Estudiar** los ejemplos de código
4. **Practicar** con los ejercicios propuestos

### Proyecto E-commerce
1. **Ir a** la carpeta `ecommerce-static/`
2. **Abrir** `index.html` en un navegador
3. **Explorar** todas las páginas del sitio
4. **Probar** el carrito de compras
5. **Analizar** el código fuente

### Servir Localmente (Opcional)
```bash
# Opción 1: Python
cd ecommerce-static
python -m http.server 8000

# Opción 2: Node.js
cd ecommerce-static
npx http-server
```

## 🎨 Características del Diseño

### Material Educativo
- **Esquema de colores rojo/naranja** temático
- **Navegación interna** con anclajes suaves
- **Bloques de código** con sintaxis resaltada
- **Secciones diferenciadas** por colores
- **Diseño responsivo** para todos los dispositivos

### Proyecto E-commerce
- **Diseño moderno** con gradientes y sombras
- **Interfaz intuitiva** y fácil de usar
- **Animaciones sutiles** y transiciones suaves
- **Tipografía legible** y jerarquía clara
- **Paleta de colores** profesional y coherente

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Edge (últimas versiones)
- ✅ Navegadores móviles

### Dispositivos
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Móvil (< 768px)
- ✅ Móvil pequeño (< 480px)

## 📖 Conceptos Clave

- **Estructura Web**: Organización visual y funcional de sitios
- **Mapa de Navegación**: Arquitectura de información
- **Jerarquía de Archivos**: Organización de carpetas y recursos
- **Planificación de Contenido**: Diseño de contenido web efectivo
- **Propósito y Audiencia**: Definición de objetivos y usuarios
- **Responsive Design**: Diseño adaptativo
- **HTML Semántico**: Estructura con significado
- **SEO**: Optimización para motores de búsqueda
- **WCAG**: Pautas de accesibilidad
- **LocalStorage**: Almacenamiento local

## 🔧 Personalización del Proyecto

### Cambiar Colores
Editar variables CSS en `ecommerce-static/css/styles.css`:
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
}
```

### Agregar Productos
1. Abrir `ecommerce-static/js/main.js`
2. Editar el array `products[]`
3. Agregar imágenes en la carpeta `img/products/`

### Modificar Estructura
1. Analizar el mapa de navegación actual
2. Modificar enlaces en el header
3. Actualizar breadcrumbs si es necesario
4. Reorganizar archivos si se agregan nuevas secciones

## 📄 Licencia

© 2026 - Curso de Diseño de Sitios Web - Material educativo

---

**Desarrollado como parte del curso de Diseño de Sitios Web - Semana 03**
