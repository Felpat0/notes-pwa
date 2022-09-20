import { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { State } from "../../types/redux";
import {
    NoteScreenContainer,
    NoteScreenEditorContainer,
    TitleInput,
} from "./style";
import { useParams } from "react-router-dom";
import { strings } from "../../localization/strings";
import { getNote, getOrCreateEmptyNote, updateNote } from "../../utils/storage";
import { Note } from "../../types";

export const NoteScreen: React.FC = () => {
    const { noteId } = useParams();
    const notesReducer = useSelector((state: State) => state.notes);

    const [currentNote, setCurrentNote] = useState<Note>();

    useEffect(() => {
        if (noteId === "new") {
            setCurrentNote(getOrCreateEmptyNote(noteId));
        } else {
            setCurrentNote(getNote(parseInt(noteId)));
        }
    }, [noteId, notesReducer.notes]);

    const handleNoteChange = useCallback((key: string, value: any) => {
        setCurrentNote((prev) => {
            const updatedNote = {
                ...prev,
                [key]: value,
            };
            updateNote(updatedNote);
            return updatedNote;
        });
    }, []);

    return (
        <NoteScreenContainer>
            {currentNote && (
                <>
                    <TitleInput
                        value={currentNote.title}
                        onChange={(e) =>
                            handleNoteChange("title", e.target.value)
                        }
                        placeholder={strings.noteScreen.noteTitle}
                        borderless
                    />
                    <NoteScreenEditorContainer>
                        <ReactQuill
                            theme="snow"
                            value={currentNote.content}
                            onChange={(value) =>
                                handleNoteChange("content", value)
                            }
                            style={{ width: "100%", height: "70vh" }}
                        />
                    </NoteScreenEditorContainer>
                </>
            )}
        </NoteScreenContainer>
    );
};
