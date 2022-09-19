import { Outlet } from "react-router-dom";
import { TopBar } from "../../components/Common/Topbar";
import { AppLayoutContainer, OutletContainer } from "./style";

export const AppLayout: React.FC = () => {
    return (
        <AppLayoutContainer>
            <TopBar />
            <OutletContainer>
                <Outlet />
            </OutletContainer>
        </AppLayoutContainer>
    );
};
