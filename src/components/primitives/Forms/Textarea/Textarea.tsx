import React from "react";
import { Box } from "@components/primitives/Box/Box";
import { root, TextareaVariants } from "@components/primitives/Forms/Textarea/textarea.css";
import { PrimitiveComponentAttributes } from "@infrastructure/types/helpers/primitive-component";

export type TextareaProps = TextareaVariants & PrimitiveComponentAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, color, defaultValue, ...otherProps }, ref) => {
    return <Box ref={ref} as={"div"} className={root({ error, color })} defaultValue={defaultValue} {...otherProps} />;
  }
);

Textarea.displayName = "TextareaPrimitive";

export { Textarea };
