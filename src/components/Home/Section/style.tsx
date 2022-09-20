import styled from "styled-components";
import { themeColors } from "../../../assets/theme";

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SectionTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    margin-top: 1rem;
`;

export const SectionTitle = styled.p`
    font-size: 24px;
    margin: 0;
    padding: 0;
    color: ${themeColors.text1};
`;

export const SectionScroller = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    margin-top: 0.5rem;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
        height: 5px;
    }
    &::-webkit-scrollbar-track {
        background: ${themeColors.scrollBarBackground}; /* color of the tracking area */
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${themeColors.scrollbarColor}; /* color of the scroll thumb */
        border-radius: 20px; /* roundness of the scroll thumb */
    }
    -webkit-overflow-scrolling: touch;
`;
