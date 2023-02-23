import { WithChildren } from "@infrastructure/types/helpers/with-children";
import { root, ContainerVariants } from "@components/primitives/Container/container.css";
import { Box } from "@components/primitives/Box/Box";
import { FC } from "react";

export const Container: FC<WithChildren & ContainerVariants> = ({ container, fluid, children }) => {
  return <Box className={root({ container, fluid })}>{children}</Box>;
};

Container.displayName = "Container";
