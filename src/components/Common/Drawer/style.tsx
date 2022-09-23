import styled from "styled-components";
import Drawer from "react-modern-drawer";
import { themeColors } from "../../../assets/theme";

export const StyledDrawer = styled(Drawer)`
    min-width: calc(10rem + 20vw);
    background-color: ${themeColors.modalBackground} !important;
`;

export const DrawerItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    padding-top: 2rem;
`;

export const DrawerItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${themeColors.text2};
    font-size: calc(1.2rem + 0.7vw);

    &:hover {
        cursor: pointer;
    }
`;
