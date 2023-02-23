import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/config/contract.css";

export const root = recipe({
  base: [
    {
      borderRadius: 0,
      outline: "none",
      selectors: {
        "&:disabled": {
          cursor: "unset",
          opacity: 0.5,
          pointerEvents: "none",
        },
      },
    },
    sprinkles({
      position: "relative",
      pl: 6,
      pr: 12,
      pb: 2,
      pt: 6,
      fontSize: "text",
      zIndex: 1,
    }),
  ],
  variants: {
    error: {
      true: {
        border: `1px solid ${vars.colors.jadedGinger}`,
      },
    },
    color: {
      gray: {
        border: `1px solid ${vars.colors.harbour}`,
      },
    },
    size: {
      full: sprinkles({ width: "full" }),
    },
  },
  defaultVariants: {
    color: "gray",
  },
});

export type InputVariants = RecipeVariants<typeof root>;
