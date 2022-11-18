import { Note } from "../types";

const channel = new BroadcastChannel("notifications");

export const requestNotificationPermission = async () => {
    if (Notification.permission === "granted") {
    }
    await Notification.requestPermission();
    await navigator.serviceWorker.register(
        "/notes-pwa/notifications-service-worker.js"
    );
};

export const scheduleNoteNotification = async (note: Note) => {
    if (!note.showDate) return;
    channel.postMessage({
        tag: new Date().getTime().toString(), // a unique ID
        title: note.title,
        date: note.showDate,
        data: {
            url: `${process.env.PUBLIC_URL}/note/${note.id}`, // pass the current url to the notification
        },
        actions: [
            {
                title: "Open",
                action: "open",
            },
        ],
    });
};

export const sendTestNotificationSW = async (date?: Date) => {
    channel.postMessage({
        title: "Test",
        tag: new Date().getTime().toString(), // a unique ID
        data: {
            url: `${process.env.PUBLIC_URL}/`, // pass the current url to the notification
        },
        actions: [
            {
                title: "Open",
                action: "open",
            },
        ],
        date,
    });
};

export const sendTestNotification = () => {
    new Notification("Test");
};
