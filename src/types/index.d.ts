export type Note = {
    id: number;
    title: string;
    content: string;
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
