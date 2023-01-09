let notifications = [];
const channel = new BroadcastChannel("notifications");

channel.onmessage = (event) => {
    console.log("Received message from main thread", event.data);
    const index = notifications.findIndex(
        (notification) => notification.data.noteId === event.data.data.noteId
    );

    if (index === -1) notifications.push(event.data);
    else notifications[index] = event.data;
};

self.addEventListener("install", (event) => {
    console.log("ServiceWorker installed");

    setInterval(() => {
        console.log(notifications);
        for (const notification of notifications) {
            if (
                !notification.date ||
                notification.date.getTime() <= new Date().getTime()
            ) {
                const { title, date, ...options } = notification;
                self.registration.showNotification(title, options);
                notifications = notifications.filter((n) => n !== notification);
            }
        }
    }, 5000);
});

self.addEventListener("notificationclick", (event) => {
    // On notification click, go to the URL specified in the data
    if (event.action === "open")
        event.waitUntil(self.clients.openWindow(event.notification.data.url));
});

self.addEventListener("fetch", function (event) {
    console.log("Registering fetch listener");
    if (event.request.url.indexOf("http") !== 0) return;
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // Cache hit - return response
            if (response) {
                return response;
            }

            // Clone the request
            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(function (response) {
                // Check if we received a valid response
                if (
                    !response ||
                    response.status !== 200 ||
                    response.type !== "basic"
                ) {
                    console.log("Fetch failed");
                    return response;
                }
                console.log("Caching response");
                // Clone the response
                var responseToCache = response.clone();

                caches.open(CACHE_NAME).then(function (cache) {
                    console.log("Respnse cached");
                    cache.put(event.request, responseToCache);
                });

                return response;
            });
        })
    );
});
