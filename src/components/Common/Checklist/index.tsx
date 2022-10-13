import { useCallback, useState } from "react";
import { CSSProperties } from "styled-components";
import { strings } from "../../../localization/strings";
import { ChecklistType } from "../../../types";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { ChecklistContainer } from "./style";

type Props = {
    checklist: ChecklistType;
    onChange?: (checklist: ChecklistType) => void;
    style?: CSSProperties;
    hideAddCheckbox?: boolean;
};

export const Checklist: React.FC<Props> = ({
    checklist,
    onChange,
    style,
    hideAddCheckbox = false,
}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = useCallback(() => {
        const newChecklist: ChecklistType = {
            ...checklist,
            items: [...checklist.items, { title: inputValue, checked: false }],
        };

        onChange?.(newChecklist);
        setInputValue("");
    }, [onChange, checklist, inputValue]);

    const handleCheckboxChange = useCallback(
        (index: number, value?: boolean, title?: string) => {
            const newChecklist = { ...checklist };
            newChecklist.items[index].checked = value;
            newChecklist.items[index].title = title;
            onChange?.(newChecklist);
        },
        [onChange, checklist]
    );

    const handleDeleteItem = useCallback(
        (index: number) => {
            const newChecklist = { ...checklist };
            newChecklist.items.splice(index, 1);
            onChange?.(newChecklist);
        },
        [onChange, checklist]
    );

    return (
        <ChecklistContainer style={style}>
            {checklist.items?.map((checklistItem, index) => (
                <Checkbox
                    value={checklistItem.checked}
                    onChange={(value) =>
                        handleCheckboxChange(index, value, checklistItem.title)
                    }
                    onDelete={() => {
                        handleDeleteItem(index);
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
