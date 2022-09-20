import {
    ProjectElementArrowIcon,
    ProjectElementContainer,
    ProjectElementTitle,
} from "./style";

type Props = {
    onClick?: () => void;
    style?: React.CSSProperties;
};
export const ProjectsElement: React.FC<Props> = ({ onClick, style }) => {
    return (
        <ProjectElementContainer onClick={onClick} style={style}>
            <ProjectElementTitle>{"Projects"}</ProjectElementTitle>
            <ProjectElementArrowIcon />
        </ProjectElementContainer>
    );
};
