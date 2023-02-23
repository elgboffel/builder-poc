import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/config/contract.css";

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
        border: `1px solid ${vars.colors.jadedGinger}`,
        color: vars.colors.jadedGinger,
      },
    },
    color: {
      gray: {
        border: `1px solid ${vars.colors.harbour}`,
      },
    },
  },
  defaultVariants: {
    color: "gray",
  },
});

export type TextareaVariants = RecipeVariants<typeof root>;
