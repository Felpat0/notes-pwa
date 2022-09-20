import { Title, TopBarContainer } from "./style";
import { ReactComponent as DrawerIcon } from "./../../../assets/icons/DrawerIcon.svg";
import { ReactComponent as OptionsIcon } from "./../../../assets/icons/OptionsIcon.svg";
import { strings } from "../../../localization/strings";
import { themeColors } from "../../../assets/theme";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const TopBar: React.FC = () => {
    const navigate = useNavigate();
    const handleTitleClick = useCallback(() => {
        navigate("/");
    }, [navigate]);
    return (
        <TopBarContainer>
            <DrawerIcon style={{ cursor: "pointer", paddingLeft: "1rem" }} />
            <Title onClick={handleTitleClick}>{strings.common.appName}</Title>
            <OptionsIcon
                style={{
                    marginLeft: "auto",
                    cursor: "pointer",
                    paddingRight: "1rem",
                    stroke: themeColors.text2,
                }}
            />
        </TopBarContainer>
    );
};
