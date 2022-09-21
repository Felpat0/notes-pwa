import { CSSProperties } from "react";
import { SquareContainer, SquareText, SquareSubText } from "./style";
import squareBackground from "./../../../assets/illustrations/SquareBackground.svg";

type Props = {
    text?: string;
    subText?: string;
    style?: CSSProperties;
    onClick?: () => void;
};

export const Square: React.FC<Props> = ({ text, subText, style, onClick }) => {
    return (
        <SquareContainer
            style={{ backgroundImage: `url(${squareBackground})`, ...style }}
            onClick={onClick}
        >
            <SquareText>{text}</SquareText>
            <SquareSubText>{subText}</SquareSubText>
        </SquareContainer>
    );
};
