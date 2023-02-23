import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";

export const root = recipe({
  base: [
    sprinkles({
      fontFamily: "heading",
      color: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 0,
    }),
  ],
  variants: {
    size: {
      jumbo: sprinkles({
        fontSize: ["xxl", "jumbo"],
      }),
      h1: sprinkles({
        fontSize: ["xl", "xxl"],
      }),
      h2: sprinkles({
        fontSize: ["lg", "xl"],
      }),
      h3: sprinkles({
        fontSize: ["md", "lg"],
      }),
      h4: {
        fontSize: "text",
      },
      h5: {
        fontSize: "sm",
      },
      h6: {
        fontSize: "xs",
      },
    },
    weight: {
      light: {
        fontWeight: "light",
      },
      normal: {
        fontWeight: "normal",
      },
      bold: {
        fontWeight: "bold",
      },
    },
    center: {
      true: {
        textAlign: "center",
      },
    },
    caps: {
      true: {
        textTransform: "uppercase",
      },
    },
  },
  defaultVariants: {
    size: "h2",
    weight: "bold",
  },
});

export type HeadingVariants = RecipeVariants<typeof root>;
