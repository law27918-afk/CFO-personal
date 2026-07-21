# CFO Personal

Centro financiero personal — aplicación de un solo archivo HTML, sin servidor, sin nube y sin build. Todo tu historial vive en el `localStorage` de tu propio navegador.

## 🚀 Cómo usar

1. Descarga `index.html` (o clona el repo).
2. Ábrelo directamente en cualquier navegador moderno (Chrome, Firefox, Edge, Safari), o publícalo en GitHub Pages / cualquier hosting estático.
3. Tus datos se guardan automáticamente en `localStorage`. No hay cuentas, no hay backend, no se envía nada a ningún servidor.

## 📋 Pantallas

| Pestaña | Descripción |
|---|---|
| **Hoy** | Dashboard principal: liquidez actual, KPIs (patrimonio neto, deuda, ahorro acumulado, tasa de ahorro), acciones pendientes accionables y recomendaciones automáticas. |
| **Movimientos** | Registro de ingresos, gastos y ahorro con categorías, búsqueda, chips de filtro y agrupación por día. |
| **Metas & Wishlist** | Metas de ahorro con aportes manuales y progreso visual; wishlist con precio y % que representa sobre tu liquidez actual. |
| **Gasolina** | Bitácora de cargas de combustible: medidor circular de tanque, km/L, costo por km, autonomía estimada e historial. |
| **Datos & Configuración** | Tema claro/oscuro, categorías editables, estado de guardado local, exportar/importar respaldo en JSON y borrado total de datos. |

## 🛠️ Stack

```
React 18.2       (UMD CDN — sin build)
Babel Standalone (JSX compilado en el navegador)
IBM Plex Sans + IBM Plex Mono + Fraunces (Google Fonts)
localStorage     (única fuente de persistencia — no hay nube)
```

No hay Firebase, Firestore, ni ninguna otra dependencia de servidor. El panel de "Sincronización" en Datos & Configuración simplemente confirma que el guardado es local a tu dispositivo.

## 🎨 Diseño

- Dos temas (claro / oscuro) vía `data-theme` en el contenedor raíz, con variables CSS (`--bg`, `--surface`, `--primary`, `--accent`, etc.) — cambio instantáneo, sin parpadeo ni recarga.
- Layout responsivo con `@container` queries: sidebar + topbar oculto en escritorio (≥880px), barra de navegación inferior tipo píldora en móvil.
- Tipografía: Fraunces para números destacados y títulos serif, IBM Plex Sans para texto de interfaz, IBM Plex Mono (tabular nums) para todas las cifras monetarias.

## 📁 Estructura del repositorio

```
index.html               ← App completa (single file)
manifest.webmanifest     ← Metadatos PWA
sw.js                    ← Service worker (cache offline del shell + CDNs)
icon-192.png / icon-512.png / icon-maskable-512.png
README.md
```

## 💾 Respaldo de datos

Como todo vive en `localStorage`, se recomienda exportar un respaldo JSON periódicamente desde **Datos & Configuración → Respaldo → Exportar**. Ese mismo archivo se puede reimportar en cualquier momento (o en otro dispositivo) con **Importar**.

---

*Uso personal.*
