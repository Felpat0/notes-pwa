import { ChecklistType } from "../types";
import { toChecklistTypeFromLocalStorage } from "../utils/conversions";

export const getChecklist = (date: Date): ChecklistType => {
    let checklists: ChecklistType[] = JSON.parse(
        localStorage.getItem("checklists") || "[]"
    ).map((checklist: any) => toChecklistTypeFromLocalStorage(checklist));

    const checklist: ChecklistType = checklists.find(
        (checklist: ChecklistType) =>
            checklist.showDate.getDate() === date.getDate() &&
            checklist.showDate.getMonth() === date.getMonth() &&
            checklist.showDate.getFullYear() === date.getFullYear()
    );

    if (!checklist) {
        return {
            id: getNextChecklistTypeId(),
            showDate: date,
            items: [],
        };
    }
    return checklist;
};

export const createOrUpdateChecklist = (
    checklist: ChecklistType
): ChecklistType => {
    let checklists: ChecklistType[] = JSON.parse(
        localStorage.getItem("checklists") || "[]"
    ).map((checklist: any) => toChecklistTypeFromLocalStorage(checklist));

    const storedChecklistIndex = checklists.findIndex(
        (storedChecklist: any) =>
            checklist.showDate.getDate() ===
                storedChecklist.showDate.getDate() &&
            checklist.showDate.getMonth() ===
                storedChecklist.showDate.getMonth() &&
            checklist.showDate.getFullYear() ===
                storedChecklist.showDate.getFullYear()
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
    checklists.sort((a, b) => b.id - a.id);

    return checklists[checklists.length - 1].id + 1;
};
