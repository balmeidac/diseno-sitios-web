# Semana 11 - Modelo de Caja y Posicionamiento

Material educativo sobre el modelo de caja CSS, propiedades de display, visibility, opacity, overflow y técnicas de posicionamiento.

## 📋 Descripción del Proyecto

Esta semana se enfoca en los conceptos fundamentales del modelo de caja CSS y las propiedades que controlan la visualización y posicionamiento de elementos en una página web. El contenido incluye explicaciones detalladas, ejemplos prácticos y ejercicios resueltos para dominar estos conceptos esenciales.

## 🎯 Objetivos de Aprendizaje

- Comprender el modelo de caja CSS y sus componentes
- Dominar las propiedades de margin, border y padding
- Diferenciar entre el modelo de caja estándar y alternativo
- Aplicar correctamente las propiedades display, visibility y opacity
- Controlar el contenido que se desborda con overflow
- Utilizar diferentes técnicas de posicionamiento CSS
- Resolver problemas comunes de layout y espaciado
- Aplicar buenas prácticas en el uso de propiedades CSS

## 📁 Estructura del Proyecto

```
semana-11/
├── index.html              # Página principal del material educativo
├── README.md               # Este archivo de documentación
└── img/                    # Imágenes para ejemplos (opcional)
    ├── TA.jpg             # Imagen para Tarjeta A
    ├── TB.png             # Imagen para Tarjeta B
    └── logotipo1.png      # Imagen para comparación visual
```

## 📚 Contenido Teórico

### 1. Modelo de Caja (Box Model)
- **Definición**: Concepto fundamental que describe cómo los elementos HTML son estructurados
- **Componentes**:
  - **Contenido**: Área donde se muestra texto, imágenes u otros elementos
  - **Relleno (Padding)**: Espacio entre contenido y borde
  - **Borde (Border)**: Línea que rodea el relleno y contenido
  - **Margen (Margin)**: Espacio exterior que separa elementos

### 2. Margen (Margin)
- **Definición**: Espacio transparente que rodea el borde de un elemento
- **Características**:
  - Puede tener valores positivos y negativos
  - Se suma al tamaño total del elemento
  - Permite separación entre elementos
- **Propiedades**:
  - `margin-top`, `margin-right`, `margin-bottom`, `margin-left`
  - `margin` (todos los lados simultáneamente)

### 3. Borde (Border)
- **Definición**: Línea ubicada entre margen y relleno
- **Características**:
  - Cada lado puede tener estilo, grosor y color diferentes
  - En modelo estándar se suma a width/height
  - En modelo alternativo ocupa parte del espacio definido
- **Propiedades**:
  - `border-top`, `border-right`, `border-bottom`, `border-left`
  - `border-width`, `border-style`, `border-color`
  - `border` (todos los bordes simultáneamente)

### 4. Relleno (Padding)
- **Definición**: Espacio entre borde y contenido
- **Características**:
  - No admite valores negativos
  - El fondo se extiende por el área de relleno
  - Separa el contenido del borde
- **Propiedades**:
  - `padding-top`, `padding-right`, `padding-bottom`, `padding-left`
  - `padding` (todos los lados simultáneamente)

### 5. Contenido y Modelos de Caja
- **Modelo Estándar**: `width` y `height` solo afectan al contenido
- **Modelo Alternativo**: `width` y `height` incluyen padding y border
- **Propiedad `box-sizing`**:
  - `content-box` (estándar)
  - `border-box` (alternativo)

### 6. Propiedad Display
- **Valores Principales**:
  - `block`: Elemento en bloque, nueva línea, ancho completo
  - `inline`: Elemento en línea, ignora width/height
  - `inline-block`: Elemento en línea con propiedades de bloque
  - `flex`: Contenedor flexible
  - `grid`: Contenedor de cuadrícula
  - `none`: No se muestra y no ocupa espacio

### 7. Propiedad Visibility
- **Valores**:
  - `visible`: Elemento visible normal
  - `hidden`: Elemento oculto pero ocupa espacio
  - `collapse`: Para tablas, oculta sin ocupar espacio

### 8. Propiedad Opacity
- **Valores**: 0 (transparente) a 1 (opaco)
- **Características**:
  - Afecta al elemento y sus hijos
  - Útil para animaciones y transiciones
  - Puede expresarse como decimal o porcentaje

### 9. Propiedad Overflow
- **Valores**:
  - `visible`: Contenido se muestra fuera de límites
  - `hidden`: Contenido recortado
  - `scroll`: Barras de desplazamiento siempre visibles
  - `auto`: Barras solo si es necesario
- **Propiedades específicas**:
  - `overflow-x`: Desbordamiento horizontal
  - `overflow-y`: Desbordamiento vertical

### 10. Posicionamiento
- **Valores de `position`**:
  - `static`: Flujo normal del documento
  - `relative`: Relativo a posición original
  - `fixed`: Fijo a ventana del navegador
  - `absolute`: Relativo a ancestro posicionado
  - `sticky`: Híbrido entre relative y fixed

