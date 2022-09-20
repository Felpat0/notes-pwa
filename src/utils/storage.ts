import { Note } from "../types";

export const toNoteFromLocalStorage = (note: any) => {
    return {
        ...note,
        createdAt: new Date(note.createdAt),
        updatedAt: new Date(note.updatedAt),
    };
};

export const getNotes = (page: number = 1, limit: number = 10): Note[] => {
    const notes: Note[] = JSON.parse(localStorage.getItem("notes") || "[]").map(
        (note: any) => toNoteFromLocalStorage(note)
    );

    const offset = (page - 1) * limit;
    return notes
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .slice(offset, offset + limit);
};

export const getNote = (id: number): Note => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    return toNoteFromLocalStorage(notes.find((note: Note) => note.id === id));
};

export const getOrCreateEmptyNote = (id?: number | "new"): Note => {
    console.log("getOrCreateEmptyNote", id);
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
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));

    return newNote;
};

export const createNote = (note: Note): Note[] => {
    console.log("createNote", note);
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    localStorage.setItem("notes", JSON.stringify([...notes, note]));
    return notes.map((note) => toNoteFromLocalStorage(note));
};

export const updateNote = (note: Note): Note[] => {
    console.log("updateNote", note);
    const notes: Note[] = JSON.parse(localStorage.getItem("notes") || "[]");
    const index = notes.findIndex((n) => n.id === note.id);
    notes[index] = note;
    localStorage.setItem("notes", JSON.stringify(notes));

    return notes;
};

export const createOrUpdateNote = (note: Note) => {
    console.log("createOrUpdateNote", note);
    const notes: Note[] = JSON.parse(localStorage.getItem("notes") || "[]");
    const index = notes.findIndex((n) => n.id === note.id);
    if (index === -1) {
        createNote(note);
    } else {
        updateNote(note);
    }
};

export const deleteNote = (id: number): Note[] => {
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
