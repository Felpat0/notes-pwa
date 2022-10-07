import { Note } from "../types";

export const toNoteFromLocalStorage = (note: any): Note => {
    return {
        ...note,
        checklist:
            note.checklist?.map((item: any) =>
                toChecklistItemFromLocalStorage(item)
            ) || [],
        showDate: note.showDate ? new Date(note.showDate) : undefined,
        createdAt: new Date(note.createdAt),
        updatedAt: new Date(note.updatedAt),
    };
};

export const toChecklistItemFromLocalStorage = (item: any) => {
    return {
        ...item,
    };
};
