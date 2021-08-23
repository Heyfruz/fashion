import { createBox, createText } from "@shopify/restyle";

const palette = {
  //NEUTRAL
  black: "#0B0B0B",
  buttonInactive: "#0C0D340D",
  danger: "#FF0058",
  darkGrey: "#8a8d90",
  grey: "#F4F0EF",
  //PRIMARY,
  primary: "#2CB9B0",
  //SECONDARY
  secondary: "#0C0D34",
  slideGrey: "#C4C4C4",
  //Text
  textBody: "#0C0D34B3",
  textButton: "#0C0D34",
  textPrimary: "#0C0D34",
  //NEUTRAL
  white: "#FFFFFF",
};

const theme = {
  borderRadii: {
    l: 25,
    m: 10,
    s: 4,
    xl: 75,
  },
  breakpoints: {},
  colors: {
    button: palette.textButton,
    danger: palette.danger,
    darkGrey: palette.darkGrey,
    hero: palette.white,
    inactive: palette.buttonInactive,
    primary: palette.primary,
    secondary: palette.secondary,
    slideGrey: palette.slideGrey,
    textBody: palette.textBody,
    textPrimaryColor: palette.textPrimary,
    white: palette.white,
  },
  spacing: {
    l: 24,
    m: 16,
    s: 8,
    xl: 40,
  },
  textVariants: {
    body: {
      color: "textBody",
      fontFamily: "SFProDisplayRegular",
      fontSize: 16,
      lineHeight: 24,
    },
    button: {
      color: "button",
      fontFamily: "SFProDisplayMedium",
      fontSize: 15,
      textAlign: "center",
    },
    hero: {
      color: "hero",
      fontFamily: "SFProDisplayBold",
      fontSize: 80,
      lineHeight: 80,
      textAlign: "center",
    },
    title: {
      color: "textPrimaryColor",
      fontFamily: "SFProDisplaySemibold",
      fontSize: 28,
    },
    title2: {
      color: "textPrimaryColor",
      fontFamily: "SFProDisplaySemibold",
      fontSize: 24,
      lineHeight: 30,
    },
  },
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
