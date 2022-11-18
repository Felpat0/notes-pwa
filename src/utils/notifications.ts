import { Note } from "../types";

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
    const reg = await navigator.serviceWorker.getRegistration();
    const timestamp = new Date(note.showDate).getTime();

    reg.showNotification(note.title, {
        tag: note.id.toString(), // a unique ID
        //@ts-ignore
        showTrigger: new TimestampTrigger(timestamp), // set the time for the push notification
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
