const sttc = "sttc";
const dnmc = "dnmc";

const assets = ["offline.html", "index.html"];

const self = this;

// install sw
self.addEventListener("install", (e) => {
  console.log(`Installing sw `, e);
  e.waitUntil(
    caches.open(sttc).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// activate sw
self.addEventListener("activate", (e) => {
  console.log(`activating sw`, e);
  e.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(
        names.map((name) => {
          if (name !== dnmc && name !== sttc) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

// fetch
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const resClone = res.clone();

        caches.open(dnmc).then((cache) => {
          cache.put(e.request, resClone);
        });

        return res;
      })
      .catch((err) => caches.match(e.request.url).then((res) => res))
  );
});
