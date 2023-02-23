import { StyleRule } from "@vanilla-extract/css";
import { BREAKPOINTS_QUERIES } from "@styles/config/constants";

export const transformBreakpoints = <T>(input: Record<string, number>) => {
  let responsiveConditions!: T;

  Object.entries(input).forEach(([key, value]) => {
    if (value === 0) {
      responsiveConditions = {
        ...responsiveConditions,
        [key]: {},
      };
    } else {
      responsiveConditions = {
        ...responsiveConditions,
        [key]: {
          "@media": `screen and (min-width: ${value}px)`,
        },
      };
    }
  });

  return responsiveConditions;
};

export type TransformResponsiveBreakpoints = {
  bp0: Record<string, string>;
  bp1: Record<string, string>;
  bp2: Record<string, string>;
  bp3: Record<string, string>;
  bp4: Record<string, string>;
};

export type ResponsiveStyleProps = {
  bp1?: StyleRule;
  bp2?: StyleRule;
  bp3?: StyleRule;
  bp4?: StyleRule;
};

export const responsiveStyle = ({ bp1, bp2, bp3, bp4 }: ResponsiveStyleProps) => ({
  "@media": {
    ...(bp1 && { [BREAKPOINTS_QUERIES.bp1]: bp1 }),
    ...(bp2 && { [BREAKPOINTS_QUERIES.bp2]: bp2 }),
    ...(bp3 && { [BREAKPOINTS_QUERIES.bp3]: bp3 }),
  },
});
