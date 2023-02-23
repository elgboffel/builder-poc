import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const root = recipe({
  variants: {
    size: {
      tiny: { fontSize: "tiny" },
      xs: { fontSize: "xs" },
      sm: { fontSize: "sm" },
      md: { fontSize: "md" },
      lg: { fontSize: "lg" },
    },
  },
});

export type LabelVariants = RecipeVariants<typeof root>;
