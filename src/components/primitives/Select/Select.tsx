import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

export const SelectRoot = SelectPrimitive.Root;

SelectRoot.displayName = "SelectRoot";

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentProps<typeof SelectPrimitive.Trigger>
>((props, ref) => {
  const { className, ...rest } = props;

  return <SelectPrimitive.Trigger ref={ref} {...rest} className={className} />;
});

SelectTrigger.displayName = "SelectTrigger";

export const SelectValue = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Value>,
  React.ComponentProps<typeof SelectPrimitive.Value>
>((props, ref) => {
  const { className, ...rest } = props;

  return <SelectPrimitive.Value ref={ref} {...rest} className={className} />;
});

SelectValue.displayName = "SelectValue";

export const SelectIcon = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Icon>,
  React.ComponentProps<typeof SelectPrimitive.Icon>
>((props, ref) => {
  const { className, ...rest } = props;

  return <SelectPrimitive.Icon ref={ref} {...rest} className={className} />;
});

SelectIcon.displayName = "StyledIcon";

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentProps<typeof SelectPrimitive.Content>
>((props, ref) => {
  const { className, ...rest } = props;

  return <SelectPrimitive.Content ref={ref} {...rest} className={className} />;
});

SelectContent.displayName = "SelectContent";

export const SelectViewport = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Viewport>,
  React.ComponentProps<typeof SelectPrimitive.Viewport>
>((props, ref) => {
  const { className, ...rest } = props;

  return <SelectPrimitive.Viewport ref={ref} {...rest} className={className} />;
});

SelectViewport.displayName = "SelectViewport";

export const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  React.ComponentProps<typeof SelectPrimitive.Group>
>((props, ref) => {
  const { className, ...rest } = props;

  return <SelectPrimitive.Group ref={ref} {...rest} className={className} />;
});

SelectGroup.displayName = "SelectGroup";

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentProps<typeof SelectPrimitive.Item>
>((props, ref) => {
  const { className, ...rest } = props;

  return <SelectPrimitive.Item ref={ref} {...rest} className={className} />;
});

SelectItem.displayName = "SelectItem";

export const SelectItemText = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemText>,
  React.ComponentProps<typeof SelectPrimitive.ItemText>
>((props, ref) => {
  const { className, ...rest } = props;

  return <SelectPrimitive.ItemText ref={ref} {...rest} className={className} />;
});

SelectItemText.displayName = "SelectItemText";

export const SelectItemIndicator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemIndicator>,
  React.ComponentProps<typeof SelectPrimitive.ItemIndicator>
>((props, ref) => {
  const { className, ...rest } = props;

  return <SelectPrimitive.ItemIndicator ref={ref} {...rest} className={className} />;
});

SelectItemIndicator.displayName = "SelectItemIndicator";

export const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>
>((props, ref) => {
  const { className, ...rest } = props;

  return <SelectPrimitive.ScrollUpButton ref={ref} {...rest} className={className} />;
});

SelectScrollUpButton.displayName = "SelectScrollUpButton";

export const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>
>((props, ref) => {
  const { className, ...rest } = props;

  return <SelectPrimitive.ScrollDownButton ref={ref} {...rest} className={className} />;
});

SelectScrollDownButton.displayName = "SelectScrollDownButton";

export type SelectProps = SelectPrimitive.SelectProps;
export type SelectOptionProps = React.ComponentPropsWithoutRef<typeof SelectItem>;
