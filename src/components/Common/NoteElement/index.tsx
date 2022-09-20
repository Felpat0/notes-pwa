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
};
export const NoteElement: React.FC<Props> = ({ note, project }) => {
    return (
        <NoteElementContainer>
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
