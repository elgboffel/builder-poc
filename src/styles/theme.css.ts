import { createTheme } from "@vanilla-extract/css";
import { BREAKPOINTS_QUERIES } from "@styles/config/constants";
import { vars } from "@styles/config/contract.css";
import { commonVars } from "@styles/config/common-vars.css";

/* For name color name generation https://colornamer.robertcooper.me/ have been used */
export const colors = {
  white: "#fff",
  harbour: "#495867",
  eastlakeGold: "#c18c5d",
  jadedGinger: "#ce796b",
  greenbrier: "#4c956c",

  heading: "#1B1C1E",
  body: "#1B1C1E",
  transparent: "transparent",
};

export const fonts = {
  montserrat: "'Montserrat', sans-serif",

  text: "$montserrat",
  heading: "$montserrat",
};

export const theme = createTheme(vars, {
  media: BREAKPOINTS_QUERIES,

  colors,
  fonts,
  ...commonVars,
});
