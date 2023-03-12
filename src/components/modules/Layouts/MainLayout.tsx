import React from "react";
import { WithChildren } from "@infrastructure/types/helpers/with-children";
import { Box } from "@components/primitives/Box/Box";
import { Navigation } from "@components/modules/Navigation/Navigation";
import { useSettings } from "@infrastructure/hooks/use-settings/use-settings";

type MainLayoutProps = WithChildren;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const settings = useSettings();

  return (
    <Box>
      {settings?.cms?.navigation && <Navigation collection={settings?.cms?.navigation} />}
      {children}
    </Box>
  );
};

export { MainLayout };
