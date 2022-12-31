import { strings } from "../localization/strings";
import { ReactComponent as HomeIcon } from "../assets/icons/HomeIcon.svg";
import { ReactComponent as AddIcon } from "../assets/icons/AddIcon.svg";
import styled from "styled-components";
import { themeColors } from "../assets/theme";

const Home = styled(HomeIcon)`
    width: 1.5rem;
    height: 1.5rem;

    path {
        stroke: ${themeColors.text2};
    }
`;

const Add = styled(AddIcon)`
    width: 1.5rem;
    height: 1.5rem;

    path {
        stroke: ${themeColors.text2};
    }
`;

export const drawerItems = [
    {
        text: strings.drawer.home,
        path: "/",
        icon: <Home />,
    },
    {
        text: strings.drawer.createNote,
        path: "notes/new",
        icon: <Add />,
    },
    {
        text: strings.drawer.createProject,
        path: "projects/new",
        icon: <Add />,
    },
    {
        text: "TEST",
        path: "test",
    },
];
