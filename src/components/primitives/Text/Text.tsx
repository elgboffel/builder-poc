import { Box } from "@components/primitives/Box/Box";
import { FC } from "preact/compat";
import { root, TextVariants } from "@components/primitives/Text/text.css";
import { PrimitiveComponent } from "@infrastructure/types/helpers/primitive-component";

export type TextProps = PrimitiveComponent<HTMLParagraphElement> & TextVariants;

const Text: FC<TextProps> = ({ as = "p", center, weight, caps, lineThrough, underline, size, ...otherProps }) => (
  <Box as={as} className={root({ center, weight, caps, lineThrough, size, underline })} {...otherProps} />
);

export { Text };
