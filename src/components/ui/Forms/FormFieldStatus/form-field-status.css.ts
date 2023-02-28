import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/config/contract.css";
import { style } from "@vanilla-extract/css";
const { color, size } = vars;

export const root = recipe({
  base: [
    {
      width: size["7"],
      height: size["7"],
      borderRadius: "50%",
      border: `1px solid ${color.secondary}`,
      right: vars.space["3"],
      top: "50%",
      transform: "translateY(-50%)",
    },
    sprinkles({
      position: "absolute",
      display: "flex",
      zIndex: 3,
      color: "white",
    }),
  ],
  variants: {
    error: {
      true: {
        background: color.error,
      },
    },
    valid: {
      true: {
        background: color.secondary,
      },
    },
  },
});

export type FormFieldStatusVariants = RecipeVariants<typeof root>;

export const icon = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  lineHeight: "0",
});
