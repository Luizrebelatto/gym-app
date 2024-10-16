import "styled-components/native"

declare module "styled-components/native" {
    export interface DefaultTheme {
        colors: {
            primary: {
                orange_dark: string;
                orange: string;
                orange_light: string
            },
            secondary: {
                grey_dark: string;
                grey: string;
                pink_light: string;
            },
            auxiliary: {
                red_dark: string;
                red: string;
                red_light: string;
            },
            gray: {
                gray01: string;
                gray02: string;
                gray03: string;
                gray04: string;
                gray05: string;
            },
            gradient01: {
                color01: string;
                color02: string;
            },
            gradient02: {
                color01: string;
                color02: string;
            }
        }
    }
}