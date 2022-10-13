export type Note = {
    id: number;
    title: string;
    content: string;
    showDate?: Date;
    createdAt: Date;
    updatedAt: Date;
    projectId?: number;
};

export type ChecklistType = {
    id: number;
    title?: string;
    items: ChecklistItemType[];
    showDate: Date;
    createdAt?: Date;
    updatedAt?: Date;
};

export type Project = {
    id: number;
    name: string;
    notes?: Note[];
};

export type ChecklistItemType = {
    title: string;
    checked: boolean;
};
