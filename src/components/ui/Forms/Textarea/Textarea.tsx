import React, { useEffect, useState } from "react";
import {
  TextareaProps as TextareaPrimitiveProps,
  Textarea as TextareaPrimitive,
} from "@components/primitives/Forms/Textarea/Textarea";
import { Label } from "@components/primitives/Label/Label";
import { Box } from "@components/primitives/Box/Box";
import { FormFieldErrorMessage } from "@components/ui/Forms/FormFieldErrorMessage/FormFieldErrorMessage";
import { FormFieldStatus } from "@components/ui/Forms/FormFieldStatus/FormFieldStatus";

export type TextareaProps = TextareaPrimitiveProps & {
  label?: string;
  focus?: boolean;
  errorMessage?: string;
  valid?: boolean;
  required?: boolean;
  value?: string | number;
};

const Textarea = React.forwardRef<React.ElementRef<typeof TextareaPrimitive>, TextareaProps>(
  ({ label, focus, errorMessage, valid, required, value, ...otherProps }, ref) => {
    const [internalFocus, setInternalFocus] = useState(focus ?? false);
    useEffect(() => {
      if (valid && !internalFocus) setInternalFocus(true);
    }, [internalFocus, valid]);
    return (
      <>
        <Box position={"relative"}>
          {label && <Label required={required} label={label} />}
          <TextareaPrimitive
            {...otherProps}
            ref={ref}
            onFocus={(e) => !e.currentTarget.value && setInternalFocus(true)}
            onBlur={(e) => !e.currentTarget.value && setInternalFocus(false)}
            onChange={(e) => {
              e.currentTarget.value && setInternalFocus(true);
              if (otherProps.onChange) otherProps.onChange(e);
            }}
            value={value}
          />
          {otherProps.error && <FormFieldStatus error />}
          {valid && <FormFieldStatus valid />}
        </Box>
        {errorMessage && otherProps.error && <FormFieldErrorMessage>{errorMessage}</FormFieldErrorMessage>}
      </>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
