# CFO Personal · v3.14

Aplicación de gestión financiera personal — single-file HTML, sin dependencias de servidor, con sincronización en la nube via Firebase Firestore.

## 🚀 Cómo usar

1. Descarga `CFO_Personal_v3_14.html`
2. Ábrelo en cualquier navegador moderno (Chrome, Firefox, Edge, Safari)
3. Tus datos se guardan automáticamente en Firestore y en `localStorage` como respaldo local

> También puedes publicarlo en GitHub Pages para acceder desde cualquier dispositivo.

## 📋 Módulos

| Pestaña | Descripción |
|---|---|
| **Hoy** | Dashboard principal: liquidez, acciones pendientes, KPIs, recomendaciones automáticas |
| **Presupuesto** | Ingresos, gastos fijos/variables, análisis presupuestal quincenal y mensual |
| **Compromisos** | Plan quincenal: bills, deudas y metas con check de completado |
| **Movimientos** | Registro de ingresos y gastos con categorías, método de pago y cuenta |
| **Calculadora** | Simulador de amortización de deudas |
| **Deudas** | Gestión de deudas con tasa, saldo, pagos y vencimientos |
| **Patrimonio** | Net worth: activos + ahorros vs. deudas, con proyección a 12 meses |
| **Dashboard** | ⭐ Análisis de gastos por categoría, evolución histórica, proyección de deudas y flujo de caja |
| **Datos** | Exportar / importar backup JSON, configuración general |

## ⭐ Dashboard Financiero (v3.14)

La pestaña **Dashboard** (antes "Proyecciones") es un centro de análisis con:

- **Selector de mes**: analiza cualquier mes de los últimos 6
- **KPIs del mes**: ingresos, gastos, ahorro neto, tasa de ahorro y deuda total
- **Distribución de gastos**: pie chart + barras de porcentaje por categoría
- **Top 8 gastos del mes**: mayores transacciones individuales
- **Evolución 6 meses**: ingresos vs. gastos vs. ahorro neto (barras + línea)
- **Gastos por categoría histórico**: barras apiladas de los 6 meses
- **Proyección de deudas**: card por deuda con fecha de liquidación, interés total, y gráfica de evolución de saldos a 12 meses
- **Flujo de caja proyectado**: 6 meses con datos reales del pasado y proyección del presupuesto configurado

## 🛠️ Stack

```
React 18.2        (UMD CDN — sin build)
Recharts 2.12.7   (gráficas)
Firebase 9.23.0   (Firestore — sincronización en la nube)
IBM Plex Sans + Fraunces (Google Fonts)
localStorage      (fallback local)
```

## 🔗 Integración Smart Wishlist Pro

CFO Personal se comunica bidireccionalmente con **Smart Wishlist Pro** (si está abierto en la misma sesión del navegador) via `localStorage` y Firestore:

- Agregar item en CFO → aparece en SWP
- Depositar ahorro en CFO → actualiza progreso en SWP
- Marcar compra en SWP → se refleja en CFO

## 📁 Estructura del repositorio

```
CFO_Personal_v3_14.html   ← App completa (single file)
README.md
```

## 📄 Versiones

| Versión | Cambios |
|---|---|
| v3.14 | Dashboard Analítico: gastos por categoría, evolución 6 meses, proyección de deudas y flujo de caja |
| v3.13 | Sync en tiempo real Firestore, SWP Bridge, metas con aporte quincenal fijo |
| v3.x  | Wishlist, Plan quincenal, Calculadora de deudas |

---

*Desarrollado por Lawrence · Uso personal*
