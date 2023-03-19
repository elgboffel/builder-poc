import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "@styles/config/contract.css";

const { zIndices, size, color, shadow, fontWeight, lineHeight } = vars;

const bgColor = color.dimmed;
const textColor = color.primary;

const enterFromRight = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(200px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const enterFromLeft = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(-200px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const exitToRight = keyframes({
  from: {
    opacity: 1,
    transform: "translateX(0)",
  },
  to: {
    opacity: 0,
    transform: "translateX(200px)",
  },
});

const exitToLeft = keyframes({
  from: {
    opacity: 1,
    transform: "translateX(0)",
  },
  to: {
    opacity: 0,
    transform: "translateX(-200px)",
  },
});

const scaleIn = keyframes({
  from: {
    opacity: 0,
    transform: "rotateX(-30deg) scale(0.9)",
  },
  to: {
    opacity: 1,
    transform: "rotateX(0deg) scale(1)",
  },
});

const scaleOut = keyframes({
  from: {
    opacity: 1,
    transform: "rotateX(0deg) scale(1)",
  },
  to: {
    opacity: 0,
    transform: "rotateX(-10deg) scale(0.95)",
  },
});

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});
export const navigationMenuRoot = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  width: size.fullViewportWidth,
  zIndex: zIndices["1"],
});

export const navigationMenuList = style({
  display: "flex",
  justifyContent: "center",
  backgroundColor: color.white,
  padding: 4,
  borderRadius: 6,
  listStyle: "none",
  boxShadow: shadow.md,
  margin: 0,
});

export const navigationMenuListItem = style({
  padding: `${size["2"]} ${size["3"]}`,
  outline: "none",
  userSelect: "none",
  lineHeight: 1,
  borderRadius: 4,
  color: textColor,
});

export const navigationMenuLinkBase = style({
  padding: `${size["2"]} ${size["3"]}`,
  outline: "none",
  userSelect: "none",
  lineHeight: 1,
  borderRadius: 4,
  color: textColor,
  all: "unset",

  ":hover": {
    boxShadow: `0 0 0 2px ${color.primary}`, //TODO
  },
  ":focus": {
    boxShadow: `0 0 0 2px ${color.primary}`, //TODO diff color
  },
});

//TODO
// .NavigationMenuTrigger:focus,
// .NavigationMenuLink:focus {
//   box-shadow: 0 0 0 2px var(--violet7);
// }
// .NavigationMenuTrigger:hover,
// .NavigationMenuLink:hover {
//   background-color: var(--violet3);
// }
export const navigationMenuTrigger = style([
  navigationMenuLinkBase,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: size["1"],
  },
]);

export const navigationMenuLink = style([
  navigationMenuLinkBase,
  {
    display: "block",
    textDecoration: "none",
    lineHeight: 1,
  },
]);

export const navigationMenuContent = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: size.full,
  animationDuration: "250ms",
  animationTimingFunction: "ease",
  selectors: {
    "&[data-motion='from-start']": {
      animationName: enterFromLeft,
    },
    "&[data-motion='from-end']": {
      animationName: enterFromRight,
    },
    "&[data-motion='to-start']": {
      animationName: exitToLeft,
    },
    "&[data-motion='to-end']": {
      animationName: exitToRight,
    },
  },
  "@media": {
    "only screen and (min-width: 600px)": {
      width: "auto",
    },
  },
});

export const navigationMenuIndicator = style({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  height: size["2"],
  top: "100%",
  overflow: "hidden",
  zIndex: zIndices["1"],
  transition: `width, transform 250ms ease`,
  selectors: {
    "&[data-state='visible']": {
      animationName: fadeIn,
    },
    "&[data-state='hidden']": {
      animationName: fadeOut,
    },
  },
});

export const navigationMenuViewport = style({
  position: "relative",
  transformOrigin: "top center",
  marginTop: size["2"],
  width: size.full,
  backgroundColor: color.white,
  borderRadius: 6,
  overflow: "hidden",
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  //TODO
  height: "var(--radix-navigation-menu-viewport-height)",
  transition: "width, height, 300ms ease",
  selectors: {
    "&[data-state='open']": {
      animationName: scaleIn,
    },
    "&[data-state='closed']": {
      animationName: scaleOut,
    },
  },
  "@media": {
    "only screen and (min-width: 600px)": {
      //TODO
      width: "var(--radix-navigation-menu-viewport-width)",
    },
  },
});

export const list = style({
  display: "grid",
  padding: size["2"],
  margin: 0,
  columnGap: size["1"],
  listStyle: "none",
});

export const listOne = style({
  "@media": {
    "only screen and (min-width: 600px)": {
      width: 500,
      gridTemplateColumns: "0.75fr 1fr",
    },
  },
});

export const listTwo = style({
  "@media": {
    "only screen and (min-width: 600px)": {
      width: 600,
      gridAutoFlow: "column",
      gridTemplateRows: "repeat(3, 1fr)",
    },
  },
});

export const listItemLink = style({
  display: "block",
  outline: "none",
  textDecoration: "none",
  userSelect: "none",
  padding: size["2"],
  borderRadius: 6,
  lineHeight: 1,
  ":focus": {
    boxShadow: `0 0 0 2px ${color.primary}`, //TODO
  },
  ":hover": {
    backgroundColor: color.background, //TODO
  },
});

export const listItemHeading = style({
  fontWeight: fontWeight.light, //TODO
  lineHeight: lineHeight.lg, //TODO
  marginBottom: size["1"],
  color: color.primary, //TODO
});

export const listItemText = style({
  color: color.text, //TODO
  lineHeight: lineHeight.lg, //TODO
  fontWeight: "initial", //TODO
});

//TODO
// .ListItemText {
//   color: var(--mauve11);
//   line-height: 1.4;
//   font-weight: initial;
// }

export const callout = style({
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
  width: size.full,
  height: size.full,
  backgroundColor: `linear-gradient(135deg, ${color.primary} 0%, ${color.secondary} 100%)`, //TODO
  borderRadius: 6,
  padding: size["5"],
  textDecoration: "none",
  outline: "none",
  userSelect: "none",
  ":focus": {
    boxShadow: `0 0 0 2px ${color.primary}`, //TODO
  },
});

export const calloutHeading = style({
  color: color.white,
  fontSize: size["4"], //TODO
  fontWeight: fontWeight.bold, //TODO
  lineHeight: lineHeight.md, //TODO
  marginTop: size["4"],
  marginBottom: size["2"],
});

export const calloutText = style({
  color: color.white, //TODO
  fontSize: size["4"], //TODO
  lineHeight: 1.3, //TODO
});

export const viewportPosition = style({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  width: size.full,
  top: size.full,
  left: 0,
  perspective: 2000,
});

export const caretDown = style({
  position: "relative",
  color: color.primary, //TODO
  top: 1,
  transition: "transform 250ms ease",
  selectors: {
    //TODO wrong selector
    "&[data-state='open']": {
      transform: "rotate(-180deg)",
    },
  },
});
//TODO
// .CaretDown {
//   position: relative;
//   color: var(--violet10);
//   top: 1px;
//   transition: transform 250ms ease;
// }
// [data-state='open'] > .CaretDown {
//   transform: rotate(-180deg);
// }

export const arrow = style({
  position: "relative",
  top: "70%",
  backgroundColor: color.white,
  width: 10,
  height: 10,
  transform: "rotate(45deg)",
  borderTopLeftRadius: 2,
});
