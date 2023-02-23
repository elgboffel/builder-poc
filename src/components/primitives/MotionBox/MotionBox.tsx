import { motion } from "framer-motion";
import React from "react";
import { Box } from "@components/primitives/Box/Box";
import { PrimitiveComponent } from "@infrastructure/types/helpers/primitive-component";

const MotionWithStyles = motion(Box);

type MotionBoxProps = React.ComponentProps<typeof MotionWithStyles> & PrimitiveComponent<HTMLElement>;
const MotionBox = React.forwardRef<React.ElementRef<typeof MotionWithStyles>, MotionBoxProps>((props, ref) => (
  <MotionWithStyles {...props} ref={ref} />
));

MotionBox.displayName = "MotionBox";

export { MotionBox };
