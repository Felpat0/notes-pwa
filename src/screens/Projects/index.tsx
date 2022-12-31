import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Button } from "../../components/Common/Button";
import { Center } from "../../components/Common/Center";
import { confirmAlert } from "../../components/Common/ConfirmModal";
import { ProjectElement } from "../../components/Common/ProjectElement";
import { Title } from "../../components/Common/Title";
import { strings } from "../../localization/strings";
import { deleteProject, getProjects } from "../../storage/projects";
import { Project } from "../../types";
import { getProjectRoute } from "../../utils/routing";
import { ProjectsScreenContainer } from "./style";

export const ProjectsScreen: React.FC = () => {
    const [projects, setProjects] = useState(getProjects());
    const navigate = useNavigate();

    const updateProjects = useCallback(() => {
        setProjects(getProjects());
    }, []);

    const handleDeleteProject = useCallback(
        (project: Project) => {
            deleteProject(project.id);
            toast.success(strings.toasts.projectDeleted);
            updateProjects();
        },
        [updateProjects]
    );

    const handleProjectTrashClick = useCallback(
        (project: Project) => {
            confirmAlert({
                message: strings.alerts.deleteProject,
                onConfirm: () => handleDeleteProject(project),
                onCancel: () => {},
            });
        },
        [handleDeleteProject]
    );

    const handleNewProjectClick = useCallback(() => {
        navigate(getProjectRoute("new"));
    }, [navigate]);

    const handleProjectClick = useCallback(
        (project: Project) => {
            navigate(getProjectRoute(project.id));
        },
        [navigate]
    );

    return (
        <ProjectsScreenContainer>
            <Title>{strings.projectsScreen.projects}</Title>
            {projects && projects.length > 0 ? (
                projects.map((project) => (
                    <ProjectElement
                        project={project}
                        onClick={handleProjectClick}
                        onDelete={handleProjectTrashClick}
                        key={project.id}
                    />
                ))
            ) : (
                <Center style={{ gap: "1rem" }}>
                    <div>{strings.projectsScreen.noProjects}</div>
                    <Button onClick={handleNewProjectClick}>
                        {strings.projectsScreen.createProject}
                    </Button>
                </Center>
            )}
        </ProjectsScreenContainer>
    );
};
