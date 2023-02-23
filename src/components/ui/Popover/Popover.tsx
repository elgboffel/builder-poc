import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { PopoverPortal, PopoverContent as PopoverContentPrimitive } from "@components/primitives/Popover/Popover";
import { WithChildren } from "@infrastructure/types/helpers/with-children";
import { ScrollArea } from "@components/primitives/ScrollArea/ScrollArea";

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content> & WithChildren,
  React.ComponentProps<typeof PopoverPrimitive.Content> & {
    areaRootStyle?: string;
  }
>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <PopoverPortal>
      <PopoverContentPrimitive sideOffset={15} side={"top"} align={"end"} alignOffset={15} {...rest} ref={ref}>
        <ScrollArea>{children}</ScrollArea>
      </PopoverContentPrimitive>
    </PopoverPortal>
  );
});

PopoverContent.displayName = "PopoverContent";
