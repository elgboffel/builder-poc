import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "@styles/config/contract.css";
import { sprinkles } from "@styles/sprinkles.css";

const { color, fontWeight } = vars;

export const root = recipe({
  base: {
    transition: "color 175ms",
  },
  variants: {
    color: {
      primary: {
        color: color.primary,
      },
      secondary: {
        color: color.secondary,
      },
      white: {
        color: color.white,
      },
    },
    size: {
      sm: sprinkles({
        fontSize: "sm",
      }),
      xs: sprinkles({
        fontSize: "xs",
      }),
    },
    underline: {
      underline: {
        textDecoration: "underline",
      },
      none: {
        textDecoration: "none",
      },
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
  },
  defaultVariants: {
    color: "primary",
    underline: "underline",
  },
});

export type LinkVariants = RecipeVariants<typeof root>;
