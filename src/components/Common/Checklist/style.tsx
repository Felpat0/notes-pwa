import styled from "styled-components";
import { themeColors } from "../../../assets/theme";
import { ReactComponent as TrashIcon } from "./../../../assets/icons/TrashIcon.svg";

export const ChecklistContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const CheckboxtDeleteIcon = styled(TrashIcon)`
    padding-right: 1rem;
    stroke: ${themeColors.text1};
    height: 20px;
    cursor: pointer;
    margin-left: auto;
`;
