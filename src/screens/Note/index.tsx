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
import { scheduleNoteNotification } from "../../utils/notifications";

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

    const handleShowDateChange = useCallback(
        (e: React.ChangeEvent<any>) => {
            handleNoteChange(
                "showDate",
                e.target.value !== ""
                    ? moment(e.target.value, "yyyy-MM-DDThh:mm").toDate()
                    : undefined
            );
            if (
                new Date().getTime() <
                new Date(e.target.value).getTime() + 5000
            )
                scheduleNoteNotification({
                    ...currentNote,
                    showDate:
                        e.target.value !== ""
                            ? moment(
                                  e.target.value,
                                  "yyyy-MM-DDThh:mm"
                              ).toDate()
                            : undefined,
                });
        },
        [currentNote, handleNoteChange]
    );

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
                                          "yyyy-MM-DDThh:mm"
                                      )
                                    : ""
                            }
                            onChange={handleShowDateChange}
                            placeholder={strings.noteScreen.noteShowDate}
                            type={"datetime-local"}
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
