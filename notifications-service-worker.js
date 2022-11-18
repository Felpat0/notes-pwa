self.addEventListener("install", (event) =>
    console.log("ServiceWorker installed")
);

self.addEventListener("notificationclick", (event) => {
    // On notification click, go to the URL specified in the data
    if (event.action === "open")
        event.waitUntil(self.clients.openWindow(event.notification.data.url));
});
