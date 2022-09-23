import styled from "styled-components";
import { themeColors } from "../../../assets/theme";

export const SquareContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    height: calc(6vw + 6rem);
    border-radius: 15px;
    aspect-ratio: 16/9;
    scroll-snap-align: start;
`;

export const SquareText = styled.p`
    font-size: calc(0.5vw + 1.2rem);
    font-weight: bold;
    color: ${themeColors.text4};
    margin: 0;
    padding: 0;
    text-align: center;
`;

export const SquareSubText = styled.p`
    font-size: calc(0.5vw + 0.8rem);
    font-weight: bold;
    color: ${themeColors.text4};
    margin: 0;
    padding: 0;
    text-align: center;
`;
