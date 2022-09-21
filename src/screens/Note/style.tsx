import styled from "styled-components";
import { Input } from "../../components/Common/Input";

export const NoteScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

export const TitleInput = styled(Input)`
    font-size: 1.5rem;
    font-weight: 500;
`;

export const ShowDateInput = styled(Input)`
    font-size: 1.5rem;
    font-weight: 500;
    &::-webkit-calendar-picker-indicator {
        filter: invert(1);
        width: 1.2rem;
        height: 1.2rem;
    }
`;

export const NoteScreenEditorContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 10rem;
    margin-top: 1rem;
`;