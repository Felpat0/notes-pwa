import styled from "styled-components";
import { themeColors } from "../../../assets/theme";

export const ModalContainer = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    justify-content: center;
    align-items: center;

    animation: fadeIn 0.3s;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 80vw;
    max-height: 80vh;
    overflow: auto;
    background-color: ${themeColors.modalBackground};
    border-radius: 15px;
    color: ${themeColors.text1};
`;

export const ModalTitle = styled.h1`
    font-size: 1.5rem;
    margin: 0;
`;

export const ModalTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.5rem 0 0.7rem 0.7rem;
`;

export const ModalChildrenContainer = styled.div`
    padding: 0.7rem;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: auto;
`;
