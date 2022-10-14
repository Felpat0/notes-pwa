import styled from "styled-components";
import { Input } from "../Input";

export const StyledDatepicker = styled(Input)`
    type: date;
    font-size: 1.5rem;
    font-weight: 500;
    min-width: 100%;
    &::-webkit-calendar-picker-indicator {
        filter: invert(1);
        width: 1.2rem;
        height: 1.2rem;
    }
`;
