import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/config/contract.css";
const { color } = vars;

export const root = recipe({
  base: [sprinkles({ width: "full" })],
  variants: {
    type: {
      basic: {
        color: color.error,
        fontWeight: "normal",
      },
      default: sprinkles({
        bg: "error",
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
