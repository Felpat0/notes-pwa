import { useCallback, useEffect, useState } from "react";
import moment from "moment";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { State } from "../../types/redux";
import {
    NoteScreenContainer,
    NoteScreenEditorContainer,
    ShowDateContainer,
    ShowDateText,
    TitleInput,
} from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { strings } from "../../localization/strings";
import { ChecklistType, Note } from "../../types";
import { Editor } from "../../components/Note/Editor";
import { getOrCreateEmptyNote, getNote, updateNote } from "../../storage/notes";
import { Datepicker } from "../../components/Common/Datepicker";
import { Checklist } from "../../components/Common/Checklist";
import {
    createOrUpdateChecklist,
    getNoteChecklist,
} from "../../storage/checklists";

export const NoteScreen: React.FC = () => {
    const { noteId } = useParams();
    const navigate = useNavigate();
    const notesReducer = useSelector((state: State) => state.notes);

    const [currentNote, setCurrentNote] = useState<Note>();
    const [currentChecklist, setCurrentChecklist] = useState<ChecklistType>();

    useEffect(() => {
        if (noteId === "new") {
            const newNote = getOrCreateEmptyNote(noteId);
            setCurrentNote(newNote);
            setCurrentChecklist(getNoteChecklist(newNote.id));
        } else {
            setCurrentNote(getNote(parseInt(noteId)));
            setCurrentChecklist(getNoteChecklist(parseInt(noteId)));
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

    const handleChecklistChange = useCallback((checklist: ChecklistType) => {
        setCurrentChecklist(createOrUpdateChecklist(checklist));
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
                        <Datepicker
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
                    <Checklist
                        checklist={currentChecklist}
                        onChange={handleChecklistChange}
                    />
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
