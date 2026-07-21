// ══════════════════════════════════════════════════════
// CFO Personal — Service Worker
// Cache-first para librerías/fuentes de CDN, network-first para el HTML
// (para detectar versión nueva). App 100% local: sin llamadas a backend
// que deban excluirse del cache.
// ══════════════════════════════════════════════════════
var CACHE_NAME = "cfo-personal-v1.0";
var APP_SHELL = "./index.html";

var PRECACHE_URLS = [
  "./",
  APP_SHELL,
  "./manifest.webmanifest",
  "https://unpkg.com/react@18.2.0/umd/react.production.min.js",
  "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone@7.24.7/babel.min.js",
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,340;9..144,440;9..144,500;9..144,560&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
];

var CDN_HOSTS = [
  "unpkg.com",
  "fonts.googleapis.com",
  "fonts.gstatic.com"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return Promise.all(
        PRECACHE_URLS.map(function (url) {
          return cache.add(new Request(url, { mode: "cors" })).catch(function () {
            // Un CDN caído no debe tumbar la instalación completa del SW.
          });
        })
      );
    })
  );
  // No se llama self.skipWaiting() aquí a propósito: se espera a que el usuario
  // recargue, para no interrumpir una sesión activa con un cambio de versión silencioso.
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (k) { return k !== CACHE_NAME; })
          .map(function (k) { return caches.delete(k); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;

  var url = new URL(req.url);

  // HTML de la app: network-first, así detectamos versión nueva en cada carga con red;
  // si no hay red, se sirve la última copia cacheada (offline real).
  if (req.mode === "navigate" || url.pathname.endsWith("index.html")) {
    event.respondWith(
      fetch(req)
        .then(function (res) {
          var copy = res.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(APP_SHELL, copy); });
          return res;
        })
        .catch(function () {
          return caches.match(APP_SHELL).then(function (cached) {
            return cached || caches.match(req);
          });
        })
    );
    return;
  }

  // CDNs de librerías/fuentes: cache-first (son inmutables por versión pineada en la URL).
  if (CDN_HOSTS.indexOf(url.hostname) !== -1) {
    event.respondWith(
      caches.match(req).then(function (cached) {
        if (cached) return cached;
        return fetch(req).then(function (res) {
          var copy = res.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(req, copy); });
          return res;
        });
      })
    );
    return;
  }

  // Todo lo demás: directo a la red (no hay backend propio que cachear).
});
