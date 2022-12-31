import { useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import { StyledQuillEditor } from "./style";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const Modules = {
    toolbar: [
        [{ size: ["small", false, "large", "huge"] }, { font: [] }],
        ["bold", "italic", "underline", "blockquote"],
        ["code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
    ],
    clipboard: {
        matchVisual: false,
    },
};

export const Editor: React.FC<Props> = ({ value, onChange }) => {
    const editorRef = useRef<ReactQuill>(null);

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.focus();
        }
    }, [editorRef]);

    return (
        <StyledQuillEditor
            theme={"snow"}
            value={value}
            onChange={onChange}
            modules={Modules}
            ref={editorRef}
        />
    );
};
