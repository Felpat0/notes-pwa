import { DrawerItem, DrawerItemsContainer, StyledDrawer } from "./style";
import { ComponentProps } from "react";
import { drawerItems } from "../../../config/drawer";

type Props = ComponentProps<typeof StyledDrawer> & {
    onItemClick?: (path: string) => void;
};

export const Drawer: React.FC<Props> = (props) => {
    return (
        <StyledDrawer {...props}>
            <DrawerItemsContainer>
                {drawerItems.map((item) => (
                    <DrawerItem
                        key={item.path}
                        onClick={() => props.onItemClick?.(item.path)}
                    >
                        <>
                            {item.icon}
                            {item.text}
                        </>
                    </DrawerItem>
                ))}
            </DrawerItemsContainer>
        </StyledDrawer>
    );
};
