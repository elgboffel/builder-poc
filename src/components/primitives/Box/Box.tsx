import React, { createElement } from "react";
import classnames from "classnames";
import { sprinkles, Sprinkles } from "@styles/sprinkles.css";
import { PrimitiveComponent } from "@infrastructure/types/helpers/primitive-component";

export type BoxProps = Sprinkles & {
  className?: Parameters<typeof classnames>[0];
} & PrimitiveComponent<HTMLElement>;

const Box = React.forwardRef<HTMLElement, BoxProps>(
  (
    {
      as = "div",
      className,
      px,
      py,
      pt,
      pb,
      pl,
      pr,
      mx,
      my,
      mt,
      mb,
      ml,
      mr,
      display,
      alignItems,
      justifyContent,
      flexDirection,
      flexWrap,
      flexGrow,
      flexShrink,
      gap,
      borderRadius,
      borderStyle,
      borderWidth,
      borderColor,
      position,
      top,
      bottom,
      left,
      right,
      bg,
      color,
      width,
      zIndex,
      opacity,
      pointerEvents,
      cursor,
      textAlign,
      maxWidth,
      minWidth,
      transition,
      overflow,
      ...restProps
    },
    ref
  ) => {
    const classes = classnames(
      // resetStyles.base,
      // resetStyles.element[as as keyof typeof resetStyles.element],
      sprinkles({
        display,
        alignItems,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        justifyContent,
        flexDirection,
        flexWrap,
        flexGrow,
        flexShrink,
        gap,
        borderRadius,
        borderWidth,
        borderStyle,
        borderColor,
        position,
        top,
        bottom,
        left,
        right,
        bg,
        color,
        width,
        zIndex,
        opacity,
        pointerEvents,
        cursor,
        textAlign,
        maxWidth,
        minWidth,
        transition,
        overflow,
      }),
      className
    );

    return createElement(as, { className: classes, ref, ...restProps });
  }
);

Box.displayName = "Box";

export { Box };
