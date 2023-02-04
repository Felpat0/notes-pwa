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
    event.notification.close();
    // On notification click, go to the URL specified in the data
    event.waitUntil(
        clients
            .matchAll({
                type: "window",
            })
            .then((clientList) => {
                for (const client of clientList) {
                    if (
                        client.url === event.notification.data.url &&
                        "focus" in client
                    )
                        return client.focus();
                }
                if (clients.openWindow)
                    return clients.openWindow(event.notification.data.url);
            })
    );
    /* if (event.action === "open")
        event.waitUntil(self.clients.openWindow(event.notification.data.url)); */
});
