import styled from "styled-components";
import { themeColors } from "../../../assets/theme";

export const InputContainer = styled.div`
    position: relative;
`;

export const StyledInput = styled.input<{ borderless?: boolean }>`
    height: 25px;
    width: 100%;
    padding-left: 0.5rem;
    &::-webkit-input-placeholder {
        color: ${themeColors.inputPlaceholder};
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
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
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
