import { ChecklistItem, Note } from "../types";
import { toNoteFromLocalStorage } from "./conversions";
import { isNoteEmpty } from "./notes";

export const getUsername = (): string | undefined =>
    localStorage.getItem("username");
export const setUsername = (username: string): void =>
    localStorage.setItem("username", username);

export const getNotes = (page: number = 1, limit: number = 10): Note[] => {
    const notes: Note[] = JSON.parse(localStorage.getItem("notes") || "[]").map(
        (note: any) => toNoteFromLocalStorage(note)
    );

    const offset = (page - 1) * limit;
    return notes
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .slice(offset, offset + limit);
};

export const getNote = (id: Note["id"]): Note | undefined => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    const note = notes.find((note: any) => note.id === id);
    return note ? toNoteFromLocalStorage(note) : undefined;
};

export const getTodaysNotes = (): Note[] => {
    const notes: Note[] = getNotes(1, 99999);
    return notes.filter((note: Note) => {
        if (!note.showDate) {
            return false;
        }
        const today = new Date();
        return (
            note.showDate.getDate() === today.getDate() &&
            note.showDate.getMonth() === today.getMonth() &&
            note.showDate.getFullYear() === today.getFullYear()
        );
    });
};

export const getTodaysChecklist = (): ChecklistItem[] => {
    const notes = getTodaysNotes();
    const checklist: ChecklistItem[] = [];
    notes.forEach((note: Note) => {
        if (note.checklist) {
            note.checklist.forEach((item: ChecklistItem) => {
                checklist.push(item);
            });
        }
    });
    return checklist;
};

export const updateNoteChecklist = (checklist: ChecklistItem[]): void => {
    const notes = getNotes(1, 99999);
    const updatedNotes = notes.map((note: Note) => {
        if (note.checklist) {
            note.checklist = checklist;
        }
        return note;
    });
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
};

export const getOrCreateEmptyNote = (id?: number | "new"): Note => {
    if (id !== "new") {
        const note = getNote(id);
        if (note) {
            return note;
        }
    }

    let notes = getNotes();

    const newNote: Note = {
        id: getNextNoteId(),
        title: "",
        content: "",
        showDate: undefined,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    notes.push(newNote);
    //localStorage.setItem("notes", JSON.stringify(notes));

    return newNote;
};

export const createNote = (note: Note): Note[] => {
    const notes: Note[] = JSON.parse(localStorage.getItem("notes") || "[]");
    localStorage.setItem("notes", JSON.stringify([...notes, note]));
    return notes.map((note) => toNoteFromLocalStorage(note));
};

export const updateNote = (note: Note): Note[] => {
    if (isNoteEmpty(note)) {
        return deleteNote(note.id);
    }
    const notes: Note[] = JSON.parse(localStorage.getItem("notes") || "[]");
    let index = notes.findIndex((n) => n.id === note.id);
    if (index === -1) index = notes.length;
    notes[index] = note;
    notes[index].updatedAt = new Date();
    localStorage.setItem("notes", JSON.stringify(notes));

    return notes;
};

export const createOrUpdateNote = (note: Note) => {
    const notes: Note[] = JSON.parse(localStorage.getItem("notes") || "[]");
    const index = notes.findIndex((n) => n.id === note.id);
    if (index === -1) {
        createNote(note);
    } else {
        updateNote(note);
    }
};

export const deleteNote = (id: Note["id"]): Note[] => {
    const notes: Note[] = JSON.parse(localStorage.getItem("notes") || "[]");
    const index = notes.findIndex((n) => n.id === id);
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));

    return notes;
};

export const getNextNoteId = (): number => {
    const notes: Note[] = JSON.parse(localStorage.getItem("notes") || "[]");
    if (notes.length === 0) return 1;
    return notes[notes.length - 1].id + 1;
};
