import { rem } from "polished";
import { BREAKPOINTS, PX_BASE } from "@styles/config/constants";

export const fontWeight = {
  light: "300",
  normal: "400",
  bold: "700",
};

export const letterSpacing = {
  sm: "0.025em",
  md: "0.05em",
  lg: "0.1em",

  text: "0.05em",
  heading: "0.1em",
};

export const lineHeight = {
  sm: "0.8em",
  md: "1em",
  lg: "1.2em",

  text: "1em",
  heading: "1.2em",
};

export const space = {
  0: rem("0px", PX_BASE),
  1: rem("4px", PX_BASE),
  2: rem("8px", PX_BASE),
  3: rem("12px", PX_BASE),
  4: rem("16px", PX_BASE),
  5: rem("20px", PX_BASE),
  6: rem("24px", PX_BASE),
  7: rem("28px", PX_BASE),
  8: rem("32px", PX_BASE),
  9: rem("36px", PX_BASE),
  10: rem("40px", PX_BASE),
  11: rem("44px", PX_BASE),
  12: rem("48px", PX_BASE),
  13: rem("52px", PX_BASE),
  14: rem("56px", PX_BASE),
  15: rem("60px", PX_BASE),
  16: rem("64px", PX_BASE),
  17: rem("68px", PX_BASE),
  18: rem("72px", PX_BASE),
  19: rem("76px", PX_BASE),
  20: rem("80px", PX_BASE),
  21: rem("84px", PX_BASE),
  22: rem("88px", PX_BASE),
  23: rem("92px", PX_BASE),
  24: rem("96px", PX_BASE),
  25: rem("100px", PX_BASE),
  26: rem("104px", PX_BASE),
  27: rem("108px", PX_BASE),
  28: rem("112px", PX_BASE),
  29: rem("116px", PX_BASE),
  30: rem("120px", PX_BASE),

  xxs: rem("4px", PX_BASE),
  xs: rem("8px", PX_BASE),
  sm: rem("16px", PX_BASE),
  md: rem("24px", PX_BASE),
  lg: rem("40px", PX_BASE),
  xl: rem("60px", PX_BASE),
  xxl: rem("90px", PX_BASE),
  jumbo: rem("120px", PX_BASE),
  auto: "auto",
};

export const size = {
  0: rem("0px", PX_BASE),
  1: rem("4px", PX_BASE),
  2: rem("8px", PX_BASE),
  3: rem("12px", PX_BASE),
  4: rem("16px", PX_BASE),
  5: rem("20px", PX_BASE),
  6: rem("24px", PX_BASE),
  7: rem("28px", PX_BASE),
  8: rem("32px", PX_BASE),
  9: rem("36px", PX_BASE),
  10: rem("40px", PX_BASE),
  11: rem("44px", PX_BASE),
  12: rem("48px", PX_BASE),
  13: rem("52px", PX_BASE),
  14: rem("56px", PX_BASE),
  15: rem("60px", PX_BASE),
  16: rem("64px", PX_BASE),
  17: rem("68px", PX_BASE),
  18: rem("72px", PX_BASE),
  19: rem("76px", PX_BASE),
  20: rem("80px", PX_BASE),
  21: rem("84px", PX_BASE),
  22: rem("88px", PX_BASE),
  23: rem("92px", PX_BASE),
  24: rem("96px", PX_BASE),
  25: rem("100px", PX_BASE),
  26: rem("110px", PX_BASE),
  27: rem("120px", PX_BASE),
  28: rem("130px", PX_BASE),
  29: rem("140px", PX_BASE),
  30: rem("150px", PX_BASE),

  smallContainer: `${BREAKPOINTS.bp1}`,
  mediumContainer: `${BREAKPOINTS.bp2}`,
  largeContainer: `${BREAKPOINTS.bp3}`,
  fluid: `2560px`,

  full: "100%",
  fullViewportWidth: "100vw",
  fullViewportHeight: "100vh",
  auto: "auto",
};

export const radii = {
  none: "0",
  sm: "0.125rem",
  default: "0.25rem",
  m: "0.4rem",
  lg: "0.625rem",
  xl: "1rem",
  full: "9999px",
  round: "50%",
  pill: "9999px",
};

export const zIndices = {
  0: "-1",
  1: "100",
  2: "200",
  3: "300",
  4: "400",
  5: "500",
  6: "600",
  7: "700",
  8: "800",
  9: "900",
  subMax: "998",
  max: "999",
};

export const borderWidth = {
  none: "0",
  sm: "1px",
  md: "2px",
  lg: "3px",
};

export const borderRadius = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
};

export const shadow = {
  sm: "rgb(14 18 22 / 35%) 0px 10px 6px -12px, rgb(14 18 22 / 20%) 0px 10px 20px -15px",
  md: "rgb(14 18 22 / 35%) 0px 10px 11px -17px, rgb(14 18 22 / 20%) 0px 10px 20px -15px",
  lg: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
};

export const commonVars = {
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  size,
  radii,
  zIndices,
  borderWidth,
  borderStyle: {},
  borderRadius,
  shadow,
};
