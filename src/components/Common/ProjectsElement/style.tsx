import styled from "styled-components";
import { themeColors } from "../../../assets/theme";
import { ReactComponent as ArrowRightIcon } from "./../../../assets/icons/ArrowRightIcon.svg";

export const ProjectElementContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3rem;
    background-color: ${themeColors.projectsElementBackground};
    border-radius: 15px;
    padding: 0.5rem 0;
    cursor: pointer;

    &:hover {
        background-color: ${themeColors.projectsElementBackgroundHover};
    }
`;

export const ProjectElementTitle = styled.p`
    font-size: 24px;
    font-weight: heavy;
    color: ${themeColors.text1};
    margin: 0;
    padding: 1.5rem;
`;

export const ProjectElementArrowIcon = styled(ArrowRightIcon)`
    padding-right: 1rem;
    stroke: ${themeColors.text1};
`;
