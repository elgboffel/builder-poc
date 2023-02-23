import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/config/contract.css";
import { style } from "@vanilla-extract/css";

export const root = recipe({
  base: [
    {
      width: vars.sizes["7"],
      height: vars.sizes["7"],
      borderRadius: "50%",
      border: `1px solid ${vars.colors.harbour}`,
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
        background: vars.colors.jadedGinger,
      },
    },
    valid: {
      true: {
        background: vars.colors.greenbrier,
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
