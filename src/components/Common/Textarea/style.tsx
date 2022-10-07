import styled from "styled-components";

export const StyledTextarea = styled.textarea`
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.05);
    color: inherit;
    border-radius: 15px;

    &:focus {
        outline: none;
        border-color: rgba(255, 255, 255, 0.5);
    }
`;
