let notifications = [];
const channel = new BroadcastChannel("notifications");

channel.onmessage = (event) => {
    console.log("Received message from main thread", event.data);
    notifications.push(event.data);
};

self.addEventListener("install", (event) => {
    console.log("ServiceWorker installed");

    setInterval(() => {
        for (const notification of notifications) {
            if (
                !notification.date ||
                notification.date.getTime() < new Date().getTime()
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
