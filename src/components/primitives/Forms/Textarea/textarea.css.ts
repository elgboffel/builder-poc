import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/config/contract.css";

const { color } = vars;

export const root = recipe({
  base: [
    { outline: "none" },
    sprinkles({
      position: "relative",
      px: 6,
      pb: 2,
      pt: 6,

      fontSize: "text",
      zIndex: 1,
      width: "full",
    }),
  ],
  variants: {
    error: {
      true: {
        border: `1px solid ${color.error}`,
        color: color.error,
      },
    },
    color: {
      gray: {
        border: `1px solid ${color.dimmed}`,
      },
    },
  },
  defaultVariants: {
    color: "gray",
  },
});

export type TextareaVariants = RecipeVariants<typeof root>;
