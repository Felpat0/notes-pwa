import { Project } from "../types";
import { toProjectFromLocalStorage } from "../utils/conversions";

export const getProjects = (
    page: number = 1,
    limit: number = 10
): Project[] => {
    const projects: Project[] = JSON.parse(
        localStorage.getItem("projects") || "[]"
    );
    const offset = (page - 1) * limit;

    return projects
        .map((project) => toProjectFromLocalStorage(project))
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .slice(offset, offset + limit);
};

export const getProject = (id: Project["id"]): Project | undefined => {
    const projects = getProjects();
    return projects.find((project) => project.id === id);
};

export const getOrCreateEmptyProject = (
    name: Project["name"],
    id?: Project["id"] | "new"
): Project => {
    if (!id || id === "new") {
        const project = {
            id: getNextProjectId(),
            name,
            notes: [],
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        createProject(project);

        return project;
    }
    const project = getProject(id);
    if (project) {
        return project;
    }
};

export const createProject = (project: Project): Project[] => {
    const projects: Project[] = JSON.parse(
        localStorage.getItem("projects") || "[]"
    );
    localStorage.setItem("projects", JSON.stringify([...projects, project]));
    return projects.map((project) => toProjectFromLocalStorage(project));
};

export const updateProject = (project: Project): Project[] => {
    const projects: Project[] = JSON.parse(
        localStorage.getItem("projects") || "[]"
    );
    let index = projects.findIndex((p) => p.id === project.id);
    if (index === -1) index = projects.length;
    projects[index] = project;
    projects[index].updatedAt = new Date();
    localStorage.setItem("projects", JSON.stringify(projects));

    return projects;
};

export const createOrUpdateProject = (project: Project) => {
    const projects: Project[] = JSON.parse(
        localStorage.getItem("projects") || "[]"
    );
    const index = projects.findIndex((p) => p.id === project.id);
    if (index === -1) {
        createProject(project);
    } else {
        updateProject(project);
    }
};

export const deleteProject = (id: Project["id"]): Project[] => {
    const projects: Project[] = JSON.parse(
        localStorage.getItem("projects") || "[]"
    );
    const index = projects.findIndex((p) => p.id === id);
    projects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(projects));

    return projects;
};
export const getNextProjectId = (): Project["id"] => {
    const projects: Project[] = JSON.parse(
        localStorage.getItem("projects") || "[]"
    );
    const ids = projects.map((project) => project.id);
    if (ids.length === 0) return 1;
    return Math.max(...ids) + 1;
};
