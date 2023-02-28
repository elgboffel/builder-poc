import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/config/contract.css";
import { fontWeight } from "@styles/config/common-vars.css";
const { fontSize, lineHeight } = vars;

export const root = recipe({
  base: sprinkles({ fontFamily: "text", lineHeight: "text", fontSize: "text", marginTop: 0, marginBottom: 0 }),
  variants: {
    size: {
      tiny: {
        fontSize: fontSize.tiny,
      },
      xs: {
        fontSize: fontSize.xs,
        lineHeight: lineHeight.text,
      },
      sm: {
        fontSize: fontSize.sm,
        lineHeight: lineHeight.text,
      },
      md: {
        fontSize: fontSize.md,
        lineHeight: lineHeight.text,
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
        fontWeight: fontWeight.light,
      },
      bold: {
        fontWeight: fontWeight.bold,
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
