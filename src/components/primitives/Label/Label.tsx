import React from "react";
import { LabelVariants, root } from "@components/primitives/Label/label.css";
import { Box } from "@components/primitives/Box/Box";
import { PrimitiveComponent } from "@infrastructure/types/helpers/primitive-component";

type LabelProps = PrimitiveComponent<HTMLLabelElement> & LabelVariants;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ as = "label", size, ...otherProps }, ref) => (
  <Box {...otherProps} className={root({ size })} as={as} ref={ref} />
));

Label.displayName = "Label";

export { Label };
