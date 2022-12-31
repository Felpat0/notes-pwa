import { Note } from "../types";

export const isNoteEmpty = (note: Note): boolean => {
    return (
        !note.showDate &&
        !note.title &&
        (!note.content ||
            note.content === "<p><br></p>" ||
            note.content === "<p></p>") &&
        (!note.checklist || note.checklist.items.length === 0)
    );
};
