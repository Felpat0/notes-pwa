export const colors = {
    skyblue1: "#7CDEDC",
    blue1: "#090622",
    blue2: "#006494",
    blue3: "#025076",
    purple1: "#A9B3CE",
    purple2: "#944BBB",
    purple3: "#7284A8",
    purple4: "#662C85",
    white1: "#FFFFFF",
    white2: "#e2e2e2",
    black1: "#121212",
    black2: "#262626",
};

export const themeColors = {
    background: colors.blue1,
    text1: colors.white1,
    text2: colors.skyblue1,
    text3: colors.purple1,
    text4: colors.blue1,
    inputBorder: colors.purple2,
    inputPlaceholder: colors.purple3,
    inputBackground: colors.purple1,
    scrollbarColor: colors.skyblue1,
    scrollBarBackground: "transparent",
    noteElementBackground: colors.purple2,
    noteElementBackgroundHover: colors.purple4,
    projectsElementBackground: colors.blue2,
    projectsElementBackgroundHover: colors.blue3,
    modalBackground: colors.black1,
    buttons: {
        primary: {
            enabled: {
                background: colors.blue2,
                text: colors.white1,
            },
            disabled: {
                background: colors.purple3,
                text: colors.white2,
            },
            hovered: {
                background: colors.blue3,
                text: colors.white1,
            },
        },
        secondary: {
            enabled: {
                background: colors.black1,
                text: colors.white1,
            },
            disabled: {
                background: colors.purple3,
                text: colors.white2,
            },
            hovered: {
                background: colors.black2,
                text: colors.white1,
            },
        },
    },
    checkbox: {
        enabled: {
            checked: {
                background: colors.purple2,
                border: colors.purple2,
                check: colors.white1,
            },
            unchecked: {
                background: colors.purple2,
                border: colors.purple2,
                check: colors.white1,
            },
        },

        disabled: {
            checked: {
                background: colors.purple3,
                border: colors.purple3,
                check: colors.white2,
            },
            unchecked: {
                background: colors.purple3,
                border: colors.purple3,
                check: colors.white2,
            },
        },
        hovered: {
            checked: {
                background: colors.purple4,
                border: colors.purple4,
                check: colors.white1,
            },
            unchecked: {
                background: colors.purple4,
                border: colors.purple4,
                check: colors.white1,
            },
        },
    },
};
