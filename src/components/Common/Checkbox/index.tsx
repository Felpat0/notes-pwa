import { CheckboxtDeleteIcon } from "../Checklist/style";
import {
    CheckboxContainer,
    CheckboxLabel,
    StyledCheckbox,
    StyledCheckboxTick,
} from "./style";

type Props = {
    value: boolean;
    onChange?: (value: boolean) => void;
    onDelete?: () => void;
    onClick?: () => void;
    children?: string | React.ReactNode;
    disabled?: boolean;
};
export const Checkbox: React.FC<Props> = ({
    value,
    onChange,
    children,
    disabled,
    onDelete,
}) => {
    return (
        <CheckboxContainer>
            <StyledCheckbox
                checked={value}
                onClick={() => onChange && onChange(!value)}
                disabled={disabled}
            >
                {value && (
                    <StyledCheckboxTick checked={value} disabled={disabled}>
                        &#10003;
                    </StyledCheckboxTick>
                )}
            </StyledCheckbox>
            {children && (
                <CheckboxLabel checked={value}>{children}</CheckboxLabel>
            )}
            {onDelete && <CheckboxtDeleteIcon onClick={onDelete} />}
        </CheckboxContainer>
    );
};
