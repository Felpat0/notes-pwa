import { Quill } from "react-quill";
import { StyledQuillEditor } from "./style";

type Props = {
    value: string;
    onChange: (value: string) => void;
};
let Inline = Quill.import("blots/inline");
class BoldBlot extends Inline {}
BoldBlot.blotName = "bold";
BoldBlot.tagName = "strong";
Quill.register("formats/bold", BoldBlot);

const formats = ["bold"];

const Modules = {
    toolbar: [
        [{ header: [1, 2, false] }, { font: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        ["code-block"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
    ],
};

export const Editor: React.FC<Props> = ({ value, onChange }) => {
    return (
        <StyledQuillEditor
            theme="snow"
            value={value}
            onChange={(newValue) => onChange(newValue)}
            modules={Modules}
        />
    );
};
