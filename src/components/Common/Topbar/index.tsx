import { Title, TopBarContainer } from "./style";
import { ReactComponent as DrawerIcon } from "./../../../assets/icons/DrawerIcon.svg";
import { ReactComponent as OptionsIcon } from "./../../../assets/icons/OptionsIcon.svg";
import { strings } from "../../../localization/strings";
import { themeColors } from "../../../assets/theme";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { formatPath, shouldShowOptionsButton } from "../../../utils/routing";

export const TopBar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleTitleClick = useCallback(() => {
        navigate(formatPath("/"));
    }, [navigate]);

    return (
        <TopBarContainer>
            <DrawerIcon style={{ cursor: "pointer", paddingLeft: "1rem" }} />
            <Title onClick={handleTitleClick}>{strings.common.appName}</Title>
            {shouldShowOptionsButton(location.pathname) && (
                <OptionsIcon
                    style={{
                        marginLeft: "auto",
                        cursor: "pointer",
                        paddingRight: "1rem",
                        stroke: themeColors.text2,
                    }}
                />
            )}
        </TopBarContainer>
    );
};
