import { ButtonVariants, root } from "@components/primitives/Button/button.css";
import { FC } from "react";
import { Box } from "@components/primitives/Box/Box";
import { PrimitiveComponent } from "@infrastructure/types/helpers/primitive-component";

export type ButtonProps = ButtonVariants & PrimitiveComponent<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ size, color, caps, outline, selected, as = "button", ...otherProps }) => {
  return <Box as={as} className={root({ size, color, caps, outline, selected })} {...otherProps} />;
};

export { Button };
