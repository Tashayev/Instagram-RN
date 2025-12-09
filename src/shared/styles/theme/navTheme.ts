import { Theme as RNTheme } from '@react-navigation/native';
import { Colors } from './colors/colorTypes';

export const getNavTheme = (colors: Colors): RNTheme => ({
  dark: colors.backgroundBlack === '#030303',
  colors: {
    background: colors.backgroundWhite,
    primary: colors.accentBlue,
    card: colors.backgroundWhite,
    text: colors.typographyDark,
    border: colors.bordersDefault,
    notification: colors.accentBlue,
  },
  
  fonts: {
    //@ts-ignore
    regular: "normal",
    //@ts-ignore
    medium: "normal",
    light: "normal",
    thin: "normal",
  },
});
