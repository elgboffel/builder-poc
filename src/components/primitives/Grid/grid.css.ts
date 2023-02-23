import { style } from "@vanilla-extract/css";
import { BREAKPOINTS, GRID_COLUMN_SIZE } from "@styles/config/constants";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { responsiveStyle } from "@styles/helpers";
import { VariantGroups } from "@styles/types";

const sizeVariants = Object.keys(BREAKPOINTS)
  .reverse()
  .reduce<VariantGroups>((acc, key) => {
    let i = GRID_COLUMN_SIZE;
    while (i > 0) {
      const responsiveCol = {
        [`${key}-${i}`]:
          key === "bp0" ? { gridColumnEnd: `span ${i}` } : responsiveStyle({ [key]: { gridColumnEnd: `span ${i}` } }),
      };
      acc = Object.assign(responsiveCol, acc);
      i -= 1;
    }
    return acc;
  }, {});

const offsetVariants = Object.keys(BREAKPOINTS)
  .reverse()
  .reduce<VariantGroups>((acc, key) => {
    let i = GRID_COLUMN_SIZE;
    while (i > 0) {
      const responsiveOffset = {
        [`${key}-${i}`]:
          key === "bp0" ? { gridColumnStart: `${i}` } : responsiveStyle({ [key]: { gridColumnStart: `${i}` } }),
      };
      acc = Object.assign(responsiveOffset, acc);
      i -= 1;
    }
    return acc;
  }, {});

export const column = recipe({
  variants: {
    size: sizeVariants,
    offset: offsetVariants,
  },
});

export const root = style({
  display: "grid",
  gridTemplateColumns: `repeat(${GRID_COLUMN_SIZE}, 1fr)`,
  gap: 16,
});

export type ColumnVariants = RecipeVariants<typeof column>;
