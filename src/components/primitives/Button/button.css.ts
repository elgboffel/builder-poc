import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/config/contract.css";

const {
  colors: { jadedGinger, harbour, white },
} = vars;
export const root = recipe({
  base: {
    fontWeight: "normal",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    border: "none",
    textAlign: "center",
    color: white,

    ":disabled": {
      cursor: "default",
    },
  },
  variants: {
    size: {
      sm: sprinkles({
        fontSize: ["sm"],
        paddingLeft: 6,
        paddingRight: 6,
      }),
      md: sprinkles({
        fontSize: ["sm", "md"],
        paddingLeft: 3,
        paddingRight: 3,
        paddingTop: 2,
        paddingBottom: 2,
      }),
      lg: sprinkles({
        fontSize: ["md"],
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
      }),
    },
    color: {
      primary: sprinkles({
        bg: "jadedGinger",
      }),
      secondary: sprinkles({
        bg: "jadedGinger",
      }),
      transparent: sprinkles({
        bg: "transparent",
      }),
    },
    caps: {
      true: {
        textTransform: "uppercase",
      },
    },
    outline: {
      none: {},
      jadedGinger: {
        letterSpacing: "1px",
        outline: "0",
        border: "1px solid black",
        cursor: "pointer",
        position: "relative",
        background: "rgba(0, 0, 0, 0)",
        userSelect: "none",
        WebkitUserSelect: "none",
        touchAction: "manipulation",
        // color: harbour,
        selectors: {
          "&:after": {
            content: '""',
            background: jadedGinger,
            width: "100%",
            zIndex: -1,
            position: "absolute",
            height: "100%",
            top: "7px",
            left: "7px",
            transition: "0.2s",
          },
          "&:hover:after": {
            top: "0px",
            left: "0px",
          },
        },
      },
    },
    selected: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        outline: "jadedGinger",
        selected: true,
      },
      style: {
        selectors: {
          "&:after": {
            top: "0px",
            left: "0px",
            backgroundColor: `${harbour}`,
          },
        },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
    outline: "none",
    selected: false,
  },
});

export type ButtonVariants = RecipeVariants<typeof root>;
