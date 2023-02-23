import {
  ConditionalValue,
  createMapValueFn,
  createNormalizeValueFn,
  createSprinkles,
  defineProperties,
} from "@vanilla-extract/sprinkles";
import { BREAKPOINTS } from "@styles/config/constants";
import { transformBreakpoints, TransformResponsiveBreakpoints } from "@styles/helpers";
import {
  fontWeights,
  lineHeights,
  radii,
  shadows,
  space,
  sizes,
  zIndices,
  fontSizes,
} from "@styles/config/common-vars.css";
import { colors, fonts } from "@styles/theme.css";
// import { vars } from "@styles/config/contract.css";
//
// const { fontWeights, lineHeights, radii, shadows, space, sizes, zIndices, fontSizes, colors, fonts } = vars;

const unresponsiveProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
  },
  defaultCondition: "default",
  properties: {
    all: ["unset", "initial", "inherit"],
    fontFamily: fonts,
    lineHeight: lineHeights,
    textAlign: ["center", "left", "right"],
    textTransform: ["lowercase", "uppercase"],
    fontWeight: fontWeights,
    textDecoration: ["none", "underline"],
    borderRadius: radii,
    borderSize: sizes,
    borderWidth: sizes,
    gap: {
      xs: sizes["1"],
      sm: sizes["2"],
      md: sizes["3"],
      lg: sizes["4"],
      xl: sizes["5"],
    },
    borderStyle: ["solid", "dotted"],
    borderColor: colors,
    boxShadow: shadows,
    background: colors,
    color: colors,
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
    fontSize: fontSizes,
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
    minWidth: sizes,
    maxWidth: sizes,
    width: sizes,
    height: sizes,
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
