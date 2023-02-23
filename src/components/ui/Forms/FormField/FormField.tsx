import {
  Controller,
  ControllerFieldState,
  ControllerProps,
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";
import React from "react";
import { Textarea } from "@components/ui/Forms/Textarea/Textarea";
import { Input } from "@components/ui/Forms/Input/Input";

type RenderFormFieldProps = {
  label?: React.ReactNode | string;
  as: React.ElementType;
  field: ControllerRenderProps;
  fieldState: ControllerFieldState;
  rules?: Omit<RegisterOptions<FieldValues, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  onValueChangeHandler?: (name: string, ...args: unknown[]) => void;
};

const RenderFormField: React.FC<RenderFormFieldProps> = ({
  as: Component,
  field,
  fieldState,
  rules,
  onValueChangeHandler,
  ...otherProps
}) => {
  switch (Component) {
    case Input:
      return (
        <Input
          required={!!rules?.required}
          id={field.name}
          {...(!fieldState.error && field.value && { valid: true })}
          {...field}
          {...otherProps}
          onChange={(value: React.FormEvent<HTMLInputElement>) => {
            field.onChange(value);
            onValueChangeHandler && onValueChangeHandler(field.name, value);
          }}
          {...(fieldState.error && { error: true, errorMessage: fieldState.error.message })}
        />
      );

    case Textarea:
      return (
        <Textarea
          required={!!rules?.required}
          id={field.name}
          {...(!fieldState.error && field.value && { valid: true })}
          {...field}
          {...otherProps}
          onChange={(value) => {
            field.onChange(value);
            onValueChangeHandler && onValueChangeHandler(field.name, value);
          }}
          {...(fieldState.error && { error: true, errorMessage: fieldState.error.message })}
        />
      );
  }

  return null;
};

export type FormFieldProps<T> = Partial<ControllerProps> &
  Omit<T, "label"> & {
    as?: React.ElementType<T>;
    onValueChangeHandler?: (name: string, ...args: unknown[]) => void;
    autoComplete?: string;
    label?: React.ReactNode | string;
    checkDirty?: boolean;
  };
const FormField = <T,>({
  as: Component,
  render,
  rules,
  shouldUnregister,
  name,
  defaultValue,
  ...otherProps
}: FormFieldProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name ?? ""}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      control={control}
      render={(data) =>
        render ? (
          <>{render(data)}</>
        ) : Component ? (
          <RenderFormField
            as={Component}
            field={data.field}
            fieldState={data.fieldState}
            rules={rules}
            {...otherProps}
          />
        ) : (
          <></>
        )
      }
    />
  );
};

export { FormField };
