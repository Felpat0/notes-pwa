import { useEffect, useRef } from "react";
import { StyledQuillEditor } from "./style";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const Modules = {
    toolbar: [
        [{ size: ["small", false, "large", "huge"] }, { font: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        ["code-block"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { list: "check" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
    ],
};

export const Editor: React.FC<Props> = ({ value, onChange }) => {
    const editorRef = useRef<any>(null);

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.focus();
        }
    }, [editorRef]);

    return (
        <StyledQuillEditor
            theme="snow"
            value={value}
            onChange={(newValue) => onChange(newValue)}
            modules={Modules}
            ref={editorRef}
        />
    );
};
