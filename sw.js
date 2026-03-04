// Service Worker (network-first for app shell to avoid stale UI)
const CACHE_NAME = 'tdt-cache-v10-1772618090';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin
  if (url.origin !== self.location.origin) return;

  // Network-first for navigations (HTML) and core JS/CSS so updates always land.
  const isNav = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
  const isCore = url.pathname === '/app.js' || url.pathname === '/styles.css' || url.pathname === '/index.html' || url.pathname === '/';

  if (isNav || isCore) {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(req);
          const cache = await caches.open(CACHE_NAME);
          cache.put(req, fresh.clone());
          return fresh;
        } catch (e) {
          const cached = await caches.match(req);
          return cached || Response.error();
        }
      })()
    );
    return;
  }

  // Cache-first for everything else (images, etc.)
  event.respondWith(
    caches.match(req).then((cached) =>
      cached || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      })
    )
  );
});
