import moment from "moment";
import { useCallback } from "react";
import { Project } from "../../../types";
import {
    ProjectElementContainer,
    ProjectElementDeleteIcon,
    ProjectElementSubtitle,
    ProjectElementTitle,
    ProjectElementTitlesContainer,
} from "./style";

type Props = {
    project: Project;
    onClick?: (project: Project) => void;
    onDelete?: (project: Project) => void;
};

export const ProjectElement: React.FC<Props> = ({
    project,
    onClick,
    onDelete,
}) => {
    const handleDeleteClick = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation();
            onDelete?.(project);
        },
        [onDelete, project]
    );

    return (
        <ProjectElementContainer onClick={() => onClick(project)}>
            <ProjectElementTitlesContainer>
                <ProjectElementTitle>{project.name}</ProjectElementTitle>
                <ProjectElementSubtitle>
                    {moment(project.createdAt).format("DD/MM/YYYY")}
                </ProjectElementSubtitle>
            </ProjectElementTitlesContainer>
            {handleDeleteClick && (
                <ProjectElementDeleteIcon onClick={handleDeleteClick} />
            )}
        </ProjectElementContainer>
    );
};
