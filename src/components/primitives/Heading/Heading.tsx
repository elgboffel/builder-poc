import { Box } from "@components/primitives/Box/Box";
import { FC } from "preact/compat";
import { HeadingVariants, root } from "@components/primitives/Heading/heading.css";
import { PrimitiveComponent } from "@infrastructure/types/helpers/primitive-component";

export type HeadingProps = PrimitiveComponent<HTMLHeadingElement> & HeadingVariants;

const Heading: FC<HeadingProps> = ({ center, size, weight, caps, as = "h2", ...otherProps }) => (
  <Box as={as} className={root({ center, caps, size: "h1", weight })} {...otherProps} />
);

export { Heading };
