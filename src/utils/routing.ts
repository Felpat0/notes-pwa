export const getNoteRoute = (id: number | string) => formatPath(`/notes/${id}`);

export const getProjectRoute = (id: number | string) =>
    formatPath(`/projects/${id}`);

export const formatPath = (path: string) => {
    return path.replace(/\/$/, "");
};

export const shouldShowOptionsButton = (path: string) => {
    return path === formatPath("");
};
