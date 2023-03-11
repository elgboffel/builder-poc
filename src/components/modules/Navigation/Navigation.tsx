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
  listItemHeading,
  listItemText,
  listOne,
  listTwo,
  navigationMenuContent,
  navigationMenuIndicator,
  navigationMenuLink,
  navigationMenuListItem,
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

export type NavigationItem = LinkField & {
  dropdown: LinkField[];
};
export interface NavigationProps {
  collection?: NavigationItem[];
}

export const Navigation: FC<NavigationProps> = ({ collection }) => {
  console.info({ collection });
  return (
    <NavigationMenu.Root className={navigationMenuRoot}>
      <NavigationMenu.List className={navigationMenuListItem}>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={navigationMenuTrigger}>
            Learn <CaretDownIcon className={caretDown} aria-hidden />
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

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={navigationMenuTrigger}>
            Overview <CaretDownIcon className={caretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={navigationMenuContent}>
            <ul className={classNames(list, listTwo)}>
              <ListItem title="Introduction" href="/docs/primitives/overview/introduction">
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem title="Getting started" href="/docs/primitives/overview/getting-started">
                A quick tutorial to get you up and running with Radix Primitives.
              </ListItem>
              <ListItem title="Styling" href="/docs/primitives/overview/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem title="Animation" href="/docs/primitives/overview/animation">
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem title="Accessibility" href="/docs/primitives/overview/accessibility">
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem title="Releases" href="/docs/primitives/overview/releases">
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className={navigationMenuLink} href="https://github.com/radix-ui">
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

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

const ListItem = React.forwardRef<HTMLAnchorElement, { title?: string; href: string } & WithChildren>(
  ({ children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <Link {...props} ref={forwardedRef}>
          <div className={listItemHeading}>{title}</div>
          <p className={listItemText}>{children}</p>
        </Link>
      </NavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = "ListItem";
