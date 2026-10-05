const CACHE_NAME = 'new-weaving-3-v3.1.0-azure';

const CORE_ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/data.js',
  './js/i18n.js',
  './js/settings.js',
  './js/system-check.js',
  './js/qrcode.min.js',
  './js/app.js',
  './assets/images/cover.jpg',
  './assets/images/twp_logo.png'
];

const MEDIA_ASSETS = [
  './assets/images/ex1.jpg',
  './assets/images/ex2.jpg',
  './assets/images/ex3.jpg',
  './assets/images/ex4.jpg',
  './assets/images/ex5.jpg',
  './assets/images/ex6.jpg',
  './assets/images/ex7.jpg',
  './assets/images/ex8.jpg',
  './assets/audio/ex1_yinyang.mp3',
  './assets/audio/ex2_buffalo_racing.mp3',
  './assets/audio/ex3_stars_human_nature.mp3',
  './assets/audio/ex4_gorilla_whisperer.mp3',
  './assets/audio/ex5_kimchi.mp3',
  './assets/audio/ex6_same_language.mp3',
  './assets/audio/ex7_oceans_silent_killer.mp3',
  './assets/audio/ex8_fox_and_grapes.mp3'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(CORE_ASSETS);
      await Promise.allSettled(MEDIA_ASSETS.map(url => cache.add(url)));
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Network First for HTML, JS, CSS to ensure updates take effect immediately on reload
  const isCode = url.pathname.endsWith('.html') ||
                 url.pathname.endsWith('.js') ||
                 url.pathname.endsWith('.css') ||
                 url.pathname === '/' ||
                 url.pathname.endsWith('/');

  if (isCode) {
    event.respondWith(
      fetch(event.request).then((response) => {
        if (response && response.status === 200) {
          const toCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache));
        }
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache First for Media Assets (Audio & Images)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response && response.status === 200) {
          const toCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache));
        }
        return response;
      });
    })
  );
});
