import styled from "styled-components";
import { themeColors } from "../../../assets/theme";

export const TopBarContainer = styled.div`
    background-color: ${themeColors.background};
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    width: 100vw;
    z-index: 1;
`;

export const Title = styled.p`
    font-size: 28px;
    font-weight: heavy;
    margin: 0;
    margin-left: 1rem;
    padding: 0;
    color: ${themeColors.text2};
    cursor: pointer;
`;
