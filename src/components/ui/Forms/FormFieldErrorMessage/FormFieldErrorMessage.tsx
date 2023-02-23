import React from "react";
import { WithChildren } from "@infrastructure/types/helpers/with-children";
import { Box } from "@components/primitives/Box/Box";
import { Text } from "@components/primitives/Text/Text";
import {
  FormFieldErrorMessageVariants,
  root,
} from "@components/ui/Forms/FormFieldErrorMessage/form-field-error-message.css";

export type FormFieldErrorMessageProps = FormFieldErrorMessageVariants & WithChildren;

const FormFieldErrorMessage = React.forwardRef<HTMLDivElement, FormFieldErrorMessageProps>(
  ({ children, type, ...otherProps }, ref) => (
    <Box className={root({ type })} {...otherProps} ref={ref}>
      <Text size={"sm"} as={"span"}>
        {children}
      </Text>
    </Box>
  )
);

FormFieldErrorMessage.displayName = "FormFieldErrorMessage";

export { FormFieldErrorMessage };
