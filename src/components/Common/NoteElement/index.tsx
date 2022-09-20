import { Note, Project } from "../../../types";
import {
    NoteElementContainer,
    NoteElementOptionIcon,
    NoteElementProject,
    NoteElementTitle,
    NoteElementTitlesContainer,
} from "./style";

type Props = {
    note: Note;
    project?: Project;
    onClick?: (note: Note) => void;
};
export const NoteElement: React.FC<Props> = ({ note, project, onClick }) => {
    return (
        <NoteElementContainer onClick={() => onClick(note)}>
            <NoteElementTitlesContainer>
                <NoteElementTitle>{note.title}</NoteElementTitle>
                {project && (
                    <NoteElementProject>{project.name}</NoteElementProject>
                )}
            </NoteElementTitlesContainer>
            <NoteElementOptionIcon
                style={{
                    cursor: "pointer",
                    paddingRight: "1rem",
                }}
            />
        </NoteElementContainer>
    );
};
