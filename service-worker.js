const CACHE_NAME = 'offline-movie-cache';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/movies/movie1.mp4',
  '/movies/movie2.mp4',
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching assets');
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Assets from Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
