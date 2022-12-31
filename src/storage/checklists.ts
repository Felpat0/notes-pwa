import { ChecklistType, Note } from "../types";
import { toChecklistTypeFromLocalStorage } from "../utils/conversions";

export const getEmptyChecklist = (
    showDate?: Date,
    noteId?: Note["id"]
): ChecklistType => {
    return {
        id: getNextChecklistTypeId(),
        showDate,
        noteId,
        items: [],
    };
};

export const getChecklist = (date: Date): ChecklistType => {
    let checklists: ChecklistType[] = JSON.parse(
        localStorage.getItem("checklists") || "[]"
    ).map((checklist: any) => toChecklistTypeFromLocalStorage(checklist));

    const checklist: ChecklistType = checklists.find(
        (checklist: ChecklistType) =>
            checklist.showDate?.getDate() === date.getDate() &&
            checklist.showDate?.getMonth() === date.getMonth() &&
            checklist.showDate?.getFullYear() === date.getFullYear()
    );

    if (!checklist) {
        return getEmptyChecklist(date);
    }
    return checklist;
};

export const getNoteChecklist = (noteId: number): ChecklistType => {
    let checklists: ChecklistType[] = JSON.parse(
        localStorage.getItem("checklists") || "[]"
    ).map((checklist: any) => toChecklistTypeFromLocalStorage(checklist));

    const checklist: ChecklistType = checklists.find(
        (checklist: ChecklistType) => checklist.noteId === noteId
    );

    if (!checklist) return getEmptyChecklist(undefined, noteId);
    return checklist;
};

export const createOrUpdateChecklist = (
    checklist: ChecklistType
): ChecklistType => {
    let checklists: ChecklistType[] = JSON.parse(
        localStorage.getItem("checklists") || "[]"
    ).map((checklist: any) => toChecklistTypeFromLocalStorage(checklist));

    const storedChecklistIndex = checklists.findIndex(
        (storedChecklist: any) => storedChecklist.id === checklist.id
    );

    if (storedChecklistIndex === -1) {
        checklists.push(checklist);
    } else {
        checklists[storedChecklistIndex] = checklist;
    }
    localStorage.setItem("checklists", JSON.stringify(checklists));

    return checklist;
};

export const deleteChecklist = (id: number): void => {
    let checklists: ChecklistType[] = JSON.parse(
        localStorage.getItem("checklists") || "[]"
    ).map((checklist: any) => toChecklistTypeFromLocalStorage(checklist));

    const newChecklists = checklists.filter(
        (checklist: ChecklistType) => checklist.id !== id
    );
    localStorage.setItem("checklists", JSON.stringify(newChecklists));
};

export const getNextChecklistTypeId = (): number => {
    let checklists: ChecklistType[] = JSON.parse(
        localStorage.getItem("checklists") || "[]"
    );
    if (checklists.length === 0) return 1;
    checklists.sort((a, b) => a.id - b.id);

    return checklists[checklists.length - 1].id + 1;
};