## 🛠️ Ejercicios Prácticos

### Ejercicio 3.2.1: Box Model Card
- **Objetivo**: Comprender el modelo de caja y comparar configuraciones
- **Contenido**: Dos tarjetas con diferentes padding y border
- **Mini-retos**:
  - Cambiar a `content-box` y compensar anchos
  - Añadir `outline` para depuración
  - Crear tercera tarjeta sin margen

### Ejercicio 3.2.2: Display vs Visibility vs Opacity
- **Objetivo**: Comparar métodos de ocultación de elementos
- **Contenido**: Notificaciones con diferentes estados de visibilidad
- **Mini-retos**:
  - Evitar foco en `opacity:0`
  - Componente accesible con tecla Esc
  - Animación con `prefers-reduced-motion`

## 📝 Características del Material Educativo

### Diseño Visual
- **Esquema de colores rojo/azul turquesa** temático
- **Navegación interna** con anclajes suaves
- **Tablas comparativas** para propiedades CSS
- **Bloques de código** con sintaxis resaltada
- **Demostraciones visuales** interactivas

### Contenido Interactivo
- **Ejemplos visuales** de cada propiedad
- **Comparaciones lado a lado** de diferentes valores
- **Tablas de referencia** rápida
- **Ejercicios prácticos** con soluciones
- **Errores comunes** y cómo evitarlos

## 🚀 Cómo Usar

### Material Educativo
1. **Abrir** `index.html` en un navegador web
2. **Navegar** por las secciones teóricas
3. **Observar** las demostraciones visuales
4. **Practicar** con los ejercicios propuestos
5. **Experimentar** modificando los ejemplos

### Ejercicios Prácticos
1. **Copiar** el código de los ejercicios
2. **Modificar** los valores de las propiedades
3. **Observar** los cambios en el navegador
4. **Resolver** los mini-retos propuestos
5. **Experimentar** con diferentes combinaciones

### Servir Localmente (Opcional)
```bash
# Para el material educativo
cd semana-11
python -m http.server 8000

# O con Node.js
npx http-server
```

## 🎨 Características del Diseño

### Material Educativo
- **Esquema de colores rojo/azul turquesa** diferenciador
- **Navegación intuitiva** con enlaces internos
- **Secciones bien organizadas** por temas
- **Demostraciones visuales** claras
- **Tablas comparativas** informativas

### Ejemplos y Demostraciones
- **Cajas visuales** con diferentes propiedades
- **Comparaciones lado a lado** de valores
- **Efectos interactivos** de posicionamiento
- **Demostraciones de overflow** con contenido largo
- **Ejemplos de display** con diferentes elementos

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

- **Box Model**: Estructura fundamental de elementos CSS
- **Margin**: Espacio exterior entre elementos
- **Border**: Línea decorativa alrededor de elementos
- **Padding**: Espacio interior entre contenido y borde
- **Box-sizing**: Modelo de caja estándar vs alternativo
- **Display**: Comportamiento visual de elementos
- **Visibility**: Control de visibilidad manteniendo espacio
- **Opacity**: Transparencia de elementos
- **Overflow**: Manejo de contenido que excede contenedor
- **Positioning**: Técnicas de posicionamiento de elementos

## 🔧 Personalización

### Modificar Colores
Editar variables CSS en el archivo:
```css
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #4ecdc4;
  --text-color: #333;
  --bg-color: #f8f9fa;
}
```

### Agregar Nuevas Demostraciones
1. Crear nuevas clases CSS en la sección de estilos
2. Agregar elementos HTML en las secciones correspondientes
3. Actualizar la navegación si es necesario
4. Documentar el nuevo ejemplo

### Optimizar para Dispositivos
1. Revisar media queries en el CSS
2. Ajustar breakpoints según necesidades
3. Probar en diferentes tamaños de pantalla
4. Optimizar demostraciones para móviles

## 🚨 Errores Comunes y Soluciones

### Box Model
- **Error**: No unificar `box-sizing` → resultados inconsistentes
- **Solución**: Usar `* { box-sizing: border-box; }` globalmente

### Margin vs Padding
- **Error**: Confundir margin (externa) con padding (interna)
- **Solución**: Recordar que margin separa elementos, padding separa contenido

### Colapsado de Márgenes
- **Error**: Olvidar colapsado de márgenes verticales
- **Solución**: Usar padding o bordes para evitar colapsado

### Display vs Visibility
- **Error**: Ocultar con `opacity:0` pero mantener interacción
- **Solución**: Añadir `pointer-events: none` si es necesario

### Posicionamiento
- **Error**: Elementos absolutos sin ancestro posicionado
- **Solución**: Asegurar que el contenedor tenga `position: relative`

## 📄 Licencia

© 2026 - Curso de Diseño de Sitios Web - Material educativo

---

**Desarrollado como parte del curso de Diseño de Sitios Web - Semana 11**
