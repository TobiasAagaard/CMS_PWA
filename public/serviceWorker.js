const CACHE_NAME = "version_1"

const urlsToCache = ["index.html", "offline.html" ]

this.addEventListener('install', (event) => {
    caches.open(CACHE_NAME).then((cache) => {
        console.log("opend chache")
        return cache.addAll(urlsToCache);
    })
})

this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((res) => {
            return fetch(event.request).catch(() => caches.match('offline.html'))
        })
    )
})

this.addEventListener('activate', (event) => {
    const cacheWhiteList = []
    cacheWhiteList.push(CACHE_NAME)
    event.waitUntil(caches.keys().then((cacheNames) => Promise.all(
        cachesNames.map((cacheNames) => {
            if(!cacheWhiteList.includes(cacheNames)) {
                return cache.delete(cacheNcacheNamesames)
            }
        })
    ) ))
})