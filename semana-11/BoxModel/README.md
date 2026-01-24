# Lista de Productos con Box Model

Proyecto académico que demuestra la aplicación del Modelo de Caja CSS en un catálogo de productos online.

## 📋 Descripción del Proyecto

Este proyecto es un catálogo de productos desarrollado con HTML y CSS puro, diseñado específicamente para demostrar y aplicar los conceptos del Modelo de Caja (Box Model) de CSS. El proyecto cumple con todos los requisitos académicos establecidos y muestra un diseño moderno y profesional.

## 🎯 Objetivo Académico

Diseñar un catálogo de productos usando HTML y CSS, aplicando correctamente el Modelo de Caja (Box Model) con las siguientes propiedades:
- margin
- padding
- border
- width y height
- border-radius
- box-shadow
- display: flex

## 📁 Estructura del Proyecto

```
BoxModel/
│── index.html                 # Página principal del catálogo
│── README.md                  # Este archivo de documentación
│── css/
│     └── style.css           # Hoja de estilos principal
│── assets/
│     └── img/                # Carpeta para imágenes (opcional)
│           └── (imágenes de productos)
```

## 🛍️ Catálogo de Productos

El catálogo incluye 6 productos reales de diferentes categorías:

### Productos Incluidos:
1. **Camiseta Deportiva Premium** - Ropa
2. **Zapatillas Running Pro** - Zapatos  
3. **Smartwatch Fitness Tracker** - Accesorios
4. **Tablet Profesional 10"** - Gadgets
5. **Auriculares Bluetooth Pro** - Gadgets
6. **Jeans Clásicos Slim Fit** - Ropa

## 🎨 Características del Diseño

### Aplicación del Box Model:
- **Margin**: Espaciado entre elementos y contenedores
- **Padding**: Relleno interno en tarjetas y elementos
- **Border**: Bordes decorativos en tarjetas y precios
- **Width/Height**: Dimensiones controladas de elementos
- **Border-radius**: Esquinas redondeadas para diseño moderno
- **Box-shadow**: Sombras para profundidad visual
- **Display: flex**: Alineación moderna de productos

### Diseño Visual:
- **Layout moderno** con tarjetas de producto
- **Diseño responsivo** para todos los dispositivos
- **Efectos hover** interactivos en productos
- **Tipografía legible** y jerarquía clara
- **Colores profesionales** y coherentes

## 🚀 Cómo Usar

### Visualización Local:
1. **Descargar** o clonar el proyecto
2. **Abrir** `index.html` en un navegador web
3. **Navegar** por el catálogo de productos

### Personalización:
1. **Reemplazar imágenes** en las etiquetas `<img>`
2. **Modificar productos** en el HTML
3. **Ajustar estilos** en `style.css`
4. **Probar responsividad** en diferentes dispositivos

## 📱 Compatibilidad y Responsividad

### Dispositivos Soportados:
- ✅ **Desktop** (1200px+): 3 columnas de productos
- ✅ **Tablet** (768px-1024px): 2 columnas de productos
- ✅ **Móvil** (hasta 767px): 1 columna de productos
- ✅ **Móvil pequeño** (hasta 480px): Optimizado para pantallas pequeñas

