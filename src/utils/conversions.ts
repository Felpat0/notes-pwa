import { ChecklistType, Note } from "../types";

export const toNoteFromLocalStorage = (note: any): Note => {
    return {
        ...note,
        showDate: note.showDate ? new Date(note.showDate) : undefined,
        createdAt: new Date(note.createdAt),
        updatedAt: new Date(note.updatedAt),
    };
};

export const toChecklistTypeFromLocalStorage = (item: any): ChecklistType => {
    return {
        ...item,
        showDate: new Date(item.showDate),
    };
};
