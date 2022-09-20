import { Note, Project } from ".";

export type State = {
    notes: NotesReducerType;
};
export type NotesReducerType = {
    notes: Note[];
    projects: Project[];
};
