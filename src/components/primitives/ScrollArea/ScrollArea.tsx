import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { WithChildren } from "@infrastructure/types/helpers/with-children";
import {
  scrollAreaCornerStyle,
  scrollAreaRootStyle,
  scrollAreaScrollbarStyle,
  scrollAreaThumbStyle,
  scrollAreaViewportStyle,
} from "@components/primitives/ScrollArea/scroll-area.css";

const ScrollArea: React.FC<WithChildren> = ({ children }) => {
  return (
    <ScrollAreaPrimitive.Root className={scrollAreaRootStyle}>
      <ScrollAreaPrimitive.Viewport className={scrollAreaViewportStyle}>{children}</ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar className={scrollAreaScrollbarStyle}>
        <ScrollAreaPrimitive.Thumb className={scrollAreaThumbStyle} />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Scrollbar className={scrollAreaScrollbarStyle}>
        <ScrollAreaPrimitive.Thumb className={scrollAreaThumbStyle} />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner className={scrollAreaCornerStyle} />
    </ScrollAreaPrimitive.Root>
  );
};

export { ScrollArea };
