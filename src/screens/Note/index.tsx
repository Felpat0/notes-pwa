import { useCallback, useEffect, useState } from "react";
import moment from "moment";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { State } from "../../types/redux";
import {
    NoteScreenContainer,
    NoteScreenEditorContainer,
    ShowDateContainer,
    ShowDateInput,
    ShowDateText,
    TitleInput,
} from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { strings } from "../../localization/strings";
import { getNote, getOrCreateEmptyNote, updateNote } from "../../utils/storage";
import { Note } from "../../types";
import { getNoteRoute } from "../../utils/routing";
import { Editor } from "../../components/Note/Editor";

export const NoteScreen: React.FC = () => {
    const { noteId } = useParams();
    const navigate = useNavigate();
    const notesReducer = useSelector((state: State) => state.notes);

    const [currentNote, setCurrentNote] = useState<Note>();

    useEffect(() => {
        if (noteId === "new") {
            const newNote = getOrCreateEmptyNote(noteId);
            setCurrentNote(newNote);
            navigate(getNoteRoute(newNote.id));
        } else {
            setCurrentNote(getNote(parseInt(noteId)));
        }
    }, [noteId, notesReducer.notes, navigate]);

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
                        type={"text"}
                        borderless
                    />
                    <ShowDateContainer>
                        <ShowDateText>
                            {strings.noteScreen.noteShowDate}
                        </ShowDateText>
                        <ShowDateInput
                            value={
                                currentNote.showDate
                                    ? moment(currentNote.showDate).format(
                                          "yyyy-MM-DD"
                                      )
                                    : ""
                            }
                            onChange={(e) =>
                                handleNoteChange(
                                    "showDate",
                                    e.target.value !== ""
                                        ? moment(
                                              e.target.value,
                                              "yyyy-MM-DD"
                                          ).toDate()
                                        : undefined
                                )
                            }
                            placeholder={strings.noteScreen.noteShowDate}
                            type={"date"}
                            borderless
                        />
                    </ShowDateContainer>
                    <NoteScreenEditorContainer>
                        <Editor
                            value={currentNote.content}
                            onChange={(newContent) =>
                                handleNoteChange("content", newContent)
                            }
                        />
                    </NoteScreenEditorContainer>
                </>
            )}
        </NoteScreenContainer>
    );
};
