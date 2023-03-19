import { FC } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import React from "react";
import { Link } from "@components/primitives/Link/Link";
import { WithChildren } from "@infrastructure/types/helpers/with-children";
import {
  arrow,
  calloutHeading,
  calloutText,
  caretDown,
  list,
  listItemText,
  listOne,
  navigationMenuContent,
  navigationMenuIndicator,
  navigationMenuLink,
  navigationMenuList,
  navigationMenuRoot,
  navigationMenuTrigger,
  navigationMenuViewport,
  viewportPosition,
} from "@components/modules/Navigation/Navigation.css";
import classNames from "classnames";

export type LinkField = {
  name: string;
  url: string;
};

export type DropdownItem = {
  link: LinkField;
};

export type NavigationItem = {
  dropdown: DropdownItem[];
  link: LinkField;
};
export interface NavigationProps {
  collection?: NavigationItem[];
}
export const Navigation: FC<NavigationProps> = ({ collection }) => {
  return (
    <NavigationMenu.Root className={navigationMenuRoot}>
      <NavigationMenu.List className={navigationMenuList}>
        {collection?.map(({ link, dropdown }) => (
          <NavigationMenu.Item key={link.name}>
            {dropdown ? (
              <Dropdown name={link.name} dropdown={dropdown} />
            ) : (
              <NavigationMenu.Link className={navigationMenuLink} href={link.url}>
                {link.name}
              </NavigationMenu.Link>
            )}
          </NavigationMenu.Item>
        ))}
        <NavigationMenu.Indicator className={navigationMenuIndicator}>
          <div className={arrow} />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className={viewportPosition}>
        <NavigationMenu.Viewport className={navigationMenuViewport} />
      </div>
    </NavigationMenu.Root>
  );
};

const Dropdown: FC<{ name: string; dropdown: DropdownItem[] }> = ({ name, dropdown }) => (
  <>
    <NavigationMenu.Trigger className={navigationMenuTrigger}>
      {name}
      <CaretDownIcon className={caretDown} aria-hidden />
    </NavigationMenu.Trigger>
    <NavigationMenu.Content className={navigationMenuContent}>
      <ul className={classNames(list, listOne)}>
        <li style={{ gridRow: "span 3" }}>
          <NavigationMenu.Link asChild>
            <Link href="/">
              <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                <path d="M12 0H4V8H12V0Z"></path>
                <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
              </svg>
              <div className={calloutHeading}>Radix Primitives</div>
              <p className={calloutText}>Unstyled, accessible components for React.</p>
            </Link>
          </NavigationMenu.Link>
        </li>
        {dropdown.map(({ link }) => (
          <ListItem href={link.url} key={link.url}>
            {link.name}
          </ListItem>
        ))}
      </ul>
    </NavigationMenu.Content>
  </>
);

const ListItem = React.forwardRef<HTMLAnchorElement, { href: string } & WithChildren>(
  ({ children, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <Link {...props} ref={forwardedRef}>
          <p className={listItemText}>{children}</p>
        </Link>
      </NavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = "ListItem";
