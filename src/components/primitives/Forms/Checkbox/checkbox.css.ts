import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/config/contract.css";

const { color } = vars;

export const root = recipe({
  base: [
    {
      all: "unset",
      border: `solid 1px ${color.dimmed}`,
      selectors: {
        "&:hover": { borderColor: "focus" },
        "&:focus-visible": { borderColor: "focus" },
      },
    },
    sprinkles({
      bg: "white",
      borderRadius: "round",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "fast",
      color: {
        hover: "white",
      },
    }),
  ],
  variants: {
    size: {
      sm: sprinkles({
        width: 4,
        height: 4,
      }),
      md: sprinkles({
        width: 5,
        height: 5,
      }),
      lg: sprinkles({
        width: 6,
        height: 6,
      }),
    },
    color: {
      black: {
        selectors: {
          "&[data-state='checked']": {
            bg: color.black,
            borderColor: color.black,
          },
        },
      },
    },
    shape: {
      round: {
        borderRadius: "50%",
      },
      squared: {
        borderRadius: "none",
      },
    },

    error: {
      true: {
        background: color.error,
        color: color.white,
      },
    },
  },
  defaultVariants: {
    color: "black",
    shape: "round",
    size: "md",
  },
});

export type CheckboxVariant = RecipeVariants<typeof root>;
