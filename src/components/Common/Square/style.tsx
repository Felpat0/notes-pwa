import styled from "styled-components";
import { themeColors } from "../../../assets/theme";

export const SquareContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    height: calc(8vw + 5.5rem);
    border-radius: 15px;
    aspect-ratio: 16/9;
    scroll-snap-align: start;
`;

export const SquareText = styled.p`
    font-size: 33px;
    font-weight: bold;
    color: ${themeColors.text4};
    margin: 0;
    padding: 0;
`;

export const SquareSubText = styled.p`
    font-size: 17px;
    font-weight: bold;
    color: ${themeColors.text4};
    margin: 0;
    padding: 0;
`;
