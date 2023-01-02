import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Button } from "../../components/Common/Button";
import { Center } from "../../components/Common/Center";
import { confirmAlert } from "../../components/Common/ConfirmModal";
import { inputModal } from "../../components/Common/InputModal";
import { ProjectElement } from "../../components/Common/ProjectElement";
import { Section } from "../../components/Home/Section";
import { strings } from "../../localization/strings";
import { ReactComponent as AddIcon } from "./../../assets/icons/AddIcon.svg";
import {
    deleteProject,
    getOrCreateEmptyProject,
    getProjects,
} from "../../storage/projects";
import { Project } from "../../types";
import { getProjectRoute } from "../../utils/routing";
import {
    ProjectsScreenContainer,
    ProjectsScreenElementsContainer,
} from "./style";

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
        inputModal({
            message: strings.projectsScreen.projectName,
            onConfirm: (name: string) => {
                getOrCreateEmptyProject(name, "new");
                updateProjects();
            },
            onCancel: () => {},
        });
    }, [updateProjects]);

    const handleProjectClick = useCallback(
        (project: Project) => {
            navigate(getProjectRoute(project.id));
        },
        [navigate]
    );

    return (
        <ProjectsScreenContainer>
            <Section
                title={strings.projectsScreen.projects}
                rightIcon={
                    <AddIcon
                        style={{ cursor: "pointer" }}
                        onClick={handleNewProjectClick}
                    />
                }
            >
                {projects && projects.length > 0 ? (
                    <ProjectsScreenElementsContainer>
                        {projects.map((project) => (
                            <ProjectElement
                                project={project}
                                onClick={handleProjectClick}
                                onDelete={handleProjectTrashClick}
                                key={project.id}
                            />
                        ))}
                    </ProjectsScreenElementsContainer>
                ) : (
                    <Center style={{ gap: "1rem" }}>
                        <div>{strings.projectsScreen.noProjects}</div>
                        <Button onClick={handleNewProjectClick}>
                            {strings.projectsScreen.createProject}
                        </Button>
                    </Center>
                )}
            </Section>
        </ProjectsScreenContainer>
    );
};
