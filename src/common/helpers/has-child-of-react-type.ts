import { Children, ElementType, isValidElement, ReactNode } from "react";

export const hasChildOfReactType = (children: ReactNode, type: ElementType) => {
  let hasChildOfType = false;

  Children.forEach(children, (child) => {
    if (hasChildOfType) return;

    if (isValidElement(child) && child.type === type) {
      hasChildOfType = true;
    }
  });

  return hasChildOfType;
};
