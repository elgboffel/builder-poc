import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/config/contract.css";

export const root = recipe({
  base: [sprinkles({ width: "full" })],
  variants: {
    type: {
      basic: {
        color: vars.colors.jadedGinger,
        fontWeight: "normal",
      },
      default: sprinkles({
        bg: "jadedGinger",
        px: 3,
        py: 5,
        color: "white",
        fontWeight: "bold",
      }),
    },
  },
  defaultVariants: {
    type: "default",
  },
});

export type FormFieldErrorMessageVariants = RecipeVariants<typeof root>;
