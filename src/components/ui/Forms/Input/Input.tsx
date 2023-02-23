import React, { useEffect, useState } from "react";
import { Box } from "@components/primitives/Box/Box";
import { Input as InputPrimitive, InputProps as InputPrimitiveProps } from "@components/primitives/Forms/Input/Input";
import { FormFieldErrorMessage } from "../FormFieldErrorMessage/FormFieldErrorMessage";
import { FormFieldStatus } from "@components/ui/Forms/FormFieldStatus/FormFieldStatus";
import { FormLabel } from "@components/ui/Forms/FormLabel/FormLabel";

export type InputProps = InputPrimitiveProps & {
  label?: string;
  focus?: boolean;
  errorMessage?: string;
  valid?: boolean;
  required?: boolean;
  value?: string | number;
  name: string;
};

const Input = React.forwardRef<React.ElementRef<typeof InputPrimitive>, InputProps>(
  ({ label, errorMessage, focus, valid, onFocus, onChange, required, value, ...otherProps }, ref) => {
    const [internalFocus, setInternalFocus] = useState<boolean>(focus ?? false);

    useEffect(() => {
      if (valid && !internalFocus) setInternalFocus(true);
    }, [internalFocus, valid]);

    return (
      <>
        <Box position={"relative"}>
          <InputPrimitive
            {...otherProps}
            size={"full"}
            ref={ref}
            onFocus={(e) => {
              !e.currentTarget.value && setInternalFocus(true);
              onFocus && onFocus(e);
            }}
            onBlur={(e) => !e.currentTarget.value && setInternalFocus(false)}
            onChange={(e) => {
              e.currentTarget.value && setInternalFocus(true);
              if (onChange) onChange(e);
            }}
            value={value}
          />

          {label && (
            <FormLabel
              text={label}
              required={required}
              name={otherProps.name}
              focus={internalFocus || focus}
              error={otherProps.error}
            />
          )}
          {otherProps.error && <FormFieldStatus error />}
          {valid && <FormFieldStatus valid />}
        </Box>
        {errorMessage && !valid && <FormFieldErrorMessage>{errorMessage}</FormFieldErrorMessage>}
      </>
    );
  }
);

Input.displayName = "Input";

export { Input };
