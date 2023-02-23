import React from "react";
import { WithChildren } from "@infrastructure/types/helpers/with-children";
import { Box } from "@components/primitives/Box/Box";

type MainLayoutProps = WithChildren;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export { MainLayout };
