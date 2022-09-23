import styled from "styled-components";
import { themeColors } from "../../../assets/theme";

export const InputContainer = styled.div`
    position: relative;
`;

export const StyledInput = styled.input<{ borderless?: boolean }>`
    height: 25px;
    width: 100%;
    &::-webkit-input-placeholder {
        color: ${themeColors.inputPlaceholder};
        padding-left: 0.5rem;
    }

    ${(props) =>
        props.borderless
            ? `
            color: ${themeColors.text1};
            border: none;
            border-bottom: 2px solid ${themeColors.inputBorder};
            outline: none;
            background: transparent;
            &:focus {
                outline: none;
            }
        `
            : `
            background-color: ${themeColors.inputBackground};
            border: 1px solid black;
            border-radius: 10px;
            &:focus {
                outline: none;
            }
`}
`;

export const InputIconContainer = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -0.5rem;
    width: 18px;
    height: 18px;
    padding-right: 1rem;
`;
