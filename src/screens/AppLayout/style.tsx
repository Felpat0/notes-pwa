import styled from "styled-components";
import { themeColors } from "../../assets/theme";

export const AppLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100vw;
    background-color: ${themeColors.background};
    color: ${themeColors.text1};
`;

export const OutletContainer = styled.div`
    display: flex;
    margin-top: 60px;
    padding: 0 calc(1rem + 2vw);
`;
