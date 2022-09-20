import styled from "styled-components";
import { themeColors } from "../../assets/theme";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

export const GreetingText = styled.p`
    font-size: 34px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: ${themeColors.text3};
`;

export const NameText = styled.p`
    font-size: 44px;
    font-weight: heavy;
    margin: 0;
    padding: 0;
    color: ${themeColors.text2};
`;

export const NoteElementsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    margin-top: 1rem;
`;
