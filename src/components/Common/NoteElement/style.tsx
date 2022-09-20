import styled from "styled-components";
import { themeColors } from "../../../assets/theme";
import { ReactComponent as OptionsIcon } from "./../../../assets/icons/OptionsIcon.svg";

export const NoteElementContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3rem;
    background-color: ${themeColors.noteElementBackground};
    border-radius: 15px;
    padding: 0.5rem 0;
    cursor: pointer;

    &:hover {
        background-color: ${themeColors.noteElementBackgroundHover};
    }
`;

export const NoteElementTitlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 1.5rem;
`;

export const NoteElementTitle = styled.p`
    font-size: 24px;
    font-weight: heavy;
    color: ${themeColors.text1};
    margin: 0;
    padding: 0;
`;

export const NoteElementProject = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: ${themeColors.text2};
    margin: 0;
    padding: 0;
`;

export const NoteElementOptionIcon = styled(OptionsIcon)`
    padding-right: 1rem;
    stroke: ${themeColors.text1};
    padding-right: 1.5rem;
`;