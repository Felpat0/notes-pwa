import { CSSProperties } from "react";
import {
    SectionContainer,
    SectionScroller,
    SectionTitle,
    SectionTitleContainer,
} from "./style";

type Props = {
    title?: string;
    children?: any;
    style?: CSSProperties;
    titleStyle?: CSSProperties;
    scrollerStyle?: CSSProperties;
    rightIcon?: React.ReactNode;
};

export const Section: React.FC<Props> = ({
    title,
    children,
    style,
    titleStyle,
    scrollerStyle,
    rightIcon,
}) => {
    return (
        <SectionContainer style={style}>
            <SectionTitleContainer>
                <SectionTitle style={titleStyle}>{title}</SectionTitle>
                {rightIcon}
            </SectionTitleContainer>
            <SectionScroller style={scrollerStyle}>{children}</SectionScroller>
        </SectionContainer>
    );
};
