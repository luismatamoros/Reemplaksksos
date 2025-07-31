self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('ksk-cache').then(function(cache) {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'js/main.js',
        'data/cencinai.json',
        'data/trabajadores.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});