import React from "react";
import { Box } from "@components/primitives/Box/Box";
import { FormFieldStatusVariants, icon, root } from "@components/ui/Forms/FormFieldStatus/form-field-status.css";
import { WithChildren } from "@infrastructure/types/helpers/with-children";

type FormFieldStatusProps = FormFieldStatusVariants & WithChildren;

const FormFieldStatus = React.forwardRef<HTMLDivElement, FormFieldStatusProps>(
  ({ valid, error, children, ...otherProps }, ref) => (
    <Box {...otherProps} ref={ref} className={root({ error, valid })}>
      {error && (
        <Box as={"span"} className={icon}>
          ✕
        </Box>
      )}
      {valid && (
        <Box as={"span"} className={icon}>
          ✓
        </Box>
      )}
      {children}
    </Box>
  )
);

FormFieldStatus.displayName = "FormFieldStatus";

export { FormFieldStatus };
