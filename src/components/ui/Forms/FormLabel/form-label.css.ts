import { style } from "@vanilla-extract/css";
import { vars } from "@styles/config/contract.css";

const { space } = vars;

export const root = style({
  top: space["5"],
  left: space["6"],
});
