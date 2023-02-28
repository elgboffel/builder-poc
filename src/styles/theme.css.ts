import { createTheme } from "@vanilla-extract/css";
import { BREAKPOINTS_QUERIES, PX_BASE } from "@styles/config/constants";
import { vars } from "@styles/config/contract.css";
import { commonVars } from "@styles/config/common-vars.css";
import { rem } from "polished";

/* For name color name generation https://colornamer.robertcooper.me/ have been used */
export const color = {
  white: "#fff",
  black: "#000",

  primary: "blue",
  secondary: "green",
  background: "#000",
  error: "red",
  text: "#010101",
  dimmed: "gray",

  link: "darkblue",
  linkHover: "lightblue",

  transparent: "transparent",
};

export const font = {
  montserrat: "'Montserrat', sans-serif",

  text: "$montserrat",
  heading: "$montserrat",
};

export const fontSize = {
  tiny: rem("10px", PX_BASE),
  xs: rem("12px", PX_BASE),
  sm: rem("14px", PX_BASE),
  md: rem(PX_BASE, PX_BASE),
  lg: rem("20px", PX_BASE),
  xl: rem("24px", PX_BASE),
  xxl: rem("28px", PX_BASE),
  jumbo: rem("32px", PX_BASE),

  text: rem(PX_BASE, PX_BASE),
};

export const theme = createTheme(vars, {
  media: BREAKPOINTS_QUERIES,

  color,
  font,
  fontSize,
  ...commonVars,
});
