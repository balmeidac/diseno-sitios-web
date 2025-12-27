# INSTRUCCIONES PARA SUBIR A GITHUB

## Pasos para Subir el Proyecto a GitHub

### 1. Inicializar Git (si no está iniciado)
```bash
cd semana-05
git init
```

### 2. Agregar los archivos
```bash
git add .
```

### 3. Hacer commit inicial
```bash
git commit -m "Landing Page Semana 05: HTML5 y CSS3 profesional"
```

### 4. Agregar la rama remota (si no existe)
```bash
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
```

### 5. Hacer push del proyecto
```bash
git branch -M main
git push -u origin main
```

## Archivo .gitignore Recomendado
```
# Sistema operativo
.DS_Store
Thumbs.db
*.tmp

# IDE
.vscode/
.idea/
*.sublime-project
*.sublime-workspace

# Node (si usas bundlers)
node_modules/
package-lock.json
```

## Estructura Final del Proyecto

```
semana-05/
├── index.html              ✓ Página principal con HTML5 semántico
├── css/
│   └── style.css           ✓ Estilos CSS3 responsivos
├── img/                    ✓ Carpeta para imágenes
├── capturas/               ✓ Carpeta para screenshots
├── README.md               ✓ Documentación del proyecto
└── GITHUB-INSTRUCTIONS.md  ✓ Este archivo
```

## Elementos HTML5 Implementados

✓ DOCTYPE html correcto
✓ Atributo lang="es"
✓ Meta tags esenciales (charset, viewport, description)
✓ Título descriptivo
✓ Header semántico
✓ Nav con role y aria-label
✓ Main como contenedor principal
✓ Sections con id para navegación
✓ Article para contenido editorial
✓ Footer con role="contentinfo"
✓ Enlaces internos y externos

## Características CSS3

✓ Variables CSS (--primary-color, etc.)
✓ Flexbox para layouts
✓ CSS Grid para secciones
✓ Media queries para responsive design
✓ Transiciones suaves
✓ Gradientes
✓ Efectos hover interactivos
✓ Scroll suave

## Navegación

La página está completamente navegable:
- **Menú superior**: Enlaces internos a Inicio, Acerca de, Contacto
- **Botón CTA**: Lleva a la sección de contacto
- **Links en footer**: Acceso rápido a secciones
- **Scroll suave**: Transición fluida entre secciones

## Accesibilidad

- Semántica correcta para lectores de pantalla
- Roles ARIA implementados
- Contraste de colores adecuado
- Enlaces descriptivos

---

**Proyecto completado:** Landing Page Profesional Semana 05
**Autor:** Byron Almeida
**Fecha:** 26 de diciembre de 2025
