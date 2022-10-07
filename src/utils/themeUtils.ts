import { themeColors } from "../assets/theme";
import {
    ButtonVariant,
    ButtonVersion,
    CheckboxVariant,
    CheckboxVersion,
} from "../types/ui";

export const getButtonBackgroundColor = (
    variant: ButtonVariant = "primary",
    version: ButtonVersion = "enabled"
): string => {
    return themeColors.buttons[variant][version].background;
};

export const getButtonTextColor = (
    variant: ButtonVariant = "primary",
    version: ButtonVersion = "enabled"
) => {
    return themeColors.buttons[variant][version].text;
};

export const getCheckboxBackgroundColor = (
    variant: CheckboxVariant = "checked",
    version: CheckboxVersion = "enabled"
) => {
    return themeColors.checkbox[version][variant].background;
};

export const getCheckboxBorderColor = (
    variant: CheckboxVariant = "checked",
    version: CheckboxVersion = "enabled"
) => {
    return themeColors.checkbox[version][variant].border;
};

export const getCheckboxCheckColor = (
    variant: CheckboxVariant = "checked",
    version: CheckboxVersion = "enabled"
) => {
    return themeColors.checkbox[version][variant].check;
};
