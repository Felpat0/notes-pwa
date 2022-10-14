import styled from "styled-components";
import { themeColors } from "../../../assets/theme";

export const StyledTextarea = styled.textarea`
    border: none;
    border-bottom: 2px solid transparent;
    padding: 0.5rem;
    background-color: transparent;
    color: inherit;

    ::-webkit-resizer {
        display: none;
    }

    &:focus {
        outline: none;
        border: none;
        border-bottom: 2px solid ${themeColors.inputBorder};

        ::-webkit-resizer {
            display: block;
        }
    }
`;
