export const getNoteRoute = (id: number | string) => formatPath(`note/${id}`);

export const formatPath = (path: string) => {
    return path.replace(/\/$/, "");
};

export const shouldShowOptionsButton = (path: string) => {
    return path === formatPath("");
};
