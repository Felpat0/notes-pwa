import { Title, TopBarContainer } from "./style";
import { ReactComponent as DrawerIcon } from "./../../../assets/icons/DrawerIcon.svg";
import { ReactComponent as OptionsIcon } from "./../../../assets/icons/OptionsIcon.svg";
import { strings } from "../../../localization/strings";
import { themeColors } from "../../../assets/theme";

export const TopBar: React.FC = () => {
    return (
        <TopBarContainer>
            <DrawerIcon style={{ cursor: "pointer", paddingLeft: "1rem" }} />
            <Title>{strings.common.appName}</Title>
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
