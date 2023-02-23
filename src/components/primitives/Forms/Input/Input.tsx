import React from "react";
import { InputVariants, root } from "@components/primitives/Forms/Input/input.css";
import { Box } from "@components/primitives/Box/Box";
import { PrimitiveComponentAttributes } from "@infrastructure/types/helpers/primitive-component";

export type InputProps = InputVariants & PrimitiveComponentAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, color, size, defaultValue, ...otherProps }, ref) => {
    return (
      <Box
        ref={ref}
        as={"input"}
        defaultValue={defaultValue}
        className={root({ error, color, size })}
        {...otherProps}
      />
    );
  }
);

Input.displayName = "InputPrimitive";

export { Input };
