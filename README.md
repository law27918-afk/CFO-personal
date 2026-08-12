# CFO Personal · v4.0

Aplicación de gestión financiera personal — single-file HTML, sin build, sincronizada en la nube vía Firebase Firestore (con `localStorage` como caché/respaldo local instantáneo).

Rediseño premium completo (v4.0): 6 pantallas, look & feel consistente (Fraunces + IBM Plex Sans/Mono, paleta verde bosque/dorado), tema claro/oscuro y responsive real (sidebar en desktop, bottom nav en móvil).

## 🚀 Cómo usar

1. Abre `index.html` en cualquier navegador moderno (Chrome, Firefox, Edge, Safari), o publícalo en Vercel/GitHub Pages.
2. Inicia sesión con correo/contraseña (Firebase Auth) — la primera vez, crea tu cuenta desde la propia pantalla de login.
3. Tus datos se guardan automáticamente en Firestore (documento único) y en `localStorage` como caché local.

### 🔐 Seguridad (una sola vez, en la consola de Firebase)

1. **Authentication → Sign-in method → Email/Password** → habilitar.
2. Crea tu cuenta desde la propia app ("¿Primera vez? Crea una cuenta") **antes** del siguiente paso.
3. **Firestore Database → Reglas** → pega el contenido de [`firestore.rules`](./firestore.rules) y publica.

Cada cuenta tiene su propio espacio de datos aislado (documentos con ID `<uid>__<clave>`), tanto por convención en el código como reforzado por las reglas de Firestore. Si alguien más se registra con su propio correo, su app arranca vacía y no puede ver ni tocar tus datos — la única excepción intencional es el documento de ahorro compartido en pareja (`shared__babe_ahorro`), visible para cualquier cuenta autenticada.

## 📋 Pantallas

| Pantalla | Descripción |
|---|---|
| **Hoy** | Liquidez actual, KPIs (patrimonio, deuda, ahorro, tasa de ahorro), acciones pendientes, recomendaciones, resumen de metas y wishlist |
| **Movimientos** | Buscador + chips de categoría, alta de transacciones (modal), historial agrupado por día con subtotal |
| **Metas & Wishlist** | Grid de metas de ahorro (% hero, barra de progreso, aportar) y wishlist (precio, % de tu liquidez) |
| **Presupuesto** | Sub-nav *Presupuesto actual* (card por categoría con barra de salud) / *Planeador* (KPIs de ingreso/fijos, sliders de reparto Metas·Ahorro·Deseos, aplicar al presupuesto) |
| **Gasolina** | Gauge circular del tanque, KPIs de rendimiento, registrar carga, historial con mini-gauge |
| **Datos & Configuración** | Apariencia (tema), categorías editables, estado de sincronización con Firestore, exportar/importar backup JSON, zona de peligro |

## 🛠️ Stack

```
React 18.2 + Babel Standalone   (UMD CDN, JSX en el navegador — sin build)
Firebase 9.23.0                 (Firestore — documento único con todo el estado)
IBM Plex Sans + IBM Plex Mono + Fraunces (Google Fonts)
localStorage                    (caché local / carga instantánea)
```

## 📁 Estructura del repositorio

```
index.html              ← App completa (single file)
firestore.rules         ← Reglas de seguridad (desplegar manualmente en Firebase)
manifest.webmanifest
sw.js
icon-192.png / icon-512.png / icon-maskable-512.png
README.md
```

## 📄 Versiones

| Versión | Cambios |
|---|---|
| v4.0 | Reconstrucción completa según el handoff de rediseño premium (6 pantallas). Se retira todo lo anterior: Deudas, Patrimonio, Análisis, Calculadora, Compromisos. Persistencia simplificada a un solo documento de Firestore. |
| v3.x | Versión anterior (múltiples pestañas: Presupuesto, Compromisos, Deudas, Patrimonio, Dashboard analítico, Calculadora) — ver historial de git. |

---

*Desarrollado por Lawrence · Uso personal*
