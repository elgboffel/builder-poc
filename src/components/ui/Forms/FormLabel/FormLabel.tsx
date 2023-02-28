import { MotionBox } from "@components/primitives/MotionBox/MotionBox";
import React from "react";
import { Label } from "@components/primitives/Label/Label";
import { root } from "@components/ui/Forms/FormLabel/form-label.css";
import { labelVariants, textVariants } from "@components/ui/Forms/FormLabel/animations";
import { Box } from "@components/primitives/Box/Box";

type AnimatedLabelProps = {
  focus?: boolean;
  error?: boolean;
  text: string;
  required?: boolean;
  name?: string;
};

const FormLabel: React.FC<AnimatedLabelProps> = ({ focus, error, name, text, required }) => {
  return (
    <MotionBox
      animate={focus ? "focus" : "unfocus"}
      zIndex={2}
      position="absolute"
      className={root}
      variants={labelVariants}
      {...(error && { color: "error" })}
    >
      <Label htmlFor={name}>
        <MotionBox variants={textVariants}>
          {required ? (
            <Box as={"span"} color={"primary"} mr={1}>
              *
            </Box>
          ) : null}
          {text}
        </MotionBox>
      </Label>
    </MotionBox>
  );
};

export { FormLabel };
