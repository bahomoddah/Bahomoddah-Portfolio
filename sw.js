self.addEventListener("install", e => {
    console.log("Install!");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./assets/css/styles.css", "./assets/js/main.js", "./assets/img/logo.png", "./assets/img/logo + bg short.png"])
        })
    )
})

self.addEventListener("fetch", e => {
    console.log(`Intercepting fetch request for : ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(respone => {
            return respone || fetch(e.request);
        })
    )
})