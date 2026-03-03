// Use absolute URLs so this works reliably on Vercel and ensures correct scope.
const CACHE_NAME = "top-daily-tips-v3";
const CORE_ASSETS = [
  "/",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

self.addEventListener("install",(event)=>{
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE_ASSETS)).then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate",(event)=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.map(k=>k===CACHE_NAME?null:caches.delete(k)))).then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",(event)=>{
  const req = event.request;
  if(req.method !== "GET") return;

  const url = new URL(req.url);

  // Network-first for navigations (prevents being stuck on old index.html/app.js after deploys)
  if(req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html")){
    event.respondWith(
      fetch(req)
        .then(res=>{
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(req, copy));
          return res;
        })
        .catch(()=>caches.match(req).then(r=>r || caches.match("/index.html") || caches.match("/")))
    );
    return;
  }

  // Cache-first for same-origin assets, with background update
  if(url.origin === self.location.origin){
    event.respondWith(
      caches.match(req).then(cached=>{
        const fetchPromise = fetch(req).then(res=>{
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(req, copy));
          return res;
        }).catch(()=>cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  // Default: just fetch
  event.respondWith(fetch(req));
});
