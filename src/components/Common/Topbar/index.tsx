import { Title, TopBarContainer } from "./style";
import { ReactComponent as DrawerIcon } from "./../../../assets/icons/DrawerIcon.svg";
import { ReactComponent as OptionsIcon } from "./../../../assets/icons/OptionsIcon.svg";
import { strings } from "../../../localization/strings";
import { themeColors } from "../../../assets/theme";
import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { formatPath, shouldShowOptionsButton } from "../../../utils/routing";
import { Drawer } from "../Drawer";

export const TopBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const toggleDrawer = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, []);

    const handleTitleClick = useCallback(() => {
        navigate(formatPath("/"));
    }, [navigate]);

    const handleDrawerLinkClick = useCallback(
        (path: string) => {
            console.log(path, formatPath(path));
            navigate(formatPath(path));
            toggleDrawer();
        },
        [navigate, toggleDrawer]
    );

    return (
        <TopBarContainer>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                onItemClick={handleDrawerLinkClick}
                direction="left"
            />
            <DrawerIcon
                style={{ cursor: "pointer", paddingLeft: "1rem" }}
                onClick={toggleDrawer}
            />
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
