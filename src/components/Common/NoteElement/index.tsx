import moment from "moment";
import { useCallback } from "react";
import { Note, Project } from "../../../types";
import {
    NoteElementContainer,
    NoteElementDeleteIcon,
    NoteElementSubtitle,
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
    const handleDeleteClick = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation();
            onDelete?.(note);
        },
        [onDelete, note]
    );

    const formatSubtitle = useCallback(() => {
        if (project) {
            return (
                project.name +
                " - " +
                moment(note.createdAt).format("DD/MM/YYYY")
            );
        }
        return moment(note.createdAt).format("DD/MM/YYYY");
    }, [note, project]);
    return (
        <NoteElementContainer onClick={() => onClick(note)}>
            <NoteElementTitlesContainer>
                <NoteElementTitle>{note.title}</NoteElementTitle>
                <NoteElementSubtitle>{formatSubtitle()}</NoteElementSubtitle>
            </NoteElementTitlesContainer>
            {handleDeleteClick && (
                <NoteElementDeleteIcon onClick={handleDeleteClick} />
            )}
        </NoteElementContainer>
    );
};
