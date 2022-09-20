import { useState } from "react";
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

export const NoteScreen: React.FC = () => {
    const { noteId } = useParams();
    const notesReducer = useSelector((state: State) => state.notes);

    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");

    return (
        <NoteScreenContainer>
            <TitleInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={strings.noteScreen.noteTitle}
                borderless
            />
            <NoteScreenEditorContainer>
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    style={{ width: "100%", height: "70vh" }}
                />
            </NoteScreenEditorContainer>
        </NoteScreenContainer>
    );
};
