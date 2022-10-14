import {
    ProjectElementArrowIcon,
    ProjectElementContainer,
    ProjectElementTitle,
} from "./style";

type Props = {
    title: string;
    onClick?: () => void;
    style?: React.CSSProperties;
};
export const SectionElement: React.FC<Props> = ({ title, onClick, style }) => {
    return (
        <ProjectElementContainer onClick={onClick} style={style}>
            <ProjectElementTitle>{title}</ProjectElementTitle>
            <ProjectElementArrowIcon />
        </ProjectElementContainer>
    );
};
