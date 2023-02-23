import * as PopoverPrimitive from "@radix-ui/react-popover";
import React from "react";

export const PopoverRoot = PopoverPrimitive.Root;

PopoverRoot.displayName = "PopoverRoot";

export const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentProps<typeof PopoverPrimitive.Trigger>
>((props, ref) => {
  const { className, ...rest } = props;

  return <PopoverPrimitive.Trigger ref={ref} {...rest} className={className} />;
});

PopoverTrigger.displayName = "PopoverTrigger";

export const PopoverAnchor = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Anchor>,
  React.ComponentProps<typeof PopoverPrimitive.Anchor>
>((props, ref) => {
  const { className, ...rest } = props;

  return <PopoverPrimitive.Anchor ref={ref} {...rest} className={className} />;
});

PopoverAnchor.displayName = "PopoverAnchor";

export const PopoverPortal = PopoverPrimitive.Portal;

PopoverPortal.displayName = "PopoverPortal";
export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentProps<typeof PopoverPrimitive.Content>
>((props, ref) => {
  const { className, ...rest } = props;

  return <PopoverPrimitive.Content ref={ref} {...rest} className={className} />;
});

PopoverContent.displayName = "PopoverContent";

export const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  React.ComponentProps<typeof PopoverPrimitive.Arrow>
>((props, ref) => {
  const { className, ...rest } = props;

  return <PopoverPrimitive.Arrow ref={ref} {...rest} className={className} />;
});

PopoverArrow.displayName = "PopoverArrow";

export const PopoverClose = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Close>,
  React.ComponentProps<typeof PopoverPrimitive.Close>
>((props, ref) => {
  const { className, ...rest } = props;

  return <PopoverPrimitive.Close ref={ref} {...rest} className={className} />;
});

PopoverClose.displayName = "PopoverClose";
