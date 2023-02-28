import {
  ConditionalValue,
  createMapValueFn,
  createNormalizeValueFn,
  createSprinkles,
  defineProperties,
} from "@vanilla-extract/sprinkles";
import { BREAKPOINTS } from "@styles/config/constants";
import { transformBreakpoints, TransformResponsiveBreakpoints } from "@styles/helpers";
import { fontWeight, lineHeight, radii, shadow, space, size, zIndices } from "@styles/config/common-vars.css";
import { color, font, fontSize } from "@styles/theme.css";

const unresponsiveProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
  },
  defaultCondition: "default",
  properties: {
    all: ["unset", "initial", "inherit"],
    fontFamily: font,
    lineHeight: lineHeight,
    textAlign: ["center", "left", "right"],
    textTransform: ["lowercase", "uppercase"],
    fontWeight: fontWeight,
    textDecoration: ["none", "underline"],
    borderRadius: radii,
    borderSize: size,
    borderWidth: size,
    gap: {
      xs: size["1"],
      sm: size["2"],
      md: size["3"],
      lg: size["4"],
      xl: size["5"],
    },
    borderStyle: ["solid", "dotted"],
    borderColor: color,
    boxShadow: shadow,
    background: color,
    color,
    flexWrap: ["wrap", "nowrap"],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    flexShrink: [0],
    flexGrow: [0, 1],
    zIndex: zIndices,
    cursor: ["pointer"],
  },
  shorthands: {
    bg: ["background"],
    br: ["borderRadius"],
  },
});

const responsiveProperties = defineProperties({
  conditions: {
    ...transformBreakpoints<TransformResponsiveBreakpoints>(BREAKPOINTS),
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
  },
  defaultCondition: "bp0",
  responsiveArray: ["bp0", "bp1", "bp2", "bp3"],
  properties: {
    display: ["none", "block", "inline", "inline-block", "flex", "inline-flex"],
    alignItems: ["flex-start", "center", "flex-end", "baseline"],
    justifyContent: ["flex-start", "center", "flex-end", "space-between"],
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    flexWrap: ["wrap", "nowrap"],
    position: ["absolute", "relative", "fixed", "sticky"],
    fontSize: fontSize,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    pointerEvents: ["none", "auto"],
    overflow: ["hidden"],
    opacity: [0, 0.3, 0.5, 0.7, 1],
    textAlign: ["left", "center", "right"],
    minWidth: size,
    maxWidth: size,
    width: size,
    height: size,
    transition: {
      slow: "transform .3s ease, opacity .3s ease",
      fast: "transform .15s ease, opacity .15s ease",
    },
  },
  shorthands: {
    p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    pt: ["paddingTop"],
    pr: ["paddingRight"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],
    m: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    mt: ["marginTop"],
    mr: ["marginRight"],
    mb: ["marginBottom"],
    ml: ["marginLeft"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties, unresponsiveProperties);

export const normalizeResponsiveValue = createNormalizeValueFn(responsiveProperties);
export const mapResponsiveValue = createMapValueFn(responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
export type ResponsiveValue<Value extends string | number> = ConditionalValue<typeof responsiveProperties, Value>;
