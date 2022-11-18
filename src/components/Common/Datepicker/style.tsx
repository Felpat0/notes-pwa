import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import { themeColors } from "../../../assets/theme";

export const StyledDatepicker = styled(ReactDatePicker)`
    width: 100%;
    padding-left: 0.5rem;
    &::-webkit-input-placeholder {
        color: ${themeColors.inputPlaceholder};
    }

    color: ${themeColors.text1};
    border: none;
    border-bottom: 2px solid ${themeColors.inputBorder};
    outline: none;
    background: transparent;
    &:focus {
        outline: none;
    }

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */

    font-size: 1rem;
    font-weight: 500;
    min-width: 100%;
    &::-webkit-calendar-picker-indicator {
        filter: invert(1);
        width: 1.2rem;
        height: 1.2rem;
    }
`;
