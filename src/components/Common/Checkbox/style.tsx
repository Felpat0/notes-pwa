import styled from "styled-components";
import {
    getCheckboxBackgroundColor,
    getCheckboxCheckColor,
} from "../../../utils/themeUtils";

export const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
`;

export const CheckboxLabel = styled.p<{ checked?: boolean }>`
    display: block;
    font-size: 1rem;
    font-weight: bold;
    overflow: hidden;
    max-width: 60vw;
    word-wrap: break-word;
    cursor: pointer;
    margin: 0;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    ${(props) => props.checked && "text-decoration: line-through"};
`;

export const StyledCheckbox = styled.div<{
    checked?: boolean;
    disabled?: boolean;
}>`
    width: 1rem;
    height: 1rem;
    border-radius: 0.25rem;
    border: 1px solid #000000;
    background-color: ${(props) =>
        getCheckboxBackgroundColor(
            props.checked ? "checked" : "unchecked",
            props.disabled ? "disabled" : "enabled"
        )};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        background-color: ${(props) =>
            getCheckboxBackgroundColor(
                props.checked ? "checked" : "unchecked",
                "hovered"
            )};
    }
`;

export const StyledCheckboxTick = styled.span<{
    checked?: boolean;
    disabled?: boolean;
}>`
    color: ${(props) =>
        getCheckboxCheckColor(
            props.checked ? "checked" : "unchecked",
            props.disabled ? "disabled" : "enabled"
        )};
`;
