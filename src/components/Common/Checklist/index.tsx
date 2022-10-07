import { useCallback, useState } from "react";
import { CSSProperties } from "styled-components";
import { strings } from "../../../localization/strings";
import { ChecklistItem } from "../../../types";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { ChecklistContainer } from "./style";

type Props = {
    checklistItems: ChecklistItem[];
    onChange?: (checklistItems: ChecklistItem[]) => void;
    style?: CSSProperties;
    hideAddCheckbox?: boolean;
    noteId?: number;
};

export const Checklist: React.FC<Props> = ({
    checklistItems,
    onChange,
    style,
    hideAddCheckbox = false,
    noteId,
}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = useCallback(() => {
        if (!noteId) return;
        const newChecklistItems = [
            ...checklistItems,
            { checked: false, title: inputValue, noteId },
        ];
        onChange?.(newChecklistItems);
        setInputValue("");
    }, [onChange, checklistItems, inputValue, noteId]);

    const handleCheckboxChange = useCallback(
        (index: number, value?: boolean, title?: string) => {
            const newChecklistItems = [...checklistItems];
            newChecklistItems[index].checked = value;
            newChecklistItems[index].title = title;
            onChange?.(newChecklistItems);
        },
        [onChange, checklistItems]
    );

    return (
        <ChecklistContainer style={style}>
            {checklistItems.map((checklistItem, index) => (
                <Checkbox
                    value={checklistItem.checked}
                    onChange={(value) =>
                        handleCheckboxChange(index, value, checklistItem.title)
                    }
                    onDelete={() => {
                        const newChecklistItems = [...checklistItems];
                        newChecklistItems.splice(index, 1);
                        onChange?.(newChecklistItems);
                    }}
                    key={index}
                >
                    <Textarea
                        value={checklistItem.title}
                        onChange={(e) =>
                            handleCheckboxChange(
                                index,
                                checklistItem.checked,
                                e.target.value
                            )
                        }
                        style={{ maxWidth: "55vw", minWidth: "55vw" }}
                    />
                </Checkbox>
            ))}
            {!hideAddCheckbox && (
                <Checkbox value={false} disabled>
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyUp={(event) => {
                            event.code === "Enter" && handleInputChange();
                        }}
                        onBlur={handleInputChange}
                        style={{
                            minWidth: "22rem",
                            display: "flex",
                            flexGrow: 1,
                        }}
                        placeholder={strings.noteScreen.newCheckboxPlaceholder}
                        borderless
                    />
                </Checkbox>
            )}
        </ChecklistContainer>
    );
};
