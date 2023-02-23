import { Variants } from "framer-motion";
import { vars } from "@styles/config/contract.css";

export const labelVariants: Variants = {
  unfocus: {
    top: vars.space["5"],
  },
  focus: {
    top: "2px",
  },
};

export const textVariants: Variants = {
  unfocus: {
    fontSize: "15px",
  },
  focus: {
    fontSize: "10px",
  },
};
