import { themeColors } from "../assets/theme";
import { ButtonVariant, ButtonVersion } from "../types/ui";

export const getButtonBackgroundColor = (
    variant?: ButtonVariant,
    version?: ButtonVersion
): string => {
    return themeColors.buttons[variant || "primary"]?.[version || "enabled"]
        ?.background;
};

export const getButtonTextColor = (
    variant?: ButtonVariant,
    version?: ButtonVersion
) => {
    return themeColors.buttons[variant || "primary"]?.[version || "enabled"]
        ?.text;
};
