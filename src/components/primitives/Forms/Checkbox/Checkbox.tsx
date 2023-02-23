import React from "react";
import { Box } from "@components/primitives/Box/Box";
import { PrimitiveComponentAttributes } from "@infrastructure/types/helpers/primitive-component";
import { CheckboxVariant, root } from "@components/primitives/Forms/Checkbox/checkbox.css";

export type CheckboxProps = Omit<PrimitiveComponentAttributes<HTMLInputElement>, "defaultValue"> &
  CheckboxVariant & {
    defaultValue?: boolean | null;
  };

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ size, color, error, shape, defaultValue, children, ...otherProps }, ref) => (
    <Box
      {...otherProps}
      className={root({ size, color, error, shape })}
      defaultValue={defaultValue as string | number | readonly string[] | undefined}
    >
      {children}
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} ref={ref}>
        ✓
      </Box>
    </Box>
  )
);

Checkbox.displayName = "CheckboxPrimitive";

export { Checkbox };
