import styled from "styled-components";
import { themeColors } from "../../../assets/theme";

export const TopBarContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100vw;
`;

export const Title = styled.p`
    font-size: 28px;
    font-weight: heavy;
    margin: 0;
    margin-left: 1rem;
    padding: 0;
    color: ${themeColors.text2};
`;
