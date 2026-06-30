const cacheName = 'chandra-associates-v1'
const assetsToCache = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/src/styles/global.css'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache)
    })
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key)
          }
          return null
        })
      )
    )
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached
      }
      return fetch(event.request)
    })
  )
})
