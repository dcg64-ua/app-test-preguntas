// Service worker: red primero (así siempre ves la última versión si hay conexión)
// y, sin conexión, la copia guardada.
// cache: 'no-cache' obliga a preguntar al servidor si hay versión nueva en vez de usar
// la copia que el navegador guarda ~10 min (GitHub Pages manda max-age=600).
const CACHE = 'quiz-v3';
const FILES = ['./', 'index.html', 'preguntas.json', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'gato.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' }))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    fetch(e.request.url, { cache: 'no-cache', credentials: 'same-origin' })
      .then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
