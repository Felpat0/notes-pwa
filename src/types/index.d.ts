export type Note = {
    id: number;
    title: string;
    content: string;
    checklist?: ChecklistItem[];
    showDate?: Date;
    createdAt: Date;
    updatedAt: Date;
    projectId?: number;
};

export type Project = {
    id: number;
    name: string;
    notes?: Note[];
};

export type ChecklistItem = {
    title: string;
    checked: boolean;
    noteId: number;
};
