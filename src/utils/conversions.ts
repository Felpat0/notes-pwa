import { ChecklistType, Note, Project } from "../types";

export const toProjectFromLocalStorage = (project: any): Project => {
    return {
        id: project.id,
        name: project.name,
        notes: project.notes.map((note: any) => toNoteFromLocalStorage(note)),
        createdAt: new Date(project.createdAt),
        updatedAt: new Date(project.updatedAt),
    };
};

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
