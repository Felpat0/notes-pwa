import { Note, Project } from "../../../types";
import {
    NoteElementContainer,
    NoteElementDeleteIcon,
    NoteElementProject,
    NoteElementTitle,
    NoteElementTitlesContainer,
} from "./style";

type Props = {
    note: Note;
    project?: Project;
    onClick?: (note: Note) => void;
    onDelete?: (note: Note) => void;
};
export const NoteElement: React.FC<Props> = ({
    note,
    project,
    onClick,
    onDelete,
}) => {
    const handleDeleteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onDelete?.(note);
    };
    return (
        <NoteElementContainer onClick={() => onClick(note)}>
            <NoteElementTitlesContainer>
                <NoteElementTitle>{note.title}</NoteElementTitle>
                {project && (
                    <NoteElementProject>{project.name}</NoteElementProject>
                )}
            </NoteElementTitlesContainer>
            {handleDeleteClick && (
                <NoteElementDeleteIcon onClick={handleDeleteClick} />
            )}
        </NoteElementContainer>
    );
};
