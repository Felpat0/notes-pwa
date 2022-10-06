import { KeyboardEvent, useCallback, useState } from "react";
import { CSSProperties } from "styled-components";
import { strings } from "../../../localization/strings";
import { ChecklistItem } from "../../../types";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import { ChecklistContainer } from "./style";

type Props = {
    checklistItems: ChecklistItem[];
    onChange?: (checklistItems: ChecklistItem[]) => void;
    style?: CSSProperties;
};

export const Checklist: React.FC<Props> = ({
    checklistItems,
    onChange,
    style,
}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = useCallback(
        (event: KeyboardEvent<any>) => {
            console.log(event);
            if (event.code !== "Enter") return;
            const newChecklistItems = [
                ...checklistItems,
                { checked: false, title: inputValue },
            ];
            onChange?.(newChecklistItems);
            setInputValue("");
        },
        [onChange, checklistItems, inputValue]
    );

    const handleCheckboxChange = useCallback(
        (index: number, value: boolean) => {
            const newChecklistItems = [...checklistItems];
            newChecklistItems[index].checked = value;
            onChange?.(newChecklistItems);
        },
        [onChange, checklistItems]
    );

    return (
        <ChecklistContainer style={style}>
            {checklistItems.map((checklistItem, index) => (
                <Checkbox
                    value={checklistItem.checked}
                    onChange={(value) => handleCheckboxChange(index, value)}
                    onDelete={() => {
                        const newChecklistItems = [...checklistItems];
                        newChecklistItems.splice(index, 1);
                        onChange?.(newChecklistItems);
                    }}
                    key={index}
                >
                    {checklistItem.title}
                </Checkbox>
            ))}
            <Checkbox value={false} disabled>
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyUp={handleInputChange}
                    style={{ minWidth: "15rem" }}
                    placeholder={strings.noteScreen.newCheckboxPlaceholder}
                    borderless
                />
            </Checkbox>
        </ChecklistContainer>
    );
};
