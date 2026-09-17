# AlsizTech — Landing Page y Hub Corporativo

Sitio web oficial y Hub de entrada para **AlsizTech** (Desarrollo de Software, Aplicaciones Móviles y Plataformas Web). Diseñado bajo los principios de layout de **AntiGravity** y el estándar de componentes pulidos de **Impeccable**, cumpliendo estrictamente con el **Manual de Marca V3.0** y las pautas de accesibilidad **WCAG 2.1 AA**.

---

## 🚀 Inicio Rápido

### Opción 1: Servidor Local Integrado (Cero dependencias externas)
Ejecute en la terminal:
```bash
node server.js
```
Abra en su navegador: [http://localhost:3000](http://localhost:3000)

### Opción 2: Apertura Directa
Puede abrir directamente `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).

---

## 🎨 Sistema de Diseño (Brand Guidelines V2.0)

| Token / Elemento | Valor / Especificación | Aplicación | Rango Contraste WCAG |
| :--- | :--- | :--- | :--- |
| **Fondo Principal** | `#F8FAFC` (Nieve) / `#FFFFFF` | Superficie general limpia y minimalista | Base |
| **Texto Principal** | `#0F172A` (Gris Oscuro Slate 900) | Titulares y lectura de alto impacto | **17.06:1 (Supera AAA)** |
| **Texto Secundario** | `#475569` / `#64748B` (Slate) | Descripciones, subtítulos y metadatos | **7.24:1 (Supera AA)** |
| **Color Primario** | `#2563EB` (Azul Principal) | Botones principales (Primary CTA) | **5.17:1 sobre blanco** |
| **Color Secundario** | `#06B6D4` (Turquesa / Cian) | Estados hover interactivos, acentos e íconos | **7.35:1 en dark footer** |
| **Color de Acento** | `#885CF6` (Morado) | Badges y detalles sutiles | Acento |
| **Superficie Oscura**| `#0F172A` con bordes `#1E293B` | Footer corporativo y tarjetas de métricas | Contraste óptimo |
| **Tipografía Titulares** | **Montserrat** (wght: 500, 600, 700, 800) | H1, H2, H3, H4, Isotipo, Botones | Estructura e innovación |
| **Tipografía Lectura** | **Inter** (wght: 400, 500, 600) | Párrafos, formularios, listas y UI | Legibilidad y legibilidad móvil |
| **Estilo Visual** | Geométrico, `border-radius: 12px-16px`, micro-interacciones hover Turquesa | Minimalismo sobrio y moderno | Impeccable Polish |

---

## 🧭 Arquitectura de Marca y Filosofía Verbal

* **Marca Madre 100% Neutral:** Lenguaje estrictamente comercial y técnico. Trato de *"usted"*. Sin terminología religiosa ni sesgos de nicho en la comunicación general de la página principal.
* **Dual Gateway (Bifurcación Estratégica en el Hero):**
  * **AlsizTech Business:** Soluciones para Empresas (ERPs ligeros, CRMs, plataformas SaaS, integraciones API e IA aplicada).
  * **AlsizTech Ministries:** Soluciones para Organizaciones (Apps oficiales para iglesias y fundaciones, gestión de membresía y discipulado, escuelas virtuales).
* **Propuesta de Valor Central:** Software a la medida con garantía por contrato. Plazos cumplidos, precio cerrado sin costos imprevistos y código de total propiedad del cliente.
* **Tagline Oficial:** *"AlsizTech — Tecnología que cumple."*

---

## 📁 Estructura del Proyecto

```text
AlsizTech/
├── assets/
│   ├── alsiztech_icon_gradient.svg   # Isotipo "A fluida" en gradiente azul-cian
│   ├── alsiztech_logo_claro.svg       # Logotipo completo para fondos claros
│   ├── alsiztech_logo_oscuro.svg      # Logotipo completo para el footer oscuro
│   ├── alsiztech_app_icon_light.svg   # Ícono de app versión clara
│   ├── alsiztech_app_icon_dark.svg    # Ícono de app versión oscura
│   ├── alsiztech_icon_solid.svg       # Isotipo sólido
│   └── alsiztech_logo_monocromo.svg   # Logotipo monocromático
├── index.html                         # Estructura semántica, accesibilidad y contenido
├── styles.css                         # Tokens de diseño, layout AntiGravity y micro-interacciones
├── script.js                          # Lógica interactiva: Calculadora de Proyecto, modal nativo y menú
├── server.js                          # Servidor local ligero de desarrollo
└── README.md                          # Documentación del proyecto
```

---

## 🛠️ Secciones Implementadas

1. **Navbar Flotante:** Logotipo vectorial oficial, enlaces semánticos, Primary CTA ("Cotizar proyecto") y menú responsive accesible con drawer para dispositivos móviles.
2. **Hero Section con Dual Gateway:** Titular enfocado en cumplimiento (*"Software a la medida. Plazos a la medida."*), badge de garantía y 2 tarjetas de acceso rápido hacia *AlsizTech Business* y *AlsizTech Ministries*. Incluye barra de métricas (100% Entregas a tiempo, $0 Costos imprevistos, 100% Código propietario, SLA garantizado).
3. **Diferenciadores Defendibles (Grid 4 columnas):**
   - 01. Cumplimiento verificable (Penalización por contrato si hay demora).
   - 02. Calidad técnica (Código limpio sin plantillas genéricas desechables).
   - 03. Soporte continuo (Capacitación y mantenimiento post-lanzamiento).
   - 04. Mayordomía del presupuesto (Solución idónea sin sobrecostos innecesarios).
4. **Portafolio de Servicios (Grid UI con Hover Turquesa `#06B6D4`):**
   - Apps Móviles (iOS/Android, Flutter/React Native, tiendas incluidas).
   - Plataformas Web y SaaS Escalables.
   - Software a la Medida e Integraciones (ERP, CRM, facturación, APIs).
   - IA Aplicada y Automatización (Modelos LLM, búsqueda semántica).
   - Sitios Web y E-Commerce de Alto Rendimiento (SEO técnico, velocidad 95+).
   - Soporte y Evolución Continua (Retainers y SLAs).
5. **Prueba Social y Casos de Estudio:** Banda tecnológica limpia (Flutter, React Native, Node.js, Python, PostgreSQL, AWS, Google Cloud, Docker) y 3 tarjetas con métricas de impacto real (-42% tiempo administrativo, +180% retención de usuarios, 65% ahorro en procesamiento con IA).
6. **Calculadora Interactiva de Proyecto (High-Converting Component):** Herramienta que calcula en tiempo real los sprints estimados y alcances según la solución seleccionada, vertical y estado de madurez, con botón directo de cotización.
7. **Modal Nativo Accesible (`<dialog>`):** Formulario con validaciones, compromiso de respuesta en < 24 horas y foco atrapado automáticamente por el navegador sin librerías pesadas.
8. **Footer Institucional Oscuro (`#0F172A`):** Logotipo versión oscura, enlaces a verticales, estándares técnicos, políticas de privacidad y garantía, y tagline final *"AlsizTech — Tecnología que cumple."*

---

## ♿ Accesibilidad (WCAG 2.1 AA)

- **Contraste verificado:**
  - Texto `#0F172A` sobre `#F8FAFC`: **17.06:1** (Supera ampliamente el estándar AAA de 7:1).
  - Azul `#2563EB` en botones con texto blanco: **5.17:1** (Cumple AA de 4.5:1).
  - Enlaces activos `#1D4ED8` sobre fondo blanco: **6.70:1** (Supera AA).
  - Acento `#06B6D4` en footer oscuro `#0F172A`: **7.35:1** (Supera AA para elementos gráficos y texto mediano).
- **Semántica & Teclado:** Skip link integrado (`Saltar al contenido principal`), uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, y estados `:focus-visible` claramente delineados.
- **Soporte `prefers-reduced-motion`:** Las animaciones y transiciones se atenúan automáticamente para usuarios con sensibilidad al movimiento.

