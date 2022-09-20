import { NotesReducerType } from "../../types/redux";

const initialState: NotesReducerType = {
    notes: [],
    projects: [],
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                notes: [...state.notes, action.payload],
            };
        case "ADD_PROJECT":
            return {
                ...state,
                projects: [...state.projects, action.payload],
            };
        case "DELETE_NOTE":
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== action.payload),
            };
        case "DELETE_PROJECT":
            return {
                ...state,
                projects: state.projects.filter(
                    (project) => project.id !== action.payload
                ),
            };
        case "UPDATE_NOTE":
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.payload.id ? action.payload : note
                ),
            };
        case "UPDATE_PROJECT":
            return {
                ...state,
                projects: state.projects.map((project) =>
                    project.id === action.payload.id ? action.payload : project
                ),
            };
        default:
            return state;
    }
};

export default notesReducer;