### Navegadores Compatibles:
- ✅ Chrome (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Edge (últimas versiones)

## 🔧 Personalización de Imágenes

### Para Reemplazar las Imágenes Actuales:

1. **Descargar imágenes** de productos deseados
2. **Colocarlas** en la carpeta `assets/img/`
3. **Actualizar las rutas** en el HTML:

```html
<!-- Cambiar esto: -->
<img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center" alt="Camiseta Deportiva">

<!-- Por esto: -->
<img src="assets/img/mi-producto.jpg" alt="Mi Producto">
```

### Formatos Recomendados:
- **Formato**: JPG, PNG o WebP
- **Dimensiones**: 400x400px (cuadradas)
- **Tamaño**: Menos de 100KB por imagen
- **Calidad**: Alta pero optimizada para web

## 📚 Conceptos del Box Model Aplicados

### 1. Margin (Margen Exterior):
- **Uso**: Separación entre productos y secciones
- **Propiedades**: `margin-bottom`, `gap` en flexbox
- **Valores**: Píxeles y rem para consistencia

### 2. Padding (Relleno Interior):
- **Uso**: Espacio interno en tarjetas y botones
- **Propiedades**: `padding` general y específico
- **Valores**: Rem para escalabilidad

### 3. Border (Borde):
- **Uso**: Delimitación visual de tarjetas
- **Propiedades**: `border`, `border-radius`
- **Estilos**: Sólido, colores temáticos

### 4. Width/Height (Dimensiones):
- **Uso**: Control de tamaño de elementos
- **Propiedades**: `width`, `height`, `max-width`
- **Valores**: Píxeles fijos y porcentajes

### 5. Border-radius (Esquinas Redondeadas):
- **Uso**: Diseño moderno y suave
- **Propiedades**: `border-radius`
- **Valores**: Píxeles para consistencia visual

### 6. Box-shadow (Sombras):
- **Uso**: Profundidad y jerarquía visual
- **Propiedades**: `box-shadow`
- **Valores**: Múltiples capas para efectos hover

### 7. Display: Flex:
- **Uso**: Alineación moderna de productos
- **Propiedades**: `display: flex`, `flex-wrap`, `gap`
- **Ventajas**: Espaciado consistente sin margin

## 🎯 Requisitos Académicos Cumplidos

### ✅ Requisitos Técnicos:
- [x] **margin**: Aplicado en múltiples elementos
- [x] **padding**: Usado en todas las tarjetas
- [x] **border**: Implementado en productos y precios
- [x] **width y height**: Controlados en todos los elementos
- [x] **border-radius**: Esquinas redondeadas modernas
- [x] **box-shadow**: Sombras para profundidad
- [x] **display: flex**: Alineación principal del catálogo

### ✅ Estructura del Proyecto:
- [x] **index.html**: Página principal completa
- [x] **assets/css/style.css**: Hoja de estilos organizada
- [x] **assets/img/**: Carpeta para imágenes
- [x] **Mínimo 3 productos**: Implementados 6 productos reales

### ✅ Contenido del Catálogo:
- [x] **Múltiples categorías**: Ropa, zapatos, accesorios, gadgets
- [x] **Estructura HTML base**: Respetada y adaptada
- [x] **Tarjetas de producto**: Diseño tipo tienda online
- [x] **Flexbox**: Alineación moderna de productos

### ✅ Indicaciones de Diseño:
- [x] **Catálogo ordenado**: Layout tipo tienda online
- [x] **Tarjetas (cards)**: Cada producto como tarjeta individual
- [x] **Flexbox**: Para alinear productos
- [x] **Fondo claro y tarjetas con sombra**: Implementado
- [x] **Imágenes responsivas**: Optimizadas y bien ajustadas
- [x] **Tipografía legible**: Jerarquía clara y accesible

## 🚨 Notas Importantes

### Para Estudiantes:
1. **Revisar los comentarios** en el CSS para entender cada aplicación del Box Model
2. **Experimentar** modificando valores de margin, padding y border
3. **Probar la responsividad** en diferentes tamaños de pantalla
4. **Analizar el código HTML** para entender la estructura semántica

### Errores Comunes a Evitar:
1. **No usar box-sizing: border-box** → tamaños inconsistentes
2. **Confundir margin con padding** → espaciado incorrecto
3. **Olvidar border-radius** → diseño cuadrado y anticuado
4. **No usar sombras** → falta de profundidad visual
5. **Ignorar la responsividad** → mala experiencia en móviles

## 📄 Licencia

© 2026 - Proyecto Académico Aplicación de Box Model - Diseño de Sitios Web

---

**Desarrollado como tarea universitaria para demostrar la aplicación del Modelo de Caja CSS**
