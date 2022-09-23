import styled from "styled-components";
import { ButtonVariant } from "../../../types/ui";
import {
    getButtonBackgroundColor,
    getButtonTextColor,
} from "../../../utils/themeUtils";

export const StyledButton = styled.button<{
    variant?: ButtonVariant;
}>`
    background-color: ${(props) =>
        getButtonBackgroundColor(
            props.variant,
            props.disabled ? "disabled" : "enabled"
        )};
    color: ${(props) =>
        getButtonTextColor(
            props.variant,
            props.disabled ? "disabled" : "enabled"
        )};
    border-radius: 5px;
    padding: 0.5rem 0.5rem;
    border: none;
    outline: none;

    &:hover {
        cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
        background-color: ${(props) =>
            getButtonBackgroundColor(
                props.variant,
                props.disabled ? "disabled" : "hovered"
            )};
        color: ${(props) =>
            getButtonTextColor(
                props.variant,
                props.disabled ? "disabled" : "hovered"
            )};
        transition: 0.5s;
    }
`;
