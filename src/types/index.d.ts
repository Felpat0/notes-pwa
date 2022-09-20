export type Note = {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    projectId?: number;
};

export type Project = {
    id: number;
    name: string;
    notes?: Note[];
};
