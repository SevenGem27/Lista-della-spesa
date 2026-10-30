// Service worker: l'app funziona anche offline, in negozio senza campo.
const CACHE = 'spesa-v3';
const CORE = ['./', './index.html', './manifest.webmanifest', './firebase-config.js', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const put = (key, res) => caches.open(CACHE).then(c => c.put(key, res));

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // pagina: prima la rete (per ricevere aggiornamenti), poi la cache
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(r => { put('./index.html', r.clone()); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  // file del sito (config, icone…): prima la rete, così le modifiche arrivano subito
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req).then(r => { if (r.ok) put(req, r.clone()); return r; })
        .catch(() => caches.match(req))
    );
    return;
  }
  // font e libreria Firebase (versioni fisse): prima la cache
  if (/^fonts\.(googleapis|gstatic)\.com$/.test(url.hostname) || (url.hostname === 'www.gstatic.com' && url.pathname.startsWith('/firebasejs/'))) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(r => {
        if (r.ok || r.type === 'opaque') put(req, r.clone());
        return r;
      }))
    );
  }
  // tutto il resto (Firestore, accesso) passa direttamente alla rete
});
