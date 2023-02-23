import { WithChildren } from "@infrastructure/types/helpers/with-children";
import { AllHTMLAttributes } from "react";
import { AsElementType } from "@infrastructure/types/helpers/as-element-type";

/* TODO: Remove omit size and find a better way to create generic attributes */
export type PrimitiveComponentAttributes<TElementType> = Omit<
  AllHTMLAttributes<TElementType>,
  "size" | "className" | "content" | "height" | "translate" | "color" | "width" | "cursor" | "as"
>;

export type PrimitiveComponent<TElementType> = PrimitiveComponentAttributes<TElementType> &
  WithChildren &
  AsElementType;
