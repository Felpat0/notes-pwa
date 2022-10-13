import { ChecklistType } from "../types";

export const getChecklist = (date: Date): ChecklistType | undefined => {
    const checklists: ChecklistType[] = JSON.parse(
        localStorage.getItem("checklists") || "[]"
    );
    const checklist = checklists.find(
        (checklist: any) =>
            checklist.showDate.getDate() === date.getDate() &&
            checklist.showDate.getMonth() === date.getMonth() &&
            checklist.showDate.getFullYear() === date.getFullYear()
    );
    return checklist;
};

export const updateChecklist = (checklist: ChecklistType[]): void => {
    const checklists: ChecklistType[] = JSON.parse(
        localStorage.getItem("checklists") || "[]"
    );
    const newChecklistType = {
        id: getNextChecklistTypeId(),
        items: checklist,
        showDate: new Date(),
    };
    localStorage.setItem(
        "checklists",
        JSON.stringify([...checklists, newChecklistType])
    );
};

export const deleteChecklist = (id: number): void => {
    const checklists: ChecklistType[] = JSON.parse(
        localStorage.getItem("checklists") || "[]"
    );
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
