import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Box } from "@components/primitives/Box/Box";
import { LinkVariants, root } from "@components/primitives/Link/link.css";
import { PrimitiveComponent } from "@infrastructure/types/helpers/primitive-component";

export type LinkProps = Omit<NextLinkProps, "href"> &
  PrimitiveComponent<HTMLAnchorElement> &
  LinkVariants & {
    href: string;
  };

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { href, replace, scroll, shallow, locale, prefetch, caps, weight, size, underline, color, ...otherProps },
    passedRef
  ) => {
    if (!href) return null;

    if (
      typeof href === "string" &&
      (href?.startsWith("https://") ||
        href?.startsWith("http://") ||
        href?.startsWith("www.") ||
        href?.startsWith("mailto") ||
        href?.startsWith("tel"))
    )
      return (
        <Box
          as={"a"}
          ref={passedRef}
          className={root({ caps, weight, underline, size, color })}
          href={href}
          target={"_blank"}
          {...otherProps}
        />
      );

    const nextHref = href.startsWith("/") ? href : `/${href}`;

    return (
      <NextLink
        href={nextHref}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        locale={locale}
        prefetch={prefetch}
        passHref
        ref={passedRef}
      >
        <Box as={"span"} className={root({ caps, weight, underline, size, color })} {...otherProps} />
      </NextLink>
    );
  }
);

Link.displayName = "LinkPrimitive";

export { Link };
