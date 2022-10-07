import { CSSProperties, useState } from "react";
import { strings } from "../../../localization/strings";
import { Button } from "../../Common/Button";
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
    closable?: boolean;
};

export const Section: React.FC<Props> = ({
    title,
    children,
    style,
    titleStyle,
    scrollerStyle,
    rightIcon,
    closable = false,
}) => {
    const [isClosed, setIsClosed] = useState(false);

    return (
        <SectionContainer style={style}>
            <SectionTitleContainer>
                <SectionTitle style={titleStyle}>{title}</SectionTitle>
                {rightIcon}
                {closable && (
                    <Button
                        onClick={() => setIsClosed(!isClosed)}
                        style={{ marginLeft: "auto" }}
                    >
                        {isClosed ? strings.common.open : strings.common.close}
                    </Button>
                )}
            </SectionTitleContainer>
            {!isClosed && (
                <SectionScroller style={scrollerStyle}>
                    {children}
                </SectionScroller>
            )}
        </SectionContainer>
    );
};
