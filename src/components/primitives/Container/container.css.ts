import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import { BREAKPOINTS } from "@styles/config/constants";
import { responsiveStyle } from "@styles/helpers";

const edgeSpace = 32;

export const root = recipe({
  base: [
    sprinkles({
      marginRight: "auto",
      marginLeft: "auto",
      paddingLeft: [3, 4],
      paddingRight: [3, 4],
    }),
  ],
  variants: {
    container: {
      true: [
        {
          maxWidth: `${BREAKPOINTS.bp1}px`,
        },
        responsiveStyle({
          bp2: { maxWidth: `${BREAKPOINTS.bp2 - edgeSpace}px` },
          bp3: { maxWidth: `${BREAKPOINTS.bp3 - edgeSpace}px` },
        }),
      ],
    },
    fluid: {
      true: sprinkles({ pl: 0, pr: 0, maxWidth: "fluid" }),
    },
  },
  defaultVariants: {
    container: true,
  },
});

export type ContainerVariants = RecipeVariants<typeof root>;
