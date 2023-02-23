import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/config/contract.css";

export const root = recipe({
  base: sprinkles({ fontFamily: "text", lineHeight: "text", fontSize: "text", marginTop: 0, marginBottom: 0 }),
  variants: {
    size: {
      tiny: {
        fontSize: vars.fontSizes.tiny,
      },
      xs: {
        fontSize: vars.fontSizes.xs,
        lineHeight: vars.lineHeights.text,
      },
      sm: {
        fontSize: vars.fontSizes.sm,
        lineHeight: vars.lineHeights.text,
      },
      md: {
        fontSize: vars.fontSizes.md,
        lineHeight: vars.lineHeights.text,
      },
      lg: sprinkles({
        fontSize: ["md", "lg"],
      }),
      xl: sprinkles({
        fontSize: ["lg", "xl"],
      }),
      xxl: sprinkles({
        fontSize: ["xl", "xxl"],
      }),
    },
    weight: {
      light: {
        fontWeight: vars.fontWeights.light,
      },
      bold: {
        fontWeight: vars.fontWeights.bold,
      },
    },
    caps: {
      true: {
        textTransform: "uppercase",
      },
    },
    center: {
      true: {
        textAlign: "center",
      },
    },
    lineThrough: {
      true: {
        textDecoration: "line-through",
      },
    },
    underline: {
      hover: {
        cursor: "pointer",
        textDecoration: "none",
        "&:hover, &:focus-visible": {
          textDecoration: "underline",
        },
      },
      always: {
        cursor: "pointer",
        textDecoration: "underline",
      },
    },
  },
});

export type TextVariants = RecipeVariants<typeof root>;
